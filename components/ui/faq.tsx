"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface AnimatedHeightProps {
  isOpen: boolean;
  children: React.ReactNode;
}

function AnimatedHeight({ isOpen, children }: AnimatedHeightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(
    isOpen ? undefined : 0
  );

  useEffect(() => {
    if (!ref.current) return;

    const resizeObserver = new ResizeObserver((el) => {
      setHeight(isOpen ? el[0].contentRect.height : 0);
    });

    resizeObserver.observe(ref.current);
    return () => resizeObserver.disconnect();
  }, [isOpen]);

  return (
    <div
      className="overflow-hidden transition-[height] duration-300 ease-in-out"
      style={{ height }}>
      <div ref={ref}>{children}</div>
    </div>
  );
}

const faqs = [
  {
    question:
      "What is two-factor authentication (2FA) and how does it enhance security?",
    answer:
      "If you manage a website or web service, you might be an easy target for credential stuffing attacks. Get to know what they are and how to protect yourself by using a strong, unique method of authentication. Need to learn more? Read our FAQ section for more details.",
  },
  {
    question: "What should I do if I receive a suspicious email?",
    answer:
      "If you receive a suspicious email, do not click on any links or download any attachments. Forward the email to your IT department or security team for analysis.",
  },
  {
    question: "What is encryption and how does it protect my data?",
    answer:
      "Encryption is a process that scrambles readable text so it can only be read by the person who has the secret code, or decryption key.",
  },
  {
    question: "How can I ensure my mobile devices are secure?",
    answer:
      "Secure your mobile devices by using strong passwords, enabling encryption, and keeping software up to date.",
  },
  {
    question: "What are the common signs of a data breach?",
    answer:
      "Common signs include unexpected software behavior, unauthorized password changes, and unusual network activity.",
  },
  {
    question: "How can I create a strong password?",
    answer:
      "Create strong passwords using a combination of letters, numbers, and special characters. Avoid using personal information.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#9eff00] mb-2">FAQ</span>
          <h2 className="text-3xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400">
            Your Trusted Partner in Data Protection with Cutting-Edge Solutions
            for
            <br /> Comprehensive Data Security
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-black/50 rounded-lg overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-4 text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }>
                <span className="text-white font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatedHeight isOpen={openIndex === index}>
                <div className="px-4 pb-4">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </AnimatedHeight>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 bg-black rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Secure Your Data with Jeffeson Protection Solution
          </h3>
          <p className="text-gray-400 mb-6">
            Allow you to set thresholds for security prevention and receive
            real-time alerts
            <br />
            when these thresholds are breached.
          </p>
          <Link
            href="#"
            className="inline-flex items-center rounded-full bg-[#9eff00] px-6 py-3 text-sm font-semibold text-black hover:bg-[#8adf00]">
            Get Started
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
