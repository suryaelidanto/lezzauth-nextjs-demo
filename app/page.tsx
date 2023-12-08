"use client"

import { useUser } from "lezzauth/nextjs"

export default function Page() {
    const { user } = useUser()

    return (
        <h1>Hello {user.firstName} {":)"}</h1>
    )
}