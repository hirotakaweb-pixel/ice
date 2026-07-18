/* 店舗情報はこのファイルだけを編集すれば一覧へ反映されます。 */
window.SHOPS = [
  {
    id: "omame", rank: 2, name: "おまめよしこのかき氷", area: "福岡市内", city: "福岡市博多区美野島",
    description: "果物にハーブ、味噌、カカオ、シソなどを重ねる、料理のように独創的なかき氷。",
    recommendation: "ひと口ごとに味が変化する構成。王道とは違う一杯を探している人へ。",
    caution: "完全予約制の場合があります。現住所・予約方法・営業日はInstagramで確認を。",
    tags: ["創作系", "予約制", "通年営業"],
    officialUrl: "", instagramUrl: "https://www.instagram.com/omame_kakigori/", mapQuery: "おまめよしこのかき氷 福岡市博多区美野島", visual: "herb"
  },
  {
    id: "ento-kori", rank: 3, name: "縁と氷", area: "福岡市内", city: "福岡市中央区白金",
    description: "和素材や旅先で出会った味を、繊細で上品な一杯に仕立てる小さな専門店。",
    recommendation: "季節の素材と端正な盛り付け。本格的な甘味をゆっくり味わいたい日に。",
    caution: "不定期営業・予約優先。営業カレンダーと予約方法をInstagramで確認してください。",
    tags: ["和風", "創作系", "不定期営業"],
    officialUrl: "", instagramUrl: "https://www.instagram.com/en_to_kori/", mapQuery: "縁と氷 福岡市中央区白金1-10-5", visual: "matcha"
  },
  {
    id: "oishii-koori", rank: 4, name: "おいしい氷屋 天神南店", area: "福岡市内", city: "福岡市中央区渡辺通",
    description: "九州製氷直営。純度99.9％の『博多純氷』を使った、ふわりと口溶けのよい専門店。",
    recommendation: "あまおう、抹茶、きな粉など、氷のおいしさが分かる王道メニューが充実。",
    caution: "予約不可。混雑を避けるなら早めの来店を。水曜定休など最新情報は公式サイトで確認を。",
    tags: ["王道", "通年営業", "天神"],
    officialUrl: "https://oishiikoori.com/", instagramUrl: "https://www.instagram.com/oishiikoori/", mapQuery: "おいしい氷屋 天神南店", visual: "pure"
  },
  {
    id: "den", name: "白金氷屋 でん", area: "福岡市内", city: "福岡市中央区白金",
    description: "果物系から意外な素材まで、遊び心のあるメニューを展開する創作かき氷店。",
    recommendation: "ほかでは見かけない組み合わせや、ボリュームのある一杯に出会えます。",
    caution: "季節営業や営業時間変更の可能性があります。来店前にInstagramを確認してください。",
    tags: ["創作系", "写真映え", "季節営業"],
    officialUrl: "", instagramUrl: "https://www.instagram.com/kooriya_den/", mapQuery: "白金氷屋でん 福岡市中央区白金2-15-18", visual: "berry"
  },
  {
    id: "tsumamu-okushibu", name: "博多炉端つまむ。春吉店 × 茶房オクノシブヤ", area: "福岡市内", city: "福岡市中央区春吉",
    description: "東京・渋谷の人気店監修メニューを福岡で楽しめる、2026年夏スタートのコラボ。",
    recommendation: "抹茶や季節の果実を重ねた華やかな創作氷。話題の一杯を試したい人へ。",
    caution: "昼限定・提供期間やメニュー変更の可能性があります。店舗の最新投稿を確認してください。",
    tags: ["創作系", "写真映え", "期間限定"],
    officialUrl: "https://tsumamutenjin.owst.jp/", instagramUrl: "https://www.instagram.com/hakatarobata_tumamu/", mapQuery: "博多炉端つまむ 春吉店", visual: "mango"
  },
  {
    id: "tannal", rank: 5, name: "いちごや cafe TANNAL 糸島本店", area: "糸島", city: "福岡県糸島市志摩吉田",
    description: "糸島のあまおう農園・磯本農園が営む、いちご好きのための農園直営カフェ。",
    recommendation: "自家製コンポートやシロップまで、あまおうを余すところなく楽しめます。",
    caution: "収穫期や季節により提供メニューが変わります。かき氷の提供状況を事前に確認してください。",
    tags: ["いちご", "フルーツ系", "ドライブ向け"],
    officialUrl: "https://isomoto-nouen.com/cafetannal", instagramUrl: "https://www.instagram.com/cafe_tannal_itoshima/", mapQuery: "いちごや cafe TANNAL 糸島本店", visual: "strawberry"
  },
  {
    id: "tanabata", name: "tanabata cafe", area: "福岡県南部", city: "福岡県柳川市坂本町",
    description: "果物をたっぷり生かした、華やかな進化系かき氷『氷ノ果実』を楽しめるカフェ。",
    recommendation: "柳川観光やうなぎランチと組み合わせて、夏のドライブコースに。",
    caution: "かき氷は期間限定・間借り営業の場合があります。営業日と提供場所を公式情報で確認してください。",
    tags: ["フルーツ系", "写真映え", "ドライブ向け"],
    officialUrl: "https://www.newem.jp/brands/tanabata-cafe/", instagramUrl: "https://www.instagram.com/tanabata_bakery_cafe/", mapQuery: "tanabata cafe 福岡県柳川市坂本町4-2", visual: "peach"
  },
  {
    id: "kajitsudo", name: "果実堂", area: "北九州", city: "北九州市門司区栄町",
    description: "製氷会社が手がける、自社製の氷と濃厚な果実ソースが主役のスイーツかき氷。",
    recommendation: "あまおう、白桃、マンゴーなど果実感たっぷり。門司港散策の休憩にぴったり。",
    caution: "例年5月〜10月ごろの季節営業・不定休。公式サイトで当年の営業情報を確認してください。",
    tags: ["フルーツ系", "季節営業", "門司港"],
    officialUrl: "https://www.mojireito.co.jp/kajitsudo/shop_info/", instagramUrl: "", mapQuery: "果実堂 北九州市門司区栄町6-15", visual: "fruit"
  },
  {
    id: "takara", name: "こおりや たから 小倉本店", area: "北九州", city: "北九州市小倉北区魚町",
    description: "ふわふわのミルク氷に果物やスイーツを重ねる、満足感のあるボリューム系。",
    recommendation: "溶けても味が薄まりにくいミルク氷。豪華な見た目で写真映えも抜群です。",
    caution: "不定休・混雑時は待ち時間が発生します。営業日や予約可否はInstagramで確認を。",
    tags: ["ミルク氷", "写真映え", "ボリューム"],
    officialUrl: "", instagramUrl: "https://www.instagram.com/kooriya_takara/", mapQuery: "こおりやたから 北九州市小倉北区魚町1-2-23", visual: "milk"
  },
  {
    id: "shironeko", name: "若松かき氷 白ねこ", area: "北九州", city: "北九州市若松区響町",
    description: "白ねこの後ろ姿のような、ふわふわミルク氷と旬の果物が人気の季節店。",
    recommendation: "まろやかな味わい。若松の海沿いドライブや産直市場での買い物と一緒に。",
    caution: "例年春〜秋の季節営業。材料がなくなり次第終了するため公式SNSを確認してください。",
    tags: ["ミルク氷", "季節営業", "ドライブ向け"],
    officialUrl: "https://shironeko.shopinfo.jp/", instagramUrl: "https://www.instagram.com/shironekogram/", mapQuery: "若松かき氷 白ねこ 北九州市若松区響町3-1-34", visual: "cat"
  },
  {
    id: "marumo", rank: 1, featured: true, name: "甘味屋まるも", area: "佐賀", city: "佐賀県神埼市神埼町",
    description: "佐賀・九州産素材にこだわった和風かき氷と、自分で焼いて味わう団子の甘味処。",
    recommendation: "佐賀いちご、有田焼の器、ステンドグラスの店内まで、目的地にしたくなる体験。",
    caution: "数量限定・ワンオーダー制。売り切れや季節メニューは公式サイトで確認してください。",
    tags: ["和風", "本命店", "数量限定", "ドライブ向け"],
    officialUrl: "https://maneidou.co.jp/%E7%94%98%E5%91%B3%E5%B1%8B%E3%81%BE%E3%82%8B%E3%82%82/", instagramUrl: "https://www.instagram.com/kanmiya_marumo/", mapQuery: "甘味屋まるも 佐賀県神埼市神埼町神埼604", visual: "anko"
  },
  {
    id: "jinroku", name: "呼子 甚六果実店", area: "佐賀", city: "佐賀県唐津市呼子町",
    description: "呼子・唐津周辺で採れる旬の果実を主役に、驚きのある一杯を届ける果実店。",
    recommendation: "呼子朝市やイカ、唐津観光、海沿いドライブと一緒に楽しめる新しい立ち寄り先。",
    caution: "季節メニュー・営業日はInstagramで確認してください。繁忙期は売り切れにも注意。",
    tags: ["フルーツ系", "写真映え", "ドライブ向け"],
    officialUrl: "", instagramUrl: "https://www.instagram.com/jinrokukajitsuten/", mapQuery: "甚六果実店 佐賀県唐津市呼子町呼子3766", visual: "citrus"
  }
];
