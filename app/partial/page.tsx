"use client"

import { EmailInput, EmailLabel, PasswordInput, PasswordLabel, Button as SignInButton, SignInProvider } from "@/lezzauth/_generated/components/sign-in";

export default function Page() {
    return (
        <>
            <SignInProvider>
                <EmailLabel />
                <EmailInput />

                <PasswordLabel />
                <PasswordInput />

                <SignInButton />
            </SignInProvider>
        </>
    )
}