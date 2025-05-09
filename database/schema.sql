-- Struktur Database untuk GameServer Hosting
-- Jalankan file ini untuk membuat tabel-tabel yang diperlukan

-- Tabel Users
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  fullName VARCHAR(100),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabel Game Servers
CREATE TABLE IF NOT EXISTS game_servers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  game VARCHAR(50) NOT NULL,
  hostname VARCHAR(100) NOT NULL,
  port INT NOT NULL,
  status ENUM('online', 'offline', 'restarting', 'maintenance') DEFAULT 'offline',
  currentPlayers INT DEFAULT 0,
  maxPlayers INT DEFAULT 0,
  location VARCHAR(50),
  cpuUsage FLOAT DEFAULT 0,
  ramUsage FLOAT DEFAULT 0,
  diskUsage FLOAT DEFAULT 0,
  uptime FLOAT DEFAULT 0,
  userId INT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);

-- Tabel Server Activities
CREATE TABLE IF NOT EXISTS server_activities (
  id INT AUTO_INCREMENT PRIMARY KEY,
  serverId INT NOT NULL,
  action VARCHAR(100) NOT NULL,
  details TEXT,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (serverId) REFERENCES game_servers(id) ON DELETE CASCADE
);

-- Tabel Billing
CREATE TABLE IF NOT EXISTS billing (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT NOT NULL,
  planName VARCHAR(50) NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  status ENUM('pending', 'paid', 'failed', 'refunded') DEFAULT 'pending',
  paymentMethod VARCHAR(50),
  transactionId VARCHAR(100),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  paidAt TIMESTAMP NULL,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);

-- Tabel Support Tickets
CREATE TABLE IF NOT EXISTS support_tickets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT NOT NULL,
  subject VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  status ENUM('open', 'in_progress', 'closed') DEFAULT 'open',
  priority ENUM('low', 'medium', 'high') DEFAULT 'medium',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);

-- Tabel Ticket Responses
CREATE TABLE IF NOT EXISTS ticket_responses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  ticketId INT NOT NULL,
  userId INT NOT NULL,
  message TEXT NOT NULL,
  isStaff BOOLEAN DEFAULT FALSE,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (ticketId) REFERENCES support_tickets(id) ON DELETE CASCADE,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);

-- Data Contoh untuk Testing
-- User
INSERT INTO users (username, email, password, fullName)
VALUES ('johndoe', 'john@example.com', '$2a$10$kIqR/PTloYan/MRNiEsy6uYO6OCHVmAKR4kflVKQkJ345nqTiuGeO', 'John Doe');

-- Game Servers
INSERT INTO game_servers (name, game, hostname, port, status, currentPlayers, maxPlayers, location, cpuUsage, ramUsage, diskUsage, uptime, userId)
VALUES 
('Survival World', 'Minecraft', 'mc.example.com', 25565, 'online', 24, 100, 'New York', 35.2, 4096, 15360, 99.95, 1),
('Rust Community', 'Rust', 'rust.example.com', 28015, 'online', 86, 150, 'Frankfurt', 65.8, 8192, 30720, 99.8, 1),
('Valheim Vikings', 'Valheim', 'valheim.example.com', 2456, 'online', 8, 10, 'London', 28.4, 4096, 10240, 99.9, 1),
('ARK Survival', 'ARK', 'ark.example.com', 7777, 'restarting', 0, 70, 'Singapore', 0, 0, 20480, 98.5, 1);

-- Server Activities
INSERT INTO server_activities (serverId, action, details)
VALUES 
(4, 'Server restart initiated', 'Scheduled restart for ARK server'),
(2, 'Player count increased', 'Rust server reached 80+ concurrent players'),
(1, 'Configuration updated', 'Updated server.properties file'),
(3, 'Backup completed', 'Automatic backup completed successfully');
