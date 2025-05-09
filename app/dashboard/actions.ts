"use server"
import { getServersByUserId, getServerStats, getRecentActivities, updateServerStatus } from "@/services/server-service"
import type { ServerStatus } from "@/types/server"
import { testConnection } from "@/lib/db"

// Fungsi untuk mendapatkan ID user dari session/cookie
// Dalam implementasi nyata, ini akan menggunakan sistem autentikasi yang tepat
function getCurrentUserId(): number {
  // Placeholder - dalam implementasi nyata, ambil dari session
  return 1
}

export async function getDashboardData() {
  try {
    // Cek koneksi database
    const isConnected = await testConnection()

    if (!isConnected) {
      return {
        isConnected: false,
        error: "Tidak dapat terhubung ke database. Periksa konfigurasi database Anda.",
        servers: [],
        stats: {
          totalServers: 0,
          activeServers: 0,
          totalPlayers: 0,
          averageCpuUsage: 0,
          uptime: 0,
        },
        activities: [],
      }
    }

    const userId = getCurrentUserId()

    // Ambil data secara paralel untuk performa lebih baik
    const [servers, stats, activities] = await Promise.all([
      getServersByUserId(userId),
      getServerStats(userId),
      getRecentActivities(userId),
    ])

    return {
      isConnected,
      servers,
      stats,
      activities,
    }
  } catch (error) {
    console.error("Error fetching dashboard data:", error)
    return {
      isConnected: false,
      error: "Terjadi kesalahan saat mengambil data dashboard.",
      servers: [],
      stats: {
        totalServers: 0,
        activeServers: 0,
        totalPlayers: 0,
        averageCpuUsage: 0,
        uptime: 0,
      },
      activities: [],
    }
  }
}

export async function changeServerStatus(serverId: number, status: ServerStatus) {
  try {
    const result = await updateServerStatus(serverId, status)
    return { success: result }
  } catch (error) {
    console.error("Error updating server status:", error)
    return { success: false, error: "Gagal mengubah status server." }
  }
}
