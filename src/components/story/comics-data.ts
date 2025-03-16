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
      title: "強みポイント",
      image: "https://ext.same-assets.com/3402249243/4226118848.jpeg",
      category: "1koma",
      date: "2020-09-14",
      description: "レオニードのみんなが練習している様子。"
    },
    {
      id: "1k-2",
      title: "猫好き",
      image: "https://ext.same-assets.com/1146762295/647772084.jpeg",
      category: "1koma",
      date: "2020-09-15",
      description: "猫が大好きな連。"
    },
    {
      id: "1k-3",
      title: "獣のオーラ",
      image: "https://ext.same-assets.com/3864475064/3503511769.jpeg",
      category: "1koma",
      date: "2020-09-16",
      description: "冷静で静かな雰囲気のルカと冬弥。"
    },
    {
      id: "1k-4",
      title: "クールタイプとギャルタイプ？",
      image: "https://ext.same-assets.com/3118683609/1119059220.jpeg",
      category: "1koma",
      date: "2020-09-17",
      description: "クールな性格の類と明るいギャルの安。"
    },
    {
      id: "1k-5",
      title: "練習への情熱",
      image: "https://ext.same-assets.com/1691268620/1928087806.jpeg",
      category: "1koma",
      date: "2020-09-18",
      description: "一生懸命練習する未歩。"
    },
    {
      id: "1k-6",
      title: "最強のコンビ",
      image: "https://ext.same-assets.com/3540486434/4078986204.jpeg",
      category: "1koma",
      date: "2020-09-21",
      description: "いつも一緒にいる杏とコハネ。"
    },
    {
      id: "1k-7",
      title: "フェニックス戦隊ワンダレンジャー！",
      image: "https://ext.same-assets.com/3978718201/867884907.jpeg",
      category: "1koma",
      date: "2020-09-22",
      description: "フェニックスワンダーランドのショーに出演する司たち。"
    },
    {
      id: "1k-8",
      title: "25時、ナイトコードで。",
      image: "https://ext.same-assets.com/23902898/3049269324.jpeg",
      category: "1koma",
      date: "2020-09-23",
      description: "音楽サイトで活動する謎のクリエイターグループ。"
    }
  ];
  
  // 4コマ漫画
  export const fourKomaComics: ComicItem[] = [
    {
      id: "4k-1",
      title: "はじめての対バン",
      image: "https://ext.same-assets.com/4130368258/673992525.jpeg",
      category: "4koma",
      date: "2020-09-29",
      description: "初めて対バンライブに参加するレオニードの面々の様子。"
    },
    {
      id: "4k-2",
      title: "隣の部屋",
      image: "https://ext.same-assets.com/3548742397/1310839718.jpeg",
      category: "4koma",
      date: "2020-10-06",
      description: "練習場所に向かう途中の出来事。"
    },
    {
      id: "4k-3",
      title: "ショッピングモール",
      image: "https://ext.same-assets.com/4278824395/1758291470.jpeg",
      category: "4koma",
      date: "2020-10-13",
      description: "ショッピングモールでの一コマ。"
    },
    {
      id: "4k-4",
      title: "ファンの対応",
      image: "https://ext.same-assets.com/2155456275/1336094245.jpeg",
      category: "4koma",
      date: "2020-10-20",
      description: "ファンに囲まれた時の対応について。"
    }
  ];
  
  // 特別企画
  export const specialComics: ComicItem[] = [
    {
      id: "sp-1",
      title: "特別企画：歌声について",
      image: "https://ext.same-assets.com/3023081559/3273205373.jpeg",
      category: "special",
      date: "2020-12-25",
      description: "プロジェクトセカイの歌声についての特別企画漫画。"
    },
    {
      id: "sp-2",
      title: "年末年始特別企画",
      image: "https://ext.same-assets.com/1604756350/2002833575.jpeg",
      category: "special",
      date: "2020-12-31",
      description: "年末年始を過ごすキャラクター達の様子。"
    },
    {
      id: "sp-3",
      title: "コラボイベント特別漫画",
      image: "https://ext.same-assets.com/4132885986/3014114330.jpeg",
      category: "special",
      date: "2021-02-14",
      description: "バレンタインデーコラボイベント特別漫画。"
    }
  ];
  
  // キャラクター別
  export const characterComics: ComicItem[] = [
    {
      id: "ch-1",
      title: "星乃一歌のリーダー論",
      image: "https://ext.same-assets.com/2277725219/2428469233.jpeg",
      category: "character",
      date: "2021-01-18",
      description: "リーダーとしての責任と葛藤を抱える一歌の物語。"
    },
    {
      id: "ch-2",
      title: "天馬咲希の元気の秘密",
      image: "https://ext.same-assets.com/1330619813/2528357793.jpeg",
      category: "character",
      date: "2021-01-25",
      description: "いつも元気いっぱいの咲希がどうやってモチベーションを保っているのか。"
    },
    {
      id: "ch-3",
      title: "日野森志歩の音楽観",
      image: "https://ext.same-assets.com/3018296864/2113241677.jpeg",
      category: "character",
      date: "2021-02-01",
      description: "志歩の音楽に対する想いと葛藤。"
    },
    {
      id: "ch-4",
      title: "暁山瑞希のアイドル道",
      image: "https://ext.same-assets.com/1780575713/1958583958.jpeg",
      category: "character",
      date: "2021-02-08",
      description: "瑞希のアイドルとしての経験と想い。"
    }
  ];
  
  // すべての漫画データをカテゴリーごとにまとめる
  export const allComics = {
    "1koma": oneKomaComics,
    "4koma": fourKomaComics,
    "special": specialComics,
    "character": characterComics
  };