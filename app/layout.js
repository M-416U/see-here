import { MoviesDesc, TVDesc } from "@/components/TVDesc";
import "./globals.css";
import { Ubuntu_Mono } from "next/font/google";
const ubuntu = Ubuntu_Mono({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "See ... Here",
  description: TVDesc + MoviesDesc,
  icons: {
    icon: "/Logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9570051132890232"
     crossorigin="anonymous"></script>
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
