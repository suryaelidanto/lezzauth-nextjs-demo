"use client"

import { EmailInput, EmailLabel, PasswordInput, PasswordLabel, Button as SignInButton, SignInContainer, SignInProvider } from "@/lezzauth/_generated/components/sign-in";

export default function Page() {
    return (
        <>
            <SignInProvider>
                <EmailLabel />
                <EmailInput className="border-2 border-red-500" />

                <PasswordLabel />
                <PasswordInput />

                <SignInButton />
            </SignInProvider>
        </>
    )
}