import type { Metadata } from "next"
import DashboardPage from "./dashboard-client"

export const metadata: Metadata = {
  title: "Dashboard | GameServer Hosting",
  description: "Manage your game servers and hosting services.",
}

export default function Dashboard() {
  return <DashboardPage />
}
