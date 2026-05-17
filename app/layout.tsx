import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumora - Software Photobooth Terbaik Indonesia",
  description: "Kelola photobooth Anda hanya dari HP. Hemat hingga 60% biaya operasional.",
  icons: {
    icon: "/app/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${plusJakarta.className} bg-slate-50 text-slate-900 antialiased`}>{children}</body>
    </html>
  );
}
