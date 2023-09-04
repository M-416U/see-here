import Script from "next/script";
import "./globals.css";
import { Ubuntu_Mono } from "next/font/google";
const ubuntu = Ubuntu_Mono({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <div className="container">
          <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9570051132890232"
            crossorigin="anonymous"
          />
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-DLMRSMKD1N" />
          <Script id="google-analytics">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-DLMRSMKD1N');
        `}
          </Script>
        </div>
        {children}
      </body>
    </html>
  );
}
