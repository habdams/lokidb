import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loki DB",
  description: "A simple movie database web app experiment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="px-10 pt-5">
          <Link href="/" className="text-2xl  font-bold">
            Loki <span className="text-purple-600">DB</span>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
