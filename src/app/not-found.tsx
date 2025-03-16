import Link from "next/link";
import { Header } from "@/components/wiki/Header";
import { Footer } from "@/components/wiki/Footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        <div className="container py-16 flex flex-col items-center justify-center">
          <div className="w-full max-w-md text-center">
            <div className="relative w-full h-40 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#58c7d5] via-[#daa2a8] to-[#cca65c] rounded-lg flex items-center justify-center">
                <span className="text-7xl font-bold text-white text-shadow-lg">404</span>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#aa627e] rounded-full flex items-center justify-center text-white text-3xl font-bold">
                ！
              </div>
            </div>

            <h1 className="text-3xl font-bold text-[#446398] mb-4">
              ページが見つかりません
            </h1>

            <p className="text-gray-600 mb-8">
              お探しのページは存在しないか、削除された可能性があります。
              別のページを探すか、トップページに戻ってください。
            </p>

            <div className="space-y-4">
              <Link
                href="/"
                className="inline-block bg-[#58c7d5] hover:bg-[#446398] text-white font-medium py-2 px-6 rounded-md transition-colors"
              >
                トップページへ戻る
              </Link>

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
