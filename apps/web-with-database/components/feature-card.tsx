"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Card } from "@workspace/ui/components/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  index: number;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
  bgColor,
  index,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group h-full"
    >
      <Card className="glass p-4 sm:p-6 h-full flex flex-col hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-purple-500/10 transition-all duration-500 border-0 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className={`w-12 sm:w-14 h-12 sm:h-14 rounded-xl sm:rounded-2xl ${bgColor} flex items-center justify-center mb-4 sm:mb-6 group-hover:shadow-lg transition-all duration-300 flex-shrink-0`}
        >
          <Icon className={`h-6 sm:h-7 w-6 sm:w-7 ${color}`} />
        </motion.div>
        <div className="flex-1 flex flex-col">
          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight break-words">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base flex-1 break-words">
            {description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
