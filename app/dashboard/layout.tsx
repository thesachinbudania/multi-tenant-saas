import DashboardNav from "../src/components/dashboard/DashboardNav";

const theme = {
    primary: "#020617", // Rich Dark Navy (almost black)
    secondary: "#f8fafc", // Very light slate (cleaner than stark white)
    accent: "#4f46e5", // Indigo (Professional pop)
    foreground: "#000000" // Sharp Black
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {


    return (
        <div
            className="flex flex-col md:flex-row min-h-screen bg-white transition-colors duration-300"
            style={{
                // @ts-ignore
                "--color-primary": theme.primary,
                "--color-secondary": theme.secondary,
                "--color-accent": theme.accent,
                "--color-foreground": theme.foreground,
            }}
        >
            {/* Sidebar - Persistent across all dashboard pages */}
            <DashboardNav />
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                {children}
            </div>
        </div>
    );
}
