"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/wiki/Header";
import { Footer } from "@/components/wiki/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface DiscussionPost {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  replies: number;
  views: number;
  tags: string[];
  isPinned?: boolean;
}

const discussionPosts: DiscussionPost[] = [
  {
    id: "1",
    title: "イベント「You are my HERO!!」攻略ガイド",
    author: "MikuFan",
    date: "3/10 15:30",
    content: "皆さん、こんにちは！新しいイベントの攻略情報をシェアしましょう。",
    replies: 24,
    views: 1250,
    tags: ["イベント", "攻略"],
    isPinned: true
  },
  {
    id: "2",
    title: "ライブ難易度MASTER+について",
    author: "RhythmMaster",
    date: "3/9 21:45",
    content: "新しく追加されたMASTER+難易度について議論しましょう。",
    replies: 42,
    views: 1890,
    tags: ["楽曲", "難易度"]
  },
  {
    id: "3",
    title: "「Let's play with cats」ガチャ結果共有",
    author: "LukaSong",
    date: "3/11 10:15",
    content: "新しいガチャの結果を共有しましょう！どのカードが出ましたか？",
    replies: 36,
    views: 1540,
    tags: ["ガチャ", "カード"]
  },
  {
    id: "4",
    title: "今後のアップデートについての予想",
    author: "SegaFan",
    date: "3/8 18:20",
    content: "次のアップデートで追加されそうな機能について予想しませんか？",
    replies: 15,
    views: 980,
    tags: ["アップデート", "予想"]
  },
  {
    id: "5",
    title: "初心者向けガイド：効率的なスコアの稼ぎ方",
    author: "ProGamer",
    date: "3/7 14:10",
    content: "初心者の方向けに、効率的なスコアの稼ぎ方を解説します。",
    replies: 18,
    views: 2340,
    tags: ["初心者", "攻略"],
    isPinned: true
  }
];

export default function DiscussionPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredPosts = discussionPosts.filter(post => {
    if (activeTab !== "all" && !post.tags.includes(activeTab)) {
      return false;
    }

    if (searchQuery) {
      return post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             post.content.toLowerCase().includes(searchQuery.toLowerCase());
    }

    return true;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    // Pinned posts first
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;

    // Then sort by date (newest first)
    return 0; // In a real app, you'd parse and compare dates
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow bg-[#f9fafb]">
        <div className="container py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div className="w-full md:w-3/4">
                <Card className="border-[#c9dde4] mb-6">
                  <CardHeader className="bg-gradient-to-r from-[#58c7d5] to-[#95b8cc] text-white">
                    <CardTitle>掲示板</CardTitle>
                    <CardDescription className="text-white/80">
                      プロジェクトセカイについて自由に議論しましょう
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center">
                      <div className="relative w-full">
                        <Input
                          type="search"
                          placeholder="トピックを検索..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="border-[#c9dde4] focus:border-[#58c7d5] focus:ring-[#58c7d5] pr-10"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg
                            className="h-4 w-4 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
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

                      <Button className="min-w-[140px] bg-[#58c7d5] hover:bg-[#446398] transition-colors">
                        <Link href="/discussion/new" className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                          新規トピック
                        </Link>
                      </Button>
                    </div>

                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                      <TabsList className="mb-4 bg-[#e8f4f8]">
                        <TabsTrigger
                          value="all"
                          className="data-[state=active]:bg-[#58c7d5] data-[state=active]:text-white"
                        >
                          すべて
                        </TabsTrigger>
                        <TabsTrigger
                          value="イベント"
                          className="data-[state=active]:bg-[#58c7d5] data-[state=active]:text-white"
                        >
                          イベント
                        </TabsTrigger>
                        <TabsTrigger
                          value="ガチャ"
                          className="data-[state=active]:bg-[#58c7d5] data-[state=active]:text-white"
                        >
                          ガチャ
                        </TabsTrigger>
                        <TabsTrigger
                          value="攻略"
                          className="data-[state=active]:bg-[#58c7d5] data-[state=active]:text-white"
                        >
                          攻略
                        </TabsTrigger>
                        <TabsTrigger
                          value="初心者"
                          className="data-[state=active]:bg-[#58c7d5] data-[state=active]:text-white"
                        >
                          初心者
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value={activeTab} className="mt-0">
                        <AnimatePresence>
                          <ul className="space-y-3">
                            {sortedPosts.length > 0 ? (
                              sortedPosts.map((post) => (
                                <motion.li
                                  key={post.id}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{ duration: 0.3 }}
                                  className="relative"
                                >
                                  <Link href={`/discussion/${post.id}`}>
                                    <div className={`border rounded-lg p-4 hover:shadow-md transition-shadow ${post.isPinned ? 'bg-[#f0f9fc] border-[#95b8cc]' : 'bg-white border-[#e8f4f8]'}`}>
                                      <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-semibold text-[#446398] flex items-center gap-2">
                                          {post.isPinned && (
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="16"
                                              height="16"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="#58c7d5"
                                              strokeWidth="2"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            >
                                              <path d="M12 2l4 4-8 8H4v-4l8-8z" />
                                              <path d="M14 14l8-8" />
                                            </svg>
                                          )}
                                          {post.title}
                                        </h3>
                                        <span className="text-sm text-gray-500">{post.date}</span>
                                      </div>
                                      <p className="text-gray-600 mb-3 line-clamp-2">{post.content}</p>
                                      <div className="flex flex-wrap items-center justify-between">
                                        <div className="flex items-center text-sm text-gray-500">
                                          <span className="mr-4">投稿者: {post.author}</span>
                                          <span className="mr-4">返信: {post.replies}</span>
                                          <span>閲覧数: {post.views}</span>
                                        </div>
                                        <div className="flex gap-2 mt-2 sm:mt-0">
                                          {post.tags.map((tag) => (
                                            <span
                                              key={tag}
                                              className="px-2 py-1 rounded-full text-xs bg-[#e8f4f8] text-[#58c7d5]"
                                            >
                                              {tag}
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                </motion.li>
                              ))
                            ) : (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-8 text-gray-500"
                              >
                                該当するトピックがありません。新しいトピックを作成しましょう。
                              </motion.div>
                            )}
                          </ul>
                        </AnimatePresence>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>

              <div className="w-full md:w-1/4">
                <Card className="border-[#c9dde4] mb-4">
                  <CardHeader className="bg-[#58c7d5] text-white py-3 px-4">
                    <CardTitle className="text-sm">掲示板ルール</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 text-sm">
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <motion.li
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        他のユーザーに敬意を持って接しましょう。
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        トピックに関連する内容を投稿しましょう。
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        個人情報の共有は避けてください。
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        違法なコンテンツの共有は禁止です。
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        楽しい議論を心がけましょう！
                      </motion.li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#c9dde4]">
                  <CardHeader className="bg-[#daa2a8] text-white py-3 px-4">
                    <CardTitle className="text-sm">人気のタグ</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex flex-wrap gap-2">
                      {["イベント", "ガチャ", "攻略", "初心者", "楽曲", "カード", "アップデート", "予想", "難易度", "ストーリー"].map((tag, index) => (
                        <motion.div
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-[#c9dde4] hover:bg-[#e8f4f8] hover:text-[#446398]"
                            onClick={() => setActiveTab(tag)}
                          >
                            {tag}
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
