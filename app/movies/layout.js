import "../globals.css";
import { Ubuntu_Mono } from "next/font/google";
import NavBar from "@/components/NavBar";
import Multi from "@/components/multiSearch/Multi";
import { MoviesDesc } from "@/components/TVDesc";
const ubuntu = Ubuntu_Mono({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "See Movies Here",
  description: MoviesDesc,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <NavBar tv={false} />
        <div className="top-14 block justify-center mb-[80px]">
          <Multi />
        </div>
        {children}
      </body>
    </html>
  );
}
