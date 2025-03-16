"use client";

// import { useState, useEffect, useCallback } from "react";
import { useState, useEffect, useCallback, useMemo } from "react";
import { Header } from "@/components/wiki/Header";
import { Footer } from "@/components/wiki/Footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ComicGrid } from "@/components/story/ComicGrid";
import { ComicModal } from "@/components/story/ComicModal";
import { allComics, ComicItem } from "../../components/story/comics-data";

export default function StoryPage() {
  const [activeTab, setActiveTab] = useState("1koma");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedComic, setSelectedComic] = useState<ComicItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // const comics = allComics[activeTab as keyof typeof allComics] || [];
  const comics = useMemo(() => {
    return allComics[activeTab as keyof typeof allComics] || [];
  }, [activeTab]);

  const openModal = (comic: ComicItem) => {
    setSelectedComic(comic);
    const index = comics.findIndex(c => c.id === comic.id);
    setCurrentIndex(index);
    setModalOpen(true);
    // モーダル表示時はスクロールを無効化
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedComic(null);
    // モーダル閉じた時はスクロールを有効化
    document.body.style.overflow = "auto";
  };

  const nextImage = useCallback(() => {
    if (currentIndex < comics.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
      setSelectedComic(comics[currentIndex + 1]);
    }
  }, [currentIndex, comics]);

  const prevImage = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
      setSelectedComic(comics[currentIndex - 1]);
    }
  }, [currentIndex, comics]);

  // キーボードナビゲーション
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen) return;

      switch (e.key) {
        case "ArrowRight":
          nextImage();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "Escape":
          closeModal();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, nextImage, prevImage]);

  // タブ切り替え時に選択状態をリセット
  useEffect(() => {
    setSelectedComic(null);
    setCurrentIndex(0);
    setModalOpen(false);
  }, [activeTab]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow bg-[#f9fafb] dark:bg-[#1a2430]">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#446398] dark:text-[#95b8cc] mb-2">
              プロジェクトセカイ公式漫画
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              プロジェクトセカイの公式漫画の一覧です。各漫画をクリックすると大きいサイズで表示できます。
              左右の矢印キーで画像を切り替えることができます。
            </p>
          </div>

          <Card className="mb-8 border-[#c9dde4] dark:border-[#3a4a59]">
            <CardContent className="p-6">
              <Tabs
                defaultValue="1koma"
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="mb-6 bg-[#e8f4f8] dark:bg-[#253443]">
                  <TabsTrigger
                    value="1koma"
                    className="data-[state=active]:bg-[#58c7d5] data-[state=active]:text-white dark:data-[state=active]:bg-[#295b6a]"
                  >
                    1コマ漫画
                  </TabsTrigger>
                  <TabsTrigger
                    value="4koma"
                    className="data-[state=active]:bg-[#58c7d5] data-[state=active]:text-white dark:data-[state=active]:bg-[#295b6a]"
                  >
                    4コマ漫画
                  </TabsTrigger>
                  <TabsTrigger
                    value="special"
                    className="data-[state=active]:bg-[#58c7d5] data-[state=active]:text-white dark:data-[state=active]:bg-[#295b6a]"
                  >
                    Promotional
                  </TabsTrigger>
                  {/* <TabsTrigger
                    value="character"
                    className="data-[state=active]:bg-[#58c7d5] data-[state=active]:text-white dark:data-[state=active]:bg-[#295b6a]"
                  >
                    キャラクター別
                  </TabsTrigger> */}
                </TabsList>

                <TabsContent value="1koma" className="m-0">
                  <ComicGrid comics={allComics["1koma"]} onComicClick={openModal} />
                </TabsContent>

                <TabsContent value="4koma" className="m-0">
                  <ComicGrid comics={allComics["4koma"]} onComicClick={openModal} />
                </TabsContent>

                <TabsContent value="special" className="m-0">
                  <ComicGrid comics={allComics["special"]} onComicClick={openModal} />
                </TabsContent>

                {/* <TabsContent value="character" className="m-0">
                  <ComicGrid comics={allComics["character"]} onComicClick={openModal} />
                </TabsContent> */}
              </Tabs>
            </CardContent>
          </Card>

          {/* 漫画詳細モーダル */}
          <ComicModal
            isOpen={modalOpen}
            comic={selectedComic}
            onClose={closeModal}
            onNext={nextImage}
            onPrev={prevImage}
            currentIndex={currentIndex}
            totalComics={comics.length}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
