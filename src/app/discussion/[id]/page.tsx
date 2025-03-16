"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Header } from "@/components/wiki/Header";
import { Footer } from "@/components/wiki/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface DiscussionReply {
  id: string;
  author: string;
  date: string;
  content: string;
  likes: number;
  isLiked?: boolean;
}

interface DiscussionPost {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  replies: DiscussionReply[];
  views: number;
  tags: string[];
}

// Simulated posts data
const postData: Record<string, DiscussionPost> = {
  "1": {
    id: "1",
    title: "イベント「You are my HERO!!」攻略ガイド",
    author: "MikuFan",
    date: "3/10 15:30",
    content: `このイベントの効率的な攻略方法について共有しましょう！

私の推奨戦略：
1. イベントポイントの稼ぎ方は、MASTER難易度のライブをクリアするのが最も効率的です。
2. イベント限定カードを入手するには、最低でも10,000ポイントが必要です。
3. 特効カードを使用すると、獲得ポイントが1.2倍になります。

皆さんの攻略法や進捗状況も教えてください！`,
    replies: [
      {
        id: "r1",
        author: "SegaFan",
        date: "3/10 16:45",
        content: "ありがとうございます！特効カードを持っていないのですが、効率よくポイントを貯める方法はありますか？",
        likes: 5
      },
      {
        id: "r2",
        author: "LukaSong",
        date: "3/10 17:20",
        content: "特効カードがなくても、チャレンジライブをクリアすることでボーナスポイントが獲得できますよ！毎日のミッションも忘れずに。",
        likes: 8
      },
      {
        id: "r3",
        author: "ProGamer",
        date: "3/10 19:05",
        content: "私は既に15,000ポイント集めました！このイベントのストーリーが素晴らしいので、皆さんもぜひプレイしてみてください。",
        likes: 12
      }
    ],
    views: 1250,
    tags: ["イベント", "攻略"]
  }
};

export default function DiscussionPostPage() {
  const params = useParams();
  const postId = params.id as string;

  const post = postData[postId] || {
    id: postId,
    title: "投稿が見つかりません",
    author: "Unknown",
    date: "",
    content: "申し訳ありませんが、この投稿は存在しないか削除されました。",
    replies: [],
    views: 0,
    tags: []
  };

  const [replyText, setReplyText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [replies, setReplies] = useState<DiscussionReply[]>(post.replies);
  const [likedReplies, setLikedReplies] = useState<Record<string, boolean>>({});

  const handleSubmitReply = (e: React.FormEvent) => {
    e.preventDefault();

    if (!replyText.trim()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const newReply: DiscussionReply = {
        id: `r${replies.length + 1}`,
        author: "Guest User", // In a real app, this would be the logged-in user
        date: new Date().toLocaleString('ja-JP', {
          month: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric'
        }),
        content: replyText,
        likes: 0
      };

      setReplies([...replies, newReply]);
      setReplyText("");
      setIsSubmitting(false);
    }, 1000);
  };

  const handleLikeReply = (replyId: string) => {
    setLikedReplies(prev => {
      const currentLiked = prev[replyId] || false;

      // Update replies with new like count
      setReplies(replies.map(reply => {
        if (reply.id === replyId) {
          return {
            ...reply,
            likes: currentLiked ? reply.likes - 1 : reply.likes + 1,
            isLiked: !currentLiked
          };
        }
        return reply;
      }));

      return { ...prev, [replyId]: !currentLiked };
    });
  };

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
            <div className="mb-4 flex items-center text-sm">
              <Link href="/discussion" className="text-[#58c7d5] hover:underline flex items-center">
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
                  className="mr-1"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                掲示板に戻る
              </Link>
            </div>

            <Card className="border-[#c9dde4] mb-6 overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-[#58c7d5] via-[#cca65c] to-[#daa2a8]"></div>
              <CardHeader className="bg-[#f0f9fc] border-b border-[#e8f4f8]">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-[#446398]">{post.title}</CardTitle>
                    <CardDescription className="flex items-center mt-2">
                      <span className="mr-4">投稿者: {post.author}</span>
                      <span className="mr-4">投稿日時: {post.date}</span>
                      <span>閲覧数: {post.views}</span>
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
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
              </CardHeader>
              <CardContent className="p-6">
                <div className="prose max-w-none">
                  {post.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4 text-gray-700">{paragraph}</p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Replies Section */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-[#446398] mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#58c7d5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                返信 ({replies.length})
              </h2>

              {replies.length > 0 ? (
                <ul className="space-y-4">
                  {replies.map((reply, index) => (
                    <motion.li
                      key={reply.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                      <Card className="border-[#e8f4f8]">
                        <CardHeader className="py-3 px-4 bg-white border-b border-[#e8f4f8] flex flex-row items-start space-y-0 gap-4">
                          <Avatar className="h-10 w-10 border border-[#e8f4f8]">
                            <AvatarFallback className="bg-[#e8f4f8] text-[#58c7d5]">
                              {reply.author.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex justify-between items-center">
                              <CardTitle className="text-sm font-medium text-[#446398]">
                                {reply.author}
                              </CardTitle>
                              <span className="text-xs text-gray-500">{reply.date}</span>
                            </div>
                            <CardDescription className="text-xs">
                              メンバー
                            </CardDescription>
                          </div>
                        </CardHeader>
                        <CardContent className="py-3 px-4">
                          <p className="text-gray-700">{reply.content}</p>
                        </CardContent>
                        <CardFooter className="py-2 px-4 bg-gray-50 flex justify-between items-center">
                          <div className="flex items-center">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 px-2 text-gray-500 hover:text-[#58c7d5]"
                              onClick={() => handleLikeReply(reply.id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill={likedReplies[reply.id] ? "currentColor" : "none"}
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-1"
                              >
                                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                              </svg>
                              いいね ({reply.likes})
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 px-2 text-gray-500 hover:text-[#58c7d5]"
                            onClick={() => setReplyText(`@${reply.author} `)}
                          >
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
                              className="mr-1"
                            >
                              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                            </svg>
                            返信
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <div className="text-center py-6 text-gray-500 bg-white rounded-lg border border-[#e8f4f8]">
                  まだ返信はありません。最初の返信を投稿しましょう！
                </div>
              )}
            </div>

            {/* Reply Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Card className="border-[#c9dde4]">
                <CardHeader className="py-3 px-4 bg-[#f0f9fc]">
                  <CardTitle className="text-sm font-medium text-[#446398]">返信を投稿</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <form onSubmit={handleSubmitReply}>
                    <div className="space-y-4">
                      <div>
                        <Textarea
                          placeholder="返信を入力してください..."
                          className="min-h-[120px] border-[#c9dde4] focus:border-[#58c7d5]"
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          required
                        />
                      </div>
                      <div className="flex justify-end">
                        <Button
                          type="submit"
                          className="relative overflow-hidden bg-[#58c7d5] hover:bg-[#446398] transition-all duration-300"
                          disabled={isSubmitting || !replyText.trim()}
                        >
                          <span className="relative z-10">
                            {isSubmitting ? "投稿中..." : "返信を投稿"}
                          </span>
                          {isSubmitting && (
                            <motion.span
                              className="absolute inset-0 bg-gradient-to-r from-[#58c7d5] via-[#cca65c] to-[#58c7d5]"
                              animate={{ x: ["-100%", "100%"] }}
                              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                              style={{ opacity: 0.5 }}
                            />
                          )}
                        </Button>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
