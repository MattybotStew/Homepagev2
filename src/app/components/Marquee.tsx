import svgPaths from "../../imports/svg-lyystvpsgq";

export default function Marquee() {
  const marqueeItems = [
    { text: "Downtown Atlanta" },
    { text: "Open Today 10am-3:30pm" },
    { text: "Tickets from $17.95" },
  ];

  return (
    <div className="bg-[#1d3e6b] w-full overflow-hidden py-[20px] md:py-[30px] relative">
      <div className="cma-marquee-container">
        {/* Duplicate content for seamless loop */}
        <div className="cma-marquee-content">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={index} className="flex items-center gap-[20px] md:gap-[30px] shrink-0">
              <p className="font-bold text-white whitespace-nowrap text-[clamp(18px,3vw,39px)] leading-none">
                {item.text}
              </p>
              <div className="h-[20px] md:h-[25px] lg:h-[30.962px] w-[17px] md:w-[21px] lg:w-[26.263px] shrink-0">
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
