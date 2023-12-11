"use client"

import { EmailInput, EmailLabel, PasswordInput, PasswordLabel, Button as SignInButton, SignInContainer, SignInProvider } from "@/lezzauth/_generated/components/sign-in";

export default function Page() {
    return (
        <>
            <SignInProvider>
                <SignInContainer>
                    <EmailLabel />
                    <EmailInput />

                    <PasswordLabel />
                    <PasswordInput />

                    <SignInButton />
                </SignInContainer>
            </SignInProvider>
        </>
    )
}