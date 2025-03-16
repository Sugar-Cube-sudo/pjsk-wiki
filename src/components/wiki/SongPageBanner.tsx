"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function SongPageBanner() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#58c7d5]/30 to-[#daa2a8]/20 dark:from-[#295b6a]/50 dark:to-[#58465b]/30 z-0" />

      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 dark:opacity-10 z-0"
        style={{
          backgroundImage: "url('https://ext.same-assets.com/2367009031/2333162058.octet-stream')",
          backgroundRepeat: "repeat-x"
        }}
      />

      {/* Content overlay */}
      <div className="relative min-h-[280px] md:min-h-[320px] flex flex-col items-center justify-center z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#446398] dark:text-[#95b8cc] mb-2 md:mb-6">
            MUSIC
          </h1>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            プロジェクトセカイに収録されている楽曲の一覧です。
          </p>

          <div className="flex justify-center mt-8 gap-3">
            {/* Unit logos */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-12 h-12 md:w-16 md:h-16 relative"
            >
              <Image
                src="https://ext.same-assets.com/319313186/2169045095.octet-stream"
                alt="Virtual Singer"
                width={64}
                height={64}
                className="object-contain"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-12 h-12 md:w-16 md:h-16 relative"
            >
              <Image
                src="https://ext.same-assets.com/3607379010/2700560491.octet-stream"
                alt="Leo/need"
                width={64}
                height={64}
                className="object-contain"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-12 h-12 md:w-16 md:h-16 relative"
            >
              <Image
                src="https://ext.same-assets.com/2890491459/3772904176.octet-stream"
                alt="More More Jump!"
                width={64}
                height={64}
                className="object-contain"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-12 h-12 md:w-16 md:h-16 relative"
            >
              <Image
                src="https://ext.same-assets.com/2113951271/3279521359.octet-stream"
                alt="Vivid BAD SQUAD"
                width={64}
                height={64}
                className="object-contain"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-12 h-12 md:w-16 md:h-16 relative"
            >
              <Image
                src="https://ext.same-assets.com/1703821167/1919553847.octet-stream"
                alt="Wonderlands×Showtime"
                width={64}
                height={64}
                className="object-contain"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-12 h-12 md:w-16 md:h-16 relative"
            >
              <Image
                src="https://ext.same-assets.com/1819306573/1592577320.octet-stream"
                alt="25-ji, Nightcord de."
                width={64}
                height={64}
                className="object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#f9fafb] dark:from-[#1a2430] to-transparent" />
    </div>
  );
}
