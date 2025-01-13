"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const titleDescriptionPairs = [
  {
    title: "Help Me Analyze Products",
    description:
      "Seamlessly use our Chrome extension to analyze potential products for profits, risk, and demand.",
  },
  {
    title: "I Need Affordable 3PL Services",
    description:
      "Scale your ecommerce with logistics centers nationwide, to help you move your products for cheaper and faster. Send inventory in a few clicks.",
  },
  {
    title: "Can I Try It?",
    description:
      "Access 3PL facilities nationwide from our dashboard without MOQ and contracts. Send inventory in a few clicks and always get high volume discounts.",
  },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;
    let charIndex = 0;

    const currentPair = titleDescriptionPairs[currentIndex];

    if (!currentPair || !currentPair.description) return;

    const typeEffect = () => {
      if (charIndex < currentPair.description.length) {
        setTypedText((prev) => currentPair.description.slice(0, charIndex + 1));
        charIndex++;
        typingTimeout = setTimeout(typeEffect, 40);
      } else {
        typingTimeout = setTimeout(() => {
          setTypedText("");
          setCurrentIndex(
            (prevIndex) => (prevIndex + 1) % titleDescriptionPairs.length
          );
        }, 2000);
      }
    };

    typeEffect();

    return () => clearTimeout(typingTimeout);
  }, [currentIndex]);

  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-4 pt-16 md:pt-20 bg-transparent text-white min-h-[calc(100vh-80px)]">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-white bg-clip-text text-transparent">
        {titleDescriptionPairs[currentIndex]?.title || ""}
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-purple-200 h-16 sm:h-20 md:h-24 mb-6">
        {typedText}
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
        <Link
          href="#"
          className="w-full sm:w-auto rounded-full bg-[#ffffff] px-8 py-3 text-sm font-semibold text-black shadow-sm hover:bg-[#7666665e]">
          Get Started
          <span className="ml-2 inline-block">→</span>
        </Link>
        <Link
          href="#"
          className="w-full sm:w-auto rounded-full border border-white px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/10">
          Learn More
          <span className="ml-2 inline-block">→</span>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
