import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Roboto, Montserrat } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-roboto' })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-montserrat' })

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { NextAuthProvider } from "@/components/Providers/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Perificio",
  description: "Financial Advisor Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${montserrat.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextAuthProvider >
          <Navbar />
           {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
