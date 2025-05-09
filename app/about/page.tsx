import type { Metadata } from "next"
import AboutUsClient from "./AboutUsClient"

export const metadata: Metadata = {
  title: "About Us | GameServer",
  description:
    "Learn about GameServer's mission, vision, team, and journey to becoming the leading game server hosting provider",
}

export default function AboutPage() {
  return <AboutUsClient />
}
