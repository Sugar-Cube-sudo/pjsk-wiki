"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CategoryItem {
  title: string;
  url: string;
}

interface Category {
  name: string;
  icon: string;
  items: CategoryItem[];
  isOpen?: boolean;
}

const categories: Category[] = [
  {
    name: "ゲーム情報",
    icon: "📱",
    items: [
      { title: "システム", url: "/system" },
      { title: "ストーリー", url: "/story" },
      { title: "キャラクター", url: "/characters" },
      { title: "ユニット", url: "/units" }
    ]
  },
  {
    name: "楽曲",
    icon: "🎵",
    items: [
      { title: "楽曲一覧", url: "/songs" },
      { title: "難易度表", url: "/difficulty" },
      { title: "譜面攻略", url: "/charts" }
    ]
  },
  {
    name: "イベント・ガチャ",
    icon: "🎉",
    items: [
      { title: "イベント一覧", url: "/events" },
      { title: "ガチャ一覧", url: "/gacha" },
      { title: "カード一覧", url: "/cards" },
      { title: "特訓素材", url: "/materials" }
    ]
  },
  {
    name: "攻略情報",
    icon: "📊",
    items: [
      { title: "初心者ガイド", url: "/beginner" },
      { title: "編成アドバイス", url: "/team-building" },
      { title: "効率的なプレイ", url: "/efficient-play" },
      { title: "よくある質問", url: "/faq" }
    ]
  },
  {
    name: "コミュニティ",
    icon: "👥",
    items: [
      { title: "掲示板", url: "/discussion" },
      { title: "ファンアート", url: "/fan-art" },
      { title: "ユーザー投稿", url: "/user-submissions" }
    ]
  }
];

export function Sidebar() {
  const [openCategories, setOpenCategories] = useState<string[]>(["ゲーム情報", "イベント・ガチャ"]);

  const toggleCategory = (categoryName: string) => {
    setOpenCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  return (
    <aside className="w-full md:w-64 space-y-4">
      {categories.map(category => (
        <Card key={category.name} className="border-[#c9dde4] dark:border-[#3a4a59] overflow-hidden">
          <CardHeader
            onClick={() => toggleCategory(category.name)}
            className={`bg-[#95b8cc] dark:bg-[#3a4a59] text-white py-2 px-4 cursor-pointer hover:bg-[#7ba6bd] dark:hover:bg-[#2f3d4a] transition-colors duration-200 flex flex-row items-center justify-between`}
          >
            <CardTitle className="text-sm font-medium flex items-center">
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </CardTitle>
            <Button variant="ghost" size="sm" className="p-0 h-6 w-6 text-white hover:bg-white/20">
              <span className="transform transition-transform duration-200">
                {openCategories.includes(category.name) ? "▼" : "▶"}
              </span>
            </Button>
          </CardHeader>

          <AnimatePresence initial={false}>
            {openCategories.includes(category.name) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <CardContent className="p-0">
                  <ul className="bg-white dark:bg-[#1a2430]">
                    {category.items.map((item, index) => (
                      <li key={index} className="border-b border-gray-100 dark:border-gray-700 last:border-0">
                        <Link href={item.url}>
                          <div className="block py-2 px-4 hover:bg-[#e8f4f8] dark:hover:bg-[#253443] transition-colors duration-200">
                            <span className="dark:text-gray-200">{item.title}</span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      ))}
    </aside>
  );
}
