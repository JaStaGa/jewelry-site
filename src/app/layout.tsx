import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const display = Montserrat({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Jewelry Site",
  description: "Luxury watches and jewelry",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${display.variable} antialiased min-h-screen bg-bg text-fg`}>
        <Header />
        <div className="h-16" />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
