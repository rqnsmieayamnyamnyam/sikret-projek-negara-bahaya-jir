import type { Metadata } from "next"
import LoginPage from "./login-client"

export const metadata: Metadata = {
  title: "Login | GameServer Hosting",
  description: "Login to your GameServer account to manage your game servers and hosting services.",
}

export default function Login() {
  return <LoginPage />
}
