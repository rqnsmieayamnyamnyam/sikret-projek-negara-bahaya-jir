// Konfigurasi Database MySQL
// Edit file ini untuk mengubah pengaturan koneksi database

export const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  port: Number.parseInt(process.env.DB_PORT || "3306"),
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "gameserver_hosting",
}

// Jangan edit di bawah ini kecuali Anda tahu apa yang Anda lakukan
export const connectionString = `mysql://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`
