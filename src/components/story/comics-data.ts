export interface ComicItem {
    id: string;
    title: string;
    image: string;
    category: "1koma" | "4koma" | "special" | "character";
    date: string;
    description?: string;
  }
  
  // 1コマ漫画
  export const oneKomaComics: ComicItem[] = [
    {
      id: "1k-1",
      title: "取り柄",
      image: "/1koma1-jp.png",
      category: "1koma",
      date: "2020-09-14",
      description: "レオニードのみんなが練習している様子。"
    },
    {
      id: "1k-2",
      title: "猫好き",
      image: "/1koma2-jp.png",
      category: "1koma",
      date: "2020-09-15",
      description: "猫が大好きな連。"
    },
    {
      id: "1k-3",
      title: "獣のオーラ",
      image: "/1koma3-jp.png",
      category: "1koma",
      date: "2020-09-16",
      description: "冷静で静かな雰囲気のルカと冬弥。"
    },
    {
      id: "1k-4",
      title: "クール系とギャル系？",
      image: "/1koma4-jp.png",
      category: "1koma",
      date: "2020-09-17",
      description: "クールな性格の類と明るいギャルの安。"
    },
    {
      id: "1k-5",
      title: "練習熱心",
      image: "/1koma5-jp.png",
      category: "1koma",
      date: "2020-09-18",
      description: "一生懸命練習する未歩。"
    },
    {
      id: "1k-6",
      title: "最高のコンビ！",
      image: "/1koma6-jp.png",
      category: "1koma",
      date: "2020-09-21",
      description: "いつも一緒にいる杏とコハネ。"
    },
    {
      id: "1k-7",
      title: "不死鳥戦隊ワンダレンジャー！",
      image: "/1koma7-jp.png",
      category: "1koma",
      date: "2020-09-22",
      description: "フェニックスワンダーランドのショーに出演する司たち。"
    },
    {
      id: "1k-8",
      title: "ニーゴのナイトコード",
      image: "/1koma8-jp.png",
      category: "1koma",
      date: "2020-09-23",
      description: "音楽サイトで活動する謎のクリエイターグループ。"
    },
    {
      id: "1k-9",
      title: "バーチャル・シンガーとは",
      image: "/1koma9-jp.png",
      category: "1koma",
      date: "2020-08-22",
      description: "フェニックスワンダーランドのショーに出演する司たち。"
    },
    {
      id: "1k-10",
      title: "教室のセカイ",
      image: "/1koma10-jp.png",
      category: "1koma",
      date: "2020-08-22",
      description: "フェニックスワンダーランドのショーに出演する司たち。"
    },
    {
      id: "1k-11",
      title: "ステージのセカイ",
      image: "/1koma11-jp.png",
      category: "1koma",
      date: "2020-08-22",
      description: "フェニックスワンダーランドのショーに出演する司たち。"
    },
    {
      id: "1k-12",
      title: "ストリートのセカイ",
      image: "/1koma12-jp.png",
      category: "1koma",
      date: "2020-08-22",
      description: "フェニックスワンダーランドのショーに出演する司たち。"
    }
  ];
  
  // 4コマ漫画
  export const fourKomaComics: ComicItem[] = [
    {
      id: "4k-1",
      title: "ようこそセカイへ！",
      image: "/4koma1-jp.jpg",
      category: "4koma",
      date: "2020-09-29",
      description: "初めて対バンライブに参加するレオニードの面々の様子。"
    },
    {
      id: "4k-2",
      title: "レオニの温度",
      image: "/4koma2-jp.jpg",
      category: "4koma",
      date: "2020-8-30",
      description: "練習場所に向かう途中の出来事。"
    },
    {
      id: "4k-3",
      title: "先生たち",
      image: "/4koma3-jp.jpg",
      category: "4koma",
      date: "2020-8-30",
      description: "ショッピングモールでの一コマ。"
    },
    {
      id: "4k-4",
      title: "常連感",
      image: "/4koma4-jp.jpg",
      category: "4koma",
      date: "2020-10-20",
      description: "ファンに囲まれた時の対応について。"
    },
    {
      id: "4k-5",
      title: "人気者の条件",
      image: "/4koma5-jp.jpg",
      category: "4koma",
      date: "2020-10-20",
      description: "ファンに囲まれた時の対応について。"
    },
    {
      id: "4k-6",
      title: "怒髪天の歌",
      image: "/4koma6-jp.jpg",
      category: "4koma",
      date: "2020-10-20",
      description: "ファンに囲まれた時の対応について。"
    }
  ];
  
  // Promotional
  export const specialComics: ComicItem[] = [
    {
      id: "Ayasakacomic1",
      title: "特別企画：歌声について",
      image: "/Ayasakacomic1.jpg",
      category: "special",
      date: "2020-22-12",
      description: "プロジェクトセカイの歌声についての特別企画漫画。"
    },
    {
      id: "Omucomic1",
      title: "Omucomic1",
      image: "/Omucomic1.jpg",
      category: "special",
      date: "2020-12-31",
      description: "年末年始を過ごすキャラクター達の様子。"
    },
    {
      id: "Omucomic2",
      title: "Omucomic2",
      image: "/Omucomic2.jpg",
      category: "special",
      date: "2021-02-14",
      description: "バレンタインデーコラボイベント特別漫画。"
    },
    {
      id: "Tomoecomic",
      title: "Tomoecomic",
      image: "/Tomoecomic.jpg",
      category: "4koma",
      date: "2020-10-20",
      description: "ファンに囲まれた時の対応について。"
    }
  ];
  
  // キャラクター別
  // export const characterComics: ComicItem[] = [
  //   {
  //     id: "ch-1",
  //     title: "星乃一歌のリーダー論",
  //     image: "https://ext.same-assets.com/2277725219/2428469233.jpeg",
  //     category: "character",
  //     date: "2021-01-18",
  //     description: "リーダーとしての責任と葛藤を抱える一歌の物語。"
  //   },
  //   {
  //     id: "ch-2",
  //     title: "天馬咲希の元気の秘密",
  //     image: "https://ext.same-assets.com/1330619813/2528357793.jpeg",
  //     category: "character",
  //     date: "2021-01-25",
  //     description: "いつも元気いっぱいの咲希がどうやってモチベーションを保っているのか。"
  //   },
  //   {
  //     id: "ch-3",
  //     title: "日野森志歩の音楽観",
  //     image: "https://ext.same-assets.com/3018296864/2113241677.jpeg",
  //     category: "character",
  //     date: "2021-02-01",
  //     description: "志歩の音楽に対する想いと葛藤。"
  //   },
  //   {
  //     id: "ch-4",
  //     title: "暁山瑞希のアイドル道",
  //     image: "https://ext.same-assets.com/1780575713/1958583958.jpeg",
  //     category: "character",
  //     date: "2021-02-08",
  //     description: "瑞希のアイドルとしての経験と想い。"
  //   }
  // ];
  
  // すべての漫画データをカテゴリーごとにまとめる
  export const allComics = {
    "1koma": oneKomaComics,
    "4koma": fourKomaComics,
    "special": specialComics,
    // "character": characterComics
  };