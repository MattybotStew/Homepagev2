import { useState } from "react";
import { Mail } from "lucide-react";
import svgPaths from "../../imports/svg-gv66wwumqa";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email signup
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <footer className="bg-white w-full">
      {/* Top Section - Logo & Email Signup */}
      <div className="border-b border-[#e5e7eb] px-5 md:px-12 lg:px-[71.5px] pt-0 pb-8 md:pb-10 lg:pb-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Museum Logo */}
          <div className="flex items-center gap-[19px]">
            {/* Colorful Logo Icon */}
            <div className="relative w-[108px] h-[52.5px] shrink-0">
              <svg className="block w-full h-full" fill="none" viewBox="0 0 108.3 52.5232">
                <path d={svgPaths.pca0c100} fill="#F7941E" />
                <path d={svgPaths.p1bf7e640} fill="#F7941E" />
                <path d={svgPaths.p2499760} fill="#FBB040" />
                <path d={svgPaths.pbd95800} fill="#FBB040" />
                <path d={svgPaths.p3cdb3200} fill="#FAA735" />
                <path d={svgPaths.p31e42c40} fill="#00ADBD" />
                <path d={svgPaths.p2a7c1880} fill="#00ADBD" />
                <path d={svgPaths.p16dbcf00} fill="#FBB040" />
                <path d={svgPaths.p137bbe00} stroke="#00ADBD" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>

            {/* Museum Text */}
            <div className="flex flex-col gap-[9.7px]">
              <svg className="block w-[185.3px] h-[17.2px]" fill="none" viewBox="0 0 185.296 17.1959">
                <path d={svgPaths.p20369400} fill="#808285" />
                <path d={svgPaths.p2793e780} fill="#808285" />
                <path d={svgPaths.p2fb33f80} fill="#808285" />
                <path d={svgPaths.p2e55800} fill="#808285" />
                <path d={svgPaths.p21b67300} fill="#808285" />
                <path d={svgPaths.p3a500640} fill="#808285" />
                <path d={svgPaths.pbe3c00} fill="#808285" />
                <path d={svgPaths.p3f3d7a80} fill="#808285" />
                <path d={svgPaths.p2965000} fill="#808285" />
                <path d={svgPaths.p294e580} fill="#808285" />
                <path d={svgPaths.p2bcb1700} fill="#808285" />
                <path d={svgPaths.p26ba8c80} fill="#808285" />
                <path d={svgPaths.p120a8770} fill="#808285" />
                <path d={svgPaths.p1de25500} fill="#808285" />
                <path d={svgPaths.p12982000} fill="#808285" />
                <path d={svgPaths.p37085ca0} fill="#808285" />
              </svg>
              <svg className="block w-[94.06px] h-[17.18px]" fill="none" viewBox="0 0 94.0604 17.1772">
                <path d={svgPaths.p1a112080} fill="#808285" />
                <path d={svgPaths.p39ca3d00} fill="#808285" />
                <path d={svgPaths.p208d1800} fill="#808285" />
                <path d={svgPaths.p12f35b2a} fill="#808285" />
                <path d={svgPaths.p99d5f00} fill="#808285" />
                <path d={svgPaths.p67973f0} fill="#808285" />
                <path d={svgPaths.p2bacee70} fill="#808285" />
                <path d={svgPaths.p1a0e7600} fill="#808285" />
                <path d={svgPaths.p34eadb80} fill="#808285" />
              </svg>
            </div>
          </div>

          {/* Email Signup Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto max-w-[576px]">
            <div className="relative flex-1 min-w-0">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-[#99A1AF]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full h-[50px] pl-12 pr-4 border border-[#d1d5dc] rounded-[10px] font-['Nunito',sans-serif] text-base text-[#0a0a0a] placeholder:text-[rgba(10,10,10,0.5)] focus:outline-none focus:ring-2 focus:ring-[#00adbb] focus:border-transparent"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#f7941e] hover:bg-[#e8850d] transition-colors h-[50px] px-8 rounded-full font-['Nunito',sans-serif] font-bold text-white text-base whitespace-nowrap"
            >
              Stay In The Loop!
            </button>
          </form>
        </div>
      </div>

      {/* Navigation Links Section */}
      <div className="border-b border-[#faf9f6] px-5 md:px-12 lg:px-[71.5px] py-8 md:py-10 lg:py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-8">
          {/* VISIT Column */}
          <div className="flex flex-col gap-5">
            <h3 className="font-['Nunito',sans-serif] font-bold text-[#1b3d6d] text-lg">
              VISIT
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#" className="font-['Nunito',sans-serif] font-normal text-[#5a6c8a] text-sm hover:text-[#00adbb] transition-colors">
                  Hours & Admission
                </a>
              </li>
              <li>
                <a href="#" className="font-['Nunito',sans-serif] font-normal text-[#5a6c8a] text-sm hover:text-[#00adbb] transition-colors">
                  Buy Tickets
                </a>
              </li>
              <li>
                <a href="#" className="font-['Nunito',sans-serif] font-normal text-[#5a6c8a] text-sm hover:text-[#00adbb] transition-colors">
                  Directions & Parking
                </a>
              </li>
              <li>
                <a href="#" className="font-['Nunito',sans-serif] font-normal text-[#5a6c8a] text-sm hover:text-[#00adbb] transition-colors">
                  Food & Amenities
                </a>
              </li>
              <li>
                <a href="#" className="font-['Nunito',sans-serif] font-normal text-[#5a6c8a] text-sm hover:text-[#00adbb] transition-colors">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="#" className="font-['Nunito',sans-serif] font-normal text-[#5a6c8a] text-sm hover:text-[#00adbb] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* EXPLORE Column */}
          <div className="flex flex-col gap-5">
            <h3 className="font-['Nunito',sans-serif] font-bold text-[#1b3d6d] text-lg">
              EXPLORE
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#" className="font-['Nunito',sans-serif] font-normal text-[#5a6c8a] text-sm hover:text-[#00adbb] transition-colors">
                  What's Inside
                </a>
              </li>
              <li>
                <a href="#" className="font-['Nunito',sans-serif] font-normal text-[#5a6c8a] text-sm hover:text-[#00adbb] transition-colors">
                  Events Calendar
                </a>
              </li>
              <li>
                <a href="#" className="font-['Nunito',sans-serif] font-normal text-[#5a6c8a] text-sm hover:text-[#00adbb] transition-colors">
                  Birthday Parties
                </a>
              </li>
              <li>
                <a href="#" className="font-['Nunito',sans-serif] font-normal text-[#5a6c8a] text-sm hover:text-[#00adbb] transition-colors">
                  Group Visits
                </a>
              </li>
              <li>
                <a href="#" className="font-['Nunito',sans-serif] font-normal text-[#5a6c8a] text-sm hover:text-[#00adbb] transition-colors">
                  Field Trips
                </a>
              </li>
              <li>
                <a href="#" className="font-['Nunito',sans-serif] font-normal text-[#5a6c8a] text-sm hover:text-[#00adbb] transition-colors">
                  Education Programs
                </a>
              </li>
            </ul>
          </div>

          {/* SUPPORT Column */}
          <div className="flex flex-col gap-5">
            <h3 className="font-['Nunito',sans-serif] font-bold text-[#1b3d6d] text-lg">
              SUPPORT
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#" className="font-['Nunito',sans-serif] font-normal text-[#5a6c8a] text-sm hover:text-[#00adbb] transition-colors">
                  Memberships
                </a>
              </li>
              <li>
                <a href="#" className="font-['Nunito',sans-serif] font-normal text-[#5a6c8a] text-sm hover:text-[#00adbb] transition-colors">
                  Donate
                </a>
              </li>
              <li>
                <a href="#" className="font-['Nunito',sans-serif] font-normal text-[#5a6c8a] text-sm hover:text-[#00adbb] transition-colors">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#" className="font-['Nunito',sans-serif] font-normal text-[#5a6c8a] text-sm hover:text-[#00adbb] transition-colors">
                  Corporate Partners
                </a>
              </li>
              <li>
                <a href="#" className="font-['Nunito',sans-serif] font-normal text-[#5a6c8a] text-sm hover:text-[#00adbb] transition-colors">
                  Gift Shop
                </a>
              </li>
            </ul>
          </div>

          {/* CONNECT Column */}
          <div className="flex flex-col gap-5">
            <h3 className="font-['Nunito',sans-serif] font-bold text-[#1b3d6d] text-lg">
              CONNECT
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#" className="font-['Nunito',sans-serif] font-normal text-[#5a6c8a] text-sm hover:text-[#00adbb] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="font-['Nunito',sans-serif] font-normal text-[#5a6c8a] text-sm hover:text-[#00adbb] transition-colors">
                  Jobs/Careers
                </a>
              </li>
              <li>
                <a href="#" className="font-['Nunito',sans-serif] font-normal text-[#5a6c8a] text-sm hover:text-[#00adbb] transition-colors">
                  Press/Media
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright & Social */}
      <div className="bg-[#1D3E6B] px-5 md:px-12 lg:px-[71.5px] py-8 md:py-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Copyright */}
          <p className="font-['Nunito',sans-serif] text-white text-sm">
            Copyright © 2026 Children's Museum of Atlanta
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/childrensmuseumofatlanta"
              target="_blank"
              rel="noopener noreferrer"
              className="size-12 rounded-full border-2 border-[#00adbb] flex items-center justify-center hover:bg-[#00adbb] transition-colors group"
              aria-label="Facebook"
            >
              <svg className="size-5" fill="none" viewBox="0 0 20 20">
                <path
                  d={svgPaths.p30c8d680}
                  stroke="#00ADBD"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.66667"
                  className="group-hover:stroke-white transition-colors"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/childrensmuseumofatlanta/"
              target="_blank"
              rel="noopener noreferrer"
              className="size-12 rounded-full border-2 border-[#00adbb] flex items-center justify-center hover:bg-[#00adbb] transition-colors group"
              aria-label="Instagram"
            >
              <svg className="size-5" fill="none" viewBox="0 0 20 20">
                <path
                  d={svgPaths.p4b98700}
                  stroke="#00ADBD"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.66667"
                  className="group-hover:stroke-white transition-colors"
                />
                <path
                  d={svgPaths.p19f4a800}
                  stroke="#00ADBD"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.66667"
                  className="group-hover:stroke-white transition-colors"
                />
                <path
                  d="M14.5833 5.41667H14.5917"
                  stroke="#00ADBD"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.66667"
                  className="group-hover:stroke-white transition-colors"
                />
              </svg>
            </a>

            {/* Twitter/X */}
            <a
              href="https://twitter.com/imaginecma"
              target="_blank"
              rel="noopener noreferrer"
              className="size-12 rounded-full border-2 border-[#00adbb] flex items-center justify-center hover:bg-[#00adbb] transition-colors group"
              aria-label="Twitter"
            >
              <svg className="size-4" viewBox="0 0 16 16">
                <path
                  d={svgPaths.p3c05580}
                  fill="#00ADBD"
                  className="group-hover:fill-white transition-colors"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}