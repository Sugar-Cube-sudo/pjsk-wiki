"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/wiki/Header";
import { Footer } from "@/components/wiki/Footer";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // In a real application, you would handle login/register logic here
    }, 1500);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow bg-gradient-to-b from-[#f9fafb] to-[#e8f4f8]">
        <div className="container py-12">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-[#c9dde4] shadow-lg overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-[#58c7d5] via-[#cca65c] to-[#daa2a8]"></div>
                <CardHeader className="space-y-1 pb-6">
                  <div className="flex justify-center mb-2">
                    <motion.div
                      className="w-16 h-16 bg-[#58c7d5] rounded-full flex items-center justify-center"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {isLogin ? (
                          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" />
                        ) : (
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                        )}
                      </svg>
                    </motion.div>
                  </div>
                  <CardTitle className="text-2xl text-center text-[#446398]">
                    {isLogin ? "ログイン" : "新規登録"}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {isLogin ? "アカウントにログインしてください" : "新しいアカウントを作成してください"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="username" className="text-sm font-medium">ユーザー名</label>
                        <Input
                          id="username"
                          placeholder="ユーザー名を入力"
                          required
                          className="border-[#c9dde4] focus:border-[#58c7d5] focus:ring-[#58c7d5]"
                        />
                      </div>

                      {!isLogin && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-2"
                        >
                          <label htmlFor="email" className="text-sm font-medium">メールアドレス</label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="メールアドレスを入力"
                            required={!isLogin}
                            className="border-[#c9dde4] focus:border-[#58c7d5] focus:ring-[#58c7d5]"
                          />
                        </motion.div>
                      )}

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <label htmlFor="password" className="text-sm font-medium">パスワード</label>
                          {isLogin && (
                            <Link href="/reset-password" className="text-xs text-[#58c7d5] hover:underline">
                              パスワードを忘れた
                            </Link>
                          )}
                        </div>
                        <Input
                          id="password"
                          type="password"
                          placeholder="パスワードを入力"
                          required
                          className="border-[#c9dde4] focus:border-[#58c7d5] focus:ring-[#58c7d5]"
                        />
                      </div>

                      {!isLogin && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-2"
                        >
                          <label htmlFor="confirm-password" className="text-sm font-medium">パスワード(確認)</label>
                          <Input
                            id="confirm-password"
                            type="password"
                            placeholder="パスワードを再入力"
                            required={!isLogin}
                            className="border-[#c9dde4] focus:border-[#58c7d5] focus:ring-[#58c7d5]"
                          />
                        </motion.div>
                      )}

                      <Button
                        type="submit"
                        className="w-full relative overflow-hidden bg-[#58c7d5] hover:bg-[#446398] transition-all duration-300"
                        disabled={isLoading}
                      >
                        <span className="relative z-10">
                          {isLoading ? "処理中..." : isLogin ? "ログイン" : "登録する"}
                        </span>
                        {isLoading && (
                          <motion.span
                            className="absolute inset-0 bg-gradient-to-r from-[#58c7d5] via-[#cca65c] to-[#58c7d5]"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                            style={{ opacity: 0.5 }}
                          />
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <div className="relative w-full">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-[#e8f4f8]"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white px-2 text-sm text-gray-500">または</span>
                    </div>
                  </div>

                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border-[#c9dde4] text-[#446398] hover:bg-[#e8f4f8]"
                    onClick={() => setIsLogin(!isLogin)}
                  >
                    {isLogin ? "新規アカウント作成" : "既存アカウントでログイン"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
