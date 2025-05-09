# GameServer Hosting - Integrasi Database MySQL

Proyek ini menggunakan MySQL sebagai database untuk menyimpan dan mengelola data server game, aktivitas, pengguna, dan lainnya.

## Konfigurasi Database

Untuk mengkonfigurasi koneksi database, edit file `config/database.ts`:

\`\`\`typescript
// Konfigurasi Database MySQL
// Edit file ini untuk mengubah pengaturan koneksi database

export const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'gameserver_hosting',
}
\`\`\`

Anda dapat mengubah nilai default atau mengatur variabel lingkungan berikut:

- `DB_HOST`: Hostname database MySQL (default: localhost)
- `DB_PORT`: Port database MySQL (default: 3306)
- `DB_USER`: Username database MySQL (default: root)
- `DB_PASSWORD`: Password database MySQL (default: '')
- `DB_NAME`: Nama database MySQL (default: gameserver_hosting)

## Struktur Database

File `database/schema.sql` berisi struktur database lengkap dan beberapa data contoh untuk testing. Jalankan file SQL ini di server MySQL Anda untuk membuat tabel-tabel yang diperlukan.

Struktur database meliputi:

- `users`: Tabel pengguna
- `game_servers`: Tabel server game
- `server_activities`: Tabel aktivitas server
- `billing`: Tabel billing dan pembayaran
- `support_tickets`: Tabel tiket dukungan
- `ticket_responses`: Tabel respons tiket

## Penggunaan dalam Aplikasi

Aplikasi akan secara otomatis terhubung ke database saat dijalankan. Jika koneksi database gagal, dashboard akan menampilkan pesan peringatan dan menggunakan data dummy.

### Mengakses Data

Untuk mengakses data dari database, gunakan fungsi-fungsi yang disediakan di `services/server-service.ts`:

\`\`\`typescript
import { getServersByUserId, getServerStats, getRecentActivities } from '@/services/server-service'

// Contoh penggunaan
const servers = await getServersByUserId(userId)
const stats = await getServerStats(userId)
const activities = await getRecentActivities(userId)
\`\`\`

### Server Actions

Server Actions di `app/dashboard/actions.ts` digunakan untuk mengambil data dari database dan mengirimkannya ke komponen client:

\`\`\`typescript
import { getDashboardData, changeServerStatus } from './actions'

// Contoh penggunaan di komponen client
const data = await getDashboardData()
\`\`\`

## Troubleshooting

Jika Anda mengalami masalah koneksi database:

1. Pastikan server MySQL berjalan
2. Verifikasi kredensial database di `config/database.ts`
3. Pastikan database dan tabel telah dibuat dengan benar
4. Periksa log server untuk pesan error spesifik

## Pengembangan Lebih Lanjut

Untuk menambahkan tabel atau kolom baru:

1. Edit file `database/schema.sql`
2. Tambahkan tipe data baru di `types/`
3. Tambahkan fungsi akses data baru di `services/`
4. Perbarui Server Actions dan komponen client sesuai kebutuhan
