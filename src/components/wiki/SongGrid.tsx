"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getIconForUnit, getDifficultyColor } from "@/lib/songUtils";

// Types
interface SongDifficulty {
  easy: number;
  normal: number;
  hard: number;
  expert: number;
  master: number;
}

interface Song {
  id: string;
  title: string;
  titleJp: string;
  artist: string;
  unit: string;
  coverImage: string;
  releaseDate: string;
  difficulty: SongDifficulty;
  categories: string[];
}

interface SongGridProps {
  activeFilter: string;
  searchQuery: string;
}

// Sample song data
const sampleSongs: Song[] = [
  {
    id: "Gimme×Gimme",
    title: "Gimme×Gimme",
    titleJp: "Gimme×Gimme",
    artist: "q*Left / 八王子P / Giga",
    unit: "virtual-singer",
    coverImage: "/Gimme.jpg",
    releaseDate: "2020-09-30",
    difficulty: {
      easy: 6,
      normal: 12,
      hard: 17,
      expert: 24,
      master: 28
    },
    categories: ["original", "virtual-singer"]
  },
  {
    id: "ジャンキーナイトタウンオーケストラ",
    title: "ジャンキーナイトタウンオーケストラ",
    titleJp: "ジャンキーナイトタウンオーケストラ",
    artist: "すりぃ",
    unit: "virtual-singer",
    coverImage: "/すりぃ.webp",
    releaseDate: "2020-09-30",
    difficulty: {
      easy: 6,
      normal: 11,
      hard: 16,
      expert: 22,
      master: 26
    },
    categories: ["original", "virtual-singer"]
  },
  {
    id: "Tell Your World",
    title: "Tell Your World",
    titleJp: "Tell Your World",
    artist: "kz（livetune）",
    unit: "virtual-singer",
    coverImage: "/World.jpg",
    releaseDate: "2020-09-30",
    difficulty: {
      easy: 7,
      normal: 13,
      hard: 18,
      expert: 25,
      master: 30
    },
    categories: ["original", "virtual-singer"]
  },
  {
    id: "ready-steady",
    title: "Ready Steady",
    titleJp: "Ready Steady",
    artist: "Giga",
    unit: "vivid-bad-squad",
    coverImage: "https://i.scdn.co/image/ab67616d0000b27368d83d54ca3c5f8619e93662",
    releaseDate: "2020-09-30",
    difficulty: {
      easy: 6,
      normal: 12,
      hard: 17,
      expert: 25,
      master: 29
    },
    categories: ["commissioned", "vivid-bad-squad"]
  },
  {
    id: "noushou-sakuretsu-boy",
    title: "Noushou Sakuretsu Boy",
    titleJp: "脳漿炸裂ガール",
    artist: "rerulili",
    unit: "wonderlands-showtime",
    coverImage: "https://i.scdn.co/image/ab67616d0000b273aa7e3c3ea0a6752ccbf0e2e1",
    releaseDate: "2020-09-30",
    difficulty: {
      easy: 7,
      normal: 14,
      hard: 19,
      expert: 27,
      master: 32
    },
    categories: ["cover", "wonderlands-showtime"]
  },
  {
    id: "hated-by-life",
    title: "Hated by Life Itself",
    titleJp: "命に嫌われている",
    artist: "Kanzaki Iori",
    unit: "nightcord",
    coverImage: "https://i.scdn.co/image/ab67616d0000b273bceaba6c6e4a76855767320f",
    releaseDate: "2020-09-30",
    difficulty: {
      easy: 5,
      normal: 11,
      hard: 17,
      expert: 23,
      master: 28
    },
    categories: ["cover", "nightcord"]
  },
  {
    id: "teo",
    title: "Teo",
    titleJp: "テオ",
    artist: "Omoi",
    unit: "more-more-jump",
    coverImage: "https://i.scdn.co/image/ab67616d0000b2732d3b9aee84d937da5f8a5a9d",
    releaseDate: "2020-10-15",
    difficulty: {
      easy: 7,
      normal: 13,
      hard: 18,
      expert: 25,
      master: 30
    },
    categories: ["cover", "more-more-jump"]
  },
  {
    id: "bring-it-on",
    title: "Bring It On",
    titleJp: "Bring It On",
    artist: "Giga & KIRA",
    unit: "vivid-bad-squad",
    coverImage: "https://i.scdn.co/image/ab67616d0000b273d77eabac4d9b748a6b74a0f6",
    releaseDate: "2020-10-20",
    difficulty: {
      easy: 7,
      normal: 14,
      hard: 20,
      expert: 27,
      master: 31
    },
    categories: ["commissioned", "vivid-bad-squad"]
  },
  {
    id: "gimme-gimme",
    title: "Gimme×Gimme",
    titleJp: "Gimme×Gimme",
    artist: "q*Left & Giga",
    unit: "virtual-singer",
    coverImage: "https://i.scdn.co/image/ab67616d0000b273bd05c44ffd67858c887cb8da",
    releaseDate: "2020-11-01",
    difficulty: {
      easy: 8,
      normal: 14,
      hard: 19,
      expert: 26,
      master: 31
    },
    categories: ["original", "virtual-singer"]
  },
  {
    id: "king",
    title: "KING",
    titleJp: "KING",
    artist: "Kanaria",
    unit: "leo-need",
    coverImage: "https://i.scdn.co/image/ab67616d0000b273c47286d54a1c15064bbe6de2",
    releaseDate: "2020-11-10",
    difficulty: {
      easy: 8,
      normal: 15,
      hard: 21,
      expert: 27,
      master: 31
    },
    categories: ["cover", "leo-need"]
  },
  {
    id: "as-you-like-it",
    title: "As You Like It",
    titleJp: "お気に召すまま",
    artist: "Eve",
    unit: "nightcord",
    coverImage: "https://i.scdn.co/image/ab67616d0000b2731da86963f28c940999a5e724",
    releaseDate: "2020-11-20",
    difficulty: {
      easy: 6,
      normal: 12,
      hard: 18,
      expert: 24,
      master: 29
    },
    categories: ["cover", "nightcord"]
  },
  {
    id: "dance-robot-dance",
    title: "Dance Robot Dance",
    titleJp: "ダンスロボットダンス",
    artist: "Nayutalien",
    unit: "wonderlands-showtime",
    coverImage: "https://i.scdn.co/image/ab67616d0000b273bc9ed02e54b33cc3a9c6a9a2",
    releaseDate: "2020-12-01",
    difficulty: {
      easy: 7,
      normal: 14,
      hard: 20,
      expert: 26,
      master: 30
    },
    categories: ["cover", "wonderlands-showtime"]
  },
  {
    id: "more-jump-more",
    title: "More! Jump! More!",
    titleJp: "More! Jump! More!",
    artist: "Natori Kanako",
    unit: "more-more-jump",
    coverImage: "https://i.scdn.co/image/ab67616d0000b2735bb9aaf84c5d6ca9f2921fd6",
    releaseDate: "2020-12-10",
    difficulty: {
      easy: 6,
      normal: 12,
      hard: 17,
      expert: 23,
      master: 27
    },
    categories: ["commissioned", "more-more-jump"]
  },
  {
    id: "melty-land-nightmare",
    title: "Melty Land Nightmare",
    titleJp: "メルティランドナイトメア",
    artist: "Harumaki Gohan",
    unit: "wonderlands-showtime",
    coverImage: "https://i.scdn.co/image/ab67616d0000b2736c02ffb1fd4dedaaa7137abc",
    releaseDate: "2020-12-20",
    difficulty: {
      easy: 7,
      normal: 14,
      hard: 19,
      expert: 25,
      master: 29
    },
    categories: ["cover", "wonderlands-showtime"]
  },
  {
    id: "ura-omote-lovers",
    title: "Two-Faced Lovers",
    titleJp: "裏表ラバーズ",
    artist: "wowaka",
    unit: "leo-need",
    coverImage: "https://i.scdn.co/image/ab67616d0000b2738cb50afc7efc621ebd39ce0c",
    releaseDate: "2021-01-01",
    difficulty: {
      easy: 9,
      normal: 15,
      hard: 22,
      expert: 28,
      master: 33
    },
    categories: ["cover", "leo-need"]
  },
  {
    id: "needLe",
    title: "needLe",
    titleJp: "needLe",
    artist: "DECO*27",
    unit: "vivid-bad-squad",
    coverImage: "https://i.scdn.co/image/ab67616d0000b2738aee4083b45d994e8d392397",
    releaseDate: "2021-01-10",
    difficulty: {
      easy: 7,
      normal: 13,
      hard: 19,
      expert: 26,
      master: 30
    },
    categories: ["commissioned", "vivid-bad-squad"]
  },
  {
    id: "jack-pot-sad-girl",
    title: "Jack Pot Sad Girl",
    titleJp: "ジャックポットサッドガール",
    artist: "syudou",
    unit: "nightcord",
    coverImage: "https://i.scdn.co/image/ab67616d0000b2732f1ced1e2a7268d9c89d6dba",
    releaseDate: "2021-01-20",
    difficulty: {
      easy: 8,
      normal: 14,
      hard: 20,
      expert: 26,
      master: 31
    },
    categories: ["cover", "nightcord"]
  },
  {
    id: "vampire",
    title: "Vampire",
    titleJp: "ヴァンパイア",
    artist: "DECO*27",
    unit: "virtual-singer",
    coverImage: "https://i.scdn.co/image/ab67616d0000b2732795aaefe211d778c4405fc3",
    releaseDate: "2021-02-01",
    difficulty: {
      easy: 6,
      normal: 12,
      hard: 18,
      expert: 25,
      master: 29
    },
    categories: ["cover", "virtual-singer"]
  },
  {
    id: "doctor-funk-beat",
    title: "Doctor=Funk Beat",
    titleJp: "ドクター=ファンクビート",
    artist: "nyanyannya",
    unit: "wonderlands-showtime",
    coverImage: "https://i.scdn.co/image/ab67616d0000b273a0a1ab82e16a163ae5a7f41c",
    releaseDate: "2021-02-10",
    difficulty: {
      easy: 7,
      normal: 13,
      hard: 19,
      expert: 26,
      master: 30
    },
    categories: ["cover", "wonderlands-showtime"]
  },
  {
    id: "fragile",
    title: "FRAGILE",
    titleJp: "FRAGILE",
    artist: "Cierce",
    unit: "nightcord",
    coverImage: "https://i.scdn.co/image/ab67616d0000b2734b9d07c196242ea8fb3c60e5",
    releaseDate: "2021-03-01",
    difficulty: {
      easy: 5,
      normal: 11,
      hard: 17,
      expert: 23,
      master: 28
    },
    categories: ["commissioned", "nightcord"]
  }
];

export function SongGrid({ activeFilter, searchQuery }: SongGridProps) {
  const [filteredSongs, setFilteredSongs] = useState<Song[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Apply filters
  useEffect(() => {
    setIsLoading(true);

    // Short delay to simulate data processing
    setTimeout(() => {
      let filtered = [...sampleSongs];

      // Filter by unit
      if (activeFilter !== 'all') {
        filtered = filtered.filter(song => song.unit === activeFilter);
      }

      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(song =>
          song.title.toLowerCase().includes(query) ||
          song.titleJp.toLowerCase().includes(query) ||
          song.artist.toLowerCase().includes(query)
        );
      }

      setFilteredSongs(filtered);
      setIsLoading(false);
    }, 300);
  }, [activeFilter, searchQuery]);

  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  // Item variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div>
      {isLoading ? (
        <div className="text-center py-4">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#58c7d5] border-r-transparent" />
        </div>
      ) : filteredSongs.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
            検索条件に一致する楽曲が見つかりませんでした
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            検索条件を変更して、もう一度お試しください
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => setFilteredSongs(sampleSongs)}
          >
            すべての楽曲を表示
          </Button>
        </div>
      ) : (
        <>
          {/* Results count */}
          <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
            {filteredSongs.length}曲 / {sampleSongs.length}曲中
          </div>

          {/* Song grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {filteredSongs.map((song) => (
              <motion.div key={song.id} variants={itemVariants}>
                <Link href={`/songs/${song.id}`}>
                  <Card className="overflow-hidden border border-[#c9dde4] dark:border-[#3a4a59] h-full transition-all duration-300 hover:shadow-md hover:scale-[1.02] hover:border-[#58c7d5] dark:hover:border-[#295b6a]">
                    {/* Song cover image */}
                    <div className="aspect-square w-full relative">
                      <div className="relative h-full w-full overflow-hidden">
                        <Image
                          src={song.coverImage}
                          alt={song.title}
                          width={300}
                          height={300}
                          className="object-cover"
                          style={{ width: '100%', height: '100%' }}
                        />

                        {/* Unit badge */}
                        <div className="absolute top-2 left-2 rounded-full w-8 h-8 bg-white/80 dark:bg-[#1a2430]/80 p-1 flex items-center justify-center">
                          <div className="relative w-6 h-6">
                            <Image
                              src={getIconForUnit(song.unit)}
                              alt={song.unit}
                              width={24}
                              height={24}
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Song details */}
                    <CardContent className="p-3">
                      <h3 className="font-bold text-gray-800 dark:text-gray-100 line-clamp-1">
                        {song.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">
                        {song.artist}
                      </p>

                      {/* Difficulty indicators */}
                      <div className="flex gap-1 mt-2">
                        <span
                          className="text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold text-white"
                          style={{ backgroundColor: getDifficultyColor('easy') }}
                        >
                          {song.difficulty.easy}
                        </span>
                        <span
                          className="text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold text-white"
                          style={{ backgroundColor: getDifficultyColor('normal') }}
                        >
                          {song.difficulty.normal}
                        </span>
                        <span
                          className="text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold text-white"
                          style={{ backgroundColor: getDifficultyColor('hard') }}
                        >
                          {song.difficulty.hard}
                        </span>
                        <span
                          className="text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold text-white"
                          style={{ backgroundColor: getDifficultyColor('expert') }}
                        >
                          {song.difficulty.expert}
                        </span>
                        <span
                          className="text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold text-white"
                          style={{ backgroundColor: getDifficultyColor('master') }}
                        >
                          {song.difficulty.master}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Load more button */}
          {filteredSongs.length > 15 && (
            <div className="mt-8 flex justify-center">
              <Button className="bg-[#58c7d5] dark:bg-[#295b6a] hover:bg-[#46a5b3] dark:hover:bg-[#1e4550]">
                もっと読み込む
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
