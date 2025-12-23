"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import Button from "../../../src/components/ui/Button";
import Input from "../../../src/components/ui/Input";
import { useAuthStore } from "../../../src/store/useAuthStore";
import { authApi } from "../../../src/lib/api";

function OtpForm() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const email = searchParams.get('email') || "";

    // Manage local loading state for resend button separately if needed
    // But use global loading for the main action
    const { setAuth, setLoading, isLoading } = useAuthStore();

    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const [resendStatus, setResendStatus] = useState("");

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!email) {
            setError("Email is missing. Please sign up again.");
            return;
        }

        setLoading(true);

        try {
            const response = await authApi.verifyOtp({
                email,
                otp: parseInt(otp, 10)
            });

            const { access_token, refresh_token, first_name, last_name, email: userEmail } = response.data;
            setAuth(access_token, refresh_token, { first_name, last_name, email: userEmail });
            router.push("/dashboard");
        } catch (err: any) {
            console.error("OTP Verify Error:", err);
            setError(err.response?.data?.message || err.response?.data?.description || "Invalid OTP. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleResend = async () => {
        if (!email) return;
        setResendStatus("Sending...");
        try {
            await authApi.resendOtp(email);
            setResendStatus("OTP resent successfully!");
        } catch (err: any) {
            setResendStatus("Failed to resend OTP.");
        }
    };

    return (
        <div className="w-full max-w-md flex flex-col gap-8">

            <div className="flex flex-col gap-2">
                <h2 className="text-4xl font-bold text-black">Check your email</h2>
                <p className="text-text-secondary text-lg">
                    We've sent a verification code to <span className="font-bold text-black">{email}</span>.
                </p>
            </div>

            {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm text-center">
                    {error}
                </div>
            )}

            {resendStatus && (
                <div className={`p-3 rounded-md text-sm text-center ${resendStatus.includes("Failed") ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"}`}>
                    {resendStatus}
                </div>
            )}

            <form className="flex flex-col gap-6" onSubmit={handleVerify}>
                <Input
                    id="otp"
                    type="number"
                    label="Verification Code"
                    placeholder="123456"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                />

                <Button
                    variant="primary"
                    size="lg"
                    className="w-full mt-2"
                    isLoading={isLoading}
                    type="submit"
                >
                    Verify Email
                </Button>
            </form>

            <div className="text-center text-text-secondary mt-4">
                Didn't receive the code?{" "}
                <button
                    onClick={handleResend}
                    type="button"
                    className="text-black font-bold hover:underline bg-transparent border-none cursor-pointer"
                >
                    Click to resend
                </button>
            </div>

            <div className="text-center">
                <Link href="/register" className="text-sm text-gray-500 hover:text-black">
                    Use a different email address
                </Link>
            </div>

        </div>
    );
}

export default function OtpPage() {
    return (
        <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

            {/* Left: Brand / Context Section */}
            <section className="bg-black p-12 flex flex-col justify-center items-center text-center text-white relative overflow-hidden">
                <div className="z-10 absolute top-12 left-12">
                    <Link href="/" className="text-3xl font-bold tracking-tight hover:text-gray-300 transition-colors">
                        covert.
                    </Link>
                </div>

                <div className="flex flex-col gap-6 max-w-lg z-10">
                    <h1 className="text-7xl font-bold tracking-tight leading-[0.9]">
                        Verify it's you.
                    </h1>
                    <p className="text-2xl text-gray-400">
                        Security is our top priority.
                    </p>
                </div>

                {/* Decorational Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
            </section>

            {/* Right: Form Section */}
            <section className="bg-white p-12 md:p-24 flex flex-col justify-center items-center">
                <Suspense fallback={<div>Loading...</div>}>
                    <OtpForm />
                </Suspense>
            </section>
        </main>
    );
}
