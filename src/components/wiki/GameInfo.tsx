"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface GameInfoItem {
  label: string;
  value: string | React.ReactNode;
}

const gameInfoItems: GameInfoItem[] = [
  {
    label: "リリース日",
    value: "2020年9月30日(水) 13時"
  },
  {
    label: "対応OS",
    value: "iOS/Android"
  },
  {
    label: "ジャンル",
    value: "リズム/アドベンチャー"
  },
  {
    label: "開発",
    value: "セガ/Colorful Palette"
  },
  {
    label: "価格",
    value: "基本プレイ無料 (アイテム課金あり)"
  }
];

export function GameInfo() {
  return (
    <Card className="mt-4 border-[#c9dde4] dark:border-[#3a4a59]">
      <CardHeader className="bg-[#58c7d5] dark:bg-[#295b6a] text-white py-2 px-4">
        <CardTitle className="text-sm font-medium">ゲーム基本情報</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <table className="w-full table-fixed">
          <tbody>
            {gameInfoItems.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white dark:bg-[#1a2430]" : "bg-gray-50 dark:bg-[#253443]"}>
                <td className="p-2 w-1/3 font-medium text-sm border-b border-gray-100 dark:border-gray-700 dark:text-gray-300">
                  {item.label}
                </td>
                <td className="p-2 text-sm border-b border-gray-100 dark:border-gray-700 dark:text-gray-200">
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
