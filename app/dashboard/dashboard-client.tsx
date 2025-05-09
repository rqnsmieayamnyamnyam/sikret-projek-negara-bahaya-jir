"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Server,
  Cpu,
  HardDrive,
  Globe,
  BarChart2,
  Settings,
  Users,
  CreditCard,
  Bell,
  LogOut,
  Menu,
  ChevronDown,
  Plus,
  Clock,
  AlertTriangle,
  RefreshCw,
  Database,
} from "lucide-react"
import { getDashboardData, changeServerStatus } from "./actions"
import type { GameServer, ServerActivity, ServerStatus } from "@/types/server"

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")
  const [isNotificationOpen, setIsNotificationOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [dbConnected, setDbConnected] = useState(false)

  // Data state
  const [servers, setServers] = useState<GameServer[]>([])
  const [stats, setStats] = useState({
    totalServers: 0,
    activeServers: 0,
    totalPlayers: 0,
    averageCpuUsage: 0,
    uptime: 99.9,
  })
  const [activities, setActivities] = useState<ServerActivity[]>([])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  // Fungsi untuk memuat data dashboard
  const loadDashboardData = async () => {
    setIsLoading(true)
    try {
      const data = await getDashboardData()

      setDbConnected(data.isConnected)

      if (data.error) {
        setError(data.error)
      } else {
        setServers(data.servers)
        setStats(data.stats)
        setActivities(data.activities)
        setError(null)
      }
    } catch (err) {
      setError("Gagal memuat data dashboard. Silakan coba lagi.")
      console.error("Error loading dashboard data:", err)
    } finally {
      setIsLoading(false)
    }
  }

  // Fungsi untuk mengubah status server
  const handleStatusChange = async (serverId: number, status: ServerStatus) => {
    try {
      const result = await changeServerStatus(serverId, status)
      if (result.success) {
        // Refresh data setelah perubahan berhasil
        loadDashboardData()
      } else {
        setError(result.error || "Gagal mengubah status server")
      }
    } catch (err) {
      setError("Terjadi kesalahan saat mengubah status server")
      console.error("Error changing server status:", err)
    }
  }

  // Muat data saat komponen dimount
  useEffect(() => {
    loadDashboardData()
  }, [])

  // Render database connection warning if not connected
  const renderDatabaseWarning = () => {
    if (!dbConnected) {
      return (
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-yellow-500">Koneksi Database Tidak Tersedia</h3>
              <p className="text-sm mt-1 text-gray-300">
                {error ||
                  "Tidak dapat terhubung ke database MySQL. Silakan periksa konfigurasi database Anda di file config/database.ts."}
              </p>
              <div className="mt-3">
                <button
                  onClick={loadDashboardData}
                  className="inline-flex items-center px-3 py-1.5 text-sm bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-500 rounded-md transition-colors"
                >
                  <RefreshCw className="h-3.5 w-3.5 mr-2" />
                  Coba Lagi
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return null
  }

  // Format timestamp to relative time
  const formatRelativeTime = (timestamp: Date) => {
    const now = new Date()
    const date = new Date(timestamp)
    const diffMs = now.getTime() - date.getTime()
    const diffSec = Math.round(diffMs / 1000)
    const diffMin = Math.round(diffSec / 60)
    const diffHour = Math.round(diffMin / 60)
    const diffDay = Math.round(diffHour / 24)

    if (diffSec < 60) return `${diffSec} detik yang lalu`
    if (diffMin < 60) return `${diffMin} menit yang lalu`
    if (diffHour < 24) return `${diffHour} jam yang lalu`
    if (diffDay === 1) return `Kemarin`
    return `${diffDay} hari yang lalu`
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Sidebar */}
      <motion.aside
        initial={{ width: 280 }}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-y-0 left-0 z-50 bg-gray-800 border-r border-gray-700 flex flex-col`}
      >
        <div className="h-16 flex items-center px-4 border-b border-gray-700">
          <Link href="/" className="flex items-center">
            <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-md relative overflow-hidden flex items-center justify-center">
              <span className="font-bold text-white">GS</span>
            </div>
            {isSidebarOpen && <span className="ml-3 font-bold text-white text-xl">GameServer</span>}
          </Link>
          <button onClick={toggleSidebar} className="ml-auto p-2 rounded-md hover:bg-gray-700 transition-colors">
            {isSidebarOpen ? (
              <ChevronDown className="h-5 w-5 rotate-90" />
            ) : (
              <ChevronDown className="h-5 w-5 -rotate-90" />
            )}
          </button>
        </div>

        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          <Link
            href="#overview"
            onClick={() => setActiveTab("overview")}
            className={`flex items-center px-3 py-3 rounded-lg transition-colors ${
              activeTab === "overview" ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            <BarChart2 className="h-5 w-5" />
            {isSidebarOpen && <span className="ml-3">Overview</span>}
          </Link>

          <Link
            href="#servers"
            onClick={() => setActiveTab("servers")}
            className={`flex items-center px-3 py-3 rounded-lg transition-colors ${
              activeTab === "servers" ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            <Server className="h-5 w-5" />
            {isSidebarOpen && <span className="ml-3">Game Servers</span>}
          </Link>

          <Link
            href="#hosting"
            onClick={() => setActiveTab("hosting")}
            className={`flex items-center px-3 py-3 rounded-lg transition-colors ${
              activeTab === "hosting" ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            <Globe className="h-5 w-5" />
            {isSidebarOpen && <span className="ml-3">Web Hosting</span>}
          </Link>

          <Link
            href="#resources"
            onClick={() => setActiveTab("resources")}
            className={`flex items-center px-3 py-3 rounded-lg transition-colors ${
              activeTab === "resources" ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            <Cpu className="h-5 w-5" />
            {isSidebarOpen && <span className="ml-3">Resources</span>}
          </Link>

          <Link
            href="#storage"
            onClick={() => setActiveTab("storage")}
            className={`flex items-center px-3 py-3 rounded-lg transition-colors ${
              activeTab === "storage" ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            <HardDrive className="h-5 w-5" />
            {isSidebarOpen && <span className="ml-3">Storage</span>}
          </Link>

          <div className="pt-4 mt-4 border-t border-gray-700">
            <h3
              className={`px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider ${!isSidebarOpen && "sr-only"}`}
            >
              Account
            </h3>
          </div>

          <Link
            href="#settings"
            onClick={() => setActiveTab("settings")}
            className={`flex items-center px-3 py-3 rounded-lg transition-colors ${
              activeTab === "settings" ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            <Settings className="h-5 w-5" />
            {isSidebarOpen && <span className="ml-3">Settings</span>}
          </Link>

          <Link
            href="#billing"
            onClick={() => setActiveTab("billing")}
            className={`flex items-center px-3 py-3 rounded-lg transition-colors ${
              activeTab === "billing" ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            <CreditCard className="h-5 w-5" />
            {isSidebarOpen && <span className="ml-3">Billing</span>}
          </Link>

          <Link
            href="#users"
            onClick={() => setActiveTab("users")}
            className={`flex items-center px-3 py-3 rounded-lg transition-colors ${
              activeTab === "users" ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            <Users className="h-5 w-5" />
            {isSidebarOpen && <span className="ml-3">Team</span>}
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-700">
          <Link
            href="/"
            className="flex items-center px-3 py-3 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors"
          >
            <LogOut className="h-5 w-5" />
            {isSidebarOpen && <span className="ml-3">Logout</span>}
          </Link>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className={`flex-1 ${isSidebarOpen ? "ml-[280px]" : "ml-[80px]"} transition-all duration-300`}>
        {/* Header */}
        <header className="h-16 bg-gray-800 border-b border-gray-700 flex items-center px-6">
          <button className="md:hidden mr-4 p-2 rounded-md hover:bg-gray-700 transition-colors" onClick={toggleSidebar}>
            <Menu className="h-5 w-5" />
          </button>

          <h1 className="text-xl font-semibold">Dashboard</h1>

          <div className="ml-auto flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className="p-2 rounded-full hover:bg-gray-700 transition-colors relative"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>

              {isNotificationOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-gray-800 border border-gray-700 rounded-lg shadow-lg py-2 z-10">
                  <div className="px-4 py-2 border-b border-gray-700">
                    <h3 className="font-medium">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {activities.length > 0 ? (
                      activities.map((activity, index) => (
                        <div
                          key={activity.id || index}
                          className="px-4 py-3 hover:bg-gray-700 transition-colors border-b border-gray-700"
                        >
                          <div className="flex">
                            <div className="flex-shrink-0 mr-3">
                              <div className="h-8 w-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                                <Server className="h-4 w-4 text-blue-500" />
                              </div>
                            </div>
                            <div>
                              <p className="text-sm font-medium">{activity.action}</p>
                              <p className="text-xs text-gray-400 mt-1">{activity.details}</p>
                              <p className="text-xs text-gray-500 mt-1">{formatRelativeTime(activity.timestamp)}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="px-4 py-3 text-center text-gray-400 text-sm">Tidak ada notifikasi</div>
                    )}
                  </div>
                  <div className="px-4 py-2 border-t border-gray-700">
                    <Link href="#" className="text-sm text-blue-400 hover:text-blue-300">
                      View all notifications
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium">JD</span>
                </div>
                <span className="hidden md:block text-sm">John Doe</span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg py-1 z-10">
                  <Link href="#profile" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                    Your Profile
                  </Link>
                  <Link href="#settings" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                    Settings
                  </Link>
                  <Link href="#support" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                    Support
                  </Link>
                  <div className="border-t border-gray-700 my-1"></div>
                  <Link href="/" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                    Sign out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {/* Database Connection Warning */}
          {renderDatabaseWarning()}

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Welcome back, John!</h2>
            <p className="text-gray-400">Here's what's happening with your game servers today.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
              <div className="flex items-center">
                <div className="h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                  <Server className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Active Servers</p>
                  <h3 className="text-2xl font-bold">
                    {isLoading ? (
                      <div className="h-8 w-16 bg-gray-700 animate-pulse rounded"></div>
                    ) : (
                      stats.activeServers
                    )}
                  </h3>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="flex items-center text-sm">
                  <span className="text-green-500 flex items-center">
                    <ChevronDown className="h-4 w-4 rotate-180" />
                    12%
                  </span>
                  <span className="ml-2 text-gray-400">from last month</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
              <div className="flex items-center">
                <div className="h-12 w-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Active Players</p>
                  <h3 className="text-2xl font-bold">
                    {isLoading ? (
                      <div className="h-8 w-16 bg-gray-700 animate-pulse rounded"></div>
                    ) : (
                      stats.totalPlayers
                    )}
                  </h3>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="flex items-center text-sm">
                  <span className="text-green-500 flex items-center">
                    <ChevronDown className="h-4 w-4 rotate-180" />
                    8%
                  </span>
                  <span className="ml-2 text-gray-400">from last week</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
              <div className="flex items-center">
                <div className="h-12 w-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                  <Cpu className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">CPU Usage</p>
                  <h3 className="text-2xl font-bold">
                    {isLoading ? (
                      <div className="h-8 w-16 bg-gray-700 animate-pulse rounded"></div>
                    ) : (
                      `${Math.round(stats.averageCpuUsage)}%`
                    )}
                  </h3>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="flex items-center text-sm">
                  <span className="text-red-500 flex items-center">
                    <ChevronDown className="h-4 w-4" />
                    3%
                  </span>
                  <span className="ml-2 text-gray-400">from yesterday</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
              <div className="flex items-center">
                <div className="h-12 w-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Uptime</p>
                  <h3 className="text-2xl font-bold">
                    {isLoading ? (
                      <div className="h-8 w-16 bg-gray-700 animate-pulse rounded"></div>
                    ) : (
                      `${stats.uptime.toFixed(1)}%`
                    )}
                  </h3>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="flex items-center text-sm">
                  <span className="text-green-500 flex items-center">
                    <ChevronDown className="h-4 w-4 rotate-180" />
                    0.2%
                  </span>
                  <span className="ml-2 text-gray-400">from last month</span>
                </div>
              </div>
            </div>
          </div>

          {/* Game Servers Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Your Game Servers</h2>
              <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                <Plus className="h-4 w-4 mr-2" />
                <span>Add Server</span>
              </button>
            </div>

            <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
              {isLoading ? (
                <div className="p-8 flex justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : servers.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-700/50">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Server Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Game
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Players
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Location
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {servers.map((server) => (
                        <tr key={server.id} className="hover:bg-gray-700/30 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div
                                className={`h-8 w-8 ${
                                  server.status === "online"
                                    ? "bg-green-500/20"
                                    : server.status === "restarting"
                                      ? "bg-yellow-500/20"
                                      : "bg-red-500/20"
                                } rounded-md flex items-center justify-center mr-3`}
                              >
                                <Server
                                  className={`h-4 w-4 ${
                                    server.status === "online"
                                      ? "text-green-500"
                                      : server.status === "restarting"
                                        ? "text-yellow-500"
                                        : "text-red-500"
                                  }`}
                                />
                              </div>
                              <div>
                                <div className="font-medium">{server.name}</div>
                                <div className="text-sm text-gray-400">
                                  {server.hostname}:{server.port}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-6 w-6 mr-2">
                                <img
                                  src={`/placeholder.svg?height=24&width=24&text=${server.game.charAt(0)}`}
                                  alt={server.game}
                                  className="h-6 w-6"
                                />
                              </div>
                              <span>{server.game}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 py-1 text-xs rounded-full ${
                                server.status === "online"
                                  ? "bg-green-500/20 text-green-500"
                                  : server.status === "restarting"
                                    ? "bg-yellow-500/20 text-yellow-500"
                                    : "bg-red-500/20 text-red-500"
                              }`}
                            >
                              {server.status === "online"
                                ? "Online"
                                : server.status === "restarting"
                                  ? "Restarting"
                                  : "Offline"}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1 text-gray-400" />
                              <span>
                                {server.currentPlayers} / {server.maxPlayers}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <Globe className="h-4 w-4 mr-1 text-gray-400" />
                              <span>{server.location}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-blue-500 hover:text-blue-400 mr-3">Manage</button>
                            {server.status === "online" ? (
                              <button
                                onClick={() => handleStatusChange(server.id, "offline")}
                                className="text-red-500 hover:text-red-400"
                              >
                                Stop
                              </button>
                            ) : server.status === "offline" ? (
                              <button
                                onClick={() => handleStatusChange(server.id, "online")}
                                className="text-green-500 hover:text-green-400"
                              >
                                Start
                              </button>
                            ) : (
                              <button className="text-gray-400 cursor-not-allowed">Stop</button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="p-8 text-center">
                  {dbConnected ? (
                    <>
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-700/50 mb-4">
                        <Server className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">No servers found</h3>
                      <p className="text-gray-400 mb-4">You don't have any game servers yet.</p>
                      <button className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                        <Plus className="h-4 w-4 mr-2" />
                        <span>Add Your First Server</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-700/50 mb-4">
                        <Database className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">Database Not Connected</h3>
                      <p className="text-gray-400 mb-4">Please configure your database connection to view servers.</p>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
              {isLoading ? (
                <div className="space-y-6">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="h-10 w-10 bg-gray-700 animate-pulse rounded-full"></div>
                      </div>
                      <div className="flex-1">
                        <div className="h-4 bg-gray-700 animate-pulse rounded w-1/3 mb-2"></div>
                        <div className="h-3 bg-gray-700 animate-pulse rounded w-2/3 mb-2"></div>
                        <div className="h-3 bg-gray-700 animate-pulse rounded w-1/4"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : activities.length > 0 ? (
                <div className="space-y-6">
                  {activities.map((activity, index) => (
                    <div key={activity.id || index} className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="h-10 w-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                          <Server className="h-5 w-5 text-blue-500" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-gray-400 mt-1">{activity.details}</p>
                        <p className="text-xs text-gray-500 mt-1">{formatRelativeTime(activity.timestamp)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  {dbConnected ? (
                    <>
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-700/50 mb-4">
                        <Clock className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">No recent activity</h3>
                      <p className="text-gray-400">Your activity history will appear here.</p>
                    </>
                  ) : (
                    <>
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-700/50 mb-4">
                        <Database className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">Database Not Connected</h3>
                      <p className="text-gray-400">Please configure your database connection to view activity.</p>
                    </>
                  )}
                </div>
              )}
              {activities.length > 0 && (
                <div className="mt-6 pt-6 border-t border-gray-700 text-center">
                  <Link href="#" className="text-sm text-blue-400 hover:text-blue-300">
                    View all activity
                  </Link>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
