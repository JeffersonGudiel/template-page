import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black/50 py-12 md:py-20 border-t border-gray-700 text-white">
      <div className="container mx-auto px-6 md:px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-8 w-8"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  className="fill-[#9eff00] stroke-[#9eff00]"
                />
              </svg>
              <span className="text-xl font-bold">Jefferson</span>
            </Link>
            <p className="text-gray-400 text-sm max-w-sm">
              Securing Your Digital World: Your Trusted Partner in Data
              Protection and Cutting Edge Solutions for Data Security.
            </p>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-gray-400 hover:text-white transition-colors">
                  Feature
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Info</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Stay Connected</h3>
            <p className="text-sm text-gray-400 mb-4">
              Keep up with our latest security insights and updates. Follow us
              on social media for more information.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-sm text-gray-400 text-center">
            Copyright © {new Date().getFullYear()} Jefferson Gudiel. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
