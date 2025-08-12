"use client";

import { motion } from "framer-motion";
import { Check, type LucideIcon } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { Card } from "@workspace/ui/components/card";

interface PricingCardProps {
  name: string;
  icon: LucideIcon;
  price: { monthly: number; yearly: number };
  description: string;
  features: string[];
  popular: boolean;
  color: string;
  isYearly: boolean;
  index: number;
}

export function PricingCard({
  name,
  icon: Icon,
  price,
  description,
  features,
  popular,
  color,
  isYearly,
  index,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
      whileHover={{ y: -12, scale: 1.03 }}
      className={`relative h-full ${popular ? "lg:scale-105 z-10" : ""}`}
    >
      {popular && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-20"
        >
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg whitespace-nowrap">
            Most Popular
          </span>
        </motion.div>
      )}

      <Card
        className={`glass p-4 sm:p-6 md:p-8 h-full flex flex-col transition-all duration-500 border-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl hover:shadow-2xl ${
          popular
            ? "ring-2 ring-purple-500/50 hover:ring-purple-500/70 shadow-purple-500/20"
            : "hover:shadow-blue-500/10 dark:hover:shadow-purple-500/10"
        }`}
      >
        {/* Header Section - Fixed Height */}
        <div className="text-center mb-6 sm:mb-8 flex-shrink-0">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ duration: 0.3 }}
            className={`w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-xl sm:rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center shadow-lg`}
          >
            <Icon className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
          </motion.div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white break-words">
            {name}
          </h3>
          <div className="min-h-[3rem] sm:min-h-[4rem] flex items-center justify-center mb-4 sm:mb-6">
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed break-words px-2">
              {description}
            </p>
          </div>
          <div className="mb-4 sm:mb-6">
            <motion.span
              key={isYearly ? "yearly" : "monthly"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
            >
              Starting ${isYearly ? price.yearly : price.monthly}
            </motion.span>
            <span className="text-gray-600 dark:text-gray-300 ml-1 text-sm sm:text-base">
              /{isYearly ? "year" : "month"}
            </span>
          </div>
        </div>

        {/* Features Section - Flexible Height */}
        <div className="flex-1 flex flex-col">
          <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-1">
            {features.map((feature, featureIndex) => (
              <motion.li
                key={featureIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                className="flex items-start"
              >
                <Check className="h-4 sm:h-5 w-4 sm:w-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed break-words">
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Button Section - Fixed at Bottom */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-auto"
          >
            <Button
              className={`w-full py-3 sm:py-4 font-semibold text-sm sm:text-base transition-all duration-300 ${
                popular
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-purple-500/25"
                  : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-blue-500/25"
              }`}
            >
              <span className="whitespace-nowrap">
                {name === "Enterprise" ? "Contact Sales" : "Start "}
              </span>
            </Button>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}
