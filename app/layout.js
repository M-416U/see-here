"use client";
import "./globals.css";
import { Ubuntu_Mono } from "next/font/google";
import { useEffect } from "react";
import { initGA, logPageView } from "./google-analytics";
const ubuntu = Ubuntu_Mono({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {
  useEffect(() => {
    initGA();
    logPageView();
  }, []);
  return (
    <html lang="en">
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9570051132890232"
        crossorigin="anonymous"
      ></script>
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
