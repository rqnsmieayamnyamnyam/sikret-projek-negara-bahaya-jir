import type { Metadata } from "next"
import CareersClient from "./CareersClient"

export const metadata: Metadata = {
  title: "Careers | GameServer - Premium Game Hosting",
  description:
    "Join our team at GameServer and help shape the future of game server hosting. View open positions and apply today.",
}

export default function CareersPage() {
  return <CareersClient />
}
