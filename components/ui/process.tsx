"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Primer artículo",
    content: "Descripción detallada del primer paso del proceso...",
  },
  {
    number: "02",
    title: "Segundo artículo",
    content: "Descripción detallada del segundo paso del proceso...",
  },
  {
    number: "03",
    title: "Tercer punto",
    content: "Descripción detallada del tercer paso del proceso...",
  },
  {
    number: "04",
    title: "Cuarto punto",
    content: "Descripción detallada del cuarto paso del proceso...",
  },
  {
    number: "05",
    title: "Quinto punto",
    content: "Descripción detallada del quinto paso del proceso...",
  },
  {
    number: "06",
    title: "Sexto punto",
    content: "Descripción detallada del sexto paso del proceso...",
  },
];

export function ProcessSection() {
  const [openStep, setOpenStep] = useState<string | null>(null);

  return (
    <section className="bg-transparent py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="inline-block rounded-full bg-[#9eff00] px-4 py-2 text-lg font-semibold text-black">
            Nuestro proceso de trabajo
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Guía paso a paso para alcanzar los objetivos de su negocio
          </p>
        </div>

        <div className="space-y-4">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-gray-700 bg-black/30 transition-all duration-200 hover:border-gray-600">
              <button
                onClick={() =>
                  setOpenStep(openStep === step.number ? null : step.number)
                }
                className="flex w-full items-center justify-between p-6">
                <div className="flex items-center gap-6">
                  <span className="text-2xl font-bold">{step.number}</span>
                  <span className="text-lg">{step.title}</span>
                </div>
                <motion.div
                  animate={{ rotate: openStep === step.number ? 45 : 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}>
                  <Plus className="h-6 w-6" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openStep === step.number && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: {
                          duration: 0.3,
                          ease: "easeOut",
                        },
                        opacity: {
                          duration: 0.2,
                          delay: 0.1,
                        },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: {
                          duration: 0.3,
                          ease: "easeIn",
                        },
                        opacity: {
                          duration: 0.2,
                        },
                      },
                    }}
                    className="overflow-hidden">
                    <motion.div
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      className="px-6 pb-6">
                      <div className="border-t border-gray-200 pt-4">
                        {step.content}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
