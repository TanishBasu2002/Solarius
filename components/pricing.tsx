"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Crown, Building } from "lucide-react";
import { PricingCard } from "@/components/ui/pricing-card";
import { PricingCalculator } from "@/components/pricing-calculator";
import { ScrollAnimationWrapper } from "@/components/scroll-animation-wrapper";
// @ts-ignore
import type { HTMLSection } from "some-module"; // Temporary ignore until type is declared
import { plans } from "@/lib/const";

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const ref = useRef<HTMLSection>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

  return (
    <section
      id="pricing"
      ref={ref}
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollAnimationWrapper className="text-center mb-20" delay={0.2}>
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-gray-900 dark:text-white block mb-2">
              Simple, Transparent
            </span>
            <span className="gradient-text block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Choose the perfect plan for your business.
          </motion.p>

          {/* Enhanced Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center space-x-6 glass p-2 rounded-2xl max-w-md mx-auto bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/20 dark:border-gray-700/20"
          >
            <span
              className={`font-semibold transition-all duration-300 ${
                !isYearly
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              Monthly
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
                isYearly
                  ? "bg-gradient-to-r from-blue-500 to-purple-600"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            >
              <motion.div
                animate={{ x: isYearly ? 32 : 4 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg"
              />
            </motion.button>
            <span
              className={`font-semibold transition-all duration-300 ${
                isYearly
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              Yearly
            </span>
            {isYearly && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs px-3 py-1 rounded-full font-bold"
              >
                Save 20%
              </motion.span>
            )}
          </motion.div>
        </ScrollAnimationWrapper>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20 items-stretch">
          {plans.map((plan, index) => (
            <ScrollAnimationWrapper
              key={plan.name}
              delay={index * 0.15}
              direction={index === 1 ? "up" : index === 0 ? "left" : "right"}
              distance={40}
              className="h-full"
            >
              <PricingCard
                {...plan}
                price={{
                  monthly: Number(plan.price.monthly),
                  yearly: Number(plan.price.yearly),
                }}
                isYearly={isYearly}
                index={index}
              />
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* Pricing Calculator */}
        <ScrollAnimationWrapper delay={0.3} direction="up">
          <PricingCalculator />
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
