import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes"; // 使用正确库的ThemeProvider
import { ClientBody } from "@/app/ClientBody"; // 注意这里是具名导入

export const metadata: Metadata = {
  title: "プロジェクトセカイ攻略Wiki",
  description: "Project Sekai Colorful Stage Wiki",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className="min-h-screen bg-[#f9fafb] dark:bg-[#1a2430] antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ClientBody>{children}</ClientBody>
        </ThemeProvider>
      </body>
    </html>
  );
}
