  import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoSvgPaths from "../../imports/svg-jpmbtvi5vn";
import textSvgPaths from "../../imports/svg-1ph89gknrj";

function AnimatedLogoIcon() {
  return (
    <div className="relative h-[28px] xs:h-[32px] sm:h-[38px] md:h-[44px] lg:h-[36px] xl:h-[50px] 2xl:h-[52px] w-auto aspect-[108.026/52.5232] shrink-0">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108.026 52.5232">
        <g clipPath="url(#clip0_2002_59)" id="Group 3">
          <path d={logoSvgPaths.pca0c100} fill="#F7941E" id="Vector" />
          <path d={logoSvgPaths.p1bf7e640} fill="#F7941E" id="Vector_2" />
          <path d={logoSvgPaths.p2499760} fill="#FBB040" id="Vector_3" />
          <path d={logoSvgPaths.pbd95800} fill="#FBB040" id="Vector_4" />
          <path d={logoSvgPaths.p3cdb3200} fill="#FAA735" id="Star" />
          {/* Animated blue vector */}
          <g id="Vector_5" className="origin-center animate-[cmaLogoGrow_2s_ease-in-out_infinite]" style={{ transformOrigin: '57.74px 6px' }}>
            <mask fill="white" id="path-6-inside-1_2002_59">
              <path d={logoSvgPaths.p31e42c40} />
            </mask>
            <path d={logoSvgPaths.p31e42c40} fill="white" />
            <path d={logoSvgPaths.p206e380} fill="white" mask="url(#path-6-inside-1_2002_59)" />
          </g>
          {/* Animated arrow */}
          <g id="Arrow" className="origin-center animate-[cmaLogoGrow_2s_ease-in-out_infinite_0.3s]" style={{ transformOrigin: '7.75px 40.5px' }}>
            <mask fill="white" id="path-8-inside-2_2002_59">
              <path d={logoSvgPaths.p2a7c1880} />
            </mask>
            <path d={logoSvgPaths.p2a7c1880} fill="white" />
            <path d={logoSvgPaths.p11b41340} fill="white" mask="url(#path-8-inside-2_2002_59)" />
          </g>
          <path d={logoSvgPaths.p16dbcf00} fill="#FBB040" id="Circle" />
          {/* Animated squiggle */}
          <g id="Squiggle" className="origin-center animate-[cmaLogoGrow_2s_ease-in-out_infinite_0.6s]" style={{ transformOrigin: '102px 42px' }}>
            <path d={logoSvgPaths.p137bbe00} fill="white" />
            <path d={logoSvgPaths.p137bbe00} stroke="white" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2002_59">
            <rect fill="white" height="52.5232" width="108.026" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogoText() {
  return (
    <div className="relative h-[20px] xs:h-[24px] sm:h-[28px] md:h-[33px] lg:h-[26px] xl:h-[37px] 2xl:h-[40px] w-auto aspect-[185.296/39.444] shrink-0">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 185.296 39.444">
        <g id="Group 1">
          <path d={textSvgPaths.p20369400} fill="white" id="Vector" />
          <path d={textSvgPaths.p2793e780} fill="white" id="Vector_2" />
          <path d={textSvgPaths.p2fb33f80} fill="white" id="Vector_3" />
          <path d={textSvgPaths.p2e55800} fill="white" id="Vector_4" />
          <path d={textSvgPaths.p21b67300} fill="white" id="Vector_5" />
          <path d={textSvgPaths.p3a500640} fill="white" id="Vector_6" />
          <path d={textSvgPaths.pbe3c00} fill="white" id="Vector_7" />
          <path d={textSvgPaths.p3f3d7a80} fill="white" id="Vector_8" />
          <path d={textSvgPaths.p2965000} fill="white" id="Vector_9" />
          <path d={textSvgPaths.p294e580} fill="white" id="Vector_10" />
          <path d={textSvgPaths.p2bcb1700} fill="white" id="Vector_11" />
          <path d={textSvgPaths.p26ba8c80} fill="white" id="Vector_12" />
          <path d={textSvgPaths.p120a8770} fill="white" id="Vector_13" />
          <path d={textSvgPaths.p1de25500} fill="white" id="Vector_14" />
          <path d={textSvgPaths.p12982000} fill="white" id="Vector_15" />
          <path d={textSvgPaths.p37085ca0} fill="white" id="Vector_16" />
        </g>
        <g id="Group 2" transform="translate(0, 22.267)">
          <path d={textSvgPaths.p1a112080} fill="white" id="Vector_17" />
          <path d={textSvgPaths.p39ca3d00} fill="white" id="Vector_18" />
          <path d={textSvgPaths.p208d1800} fill="white" id="Vector_19" />
          <path d={textSvgPaths.p12f35b2a} fill="white" id="Vector_20" />
          <path d={textSvgPaths.p99d5f00} fill="white" id="Vector_21" />
          <path d={textSvgPaths.p67973f0} fill="white" id="Vector_22" />
          <path d={textSvgPaths.p2bacee70} fill="white" id="Vector_23" />
          <path d={textSvgPaths.p1a0e7600} fill="white" id="Vector_24" />
          <path d={textSvgPaths.p34eadb80} fill="white" id="Vector_25" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <a href="/#/" className="flex items-center gap-[8px] hover:opacity-80 transition-opacity">
      <AnimatedLogoIcon />
      <LogoText />
    </a>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Plan Your Visit", href: "/#/plan-your-visit" },
    { label: "Exhibits", href: "#" },
    { label: "Calendar & Events", href: "#" },
    { label: "For Educators", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Resources", href: "#" },
  ];

  return (
    <header className="fixed top-[34px] xs:top-[36px] sm:top-[40px] md:top-[44px] left-0 right-0 z-40 w-full bg-cma-header-gradient">
      <div className="flex items-center justify-between px-[16px] sm:px-[20px] md:px-[24px] lg:px-[32px] py-[14px] sm:py-[15px] md:py-[16px] relative w-full" data-name="header">
        {/* Logo */}
        <Logo />

        {/* Desktop (xl+): nav + buttons right-aligned together */}
        <div className="hidden xl:flex items-center gap-6">
          <div className="flex items-center">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center justify-center px-[12px] py-[8px] shrink-0 hover:bg-white/10 rounded-lg transition-colors"
              >
                <p className="font-black leading-[1.5] shrink-0 text-white text-[13px] tracking-[0.5px] whitespace-nowrap">
                  {label}
                </p>
              </a>
            ))}
          </div>
          <div className="flex gap-[5.699px] items-center">
            <button className="bg-cma-orange flex items-center justify-center px-[16px] py-[12px] rounded-full shadow-cma-btn shrink-0 hover:bg-cma-orange-dark transition-colors">
              <p className="font-black leading-[1.5] shrink-0 text-[12px] text-cma-navy whitespace-nowrap">Donate</p>
            </button>
            <button className="bg-white flex items-center justify-center px-[16px] py-[12px] rounded-full shadow-cma-btn shrink-0 hover:bg-white/90 transition-colors">
              <p className="font-black leading-[1.5] shrink-0 text-[12px] text-cma-teal-dark whitespace-nowrap">Memberships</p>
            </button>
            <button className="bg-cma-navy flex items-center justify-center px-[16px] py-[12px] rounded-full shadow-cma-btn shrink-0 hover:bg-cma-navy-dark transition-colors">
              <p className="font-black leading-[1.5] shrink-0 text-[12px] text-white whitespace-nowrap">Buy Tickets</p>
            </button>
          </div>
        </div>

        {/* Compact Desktop (lg–xl): nav + buttons right-aligned together */}
        <div className="hidden lg:flex xl:hidden items-center gap-4">
          <div className="flex items-center">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center justify-center px-[8px] py-[6px] shrink-0 hover:bg-white/10 rounded-lg transition-colors"
              >
                <p className="font-black leading-[1.5] shrink-0 text-white text-[11px] tracking-[0.5px] whitespace-nowrap">
                  {label}
                </p>
              </a>
            ))}
          </div>
          <div className="flex gap-[4px] items-center">
            <button className="bg-cma-orange flex items-center justify-center px-[12px] py-[8px] rounded-full shadow-cma-btn shrink-0 hover:bg-cma-orange-dark transition-colors">
              <p className="font-black leading-[1.5] shrink-0 text-[10px] text-cma-navy whitespace-nowrap">Donate</p>
            </button>
            <button className="bg-white flex items-center justify-center px-[12px] py-[8px] rounded-full shadow-cma-btn shrink-0 hover:bg-white/90 transition-colors">
              <p className="font-black leading-[1.5] shrink-0 text-[10px] text-cma-teal-dark whitespace-nowrap">Memberships</p>
            </button>
            <button className="bg-cma-navy flex items-center justify-center px-[12px] py-[8px] rounded-full shadow-cma-btn shrink-0 hover:bg-cma-navy-dark transition-colors">
              <p className="font-black leading-[1.5] shrink-0 text-[10px] text-white whitespace-nowrap">Buy Tickets</p>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden lg:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="size-6 text-white" />
          ) : (
            <Menu className="size-6 text-white" />
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
            {/* Mobile Nav Links */}
            <div className="flex flex-col py-2">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="px-5 py-3 hover:bg-gray-50 transition-colors"
                >
                  <p className="font-medium leading-[20px] text-cma-navy text-[14px]">
                    {label}
                  </p>
                </a>
              ))}
            </div>

            {/* Mobile Action Buttons */}
            <div className="flex flex-col gap-3 px-5 py-4 border-t border-gray-200">
              <button className="bg-cma-orange px-4 py-3 rounded-full w-full hover:bg-cma-orange-dark transition-colors">
                <p className="font-black text-[14px] text-white">
                  Donate
                </p>
              </button>
              <button className="bg-cma-teal px-4 py-3 rounded-full w-full hover:bg-cma-teal-dark transition-colors">
                <p className="font-black text-[14px] text-white">
                  Memberships
                </p>
              </button>
              <button className="bg-cma-blue-mid px-4 py-3 rounded-full w-full hover:bg-[#2a4d76] transition-colors">
                <p className="font-black text-[14px] text-white">
                  Buy Tickets
                </p>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}