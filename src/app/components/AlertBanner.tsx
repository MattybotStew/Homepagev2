import svgPaths from "../../imports/svg-akfmgxmoo7";
import Frame174 from "../../imports/Frame174";

function ClockIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px] sm:size-[24px]">
      <div className="absolute inset-[12.5%]">
        <div className="absolute inset-[-3.61%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.3 19.3">
            <g id="Group">
              <path d={svgPaths.p23a8bb70} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              <path d="M8.65 5.65V10.65H13.65" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function SearchIcon() {
  return (
    <div className="relative shrink-0 size-[24px] sm:size-[28px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Frame 3">
          <rect fill="#F9F9FB" height="28" rx="14" width="28" />
          <path d={svgPaths.p301eb200} id="Vector" stroke="#1D3E6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.61437" />
        </g>
      </svg>
    </div>
  );
}

function CompassIcon() {
  return (
    <div className="relative shrink-0 size-[24px] sm:size-[28px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Frame 39915">
          <g clipPath="url(#clip0_10_285)">
            <rect fill="white" height="28" rx="14" width="28" />
            <path d={svgPaths.p22999680} fill="#F7941E" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_10_285">
            <rect fill="white" height="28" rx="14" width="28" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function AlertBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#1D3E6B] w-full">
      <div className="flex items-center justify-between px-[16px] sm:px-[20px] md:px-[24px] lg:px-[32px] py-[8px] sm:py-[10px] w-full">
        {/* Left Section - Hours and Phone */}
        <div className="flex items-center gap-[16px] sm:gap-[20px] md:gap-[32px]">
          {/* Hours */}
          <div className="flex items-center gap-[8px]">
            <ClockIcon />
            <p className="font-['Nunito',sans-serif] font-medium leading-[20px] text-[13px] md:text-[14px] text-white whitespace-nowrap">
              <span className="hidden sm:inline">Today's Hours: </span>
              <span className="sm:hidden">Hours: </span>
              10:00am-3:30pm
            </p>
          </div>

          {/* Phone */}
          <div className="hidden sm:flex items-center">
            <Frame174 />
          </div>
        </div>

        {/* Right Section - Membership Portal */}
        <div className="flex items-center gap-[8px] sm:gap-[12px]">
          <p className="hidden lg:block font-['Nunito',sans-serif] font-medium leading-[20px] text-[14px] text-white whitespace-nowrap">
            Membership Portal
          </p>
          <div className="flex items-center gap-[8px]">
            <SearchIcon />
            <CompassIcon />
          </div>
        </div>
      </div>
    </div>
  );
}