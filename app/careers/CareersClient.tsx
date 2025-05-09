"use client"
import { motion } from "framer-motion"
import { Briefcase, Users, Globe, Clock, ChevronRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useMobile } from "@/hooks/use-mobile"

export default function CareersClient() {
  const { isMobile } = useMobile()

  const departments = [
    {
      name: "Engineering",
      description: "Build the future of game server technology",
      icon: <Briefcase className="h-6 w-6 text-blue-500" />,
      positions: ["Senior Backend Engineer", "Frontend Developer", "DevOps Engineer", "System Administrator"],
    },
    {
      name: "Customer Support",
      description: "Help gamers succeed with our platform",
      icon: <Users className="h-6 w-6 text-green-500" />,
      positions: ["Technical Support Specialist", "Customer Success Manager", "Support Team Lead"],
    },
    {
      name: "Marketing",
      description: "Spread the word about our gaming solutions",
      icon: <Globe className="h-6 w-6 text-purple-500" />,
      positions: ["Digital Marketing Specialist", "Content Creator", "Social Media Manager"],
    },
    {
      name: "Product",
      description: "Shape the future of our gaming platform",
      icon: <Clock className="h-6 w-6 text-orange-500" />,
      positions: ["Product Manager", "UX/UI Designer", "Product Analyst"],
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
            Join Our Team
          </motion.h1>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Help us build the future of game server hosting. We're looking for passionate individuals to join our
            growing team.
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

      {/* Values Section */}
      <section className="py-16 border-t border-gray-800/50 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Values
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
              <h3 className="text-xl font-bold mb-4 text-white">Innovation</h3>
              <p className="text-gray-400">
                We're constantly pushing the boundaries of what's possible in game server technology, creating solutions
                that empower gamers worldwide.
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
              <h3 className="text-xl font-bold mb-4 text-white">Teamwork</h3>
              <p className="text-gray-400">
                We believe in the power of collaboration. Our diverse team works together to solve complex problems and
                deliver exceptional results.
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
              <h3 className="text-xl font-bold mb-4 text-white">Customer Focus</h3>
              <p className="text-gray-400">
                Our customers are at the heart of everything we do. We're dedicated to providing exceptional service and
                support to gamers around the world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 border-t border-gray-800/50 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Open Positions
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((department, index) => (
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
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 bg-blue-600/20 rounded-xl flex items-center justify-center mr-4">
                    {department.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{department.name}</h3>
                    <p className="text-gray-400 text-sm">{department.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {department.positions.map((position, posIndex) => (
                    <li key={posIndex}>
                      <a href="#" className="flex items-center justify-between text-gray-300 hover:text-white group">
                        <span>{position}</span>
                        <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-blue-500 transition-colors" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 border-t border-gray-800/50 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Benefits & Perks
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-6 rounded-xl border border-gray-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, borderColor: "rgba(37, 99, 235, 0.5)" }}
            >
              <h3 className="font-bold text-lg mb-2">Flexible Work</h3>
              <p className="text-gray-400 text-sm">Remote-first culture with flexible hours to suit your lifestyle.</p>
            </motion.div>

            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-6 rounded-xl border border-gray-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, borderColor: "rgba(37, 99, 235, 0.5)" }}
            >
              <h3 className="font-bold text-lg mb-2">Competitive Salary</h3>
              <p className="text-gray-400 text-sm">Above-market compensation with equity options for all employees.</p>
            </motion.div>

            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-6 rounded-xl border border-gray-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, borderColor: "rgba(37, 99, 235, 0.5)" }}
            >
              <h3 className="font-bold text-lg mb-2">Health Benefits</h3>
              <p className="text-gray-400 text-sm">
                Comprehensive health, dental, and vision coverage for you and your family.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-6 rounded-xl border border-gray-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5, borderColor: "rgba(37, 99, 235, 0.5)" }}
            >
              <h3 className="font-bold text-lg mb-2">Learning Budget</h3>
              <p className="text-gray-400 text-sm">
                Annual budget for courses, books, and conferences to help you grow.
              </p>
            </motion.div>
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
                  Don't See a Perfect Fit?
                </motion.h2>
                <motion.p
                  className="text-gray-400 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  We're always looking for talented individuals to join our team. Send us your resume and let us know
                  how you can contribute.
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
                  <span className="relative z-10 font-medium">Send Your Resume</span>
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
