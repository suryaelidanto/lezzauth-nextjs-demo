## Installation

1. Install `lezzauth` package in your Next.js project:

```bash
npm install lezzauth
```

## Usage

1. Sign up or log in to our platform [here](https://lezzauth-mono.vercel.app/sign-up).

2. Create an application on the dashboard and copy the API KEY from the `Next.js` section.

3. Place the API KEY inside your `.env` file.

4. Log in to our platform using:

```bash
npx lezzauth login
```

Note: If you use OAuth to log in (e.g., Google OAuth), set your password in the platform -> user settings -> set password, then try login again

5. Generate components for your app:
```bash
npx lezzauth dev
```

6. Edit your `layout.tsx` file or other Next.js root file. Example:
```tsx
"use client"

import { LezzAuthProvider } from "lezzauth/nextjs";
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <LezzAuthProvider publishableKey={process.env.NEXT_PUBLIC_LEZZAUTH_PUBLISHABLE_KEY!}>
        <body>{children}</body>
      </LezzAuthProvider>
    </html>
  );
}
```

7. Create your pages. Example:

```tsx
// ./app/sign-in/page.tsx

"use client"

import { SignIn } from "@/lezzauth/_generated/components/sign-in";

export default function Page() {
    return <SignIn />
}
```

```tsx
// ./app/sign-up/page.tsx

"use client"

import { SignUp } from "@/lezzauth/_generated/components/sign-up";

export default function Page() {
    return <SignUp />
}
```

```tsx
// ./app/page.tsx

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
```

Inside `globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

8. Start your Next.js project with the following command:

```bash
npm run dev 
```

## Partial Components

You can also custom per partial component, for example :

### SignIn Partial

```tsx
"use client"

import { 
    EmailInput, 
    EmailLabel, 
    PasswordInput, 
    PasswordLabel, 
    Button as SignInButton, 
    SignInContainer, 
    SignInProvider 
} from "@/lezzauth/_generated/components/sign-in";

export default function Page() {
    return (
        <SignInProvider>
            <EmailLabel />
            <EmailInput className="border-2 border-black" />

            <PasswordLabel />
            <PasswordInput style={{ border: "2px solid black" }} />

            <SignInButton />
        </SignInProvider>
    )
}
```

### SignUp Partial

```tsx
"use client"

import { 
    EmailInput,
    EmailLabel, 
    PasswordInput, 
    PasswordLabel, 
    Button as SignUpButton, 
    SignUpContainer, 
    SignUpProvider 
} from "@/lezzauth/_generated/components/sign-up";

export default function Page() {
    return (
        <SignUpProvider>
            <EmailLabel />
            <EmailInput />

            <PasswordLabel />
            <PasswordInput />

            <SignUpButton />
        </SignUpProvider >
    )
}
```
