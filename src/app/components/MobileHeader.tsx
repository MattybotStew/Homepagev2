import { useState } from "react";
import { X, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import svgPaths from "../../imports/svg-r56wunljsh";
import logoImg from "figma:asset/8e645b3ddbfe23ad58c5f50d546a674c0731f054.png";

function IconamoonClockBold() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="iconamoon:clock-bold">
      <div className="absolute inset-[12.5%]">
        <div className="absolute inset-[-6.94%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.5 20.5">
            <g>
              <path d={svgPaths.p3d3f3000} stroke="var(--stroke-0, #FCFCFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              <path d="M9.25 6.25V11.25H14.25" stroke="var(--stroke-0, #FCFCFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function CommunicationPhone() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.p39c8bd00} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LocalFireDepartment() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.p3f199980} fill="var(--fill-0, #0D0D0D)" stroke="var(--stroke-0, white)" />
        </g>
      </svg>
    </div>
  );
}

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: "Plan Your Visit" },
    { label: "Exhibits" },
    { label: "Calendar & Events" },
    { label: "Education Programs" },
    { label: "About Us" },
    { label: "Education Hub/Blog" },
  ];

  return (
    <>
      {/* Top Blue Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#00adbb] px-2.5 py-2 max-w-[768px] mx-auto">
        <div className="flex items-center justify-between gap-2 text-white">
          {/* Hours */}
          <div className="flex gap-1.5 items-center">
            <IconamoonClockBold />
            <p className="font-['Nunito',sans-serif] font-medium text-[11px] sm:text-[12px]">
              Today: 9am-3:30pm
            </p>
          </div>
          {/* Phone */}
          <div className="flex gap-1.5 items-center">
            <CommunicationPhone />
            <p className="font-['Nunito',sans-serif] font-medium text-[11px] sm:text-[12px]">
              404.659.5437
            </p>
          </div>
        </div>
      </div>

      {/* Spacer for blue banner */}
      <div className="h-[40px]"></div>

      {/* Sticky Header Bar */}
      <header className="fixed top-[40px] left-0 right-0 z-40 bg-white shadow-md h-[60px] max-w-[768px] mx-auto">
        <div className="h-full flex items-center justify-between px-2.5 gap-2">
          {/* Hamburger Menu Icon - LEFT */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex-shrink-0 pl-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Open menu"
          >
            <div className="w-[24px] h-[24px] flex flex-col justify-center gap-[5px]">
              <div className="w-full h-[3px] bg-[#00adbb] rounded-full"></div>
              <div className="w-full h-[3px] bg-[#00adbb] rounded-full"></div>
              <div className="w-full h-[3px] bg-[#00adbb] rounded-full"></div>
            </div>
          </button>

          {/* Logo - CENTER */}
          <a
            href="/"
            className="flex-1 flex justify-center items-center min-h-[44px]"
            aria-label="Children's Museum of Atlanta Home"
          >
            <img 
              src={logoImg} 
              alt="Children's Museum of Atlanta" 
              className="h-[28px] xs:h-[30px] sm:h-[32px] w-auto max-w-[160px] sm:max-w-[200px]" 
            />
          </a>

          {/* Buy Tickets Button - RIGHT */}
          <button className="bg-[#f7941e] text-white font-['Nunito',sans-serif] font-bold text-[14px] rounded-[20px] px-5 py-2.5 flex-shrink-0 min-h-[44px] hover:bg-[#e8851a] transition-colors">
            Tickets
          </button>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-[60px]"></div>

      {/* Full Screen Overlay Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 animate-in slide-in-from-left duration-300 max-w-[768px] mx-auto"
        >
          {/* Menu Background */}
          <div className="absolute inset-0 bg-white">
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-2 left-2 pl-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close menu"
            >
              <X className="size-8 text-[#00adbb]" strokeWidth={2.5} />
            </button>

            {/* Menu Content */}
            <nav className="h-full flex flex-col pt-20 pb-8 overflow-y-auto">
              {/* Search Input */}
              <div className="px-5 mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-[#f9f9fb] border border-gray-200 rounded-lg px-4 py-3 pr-12 font-['Nunito',sans-serif] text-[16px] text-[#78787a] focus:outline-none focus:border-[#00adbb] transition-colors"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1">
                    <svg className="size-6" fill="none" viewBox="0 0 24 24">
                      <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#616161" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Menu Items */}
              <div className="mb-6">
                {menuItems.map((item, index) => (
                  <div key={item.label}>
                    <a
                      href="#"
                      className="flex items-center px-5 py-0 min-h-[64px] hover:bg-gray-50 transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      <p className="font-['Nunito',sans-serif] text-[18px] text-[#78787a] font-normal">
                        {item.label}
                      </p>
                    </a>
                    {index < menuItems.length - 1 && (
                      <div className="h-[1px] bg-gray-200 mx-5"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-gray-200 mx-5 mb-6"></div>

              {/* CTA Buttons */}
              <div className="px-5 mb-6 flex flex-col gap-3">
                <button className="bg-[#f7941e] text-white font-['Nunito',sans-serif] font-bold text-[16px] rounded-lg px-6 py-3 min-h-[52px] hover:bg-[#e8851a] transition-colors">
                  Donate
                </button>
                <button className="bg-[#00adbb] text-white font-['Nunito',sans-serif] font-bold text-[16px] rounded-lg px-6 py-3 min-h-[52px] hover:bg-[#008c99] transition-colors">
                  Membership
                </button>
                <button className="bg-[#f7941e] text-white font-['Nunito',sans-serif] font-bold text-[16px] rounded-lg px-6 py-3 min-h-[52px] hover:bg-[#e8851a] transition-colors">
                  Buy Tickets
                </button>
              </div>

              {/* Bottom Section - Contact & Social */}
              <div className="mt-8 px-5 border-t border-gray-200 pt-6">
                {/* Contact Info */}
                <div className="mb-6">
                  <p className="font-['Nunito',sans-serif] font-bold text-[#00adbb] text-[16px] mb-3">
                    Contact Us
                  </p>
                  <p className="font-['Nunito',sans-serif] text-[#78787a] text-[14px] mb-1">
                    275 Centennial Olympic Park Dr NW
                  </p>
                  <p className="font-['Nunito',sans-serif] text-[#78787a] text-[14px] mb-1">
                    Atlanta, GA 30313
                  </p>
                  <p className="font-['Nunito',sans-serif] text-[#78787a] text-[14px] mb-1">
                    Phone: (404) 659-5437
                  </p>
                  <p className="font-['Nunito',sans-serif] text-[#78787a] text-[14px]">
                    info@childrensmuseumatlanta.org
                  </p>
                </div>

                {/* Social Media Icons */}
                <div className="mb-4">
                  <p className="font-['Nunito',sans-serif] font-bold text-[#00adbb] text-[16px] mb-3">
                    Follow Us
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-[44px] h-[44px] rounded-full bg-[#00adbb] flex items-center justify-center hover:bg-[#008c99] transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="size-5 text-white" fill="white" />
                    </a>
                    <a
                      href="#"
                      className="w-[44px] h-[44px] rounded-full bg-[#00adbb] flex items-center justify-center hover:bg-[#008c99] transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="size-5 text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-[44px] h-[44px] rounded-full bg-[#00adbb] flex items-center justify-center hover:bg-[#008c99] transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="size-5 text-white" fill="white" />
                    </a>
                    <a
                      href="#"
                      className="w-[44px] h-[44px] rounded-full bg-[#00adbb] flex items-center justify-center hover:bg-[#008c99] transition-colors"
                      aria-label="YouTube"
                    >
                      <Youtube className="size-5 text-white" fill="white" />
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