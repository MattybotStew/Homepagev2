import svgPaths from "./svg-9k39sqzzx8";
import imgBottomCallToAction from "figma:asset/e8d56ebc415002dbd15dc991825ef1684a7a8be2.webp";

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <div className="bg-[#f7941e] content-stretch flex items-center justify-center overflow-clip px-[34px] py-[22px] relative rounded-[1000px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0" data-name="CTA">
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[1.13] relative shrink-0 text-[24px] text-white whitespace-nowrap">Buy Tickets</p>
      </div>
      <div className="bg-[#00adbb] content-stretch flex items-center justify-center overflow-clip px-[34px] py-[22px] relative rounded-[1000px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0" data-name="CTA">
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[1.13] relative shrink-0 text-[24px] text-white whitespace-nowrap">Memberships</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start justify-center relative shrink-0 w-[768px]">
      <p className="font-['Nunito:Bold',sans-serif] font-bold leading-none opacity-90 relative shrink-0 text-[86px] text-white tracking-[-3.44px] w-[581px]">Make Play Possible for All</p>
      <div className="flex flex-col font-['Nunito:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]">
        <p className="leading-[1.6]">As a nonprofit, we make joy accessible to every child. Your support helps us serve 100,000+ families and keep admission affordable.</p>
      </div>
      <div className="flex flex-col font-['Nunito:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[#ffd69a] text-[15px] w-[min-content]">
        <p className="leading-[24px]">2024 Impact: 1,200 free passes | 15,000 field trips</p>
      </div>
      <Frame1 />
      <div className="absolute flex h-[64px] items-center justify-center left-0 top-[522px] w-[48px]">
        <div className="flex-none rotate-180">
          <div className="h-[64px] relative w-[48px]" data-name="Vector">
            <div className="absolute inset-[-1.17%_-1.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.5 65.5">
                <path d={svgPaths.p39a6b100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BottomCallToAction() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[60px] py-[100px] relative size-full" data-name="bottom Call to action">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgBottomCallToAction} />
        <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
      </div>
      <Frame />
      <div className="absolute left-[75px] size-[18px] top-[743.48px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <circle cx="9" cy="9" fill="var(--fill-0, #FBB040)" fillOpacity="0.7" id="Ellipse 33" r="9" />
        </svg>
      </div>
    </div>
  );
}