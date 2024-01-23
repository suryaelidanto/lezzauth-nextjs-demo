"use client"

import { UserButton } from "@/lezzauth/_generated/components/user-button"
import { useUser } from "lezzauth/nextjs"

export default function Page() {
  const { user } = useUser()

  return (
    <div className="flex justify-between p-3">
      <h1>Hello {user.email} {":)"}</h1>
      <UserButton />
    </div>
  )
}