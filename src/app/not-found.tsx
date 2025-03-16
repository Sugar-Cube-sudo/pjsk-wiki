"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Header } from "@/components/wiki/Header";
import { Footer } from "@/components/wiki/Footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // 幾何学模様のパーツをランダムに生成
  const generateRandomShapes = () => {
    const shapes = [];
    for (let i = 0; i < 12; i++) {
      const type = Math.random() > 0.5 ? "circle" : "triangle";
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 50 + 10;
      const delay = Math.random() * 5;
      const duration = Math.random() * 10 + 10;
      
      shapes.push({ type, x, y, size, delay, duration });
    }
    return shapes;
  };

  const shapes = generateRandomShapes();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-grow relative overflow-hidden">
        {/* 背景グラデーション */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#aed7dd] via-[#dee5f2] to-[#b19bb6] dark:from-[#295b6a] dark:via-[#1f2937] dark:to-[#58465b] -z-10"></div>
        
        {/* 装飾パーツ */}
        {shapes.map((shape, index) => {
          if (shape.type === "circle") {
            return (
              <motion.div
                key={`shape-${index}`}
                className="absolute rounded-full bg-white/20 dark:bg-white/10"
                style={{
                  left: `${shape.x}%`,
                  top: `${shape.y}%`,
                  width: `${shape.size}px`,
                  height: `${shape.size}px`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: shape.duration,
                  delay: shape.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          } else {
            return (
              <motion.div
                key={`shape-${index}`}
                className="absolute border-2 border-white/20 dark:border-white/10"
                style={{
                  left: `${shape.x}%`,
                  top: `${shape.y}%`,
                  width: `${shape.size}px`,
                  height: `${shape.size}px`,
                  transform: "rotate(45deg)",
                }}
                animate={{
                  rotate: [45, 90, 45],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: shape.duration,
                  delay: shape.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          }
        })}
        
        <div className="container mx-auto py-16 flex flex-col items-center justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.h1
              className="text-[120px] md:text-[160px] font-bold text-[#5c708b] dark:text-[#95b8cc] leading-none"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              404
            </motion.h1>
            
            <motion.h2
              className="text-3xl md:text-4xl font-medium text-[#5c708b] dark:text-[#95b8cc] mb-8 tracking-wider"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              NOT FOUND
            </motion.h2>
            
            <motion.div
              className="w-20 h-1 bg-[#58c7d5] dark:bg-[#3eceaa] mx-auto mb-10"
              initial={{ width: 0 }}
              animate={{ width: "5rem" }}
              transition={{ delay: 0.7, duration: 0.6 }}
            ></motion.div>
            
            <motion.p
              className="text-gray-600 dark:text-gray-300 mb-10 max-w-lg mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              お探しのページは見つかりませんでした。
              ページが移動または削除された可能性があります。
            </motion.p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/">
                <Button className="bg-[#58c7d5] hover:bg-[#446398] dark:bg-[#3eceaa] dark:hover:bg-[#295b6a] min-w-[200px]">
                  トップページへ戻る
                </Button>
              </Link>
              
              <Link href="/discussion">
                <Button variant="outline" className="border-[#58c7d5] text-[#58c7d5] hover:bg-[#e8f4f8] dark:border-[#3eceaa] dark:text-[#3eceaa] dark:hover:bg-[#253443] min-w-[200px]">
                  掲示板を見る
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}