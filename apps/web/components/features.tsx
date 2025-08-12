"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code,
  Globe,
  Smartphone,
  Settings,
  Users,
  Building,
  Crown,
  Headphones,
} from "lucide-react";
import { FeatureCard } from "@/components/feature-card";
import { ScrollAnimationWrapper } from "@/components/scroll-animation-wrapper";
import { useRef } from "react";
import { features } from "@workspace/ui/lib/const";
import Link from "next/link";

export function Features() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      id="features"
      ref={ref}
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 60,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
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
              Comprehensive Solutions for
            </span>
            <span className="gradient-text block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Modern Development
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Everything you need to build, deploy, and scale web applications,
            mobile apps, and custom software solutions with expert consultancy
            and dedicated development teams.
          </motion.p>
        </ScrollAnimationWrapper>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 items-stretch">
          {features.map((feature, index) => (
            <ScrollAnimationWrapper
              key={feature.title}
              delay={index * 0.1}
              direction={index % 2 === 0 ? "up" : "down"}
              distance={30}
              className="h-full"
            >
              <FeatureCard {...feature} index={index} />
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* Enhanced Development Stats */}
        <ScrollAnimationWrapper className="mb-20" delay={0.3}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                value: "500+",
                label: "Projects Delivered",
                icon: Code,
                color: "text-blue-500",
                bgColor: "bg-blue-500/10",
              },
              {
                value: "50+",
                label: "Expert Developers",
                icon: Users,
                color: "text-purple-500",
                bgColor: "bg-purple-500/10",
              },
              {
                value: "98%",
                label: "Client Satisfaction",
                icon: Crown,
                color: "text-pink-500",
                bgColor: "bg-pink-500/10",
              },
              {
                value: "24/7",
                label: "Technical Support",
                icon: Headphones,
                color: "text-green-500",
                bgColor: "bg-green-500/10",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`text-center p-6 glass rounded-2xl ${stat.bgColor} backdrop-blur-xl border border-white/20 dark:border-gray-700/20`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${stat.bgColor} ${stat.color} mb-4`}
                >
                  <stat.icon className="w-6 h-6" />
                </motion.div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollAnimationWrapper>

        {/* Bottom CTA */}
        <ScrollAnimationWrapper
          className="text-center"
          delay={0.4}
          direction="up"
        >
          <div className="glass p-10 lg:p-12 max-w-3xl mx-auto rounded-3xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 shadow-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex justify-center mb-6"
            >
              <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30">
                <Code className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  Development Excellence
                </span>
              </div>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
              className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              Ready to Scale Your Development?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Join hundreds of companies who trust us with their web, mobile,
              and software development projects. Get expert teams and
              consultancy to bring your vision to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 w-full sm:w-auto">
                  Start Your Project
                </button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="#contact">
                  <button className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 w-full sm:w-auto">
                    Schedule Consultation
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.6 }}
              className="mt-6 text-sm text-gray-500 dark:text-gray-400"
            >
              No commitment required • Expert guidance included
            </motion.div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
