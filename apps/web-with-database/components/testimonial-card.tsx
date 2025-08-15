"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card } from "@workspace/ui/components/card";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  content: string;
  isActive: boolean;
}

export function TestimonialCard({
  name,
  role,
  company,
  image,
  rating,
  content,
  isActive,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isActive ? 1 : 0.7, scale: isActive ? 1 : 0.95 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Card className="glass p-8 lg:p-12 text-center border-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-2xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <Quote className="h-12 w-12 text-blue-500 mx-auto mb-6" />
        </motion.div>

        {/* Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-6"
        >
          {[...Array(rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
            </motion.div>
          ))}
        </motion.div>

        {/* Content */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed font-medium"
        >
          "{content}"
        </motion.blockquote>

        {/* Author */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center space-x-4"
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={image || "/placeholder.svg?height=64&width=64"}
            alt={name}
            className="w-16 h-16 rounded-full object-cover ring-4 ring-white/50 dark:ring-gray-700/50"
          />
          <div className="text-left">
            <div className="font-bold text-lg text-gray-900 dark:text-white">
              {name}
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              {role}
            </div>
            <div className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
              {company}
            </div>
          </div>
        </motion.div>
      </Card>
    </motion.div>
  );
}
