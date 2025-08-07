"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { testimonials } from "@/lib/const";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-gray-900 dark:text-white">
              What Our Customers
            </span>
            <span className="gradient-text block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Are Saying
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Join thousands of satisfied customers who have transformed their
            marketing with AI and achieved remarkable results.
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto mb-20">
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={currentIndex}
              {...testimonials[currentIndex]}
              isActive={true}
            />
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2"
          >
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="glass bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-white/30 dark:border-gray-700/30 hover:bg-white/90 dark:hover:bg-gray-900/90 transition-all duration-300 rounded-full w-12 h-12 p-0"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
          >
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="glass bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-white/30 dark:border-gray-700/30 hover:bg-white/90 dark:hover:bg-gray-900/90 transition-all duration-300 rounded-full w-12 h-12 p-0"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </motion.div>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-12">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-3 bg-gradient-to-r from-blue-500 to-purple-600"
                    : "w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
        >
          {[
            {
              value: "4.9/5",
              label: "Average Rating",
              color: "text-blue-600 dark:text-blue-400",
            },
            {
              value: "10,000+",
              label: "Happy Customers",
              color: "text-purple-600 dark:text-purple-400",
            },
            {
              value: "99.9%",
              label: "Uptime",
              color: "text-pink-600 dark:text-pink-400",
            },
            {
              value: "24/7",
              label: "Support",
              color: "text-green-600 dark:text-green-400",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center glass p-6 rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 h-full flex flex-col justify-center"
            >
              <div
                className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-2`}
              >
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
