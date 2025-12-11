import Image from "next/image"

export default function Benefits() {
  return (
    <section className="flex flex-col gap-16 items-center w-full py-16 px-8">
      {/* Section Title */}
      <h2 className="text-5xl font-bold text-black text-center w-[454px] leading-[48px]">
        Why teams trust Nexus
      </h2>

      {/* Benefits Grid */}
      <div className="flex gap-grid-lg items-start w-full justify-center">
        {/* Benefit 1: Devices Management */}
        <div className="flex gap-5 items-start">
          <div className="flex flex-col gap-grid-lg items-start">
            {/* Icon */}
            <Image src="/images/home/aboutIcon1.svg" alt="Devices Management Icon" width={66} height={66} />
            {/* Content */}
            <div className="flex flex-col gap-4 items-start">
              <h3 className="text-2xl font-semibold text-black whitespace-nowrap">
                Whilte-Label interface
              </h3>
              <p className="text-lg leading-7 text-text-secondary w-[329px]">
                Make the platform your own. Upload your logo and set your brand colors so your team feels right at home from day one.
              </p>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-px h-8 bg-black self-start" />
        </div>

        {/* Benefit 2: Time & Attendance */}
        <div className="flex gap-5 items-start">
          <div className="flex flex-col gap-grid-lg items-start h-full">
            {/* Icon */}
            <Image src="/images/home/aboutIcon2.svg" alt="Devices Management Icon" width={66} height={66} />
            {/* Content */}
            <div className="flex flex-col gap-4 items-start">
              <h3 className="text-2xl font-semibold text-black whitespace-nowrap">
                Data Isolation
              </h3>
              <p className="text-lg leading-7 text-text-secondary w-[329px]">
                Your data lives in its own dedicated space. We use schema-based isolation to ensure your organization is separated from everyone else.
              </p>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-px h-8 bg-black self-end" />
        </div>

        {/* Benefit 3: Talent Management */}
        <div className="flex items-start">
          <div className="flex flex-col gap-grid-lg items-start">
            {/* Icon */}
            <Image src="/images/home/aboutIcon3.svg" alt="Devices Management Icon" width={66} height={66} />
            {/* Content */}
            <div className="flex flex-col gap-4 items-start">
              <h3 className="text-2xl font-semibold text-black whitespace-nowrap">
                Pure focus
              </h3>
              <p className="text-lg leading-7 text-text-secondary w-[329px]">
                A streamlined interfae designed for execution. No distractions, no unnecessary features—just the tools you need to get work done efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
