"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LoadingScreenProps {
  finishLoading: () => void;
}

export function LoadingScreen({ finishLoading }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [showInitialAnimation, setShowInitialAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitialAnimation(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!showInitialAnimation) {
      // 模拟加载进度
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + Math.random() * 15;

          if (newProgress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              finishLoading();
            }, 800);
            return 100;
          }

          return newProgress;
        });
      }, 250);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [finishLoading, showInitialAnimation]);

  return (
    <AnimatePresence>
      <motion.div
        key="loading-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-r from-[#c9dde4] via-[#e8f4f8] to-[#daa2a8] dark:from-[#2a3c47] dark:via-[#3a4a59] dark:to-[#58465b]"
      >
        <div className="relative w-full max-w-sm mb-8">
          {showInitialAnimation ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex justify-center items-center"
            >
              <div className="relative w-32 h-32 mt-10">
                <Image
                  src="/logo.png"
                  alt="プロジェクトセカイ攻略Wiki Logo"
                  width={128}
                  height={128}
                  className="object-contain translate-y-10"
                />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    rotate: { duration: 3, ease: "linear", repeat: Infinity },
                    scale: { duration: 2, ease: "easeInOut", repeat: Infinity }
                  }}
                >
                  <div className="w-full h-full rounded-full border-t-4 border-l-4 border-r-4 border-transparent border-t-[#58c7d5] border-l-[#daa2a8] border-r-[#cca65c] opacity-75"></div>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="px-6"
            >
              <div className="text-center mb-4">
                <h2 className="text-xl font-bold text-[#446398] dark:text-[#95b8cc] mb-1">プロジェクトセカイ攻略Wiki</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">ロード中...</p>
              </div>

              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeInOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-[#58c7d5] via-[#cca65c] to-[#daa2a8]"
                />
              </div>

              <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                <span>読み込み中</span>
                <span>{Math.round(progress)}%</span>
              </div>
            </motion.div>
          )}
        </div>

        <div className="absolute bottom-6 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-xs text-center text-gray-500 dark:text-gray-400 max-w-xs px-4"
          >
            <p>© プロジェクトセカイ攻略Wiki Sur方糖</p>
          </motion.div>
        </div>

        {/* 装饰元素 */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* 左上角星星 */}
          <motion.div
            className="absolute top-[15%] left-[10%] w-3 h-3 bg-[#cca65c] rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* 右上角星星 */}
          <motion.div
            className="absolute top-[20%] right-[15%] w-4 h-4 bg-[#daa2a8] rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />

          {/* 左下角星星 */}
          <motion.div
            className="absolute bottom-[25%] left-[20%] w-5 h-5 bg-[#58c7d5] rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          {/* 右下角星星 */}
          <motion.div
            className="absolute bottom-[15%] right-[10%] w-3 h-3 bg-[#cca65c] rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
