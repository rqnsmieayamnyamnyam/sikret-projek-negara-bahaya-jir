"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronDown, Globe, Shield, Server, Zap, Cpu, LogIn, DollarSign, Menu, X } from "lucide-react"

// NavItem Component
function NavItem({ icon, text, href = "#" }: { icon: React.ReactNode; text: string; href?: string }) {
  return (
    <Link href={href} className="text-sm text-gray-300 hover:text-white relative group">
      <div className="flex items-center">
        {icon}
        <span>{text}</span>
      </div>
      <div className="absolute -bottom-1 left-0 w-full h-0.5 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300"
          initial={{ x: "-100%" }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <motion.div
        className="absolute -right-1 -top-1 h-1.5 w-1.5 bg-blue-500 rounded-full opacity-0"
        whileHover={{ opacity: 1, scale: [1, 1.5, 1] }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
      />
    </Link>
  )
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHostingMenuOpen, setIsHostingMenuOpen] = useState(false)
  const hostingMenuRef = useRef<HTMLDivElement>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle clicks outside the hosting menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (hostingMenuRef.current && !hostingMenuRef.current.contains(event.target as Node)) {
        setIsHostingMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 py-4 w-full ${
        isScrolled ? "bg-[#080c14]/80 backdrop-blur-sm border-b border-gray-800" : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center group">
            <motion.div
              className="h-8 w-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-md mr-2 relative overflow-hidden"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              }}
              transition={{ type: "spring", stiffness: 500, damping: 10 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-transparent opacity-50"
                animate={{
                  rotate: [0, 180],
                  opacity: [0.5, 0.8, 0.5],
                  borderRadius: [
                    "30% 70% 70% 30% / 30% 30% 70% 70%",
                    "50% 50% 50% 50%",
                    "30% 70% 70% 30% / 30% 30% 70% 70%",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <motion.div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                GS
              </motion.div>
            </motion.div>
            <div className="relative">
              <span className="font-bold text-white text-xl relative">GameServer</span>
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {/* Hosting Menu with Mega Dropdown */}
            <div className="relative group" ref={hostingMenuRef}>
              <button
                className="text-sm text-gray-300 hover:text-white flex items-center gap-1 py-2 pr-3 group relative"
                onClick={() => setIsHostingMenuOpen(!isHostingMenuOpen)}
                onMouseEnter={() => setIsHostingMenuOpen(true)}
              >
                <div className="flex items-center">
                  <span className="relative z-10 mr-1.5">Hosting</span>
                  <motion.div animate={{ rotate: isHostingMenuOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="h-4 w-4 opacity-70" />
                  </motion.div>
                </div>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-300"
                  animate={{ width: isHostingMenuOpen ? "100%" : "0%" }}
                  transition={{ duration: 0.2 }}
                />
                <div className="absolute -right-2 -top-2 text-xs bg-blue-500 text-white px-1.5 py-0.5 rounded-md z-10">
                  New
                </div>
              </button>

              {/* Mega Menu */}
              {isHostingMenuOpen && (
                <motion.div
                  className="absolute top-full left-0 w-[500px] max-w-[90vw] bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-xl p-6 z-50 border border-gray-700"
                  onMouseLeave={() => setIsHostingMenuOpen(false)}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute top-0 left-5 w-3 h-3 bg-gray-800 border-t border-l border-gray-700 transform -translate-y-1.5 rotate-45"></div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-white font-medium mb-3 border-b border-gray-700 pb-2 flex items-center">
                        <Server className="h-4 w-4 mr-2 text-blue-500" />
                        Web Solutions
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/web-hosting"
                            className="text-sm text-gray-300 hover:text-white flex items-center gap-2 group"
                          >
                            <div className="h-8 w-8 bg-green-600/20 rounded-md flex items-center justify-center group-hover:bg-green-600/30 transition-all duration-300">
                              <Globe className="h-4 w-4 text-green-500" />
                            </div>
                            <div>
                              <span className="font-medium relative">
                                Web Hosting
                                <motion.span
                                  className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-green-500"
                                  whileHover={{ width: "100%" }}
                                  transition={{ duration: 0.2 }}
                                />
                              </span>
                              <p className="text-xs text-gray-400">For personal and business sites</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/cloud-hosting"
                            className="text-sm text-gray-300 hover:text-white flex items-center gap-2 group"
                          >
                            <div className="h-8 w-8 bg-blue-600/20 rounded-md flex items-center justify-center group-hover:bg-blue-600/30 transition-all duration-300">
                              <Server className="h-4 w-4 text-blue-500" />
                            </div>
                            <div>
                              <span className="font-medium relative">
                                Cloud Hosting
                                <motion.span
                                  className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-500"
                                  whileHover={{ width: "100%" }}
                                  transition={{ duration: 0.2 }}
                                />
                              </span>
                              <p className="text-xs text-gray-400">Scalable cloud solutions</p>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-3 border-b border-gray-700 pb-2 flex items-center">
                        <Zap className="h-4 w-4 mr-2 text-blue-500" />
                        Gaming Solutions
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/game-hosting"
                            className="text-sm text-gray-300 hover:text-white flex items-center gap-2 group"
                          >
                            <div className="h-8 w-8 bg-blue-600/20 rounded-md flex items-center justify-center group-hover:bg-blue-600/30 transition-all duration-300">
                              <Zap className="h-4 w-4 text-blue-500" />
                            </div>
                            <div>
                              <span className="font-medium relative">
                                Game Hosting
                                <motion.span
                                  className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-500"
                                  whileHover={{ width: "100%" }}
                                  transition={{ duration: 0.2 }}
                                />
                              </span>
                              <p className="text-xs text-gray-400">High-performance game servers</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/dedicated-servers"
                            className="text-sm text-gray-300 hover:text-white flex items-center gap-2 group"
                          >
                            <div className="h-8 w-8 bg-purple-600/20 rounded-md flex items-center justify-center group-hover:bg-purple-600/30 transition-all duration-300">
                              <Cpu className="h-4 w-4 text-purple-500" />
                            </div>
                            <div>
                              <span className="font-medium relative">
                                Dedicated Servers
                                <motion.span
                                  className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-purple-500"
                                  whileHover={{ width: "100%" }}
                                  transition={{ duration: 0.2 }}
                                />
                              </span>
                              <p className="text-xs text-gray-400">Full control and resources</p>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            <NavItem icon={<Globe className="h-4 w-4 mr-1.5" />} text="Domain" href="/domain" />
            <Link href="/pricing" className="text-sm text-gray-300 hover:text-white relative group">
              <div className="flex items-center">
                <DollarSign className="h-4 w-4 mr-1.5" />
                <span>Pricing</span>
              </div>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <motion.div
                className="absolute -right-1 -top-1 h-1.5 w-1.5 bg-blue-500 rounded-full opacity-0"
                whileHover={{ opacity: 1, scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              />
            </Link>
            <NavItem icon={<Shield className="h-4 w-4 mr-1.5" />} text="Support" href="/support" />
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {/* Login button - hidden on mobile, visible on md and up */}
          <Link href="/login">
            <motion.button
              className="hidden md:flex bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-md items-center justify-center group relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)",
                borderRadius: "10px 20px 10px 20px",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <LogIn className="h-4 w-4 mr-2" />
              <span className="relative z-10 font-medium">Login</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
              <motion.div
                className="absolute top-0 right-0 h-2 w-2 bg-white/30 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.button>
          </Link>

          {/* Mobile menu toggle button - visible on mobile, hidden on md and up */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md bg-gray-800/80 text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slide down from top when open */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 z-40 w-full"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <div className="border-b border-gray-800 pb-3">
                <button
                  className="flex items-center justify-between w-full text-gray-300 hover:text-white py-2"
                  onClick={() => setIsHostingMenuOpen(!isHostingMenuOpen)}
                >
                  <span className="text-base font-medium">Hosting</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${isHostingMenuOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isHostingMenuOpen && (
                  <motion.div
                    className="mt-2 pl-4 space-y-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href="/web-hosting"
                      className="flex items-center gap-3 text-gray-300 hover:text-white py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Globe className="h-5 w-5 text-green-500" />
                      <span>Web Hosting</span>
                    </Link>
                    <Link
                      href="/cloud-hosting"
                      className="flex items-center gap-3 text-gray-300 hover:text-white py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Server className="h-5 w-5 text-blue-500" />
                      <span>Cloud Hosting</span>
                    </Link>
                    <Link
                      href="/game-hosting"
                      className="flex items-center gap-3 text-gray-300 hover:text-white py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Zap className="h-5 w-5 text-blue-500" />
                      <span>Game Hosting</span>
                    </Link>
                    <Link
                      href="/dedicated-servers"
                      className="flex items-center gap-3 text-gray-300 hover:text-white py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Cpu className="h-5 w-5 text-purple-500" />
                      <span>Dedicated Servers</span>
                    </Link>
                  </motion.div>
                )}
              </div>

              <Link
                href="/domain"
                className="flex items-center gap-3 text-gray-300 hover:text-white py-2 border-b border-gray-800 pb-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Globe className="h-5 w-5" />
                <span className="text-base font-medium">Domain</span>
              </Link>

              <Link
                href="/pricing"
                className="flex items-center gap-3 text-gray-300 hover:text-white py-2 border-b border-gray-800 pb-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <DollarSign className="h-5 w-5" />
                <span className="text-base font-medium">Pricing</span>
              </Link>

              <Link
                href="/support"
                className="flex items-center gap-3 text-gray-300 hover:text-white py-2 border-b border-gray-800 pb-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Shield className="h-5 w-5" />
                <span className="text-base font-medium">Support</span>
              </Link>

              <div className="pt-2">
                <Link href="/login" className="block w-full">
                  <button
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-md flex items-center justify-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <LogIn className="h-5 w-5 mr-2" />
                    <span className="font-medium">Login</span>
                  </button>
                </Link>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
