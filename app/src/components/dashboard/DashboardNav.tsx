"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { label: "Overview", href: "/dashboard" },
    { label: "Management", href: "/dashboard/management" },
    { label: "Change Employees", href: "/dashboard/employees" },
    { label: "Settings", href: "/dashboard/settings" },
];

export default function DashboardNav() {
    const pathname = usePathname();

    return (
        <nav className="w-full md:w-64 bg-[var(--color-primary)] text-white flex flex-col min-h-screen shrink-0 border-r border-[var(--color-foreground)] transition-colors duration-300">
            <div className="p-8">
                <Link href="/" className="text-2xl font-bold tracking-tight hover:text-gray-300 transition-colors">
                    covert.
                </Link>
            </div>

            <div className="flex flex-col gap-2 px-4 mt-4">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`px-4 py-3 text-lg font-medium rounded-sm transition-colors ${isActive
                                ? "bg-white text-black font-bold"
                                : "text-gray-400 hover:text-white hover:bg-white/10"
                                }`}
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </div>

            <div className="mt-auto p-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                        JD
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold">John Doe</span>
                        <span className="text-sm text-gray-400">Admin</span>
                    </div>
                </div>
            </div>
        </nav>
    );
}
