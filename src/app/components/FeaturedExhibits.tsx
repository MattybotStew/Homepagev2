import imgEllipse from "figma:asset/exhibits-ellipse.svg";
import imgExhibitCreativity from "../../assets/exhibit-creativity.webp";
import imgExhibitDoc from "../../assets/exhibit-doc-mcstuffins.webp";
import imgExhibitFood from "../../assets/exhibit-food.webp";
import imgExhibitGateway from "../../assets/exhibit-gateway.webp";
import imgExhibitLeaping from "../../assets/exhibit-leaping.webp";
import imgExhibitScience from "../../assets/exhibit-science.webp";
import imgExhibitTools from "../../assets/exhibit-tools.webp";
import imgExhibitWildKratts from "../../assets/exhibits-summer-hero.jpg";
import {
	AnimatePresence,
	animate,
	motion,
	useInView,
	useMotionValue,
	useSpring,
	useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import imgStatue from "../../assets/statue.webp";
import imgStatueShadow from "../../assets/staturShadow.webp";

const exhibits = [
	{
		id: "wild-kratts",
		label: "Wild Kratts",
		badge: "New Summer 2026",
		title: "Wild Kratts®: Ocean Adventure!",
		description:
			"Jump into the world of Wild Kratts for an ocean adventure! Explore the seashore and deep sea, crawl through an anemone, hunt for lunch like a dragonfish, create your own dolphin name and more. Don't miss this adventurous new exhibit!",
		href: "#/exhibits/wild-kratts-ocean-adventure",
		image: imgExhibitWildKratts,
	},
	{
		id: "doc-mcstuffins",
		label: "Doc McStuffins",
		badge: "Coming Fall 2026",
		title: "Doc McStuffins: The Exhibit",
		description:
			"Experience the first children's museum exhibit based on Disney Junior's award-winning series, Doc McStuffins. Join the magical storytelling as you help Doc and her friends in the McStuffins Toy Hospital. There is so much you can do to take care of you!",
		href: "#/exhibits",
		image: imgExhibitDoc,
	},
	{
		id: "food",
		label: "Fundamentally Food",
		badge: "",
		title: "Fundamentally Food",
		description:
			"From farm to table, explore the world of food through hands-on play. Harvest produce, climb tractors, milk cows, load delivery trucks, shop a bustling grocery store, and cook pretend meals together.",
		href: "#/exhibits/fundamentally-food",
		image: imgExhibitFood,
	},
	{
		id: "gateway",
		label: "Gateway to the World",
		badge: "",
		title: "Gateway to the World",
		description:
			"Travel the globe without leaving the Museum. Guide trains across continents, launch rockets to space, and explore a two-story climber. Explore geography, movement, and the ways our world is connected, from the ground beneath our feet to far beyond the sky.",
		href: "#/exhibits/gateway-to-the-world",
		image: imgExhibitGateway,
	},
	{
		id: "leaping",
		label: "Leaping Into Learning",
		badge: "",
		title: "Leaping Into Learning",
		description:
			"Explore the forest, cast your rods, catch colorful fish, and go under our waterfall without getting wet! Climb in our tree house and put on an animal puppet show. Babies and toddlers will love the little house play area built just for them.",
		href: "#/exhibits/leaping-into-learning",
		image: imgExhibitLeaping,
	},
	{
		id: "creativity",
		label: "Let Your Creativity Flow",
		badge: "",
		title: "Let Your Creativity Flow",
		description:
			"Release your inner artist at the paint wall and build giant castles at our sand tables. Join storytimes, dance parties, and more on the CMA Stage.",
		href: "#/exhibits/let-your-creativity-flow",
		image: imgExhibitCreativity,
	},
	{
		id: "science",
		label: "Step Up to Science",
		badge: "",
		title: "Step Up to Science",
		description:
			"Experiment with light and sound as you create shadows, explore color, and make vibrations. Discover how waves work, how science and creativity connect, and how experimenting leads to exciting, sometimes surprising results.",
		href: "#/exhibits/step-up-to-science",
		image: imgExhibitScience,
	},
	{
		id: "tools",
		label: "Tools for Solutions",
		badge: "",
		title: "Tools for Solutions",
		description:
			"Explore engineering, problem-solving, and how structures respond to forces. Guide balls through a giant machine using six simple machines, connect make-believe wires and pipes in the Construction House, build skyscrapers, and design a city of the future with blocks.",
		href: "#/exhibits/tools-for-solutions",
		image: imgExhibitTools,
	},
];

const n = exhibits.length;

const SLOTS = {
	left: { x: -720, y: 183, rotate: -27.94, scale: 0.7, opacity: 1 },
	center: { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 },
	right: { x: 720, y: 183, rotate: 27.94, scale: 0.7, opacity: 1 },
} as const;

const TRANSITION = { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const };
const INSTANT = { duration: 0 };

export default function FeaturedExhibits() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [wrapIndex, setWrapIndex] = useState<number | null>(null);
	const [cursorOver, setCursorOver] = useState(false);

	const rawX = useMotionValue(-200);
	const rawY = useMotionValue(-200);
	const smoothX = useSpring(rawX, { damping: 20, stiffness: 250 });
	const smoothY = useSpring(rawY, { damping: 20, stiffness: 250 });

	const statueRef = useRef<HTMLDivElement>(null);
	const statueInView = useInView(statueRef, { once: true });
	const statueY = useMotionValue(-1400);
	// Fade in quickly at the top of the fall so it's never visible mid-PlanYourVisit
	const statueOpacity = useTransform(statueY, [-1400, -1200, 0], [0, 1, 1]);
	// Shadow grows with proximity to ground; responds visibly to the bounce range
	const shadowScaleX = useTransform(statueY, [-1400, -20, 0], [0.05, 0.65, 1]);
	const shadowOpacity = useTransform(statueY, [-1400, -60, 0], [0, 0, 1]);

	useEffect(() => {
		if (!statueInView) return;
		animate(statueY, 0, {
			type: "spring",
			stiffness: 100,
			damping: 12,
			mass: 2,
			onComplete: () => {
				animate(statueY, [0, -18, 0], {
					duration: 1.2,
					times: [0, 0.45, 1],
					ease: ["easeOut", "easeIn"],
					repeat: Infinity,
					repeatDelay: 0.4,
				});
			},
		});
	}, [statueInView, statueY]);

	const go = (dir: number) => {
		setWrapIndex(dir > 0 ? (activeIndex - 1 + n) % n : (activeIndex + 1) % n);
		setActiveIndex((prev) => (prev + dir + n) % n);
	};

	const jumpTo = (i: number) => {
		if (i === activeIndex) return;
		const dir = (i - activeIndex + n) % n <= n / 2 ? 1 : -1;
		setWrapIndex(dir > 0 ? (activeIndex - 1 + n) % n : (activeIndex + 1) % n);
		setActiveIndex(i);
	};

	useEffect(() => {
		if (wrapIndex === null) return;
		const t = setTimeout(() => setWrapIndex(null), 50);
		return () => clearTimeout(t);
	}, [wrapIndex]);

	return (
		<section
			aria-label="Featured Exhibits"
			className="relative w-full pt-[80px] md:pt-[160px] bg-cma-teal-pale"
		>
			{/* Heading */}
			<div className="relative flex flex-col items-center gap-6 md:gap-[48px] px-5 sm:px-10 md:px-[80px] text-center">
				<motion.h2
					className="text-cma-navy tracking-[-1px]"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
				>
					What&apos;s Inside?
					<br />
					Hours of Hands-On Fun
				</motion.h2>

				<a
					onClick={() => document.getElementById("exhibits")?.scrollIntoView({ behavior: "smooth" })}
					className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark"
				>
					See All Exhibits
				</a>

				{/* Filter pill bar */}
				<div className="cma-pill-scroll w-full">
					{exhibits.map((exhibit, i) => (
						<button
							key={exhibit.id}
							onClick={() => jumpTo(i)}
							className={`cma-nav-pill ${
								i === activeIndex
									? "cma-nav-pill-active"
									: "cma-nav-pill-inactive"
							}`}
						>
							{exhibit.label}
						</button>
					))}
				</div>
			</div>

			{/* Statue — straddles the PlanYourVisit / FeaturedExhibits boundary */}
			<div
				ref={statueRef}
				className="absolute right-0 top-[-260px] pointer-events-none z-[30] hidden md:block"
				aria-hidden
			>
				<div className="relative">
					<motion.img
						src={imgStatue}
						alt=""
						className="block w-[190px]"
						style={{ y: statueY, opacity: statueOpacity }}
					/>
					<motion.img
						src={imgStatueShadow}
						alt=""
						className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140px] origin-center"
						style={{ scaleX: shadowScaleX, opacity: shadowOpacity }}
					/>
				</div>
			</div>

			{/* Carousel */}
			<div className="relative mt-0 md:mt-[10px] overflow-hidden">
				{/* Decorative ellipse */}
				<div
					className="absolute pointer-events-none left-1/2 top-[227px] -translate-x-1/2 w-[1876px] h-[1876px]"
					aria-hidden
				>
					<img src={imgEllipse} alt="" className="w-full h-full block" />
				</div>

				{/* Cards */}
				<div
					className="relative h-[clamp(520px,calc(120px+min(652px,102vw)),800px)] mb-0 md:mb-[196px] select-none"
					onMouseEnter={() => setCursorOver(true)}
					onMouseLeave={() => setCursorOver(false)}
					onMouseMove={(e) => {
						rawX.set(e.clientX - 60);
						rawY.set(e.clientY - 60);
					}}
				>
					{/* Invisible drag overlay — framer handles velocity + inertia for both mouse and touch */}
					<motion.div
						className="absolute inset-0 z-20 md:cursor-none"
						style={{ touchAction: "pan-y" }}
						drag="x"
						dragConstraints={{ left: 0, right: 0 }}
						dragElastic={0.15}
						onDragEnd={(_, { offset, velocity }) => {
							if (offset.x < -60 || velocity.x < -400) go(1);
							else if (offset.x > 60 || velocity.x > 400) go(-1);
						}}
					/>

					{exhibits.map((exhibit, i) => {
						const diff = (((i - activeIndex) % n) + n) % n;
						const slot =
							diff === 0
								? "center"
								: diff === 1
									? "right"
									: diff === n - 1
										? "left"
										: null;

						if (!slot) return null;
						const isCenter = slot === "center";

						return (
							<motion.div
								key={exhibit.id}
								className={`absolute overflow-hidden rounded-[25px] w-[min(565px,88vw)] aspect-[565/652] left-1/2 top-[120px] ml-[calc(-1*min(282.5px,44vw))] ${isCenter ? "z-10" : "z-[1]"}`}
								animate={SLOTS[slot]}
								transition={wrapIndex === i ? INSTANT : TRANSITION}
							>
								<img
									src={exhibit.image}
									alt={isCenter ? exhibit.title : ""}
									className="absolute inset-0 w-full h-full object-cover block"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
								<div
									className={`absolute flex flex-col gap-[20px] bottom-[40px] left-[28px] right-[28px] transition-opacity duration-200 ${isCenter ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
								>
									{exhibit.badge && (
										<span className="self-start rounded-[8px] px-[18px] py-[12px] bg-cma-teal-pale font-extrabold text-[12px] text-cma-navy leading-none">
											{exhibit.badge}
										</span>
									)}
									<p className="font-extrabold text-[clamp(24px,2.5vw,36px)] text-white leading-[1.1]">
										{exhibit.title}
									</p>
									<p className="font-medium text-[clamp(13px,1.25vw,18px)] text-white leading-[1.7]">
										{exhibit.description}
									</p>
								</div>
							</motion.div>
						);
					})}
				</div>

			{/* Custom cursor — follows mouse, fixed so overflow:hidden doesn't clip it */}
				<AnimatePresence>
					{cursorOver && (
						<motion.div
							className="fixed top-0 left-0 w-[120px] h-[120px] rounded-full bg-cma-blue-mid flex items-center justify-center pointer-events-none z-[100]"
							style={{ x: smoothX, y: smoothY }}
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.5 }}
							transition={{ duration: 0.2 }}
							aria-hidden
						>
							<span className="font-bold text-[18px] text-white leading-none">
								DRAG
							</span>
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			{/* View Exhibit Details CTA */}
			<div className="relative z-10 flex justify-center mt-[24px] md:mt-[-120px] mb-[24px] md:mb-0 px-5">
				<AnimatePresence mode="wait">
					<motion.a
						key={exhibits[activeIndex].id}
						href={exhibits[activeIndex].href}
						className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black whitespace-nowrap"
						initial={{ opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -8 }}
						transition={{ duration: 0.25 }}
					>
						View Exhibit Details
					</motion.a>
				</AnimatePresence>
			</div>

			{/* Dot indicators — mobile only; desktop uses filter pills */}
			<div className="cma-dot-indicators">
				{exhibits.map((_, j) => (
					<button
						key={j}
						onClick={() => jumpTo(j)}
						className={`cma-dot ${j === activeIndex ? "cma-dot-active" : ""}`}
						aria-label={`Go to exhibit ${j + 1}`}
					/>
				))}
			</div>
		</section>
	);
}
