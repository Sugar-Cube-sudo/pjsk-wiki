"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import { ThemeSwitcher } from "@/components/wiki/ThemeSwitcher";

export function Header() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="bg-[#58c7d5] dark:bg-[#295b6a] border-b border-gray-200 dark:border-gray-700 text-white">
      <div className="container flex items-center justify-between py-2">
        <div className="flex flex-1 items-center min-w-0">
          <Link
            href="/"
            className="flex items-center gap-3 flex-shrink-0 hover:opacity-90 transition-opacity"
          >
            <div className="relative w-16 h-16">
              <Image
                src="/logo.png"
                alt="プロジェクトセカイ攻略Wiki"
                width={64}
                height={64}
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-bold leading-tight tracking-wide">
                プロジェクトセカイ
                <br />
                攻略Wiki
              </h1>
            </div>
          </Link>
        </div>

        {/* 右侧功能区域 */}
        <div className="flex items-center gap-4">
          <div className="relative w-64">
            <Input
              type="search"
              placeholder="検索..."
              className="rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 pl-3 pr-10 text-black"
            />
            <Button
              size="sm"
              variant="ghost"
              className="absolute right-0 top-0 h-full px-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Button>
          </div>

          <ThemeSwitcher />

          <Link href="/login">
            <Button
              variant="outline"
              size="sm"
              className="relative overflow-hidden bg-white dark:bg-[#253443] text-[#58c7d5] dark:text-[#95b8cc] border-white dark:border-[#253443] hover:bg-white hover:text-[#446398] dark:hover:bg-[#253443] dark:hover:text-[#daa2a8] transition-all duration-300 ease-in-out"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative z-10">ログイン</span>
              <span
                className={`absolute inset-0 bg-gradient-to-r from-[#daa2a8] via-[#cca65c] to-[#58c7d5] dark:from-[#58465b] dark:via-[#4a5044] dark:to-[#295b6a] transition-transform duration-300 ${
                  isHovered ? "translate-x-0" : "-translate-x-full"
                }`}
                style={{ opacity: 0.3 }}
              ></span>
            </Button>
          </Link>
        </div>
      </div>

      {/* 导航栏保持原样 */}
      <nav className="bg-[#95b8cc] dark:bg-[#3a4a59] px-4 py-1">
        <ul className="flex space-x-4 text-sm">
          <li>
            <Link href="/" className="hover:underline">
              トップ
            </Link>
          </li>
          <li>
            <Link href="/new" className="hover:underline">
              新規作成
            </Link>
          </li>
          <li>
            <Link href="/edit" className="hover:underline">
              編集
            </Link>
          </li>
          <li>
            <Link href="/discussion" className="hover:underline">
              掲示板
            </Link>
          </li>
          <li>
            <Link href="/upload" className="hover:underline">
              アップロード
            </Link>
          </li>
          <li>
            <Link href="/help" className="hover:underline">
              ヘルプ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}