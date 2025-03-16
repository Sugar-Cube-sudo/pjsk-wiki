"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

interface SongFiltersProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

interface FilterOption {
  id: string;
  name: string;
  jpName: string;
  color: string;
  darkColor: string;
  iconSrc?: string;
}

const filterOptions: FilterOption[] = [
  {
    id: "all",
    name: "All Songs",
    jpName: "すべて",
    color: "#95b8cc",
    darkColor: "#3a4a59",
    iconSrc: "https://ext.same-assets.com/2470130524/1991243593.octet-stream"
  },
  {
    id: "virtual-singer",
    name: "Virtual Singer",
    jpName: "バーチャル・シンガー",
    color: "#33CCBB",
    darkColor: "#1A665D"
  },
  {
    id: "leo-need",
    name: "Leo/need",
    jpName: "Leo/need",
    color: "#4455DD",
    darkColor: "#2A3487"
  },
  {
    id: "more-more-jump",
    name: "MORE MORE JUMP!",
    jpName: "MORE MORE JUMP!",
    color: "#88DD44",
    darkColor: "#4A7725"
  },
  {
    id: "vivid-bad-squad",
    name: "Vivid BAD SQUAD",
    jpName: "Vivid BAD SQUAD",
    color: "#EE1166",
    darkColor: "#7E0937"
  },
  {
    id: "wonderlands-showtime",
    name: "Wonderlands×Showtime",
    jpName: "ワンダーランズ×ショウタイム",
    color: "#FFDD44",
    darkColor: "#AA9229"
  },
  {
    id: "nightcord",
    name: "25-ji, Nightcord de.",
    jpName: "25時、ナイトコードで。",
    color: "#884499",
    darkColor: "#442244"
  }
];

export function SongFilters({ activeFilter, setActiveFilter, searchQuery, setSearchQuery }: SongFiltersProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="bg-white dark:bg-[#1f2937] rounded-lg shadow-sm p-4 border border-[#c9dde4] dark:border-[#3a4a59] mb-6">
      <div className="flex flex-col space-y-4">
        {/* Main filters */}
        <Tabs defaultValue={activeFilter} onValueChange={setActiveFilter} className="w-full">
          <TabsList className="w-full flex flex-wrap justify-center h-auto bg-gray-100 dark:bg-gray-800 p-1.5">
            {filterOptions.map((option) => (
              <TabsTrigger
                key={option.id}
                value={option.id}
                className={`px-4 py-2 text-sm md:text-base transition-all duration-300 data-[state=active]:text-white relative overflow-hidden mb-1 mr-1 ${
                  activeFilter === option.id
                    ? `bg-[${option.color}] dark:bg-[${option.darkColor}] text-white`
                    : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                style={{
                  backgroundColor: activeFilter === option.id
                    ? (document.documentElement.classList.contains('dark') ? option.darkColor : option.color)
                    : ''
                }}
              >
                <span className="z-10 relative">
                  {option.name}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Search bar */}
        <div className="flex justify-center mt-2">
          <div className="relative w-full max-w-md">
            <Input
              type="search"
              placeholder="楽曲名・アーティスト名で検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-2 border-[#c9dde4] dark:border-[#3a4a59] bg-white dark:bg-[#253443] w-full"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Advanced filters toggle */}
        <div className="flex justify-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            {showAdvanced ? '基本フィルタを表示' : '詳細フィルタを表示'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-1 transition-transform ${showAdvanced ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Button>
        </div>

        {/* Advanced filters */}
        <AnimatePresence>
          {showAdvanced && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">難易度</span>
                  <div className="flex flex-wrap gap-1">
                    <Button variant="outline" size="sm" className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800 h-7 text-xs">Easy</Button>
                    <Button variant="outline" size="sm" className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 h-7 text-xs">Normal</Button>
                    <Button variant="outline" size="sm" className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800 h-7 text-xs">Hard</Button>
                    <Button variant="outline" size="sm" className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border-red-200 dark:border-red-800 h-7 text-xs">Expert</Button>
                    <Button variant="outline" size="sm" className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800 h-7 text-xs">Master</Button>
                  </div>
                </div>

                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">難易度レベル</span>
                  <div className="flex flex-wrap gap-1">
                    <Button variant="outline" size="sm" className="h-7 text-xs">5-9</Button>
                    <Button variant="outline" size="sm" className="h-7 text-xs">10-19</Button>
                    <Button variant="outline" size="sm" className="h-7 text-xs">20-29</Button>
                    <Button variant="outline" size="sm" className="h-7 text-xs">30+</Button>
                  </div>
                </div>

                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">リリース時期</span>
                  <div className="flex flex-wrap gap-1">
                    <Button variant="outline" size="sm" className="h-7 text-xs">最新追加</Button>
                    <Button variant="outline" size="sm" className="h-7 text-xs">2023-2024</Button>
                    <Button variant="outline" size="sm" className="h-7 text-xs">2021-2022</Button>
                    <Button variant="outline" size="sm" className="h-7 text-xs">配信開始</Button>
                  </div>
                </div>

                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">楽曲タイプ</span>
                  <div className="flex flex-wrap gap-1">
                    <Button variant="outline" size="sm" className="h-7 text-xs">オリジナル曲</Button>
                    <Button variant="outline" size="sm" className="h-7 text-xs">カバー曲</Button>
                    <Button variant="outline" size="sm" className="h-7 text-xs">イベント曲</Button>
                    <Button variant="outline" size="sm" className="h-7 text-xs">ユニット曲</Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
