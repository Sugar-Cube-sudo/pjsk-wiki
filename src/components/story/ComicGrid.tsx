"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import { ComicItem } from "@/components/story/comics-data";
import { ComicItem } from "@/components/story/comics-data";

interface ComicGridProps {
  comics: ComicItem[];
  onComicClick: (comic: ComicItem) => void;
}

export function ComicGrid({ comics, onComicClick }: ComicGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
      {comics.map((comic, index) => (
        <ComicCard
          key={comic.id}
          comic={comic}
          onClick={() => onComicClick(comic)}
          index={index}
        />
      ))}
    </div>
  );
}

interface ComicCardProps {
  comic: ComicItem;
  onClick: () => void;
  index: number;
}

function ComicCard({ comic, onClick, index }: ComicCardProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="cursor-pointer"
      onClick={onClick}
    >
      <div className="border border-[#c9dde4] dark:border-[#3a4a59] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="w-full aspect-square relative bg-gray-100 dark:bg-gray-800">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 border-4 border-[#e8f4f8] dark:border-[#253443] border-t-[#58c7d5] rounded-full animate-spin"></div>
            </div>
          )}
          <Image
            src={comic.image}
            alt={comic.title}
            fill
            className={`object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoadingComplete={() => setIsLoading(false)}
          />
        </div>
        <div className="p-3 bg-white dark:bg-[#1a2430]">
          <h3 className="font-medium text-[#446398] dark:text-[#95b8cc] mb-1 line-clamp-1">{comic.title}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">{comic.date}</p>
          {comic.description && (
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-300 line-clamp-2">
              {comic.description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
