import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI 经济模型研究",
  description: "探索 AI agents 参与下的社会经济模型",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
