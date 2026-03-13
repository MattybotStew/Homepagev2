import svgPaths from "./svg-cw9fh8rqvi";

export default function MuseumHours() {
  return (
    <button className="w-full cursor-pointer" data-name="MuseumHours">
      <div className="bg-white flex flex-col items-start rounded-[16px] shadow-[0px_4px_20px_0px_rgba(247,148,30,0.15)] w-full" data-name="Button">
        <div className="flex gap-[12px] h-[64px] items-center px-[16px] w-full" data-name="Container">
          <div className="bg-[#f7941e] relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
              <div className="relative shrink-0 size-[20px]" data-name="Icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g clipPath="url(#clip0_12_857)" id="Icon">
                    <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M10 5V10L13.3333 11.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </g>
                  <defs>
                    <clipPath id="clip0_12_857">
                      <rect fill="white" height="20" width="20" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[38px] min-h-px min-w-px relative" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
              <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
                <p className="absolute font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[16px] left-0 text-[#1b3d6d] text-[12px] text-left top-[-0.5px] whitespace-nowrap">Opening Times Today</p>
              </div>
              <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Container">
                <p className="absolute font-['Quicksand:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#f7941e] text-[14px] text-left top-0 whitespace-nowrap">Members 9-10 AM | General 10 AM-3:30 PM</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-180">
              <div className="relative size-[20px]" data-name="Icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g id="Icon">
                    <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, #1B3D6D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}