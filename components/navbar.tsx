"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, X, GraduationCap } from "lucide-react";

import { ModeToggle } from "./mode-toggle";
import { Logo } from "@/assets/Logo";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-4 md:container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="dark:bg-lightGreen bg-darkGreen rounded-full h-7 w-7 flex justify-center">
            <Logo />
          </span>
          <span className="font-bold">Treesoft Academy</span>
        </Link>
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex space-x-2 md:space-x-4">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-2 hover:text-[#013101] dark:hover:text-lightGreen">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-2 hover:text-[#013101] dark:hover:text-lightGreen">
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/courses" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-2 hover:text-[#013101] dark:hover:text-lightGreen">
                  Courses
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-2 hover:text-[#013101] dark:hover:text-lightGreen">
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-2 hover:text-[#013101] dark:hover:text-lightGreen">
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <div className="hidden md:inline-flex">
            <ModeToggle />
          </div>
          <Button asChild className="hidden md:inline-flex">
            <Link href="/register">Register Now</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-b bg-background p-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="hover:text-[#013101] dark:hover:text-lightGreen"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-[#013101] dark:hover:text-lightGreen"
            >
              About
            </Link>
            <Link
              href="/courses"
              className="hover:text-[#013101] dark:hover:text-lightGreen"
            >
              Courses
            </Link>
            <Link
              href="/blog"
              className="hover:text-[#013101] dark:hover:text-lightGreen"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#013101] dark:hover:text-lightGreen"
            >
              Contact
            </Link>
            <div className="flex items-center gap-4">
              <ModeToggle />
              <Button
                asChild
                className="w-full bg-[#013101] hover:bg-darkGreen dark:bg-lightGreen dark:text-black dark:hover:bg-[#98FB98]"
              >
                <Link href="/register">Register Now</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
