import Image from 'next/image';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="flex items-center justify-between w-full px-8 py-16">
      {/* Left Content Section */}
      <div className="flex flex-col gap-8 items-start shrink-0">
        <div className="flex flex-col gap-3 items-start text-black">
          <h1 className="text-hero font-bold w-[464px]">
            Task Management, Build for Security
          </h1>
          <p className="text-xl leading-8 w-[420px]">
            The isolated workspace for your organization. Assign tasks, track progress, and collaborate in a dedicated, fully branded environment.
          </p>
        </div>
        <Button variant="primary" size="hero">
          Register Organization
        </Button>
        {/* Small Text */}
        <p className="text-sm text-text-secondary">
          Get your dedicated workspace URL instantly.
        </p>
      </div>

      {/* Right Illustration Section */}
      <div className="relative shrink-0 w-[467px] h-[454px]">
        <Image src="/images/home/hero.png" alt="Hero Illustration" fill className="object-contain" />
      </div>
    </section>
  );
}
