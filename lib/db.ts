import mysql from "mysql2/promise"
import { dbConfig } from "@/config/database"

// Pool koneksi untuk penggunaan yang efisien
let pool: mysql.Pool | null = null

// Inisialisasi pool koneksi
export async function initDb() {
  try {
    if (!pool) {
      pool = mysql.createPool({
        host: dbConfig.host,
        port: dbConfig.port,
        user: dbConfig.user,
        password: dbConfig.password,
        database: dbConfig.database,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
      })
      console.log("Database connection pool initialized")
    }
    return pool
  } catch (error) {
    console.error("Failed to initialize database connection:", error)
    throw error
  }
}

// Eksekusi query dengan parameter
export async function query<T>(sql: string, params?: any[]): Promise<T> {
  try {
    const db = await initDb()
    const [results] = await db.execute(sql, params)
    return results as T
  } catch (error) {
    console.error("Database query error:", error)
    throw error
  }
}

// Cek koneksi database
export async function testConnection(): Promise<boolean> {
  try {
    const db = await initDb()
    await db.execute("SELECT 1")
    return true
  } catch (error) {
    console.error("Database connection test failed:", error)
    return false
  }
}
