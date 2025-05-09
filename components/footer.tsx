"use client"

import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Server,
  Globe,
  Cpu,
  Building,
  FileText,
  Newspaper,
  Activity,
  Info,
  Briefcase,
  Mail,
  Shield,
  Zap,
} from "lucide-react"

// SocialIcon Component
function SocialIcon({ icon }: { icon: string }) {
  const getIcon = () => {
    switch (icon) {
      case "twitter":
        return (
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        )
      case "github":
        return (
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.087-.608.087-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        )
      case "discord":
        return (
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
          </svg>
        )
      case "youtube":
        return (
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
              clipRule="evenodd"
            />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <motion.a
      href="#"
      className="h-8 w-8 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600/20 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {getIcon()}
    </motion.a>
  )
}

// FooterColumn Component
function FooterColumn({
  title,
  icon,
  links,
}: {
  title: string
  icon: React.ReactNode
  links: { label: string; href: string; icon: React.ReactNode }[]
}) {
  return (
    <div>
      <h3 className="font-bold text-white mb-4 flex items-center">
        {icon}
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="text-gray-400 hover:text-white flex items-center group">
              <span className="mr-2 text-gray-500 group-hover:text-blue-500 transition-colors">{link.icon}</span>
              <span className="relative">
                {link.label}
                <motion.span
                  className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-gray-800/50 bg-gradient-to-b from-[#080c14] to-[#0a101c]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            <div>
              <Link href="/" className="flex items-center mb-6 group">
                <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg mr-3 relative overflow-hidden group-hover:rounded-xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-transparent opacity-50"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                    GS
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600"
                    initial={{ y: "100%" }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div>
                  <span className="font-bold text-white text-xl">GameServer</span>
                  <div className="text-xs text-gray-400">Premium Game Hosting</div>
                </div>
              </Link>
              <p className="text-gray-400 text-sm mb-6 border-l-2 border-blue-500/30 pl-4">
                Premium game server hosting with unmatched performance, security, and support. Trusted by gamers
                worldwide.
              </p>
              <div className="flex space-x-4">
                <SocialIcon icon="twitter" />
                <SocialIcon icon="github" />
                <SocialIcon icon="discord" />
                <SocialIcon icon="youtube" />
              </div>
            </div>

            <FooterColumn
              title="Products"
              icon={<Server className="h-4 w-4 mr-2 text-blue-500" />}
              links={[
                { label: "Web Hosting", href: "/web-hosting", icon: <Globe className="h-3 w-3" /> },
                { label: "Cloud Hosting", href: "/cloud-hosting", icon: <Cpu className="h-3 w-3" /> },
                { label: "Game Servers", href: "/game-hosting", icon: <Zap className="h-3 w-3" /> },
                { label: "Dedicated Servers", href: "/dedicated-servers", icon: <Server className="h-3 w-3" /> },
                { label: "Domain Names", href: "/domain", icon: <Globe className="h-3 w-3" /> },
              ]}
            />

            <FooterColumn
              title="Resources"
              icon={<Cpu className="h-4 w-4 mr-2 text-blue-500" />}
              links={[
                { label: "Documentation", href: "/docs", icon: <FileText className="h-3 w-3" /> },
                { label: "Blog", href: "/blog", icon: <Newspaper className="h-3 w-3" /> },
                { label: "Status", href: "/status", icon: <Activity className="h-3 w-3" /> },
              ]}
            />

            <FooterColumn
              title="Company"
              icon={<Building className="h-4 w-4 mr-2 text-blue-500" />}
              links={[
                { label: "About Us", href: "/about", icon: <Info className="h-3 w-3" /> },
                { label: "Careers", href: "/careers", icon: <Briefcase className="h-3 w-3" /> },
                { label: "Support", href: "/support", icon: <Mail className="h-3 w-3" /> },
                { label: "Privacy Policy", href: "/privacy", icon: <Shield className="h-3 w-3" /> },
                { label: "Terms of Service", href: "/terms", icon: <FileText className="h-3 w-3" /> },
              ]}
            />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} GameServer. All rights reserved.
          </p>
        </div>
      </div>

      {/* Corner Decoration */}
      <div className="absolute bottom-0 right-0 w-40 h-40 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-500/20 to-transparent transform rotate-45 translate-x-10 translate-y-10"></div>
      </div>
    </footer>
  )
}
