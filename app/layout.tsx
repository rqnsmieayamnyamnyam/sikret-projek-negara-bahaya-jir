import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollTopProvider } from "@/components/scroll-top-provider"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "GameServer - Powering the Future of Game Servers",
  description: "Premium game server hosting with unmatched performance and support",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ScrollTopProvider>
            <div className="overflow-x-hidden relative w-full">
              {children}
              <ScrollToTopButton />
            </div>
          </ScrollTopProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
