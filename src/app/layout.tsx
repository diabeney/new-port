import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Playfair_Display, Syne, Manrope } from "next/font/google";

import "./globals.css";

const BlogHeading = Syne({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-blog",
  fallback: ["Inter", "Segoe UI"],
});
const Paragraph = Manrope({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-paragraph",
  fallback: ["Inter", "Segoe UI"],
});
const heading = Playfair_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-heading",
  fallback: ["Serif"],
});

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "Diabene",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={` ${BlogHeading.variable}  ${heading.variable} ${Paragraph.variable} `}
    >
      <body className={` text-BgDark dark:text-LightAccent `}>
        <div id="root" className="bg-BgWhite dark:bg-BgDark">
          <div className=" bg-BgWhite dark:bg-BgDark  mx-auto w-full max-w-[850px]">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
