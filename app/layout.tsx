import type { Metadata } from "next";
<<<<<<< HEAD
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
=======
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
>>>>>>> 9e6afd7abe014f6c25347937e1433a0f6e78ac4b
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumora - Software Photobooth Terbaik Indonesia",
  description: "Kelola photobooth Anda hanya dari HP. Hemat hingga 60% biaya operasional.",
  icons: {
<<<<<<< HEAD
    icon: "/app/favicon.ico",
=======
    icon: "/favicon.ico",
>>>>>>> 9e6afd7abe014f6c25347937e1433a0f6e78ac4b
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
<<<<<<< HEAD
      <body className={`${plusJakarta.className} bg-slate-50 text-slate-900 antialiased`}>{children}</body>
=======
      <body className="font-sans antialiased">{children}</body>
>>>>>>> 9e6afd7abe014f6c25347937e1433a0f6e78ac4b
    </html>
  );
}
