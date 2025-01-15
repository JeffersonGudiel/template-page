"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useTheme } from "@/components/ui/ThemeProvider";
import { Moon, Sun } from "lucide-react";

export function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#" },
    { name: "Integration", href: "#" },
    { name: "Changelog", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Blog Details", href: "#" },
    { name: "Review", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "404", href: "#" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-md bg-black/80">
      <div className="mx-auto max-w-7xl px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/"
              alt="Jefferson Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-white">jeff</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="relative group">
              <button className="flex items-center text-white hover:text-[#fafafa]">
                All Pages
                <svg
                  className={`ml-2 h-4 w-4 transform transition-transform group-hover:rotate-180`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/" className="text-white hover:text-[#9eff00]">
              Home
            </Link>
            <Link href="/features" className="text-white hover:text-[#9eff00]">
              Features
            </Link>
            <Link href="/pricing" className="text-white hover:text-[#9eff00]">
              Pricing
            </Link>
            <Link href="/contact" className="text-white hover:text-[#9eff00]">
              Contact
            </Link>
            <Link href="/team" className="text-white hover:text-[#9eff00]">
              Team
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="text-white hover:text-[#9eff00]"
              aria-label="Toggle theme">
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <Link
              href="#"
              className="hidden md:inline-block rounded-full bg-[#fcfcfc] px-6 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#b1b2af]">
              Get Started
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <div className="space-y-1">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full text-left rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-[#9eff00] flex items-center justify-between">
                  All Pages
                  <svg
                    className={`h-4 w-4 transform transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="pl-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-[#9eff00]">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/features"
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-[#9eff00]">
                Features
              </Link>
              <Link
                href="/pricing"
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-[#9eff00]">
                Pricing
              </Link>
              <Link
                href="/contact"
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-[#9eff00]">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

const nav = () => {
  return <NavigationMenu />;
};

export default nav;
