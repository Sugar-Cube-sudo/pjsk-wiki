"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Info, ZoomIn, ZoomOut } from "lucide-react";
// import { ComicItem } from "@/components/story/comics-data";
import { ComicItem } from "@/components/story/comics-data";

interface ComicModalProps {
  isOpen: boolean;
  comic: ComicItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalComics: number;
}

export function ComicModal({
  isOpen,
  comic,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalComics
}: ComicModalProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // リセット状態
    setIsZoomed(false);
    setImageLoaded(false);
  }, [comic]);

  if (!comic) return null;

  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 閉じるボタン */}
            <motion.button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              aria-label="Close"
            >
              <X size={24} />
            </motion.button>

            {/* 画像と情報 */}
            <motion.div
              className="bg-white dark:bg-[#1a2430] rounded-lg overflow-hidden shadow-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <h3 className="font-bold text-[#446398] dark:text-[#95b8cc] line-clamp-1">{comic.title}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{comic.date}</span>
              </div>

              <div className="relative">
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                    <div className="w-12 h-12 border-4 border-[#e8f4f8] dark:border-[#253443] border-t-[#58c7d5] rounded-full animate-spin"></div>
                  </div>
                )}

                <div
                  className={`relative w-full bg-gray-100 dark:bg-gray-800 overflow-hidden flex justify-center ${
                    isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
                  }`}
                  onClick={toggleZoom}
                >
                  <div className={`transition-transform duration-300 ${isZoomed ? 'scale-150' : 'scale-100'}`}>
                    <Image
                      src={comic.image}
                      alt={comic.title}
                      width={800}
                      height={600}
                      className="object-contain max-h-[70vh]"
                      onLoadingComplete={() => setImageLoaded(true)}
                    />
                  </div>

                  {/* ズームボタン */}
                  <button
                    className="absolute bottom-4 right-4 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-colors"
                    onClick={(e) => toggleZoom(e)}
                    aria-label={isZoomed ? "Zoom out" : "Zoom in"}
                  >
                    {isZoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
                  </button>
                </div>

                {/* 前へボタン */}
                {currentIndex > 0 && (
                  <motion.button
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 rounded-full p-2 text-white hover:bg-black/50 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onPrev();
                    }}
                    aria-label="Previous comic"
                  >
                    <ChevronLeft size={24} />
                  </motion.button>
                )}

                {/* 次へボタン */}
                {currentIndex < totalComics - 1 && (
                  <motion.button
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 rounded-full p-2 text-white hover:bg-black/50 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onNext();
                    }}
                    aria-label="Next comic"
                  >
                    <ChevronRight size={24} />
                  </motion.button>
                )}
              </div>

              {comic.description && (
                <div className="p-4 bg-gray-50 dark:bg-[#253443] flex items-start gap-2">
                  <Info size={16} className="text-[#58c7d5] mt-1 shrink-0" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">{comic.description}</p>
                </div>
              )}

              <div className="p-3 text-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
                画像 {currentIndex + 1} / {totalComics} · キーボードの←→キーで画像を切り替えられます · クリックで拡大/縮小
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
