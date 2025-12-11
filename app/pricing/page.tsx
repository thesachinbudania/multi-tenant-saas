import Header from "../src/components/landingPg/Header";
import Button from "../src/components/ui/Button";

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="py-24 px-8 w-full flex flex-col items-center gap-16">

                {/* Page Title */}
                <div className="flex flex-col gap-4 items-center text-center">
                    <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-black">
                        Simple, transparent <br /> pricing.
                    </h1>
                    <p className="text-xl text-text-secondary max-w-2xl">
                        Choose the plan that fits your team's stage. No hidden fees.
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">

                    {/* 1. Starter */}
                    <div className="flex flex-col p-8 border border-black gap-8">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-3xl font-bold">Starter</h3>
                            <p className="text-text-secondary">For small teams just getting organized.</p>
                        </div>

                        <div className="text-5xl font-bold">
                            $29 <span className="text-xl font-medium text-text-secondary">/ month</span>
                        </div>

                        <Button variant="outline" className="w-full">
                            Choose Starter
                        </Button>

                        <ul className="flex flex-col gap-4 mt-2">
                            <li className="flex gap-3 items-center text-lg">
                                <span className="w-1.5 h-1.5 bg-black rounded-full" />
                                Up to 5 Team Members
                            </li>
                            <li className="flex gap-3 items-center text-lg">
                                <span className="w-1.5 h-1.5 bg-black rounded-full" />
                                Unlimited Projects
                            </li>
                            <li className="flex gap-3 items-center text-lg">
                                <span className="w-1.5 h-1.5 bg-black rounded-full" />
                                Basic Task Management
                            </li>
                            <li className="flex gap-3 items-center text-lg">
                                <span className="w-1.5 h-1.5 bg-black rounded-full" />
                                Standard Support
                            </li>
                        </ul>
                    </div>

                    {/* 2. Business (Recommended) - Inverted Style */}
                    <div className="flex flex-col p-8 border border-black bg-black text-white gap-8 relative transform md:-translate-y-4 shadow-2xl">
                        <div className="absolute top-0 right-0 bg-white text-black text-sm font-bold px-4 py-1 border-b border-l border-black">
                            RECOMMENDED
                        </div>

                        <div className="flex flex-col gap-2">
                            <h3 className="text-3xl font-bold">Business</h3>
                            <p className="text-gray-400">For growing companies that need a professional look.</p>
                        </div>

                        <div className="text-5xl font-bold">
                            $99 <span className="text-xl font-medium text-gray-400">/ month</span>
                        </div>

                        <Button variant="inverse" className="w-full">
                            Choose Business
                        </Button>

                        <ul className="flex flex-col gap-4 mt-2">
                            <li className="flex gap-3 items-center text-lg">
                                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                                Up to 25 Team Members
                            </li>
                            <li className="flex gap-3 items-center text-lg">
                                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                                Custom Branding (White-Label)
                            </li>
                            <li className="flex gap-3 items-center text-lg">
                                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                                Custom Workspace URL
                            </li>
                            <li className="flex gap-3 items-center text-lg">
                                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                                Priority Email Support
                            </li>
                            <li className="flex gap-3 items-center text-lg font-semibold">
                                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                                Everything in Starter
                            </li>
                        </ul>
                    </div>

                    {/* 3. Enterprise */}
                    <div className="flex flex-col p-8 border border-black gap-8">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-3xl font-bold">Enterprise</h3>
                            <p className="text-text-secondary">For large organizations requiring maximum scale.</p>
                        </div>

                        <div className="text-5xl font-bold">
                            $299 <span className="text-xl font-medium text-text-secondary">/ month</span>
                        </div>

                        <Button variant="outline" className="w-full">
                            Choose Enterprise
                        </Button>

                        <ul className="flex flex-col gap-4 mt-2">
                            <li className="flex gap-3 items-center text-lg">
                                <span className="w-1.5 h-1.5 bg-black rounded-full" />
                                Unlimited Team Members
                            </li>
                            <li className="flex gap-3 items-center text-lg">
                                <span className="w-1.5 h-1.5 bg-black rounded-full" />
                                Dedicated Account Manager
                            </li>
                            <li className="flex gap-3 items-center text-lg">
                                <span className="w-1.5 h-1.5 bg-black rounded-full" />
                                99.9% Uptime SLA
                            </li>
                            <li className="flex gap-3 items-center text-lg">
                                <span className="w-1.5 h-1.5 bg-black rounded-full" />
                                24/7 Phone Support
                            </li>
                            <li className="flex gap-3 items-center text-lg font-semibold">
                                <span className="w-1.5 h-1.5 bg-black rounded-full" />
                                Everything in Business
                            </li>
                        </ul>
                    </div>

                </div>
            </section>
        </main>
    );
}
