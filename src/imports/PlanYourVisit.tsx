import svgPaths from "./svg-li3kx83oxq";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[30px] relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Nunito:Bold',sans-serif] font-bold justify-center leading-none relative shrink-0 text-[#1b3d6d] text-[70px] w-full">
        <p className="mb-0">Planning Your Visit?</p>
        <p>{`We've Got You Covered`}</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:SemiBold',sans-serif] font-semibold justify-center leading-[0] max-h-[24.040000915527344px] overflow-hidden relative shrink-0 text-[#474763] text-[24px] text-ellipsis tracking-[-0.96px] w-full">
        <p className="leading-[24px]">{`Hours & What to Expect`}</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[30px] relative shrink-0 w-full" data-name="Background">
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1b3d6d] text-[15px] text-center w-full">
        <p className="leading-[28px]">FRIDAY: Open 10am-3:30pm</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4a5565] text-[14px] text-center w-full">
        <p className="leading-[20px]">Members: 9am-10am (early access)</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[rgba(0,173,187,0.2)] relative rounded-[10px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[8px] py-[10px] relative w-full">
          <Container1 />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[12px] isolate items-center py-[15px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e3d7] border-b border-solid inset-0 pointer-events-none" />
      <div className="relative shrink-0 size-[18.05px] z-[2]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.05 18.05">
          <path d={svgPaths.p11f8ef00} fill="var(--fill-0, #00ADBB)" id="Vector" />
        </svg>
      </div>
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8c8c9d] text-[16px] whitespace-nowrap z-[1]">
        <p className="leading-[26px]">2-3 hour average visit</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[12px] isolate items-center py-[15px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e3d7] border-b border-solid inset-0 pointer-events-none" />
      <div className="relative shrink-0 size-[18.05px] z-[2]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.05 18.05">
          <path d={svgPaths.p11f8ef00} fill="var(--fill-0, #00ADBB)" id="Vector" />
        </svg>
      </div>
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8c8c9d] text-[16px] whitespace-nowrap z-[1]">
        <p className="leading-[26px]">Self-guided exploration</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[12px] isolate items-center py-[15px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e3d7] border-b border-solid inset-0 pointer-events-none" />
      <div className="relative shrink-0 size-[18.05px] z-[2]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.05 18.05">
          <path d={svgPaths.p11f8ef00} fill="var(--fill-0, #00ADBB)" id="Vector" />
        </svg>
      </div>
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8c8c9d] text-[16px] whitespace-nowrap z-[1]">
        <p className="leading-[26px]">Self-guided exploration</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="list">
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start justify-center py-[24px] relative shrink-0 w-full">
      <div className="flex flex-col font-['Nunito:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#474763] text-[20px] text-ellipsis tracking-[-0.8px] w-full">
        <p className="leading-[24px]">What to Expect:</p>
      </div>
      <List />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[26px]" data-name="card">
      <div className="content-stretch flex flex-col items-start pb-[20px] px-[20px] relative size-full">
        <Background />
        <Background1 />
        <Frame />
        <div className="relative rounded-[1000px] shrink-0 w-full" data-name="CTA">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center px-[34px] py-[22px] relative w-full">
              <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[1.13] relative shrink-0 text-[#00adbb] text-[24px] whitespace-nowrap">Plan Your Visit</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-2 border-[#00adbb] border-solid inset-0 pointer-events-none rounded-[1000px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:SemiBold',sans-serif] font-semibold justify-center leading-[0] max-h-[24.040000915527344px] overflow-hidden relative shrink-0 text-[#474763] text-[24px] text-ellipsis tracking-[-0.96px] w-full">
        <p className="leading-[24px]">{`Tickets & Pricing`}</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[30px] relative shrink-0 w-full" data-name="Background">
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1b3d6d] text-[15px] text-center w-full">
        <p className="leading-[28px]">Members: FREE admission</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4a5565] text-[14px] text-center w-full">
        <p className="leading-[20px]">+early access +special events</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[rgba(247,148,30,0.2)] relative rounded-[10px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[8px] py-[10px] relative w-full">
          <Container7 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex isolate items-center justify-between py-[15px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e3d7] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Nunito:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#364153] text-[16px] whitespace-nowrap z-[2]">
        <p className="leading-[26px]">Adults:</p>
      </div>
      <div className="flex flex-col font-['Nunito:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f7941e] text-[16px] whitespace-nowrap z-[1]">
        <p className="leading-[26px]">$18.95</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex isolate items-center justify-between py-[15px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e3d7] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Nunito:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#364153] text-[16px] whitespace-nowrap z-[2]">
        <p className="leading-[26px]">Children (1-8):</p>
      </div>
      <div className="flex flex-col font-['Nunito:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f7941e] text-[16px] whitespace-nowrap z-[1]">
        <p className="leading-[26px]">$18.95</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex isolate items-center justify-between py-[15px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e3d7] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Nunito:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#364153] text-[16px] whitespace-nowrap z-[2]">
        <p className="leading-[26px]">Under 1:</p>
      </div>
      <div className="flex flex-col font-['Nunito:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1d3e6b] text-[16px] whitespace-nowrap z-[1]">
        <p className="leading-[26px]">FREE</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="list">
      <Container9 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[18px] items-start justify-center py-[24px] relative size-full">
          <div className="flex flex-col font-['Nunito:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#474763] text-[20px] text-ellipsis tracking-[-0.8px] w-full">
            <p className="leading-[24px]">General Admission:</p>
          </div>
          <List1 />
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[26px]" data-name="card">
      <div className="content-stretch flex flex-col items-start pb-[20px] px-[20px] relative size-full">
        <Background2 />
        <Background3 />
        <Frame1 />
        <div className="relative rounded-[1000px] shrink-0 w-full" data-name="CTA">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center px-[34px] py-[22px] relative w-full">
              <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[1.13] relative shrink-0 text-[#f7941e] text-[24px] whitespace-nowrap">Buy Tickets</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-2 border-[#f7941e] border-solid inset-0 pointer-events-none rounded-[1000px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:SemiBold',sans-serif] font-semibold justify-center leading-[0] max-h-[24.040000915527344px] overflow-hidden relative shrink-0 text-[#474763] text-[24px] text-ellipsis tracking-[-0.96px] w-full">
        <p className="leading-[24px]">{`Parking & Directions`}</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[30px] relative shrink-0 w-full" data-name="Background">
      <Container12 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1b3d6d] text-[16px] text-center w-full">
        <p className="leading-[26px]">Parking:</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4a5565] text-[14px] text-center w-full">
        <p className="leading-[20px]">Pre-purchase $8</p>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[rgba(29,62,107,0.2)] h-[51px] relative rounded-[10px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[8px] py-[10px] relative size-full">
          <Container13 />
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[12px] isolate items-center py-[15px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e3d7] border-b border-solid inset-0 pointer-events-none" />
      <div className="relative shrink-0 size-[18.05px] z-[2]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.05 18.05">
          <path d={svgPaths.p11f8ef00} fill="var(--fill-0, #346094)" id="Vector" />
        </svg>
      </div>
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8c8c9d] text-[16px] whitespace-nowrap z-[1]">
        <p className="leading-[26px]">MARTA: Civic Center Station</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[12px] isolate items-center py-[15px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e3d7] border-b border-solid inset-0 pointer-events-none" />
      <div className="relative shrink-0 size-[18.05px] z-[2]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.05 18.05">
          <path d={svgPaths.p11f8ef00} fill="var(--fill-0, #346094)" id="Vector" />
        </svg>
      </div>
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8c8c9d] text-[16px] whitespace-nowrap z-[1]">
        <p className="leading-[26px]">Street parking available</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[12px] isolate items-center py-[15px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e3d7] border-b border-solid inset-0 pointer-events-none" />
      <div className="relative shrink-0 size-[18.05px] z-[2]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.05 18.05">
          <path d={svgPaths.p11f8ef00} fill="var(--fill-0, #346094)" id="Vector" />
        </svg>
      </div>
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8c8c9d] text-[16px] whitespace-nowrap z-[1]">
        <p className="leading-[26px]">Rideshare drop-off zone</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="list">
      <Container15 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start justify-center py-[24px] relative shrink-0 w-full">
      <div className="flex flex-col font-['Nunito:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#474763] text-[20px] text-ellipsis tracking-[-0.8px] w-full">
        <p className="leading-[24px]">Getting Here:</p>
      </div>
      <List2 />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[26px]" data-name="card">
      <div className="content-stretch flex flex-col items-start pb-[20px] px-[20px] relative w-full">
        <Background4 />
        <Background5 />
        <Frame2 />
        <div className="relative rounded-[1000px] shrink-0 w-full" data-name="CTA">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center px-[34px] py-[22px] relative w-full">
              <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[1.13] relative shrink-0 text-[#346094] text-[24px] whitespace-nowrap">Get Directions</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-2 border-[#346094] border-solid inset-0 pointer-events-none rounded-[1000px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:SemiBold',sans-serif] font-semibold justify-center leading-[0] max-h-[24.040000915527344px] overflow-hidden relative shrink-0 text-[#474763] text-[24px] text-ellipsis tracking-[-0.96px] w-full">
        <p className="leading-[24px]">{`Food & Amenities`}</p>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[30px] relative shrink-0 w-full" data-name="Background">
      <Container18 />
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[rgba(0,173,187,0)] content-stretch flex flex-col h-[41px] items-center justify-center py-[10px] relative rounded-[10px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-col font-['Nunito:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#474763] text-[20px] text-ellipsis tracking-[-0.8px] w-full">
        <p className="leading-[24px]">Facilities:</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[12px] isolate items-center py-[15px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e3d7] border-b border-solid inset-0 pointer-events-none" />
      <div className="relative shrink-0 size-[18.05px] z-[2]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.05 18.05">
          <path d={svgPaths.p11f8ef00} fill="var(--fill-0, #00ADBB)" id="Vector" />
        </svg>
      </div>
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8c8c9d] text-[16px] whitespace-nowrap z-[1]">
        <p className="leading-[26px]">Free lockers</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[12px] isolate items-center py-[15px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e3d7] border-b border-solid inset-0 pointer-events-none" />
      <div className="relative shrink-0 size-[18.05px] z-[2]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.05 18.05">
          <path d={svgPaths.p11f8ef00} fill="var(--fill-0, #00ADBB)" id="Vector" />
        </svg>
      </div>
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8c8c9d] text-[16px] whitespace-nowrap z-[1]">
        <p className="leading-[26px]">Diaper stations</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[12px] isolate items-center py-[15px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e3d7] border-b border-solid inset-0 pointer-events-none" />
      <div className="relative shrink-0 size-[18.05px] z-[2]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.05 18.05">
          <path d={svgPaths.p11f8ef00} fill="var(--fill-0, #00ADBB)" id="Vector" />
        </svg>
      </div>
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8c8c9d] text-[16px] whitespace-nowrap z-[1]">
        <p className="leading-[26px]">Family restrooms</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[12px] isolate items-center py-[15px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e3d7] border-b border-solid inset-0 pointer-events-none" />
      <div className="relative shrink-0 size-[18.05px] z-[2]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.05 18.05">
          <path d={svgPaths.p11f8ef00} fill="var(--fill-0, #00ADBB)" id="Vector" />
        </svg>
      </div>
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8c8c9d] text-[16px] whitespace-nowrap z-[1]">
        <p className="leading-[26px]">{`On-site café (snacks & lunch)`}</p>
      </div>
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="list">
      <Container19 />
      <Container20 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start justify-center pb-[24px] relative shrink-0 w-full">
      <Background7 />
      <List3 />
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[26px]" data-name="card">
      <div className="content-stretch flex flex-col items-start pb-[20px] px-[20px] relative w-full">
        <Background6 />
        <Frame3 />
        <div className="relative rounded-[1000px] shrink-0 w-full" data-name="CTA">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center px-[34px] py-[22px] relative w-full">
              <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[1.13] relative shrink-0 text-[#00adbb] text-[24px] whitespace-nowrap">See Amenities</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-2 border-[#00adbb] border-solid inset-0 pointer-events-none rounded-[1000px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
        </div>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="cards">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Card />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Card1 />
      </div>
      <Card2 />
      <Card3 />
    </div>
  );
}

function BridgeText() {
  return (
    <div className="bg-[rgba(0,173,187,0.2)] content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[6px] relative rounded-[20px] shrink-0" data-name="BridgeText">
      <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[#346094] text-[14px] tracking-[3.5px] uppercase whitespace-nowrap">keep scrolling to EXPLORE Our Exhibits</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="relative size-[20px]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.pa843760} fill="var(--fill-0, #346094)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center max-w-[1280px] pb-[160px] pt-[140px] relative shrink-0 w-[1280px]" data-name="Section">
      <Heading />
      <Cards />
      <BridgeText />
    </div>
  );
}

export default function PlanYourVisit() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative size-full" data-name="Plan Your Visit">
      <div className="-translate-x-1/2 absolute bottom-[-343.81px] flex items-center justify-center left-1/2 size-[2499.057px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[32.22deg]">
          <div className="relative size-[1812px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1811.36 1810.72">
              <path d={svgPaths.p394a1000} fill="var(--fill-0, #FFF6E9)" id="Star 1" />
            </svg>
          </div>
        </div>
      </div>
      <Section />
    </div>
  );
}