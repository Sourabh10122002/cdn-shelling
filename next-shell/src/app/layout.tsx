import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js App Shell Demo",
  description: "Demonstrating CDN Shelling architecture with Next.js Static Export",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
          <header className="bg-gray-800 p-4 flex justify-between items-center border-b border-gray-700">
            <h1 className="text-xl font-bold">Next.js App Shell</h1>
            <nav className="space-x-4">
              <a href="#" className="hover:text-blue-400">Home</a>
              <a href="#" className="hover:text-blue-400">About</a>
            </nav>
          </header>

          <main className="flex-1 p-8">
            {children}
          </main>

          <footer className="bg-gray-800 p-4 text-center text-sm text-gray-400 border-t border-gray-700">
            <p>CDN Shelling Architecture - Static Export Demo</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
