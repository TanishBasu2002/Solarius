"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Code, Users, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PricingCalculator() {
  const [developers, setDevelopers] = useState(2);
  const [projects, setProjects] = useState(3);
  const [consultancyHours, setConsultancyHours] = useState(4);

  const calculatePrice = () => {
    let basePrice = 99; // Starter base price

    // Developer scaling
    if (developers > 2) {
      if (developers <= 5) {
        basePrice = 399; // Premium tier
      } else {
        return "Contact Us"; // Enterprise tier
      }
    }

    // Project scaling (additional cost for multiple concurrent projects)
    if (projects > 3) basePrice += (projects - 3) * 50;

    // Consultancy hours scaling
    if (consultancyHours > 4) basePrice += (consultancyHours - 4) * 25;

    // Cap at reasonable maximum before enterprise
    return Math.min(basePrice, 999);
  };

  const recommendedPlan = () => {
    const price = calculatePrice();
    if (price === "Contact Us" || developers > 5) return "Enterprise";
    if (developers > 2 || price >= 399) return "Premium";
    return "Starter";
  };

  const getPlanFeatures = () => {
    const plan = recommendedPlan();
    switch (plan) {
      case "Starter":
        return [
          "Web Development Toolkit",
          "Basic Mobile App Framework",
          "2 Developer Team Support",
          "Email Support",
        ];
      case "Premium":
        return [
          "Advanced Web & Mobile Suite",
          "Custom Software Development",
          "5 Developer Team Support",
          "Weekly Consultancy Sessions",
          "Priority Support",
        ];
      case "Enterprise":
        return [
          "Full-Stack Development Platform",
          "Unlimited Developer Access",
          "Custom Enterprise Solutions",
          "Dedicated Account Manager",
          "24/7 Priority Support",
        ];
      default:
        return [];
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto"
    >
      <Card className="glass p-8 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-2 border-white/20 dark:border-gray-700/20">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <Calculator className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
            Development Cost Calculator
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Calculate your development needs and get the right plan
          </p>
        </div>

        <div className="space-y-6">
          {/* Developers Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                <Code className="w-4 h-4 mr-2 text-blue-500" />
                Developers Needed: {developers}
              </label>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {developers <= 2
                  ? "Starter"
                  : developers <= 5
                    ? "Premium"
                    : "Enterprise"}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={developers}
              onChange={(e) => setDevelopers(Number.parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 slider-blue"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1</span>
              <span>5</span>
              <span>10+</span>
            </div>
          </div>

          {/* Projects Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                <Smartphone className="w-4 h-4 mr-2 text-purple-500" />
                Concurrent Projects: {projects}
              </label>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {projects <= 3 ? "Standard" : "High Volume"}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="15"
              value={projects}
              onChange={(e) => setProjects(Number.parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1</span>
              <span>8</span>
              <span>15+</span>
            </div>
          </div>

          {/* Consultancy Hours Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                <Users className="w-4 h-4 mr-2 text-green-500" />
                Weekly Consultancy Hours: {consultancyHours}
              </label>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {consultancyHours <= 4
                  ? "Basic"
                  : consultancyHours <= 10
                    ? "Advanced"
                    : "Premium"}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="20"
              value={consultancyHours}
              onChange={(e) =>
                setConsultancyHours(Number.parseInt(e.target.value))
              }
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0h</span>
              <span>10h</span>
              <span>20h+</span>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 p-6 rounded-xl border border-blue-200/50 dark:border-blue-800/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {typeof calculatePrice() === "number"
                  ? `$${calculatePrice()}/month`
                  : calculatePrice()}
              </div>
              <div className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-300">
                Recommended Plan:{" "}
                <span className="text-purple-600 dark:text-purple-400 font-bold">
                  {recommendedPlan()}
                </span>
              </div>

              {/* Plan Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  What's Included:
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {getPlanFeatures().map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300">
                  {recommendedPlan() === "Enterprise"
                    ? "Contact Sales"
                    : `Start ${recommendedPlan()} Plan`}
                </Button>
                <Link href="#contact">
                  <Button
                    variant="outline"
                    className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                  >
                    Schedule Demo
                  </Button>
                </Link>
              </div>

              <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                {recommendedPlan() === "Enterprise"
                  ? "Custom pricing • Dedicated support • Enterprise features"
                  : "No setup fees • Cancel anytime • 30-day free trial"}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
