import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar/sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard Presensi",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex ${inter.className} h-screen`}>
        <Sidebar />
        <div className="flex flex-col flex-grow">
          <Navbar />
          <main className="flex-grow p-4 bg-gray-900 text-white overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
