"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Free Plan",
    description:
      "Perfect for individuals or small teams just getting started with basic security needs.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "Basic Threat Detection",
      "Limited Alerts",
      "Daily Data Backup (1GB)",
      "Email Support (Business Hours)",
      "Single User License",
    ],
    recommended: false,
    ctaText: "Start Free",
    ctaLink: "/signup",
  },
  {
    name: "Basic Plan",
    description:
      "Ideal for small businesses or individuals looking to secure their data with fundamental protection features.",
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      "Basic Threat Detection",
      "Basic Alerts & Reporting",
      "Daily Data Backup",
      "Email Support",
      "Single User License",
    ],
    recommended: false,
    ctaText: "Select Basic Plan",
    ctaLink: "/contact",
  },
  {
    name: "Premium Plan",
    description:
      "Perfect for medium to large businesses requiring advanced security features and priority support.",
    monthlyPrice: 99,
    yearlyPrice: 990,
    features: [
      "Advanced Threat Detection and Remediation",
      "Real-Time Alerts and Reporting",
      "Continuous Data Backup and Restore",
      "24/7 Priority Support",
      "Multi-User Licenses (Up to 10 Users)",
    ],
    recommended: true,
    ctaText: "Select Premium Plan",
    ctaLink: "/contact",
  },
];

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="bg-transparent pt-4 pb-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-8 text-center lg:w-2/3">
          <p className="mb-2 font-medium text-[#fdfffa]">Pricing & Plan</p>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Choose a suitable plan
          </h2>
          <p className="text-lg text-gray-300">
            Your Trusted Partner in Data Protection with Cutting-Edge Solutions
            for
            <br /> Comprehensive Data Security.
          </p>
        </div>

        <div className="mt-10">
          <div className="mb-10 flex items-center justify-center">
            <span
              className={`mr-3 text-sm font-medium ${
                !isYearly ? "text-gray-100" : "text-gray-500"
              }`}>
              Monthly
            </span>
            <label className="relative inline-block h-8 w-16 cursor-pointer rounded-full bg-gray-200">
              <span className="sr-only">Pricing Switcher</span>
              <input
                type="checkbox"
                className="peer h-0 w-0 opacity-0"
                checked={isYearly}
                onChange={() => setIsYearly(!isYearly)}
              />
              <span className="absolute left-0 top-0 h-8 w-16 rounded-full bg-gray-200 transition-all duration-300 before:absolute before:left-1 before:top-1 before:h-6 before:w-6 before:rounded-full before:bg-[#3a2a2a] before:transition-all before:duration-300 peer-checked:bg-gray-200 peer-checked:before:translate-x-8"></span>
            </label>
            <span
              className={`ml-3 text-sm font-medium ${
                isYearly ? "text-gray-100" : "text-gray-500"
              }`}>
              Yearly
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`rounded-xl p-8 ${
                  plan.recommended
                    ? "bg-[#575756] text-black"
                    : "bg-black/50 text-white"
                }`}>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  {plan.recommended && (
                    <span className="rounded-full bg-[#ffffff] px-3 py-1 text-xs font-semibold text-black">
                      Recommended
                    </span>
                  )}
                </div>
                <p className="mb-6 text-sm">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-sm">
                    {isYearly ? "/year" : "/month"}
                  </span>
                </div>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm">
                      <svg
                        className="mr-2 h-4 w-4 flex-shrink-0 text-[#9eff00]"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.ctaLink}
                  className={`inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                    plan.recommended
                      ? "bg-white text-black hover:bg-gray-100"
                      : "bg-white text-black hover:bg-gray-100"
                  }`}>
                  {plan.ctaText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
