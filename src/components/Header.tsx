"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils"; // Utility for conditional classes
import { Menu } from "lucide-react"; // Icons
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  const pathname = usePathname();

  const linkClasses = (href: string) =>
    cn(
      "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100",
      pathname === href && "font-bold text-gray-900 dark:text-gray-100",
    );

  return (
    <nav className="border-gray-200 border-b bg-white dark:border-gray-700 dark:bg-gray-900">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="font-bold text-gray-800 text-xl dark:text-gray-100">
          <Link href="/">BESTEDU</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden space-x-4 md:flex">
          <Link href="/" className={linkClasses("/")}>
            Home
          </Link>
          <Link href="/about" className={linkClasses("/about")}>
            About
          </Link>
          <Link href="/posts" className={linkClasses("/services")}>
            posts
          </Link>
          <Link href="/notes" className={linkClasses("/services")}>
            notes
          </Link>
          <Link href="/contact" className={linkClasses("/contact")}>
            Contact
          </Link>
          <ThemeSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle Menu">
                <Menu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="space-y-2 p-4">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <Link href="/" className={linkClasses("/")}>
                Home
              </Link>
              <Link href="/about" className={linkClasses("/about")}>
                About
              </Link>
              <Link href="/posts" className={linkClasses("/services")}>
                posts
              </Link>
              <Link href="/notes" className={linkClasses("/services")}>
                notes
              </Link>
              <Link href="/contact" className={linkClasses("/contact")}>
                Contact
              </Link>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
