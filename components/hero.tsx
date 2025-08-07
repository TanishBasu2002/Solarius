"use client";

import { motion, useScroll, useTransform, easeInOut } from "framer-motion";
import {
  ArrowRight,
  Play,
  Code,
  Zap,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRef } from "react";
import Link from "next/link";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeInOut },
    },
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-8 sm:pb-16 px-4"
    >
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 overflow-hidden"
      >
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gradient-to-tr from-green-400/30 to-emerald-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto w-full z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full glass mb-4 sm:mb-6 md:mb-8 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 shadow-lg max-w-full"
            >
              <Code className="h-3 sm:h-4 md:h-5 w-3 sm:w-4 md:w-5 text-blue-500 mr-2 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
                Development & Consultancy Excellence
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight break-words"
            >
              <span className="text-gray-900 dark:text-white block mb-1 sm:mb-2">
                Build Your
              </span>
              <motion.span
                className="gradient-text block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-1 sm:mb-2"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                Vision
              </motion.span>
              <span className="text-gray-900 dark:text-white block">
                with Code
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-2xl break-words"
            >
              Scale development speed by{" "}
              <span className="font-bold text-green-600 dark:text-green-400 px-1 sm:px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded-lg whitespace-nowrap">
                300%
              </span>
              , build web & mobile apps faster, and get expert consultancy with
              our comprehensive development platform.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 rounded-xl"
                >
                  <span className="whitespace-nowrap">Choose Plans</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    className="ml-2 flex-shrink-0"
                  >
                    <ArrowRight className="h-4 sm:h-5 w-4 sm:w-5" />
                  </motion.div>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto glass border-2 border-white/30 dark:border-gray-700/30 px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl hover:bg-white/20 dark:hover:bg-gray-900/20 transition-all duration-300 rounded-xl"
                >
                  <Play className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0" />
                  <Link href="#contact">
                    <span className="whitespace-nowrap">Schedule Demo</span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8"
            >
              {[
                {
                  value: "300%",
                  label: "Faster Development",
                  color: "text-blue-600 dark:text-blue-400",
                },
                {
                  value: "500+",
                  label: "Projects Delivered",
                  color: "text-purple-600 dark:text-purple-400",
                },
                {
                  value: "24/7",
                  label: "Expert Support",
                  color: "text-pink-600 dark:text-pink-400",
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.2, duration: 0.5 }}
                  className="text-center p-2 sm:p-4 glass rounded-xl sm:rounded-2xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl"
                >
                  <div
                    className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold ${stat.color} mb-1 sm:mb-2`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium leading-tight break-words">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced Visual */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative mt-8 lg:mt-0 px-4 lg:px-0"
          >
            {/* Main Dashboard Card */}
            <motion.div
              whileHover={{ rotateY: 5, rotateX: 5 }}
              transition={{ duration: 0.3 }}
              style={{ transformStyle: "preserve-3d" }}
              className="w-full max-w-md mx-auto lg:max-w-none"
            >
              <Card className="glass p-4 sm:p-6 md:p-8 transform rotate-1 hover:rotate-0 transition-all duration-500 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-0 shadow-2xl">
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm sm:text-lg md:text-xl text-gray-900 dark:text-white break-words">
                      Development Progress
                    </h3>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="flex items-center text-green-500 bg-green-100 dark:bg-green-900/30 px-2 sm:px-3 py-1 rounded-full flex-shrink-0"
                    >
                      <TrendingUp className="h-2 sm:h-3 md:h-4 w-2 sm:w-3 md:w-4 mr-1" />
                      <span className="text-xs sm:text-sm font-bold whitespace-nowrap">
                        +157%
                      </span>
                    </motion.div>
                  </div>
                  <div className="h-24 sm:h-32 md:h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl flex items-end justify-around p-3 sm:p-4 md:p-6 relative overflow-hidden">
                    {[85, 90, 100, 95].map((height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{
                          delay: 1.8 + index * 0.2,
                          duration: 0.8,
                          ease: "easeOut",
                        }}
                        className={`w-4 sm:w-8 md:w-12 rounded-t-lg ${
                          index === 0
                            ? "bg-blue-500"
                            : index === 1
                              ? "bg-purple-500"
                              : index === 2
                                ? "bg-pink-500"
                                : "bg-emerald-500"
                        } shadow-lg`}
                      />
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -top-2 sm:-top-4 md:-top-6 -left-2 sm:-left-4 md:-left-6 glass p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-xl"
            >
              <Code className="h-4 sm:h-6 md:h-8 w-4 sm:w-6 md:w-8 text-blue-500" />
            </motion.div>

            <motion.div
              animate={{
                y: [10, -10, 10],
                rotate: [0, -5, 0],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -bottom-2 sm:-bottom-4 md:-bottom-6 -right-2 sm:-right-4 md:-right-6 glass p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-xl"
            >
              <Smartphone className="h-4 sm:h-6 md:h-8 w-4 sm:w-6 md:w-8 text-purple-500" />
            </motion.div>

            <motion.div
              animate={{
                y: [-5, 5, -5],
                rotate: [0, 3, 0],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              className="absolute top-1/2 -right-4 sm:-right-8 md:-right-12 glass p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg"
            >
              <Zap className="h-3 sm:h-5 md:h-6 w-3 sm:w-5 md:w-6 text-pink-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
