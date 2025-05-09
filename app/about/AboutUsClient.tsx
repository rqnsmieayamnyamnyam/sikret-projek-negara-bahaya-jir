"use client"
import { motion } from "framer-motion"
import { ChevronRight, Globe, Shield, Zap } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { useMobile } from "@/hooks/use-mobile"

export default function AboutUsClient() {
  const { isMobile } = useMobile()

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Gaming enthusiast with 15+ years in server infrastructure. Founded GameServer to provide gamers with the reliable hosting they deserve.",
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Former lead engineer at major cloud providers. Passionate about building scalable systems that power the future of online gaming.",
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Customer Success",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Dedicated to creating exceptional customer experiences. Believes that great support is as important as great technology.",
    },
    {
      name: "Emma Wilson",
      role: "Lead Developer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Full-stack developer with a passion for gaming. Specializes in creating intuitive control panels and performance optimization.",
    },
  ]

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "GameServer was founded with a mission to provide reliable, high-performance game server hosting.",
    },
    {
      year: "2019",
      title: "First 1,000 Customers",
      description: "Reached our first major milestone of 1,000 active customers across 20 countries.",
    },
    {
      year: "2020",
      title: "Global Expansion",
      description:
        "Expanded our infrastructure to include data centers in Asia and Australia, achieving truly global coverage.",
    },
    {
      year: "2021",
      title: "Custom Control Panel",
      description: "Launched our proprietary control panel designed specifically for game server management.",
    },
    {
      year: "2022",
      title: "50,000 Servers Milestone",
      description: "Celebrated hosting over 50,000 game servers for customers worldwide.",
    },
    {
      year: "2023",
      title: "Next-Gen Infrastructure",
      description: "Upgraded to next-generation hardware across all data centers for even better performance.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About GameServer
          </motion.h1>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We're on a mission to provide gamers with the most reliable, high-performance server hosting in the world.
          </motion.p>
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

      {/* Our Story Section */}
      <section className="py-16 border-t border-gray-800/50 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-400 mb-6">
                GameServer was founded in 2018 by a group of passionate gamers who were frustrated with the unreliable
                and complicated game server hosting options available at the time.
              </p>
              <p className="text-gray-400 mb-6">
                We set out to create a hosting platform that combined enterprise-grade performance with user-friendly
                management tools, making it easy for anyone to set up and run their own game server.
              </p>
              <p className="text-gray-400">
                Today, we host over 50,000 game servers for customers in more than 100 countries, with data centers
                strategically located around the world to provide low-latency gaming experiences.
              </p>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gray-900/50 backdrop-blur-sm p-1 rounded-xl border border-gray-800/50 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Our team"
                  width={800}
                  height={600}
                  className="rounded-lg"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-blue-500/10 rounded-full blur-xl z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 border-t border-gray-800/50 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Mission
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 bg-blue-600/20 rounded-2xl flex items-center justify-center">
                  <Zap className="h-8 w-8 text-blue-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Performance</h3>
              <p className="text-gray-400 text-center">
                Deliver the fastest, most reliable game server hosting experience possible, ensuring smooth gameplay for
                all players.
              </p>
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
              <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 bg-blue-600/20 rounded-2xl flex items-center justify-center">
                  <Shield className="h-8 w-8 text-blue-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Simplicity</h3>
              <p className="text-gray-400 text-center">
                Make game server hosting accessible to everyone, regardless of technical expertise, through intuitive
                tools and interfaces.
              </p>
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
              <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 bg-blue-600/20 rounded-2xl flex items-center justify-center">
                  <Globe className="h-8 w-8 text-blue-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Community</h3>
              <p className="text-gray-400 text-center">
                Foster thriving gaming communities by providing the infrastructure and tools they need to connect and
                play together.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 border-t border-gray-800/50 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Meet Our Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/30 backdrop-blur-lg rounded-xl border border-gray-800/50 overflow-hidden group"
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
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-blue-500 text-sm mb-4">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 border-t border-gray-800/50 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Journey
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 transform md:translate-x-0 translate-x-4"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  } items-center md:items-start gap-8`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="md:w-1/2 flex justify-center md:justify-end">
                    <div
                      className={`bg-gray-900/30 backdrop-blur-lg p-6 rounded-xl border border-gray-800/50 relative ${
                        index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                      }`}
                    >
                      <div className="absolute top-6 left-0 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-10 md:translate-x-0 md:-translate-x-[1.55rem]"></div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-blue-500 text-sm mb-4">{milestone.year}</p>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-gray-800/50 relative">
        <div className="container mx-auto px-4 sm:px-6">
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

            <div className="md:flex items-center justify-between">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Ready to Join Our Community?
                </motion.h2>
                <motion.p
                  className="text-gray-400 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Experience the difference with our high-performance game server hosting. Get started today and elevate
                  your gaming experience.
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

      <Footer />
    </div>
  )
}
