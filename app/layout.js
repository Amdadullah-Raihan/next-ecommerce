import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next Ecommerce",
  keywords: "Next.js, Ecommerce, React, Web Development",
  authors: [
    { name: "Amdadul Islam ", url: "https://amdadul-islam.vercel.app/" },
  ],
  description: "A modern ecommerce application built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 max-w-screen-xl mx-auto text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
