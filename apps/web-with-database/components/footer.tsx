"use client";

import { footerLinks, socialLinks } from "@workspace/ui/lib/const";
import { motion } from "framer-motion";
import {
  Code,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 mb-6"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="p-3 bg-none rounded-xl shadow-lg"
                >
                  <Image
                    height={60}
                    width={60}
                    src="/Solarius.png"
                    alt="Solarius Logo"
                    className="rounded-full"
                  />
                </motion.div>
                <span className="text-2xl font-bold">Solarius</span>
              </motion.div>
              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                Transform your ideas into powerful digital solutions. We provide
                comprehensive web development, mobile apps, and custom software
                with expert consultancy and dedicated development teams.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-gray-400">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center cursor-pointer hover:text-white transition-colors duration-300"
                >
                  <Mail className="h-5 w-5 mr-3" />
                  tanishbasu50@gmail.com
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center cursor-pointer hover:text-white transition-colors duration-300"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  +91 9330610914
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center cursor-pointer hover:text-white transition-colors duration-300"
                >
                  <MapPin className="h-5 w-5 mr-3" />
                  Kolkata ,India
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(
            ([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h3 className="font-bold text-lg mb-6 capitalize text-white">
                  {category === "products"
                    ? "Solutions"
                    : category === "services"
                      ? "Services"
                      : category === "company"
                        ? "Company"
                        : category === "resources"
                          ? "Resources"
                          : category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: categoryIndex * 0.1 + linkIndex * 0.05,
                      }}
                    >
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group"
                      >
                        {link.name}
                        <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ),
          )}
        </div>

        {/** {/* Newsletter Signup }
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-gray-800 pt-12 mb-12"
        >
          <div className="max-w-md">
            <h3 className="font-bold text-xl mb-3 text-white">Stay Connected</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Get the latest development insights, technical tutorials, industry trends, and exclusive updates 
              from our expert development team.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-gray-800 border border-gray-700 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-r-xl font-bold transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
              Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div> */}

        {/* Development Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-gray-800 pt-12 mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "50+", label: "Expert Developers" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "5+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <motion.div
                  className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.5,
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 mb-6 md:mb-0"
          >
            © 2025 Solarius. All rights reserved. Crafted with 💙 for
            developers worldwide.
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-12 bg-gray-800 ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 group shadow-lg hover:shadow-xl`}
              >
                <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
