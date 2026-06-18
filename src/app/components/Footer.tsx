import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Facebook, Instagram, Mail } from "lucide-react";
import { useState } from "react";
import svgPaths from "../../imports/svg-gv66wwumqa";

export default function Footer() {
	const [email, setEmail] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle email signup
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
							<svg
								className="block w-full h-full"
								fill="none"
								viewBox="0 0 108.3 52.5232"
							>
								<path d={svgPaths.pca0c100} fill="#F7941E" />
								<path d={svgPaths.p1bf7e640} fill="#F7941E" />
								<path d={svgPaths.p2499760} fill="#FBB040" />
								<path d={svgPaths.pbd95800} fill="#FBB040" />
								<path d={svgPaths.p3cdb3200} fill="#FAA735" />
								<path d={svgPaths.p31e42c40} fill="#00ADBD" />
								<path d={svgPaths.p2a7c1880} fill="#00ADBD" />
								<path d={svgPaths.p16dbcf00} fill="#FBB040" />
								<path
									d={svgPaths.p137bbe00}
									stroke="#00ADBD"
									strokeLinejoin="round"
									strokeWidth="1.5"
								/>
							</svg>
						</div>

						{/* Museum Text */}
						<div className="flex flex-col gap-[9.7px]">
							<svg
								className="block w-[185.3px] h-[17.2px]"
								fill="none"
								viewBox="0 0 185.296 17.1959"
							>
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
							<svg
								className="block w-[94.06px] h-[17.18px]"
								fill="none"
								viewBox="0 0 94.0604 17.1772"
							>
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
					<form
						onSubmit={handleSubmit}
						className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto max-w-[576px]"
					>
						<div className="relative flex-1 min-w-0">
							<div className="relative">
								<Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-[#99A1AF]" />
								<input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Enter your email"
									className="w-full h-[50px] pl-12 pr-4 border border-[#d1d5dc] rounded-[10px] text-base text-[#0a0a0a] placeholder:text-[rgba(10,10,10,0.5)] focus:outline-none focus:ring-2 focus:ring-cma-teal focus:border-transparent"
									required
								/>
							</div>
						</div>
						<button
							type="submit"
							className="bg-cma-orange hover:bg-cma-orange-dark transition-colors h-[50px] px-8 rounded-full font-black text-cma-navy text-base whitespace-nowrap w-full sm:w-auto"
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
						<h3 className="cma-footer-heading">VISIT</h3>
						<ul className="flex flex-col gap-3">
							<li>
								<a href="#/plan-your-visit?tab=hours" className="cma-footer-link">
									Hours & Admission
								</a>
							</li>
							<li>
								<a href="https://16707.blackbaudhosting.com/16707/page.aspx?pid=196&tab=2&txobjid=56fa665e-15d9-4500-9b27-c1c2c0b2c6bf" target="_blank" rel="noopener noreferrer" className="cma-footer-link">
									Buy Tickets
								</a>
							</li>
							<li>
								<a href="#/plan-your-visit?tab=parking" className="cma-footer-link">
									Directions & Parking
								</a>
							</li>
							<li>
								<a href="#/plan-your-visit?tab=amenities" className="cma-footer-link">
									Food & Amenities
								</a>
							</li>
							<li>
								<a href="#/plan-your-visit?tab=accessibility" className="cma-footer-link">
									Accessibility
								</a>
							</li>
							<li>
								<a href="#/plan-your-visit" className="cma-footer-link">
									FAQ
								</a>
							</li>
						</ul>
					</div>

					{/* EXPLORE Column */}
					<div className="flex flex-col gap-5">
						<h3 className="cma-footer-heading">EXPLORE</h3>
						<ul className="flex flex-col gap-3">
							<li>
								<a href="#/exhibits" className="cma-footer-link">
									What's Inside
								</a>
							</li>
							<li>
								<a href="#/events" className="cma-footer-link">
									Events Calendar
								</a>
							</li>
							<li>
								<a href="#/plan-your-visit?tab=parties" className="cma-footer-link">
									Birthday Parties
								</a>
							</li>
							<li>
								<a href="#/plan-your-visit" className="cma-footer-link">
									Group Visits
								</a>
							</li>
							<li>
								<a href="#/program/field-trips" className="cma-footer-link">
									Field Trips
								</a>
							</li>
							<li>
								<a href="#/educators" className="cma-footer-link">
									Education Programs
								</a>
							</li>
						</ul>
					</div>

					{/* SUPPORT Column */}
					<div className="flex flex-col gap-5">
						<h3 className="cma-footer-heading">SUPPORT</h3>
						<ul className="flex flex-col gap-3">
							<li>
								<a href="#/memberships" className="cma-footer-link">
									Memberships
								</a>
							</li>
							<li>
								<a href="#/donate" className="cma-footer-link">
									Donate
								</a>
							</li>
							<li>
								<a href="#/about/careers" className="cma-footer-link">
									Volunteer
								</a>
							</li>
							<li>
								<a href="#/support/corporate-partners" className="cma-footer-link">
									Corporate Partners
								</a>
							</li>
							<li>
								<a href="#/museum-store" className="cma-footer-link">
									Gift Shop
								</a>
							</li>
						</ul>
					</div>

					{/* CONNECT Column */}
					<div className="flex flex-col gap-5">
						<h3 className="cma-footer-heading">CONNECT</h3>
						<ul className="flex flex-col gap-3">
							<li>
								<a href="#/contact" className="cma-footer-link">
									Contact Us
								</a>
							</li>
							<li>
								<a href="#/about/careers" className="cma-footer-link">
									Jobs/Careers
								</a>
							</li>
							<li>
								<a href="#/contact" className="cma-footer-link">
									Press/Media
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Bottom Section - Copyright & Social */}
			<div className="bg-cma-navy px-5 md:px-12 lg:px-[71.5px] py-8 md:py-10">
				<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
					{/* Copyright + legal links */}
					<div className="flex flex-col gap-[8px]">
						<p className="text-white text-[15px]">
							Copyright © 2026 Children's Museum of Atlanta · Children's Museum of
							Atlanta is a 501(c)(3) organization [EIN 58-1785484]
						</p>
						<span className="inline-flex items-center gap-[6px] self-start bg-white/10 border border-white/20 text-white font-bold text-[12px] px-[12px] py-[6px] rounded-full">
							<span className="w-[8px] h-[8px] rounded-full bg-cma-teal-light shrink-0" />
							GuideStar Platinum Transparency
						</span>
						<div className="flex gap-[16px]">
							<a href="#/privacy" className="text-white/50 text-[13px] hover:text-white transition-colors">Privacy Policy</a>
							<a href="#/terms" className="text-white/50 text-[13px] hover:text-white transition-colors">Terms of Use</a>
						</div>
					</div>

					{/* Social Icons */}
					<div className="flex items-center gap-4 shrink-0">
						<a
							href="https://www.facebook.com/childrensmuseumofatlanta"
							target="_blank"
							rel="noopener noreferrer"
							className="cma-social-btn-filled"
							aria-label="Facebook"
						>
							<Facebook className="size-5 text-white" />
						</a>
						<a
							href="https://www.instagram.com/childrensmuseumofatlanta/"
							target="_blank"
							rel="noopener noreferrer"
							className="cma-social-btn-filled"
							aria-label="Instagram"
						>
							<Instagram className="size-5 text-white" />
						</a>
						<a
							href="https://www.tiktok.com/@childrensmuseumatlanta"
							target="_blank"
							rel="noopener noreferrer"
							className="cma-social-btn-filled"
							aria-label="TikTok"
						>
							<FontAwesomeIcon icon={faTiktok} className="size-4 text-white" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
