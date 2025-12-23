"use client";

import { GoogleOAuthProvider } from '@react-oauth/google';
import { ReactNode } from 'react';

export default function AuthProvider({ children }: { children: ReactNode }) {
    // You should put your actual client ID here or in an env variable
    // For now using a placeholder or environment variable
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "YOUR_GOOGLE_CLIENT_ID";

    return (
        <GoogleOAuthProvider clientId="398385259781-d8ipqrvv9habl1n7cj1git812687mk2a.apps.googleusercontent.com">
            {children}
        </GoogleOAuthProvider>
    );
}
