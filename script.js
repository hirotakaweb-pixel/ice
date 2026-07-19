(() => {
  "use strict";

  const shops = Array.isArray(window.SHOPS) ? window.SHOPS : [];
  const areaOptions = ["すべて", "福岡市内", "糸島", "福岡県南部", "北九州", "佐賀"];
  const favoriteKey = "fukuoka-kakigori-favorites-v1";
  const state = { area: "すべて", query: "", favoritesOnly: false };
  let favorites = loadFavorites();

  const elements = {
    list: document.querySelector("#shop-list"),
    topFive: document.querySelector("#top-five"),
    filters: document.querySelector("#area-filters"),
    search: document.querySelector("#search-input"),
    favoriteFilter: document.querySelector("#favorite-filter"),
    status: document.querySelector("#results-status"),
    empty: document.querySelector("#empty-state"),
    reset: document.querySelector("#reset-button"),
    share: document.querySelector("#share-button"),
    print: document.querySelector("#print-button"),
    toTop: document.querySelector("#to-top"),
    toast: document.querySelector("#toast")
  };

  function loadFavorites() {
    try {
      const stored = JSON.parse(localStorage.getItem(favoriteKey) || "[]");
      return new Set(Array.isArray(stored) ? stored : []);
    } catch (_) {
      return new Set();
    }
  }

  function saveFavorites() {
    try {
      localStorage.setItem(favoriteKey, JSON.stringify([...favorites]));
    } catch (_) {
      showToast("このブラウザではお気に入りを保存できませんでした");
    }
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, character => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
    })[character]);
  }

  function externalLink(url, label, className = "") {
    if (!url) return "";
    const icon = className === "instagram"
      ? '<span class="link-icon instagram-icon" aria-hidden="true"></span>'
      : className === "map"
        ? '<span class="link-icon map-icon" aria-hidden="true"></span>'
        : "";
    return `<a class="link-button ${className}" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${icon}<span>${escapeHtml(label)} ↗</span></a>`;
  }

  function mapUrl(shop) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.mapQuery || `${shop.name} ${shop.city}`)}`;
  }

  function cardTemplate(shop) {
    const selected = favorites.has(shop.id);
    const tags = shop.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join("");
    return `
      <article class="shop-card${shop.featured ? " featured" : ""}" data-id="${escapeHtml(shop.id)}" data-visual="${escapeHtml(shop.visual)}">
        <div class="card-visual">
          <img class="card-photo" src="assets/images/shop-${escapeHtml(shop.id)}.webp" alt="${escapeHtml(shop.name)}のおすすめかき氷をイメージしたオリジナル画像" width="1200" height="675" loading="lazy" decoding="async">
          ${shop.featured ? '<span class="featured-badge">行ってみたい本命店</span>' : ""}
          <span class="concept-label">おすすめイメージ</span>
          <button class="heart-button" type="button" data-favorite="${escapeHtml(shop.id)}" aria-label="${escapeHtml(shop.name)}を行きたい店に${selected ? "登録解除" : "登録"}" aria-pressed="${selected}">${selected ? "♥" : "♡"}</button>
        </div>
        <div class="card-body">
          <p class="card-area">${escapeHtml(shop.area)}</p>
          <h3>${escapeHtml(shop.name)}</h3>
          <p class="city">${escapeHtml(shop.city)}</p>
          <p class="description">${escapeHtml(shop.description)}</p>
          <p class="recommend"><b>おすすめ</b><br>${escapeHtml(shop.recommendation)}</p>
          <p class="caution">※ ${escapeHtml(shop.caution)}</p>
          <div class="tags" aria-label="ジャンル">${tags}</div>
          <div class="card-links">
            ${externalLink(shop.officialUrl, "公式サイト")}
            ${externalLink(shop.instagramUrl, "Instagram", "instagram")}
            ${externalLink(mapUrl(shop), "Googleマップ", "map")}
          </div>
        </div>
      </article>`;
  }

  function renderTopFive() {
    const ranked = shops.filter(shop => shop.rank).sort((a, b) => a.rank - b.rank);
    elements.topFive.innerHTML = ranked.map(shop => `
      <article class="pick">
        <span class="pick-rank"><b>${shop.rank}</b> PICK</span>
        <h3>${escapeHtml(shop.name)}</h3>
        <p>${escapeHtml(shop.city)}</p>
        <a class="pick-link" href="#shop-${escapeHtml(shop.id)}" data-jump="${escapeHtml(shop.id)}" aria-label="${escapeHtml(shop.name)}の詳細へ">→</a>
      </article>`).join("");
  }

  function renderFilters() {
    elements.filters.innerHTML = areaOptions.map(area => `
      <button class="filter-button" type="button" data-area="${escapeHtml(area)}" aria-pressed="${area === state.area}">${escapeHtml(area)}</button>`).join("");
  }

  function normalizedText(shop) {
    return [shop.name, shop.area, shop.city, shop.description, shop.recommendation, ...shop.tags].join(" ").toLocaleLowerCase("ja");
  }

  function filteredShops() {
    const query = state.query.trim().toLocaleLowerCase("ja");
    return shops.filter(shop => {
      const areaMatch = state.area === "すべて" || shop.area === state.area;
      const queryMatch = !query || normalizedText(shop).includes(query);
      const favoriteMatch = !state.favoritesOnly || favorites.has(shop.id);
      return areaMatch && queryMatch && favoriteMatch;
    });
  }

  function renderShops() {
    const visible = filteredShops();
    elements.list.innerHTML = visible.map(cardTemplate).join("");
    elements.list.querySelectorAll(".shop-card").forEach(card => { card.id = `shop-${card.dataset.id}`; });
    elements.status.textContent = `${visible.length}店を表示中`;
    elements.empty.hidden = visible.length !== 0;
    elements.list.hidden = visible.length === 0;
  }

  function toggleFavorite(id) {
    const shop = shops.find(item => item.id === id);
    if (!shop) return;
    const isAdding = !favorites.has(id);
    isAdding ? favorites.add(id) : favorites.delete(id);
    saveFavorites();
    renderShops();
    showToast(isAdding ? `「${shop.name}」を行きたい店に追加しました` : `「${shop.name}」を行きたい店から外しました`);
  }

  function resetFilters() {
    state.area = "すべて";
    state.query = "";
    state.favoritesOnly = false;
    elements.search.value = "";
    elements.favoriteFilter.setAttribute("aria-pressed", "false");
    renderFilters();
    renderShops();
  }

  function showToast(message) {
    elements.toast.textContent = message;
    elements.toast.classList.add("show");
    window.clearTimeout(showToast.timeout);
    showToast.timeout = window.setTimeout(() => elements.toast.classList.remove("show"), 2600);
  }

  async function sharePage() {
    const data = { title: document.title, text: "福岡・近隣のおすすめかき氷店ガイド", url: location.href };
    try {
      if (navigator.share) {
        await navigator.share(data);
      } else if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(location.href);
        showToast("ページURLをコピーしました");
      } else {
        const helper = document.createElement("textarea");
        helper.value = location.href;
        helper.setAttribute("readonly", "");
        helper.style.position = "fixed";
        helper.style.opacity = "0";
        document.body.appendChild(helper);
        helper.select();
        document.execCommand("copy");
        helper.remove();
        showToast("ページURLをコピーしました");
      }
    } catch (error) {
      if (error && error.name !== "AbortError") showToast("共有を完了できませんでした");
    }
  }

  elements.filters.addEventListener("click", event => {
    const button = event.target.closest("[data-area]");
    if (!button) return;
    state.area = button.dataset.area;
    renderFilters();
    renderShops();
  });
  elements.search.addEventListener("input", event => { state.query = event.target.value; renderShops(); });
  elements.favoriteFilter.addEventListener("click", () => {
    state.favoritesOnly = !state.favoritesOnly;
    elements.favoriteFilter.setAttribute("aria-pressed", String(state.favoritesOnly));
    elements.favoriteFilter.querySelector("span").textContent = state.favoritesOnly ? "♥" : "♡";
    renderShops();
  });
  elements.list.addEventListener("click", event => {
    const button = event.target.closest("[data-favorite]");
    if (button) toggleFavorite(button.dataset.favorite);
  });
  elements.topFive.addEventListener("click", event => {
    const link = event.target.closest("[data-jump]");
    if (!link) return;
    event.preventDefault();
    resetFilters();
    requestAnimationFrame(() => document.querySelector(`#shop-${CSS.escape(link.dataset.jump)}`)?.scrollIntoView({ behavior: "smooth", block: "center" }));
  });
  elements.reset.addEventListener("click", resetFilters);
  elements.share.addEventListener("click", sharePage);
  elements.print.addEventListener("click", () => window.print());
  elements.toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", () => elements.toTop.classList.toggle("visible", window.scrollY > 600), { passive: true });

  renderTopFive();
  renderFilters();
  renderShops();
})();
