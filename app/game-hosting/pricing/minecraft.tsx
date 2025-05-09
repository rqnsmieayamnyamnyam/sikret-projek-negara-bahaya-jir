"use client"

import { motion } from "framer-motion"
import { Check, ChevronRight } from "lucide-react"

const plans = [
  {
    name: "Starter",
    description: "Perfect for small Minecraft communities",
    monthlyPrice: 5.99,
    features: [
      "2 GB RAM",
      "Up to 20 Players",
      "SSD Storage",
      "Unlimited Bandwidth",
      "1-Click Mod Installation",
      "Spigot/Bukkit Support",
      "Basic Plugin Support",
      "Daily Backups",
      "DDoS Protection",
      "24/7 Support",
    ],
    popular: false,
    color: "blue",
  },
  {
    name: "Premium",
    description: "For growing Minecraft servers",
    monthlyPrice: 12.99,
    features: [
      "6 GB RAM",
      "Up to 60 Players",
      "NVMe SSD Storage",
      "Unlimited Bandwidth",
      "1-Click Mod Installation",
      "All Server Types Support",
      "Advanced Plugin Support",
      "Hourly Backups",
      "DDoS Protection",
      "Priority Support",
      "Custom Domain",
      "Server Manager Access",
    ],
    popular: true,
    color: "blue",
  },
  {
    name: "Ultimate",
    description: "For large Minecraft communities",
    monthlyPrice: 24.99,
    features: [
      "12 GB RAM",
      "Up to 120 Players",
      "NVMe SSD Storage",
      "Unlimited Bandwidth",
      "1-Click Mod Installation",
      "All Server Types Support",
      "Advanced Plugin Support",
      "Real-time Backups",
      "Enhanced DDoS Protection",
      "Priority Support",
      "Custom Domain",
      "Server Manager Access",
      "Custom Control Panel",
      "Multiple Server Locations",
    ],
    popular: false,
    color: "blue",
  },
]

const getColorClass = (color: string, type: string) => {
  const colorMap: Record<string, Record<string, string>> = {
    blue: {
      bg: "bg-blue-600",
      bgHover: "hover:bg-blue-700",
      bgLight: "bg-blue-600/20",
      text: "text-blue-500",
      border: "border-blue-600",
      borderLight: "border-blue-600/50",
      gradient: "from-blue-600 to-blue-700",
      gradientHover: "from-blue-500 to-blue-600",
    },
  }

  return colorMap[color][type]
}

export default function MinecraftPricing() {
  return (
    <div>
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-white mb-4">Minecraft Server Hosting</h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Host your own Minecraft server with our optimized plans. Instant setup, easy mod installation, and 24/7
          support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`bg-gray-900/30 backdrop-blur-lg rounded-xl ${
              plan.popular
                ? `border-2 ${getColorClass(plan.color, "borderLight")} lg:scale-105 lg:-my-2 z-10`
                : "border border-gray-800/50"
            } overflow-hidden group`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              y: -5,
              boxShadow: `0 10px 30px -10px ${plan.popular ? "rgba(79, 70, 229, 0.4)" : "rgba(37, 99, 235, 0.2)"}`,
              borderColor: plan.popular ? "rgba(79, 70, 229, 0.6)" : "rgba(37, 99, 235, 0.3)",
            }}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute top-0 right-0">
                <div
                  className={`${getColorClass(plan.color, "bg")} text-xs font-bold text-white px-3 py-1 rounded-bl-lg`}
                >
                  MOST POPULAR
                </div>
              </div>
            )}

            {/* Card Header */}
            <div className="relative">
              <div className={`h-8 ${getColorClass(plan.color, "bgLight")} w-full`}></div>
              <div className="p-6 pb-4">
                <h3 className="font-bold text-2xl text-white">{plan.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{plan.description}</p>
                <div className="flex items-baseline mt-4">
                  <span className="text-3xl font-bold text-white">${plan.monthlyPrice}</span>
                  <span className="text-sm text-gray-400 ml-1">/month</span>
                </div>
                <div className="mt-2 text-sm text-green-500">
                  Save ${(plan.monthlyPrice * 12 * 0.2).toFixed(2)} with yearly billing
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="px-6 py-4 border-t border-gray-800/50">
              <h4 className={`text-sm font-semibold ${getColorClass(plan.color, "text")} uppercase mb-3`}>
                What's included
              </h4>
              <ul className="space-y-2">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center text-sm text-gray-300"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <Check className={`h-4 w-4 ${getColorClass(plan.color, "text")} mr-2 flex-shrink-0`} />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="p-6 bg-gradient-to-b from-transparent to-gray-900/50">
              <motion.button
                className={`w-full bg-gradient-to-r ${getColorClass(plan.color, "gradient")} text-white py-3 rounded-md flex items-center justify-center group relative overflow-hidden`}
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(37, 99, 235, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 font-medium">Get Started</span>
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${getColorClass(plan.color, "gradientHover")}`}
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-400 mb-6">
          Need a custom Minecraft server configuration? <br className="md:hidden" />
          Contact our gaming experts for a tailored solution.
        </p>
        <motion.button
          className="bg-gray-800/50 hover:bg-gray-700/50 text-white px-6 py-3 rounded-md flex items-center justify-center mx-auto group relative overflow-hidden border border-gray-700/50"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(37, 99, 235, 0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 font-medium">Contact Us</span>
          <ChevronRight className="h-5 w-5 ml-2" />
        </motion.button>
      </div>
    </div>
  )
}
