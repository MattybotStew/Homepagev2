import svgPaths from "./svg-jimhgnmmnu";

function Heading() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center leading-[0] relative shrink-0 w-[1280px]" data-name="Heading 1">
      <div className="flex flex-col font-['Nunito:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#1b3d6d] text-[70px] whitespace-nowrap">
        <p className="leading-none">Visit More, Pay Less</p>
      </div>
      <div className="flex flex-col font-['Nunito:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#282325] text-[19px] text-center w-[601px]">
        <p className="leading-[24px]">Family membership pays for itself in just 3 visits</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Heading />
    </div>
  );
}

function Background() {
  return (
    <div className="content-stretch flex flex-col items-start py-[30px] relative shrink-0 w-full" data-name="Background">
      <div className="flex flex-col font-['Nunito:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] max-h-[24.040000915527344px] overflow-hidden relative shrink-0 text-[#474763] text-[42px] text-ellipsis tracking-[-1.68px] w-[352px]">
        <p className="leading-[24px]">Single Visit</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[34px] items-start justify-center pb-[44px] pt-[20px] relative shrink-0 w-full">
      <div className="flex flex-col font-['Josefin_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#474763] text-[0px] text-ellipsis tracking-[-0.8px] w-full">
        <p className="text-[20px]">
          <span className="font-['Nunito:Bold',sans-serif] font-bold leading-[40px] text-[#f7941e] text-[40px]">$17.95</span>
          <span className="font-['Nunito:Bold',sans-serif] font-bold leading-[20px] text-[#4a5568]">{`/person `}</span>
          <span className="font-['Nunito:Regular',sans-serif] font-normal leading-[24px] text-[#4a5568] text-[16px]">Family of 4: $71.80</span>
        </p>
      </div>
      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#78787a] text-[20px] w-full">Perfect for trying us out or one-time visits.</p>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#fff6e9] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[26px]" data-name="card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[27px]" />
      <div className="content-stretch flex flex-col items-start pb-[40px] px-[40px] relative size-full">
        <Background />
        <Frame />
        <div className="bg-[#f7941e] content-stretch flex items-center justify-center overflow-clip px-[34px] py-[22px] relative rounded-[1000px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0" data-name="CTA">
          <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[1.13] relative shrink-0 text-[24px] text-white whitespace-nowrap">Buy Tickets Now</p>
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="content-stretch flex flex-col items-start py-[30px] relative shrink-0 w-full" data-name="Background">
      <div className="flex flex-col font-['Nunito:SemiBold',sans-serif] font-semibold justify-center leading-[0] max-h-[24.040000915527344px] min-w-full overflow-hidden relative shrink-0 text-[#474763] text-[42px] text-ellipsis tracking-[-1.68px] w-[min-content]">
        <p className="leading-[24px]">Membership</p>
      </div>
      <div className="-translate-y-1/2 absolute bg-[#f7941e] content-stretch flex flex-col gap-[10px] items-start px-[12px] py-[8px] right-[-7px] rounded-[1000px] top-[calc(50%-17.89px)] w-[120px]" data-name="tag">
        <div className="flex flex-col font-['Nunito:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-hidden relative shrink-0 text-[12px] text-ellipsis text-white tracking-[-0.48px] uppercase whitespace-nowrap">
          <p className="leading-[24px]">best value</p>
        </div>
        <div className="absolute flex h-[36.281px] items-center justify-center left-[87px] top-[-6px] w-[27.713px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-[118.46deg]">
            <div className="h-[12.965px] relative w-[34.24px]" data-name="eVTOJl2v6Zp40">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.2401 12.9647">
                <path d={svgPaths.p17840200} fill="var(--fill-0, #1D3E6B)" id="eVTOJl2v6Zp40" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[34px] items-start justify-center pb-[44px] pt-[20px] relative shrink-0 w-full">
      <div className="flex flex-col font-['Josefin_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#474763] text-[0px] text-ellipsis tracking-[-0.8px] w-full">
        <p className="text-[20px]">
          <span className="font-['Nunito:Bold',sans-serif] font-bold leading-[40px] text-[#00adbb] text-[40px]">$149</span>
          <span className="font-['Nunito:Bold',sans-serif] font-bold leading-[20px] text-[#4a5568]">{`/year `}</span>
          <span className="font-['Nunito:Regular',sans-serif] font-normal leading-[24px] text-[#4a5568] text-[16px]">• Family of 4 covered</span>
        </p>
      </div>
      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#78787a] text-[20px] w-full">Unlimited visits + perks. Pays for itself in 3 visits.</p>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-[#fff6e9] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[26px]" data-name="card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[27px]" />
      <div className="content-stretch flex flex-col items-start pb-[40px] px-[40px] relative size-full">
        <Background1 />
        <Frame2 />
        <div className="bg-[#00adbb] content-stretch flex items-center justify-center overflow-clip px-[34px] py-[22px] relative rounded-[1000px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0" data-name="CTA">
          <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[1.13] relative shrink-0 text-[24px] text-white whitespace-nowrap">Become a Member</p>
        </div>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="content-stretch flex gap-[30px] h-[325.04px] items-center relative shrink-0 w-full" data-name="cards">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Card />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Card1 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[70px] items-center max-w-[1280px] pb-[140px] pt-[160px] relative shrink-0 w-[1280px]" data-name="Section">
      <Frame1 />
      <Cards />
    </div>
  );
}

export default function PlanYourVisit() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full" data-name="Plan Your Visit">
      <Section />
    </div>
  );
}