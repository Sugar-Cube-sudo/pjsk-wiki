// 修改 ThemeProvider 组件
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, []);

  if (!mounted) {
    // 服务端渲染时返回空 div 保持一致性
    return <div className="hidden" />;
  }

  return (
    <NextThemesProvider 
      attribute="class"
      defaultTheme="light" // 明确指定默认主题
      enableSystem={false} // 禁用系统主题检测
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}