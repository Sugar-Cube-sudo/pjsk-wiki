"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Event {
  id: string;
  title: string;
  period: string;
  link: string;
  bgColor: string;
  darkBgColor: string;
}

const currentEvents: Event[] = [
  {
    id: "hero",
    title: "You are my HERO!!",
    period: "3/10 15:00 - 3/18 20:59",
    link: "/events/hero",
    bgColor: "bg-[#58c7d5]",
    darkBgColor: "dark:bg-[#295b6a]"
  },
  {
    id: "cats",
    title: "Let's play with cats",
    period: "3/10 12:00 - 3/20 11:59",
    link: "/events/cats",
    bgColor: "bg-[#daa2a8]",
    darkBgColor: "dark:bg-[#58465b]"
  },
  {
    id: "miku2025",
    title: "ミクの日記念プレゼントガチャ",
    period: "3/9 0:00 - 3/15 23:59",
    link: "/gacha/miku2025",
    bgColor: "bg-[#cca65c]",
    darkBgColor: "dark:bg-[#4a5044]"
  },
  {
    id: "marching",
    title: "想い奏でるマーチングパレード",
    period: "3/12 12:00 - 3/21 11:59",
    link: "/gacha/marching",
    bgColor: "bg-[#aa627e]",
    darkBgColor: "dark:bg-[#4e3746]"
  }
];

export function EventsList() {
  return (
    <section className="space-y-4">
      <Card className="border-[#c9dde4] dark:border-[#3a4a59]">
        <CardHeader className="bg-[#58c7d5] dark:bg-[#295b6a] text-white py-2 px-4 flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-medium">イベント・ガチャ情報</CardTitle>
          <Link href="/events" className="text-xs underline">
            もっと見る
          </Link>
        </CardHeader>
        <CardContent className="p-4 bg-white dark:bg-[#1a2430] grid gap-4">
          <div className="space-y-4">
            {currentEvents.map((event) => (
              <div key={event.id} className="flex border dark:border-[#3a4a59] rounded overflow-hidden">
                <div className={`w-32 sm:w-64 h-32 relative ${event.bgColor} ${event.darkBgColor} flex items-center justify-center text-white`}>
                  <div className="text-center p-2">
                    <span className="text-lg font-bold">{event.id.toUpperCase()}</span>
                  </div>
                </div>
                <div className="flex-1 p-3 bg-[#e8f4f8] dark:bg-[#253443]">
                  <h3 className="font-medium mb-2 dark:text-white">{event.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{event.period}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
