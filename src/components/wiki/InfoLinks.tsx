"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface InfoLink {
  title: string;
  url: string;
  type: string;
}

const links: InfoLink[] = [
  {
    title: "公式サイト",
    url: "https://pjsekai.sega.jp/",
    type: "official"
  },
  {
    title: "YouTube",
    url: "https://www.youtube.com/@pj_sekai_colorfulstage",
    type: "youtube"
  },
  {
    title: "ニコニコ動画",
    url: "https://ch.nicovideo.jp/pj-sekai",
    type: "nicovideo"
  },
  {
    title: "X(Twitter)",
    url: "https://x.com/pj_sekai",
    type: "twitter"
  },
  {
    title: "Discord",
    url: "https://discord.gg/KBqYzzyZF4",
    type: "discord"
  },
  {
    title: "TikTok",
    url: "https://www.tiktok.com/@pj_sekai_colorfulstage",
    type: "tiktok"
  }
];

export function InfoLinks() {
  return (
    <Card className="mt-4 border-[#c9dde4] dark:border-[#3a4a59]">
      <CardHeader className="bg-[#58c7d5] dark:bg-[#295b6a] text-white py-2 px-4">
        <CardTitle className="text-sm font-medium">外部リンク</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <table className="w-full table-fixed">
          <tbody>
            {links.map((link, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white dark:bg-[#1a2430]" : "bg-gray-50 dark:bg-[#253443]"}>
                <td className="p-2 w-1/3 font-medium text-sm border-b border-gray-100 dark:border-gray-700 dark:text-gray-300">
                  {link.title}
                </td>
                <td className="p-2 text-sm border-b border-gray-100 dark:border-gray-700">
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {link.url}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
