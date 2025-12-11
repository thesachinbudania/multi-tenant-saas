import Link from "next/link";
import Button from "../src/components/ui/Button";
import Input from "../src/components/ui/Input";

export default function RegisterPage() {
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
                        Join the revolution.
                    </h1>
                    <p className="text-2xl text-gray-400">
                        Start managing your organization with zero friction today.
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

                    {/* Google Sign Up */}
                    <button className="flex items-center justify-center gap-3 w-full px-6 py-4 border border-black text-black text-lg font-bold hover:bg-gray-50 transition-colors">
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

                    {/* Email Form */}
                    <form className="flex flex-col gap-6">
                        <Input
                            type="text"
                            label="Full Name"
                            placeholder="John Doe"
                        />

                        <Input
                            type="email"
                            label="Email address"
                            placeholder="name@company.com"
                        />

                        <div className="flex flex-col gap-2">
                            <Input
                                type="password"
                                label="Password"
                                placeholder="••••••••"
                            />
                        </div>

                        <Button variant="primary" size="lg" className="w-full mt-2">
                            Create Account
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
