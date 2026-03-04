import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BizTech Portfolio Workshop",
  description: "BizTech Portfolio Workshop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col ${googleSans.className} antialiased mx-4 sm:mx-16 md:mx-64 mt-8`}
      >
        <Link href="/" className="text-sm text-gray-500 w-full mb-8">Home</Link>
        {children}
      </body>
    </html>
  );
}
