import svgPaths from "../../imports/svg-jimhgnmmnu";

export default function MembershipPricing() {
  return (
    <div className="bg-white relative w-full pb-16 md:pb-24 lg:pb-32" style={{ position: 'relative' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12" style={{ position: 'relative' }}>
        {/* Heading */}
        <div className="flex flex-col gap-6 md:gap-10 items-center mb-10 md:mb-14 lg:mb-[70px]" style={{ position: 'relative' }}>
          <h2 className="font-['Nunito',sans-serif] font-bold text-[#1b3d6d] text-[36px] md:text-[52px] lg:text-[70px] leading-none text-center">
            Visit More, Pay Less
          </h2>
          <p className="font-['Nunito',sans-serif] font-medium text-[#282325] text-[17px] md:text-[19px] leading-[24px] text-center max-w-[601px]">
            Family membership pays for itself in just 3 visits
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[30px]" style={{ position: 'relative' }}>
          {/* Single Visit Card */}
          <div className="bg-[#fff6e9] rounded-[36px] border border-[rgba(0,0,0,0.1)] p-6 md:p-10 flex flex-col" style={{ position: 'relative' }}>
            {/* Card Header */}
            <div className="py-[30px]">
              <h3 className="font-['Nunito',sans-serif] font-semibold text-[#474763] text-[32px] md:text-[42px] leading-[24px] tracking-[-1.68px]">
                Single Visit
              </h3>
            </div>

            {/* Card Content */}
            <div className="flex flex-col gap-6 md:gap-[34px] pb-8 md:pb-11 pt-5">
              <div className="font-['Nunito',sans-serif]">
                <span className="font-bold text-[#f7941e] text-[36px] md:text-[40px] leading-[40px]">$17.95</span>
                <span className="font-bold text-[#4a5568] text-[18px] md:text-[20px] leading-[20px]">/person </span>
                <span className="font-normal text-[#4a5568] text-[14px] md:text-[16px] leading-[24px]">Family of 4: $71.80</span>
              </div>
              <p className="font-['Nunito',sans-serif] font-normal text-[#78787a] text-[18px] md:text-[20px] leading-[1.6]">
                Perfect for trying us out or one-time visits.
              </p>
            </div>

            {/* CTA Button */}
            <button className="bg-[#f7941e] text-white font-['Nunito',sans-serif] font-bold text-[20px] md:text-[24px] leading-[1.13] px-8 md:px-[34px] py-4 md:py-[22px] rounded-full shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-[#e6840d] transition-colors min-h-[44px]">
              Buy Tickets Now
            </button>
          </div>

          {/* Membership Card */}
          <div className="bg-[#fff6e9] rounded-[36px] border border-[rgba(0,0,0,0.1)] p-6 md:p-10 flex flex-col relative" style={{ position: 'relative' }}>
            {/* Card Header with Badge */}
            <div className="py-[30px] relative">
              <h3 className="font-['Nunito',sans-serif] font-semibold text-[#474763] text-[32px] md:text-[42px] leading-[24px] tracking-[-1.68px]">
                Membership
              </h3>
              
              {/* Best Value Badge */}
              <div className="absolute -right-2 md:right-[-7px] top-1/2 -translate-y-1/2 bg-[#f7941e] rounded-full pl-3 pr-[38px] py-2 flex items-center gap-2">
                <span className="font-['Nunito',sans-serif] font-semibold text-white text-[12px] leading-[24px] tracking-[-0.48px] uppercase whitespace-nowrap">
                  best value
                </span>
                <div className="absolute right-[8px] top-1/2 -translate-y-1/2 w-[28px] h-[36px] flex items-center justify-center">
                  <div className="rotate-[118.46deg]">
                    <div className="relative w-[34.24px] h-[12.965px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.2401 12.9647">
                        <path d={svgPaths.p17840200} fill="#1D3E6B" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="flex flex-col gap-6 md:gap-[34px] pb-8 md:pb-11 pt-5">
              <div className="font-['Nunito',sans-serif]">
                <span className="font-bold text-[#00adbb] text-[36px] md:text-[40px] leading-[40px]">$149</span>
                <span className="font-bold text-[#4a5568] text-[18px] md:text-[20px] leading-[20px]">/year </span>
                <span className="font-normal text-[#4a5568] text-[14px] md:text-[16px] leading-[24px]">• Family of 4 covered</span>
              </div>
              <p className="font-['Nunito',sans-serif] font-normal text-[#78787a] text-[18px] md:text-[20px] leading-[1.6]">
                Unlimited visits + perks. Pays for itself in 3 visits.
              </p>
            </div>

            {/* CTA Button */}
            <button className="bg-[#00adbb] text-white font-['Nunito',sans-serif] font-bold text-[20px] md:text-[24px] leading-[1.13] px-8 md:px-[34px] py-4 md:py-[22px] rounded-full shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-[#009aa7] transition-colors min-h-[44px]">
              Become a Member
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}