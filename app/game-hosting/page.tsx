"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, ChevronDown, Shield, Zap, Server, Clock, Users, HardDrive } from "lucide-react"
import ParticleBackground from "@/components/particle-background"
import Header from "@/components/header"
import Footer from "@/components/footer"
import MinecraftPricing from "./pricing/minecraft"
import ValheimPricing from "./pricing/valheim"
import RustPricing from "./pricing/rust"
import ArkPricing from "./pricing/ark"

// Tambahkan import untuk useMobile
import { useMobile } from "@/hooks/use-mobile"

type GameOption = {
  id: string
  name: string
  icon: string
  description: string
}

export default function GameHosting() {
  const [selectedGame, setSelectedGame] = useState<string>("minecraft")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const featuresRef = useRef<HTMLDivElement>(null)
  const pricingRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)

  // Tambahkan hook useMobile di dalam komponen GameHosting
  const { isMobile, isTablet } = useMobile()

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const gameOptions: GameOption[] = [
    {
      id: "minecraft",
      name: "Minecraft",
      icon: "/placeholder.svg?height=60&width=60",
      description: "Host your own Minecraft server with mod support and instant setup.",
    },
    {
      id: "valheim",
      name: "Valheim",
      icon: "/placeholder.svg?height=60&width=60",
      description: "Create your Viking world with friends on a dedicated Valheim server.",
    },
    {
      id: "rust",
      name: "Rust",
      icon: "/placeholder.svg?height=60&width=60",
      description: "Survive the harsh world of Rust with your own customizable server.",
    },
    {
      id: "ark",
      name: "ARK: Survival Evolved",
      icon: "/placeholder.svg?height=60&width=60",
      description: "Tame dinosaurs and build your empire on a private ARK server.",
    },
  ]

  const renderPricingComponent = () => {
    switch (selectedGame) {
      case "minecraft":
        return <MinecraftPricing />
      case "valheim":
        return <ValheimPricing />
      case "rust":
        return <RustPricing />
      case "ark":
        return <ArkPricing />
      default:
        return <MinecraftPricing />
    }
  }

  const faqs = [
    {
      question: "How do I get started with game server hosting?",
      answer:
        "Getting started is easy! Simply select your game, choose a plan that fits your needs, and complete the checkout process. Your server will be deployed instantly and ready to play within minutes.",
    },
    {
      question: "Can I install mods on my game server?",
      answer:
        "Yes! All our game servers support mods and plugins. Our control panel makes it easy to install and manage mods with just a few clicks. We also offer one-click mod installers for popular games like Minecraft, ARK, and Valheim.",
    },
    {
      question: "How many players can join my server?",
      answer:
        "The number of players depends on the plan you choose. Our starter plans support 10-20 players, while our premium plans can handle 100+ players. You can always upgrade your plan if you need more player slots.",
    },
    {
      question: "Do you offer DDoS protection?",
      answer:
        "Yes, all our game servers come with enterprise-grade DDoS protection at no additional cost. Our multi-layered approach ensures your server stays online even during attacks, keeping your gaming experience uninterrupted.",
    },
    {
      question: "Can I switch games on my server?",
      answer:
        "Yes, you can switch between games at any time through our control panel. However, please note that different games may have different resource requirements, so you might need to adjust your plan accordingly.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer 24/7 technical support for all our game server customers. Our team of gaming experts can help with server setup, mod installation, troubleshooting, and any other issues you might encounter.",
    },
  ]

  const features = [
    {
      icon: <Zap className="h-6 w-6 text-blue-500" />,
      title: "Instant Setup",
      description:
        "Get your game server up and running in minutes with our one-click deployment system. No technical expertise required.",
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "DDoS Protection",
      description:
        "Enterprise-grade protection keeps your server online and secure, even during attacks. Play without interruptions.",
    },
    {
      icon: <Server className="h-6 w-6 text-blue-500" />,
      title: "High-Performance Hardware",
      description:
        "Latest generation processors, NVMe SSD storage, and DDR4 RAM ensure smooth gameplay and minimal lag.",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "Easy Mod Installation",
      description:
        "Install and manage mods with just a few clicks through our intuitive control panel. Support for all popular mod platforms.",
    },
    {
      icon: <HardDrive className="h-6 w-6 text-blue-500" />,
      title: "Automatic Backups",
      description:
        "Regular backups of your game world ensure you never lose progress. Restore your server to any previous state with ease.",
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "24/7 Expert Support",
      description:
        "Our team of gaming experts is available around the clock to assist with any questions or issues you may encounter.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
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
              Premium Game Servers
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
            Game Server Hosting <br /> Built for Gamers
          </motion.h1>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            High-performance game servers with instant setup, mod support, and 24/7 support. Create your perfect gaming
            experience with friends.
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
              onClick={() => scrollToSection(pricingRef)}
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
              onClick={() => scrollToSection(featuresRef)}
            >
              <span className="relative z-10 font-medium">Explore Features</span>
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
      </section>

      {/* Stats Section */}
      <section className="py-12 border-t border-gray-800/50 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-6 rounded-xl border border-gray-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, borderColor: "rgba(37, 99, 235, 0.5)" }}
            >
              <div className="text-3xl font-bold text-white mb-1">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime Guarantee</div>
            </motion.div>
            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-6 rounded-xl border border-gray-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, borderColor: "rgba(37, 99, 235, 0.5)" }}
            >
              <div className="text-3xl font-bold text-white mb-1">50,000+</div>
              <div className="text-gray-400 text-sm">Active Servers</div>
            </motion.div>
            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-6 rounded-xl border border-gray-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, borderColor: "rgba(37, 99, 235, 0.5)" }}
            >
              <div className="text-3xl font-bold text-white mb-1">7</div>
              <div className="text-gray-400 text-sm">Global Locations</div>
            </motion.div>
            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-6 rounded-xl border border-gray-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5, borderColor: "rgba(37, 99, 235, 0.5)" }}
            >
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-gray-400 text-sm">Expert Support</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Game Selection & Pricing Section */}
      <section className="py-24 border-t border-gray-800/50 relative" ref={pricingRef}>
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
              Game Servers
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
              Choose Your Game
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Select your game below to see our optimized hosting plans with instant setup and mod support.
            </p>
          </motion.div>

          {/* Game Selection */}
          <div className={`grid ${isMobile ? "grid-cols-1" : isTablet ? "grid-cols-2" : "grid-cols-4"} gap-6 mb-16`}>
            {gameOptions.map((game, index) => (
              <motion.div
                key={game.id}
                className={`bg-gray-900/30 backdrop-blur-lg p-6 rounded-xl border ${
                  selectedGame === game.id ? "border-blue-500" : "border-gray-800/50"
                } relative overflow-hidden cursor-pointer group`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.2)",
                  borderColor: "rgba(37, 99, 235, 0.5)",
                }}
                onClick={() => setSelectedGame(game.id)}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    selectedGame === game.id ? "from-blue-600/20" : "from-blue-600/0"
                  } to-transparent transition-opacity duration-500`}
                />
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 mb-4 relative">
                    <Image
                      src={game.icon || "/placeholder.svg"}
                      alt={game.name}
                      width={60}
                      height={60}
                      className="rounded-md object-contain"
                    />
                    {selectedGame === game.id && (
                      <motion.div
                        className="absolute inset-0 border-2 border-blue-500 rounded-md"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{game.name}</h3>
                  <p className="text-gray-400 text-sm">{game.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pricing Component */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            key={selectedGame}
          >
            {renderPricingComponent()}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 border-t border-gray-800/50 relative" ref={featuresRef}>
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
              Built for Serious Gamers
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Our game servers are designed with features that enhance your gaming experience and make server management
              easy.
            </p>
          </motion.div>

          <div className={`grid ${isMobile ? "grid-cols-1" : isTablet ? "grid-cols-2" : "grid-cols-3"} gap-8`}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/30 backdrop-blur-lg p-8 rounded-xl border border-gray-800/50 relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.2)",
                  borderColor: "rgba(37, 99, 235, 0.3)",
                }}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center mb-4">
                  <motion.div
                    className="h-12 w-12 bg-blue-600/20 rounded-xl flex items-center justify-center mr-4 relative"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                  >
                    {feature.icon}
                    <motion.div
                      className="absolute inset-0 border border-blue-500/30 rounded-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0, 1],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                    />
                  </motion.div>
                  <h3 className="font-bold text-xl">{feature.title}</h3>
                </div>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 border-t border-gray-800/50 relative" ref={faqRef}>
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
              Find answers to common questions about our game server hosting services.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.button
                  className={`w-full text-left p-6 rounded-xl flex justify-between items-center ${
                    expandedFaq === index ? "bg-gray-800/70 shadow-lg" : "bg-gray-900/30 hover:bg-gray-800/50"
                  } backdrop-blur-lg border border-gray-800/50`}
                  onClick={() => toggleFaq(index)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <h3 className="font-medium text-lg text-white">{faq.question}</h3>
                  <motion.div animate={{ rotate: expandedFaq === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </motion.div>
                </motion.button>
                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0 }}
                  animate={{ height: expandedFaq === index ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6 bg-gray-900/20 border-x border-b border-gray-800/50 rounded-b-xl">
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-gray-400 mb-6">Still have questions? Our gaming experts are here to help.</p>
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-md flex items-center justify-center mx-auto group relative overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10 font-medium">Contact Support</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-gray-800/50 relative">
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

            <div className={`${isMobile ? "flex flex-col space-y-4" : "flex items-center justify-between"}`}>
              <div className="md:w-2/3 mb-8 md:mb-0">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Ready to Start Your Gaming Server?
                </motion.h2>
                <motion.p
                  className="text-gray-400 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Join thousands of gamers who trust our platform for reliable, high-performance game server hosting.
                  Get started in minutes with our easy setup process.
                </motion.p>
              </div>
              <motion.div
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
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
