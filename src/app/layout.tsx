import type { Metadata } from "next";
import { Geist, Geist_Mono, Playwrite_RO } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const playwrite = Playwrite_RO({
  variable: "--font-playwright",
  weight: "100",
});
export const metadata: Metadata = {
  title: "BestEdu - Unlock Your Learning Potential",
  description:
    "Discover a world of knowledge with our cutting-edge online learning platform. Learn from the best, anytime, anywhere.",
  keywords: "online learning, education, courses, tutorials, learning platform",
  authors: { name: "BestEdu Team", url: "https://bestedu.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playwrite.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
