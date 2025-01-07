import type { Metadata } from "next";
import { Geist, Geist_Mono, Playwrite_RO } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { ThemeProvider } from "next-themes";

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
  title: "Home",
  description: "Homepage of bestedu",
  keywords: "ho huh jgjh hvj  jhgj",
  authors: { name: "jhgxjs", url: "sjdfgs" },
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
