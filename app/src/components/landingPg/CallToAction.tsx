import Image from "next/image"
import Button from "../ui/Button"

export default function CallToAction() {
    return (
        <section className="flex flex-col items-center justify-center w-full py-32 px-8 bg-black">
            <div className="flex flex-col gap-10 items-center text-center max-w-4xl">

                {/* Heading */}
                <h2 className="text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                    Ready to streamline<br /> your organization?
                </h2>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
                    Join teams using Nexus to isolate data, manage tasks, and scale security without the friction.
                </p>

                {/* Action Buttons */}
                <div className="flex gap-6 items-center flex-col sm:flex-row mt-4">
                    <Button variant="inverse" size="hero">
                        Get Started Now
                    </Button>

                    <Button variant="inverse-outline" size="hero">
                        Contact Sales
                    </Button>
                </div>

            </div>
        </section>
    );
}
