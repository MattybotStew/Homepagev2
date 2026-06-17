import { faUnlockKeyhole, faBus, faCalendarDays, faUsersLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import imgContact from "../../assets/educators-img-1.webp";
import imgWaveTop from "../../assets/impact-wave-top.svg";
import imgWaveWhite from "../../assets/wave-white.svg";

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
	const dafWidgetRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const placeholder = dafWidgetRef.current;
		if (!placeholder) return;

		// Mount on document.body — placing this inside the motion.div tree
		// breaks it, since framer-motion leaves an inline `transform` on its
		// elements, and any transformed ancestor becomes the containing block
		// for `position: fixed` descendants (the widget's modal relies on
		// `position: fixed` sized to its iframe's viewport).
		const iframe = document.createElement("iframe");
		iframe.title = "Give from your Donor-Advised Fund";
		iframe.style.position = "fixed";
		iframe.style.border = "none";
		// Kept below the site header (z-40, fixed) while inline, so it scrolls
		// behind the header like normal content — only raised above it once
		// the modal opens.
		iframe.style.zIndex = "1";
		document.body.appendChild(iframe);

		let expanded = false;

		const syncPosition = () => {
			if (expanded) return;
			const rect = placeholder.getBoundingClientRect();
			iframe.style.top = `${rect.top}px`;
			iframe.style.left = `${rect.left}px`;
			iframe.style.width = `${rect.width}px`;
			iframe.style.height = `${rect.height}px`;
		};

		const collapse = () => {
			expanded = false;
			iframe.style.zIndex = "1";
			syncPosition();
		};

		const expand = () => {
			expanded = true;
			iframe.style.zIndex = "9999";
			iframe.style.top = "0";
			iframe.style.left = "0";
			iframe.style.width = "100vw";
			iframe.style.height = "100vh";
		};

		syncPosition();
		window.addEventListener("resize", syncPosition);
		window.addEventListener("scroll", syncPosition, true);

		let observer: MutationObserver | null = null;

		// The widget's modal is `position: fixed; width/height: 100%` relative
		// to this iframe's own viewport — expand the iframe to fill the real
		// screen while the modal is open, then shrink it back when it closes.
		iframe.addEventListener("load", () => {
			const frameDoc = iframe.contentDocument;
			if (!frameDoc) return;
			observer = new MutationObserver(() => {
				const modal = frameDoc.getElementById("daf_modal");
				const isOpen = !!modal && frameDoc.defaultView?.getComputedStyle(modal).visibility === "visible";
				if (isOpen) expand();
				else collapse();
			});
			observer.observe(frameDoc.documentElement, {
				attributes: true,
				subtree: true,
				attributeFilter: ["style"],
			});
		});

		const doc = iframe.contentDocument;
		if (doc) {
			doc.open();
			doc.write(`
				<!DOCTYPE html>
				<html>
					<head>
						<style>
							body { margin: 0; font-family: Nunito, sans-serif; }
							#daf_link {
								display: inline-flex !important;
								align-items: center !important;
								justify-content: center !important;
								width: fit-content !important;
								max-width: 100% !important;
								box-sizing: border-box !important;
								text-align: center !important;
								white-space: normal !important;
								margin: 0 !important;
								vertical-align: top !important;
								background-color: #f7941e !important;
								color: #1d3e6b !important;
								font-family: Nunito, sans-serif !important;
								font-weight: 900 !important;
								font-size: 15px !important;
								line-height: 1.3 !important;
								text-decoration: none !important;
								border-radius: 1000px !important;
								padding: 13px 24px !important;
								cursor: pointer !important;
								transition: background-color 0.2s ease !important;
							}
							#daf_link:hover { background-color: #b8620a !important; }
						</style>
					</head>
					<body>
						<script>var _msdaf_id= 'f18b69490bb9e'</script>
						<script src="https://app.dafwidget.com/api/js/source.js"></script>
					</body>
				</html>
			`);
			doc.close();
		}

		return () => {
			observer?.disconnect();
			window.removeEventListener("resize", syncPosition);
			window.removeEventListener("scroll", syncPosition, true);
			iframe.remove();
		};
	}, []);

	return (
		<section
			id="contact"
			className="bg-cma-navy w-full py-[80px] md:py-[120px] relative"
		>
			<div aria-hidden className="absolute top-0 left-0 flex overflow-hidden h-[13px] w-full">
				{Array.from({ length: 10 }).map((_, i) => (
					<img key={`item-${i}`} src={imgWaveTop} alt="" className="w-[422px] h-[57px] shrink-0 block" />
				))}
			</div>
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
								Every child deserves the chance to discover, imagine, and grow
								through the power of play. Too many children in Atlanta face
								barriers that limit their access to enriching early learning
								experiences. Your gift sparks curiosity and builds school-ready
								kids across our community, reaching over 180,000 guests annually
								with interactive exhibits, educator training, and access programs.
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
								href="https://16707.blackbaudhosting.com/16707/Annual-Fund"
								className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
							>
								Make Play Possible — Donate
							</a>
							<a
								href="#/about/impact"
								className="cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:text-white font-black"
							>
								Our Impact
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
							<div ref={dafWidgetRef} className="w-full h-[76px]" />
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
						src={imgWaveWhite}
						alt=""
						className="w-[422px] h-[57px] shrink-0 block"
					/>
				))}
			</div>
		</section>
	);
}
