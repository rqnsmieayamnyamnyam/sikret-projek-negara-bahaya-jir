import type { Metadata } from "next"
import SupportClientPage from "./SupportClientPage"

export const metadata: Metadata = {
  title: "Support - GameServer",
  description: "Get help with your game server hosting, domain, and other services",
}

export default function SupportPage() {
  return <SupportClientPage />
}
