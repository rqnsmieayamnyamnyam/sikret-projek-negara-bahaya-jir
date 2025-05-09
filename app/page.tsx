"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, Globe, Shield, Server, Zap, Clock, Cpu, Wifi } from "lucide-react"
import ParticleBackground from "@/components/particle-background"
import { CounterAnimation } from "@/components/counter-animation"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  const featuresRef = useRef(null)
  const performanceRef = useRef(null)
  const gamesRef = useRef(null)
  const regionsRef = useRef(null)
  const testimonialsRef = useRef(null)
  const faqRef = useRef(null)

  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Alex S.",
      role: "Minecraft Server Owner",
      image: "/placeholder.svg?height=50&width=50",
      content:
        "GameServer transformed our community server. Incredible performance and zero downtime. The control panel is super intuitive and managing our modded server is effortless.",
      stats: ["100+ players", "24 mods", "New York"],
      rating: 5,
    },
    {
      name: "Sam K.",
      role: "Rust Server Owner",
      image: "/placeholder.svg?height=50&width=50",
      content:
        "After trying multiple hosting providers, I finally found one that delivers on its promises. The server runs like a dream and performance is excellent, even with a high user count.",
      stats: ["200+ players", "15 plugins", "Frankfurt"],
      rating: 5,
    },
    {
      name: "Jamie R.",
      role: "Valheim Server Owner",
      image: "/placeholder.svg?height=50&width=50",
      content:
        "The customer support team is incredible. They helped me migrate my existing world and had us up and running in no time. The ticket response time is incredibly fast.",
      stats: ["50+ players", "10 mods", "Singapore"],
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-32 relative">
        <motion.div
          className="absolute top-32 left-0 w-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-center">
            <motion.span
              className="bg-blue-600/20 text-blue-500 text-xs px-4 py-1.5 rounded-full inline-block"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(37, 99, 235, 0.3)" }}
            >
              The Ultimate Game Server Hosting Experience
            </motion.span>
          </div>
        </motion.div>
        <div className="container mx-auto px-4 pt-16 relative z-10 text-center">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300 text-center mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Powering the Future <br /> of Game Servers
          </motion.h1>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experience unmatched performance, security, and support with our cutting-edge hosting platform designed for
            serious gamers.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-md flex items-center justify-center group relative overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10 font-medium">View Game Servers</span>
              <motion.span className="relative z-10 ml-2 group-hover:translate-x-1 transition-transform">
                <ChevronRight className="h-5 w-5" />
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
            <motion.button
              className="border border-gray-700 hover:border-blue-500 text-white px-6 py-3 rounded-md relative overflow-hidden group"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10 font-medium">Contact Us</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-blue-500/10 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-blue-500/10 blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-purple-500/10 blur-xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, 20, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        />
      </section>

      {/* Features Section */}
      <motion.section
        className="py-20 border-t border-gray-800/50 relative"
        ref={featuresRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-wrap justify-center gap-4 text-xs text-gray-400 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div className="flex items-center" whileHover={{ scale: 1.05, color: "#fff" }}>
              <div className="h-2 w-2 bg-blue-600 rounded-full mr-2"></div>
              <span>Money-Back Guarantee</span>
            </motion.div>
            <motion.div className="flex items-center ml-4" whileHover={{ scale: 1.05, color: "#fff" }}>
              <div className="h-2 w-2 bg-blue-600 rounded-full mr-2"></div>
              <span>24/7 Support</span>
            </motion.div>
            <motion.div className="flex items-center ml-4" whileHover={{ scale: 1.05, color: "#fff" }}>
              <div className="h-2 w-2 bg-blue-600 rounded-full mr-2"></div>
              <span>Daily Backups</span>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-8 rounded-xl border border-gray-800/50 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.2)",
                borderColor: "rgba(37, 99, 235, 0.3)",
              }}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex justify-center mb-6">
                <motion.div
                  className="h-16 w-16 bg-blue-600/20 rounded-2xl flex items-center justify-center relative"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <Zap className="h-8 w-8 text-blue-500" />
                  <motion.div
                    className="absolute inset-0 border border-blue-500/30 rounded-2xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [1, 0, 1],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>
              </div>
              <h3 className="text-3xl font-bold mb-2 text-center">
                <CounterAnimation end={99.9} decimals={1} suffix="%" duration={2} />
              </h3>
              <p className="text-gray-400 text-center">Uptime Guarantee</p>
            </motion.div>

            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-8 rounded-xl border border-gray-800/50 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.2)",
                borderColor: "rgba(37, 99, 235, 0.3)",
              }}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex justify-center mb-6">
                <motion.div
                  className="h-16 w-16 bg-blue-600/20 rounded-2xl flex items-center justify-center relative"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <Globe className="h-8 w-8 text-blue-500" />
                  <motion.div
                    className="absolute inset-0 border border-blue-500/30 rounded-2xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [1, 0, 1],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                  />
                </motion.div>
              </div>
              <h3 className="text-3xl font-bold mb-2 text-center">
                <CounterAnimation end={2.5} decimals={1} suffix=" Tbps" duration={2} />
              </h3>
              <p className="text-gray-400 text-center">Network Capacity</p>
            </motion.div>

            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-8 rounded-xl border border-gray-800/50 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.2)",
                borderColor: "rgba(37, 99, 235, 0.3)",
              }}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex justify-center mb-6">
                <motion.div
                  className="h-16 w-16 bg-blue-600/20 rounded-2xl flex items-center justify-center relative"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <Zap className="h-8 w-8 text-blue-500" />
                  <motion.div
                    className="absolute inset-0 border border-blue-500/30 rounded-2xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [1, 0, 1],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                  />
                </motion.div>
              </div>
              <h3 className="text-3xl font-bold mb-2 text-center">1-Click</h3>
              <p className="text-gray-400 text-center">Instant Deployment</p>
            </motion.div>

            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-8 rounded-xl border border-gray-800/50 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.2)",
                borderColor: "rgba(37, 99, 235, 0.3)",
              }}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex justify-center mb-6">
                <motion.div
                  className="h-16 w-16 bg-blue-600/20 rounded-2xl flex items-center justify-center relative"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <Clock className="h-8 w-8 text-blue-500" />
                  <motion.div
                    className="absolute inset-0 border border-blue-500/30 rounded-2xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [1, 0, 1],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
                  />
                </motion.div>
              </div>
              <h3 className="text-3xl font-bold mb-2 text-center">24/7</h3>
              <p className="text-gray-400 text-center">Technical Support</p>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              className="flex items-center text-xs text-gray-400 bg-gray-800/30 px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(31, 41, 55, 0.5)" }}
            >
              <div className="h-2 w-2 border border-blue-500 rounded-full mr-2 relative">
                <motion.div
                  className="absolute inset-0 bg-blue-500 rounded-full"
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
              <span>Trusted by over 50,000 game server admins</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Performance Section */}
      <motion.section
        className="py-24 border-t border-gray-800/50 relative"
        ref={performanceRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="bg-blue-600/20 text-blue-500 text-xs px-4 py-1.5 rounded-full inline-block"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(37, 99, 235, 0.3)" }}
            >
              Premium Features
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
              Engineered for Peak <br /> Gaming Performance
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Experience next-level gaming with our premium hosting infrastructure designed specifically for gamers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-8 rounded-xl border border-gray-800/50 relative overflow-hidden group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{
                once: true,
              }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.2)",
                borderColor: "rgba(37, 99, 235, 0.3)",
              }}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center mb-6">
                <motion.div
                  className="h-12 w-12 bg-blue-600/20 rounded-xl flex items-center justify-center mr-4 relative"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <Cpu className="h-6 w-6 text-blue-500" />
                  <motion.div
                    className="absolute inset-0 border border-blue-500/30 rounded-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0, 1],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>
                <h3 className="font-bold text-xl">Powerful Servers</h3>
              </div>
              <p className="text-gray-400 text-base mb-6">
                High-performance game servers with low latency and 99.9% uptime. Our hardware is optimized specifically
                for gaming workloads.
              </p>
              <div className="grid grid-cols-3 gap-3 text-sm">
                <motion.div
                  className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg text-center group relative overflow-hidden"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
                >
                  <span className="text-gray-400 group-hover:text-white transition-colors">SSD Storage</span>
                  <motion.div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 group-hover:w-full transition-all duration-300" />
                </motion.div>
                <motion.div
                  className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg text-center group relative overflow-hidden"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
                >
                  <span className="text-gray-400 group-hover:text-white transition-colors">DDR4 Memory</span>
                  <motion.div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 group-hover:w-full transition-all duration-300" />
                </motion.div>
                <motion.div
                  className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg text-center group relative overflow-hidden"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
                >
                  <span className="text-gray-400 group-hover:text-white transition-colors">Latest Xeon</span>
                  <motion.div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 group-hover:w-full transition-all duration-300" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-8 rounded-xl border border-gray-800/50 relative overflow-hidden group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.2)",
                borderColor: "rgba(37, 99, 235, 0.3)",
              }}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center mb-6">
                <motion.div
                  className="h-12 w-12 bg-blue-600/20 rounded-xl flex items-center justify-center mr-4 relative"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <Shield className="h-6 w-6 text-blue-500" />
                  <motion.div
                    className="absolute inset-0 border border-blue-500/30 rounded-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0, 1],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                  />
                </motion.div>
                <h3 className="font-bold text-xl">DDoS Protection</h3>
              </div>
              <p className="text-gray-400 text-base mb-6">
                Advanced security measures to keep your game servers safe and stable. Multi-layered protection against
                all types of attacks.
              </p>
              <div className="grid grid-cols-3 gap-3 text-sm">
                <motion.div
                  className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg text-center group relative overflow-hidden"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
                >
                  <span className="text-gray-400 group-hover:text-white transition-colors">L3 Filter</span>
                  <motion.div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 group-hover:w-full transition-all duration-300" />
                </motion.div>
                <motion.div
                  className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg text-center group relative overflow-hidden"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
                >
                  <span className="text-gray-400 group-hover:text-white transition-colors">Layer 7</span>
                  <motion.div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 group-hover:w-full transition-all duration-300" />
                </motion.div>
                <motion.div
                  className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg text-center group relative overflow-hidden"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
                >
                  <span className="text-gray-400 group-hover:text-white transition-colors">Real-time</span>
                  <motion.div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 group-hover:w-full transition-all duration-300" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-8 rounded-xl border border-gray-800/50 relative overflow-hidden group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.2)",
                borderColor: "rgba(37, 99, 235, 0.3)",
              }}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center mb-6">
                <motion.div
                  className="h-12 w-12 bg-blue-600/20 rounded-xl flex items-center justify-center mr-4 relative"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <Server className="h-6 w-6 text-blue-500" />
                  <motion.div
                    className="absolute inset-0 border border-blue-500/30 rounded-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0, 1],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                  />
                </motion.div>
                <h3 className="font-bold text-xl">Instant Setup</h3>
              </div>
              <p className="text-gray-400 text-base mb-6">
                Automated server setup and configuration, no technical expertise required. Get your server running in
                minutes, not hours.
              </p>
              <div className="grid grid-cols-3 gap-3 text-sm">
                <motion.div
                  className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg text-center group relative overflow-hidden"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
                >
                  <span className="text-gray-400 group-hover:text-white transition-colors">1-Click Deploy</span>
                  <motion.div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 group-hover:w-full transition-all duration-300" />
                </motion.div>
                <motion.div
                  className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg text-center group relative overflow-hidden"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
                >
                  <span className="text-gray-400 group-hover:text-white transition-colors">TCF Support</span>
                  <motion.div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 group-hover:w-full transition-all duration-300" />
                </motion.div>
                <motion.div
                  className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg text-center group relative overflow-hidden"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
                >
                  <span className="text-gray-400 group-hover:text-white transition-colors">Easy Migration</span>
                  <motion.div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 group-hover:w-full transition-all duration-300" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-8 rounded-xl border border-gray-800/50 relative overflow-hidden group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.2)",
                borderColor: "rgba(37, 99, 235, 0.3)",
              }}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center mb-6">
                <motion.div
                  className="h-12 w-12 bg-blue-600/20 rounded-xl flex items-center justify-center mr-4 relative"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <Globe className="h-6 w-6 text-blue-500" />
                  <motion.div
                    className="absolute inset-0 border border-blue-500/30 rounded-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0, 1],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
                  />
                </motion.div>
                <h3 className="font-bold text-xl">Global Network</h3>
              </div>
              <p className="text-gray-400 text-base mb-6">
                Strategically located worldwide to optimize your gaming experience. Choose the location closest to your
                players for minimal latency.
              </p>
              <div className="grid grid-cols-3 gap-3 text-sm">
                <motion.div
                  className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg text-center group relative overflow-hidden"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
                >
                  <span className="text-gray-400 group-hover:text-white transition-colors">7 Regions</span>
                  <motion.div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 group-hover:w-full transition-all duration-300" />
                </motion.div>
                <motion.div
                  className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg text-center group relative overflow-hidden"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
                >
                  <span className="text-gray-400 group-hover:text-white transition-colors">Low Latency</span>
                  <motion.div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 group-hover:w-full transition-all duration-300" />
                </motion.div>
                <motion.div
                  className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg text-center group relative overflow-hidden"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
                >
                  <span className="text-gray-400 group-hover:text-white transition-colors">Global</span>
                  <motion.div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 group-hover:w-full transition-all duration-300" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Service Selection Section */}
      <motion.section
        className="py-24 border-t border-gray-800/50 relative"
        ref={gamesRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="bg-blue-600/20 text-blue-500 text-xs px-4 py-1.5 rounded-full inline-block"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(37, 99, 235, 0.3)" }}
            >
              Service Selection
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
              Our Hosting Solutions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Choose the perfect hosting solution for your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Web Hosting Card */}
            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg rounded-xl border border-gray-800/50 overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.2)",
                borderColor: "rgba(37, 99, 235, 0.3)",
              }}
            >
              {/* Card Header */}
              <div className="relative">
                <div className="h-8 bg-gradient-to-r from-blue-600/20 to-blue-800/20 w-full"></div>
                <div className="p-6 pb-4">
                  <h3 className="font-bold text-2xl text-white">Web Hosting</h3>
                  <p className="text-gray-400 text-sm mt-1">Perfect for personal and small business websites</p>
                  <div className="flex items-baseline mt-4">
                    <span className="text-3xl font-bold text-white">$2.99</span>
                    <span className="text-sm text-gray-400 ml-1">/month</span>
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="px-6 py-4 border-t border-gray-800/50">
                <h4 className="text-sm font-semibold text-blue-500 uppercase mb-3">Specifications</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-300">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                    <span>10 GB SSD Storage</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                    <span>Unmetered Bandwidth</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                    <span>1 CPU Core</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                    <span>1 GB RAM</span>
                  </li>
                </ul>
              </div>

              {/* Features */}
              <div className="px-6 py-4 border-t border-gray-800/50">
                <h4 className="text-sm font-semibold text-blue-500 uppercase mb-3">Features</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Free Domain (1 year)</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>5 Email Accounts</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>1-Click WordPress Install</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Free SSL Certificate</span>
                  </li>
                </ul>
              </div>

              {/* Benefits */}
              <div className="px-6 py-4 border-t border-gray-800/50">
                <h4 className="text-sm font-semibold text-blue-500 uppercase mb-3">Benefits</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span>99.9% Uptime Guarantee</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span>24/7 Technical Support</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>30-Day Money Back</span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="p-6 bg-gradient-to-b from-transparent to-gray-900/50">
                <motion.button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-md flex items-center justify-center group relative overflow-hidden"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(37, 99, 235, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 font-medium">Select Plan</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>
              </div>
            </motion.div>

            {/* Cloud Hosting Card - POPULAR */}
            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg rounded-xl border-2 border-blue-600/50 overflow-hidden group lg:scale-105 lg:-mt-2 lg:-mb-2 z-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 40px -10px rgba(37, 99, 235, 0.4)",
                borderColor: "rgba(37, 99, 235, 0.6)",
              }}
            >
              {/* Popular Badge */}
              <div className="absolute top-0 right-0">
                <div className="bg-blue-600 text-xs font-bold text-white px-3 py-1 rounded-bl-lg">MOST POPULAR</div>
              </div>

              {/* Card Header */}
              <div className="relative">
                <div className="h-8 bg-gradient-to-r from-blue-600/40 to-blue-800/40 w-full"></div>
                <div className="p-6 pb-4">
                  <h3 className="font-bold text-2xl text-white">Cloud Hosting</h3>
                  <p className="text-gray-400 text-sm mt-1">Scalable solutions for growing businesses</p>
                  <div className="flex items-baseline mt-4">
                    <span className="text-3xl font-bold text-white">$5.99</span>
                    <span className="text-sm text-gray-400 ml-1">/month</span>
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="px-6 py-4 border-t border-gray-800/50">
                <h4 className="text-sm font-semibold text-blue-500 uppercase mb-3">Specifications</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-300">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                    <span>50 GB SSD Storage</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                    <span>Unmetered Bandwidth</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                    <span>2 CPU Cores</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                    <span>4 GB RAM</span>
                  </li>
                </ul>
              </div>

              {/* Features */}
              <div className="px-6 py-4 border-t border-gray-800/50">
                <h4 className="text-sm font-semibold text-blue-500 uppercase mb-3">Features</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Free Domain (1 year)</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Unlimited Email Accounts</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Auto Scaling Resources</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Free SSL Certificate</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Daily Backups</span>
                  </li>
                </ul>
              </div>

              {/* Benefits */}
              <div className="px-6 py-4 border-t border-gray-800/50">
                <h4 className="text-sm font-semibold text-blue-500 uppercase mb-3">Benefits</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span>99.99% Uptime Guarantee</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span>Priority Technical Support</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>45-Day Money Back</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                    <span>Free Migration Service</span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="p-6 bg-gradient-to-b from-transparent to-gray-900/50">
                <motion.button
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-md flex items-center justify-center group relative overflow-hidden"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 font-medium">Select Plan</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>
              </div>
            </motion.div>

            {/* Game Hosting Card */}
            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg rounded-xl border border-gray-800/50 overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.2)",
                borderColor: "rgba(37, 99, 235, 0.3)",
              }}
            >
              {/* Card Header */}
              <div className="relative">
                <div className="h-8 bg-gradient-to-r from-blue-600/20 to-blue-800/20 w-full"></div>
                <div className="p-6 pb-4">
                  <h3 className="font-bold text-2xl text-white">Game Hosting</h3>
                  <p className="text-gray-400 text-sm mt-1">High-performance servers for gaming communities</p>
                  <div className="flex items-baseline mt-4">
                    <span className="text-3xl font-bold text-white">$8.99</span>
                    <span className="text-sm text-gray-400 ml-1">/month</span>
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="px-6 py-4 border-t border-gray-800/50">
                <h4 className="text-sm font-semibold text-blue-500 uppercase mb-3">Specifications</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-300">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                    <span>100 GB NVMe Storage</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                    <span>Unmetered Bandwidth</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                    <span>4 CPU Cores (3.8+ GHz)</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                    <span>8 GB DDR4 RAM</span>
                  </li>
                </ul>
              </div>

              {/* Features */}
              <div className="px-6 py-4 border-t border-gray-800/50">
                <h4 className="text-sm font-semibold text-blue-500 uppercase mb-3">Features</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>1-Click Game Installation</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mod Support</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>DDoS Protection</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom Control Panel</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Automated Backups</span>
                  </li>
                </ul>
              </div>

              {/* Benefits */}
              <div className="px-6 py-4 border-t border-gray-800/50">
                <h4 className="text-sm font-semibold text-blue-500 uppercase mb-3">Benefits</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span>99.99% Uptime Guarantee</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span>24/7 Priority Support</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <span>Low Latency Network</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                    <span>Free Server Migration</span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="p-6 bg-gradient-to-b from-transparent to-gray-900/50">
                <motion.button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-md flex items-center justify-center group relative overflow-hidden"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(37, 99, 235, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 font-medium">Select Plan</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Compare Plans Button */}
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              className="bg-gray-800/50 hover:bg-gray-700/50 text-white px-6 py-3 rounded-md flex items-center justify-center group relative overflow-hidden border border-gray-700/50"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(37, 99, 235, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 font-medium">Compare All Plans</span>
              <svg className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Regions Section */}
      <motion.section
        className="py-24 border-t border-gray-800/50 relative"
        ref={regionsRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="bg-blue-600/20 text-blue-500 text-xs px-4 py-1.5 rounded-full inline-block"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(37, 99, 235, 0.3)" }}
            >
              Global Infrastructure
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
              Choose Your Region
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Strategic locations worldwide for optimal gaming performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-8 rounded-xl border border-gray-800/50 relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.2)",
                borderColor: "rgba(37, 99, 235, 0.3)",
              }}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center mb-6">
                <motion.div
                  className="h-12 w-12 bg-blue-600/20 rounded-xl flex items-center justify-center mr-4 relative"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <Globe className="h-6 w-6 text-blue-500" />
                  <motion.div
                    className="absolute inset-0 border border-blue-500/30 rounded-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0, 1],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>
                <h3 className="font-bold text-xl">North America</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">3 Data Centers: Los Angeles, Chicago, Dallas</p>
              <div className="flex items-center text-xs text-gray-400">
                <Wifi className="h-3 w-3 mr-1 text-blue-500" />
                <span>Average Ping: 15-30ms</span>
              </div>
              <motion.div className="mt-4 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "85%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-8 rounded-xl border border-gray-800/50 relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.2)",
                borderColor: "rgba(37, 99, 235, 0.3)",
              }}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center mb-6">
                <motion.div
                  className="h-12 w-12 bg-blue-600/20 rounded-xl flex items-center justify-center mr-4 relative"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <Globe className="h-6 w-6 text-blue-500" />
                  <motion.div
                    className="absolute inset-0 border border-blue-500/30 rounded-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0, 1],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                  />
                </motion.div>
                <h3 className="font-bold text-xl">Europe</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">3 Data Centers: London, Frankfurt, Amsterdam</p>
              <div className="flex items-center text-xs text-gray-400">
                <Wifi className="h-3 w-3 mr-1 text-blue-500" />
                <span>Average Ping: 20-35ms</span>
              </div>
              <motion.div className="mt-4 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "90%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-8 rounded-xl border border-gray-800/50 relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.2)",
                borderColor: "rgba(37, 99, 235, 0.3)",
              }}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center mb-6">
                <motion.div
                  className="h-12 w-12 bg-blue-600/20 rounded-xl flex items-center justify-center mr-4 relative"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <Globe className="h-6 w-6 text-blue-500" />
                  <motion.div
                    className="absolute inset-0 border border-blue-500/30 rounded-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0, 1],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                  />
                </motion.div>
                <h3 className="font-bold text-xl">Asia Pacific</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">2 Data Centers: Singapore, Tokyo</p>
              <div className="flex items-center text-xs text-gray-400">
                <Wifi className="h-3 w-3 mr-1 text-blue-500" />
                <span>Average Ping: 25-40ms</span>
              </div>
              <motion.div className="mt-4 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "80%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="py-24 border-t border-gray-800/50 relative"
        ref={testimonialsRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="bg-blue-600/20 text-blue-500 text-xs px-4 py-1.5 rounded-full inline-block"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(37, 99, 235, 0.3)" }}
            >
              Customer Stories
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
              What Our Customers Say
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Join thousands of satisfied server owners who trust our platform
            </p>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `-${activeTestimonial * 100}%` }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="min-w-full px-4">
                    <motion.div
                      className="bg-gray-900/30 backdrop-blur-lg p-8 rounded-xl border border-gray-800/50 relative overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex items-center mb-6">
                        <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={50}
                            height={50}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{testimonial.name}</h3>
                          <p className="text-gray-400 text-sm">{testimonial.role}</p>
                        </div>
                        <div className="ml-auto flex">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <motion.div
                              key={i}
                              className="text-yellow-500"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              ★
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                      <div className="flex flex-wrap gap-2">
                        {testimonial.stats.map((stat, i) => (
                          <span key={i} className="bg-gray-800/50 text-gray-300 text-xs px-3 py-1 rounded-full">
                            {stat}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  className={`h-2 rounded-full ${activeTestimonial === index ? "w-8 bg-blue-500" : "w-2 bg-gray-700"}`}
                  onClick={() => setActiveTestimonial(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-24 border-t border-gray-800/50 relative"
        ref={faqRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="bg-blue-600/20 text-blue-500 text-xs px-4 py-1.5 rounded-full inline-block"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(37, 99, 235, 0.3)" }}
            >
              Frequently Asked Questions
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
              Got Questions?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Find answers to common questions about our game server hosting services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-6 rounded-xl border border-gray-800/50 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.2)",
                borderColor: "rgba(37, 99, 235, 0.3)",
              }}
            >
              <h3 className="font-bold text-lg mb-3">How do I get started?</h3>
              <p className="text-gray-400">
                Getting started is easy! Simply choose your game, select a plan that fits your needs, and complete the
                checkout process. Your server will be deployed instantly and ready to use.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-6 rounded-xl border border-gray-800/50 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.2)",
                borderColor: "rgba(37, 99, 235, 0.3)",
              }}
            >
              <h3 className="font-bold text-lg mb-3">Can I install mods on my server?</h3>
              <p className="text-gray-400">
                Yes! All our game servers support mods and plugins. Our control panel makes it easy to install and
                manage mods with just a few clicks. We also offer one-click mod installers for popular games.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-6 rounded-xl border border-gray-800/50 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.2)",
                borderColor: "rgba(37, 99, 235, 0.3)",
              }}
            >
              <h3 className="font-bold text-lg mb-3">Do you offer DDoS protection?</h3>
              <p className="text-gray-400">
                All our servers come with enterprise-grade DDoS protection at no additional cost. Our multi-layered
                approach ensures your server stays online even during attacks.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-6 rounded-xl border border-gray-800/50 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.2)",
                borderColor: "rgba(37, 99, 235, 0.3)",
              }}
            >
              <h3 className="font-bold text-lg mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-400">
                We accept all major credit cards, PayPal, and cryptocurrency payments. All transactions are secure and
                encrypted. We also offer a 7-day money-back guarantee if you're not satisfied.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-md flex items-center justify-center group relative overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10 font-medium">View All FAQs</span>
              <motion.span className="relative z-10 ml-2 group-hover:translate-x-1 transition-transform">
                <ChevronRight className="h-5 w-5" />
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-24 border-t border-gray-800/50 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg p-8 md:p-12 rounded-2xl border border-gray-700/50 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.1), transparent 70%)",
                  "radial-gradient(circle at 80% 80%, rgba(37, 99, 235, 0.1), transparent 70%)",
                  "radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.1), transparent 70%)",
                ],
              }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Ready to Launch Your Game Server?
              </motion.h2>
              <motion.p
                className="text-gray-400 mb-8 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Join thousands of gamers who trust our platform for reliable, high-performance game server hosting. Get
                started in minutes with our easy setup process.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-md flex items-center justify-center group relative overflow-hidden"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className="relative z-10 font-medium">Get Started Now</span>
                  <motion.span className="relative z-10 ml-2 group-hover:translate-x-1 transition-transform">
                    <ChevronRight className="h-5 w-5" />
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>
                <motion.button
                  className="border border-gray-700 hover:border-blue-500 text-white px-8 py-4 rounded-md relative overflow-hidden group"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className="relative z-10 font-medium">Contact Sales</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
