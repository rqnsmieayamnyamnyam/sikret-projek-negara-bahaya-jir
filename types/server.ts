export type ServerStatus = "online" | "offline" | "restarting" | "maintenance"

export interface GameServer {
  id: number
  name: string
  game: string
  hostname: string
  port: number
  status: ServerStatus
  currentPlayers: number
  maxPlayers: number
  location: string
  userId: number
  createdAt: Date
  updatedAt: Date
}

export interface ServerStats {
  totalServers: number
  activeServers: number
  totalPlayers: number
  averageCpuUsage: number
  uptime: number
}

export interface ServerActivity {
  id: number
  serverId: number
  serverName: string
  action: string
  details: string
  timestamp: Date
}
