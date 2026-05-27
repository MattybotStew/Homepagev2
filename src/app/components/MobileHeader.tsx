import { useState } from "react";
import { X, Facebook, Instagram, ChevronDown } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import logoSvgPaths from "../../imports/svg-jpmbtvi5vn";
import textSvgPaths from "../../imports/svg-1ph89gknrj";

function MobileLogo() {
  return (
    <a href="/#/" className="flex items-center gap-[8px] hover:opacity-90 transition-opacity" aria-label="Children's Museum of Atlanta">
      <div className="relative shrink-0 h-[30px] w-auto aspect-[108.026/52.5232]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108.026 52.5232">
          <g clipPath="url(#clip0_mob_logo)">
            <path d={logoSvgPaths.pca0c100} fill="#F7941E" />
            <path d={logoSvgPaths.p1bf7e640} fill="#F7941E" />
            <path d={logoSvgPaths.p2499760} fill="#FBB040" />
            <path d={logoSvgPaths.pbd95800} fill="#FBB040" />
            <path d={logoSvgPaths.p3cdb3200} fill="#FAA735" />
            <g className="origin-center animate-[cmaLogoGrow_2s_ease-in-out_infinite]" style={{ transformOrigin: '57.74px 6px' }}>
              <mask fill="white" id="mob-mask-1">
                <path d={logoSvgPaths.p31e42c40} />
              </mask>
              <path d={logoSvgPaths.p31e42c40} fill="white" />
              <path d={logoSvgPaths.p206e380} fill="white" mask="url(#mob-mask-1)" />
            </g>
            <g className="origin-center animate-[cmaLogoGrow_2s_ease-in-out_infinite_0.3s]" style={{ transformOrigin: '7.75px 40.5px' }}>
              <mask fill="white" id="mob-mask-2">
                <path d={logoSvgPaths.p2a7c1880} />
              </mask>
              <path d={logoSvgPaths.p2a7c1880} fill="white" />
              <path d={logoSvgPaths.p11b41340} fill="white" mask="url(#mob-mask-2)" />
            </g>
            <path d={logoSvgPaths.p16dbcf00} fill="#FBB040" />
            <g className="origin-center animate-[cmaLogoGrow_2s_ease-in-out_infinite_0.6s]" style={{ transformOrigin: '102px 42px' }}>
              <path d={logoSvgPaths.p137bbe00} fill="white" />
              <path d={logoSvgPaths.p137bbe00} stroke="white" strokeLinejoin="round" strokeWidth="1.5" />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_mob_logo">
              <rect fill="white" height="52.5232" width="108.026" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="relative shrink-0 h-[22px] w-auto aspect-[185.296/39.444]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 185.296 39.444">
          <g>
            <path d={textSvgPaths.p20369400} fill="white" />
            <path d={textSvgPaths.p2793e780} fill="white" />
            <path d={textSvgPaths.p2fb33f80} fill="white" />
            <path d={textSvgPaths.p2e55800} fill="white" />
            <path d={textSvgPaths.p21b67300} fill="white" />
            <path d={textSvgPaths.p3a500640} fill="white" />
            <path d={textSvgPaths.pbe3c00} fill="white" />
            <path d={textSvgPaths.p3f3d7a80} fill="white" />
            <path d={textSvgPaths.p2965000} fill="white" />
            <path d={textSvgPaths.p294e580} fill="white" />
            <path d={textSvgPaths.p2bcb1700} fill="white" />
            <path d={textSvgPaths.p26ba8c80} fill="white" />
            <path d={textSvgPaths.p120a8770} fill="white" />
            <path d={textSvgPaths.p1de25500} fill="white" />
            <path d={textSvgPaths.p12982000} fill="white" />
            <path d={textSvgPaths.p37085ca0} fill="white" />
          </g>
          <g transform="translate(0, 22.267)">
            <path d={textSvgPaths.p1a112080} fill="white" />
            <path d={textSvgPaths.p39ca3d00} fill="white" />
            <path d={textSvgPaths.p208d1800} fill="white" />
            <path d={textSvgPaths.p12f35b2a} fill="white" />
            <path d={textSvgPaths.p99d5f00} fill="white" />
            <path d={textSvgPaths.p67973f0} fill="white" />
            <path d={textSvgPaths.p2bacee70} fill="white" />
            <path d={textSvgPaths.p1a0e7600} fill="white" />
            <path d={textSvgPaths.p34eadb80} fill="white" />
          </g>
        </svg>
      </div>
    </a>
  );
}

type SubPage = { label: string; href: string };
type MenuItem = { label: string; href: string; subPages?: SubPage[] };

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    {
      label: "Plan Your Visit",
      href: "/#/plan-your-visit",
      subPages: [
        { label: "Museum Store", href: "/#/museum-store" },
      ],
    },
    { label: "Exhibits", href: "/#/exhibits" },
    { label: "Calendar & Events", href: "#" },
    { label: "For Educators", href: "/#/educators" },
    { label: "About Us", href: "#" },
    { label: "Education Hub/Blog", href: "#" },
  ];

  return (
    <>
      {/* Header bar */}
      <header className="fixed top-[36px] sm:top-[44px] left-0 right-0 z-40 bg-cma-teal drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between pl-[10px] pr-0 py-[10px]">
          <MobileLogo />

          <div className="flex items-center">
            {/* Buy Tickets */}
            <a
              href="#tickets"
              className="bg-cma-navy text-white font-black text-[12px] leading-[1.5] rounded-[1000px] px-[17px] py-[12px] shadow-cma-btn hover:bg-cma-navy-dark transition-colors whitespace-nowrap"
            >
              Buy Tickets
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center justify-center w-[44px] h-[44px] shrink-0"
              aria-label="Open menu"
            >
              <div className="w-[22px] flex flex-col gap-[5px]">
                <div className="w-full h-[2.5px] bg-white rounded-full" />
                <div className="w-full h-[2.5px] bg-white rounded-full" />
                <div className="w-full h-[2.5px] bg-white rounded-full" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Spacer — AlertBanner (36px mobile / 44px sm) + MobileHeader (64px) */}
      <div className="h-[100px] sm:h-[108px]" />

      {/* Full-screen overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 animate-in slide-in-from-left duration-300">
          <div className="absolute inset-0 bg-white">
            {/* Close */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-2 left-2 pl-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close menu"
            >
              <X className="size-8 text-cma-teal" strokeWidth={2.5} />
            </button>

            <nav className="h-full flex flex-col pt-20 pb-8 overflow-y-auto">
              {/* Search */}
              <div className="px-5 mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-[#f9f9fb] border border-gray-200 rounded-lg px-4 py-3 pr-12 text-[16px] text-cma-gray focus:outline-none focus:border-cma-teal transition-colors"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1" aria-label="Search">
                    <svg className="size-6" fill="none" viewBox="0 0 24 24">
                      <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#616161" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Nav links */}
              <div className="mb-6">
                {menuItems.map((item, index) => (
                  <div key={item.label}>
                    {item.subPages?.length ? (
                      <>
                        <button
                          className="w-full flex items-center justify-between px-5 py-0 min-h-[64px] hover:bg-gray-50 transition-colors"
                          onClick={() => setExpandedItem(expandedItem === item.label ? null : item.label)}
                        >
                          <p className="text-[18px] text-cma-gray font-normal">{item.label}</p>
                          <ChevronDown className={`size-5 text-cma-gray transition-transform duration-200 ${expandedItem === item.label ? "rotate-180" : ""}`} />
                        </button>
                        {expandedItem === item.label && (
                          <div className="bg-gray-50 border-t border-gray-100">
                            {item.subPages.map((sub) => (
                              <a
                                key={sub.label}
                                href={sub.href}
                                className="flex items-center pl-9 pr-5 min-h-[52px] hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0"
                                onClick={() => setMenuOpen(false)}
                              >
                                <p className="text-[16px] text-cma-gray font-normal">{sub.label}</p>
                              </a>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <a
                        href={item.href}
                        className="flex items-center px-5 py-0 min-h-[64px] hover:bg-gray-50 transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        <p className="text-[18px] text-cma-gray font-normal">{item.label}</p>
                      </a>
                    )}
                    {index < menuItems.length - 1 && (
                      <div className="h-[1px] bg-gray-200 mx-5" />
                    )}
                  </div>
                ))}
              </div>

              <div className="h-[1px] bg-gray-200 mx-5 mb-6" />

              {/* CTA buttons */}
              <div className="px-5 mb-6 flex flex-col gap-3">
                <button className="bg-cma-orange text-white font-black text-[16px] rounded-lg px-6 py-3 min-h-[52px] hover:bg-cma-orange-dark transition-colors">
                  Donate
                </button>
                <button className="bg-cma-teal text-white font-black text-[16px] rounded-lg px-6 py-3 min-h-[52px] hover:bg-cma-teal-dark transition-colors">
                  Membership
                </button>
                <button className="bg-cma-navy text-white font-black text-[16px] rounded-lg px-6 py-3 min-h-[52px] hover:bg-cma-navy-dark transition-colors">
                  Buy Tickets
                </button>
              </div>

              {/* Contact & social */}
              <div className="mt-8 px-5 border-t border-gray-200 pt-6">
                <div className="mb-6">
                  <p className="font-bold text-cma-teal text-[16px] mb-3">Contact Us</p>
                  <p className="text-cma-gray text-[14px] mb-1">275 Centennial Olympic Park Dr NW</p>
                  <p className="text-cma-gray text-[14px] mb-1">Atlanta, GA 30313</p>
                  <p className="text-cma-gray text-[14px] mb-1">Phone: (404) 659-5437</p>
                  <p className="text-cma-gray text-[14px]">info@childrensmuseumatlanta.org</p>
                </div>
                <div className="mb-4">
                  <p className="font-bold text-cma-teal text-[16px] mb-3">Follow Us</p>
                  <div className="flex gap-4">
                    <a href="https://www.facebook.com/childrensmuseumofatlanta" target="_blank" rel="noopener noreferrer" className="w-[44px] h-[44px] rounded-full bg-cma-teal flex items-center justify-center hover:bg-cma-teal-dark transition-colors" aria-label="Facebook">
                      <Facebook className="size-5 text-white" />
                    </a>
                    <a href="https://www.instagram.com/childrensmuseumofatlanta/" target="_blank" rel="noopener noreferrer" className="w-[44px] h-[44px] rounded-full bg-cma-teal flex items-center justify-center hover:bg-cma-teal-dark transition-colors" aria-label="Instagram">
                      <Instagram className="size-5 text-white" />
                    </a>
                    <a href="https://www.tiktok.com/@childrensmuseumatlanta" target="_blank" rel="noopener noreferrer" className="w-[44px] h-[44px] rounded-full bg-cma-teal flex items-center justify-center hover:bg-cma-teal-dark transition-colors" aria-label="TikTok">
                      <FontAwesomeIcon icon={faTiktok} className="size-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
