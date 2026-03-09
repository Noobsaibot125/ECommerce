import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ClientProviders } from "@/components/ClientProviders";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "si Hi-Tech | E-Commerce",
  description: "High-tech Apple-inspired E-Commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <ClientProviders>
          <Navbar />
          <main className="flex-1 flex flex-col items-center w-full">
            {children}
          </main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}

