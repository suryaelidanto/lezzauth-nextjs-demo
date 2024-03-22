## Installation

1. Install `lezzauth` package in your Next.js project:

```bash
npm install lezzauth
```

## Preparation

1. Sign up or log in to our platform [here](https://app.lezzauth.com/sign-up).

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

7. Inside `globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Basic Usage

1. Create your sign-in pages. Example:

```tsx
// ./app/sign-in/page.tsx

"use client"

import { SignIn } from "@/lezzauth/_generated/components/sign-in";

export default function Page() {
    return <SignIn />
}
```

2. Create your sign-up pages. Example:
```tsx
// ./app/sign-up/page.tsx

"use client"

import { SignUp } from "@/lezzauth/_generated/components/sign-up";

export default function Page() {
    return <SignUp />
}
```
3. Create your homepage. Example:
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

## Advance Usage

### Middleware Protected Route

Create `middleware.ts` in your root Next.js project. Example:
```ts
import { authMiddleware } from "lezzauth/nextjs";

export default authMiddleware({
  publicRoutes: ["/sign-in", "/sign-up"]
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
```

### Partial Components

You can also custom per partial component, for example :

#### SignIn Partial

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

#### SignUp Partial

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

### Custom Redirection

Next.js : 
```env
NEXT_PUBLIC_LEZZAUTH_SIGN_IN_URL= #default : /sign-in
NEXT_PUBLIC_LEZZAUTH_SIGN_UP_URL= #default: /sign-up
NEXT_PUBLIC_LEZZAUTH_PUBLISHABLE_KEY=
NEXT_PUBLIC_LEZZAUTH_AFTER_SIGN_IN_URL= #default: /
NEXT_PUBLIC_LEZZAUTH_AFTER_SIGN_UP_URL= #default: /
```
