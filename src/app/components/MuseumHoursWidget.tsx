import { useState } from "react";
import svgPaths from "../../imports/svg-hrwncgg2u8";
import svgPathsNew from "../../imports/svg-h8ieio7v8a";

export default function MuseumHoursWidget() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col gap-[12px] items-start w-full">
      {/* Collapsed Header - Always Visible */}
      <button 
        className="w-full cursor-pointer" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="bg-white flex flex-col items-start rounded-[16px] shadow-[0px_4px_20px_0px_rgba(247,148,30,0.15)] w-full">
          <div className="flex gap-[12px] h-[64px] items-center px-[16px] w-full">
            <div className="bg-[#f7941e] relative rounded-full shrink-0 size-[40px]">
              <div className="flex items-center justify-center relative size-full">
                <div className="relative shrink-0 size-[20px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g clipPath="url(#clip0_12_857)" id="Icon">
                      <path d={svgPaths.p14d24500} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d="M10 5V10L13.3333 11.6667" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
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
            <div className="flex-1 h-[38px] min-h-px min-w-px relative">
              <div className="flex flex-col gap-[2px] items-start relative size-full">
                <div className="h-[16px] relative shrink-0 w-full">
                  <p className="font-['Quicksand',sans-serif] font-semibold leading-[16px] text-[#1b3d6d] text-[12px] text-left whitespace-nowrap">Opening Times Today</p>
                </div>
                <div className="h-[20px] overflow-clip relative shrink-0 w-full">
                  <p className="font-['Quicksand',sans-serif] font-bold leading-[20px] text-[#f7941e] text-[14px] text-left whitespace-nowrap">Members 9-10 AM | General 10 AM-3:30 PM</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center relative shrink-0">
              <div className={`flex-none transition-transform duration-300 ${isExpanded ? 'rotate-0' : 'rotate-180'}`}>
                <div className="relative size-[20px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="Icon">
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="#1B3D6D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>

      {/* Expanded Panel - Shows when isExpanded is true */}
      {isExpanded && (
        <div className="bg-white flex flex-col items-start overflow-clip rounded-[24px] shadow-[0px_10px_40px_0px_rgba(0,0,0,0.15)] w-full animate-[slideDown_0.3s_ease-out]">
          {/* Header */}
          <div className="w-full">
            <div className="flex items-center gap-[20px] p-[20px]">
              <div className="relative shrink-0 size-[20px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g id="Icon">
                    <path d="M6.66667 1.66667V5" stroke="#1D3E6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M13.3333 1.66667V5" stroke="#1D3E6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPathsNew.p1da67b80} stroke="#1D3E6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M2.5 8.33333H17.5" stroke="#1D3E6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </g>
                </svg>
              </div>
              <p className="font-['Nunito',sans-serif] font-bold leading-[28px] text-[#1d3e6b] text-[24px] whitespace-nowrap">Museum Hours</p>
            </div>
          </div>

          {/* Content */}
          <div className="w-full pb-[20px] px-[20px]">
            <div className="bg-[#fff6e9] rounded-[16px] w-full">
              <div className="flex flex-col gap-[12px] items-start p-[18px]">
                {/* Weekday Hours Heading */}
                <div className="flex gap-[8px] items-center w-full">
                  <div className="relative shrink-0 size-[20px]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g clipPath="url(#clip0_weekday_new)" id="Icon">
                        <path d={svgPathsNew.p14d24500} stroke="#F7941E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M10 5V10L13.3333 11.6667" stroke="#F7941E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                      <defs>
                        <clipPath id="clip0_weekday_new">
                          <rect fill="white" height="20" width="20" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p className="font-['Nunito',sans-serif] font-bold leading-[24px] text-[#1d3e6b] text-[16px]">
                    <span>Weekday Hours: </span>
                    <span className="font-normal">Tuesday - Friday</span>
                  </p>
                </div>

                {/* Members Early Access */}
                <div className="bg-white rounded-[14px] w-full">
                  <div className="flex flex-col gap-[6px] items-start p-[14px]">
                    <p className="font-['Nunito',sans-serif] font-bold leading-[20px] text-[#1d3e6b] text-[14px] whitespace-nowrap">Members Early Access</p>
                    <p className="font-['Nunito',sans-serif] font-semibold leading-[20px] text-[#f7941e] text-[14px] whitespace-nowrap">9:00 - 10:00 AM</p>
                  </div>
                </div>

                {/* General Admission */}
                <div className="bg-white rounded-[14px] w-full">
                  <div className="flex flex-col gap-[6px] items-start p-[14px]">
                    <p className="font-['Nunito',sans-serif] font-bold leading-[20px] text-[#1d3e6b] text-[14px] whitespace-nowrap">General Admission</p>
                    <p className="font-['Nunito',sans-serif] font-semibold leading-[20px] text-[#00adbb] text-[14px] whitespace-nowrap">10:00 AM - 3:30 PM</p>
                  </div>
                </div>

                {/* Weekend Hours Heading */}
                <div className="flex gap-[8px] items-center w-full">
                  <div className="relative shrink-0 size-[20px]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g clipPath="url(#clip0_weekend_new)" id="Icon">
                        <path d={svgPathsNew.p14d24500} stroke="#F7941E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M10 5V10L13.3333 11.6667" stroke="#F7941E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                      <defs>
                        <clipPath id="clip0_weekend_new">
                          <rect fill="white" height="20" width="20" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p className="font-['Nunito',sans-serif] font-bold leading-[24px] text-[#1d3e6b] text-[16px]">
                    <span>Weekend Hours: </span>
                    <span className="font-normal">Saturday</span>
                  </p>
                </div>

                {/* Open to All */}
                <div className="bg-white rounded-[14px] w-full">
                  <div className="flex flex-col gap-[6px] items-start p-[14px]">
                    <p className="font-['Nunito',sans-serif] font-bold leading-[20px] text-[#1d3e6b] text-[14px] whitespace-nowrap">Open to All</p>
                    <p className="font-['Nunito',sans-serif] font-semibold leading-[20px] text-[#f7941e] text-[14px] whitespace-nowrap">9:00 AM - 4:30 PM</p>
                  </div>
                </div>

                {/* Closed Notice */}
                <div className="bg-white rounded-[14px] w-full">
                  <div className="flex items-center justify-center p-[14px]">
                    <p className="font-['Nunito',sans-serif] font-bold leading-[20px] text-[#1d3e6b] text-[14px] whitespace-nowrap">{`Closed Sundays & Mondays`}</p>
                  </div>
                </div>

                {/* Plan Your Visit Button */}
                <button className="bg-[#00adbb] rounded-[475px] shadow-[0px_0.475px_0.95px_0px_rgba(16,24,40,0.05)] w-full overflow-clip hover:bg-[#009aa7] transition-colors">
                  <div className="flex items-center justify-center px-[34px] py-[17px]">
                    <p className="font-['Nunito',sans-serif] font-bold leading-[1.13] text-[13px] text-white whitespace-nowrap">Plan Your Visit</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}