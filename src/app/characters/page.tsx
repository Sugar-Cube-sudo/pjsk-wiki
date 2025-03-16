"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/wiki/Header";
import { Footer } from "@/components/wiki/Footer";

interface CharacterGroup {
  id: string;
  name: string;
  nameJa: string;
  imageSrc: string;
  bgImage: string;
  logoImage: string;
  members: string[];
}

const characterGroups: CharacterGroup[] = [
  {
    id: "virtualsinger",
    name: "VIRTUAL SINGER",
    nameJa: "バーチャル・シンガー",
    imageSrc: "/chara_pc.png5.webp",
    bgImage: "/bg_pc.png",
    logoImage: "/logo.png.webp",
    members: ["初音ミク", "鏡音リン", "鏡音レン", "巡音ルカ", "MEIKO", "KAITO"],
  },
  {
    id: "leo_need",
    name: "Leo/need",
    nameJa: "レオニ",
    imageSrc: "/chara_pc.png4.webp",
    bgImage: "/bg_pc1.png",
    logoImage: "/logo.png1.webp",
    members: ["星乃一歌", "天馬咲希", "望月穂波", "日野森志歩"],
  },
  {
    id: "more_more_jump",
    name: "MORE MORE JUMP!",
    nameJa: "モモジャン",
    imageSrc: "/chara_pc.png3.webp",
    bgImage: "/bg_pc2.png",
    logoImage: "/logo.png2.webp",
    members: ["花里みのり", "桐谷遥", "桃井愛莉", "日野森雫"],
  },
  {
    id: "vivid_bad_squad",
    name: "Vivid BAD SQUAD",
    nameJa: "ビビバス",
    imageSrc: "/chara_pc.png2.webp",
    bgImage: "/bg_pc3.png",
    logoImage: "/logo.png3.webp",
    members: ["小豆沢こはね", "白石杏", "東雲彰人", "青柳冬弥"],
  },
  {
    id: "wonder_magical_showtime",
    name: "ワンダーランズ×ショウタイム",
    nameJa: "ワンダショ",
    imageSrc: "/chara_pc.png1.webp",
    bgImage: "/bg_pc4.png",
    logoImage: "/logo.png4.webp",
    members: ["天馬司", "鳳えむ", "草薙寧々", "神代類"],
  },
  {
    id: "nightcord",
    name: "25時、ナイトコードで。",
    nameJa: "ニーゴ",
    imageSrc: "/chara_pc.png.webp",
    bgImage: "/bg_pc5.png",
    logoImage: "/logo.png5.webp",
    members: ["宵崎奏", "朝比奈まふゆ", "東雲絵名", "暁山瑞希"],
  }
];

export default function CharactersPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        <div className="relative h-[150px] md:h-[200px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/img/characters/bg_heading.webp')" }}
          />
          <div className="absolute inset-0 bg-[#58c7d580] dark:bg-[#295b6a80]"></div>
          <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white text-shadow-lg">
            CHARACTER
          </h1>
        </div>

        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 gap-8">
            {characterGroups.map((group, index) => (
              <Link
                href={`/characters/${group.id}`}
                key={group.id}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  {/* 背景画像 */}
                  <div 
                    className="absolute inset-0 bg-cover bg-right z-0"
                    style={{ backgroundImage: `url(${group.bgImage})` }}
                  ></div>

                  {/* グループロゴ with hover animation */}
                  <motion.div
                    className="absolute right-10 top-[35%] z-20"
                    style={{ width: '210.53px', height: '94.73px', transform: 'translateY(-50%)'}}
                  >
                    <Image
                      src={group.logoImage}
                      alt="group logo"
                      width={211}
                      height={95}
                      className="object-contain"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </motion.div>

                  {/* コンテンツ */}
                  <div className="relative z-10 p-4 md:p-6 flex flex-col md:flex-row items-center bg-black/20">
                    {/* モバイル用グループ名 */}
                    <div className="md:hidden w-full text-center mb-4">
                      <h2 className="text-xl font-bold text-white text-shadow-md">{group.name}</h2>
                      <p className="text-sm text-white/90">{group.nameJa}</p>
                    </div>

                    {/* キャラクター画像 */}
                    <div className="w-full md:w-1/2 flex justify-center">
                      <Image
                        src={group.imageSrc}
                        alt={group.name}
                        width={1320}
                        height={605}
                        className="object-contain"
                        priority={index < 2}
                        quality={90}
                      />
                    </div>

                    {/* テキストコンテンツ */}
                    <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0 text-center md:text-left">
                      {/* デスクトップ用グループ名 */}
                      <div className="hidden md:block mb-4">
                        <h2 className="text-2xl font-bold text-white text-shadow-md">{group.name}</h2>
                        <p className="text-sm text-white/90">{group.nameJa}</p>
                      </div>

                      <div className="mt-2">
                        <p className="text-sm text-white/80">
                          {group.members.join(" / ")}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 矢印アイコン */}
                  <div className="absolute right-4 bottom-4 w-8 h-8 rounded-full bg-white/30 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}