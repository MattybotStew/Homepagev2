import { motion } from "motion/react";
import imgWaveTop from "../../assets/impact-wave-top.svg";
import { useEffect, useState } from "react";

const DEFAULT_TARGET_DATE = new Date("2026-09-05T10:00:00");

function getTimeLeft(target: Date) {
	const now = new Date();
	const diff = target.getTime() - now.getTime();
	if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
	return {
		days: Math.floor(diff / (1000 * 60 * 60 * 24)),
		hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
		minutes: Math.floor((diff / (1000 * 60)) % 60),
		seconds: Math.floor((diff / 1000) % 60),
	};
}

function CountdownTile({
	value,
	label,
	delay,
}: {
	value: number;
	label: string;
	delay: number;
}) {
	return (
		<motion.div
			className="bg-cma-navy flex-1 rounded-[16px] flex flex-col items-center justify-center gap-2 py-5"
			initial={{ opacity: 0, scale: 0.9 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true, margin: "-40px" }}
			transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay }}
		>
			<span className="font-extrabold text-[clamp(22px,2.5vw,30px)] text-white leading-none tracking-[-1px]">
				{String(value).padStart(2, "0")}
			</span>
			<p className="text-white/80">{label}</p>
		</motion.div>
	);
}

type Props = {
	eyebrow?: string;
	heading?: string;
	body?: string;
	cta?: { label: string; href: string };
	secondaryCta?: { label: string; href: string };
	bg?: string;
	showCountdown?: boolean;
	showRightCta?: boolean;
	showTopWave?: boolean;
	countdownTarget?: Date;
};

export default function PYVCallout({
	eyebrow = "SEP 5–6 @ 10:00 am–5:00 pm",
	heading = "TinyCON® Returns September 5–6!",
	body = "Join us for our annual two-day celebration of fantasy, sci-fi, and your favorite fictional universes — cosplay, character meet-and-greets, and hands-on activities for the whole family.",
	cta = {
		label: "Buy Tickets",
		href: "https://16707.blackbaudhosting.com/16707/page.aspx?pid=196&tab=2&txobjid=56fa665e-15d9-4500-9b27-c1c2c0b2c6bf",
	},
	secondaryCta,
	bg = "bg-cma-teal-dark",
	showCountdown = true,
	showRightCta = true,
	showTopWave = false,
	countdownTarget = DEFAULT_TARGET_DATE,
}: Props) {
	const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(countdownTarget));

	useEffect(() => {
		if (!showCountdown) return;
		const id = setInterval(
			() => setTimeLeft(getTimeLeft(countdownTarget)),
			1000,
		);
		return () => clearInterval(id);
	}, [showCountdown, countdownTarget]);

	return (
		<div className="bg-white pt-[48px] relative">
			{showTopWave && (
				<div aria-hidden className="absolute top-0 left-0 flex overflow-hidden h-[13px] w-full">
					{Array.from({ length: 10 }).map((_, i) => (
						<img key={`item-${i}`} src={imgWaveTop} alt="" className="w-[422px] h-[57px] shrink-0 block" />
					))}
				</div>
			)}
			<div className="cma-section-container">
				<div
					className={`${bg} rounded-[24px] border-2 border-black/5 flex flex-col sm:flex-row items-center gap-8 p-8 relative overflow-hidden`}
				>
					{/* Decorative rings */}
					<div
						aria-hidden
						className={`absolute pointer-events-none opacity-20 ${
							showCountdown
								? "right-[320px] top-[-115px] w-[511px] h-[581px]"
								: "right-[-60px] top-[-115px] w-[511px] h-[581px]"
						}`}
						style={{
							background:
								"radial-gradient(circle, transparent 38%, rgba(255,255,255,0.35) 39%, rgba(255,255,255,0.35) 44%, transparent 45%), radial-gradient(circle, transparent 55%, rgba(255,255,255,0.2) 56%, rgba(255,255,255,0.2) 62%, transparent 63%)",
						}}
					/>

					{/* Text content */}
					<motion.div
						className="flex-1 flex flex-col gap-8 relative z-[1]"
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-60px" }}
						transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
					>
						<p className="cma-eyebrow text-cma-blue-light">{eyebrow}</p>
						<h2 className="text-white leading-none tracking-[-1px]">
							{heading}
						</h2>
						<p className="text-cma-blue-light">{body}</p>
						<div className="flex flex-wrap gap-3">
							<a
								href={cta.href}
								className="cma-btn bg-white border-2 border-cma-navy text-cma-navy hover:bg-cma-blue-light font-black self-start"
							>
								{cta.label}
							</a>
							{secondaryCta && (
								<a
									href={secondaryCta.href}
									className="cma-btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-cma-navy font-black self-start"
								>
									{secondaryCta.label}
								</a>
							)}
						</div>
					</motion.div>

					{/* Countdown or CTA button */}
					{showCountdown ? (
						<div className="shrink-0 flex gap-2 w-full sm:w-[402px] relative z-[1]">
							<CountdownTile value={timeLeft.days} label="Days" delay={0.15} />
							<CountdownTile
								value={timeLeft.hours}
								label="Hours"
								delay={0.22}
							/>
							<CountdownTile
								value={timeLeft.minutes}
								label="Minutes"
								delay={0.29}
							/>
							<CountdownTile
								value={timeLeft.seconds}
								label="Seconds"
								delay={0.36}
							/>
						</div>
					) : showRightCta ? (
						<motion.div
							className="shrink-0 relative z-[1] hidden sm:block"
							initial={{ opacity: 0, x: 16 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: "-60px" }}
							transition={{
								duration: 0.7,
								ease: [0.16, 1, 0.3, 1],
								delay: 0.2,
							}}
						>
							<a
								href={cta.href}
								className="cma-btn bg-white border-2 border-cma-navy text-cma-navy hover:bg-cma-blue-light whitespace-nowrap"
							>
								{cta.label}
							</a>
						</motion.div>
					) : null}
				</div>
			</div>
		</div>
	);
}
