import svgPaths from "../../imports/svg-lyystvpsgq";

export default function Marquee() {
  const marqueeItems = [
    { text: "Tickets from $19.95" },
    { text: "404.659.5437" },
    { text: "Monday-Sunday: 10:00 AM - 5:00 PM" },
    { text: "Downtown Atlanta" },
  ];

  return (
    <div className="bg-cma-navy w-full overflow-hidden py-[12px] md:py-[16px] relative">
      <div className="cma-marquee-container">
        <div className="cma-marquee-content">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={index} className="flex items-center gap-[20px] md:gap-[32px] shrink-0">
              <p className="font-bold text-white whitespace-nowrap text-[clamp(16px,2.1vw,30px)] leading-none tracking-[-1px]">
                {item.text}
              </p>
              <div className="h-[clamp(18px,2.15vw,31px)] w-[clamp(15px,1.82vw,26px)] shrink-0">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 26.2634 30.9615"
                >
                  <path d={svgPaths.p3ba2400} fill="#00ADBD" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
