"use client";

import type React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { contactInfo } from "@/lib/const";

export function Contact() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]',
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl"
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
            <span className="text-gray-900 dark:text-white">Get in</span>
            <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Touch
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Ready to transform your business with Us? Let's talk about how
            Solarius can help your business grow and achieve remarkable results.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Calendly Scheduling Widget */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="glass p-8 lg:p-10 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-0 shadow-2xl rounded-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg mr-4"
                  >
                    <Calendar className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Schedule a Meeting
                  </h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Book a 30-minute consultation to discuss your marketing goals
                  and discover how our AI solutions can help your business
                  thrive.
                </p>
              </motion.div>

              {/* Calendly Widget */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="rounded-2xl overflow-hidden shadow-inner"
              >
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/tanishbasu/30min"
                  style={{ minWidth: "320px", height: "700px" }}
                />
              </motion.div>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold mb-6 text-gray-900 dark:text-white"
              >
                Contact Information
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed"
              >
                We're here to help and answer any question you might have.
                Schedule a meeting or reach out directly - we look forward to
                discussing how we can help transform your marketing.
              </motion.p>
            </div>

            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target={info.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  info.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.4 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="block"
              >
                <Card className="glass p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-0 rounded-2xl group">
                  <div className="flex items-center space-x-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <info.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-xl mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-lg">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.a>
            ))}

            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <Card className="glass p-6 lg:p-8 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-0 rounded-2xl shadow-xl">
                <h4 className="font-bold text-xl mb-6 text-gray-900 dark:text-white">
                  Office Hours
                </h4>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200/50 dark:border-gray-700/50">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">
                      9:00 AM - 6:00 PM PST
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200/50 dark:border-gray-700/50">
                    <span className="font-medium">Saturday</span>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">
                      10:00 AM - 4:00 PM PST
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Sunday</span>
                    <span className="text-gray-500 dark:text-gray-400">
                      Closed
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Quick Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <Card className="glass p-6 lg:p-8 bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-xl border border-blue-200/30 dark:border-blue-800/30 rounded-2xl">
                <h4 className="font-bold text-xl mb-4 text-gray-900 dark:text-white">
                  Prefer to reach out directly?
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Send us an email and we'll get back to you within 24 hours
                  during business days.
                </p>
                <motion.a
                  href="mailto:tanishbasu50@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </motion.a>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
