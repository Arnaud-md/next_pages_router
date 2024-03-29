import { useSession } from "next-auth/react"

export default function Component() {
  const { data: session, status } = useSession()
  console.log("session", session, "status", status)

  if (status === "authenticated") {
    return <p>Signed in as {session.user?.name}</p>
  }

  return <a href="/api/auth/signin">Sign in</a>
}