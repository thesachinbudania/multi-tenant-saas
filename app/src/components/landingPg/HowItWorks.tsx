import Image from "next/image"

export default function HowItWorks() {
    return (
        <section className="flex flex-col gap-20 items-center w-full py-24 px-8 bg-white">
            {/* Section Title */}
            <div className="flex flex-col gap-4 items-center text-center">
                <h2 className="text-6xl font-bold text-black tracking-tight leading-[1.1]">
                    From registration to results<br /> in minutes.
                </h2>
                <div className="w-24 h-1 bg-black mt-2"></div>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">

                {/* Step 1 */}
                <div className="group flex flex-col gap-8 p-10 border border-black hover:bg-black hover:text-white transition-all duration-300 cursor-default">
                    <span className="text-7xl font-bold text-black group-hover:text-white transition-colors">
                        01
                    </span>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-3xl text-black group-hover:text-white font-bold transition-colors">
                            Create Workspace
                        </h3>
                        <p className="text-lg leading-relaxed text-text-secondary group-hover:text-white transition-colors">
                            Register your company and claim your unique workspace URL (e.g., yourcompany.nexus.com).
                        </p>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="group flex flex-col gap-8 p-10 border border-black hover:bg-black hover:text-white transition-all duration-300 cursor-default">
                    <span className="text-7xl font-bold text-black group-hover:text-white transition-colors">
                        02
                    </span>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-3xl font-bold text-black group-hover:text-white transition-colors">
                            Onboard Team
                        </h3>
                        <p className="text-lg leading-relaxed text-text-secondary group-hover:text-white transition-colors">
                            Add your employees by email. They get instant access to your private, branded portal.
                        </p>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="group flex flex-col gap-8 p-10 border border-black hover:bg-black hover:text-white transition-all duration-300 cursor-default">
                    <span className="text-7xl font-bold text-black group-hover:text-white transition-colors">
                        03
                    </span>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-3xl font-bold text-black group-hover:text-white transition-colors">
                            Start Working
                        </h3>
                        <p className="text-lg leading-relaxed text-text-secondary group-hover:text-white transition-colors">
                            Create tasks and assign them. Watch real-time updates as your team ticks them off.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
