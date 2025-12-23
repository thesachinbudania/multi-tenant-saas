"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import Button from "../src/components/ui/Button";
import Input from "../src/components/ui/Input";
import { useAuthStore } from "../src/store/useAuthStore";
import { authApi } from "../src/lib/api";

type UserType = "company" | "employee";

export default function RegisterPage() {
    const [userType, setUserType] = useState<UserType>("company");
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        password: "",
        companyCode: ""
    });
    const [error, setError] = useState("");
    const { setAuth, setLoading, isLoading } = useAuthStore();
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
        setError("");
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            // NOTE: Employee signup often requires a different flow or role
            // Mapping UI "company" -> role "COMPANY" (example) if backend needs it.
            // OpenAPI schema expects: full_name, email, password, role.

            await authApi.signUp({
                full_name: formData.full_name,
                email: formData.email,
                password: formData.password,
                role: userType === 'company' ? 'company' : 'employee'
            });

            // Standard signup expects OTP verification next
            router.push(`/otp/verify?email=${encodeURIComponent(formData.email)}`);
        } catch (err: any) {
            console.error("Signup Error:", err);
            setError(err.response?.data?.message || err.response?.data?.description || "Signup failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // Google Signup acts like Login (returns tokens directly if successful)
    const googleSignup = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            setLoading(true);
            try {
                const response = await authApi.googleSignUp(tokenResponse.access_token);
                const { access_token, refresh_token, first_name, last_name, email } = response.data;
                setAuth(access_token, refresh_token, { first_name, last_name, email });
                router.push("/dashboard");
            } catch (err: any) {
                console.error("Google Signup Error:", err);
                setError(err.response?.data?.message || "Google signup failed.");
            } finally {
                setLoading(false);
            }
        },
        onError: () => {
            setError("Google signup failed.");
        }
    });

    return (
        <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

            {/* Left: Brand / Context Section (Inverted High Contrast) */}
            <section className="bg-black p-12 flex flex-col justify-center items-center text-center text-white relative overflow-hidden">
                <div className="z-10 absolute top-12 left-12">
                    <Link href="/" className="text-3xl font-bold tracking-tight hover:text-gray-300 transition-colors">
                        covert.
                    </Link>
                </div>

                <div className="flex flex-col gap-6 max-w-lg z-10">
                    <h1 className="text-7xl font-bold tracking-tight leading-[0.9]">
                        {userType === 'company' ? 'Join the revolution.' : 'Join your team.'}
                    </h1>
                    <p className="text-2xl text-gray-400">
                        {userType === 'company'
                            ? 'Start managing your organization with zero friction today.'
                            : 'Collaborate with your team in a unified workspace.'}
                    </p>
                </div>

                {/* Decorational Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
            </section>

            {/* Right: Register Form Section */}
            <section className="bg-white p-12 md:p-24 flex flex-col justify-center items-center">
                <div className="w-full max-w-md flex flex-col gap-8">

                    <div className="flex flex-col gap-2">
                        <h2 className="text-4xl font-bold text-black">Create an account</h2>
                        <p className="text-text-secondary text-lg">Enter your details to get started.</p>
                    </div>

                    {/* User Type Toggle */}
                    <div className="flex p-1 bg-gray-100 rounded-lg w-full">
                        <button
                            type="button"
                            onClick={() => setUserType("company")}
                            className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${userType === "company"
                                ? "bg-white text-black shadow-sm"
                                : "text-gray-500 hover:text-black"
                                }`}
                        >
                            Company Signup
                        </button>
                        <button
                            type="button"
                            onClick={() => setUserType("employee")}
                            className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${userType === "employee"
                                ? "bg-white text-black shadow-sm"
                                : "text-gray-500 hover:text-black"
                                }`}
                        >
                            Employee Signup
                        </button>
                    </div>

                    {/* Google Sign Up */}
                    <button
                        onClick={() => googleSignup()}
                        type="button"
                        className="flex items-center justify-center gap-3 w-full px-6 py-4 border border-black text-black text-lg font-bold hover:bg-gray-50 transition-colors disabled:opacity-50"
                        disabled={isLoading}
                    >
                        {/* Google Icon SVG */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Sign up with Google
                    </button>

                    <div className="relative flex items-center justify-center">
                        <div className="absolute w-full border-t border-gray-200"></div>
                        <span className="relative bg-white px-4 text-gray-500 text-sm font-medium">OR CONTINUE WITH</span>
                    </div>

                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm text-center">
                            {error}
                        </div>
                    )}

                    {/* Email Form */}
                    <form className="flex flex-col gap-6" onSubmit={handleRegister}>

                        {userType === "employee" && (
                            <Input
                                id="companyCode"
                                type="text"
                                label="Company Invitation Code"
                                placeholder="e.g. C-12345"
                                value={formData.companyCode}
                                onChange={handleChange}
                            />
                        )}

                        <Input
                            id="full_name"
                            type="text"
                            label="Full Name"
                            placeholder="John Doe"
                            value={formData.full_name}
                            onChange={handleChange}
                            required
                        />

                        <Input
                            id="email"
                            type="email"
                            label="Email address"
                            placeholder="name@company.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <div className="flex flex-col gap-2">
                            <Input
                                id="password"
                                type="password"
                                label="Password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <Button
                            variant="primary"
                            size="lg"
                            className="w-full mt-2"
                            isLoading={isLoading}
                            type="submit"
                        >
                            {userType === 'company' ? 'Start Company Profile' : 'Join Workspace'}
                        </Button>
                    </form>

                    <p className="text-center text-text-secondary mt-4">
                        Already have an account?{" "}
                        <Link href="/login" className="text-black font-bold hover:underline">
                            Log in
                        </Link>
                    </p>

                </div>
            </section>
        </main>
    );
}
