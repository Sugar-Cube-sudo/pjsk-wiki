"use client";

import { Card, CardContent } from "@/components/ui/card";

export function Banner() {
  return (
    <Card className="overflow-hidden border-0 shadow-sm mb-6">
      <CardContent className="p-0 relative">
        <div className="w-full aspect-[3/1] relative bg-gradient-to-r from-[#58c7d5] via-[#95b8cc] to-[#daa2a8] dark:from-[#295b6a] dark:via-[#3a4a59] dark:to-[#58465b]">
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
            <h1 className="text-3xl md:text-5xl font-bold text-shadow-lg">
              プロジェクトセカイ攻略Wiki
            </h1>
            <p className="mt-2 md:mt-4 text-lg md:text-xl font-medium text-shadow-md">
              feat. 初音ミク
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      </CardContent>
    </Card>
  );
}
