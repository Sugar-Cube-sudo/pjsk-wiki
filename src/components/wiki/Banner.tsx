"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function Banner() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [showText, setShowText] = useState(false);

  // 处理视频结束后的动画序列
  useEffect(() => {
    if (isVideoEnded) {
      // 视频淡出后显示背景
      setTimeout(() => setShowBackground(true), 500);
      // 背景显示后显示文字
      setTimeout(() => setShowText(true), 1500);
    }
  }, [isVideoEnded]);

  return (
    <Card className="overflow-hidden border-0 shadow-sm mb-6">
      <CardContent className="p-0 relative">
        {/* 视频容器 */}
        <div className="w-full aspect-[3/1] relative">
          {/* 背景视频 */}
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onEnded={() => setIsVideoEnded(true)}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isVideoEnded ? "opacity-0" : "opacity-100"
            }`}
          >
            <source src="https://pjsekai.sega.jp/assets/data/video/kv_pc.mp4" type="video/mp4" />
          </video>

          {/* 背景图片层 */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              showBackground ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: "url(https://pjsekai.sega.jp/assets/data/webp/top/mv/bg_pc.jpg.webp)",
            }}
          >
            {/* 颜色叠加层 */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-[#58c7d5]/70 via-[#95b8cc]/70 to-[#daa2a8]/70 dark:from-[#295b6a]/90 dark:via-[#3a4a59]/90 dark:to-[#58465b]/90" /> */}
          </div>

          {/* 文字内容 */}
          {showText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex flex-col justify-center items-center text-white z-10"
            >
              <h1 className="text-3xl md:text-5xl font-bold text-shadow-lg">
                プロジェクトセカイ攻略Wiki
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-2 md:mt-4 text-lg md:text-xl font-medium text-shadow-md"
              >
                feat. 初音ミク
              </motion.p>
            </motion.div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}