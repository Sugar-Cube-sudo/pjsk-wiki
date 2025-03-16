"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/wiki/Header";
import { Footer } from "@/components/wiki/Footer";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        <div className="container py-16 flex flex-col items-center justify-center">
          <div className="w-full max-w-md text-center">
            <div className="relative w-full h-40 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#aa627e] via-[#cca65c] to-[#58c7d5] rounded-lg flex items-center justify-center">
                <span className="text-7xl font-bold text-white text-shadow-lg">エラー</span>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#daa2a8] rounded-full flex items-center justify-center text-white text-3xl font-bold">
                ！
              </div>
            </div>

            <h1 className="text-3xl font-bold text-[#446398] mb-4">
              問題が発生しました
            </h1>

            <p className="text-gray-600 mb-8">
              予期せぬエラーが発生しました。再試行するか、トップページに戻ってください。
            </p>

            <div className="space-y-4">
              <div className="flex justify-center space-x-4">
                <Button
                  onClick={() => reset()}
                  className="bg-[#58c7d5] hover:bg-[#446398]"
                >
                  再試行する
                </Button>

                <Link href="/" passHref>
                  <Button
                    variant="outline"
                    className="border-[#58c7d5] text-[#58c7d5] hover:bg-[#e8f4f8] hover:text-[#446398]"
                  >
                    トップページへ戻る
                  </Button>
                </Link>
              </div>

              <div className="flex justify-center space-x-4 pt-4">
                <Link
                  href="/events"
                  className="text-[#58c7d5] hover:underline"
                >
                  イベント情報
                </Link>
                <Link
                  href="/character"
                  className="text-[#58c7d5] hover:underline"
                >
                  キャラクター一覧
                </Link>
                <Link
                  href="/music"
                  className="text-[#58c7d5] hover:underline"
                >
                  収録楽曲
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
