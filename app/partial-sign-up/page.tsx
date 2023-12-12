"use client"

import { EmailInput, EmailLabel, PasswordInput, PasswordLabel, Button as SignUpButton, SignUpContainer, SignUpProvider } from "@/lezzauth/_generated/components/sign-up";

export default function Page() {
    return (
        <>
            <SignUpProvider>
                <SignUpContainer>
                    <EmailLabel />
                    <EmailInput />

                    <PasswordLabel />
                    <PasswordInput />

                    <SignUpButton />
                </SignUpContainer>
            </SignUpProvider>
        </>
    )
}