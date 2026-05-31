import { faUnlockKeyhole, faBus, faCalendarDays, faUsersLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { useState } from "react";
import imgContact from "../../assets/educators-contact.webp";
import imgWaveBottom from "../../assets/impact-wave-bottom.svg";

const impactItems = [
	{
		color: "bg-cma-teal",
		icon: faUsersLine,
		title: "Connected Learning Connected Communities",
		body: "In-depth outreach across 20+ partner sites supporting literacy and STEAM in under-resourced neighborhoods.",
	},
	{
		color: "bg-cma-orange",
		icon: faBus,
		title: "Learning Spaces",
		body: "Free preschool workshops in partnership with United Way, bringing play to children not enrolled in traditional preschools.",
	},
	{
		color: "bg-[#fbb040]",
		icon: faCalendarDays,
		title: "Family Free Day",
		body: "Free admission days four times a year so every family can experience the Museum.",
	},
	{
		color: "bg-cma-teal",
		icon: faUnlockKeyhole,
		title: "Access It!",
		body: "Subsidized admission ensuring no child is turned away due to inability to pay.",
	},
];

export default function EducatorsImpact() {
	const [email, setEmail] = useState("");

	return (
		<section
			id="contact"
			className="bg-cma-navy w-full py-[80px] md:py-[120px] relative"
		>
			<div className="cma-section-container">
				<div className="flex flex-col lg:flex-row gap-[48px] lg:gap-[60px]">
					{/* Left column */}
					<motion.div
						className="flex flex-col gap-[48px] flex-1"
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
					>
						<div className="flex flex-col gap-[24px]">
							<h2 className="text-white leading-none">
								Making an Impact Together
							</h2>
							<p className="text-cma-blue-light text-[clamp(15px,1.25vw,18px)] leading-[1.7]">
								At CMA, we're more than a museum — we're a nonprofit dedicated
								to sparking curiosity in every child. We rely on supporters to
								keep inspiring over 100,000 young minds annually through
								interactive programs and community outreach.
							</p>
						</div>

						<div className="flex flex-col gap-[32px]">
							{impactItems.map((item, i) => (
								<motion.div
									key={item.title}
									className="flex gap-[16px] items-start"
									initial={{ opacity: 0, x: -16 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true, margin: "-40px" }}
									transition={{
										delay: i * 0.08,
										duration: 0.6,
										ease: [0.16, 1, 0.3, 1],
									}}
								>
									<div
										className={`${item.color} rounded-full size-[48px] flex items-center justify-center shrink-0`}
									>
										<FontAwesomeIcon icon={item.icon} className="text-white text-[18px]" />
									</div>
									<div className="flex flex-col gap-[8px]">
										<p className="font-extrabold text-[18px] text-white leading-[1.2]">
											{item.title}
										</p>
										<p className="text-cma-blue-light">{item.body}</p>
									</div>
								</motion.div>
							))}
						</div>

						<div className="flex flex-col sm:flex-row gap-3">
							<a
								href="#/donate"
								className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
							>
								Make Play Possible — Donate
							</a>
							<a
								href="#/educators"
								className="cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:text-white font-black"
							>
								Learn More
							</a>
						</div>

						<p className="text-white/60">
							501(c)(3) organization — your support makes play possible
						</p>
					</motion.div>

					{/* Right column */}
					<motion.div
						className="flex flex-col gap-[24px] w-full lg:w-[400px] xl:w-[440px] shrink-0"
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
					>
						{/* Contact card */}
						<div className="bg-white border-2 border-black/5 rounded-[24px] p-[24px] flex flex-col gap-[24px]">
							<div className="rounded-[16px] overflow-hidden h-[220px] shrink-0">
								<img
									src={imgContact}
									alt="Education team"
									className="w-full h-full object-cover"
								/>
							</div>
							<p className="font-extrabold text-[24px] text-cma-navy leading-[1.2]">
								Meet Your Education Contact
							</p>
							<p className="text-cma-navy">
								Our education team at CMA is ready to help you plan your next
								field trip or program. Get in touch and let us know how we can
								help!
							</p>
							<a
								href="mailto:education@childrensmuseumatlanta.org"
								className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black self-start"
							>
								Connect with Our Team
							</a>
						</div>

						{/* Newsletter card */}
						<div className="bg-cma-cream rounded-[20px] px-[40px] py-[32px] flex flex-col gap-[20px] items-center">
							<p className="font-extrabold text-[22px] text-cma-navy leading-[1.1] text-center">
								Subscribe to Educator Newsletter!
							</p>
							<p className="text-[#6b7ea0] text-center">
								Stay up to date on new programs, professional development
								opportunities, and free educator resources.
							</p>
							<form
								className="flex flex-col gap-[12px] w-full"
								onSubmit={(e) => e.preventDefault()}
							>
								<div className="bg-white border border-cma-blue-light rounded-[10px] flex items-center gap-[12px] px-[16px] py-[14px]">
									<svg
										className="size-[20px] text-cma-blue-mid shrink-0"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={1.5}
									>
										<path
											strokeLinecap="round"
											d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
										/>
									</svg>
									<input
										type="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder="Enter your email"
										className="flex-1 bg-transparent text-[15px] text-cma-navy placeholder:text-black/40 outline-none"
									/>
								</div>
								<button
									type="submit"
									className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black w-full justify-center"
								>
									Stay In The Loop!
								</button>
							</form>
						</div>
					</motion.div>
				</div>
			</div>

			<div
				aria-hidden
				className="absolute bottom-0 left-0 flex overflow-hidden h-[13px] w-full"
			>
				{Array.from({ length: 10 }).map((_, i) => (
					<img
						key={`item-${i}`}
						src={imgWaveBottom}
						alt=""
						className="w-[422px] h-[57px] shrink-0 block"
					/>
				))}
			</div>
		</section>
	);
}
