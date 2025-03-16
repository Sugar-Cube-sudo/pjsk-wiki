"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/wiki/Header";
import { Footer } from "@/components/wiki/Footer";
import { Banner } from "@/components/wiki/Banner";
import { Sidebar } from "@/components/wiki/Sidebar";
import { EventsList } from "@/components/wiki/EventsList";
import { GameInfo } from "@/components/wiki/GameInfo";
import { InfoLinks } from "@/components/wiki/InfoLinks";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow container mx-auto py-8 px-4">
        <Banner />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* サイドバー */}
          <div className="md:col-span-1">
            <Sidebar />
          </div>

          {/* メインコンテンツ */}
          <div className="md:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-[#253443] p-6 rounded-lg shadow-sm border border-[#c9dde4] dark:border-[#3a4a59]"
            >
              <h2 className="text-xl font-bold text-[#446398] dark:text-[#95b8cc] mb-4">
                ようこそ、プロジェクトセカイ攻略Wikiへ
              </h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                本サイトは「プロジェクトセカイ カラフルステージ! feat.初音ミク」の攻略情報を提供する非公式ファンサイトです。
                ゲームの基本情報、攻略ガイド、キャラクター紹介など、様々なコンテンツをご用意しています。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <Link href="/characters">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-[#58c7d5] hover:bg-[#46a5b3] dark:bg-[#295b6a] dark:hover:bg-[#1e4550] text-white py-3 px-4 rounded-md shadow-sm flex items-center justify-between"
                  >
                    <span className="font-medium">キャラクター一覧</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </motion.div>
                </Link>

                <Link href="/songs">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-[#daa2a8] hover:bg-[#c8919b] dark:bg-[#58465b] dark:hover:bg-[#483a4a] text-white py-3 px-4 rounded-md shadow-sm flex items-center justify-between"
                  >
                    <span className="font-medium">楽曲一覧</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </motion.div>
                </Link>
              </div>
            </motion.div>

            <EventsList />

            <GameInfo />

            <InfoLinks />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
