import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import img0 from "../../assets/educators-img-0.webp";
import img1 from "../../assets/educators-img-1.webp";
import img2 from "../../assets/educators-img-2.webp";
import img3 from "../../assets/educators-img-3.webp";
import imgWaveTop from "../../assets/impact-wave-top.svg";

// TODO: "Homeschool Days", "Birthday Workshops", and "Summer Camp Partnerships"
// are placeholders pending real program content and photography.
const programs = [
	{
		image: img0,
		title: "Field Trips",
		body: "Bring your curriculum to life through standards-aligned field trips rooted in learning through play.",
		href: "#/program/field-trips",
	},
	{
		image: img1,
		title: "Museum On-the-Go",
		body: "Engage learners ages 2 through 5th grade with hands-on, play-based learning — brought directly to your classroom or community space.",
		href: "#/program/museum-on-the-go",
	},
	{
		image: img2,
		title: "Scout Workshops",
		body: "Support STEM badge earning with hands-on, play-based workshops that include time to explore the Museum.",
		href: "#/program/scout-workshops",
	},
	{
		image: img3,
		title: "Educator Professional Development",
		body: "Hands-on, play-based professional development that inspires and supports your classroom teaching.",
		href: "#/program/educator-professional-development",
	},
	{
		image: img0,
		title: "Homeschool Days",
		body: "Placeholder — monthly hands-on learning days designed specifically for homeschool families and co-ops.",
		href: "#/educators",
	},
	{
		image: img1,
		title: "Birthday Workshops",
		body: "Placeholder — add a guided STEAM activity led by a Museum educator to any birthday party booking.",
		href: "#/educators",
	},
	{
		image: img2,
		title: "Summer Camp Partnerships",
		body: "Placeholder — bring Museum educators and exhibit kits to your summer camp for a week of themed programming.",
		href: "#/educators",
	},
];

// Rendered 3x back-to-back so there's always identical content to scroll
// into in either direction — recenter() then snaps the position back into
// the middle copy once the user drifts into a clone, invisibly since the
// clones are pixel-identical to the real set.
const loopedPrograms = [...programs, ...programs, ...programs];

export default function EducatorsPrograms() {
	const sliderRef = useRef<HTMLDivElement>(null);
	const recenterTimeout = useRef<number | undefined>(undefined);

	const recenter = () => {
		const el = sliderRef.current;
		if (!el) return;
		const setWidth = el.scrollWidth / 3;
		if (el.scrollLeft < setWidth * 0.5) {
			el.scrollLeft += setWidth;
		} else if (el.scrollLeft > setWidth * 1.5) {
			el.scrollLeft -= setWidth;
		}
	};

	useEffect(() => {
		const el = sliderRef.current;
		if (!el) return;
		el.scrollLeft = el.scrollWidth / 3;

		const handleResize = () => {
			el.scrollLeft = el.scrollWidth / 3;
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleScroll = () => {
		if (recenterTimeout.current) window.clearTimeout(recenterTimeout.current);
		recenterTimeout.current = window.setTimeout(recenter, 80);
	};

	const scrollByCard = (direction: 1 | -1) => {
		const el = sliderRef.current;
		if (!el) return;
		const card = el.querySelector<HTMLElement>("[data-slider-card]");
		const amount = (card?.offsetWidth ?? 280) + 16;
		el.scrollBy({ left: amount * direction, behavior: "smooth" });
	};

	return (
		<section
			id="programs"
			className="bg-cma-teal-pale w-full py-[80px] md:py-[120px] relative overflow-hidden"
		>
			<div className="cma-section-container flex flex-col gap-[40px]">
				<div className="flex flex-col gap-[24px] sm:flex-row sm:items-end sm:justify-between">
					<motion.div
						className="flex flex-col gap-[16px]"
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
					>
						<h2 className="text-cma-navy">Our Education Programs</h2>
						<p className="text-cma-navy max-w-[560px]">
							Discover the range of programs we offer for schools, scouts, and
							lifelong learners.
						</p>
					</motion.div>

					<div className="flex items-center gap-[20px] shrink-0">
						<a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							className="cma-text-link font-black flex items-center gap-[6px] whitespace-nowrap"
						>
							Download Education Brochure
							<FontAwesomeIcon icon={faDownload} className="text-[13px]" />
						</a>

						<div className="flex gap-[12px] shrink-0">
							<button
								type="button"
								onClick={() => scrollByCard(-1)}
								aria-label="Previous program"
								className="size-[48px] rounded-full bg-cma-navy hover:bg-cma-slate transition-colors flex items-center justify-center shrink-0"
							>
								<ChevronLeft className="size-5 text-white" />
							</button>
							<button
								type="button"
								onClick={() => scrollByCard(1)}
								aria-label="Next program"
								className="size-[48px] rounded-full bg-cma-navy hover:bg-cma-slate transition-colors flex items-center justify-center shrink-0"
							>
								<ChevronRight className="size-5 text-white" />
							</button>
						</div>
					</div>
				</div>

				<div
					ref={sliderRef}
					onScroll={handleScroll}
					className="cma-card-slider -mx-5 px-5 md:-mx-[80px] md:px-[80px]"
				>
					{loopedPrograms.map((program, i) => (
						<div
							key={`${program.title}-${i}`}
							data-slider-card
							className="bg-white border-2 border-black/5 rounded-[24px] p-[24px] flex flex-col gap-[24px] w-[260px] sm:w-[280px] md:w-[300px] shrink-0"
						>
							<div className="relative rounded-[16px] overflow-hidden h-[160px] shrink-0">
								<img
									src={program.image}
									alt={program.title}
									className="absolute inset-0 w-full h-full object-cover"
								/>
							</div>
							<h3 className="text-cma-navy">
								{program.title}
							</h3>
							<p className="text-cma-navy flex-1">{program.body}</p>
							<a href={program.href} className="cma-text-link mt-auto">
								Learn More{" "}
								<FontAwesomeIcon icon={faArrowRight} className="text-[13px]" />
							</a>
						</div>
					))}
				</div>
			</div>

			<div
				aria-hidden
				className="absolute bottom-0 left-0 flex overflow-hidden h-[13px] w-full"
			>
				{Array.from({ length: 10 }).map((_, i) => (
					<img
						key={`item-${i}`}
						src={imgWaveTop}
						alt=""
						className="w-[422px] h-[57px] shrink-0 block"
					/>
				))}
			</div>
		</section>
	);
}
