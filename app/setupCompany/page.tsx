"use client";

import Link from "next/link";
import Button from "../src/components/ui/Button";
import Input from "../src/components/ui/Input";
import FileUpload from "../src/components/ui/FileUpload";
import ColorPicker from "../src/components/ui/ColorPicker";
import { useState, useEffect } from "react";
import { adjustColor, getComplementaryColor } from "../src/lib/themeUtils";

export default function SetupCompanyPage() {
    const [primaryColor, setPrimaryColor] = useState("#342ee8");
    const [palette, setPalette] = useState({ secondary: "#ffffff", accent: "#000000" });

    useEffect(() => {
        if (/^#[0-9A-F]{6}$/i.test(primaryColor)) {
            const comp = getComplementaryColor(primaryColor);
            setPalette({
                secondary: "#ffffff",
                accent: comp
            });

            if (typeof window !== 'undefined') {
                localStorage.setItem('custom-theme', JSON.stringify({
                    primary: primaryColor,
                    secondary: "#ffffff",
                    accent: comp,
                    foreground: "#000000"
                }));
            }
        }
    }, [primaryColor]);

    return (
        <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

            {/* Left: Context Section */}
            <section className="bg-black p-12 flex flex-col justify-center items-center text-center text-white relative overflow-hidden">
                <div className="z-10 absolute top-12 left-12">
                    <Link href="/" className="text-3xl font-bold tracking-tight hover:text-gray-300 transition-colors">
                        covert.
                    </Link>
                </div>

                <div className="flex flex-col gap-6 max-w-lg z-10">
                    <h1 className="text-7xl font-bold tracking-tight leading-[0.9]">
                        Make it yours.
                    </h1>
                    <p className="text-2xl text-gray-400">
                        Customize your workspace to match your brand identity.
                    </p>
                </div>

                {/* Decorational Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
            </section>

            {/* Right: Setup Form Section */}
            <section className="bg-white p-12 md:p-24 flex flex-col justify-center items-center">
                <div className="w-full max-w-md flex flex-col gap-10">

                    <div className="flex flex-col gap-2">
                        <h2 className="text-4xl font-bold text-black">Company Setup</h2>
                        <p className="text-text-secondary text-lg">Define your organization profile.</p>
                    </div>

                    <form className="flex flex-col gap-8">

                        {/* Logo Upload */}
                        <FileUpload label="Company Logo" />

                        {/* Company Name */}
                        <Input
                            type="text"
                            label="Company Name"
                            placeholder="Acme Corp"
                        />

                        {/* Theme Color */}
                        <div className="flex flex-col gap-4">
                            <ColorPicker
                                label="Primary Brand Color"
                                value={primaryColor}
                                onChange={setPrimaryColor}
                            />

                            {/* Generated Palette Preview */}
                            <div className="p-4 bg-gray-50 border border-black rounded-sm flex flex-col gap-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Generated Theme Palette</span>
                                <div className="flex gap-4">
                                    <div className="flex flex-col gap-1 items-center">
                                        <div className="w-12 h-12 rounded-full border border-black/10 shadow-sm" style={{ backgroundColor: primaryColor }} />
                                        <span className="text-[10px] font-mono font-medium">{primaryColor}</span>
                                        <span className="text-[10px] font-bold text-gray-400">Primary</span>
                                    </div>
                                    <div className="flex flex-col gap-1 items-center">
                                        <div className="w-12 h-12 rounded-full border border-black/10 shadow-sm" style={{ backgroundColor: palette.secondary }} />
                                        <span className="text-[10px] font-mono font-medium">{palette.secondary}</span>
                                        <span className="text-[10px] font-bold text-gray-400">Secondary</span>
                                    </div>
                                    <div className="flex flex-col gap-1 items-center">
                                        <div className="w-12 h-12 rounded-full border border-black/10 shadow-sm" style={{ backgroundColor: palette.accent }} />
                                        <span className="text-[10px] font-mono font-medium">{palette.accent}</span>
                                        <span className="text-[10px] font-bold text-gray-400">Accent</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button variant="primary" size="lg" className="w-full">
                                Save & Continue
                            </Button>
                        </div>
                    </form>

                    <Link href="/dashboard" className="text-center text-sm font-bold text-gray-400 hover:text-black mt-4">
                        Skip for now
                    </Link>

                </div>
            </section>
        </main>
    );
}
