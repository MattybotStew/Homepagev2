import { motion } from "motion/react";
import imgCutCMA from "../../assets/cutCMA.png";

type Stat = { value: string; orange?: boolean };
type Cta = { label: string; href: string; variant: "orange" | "outline" };

type GivingHeroProps = {
	eyebrow?: string;
	heading: string;
	subtitle?: string;
	body?: string;
	stats?: Stat[];
	ctas?: Cta[];
};

export default function GivingHero({
	eyebrow = "children's museum of atlanta",
	heading,
	subtitle,
	body,
	stats = [],
	ctas = [],
}: GivingHeroProps) {
	return (
		<section
			aria-label="Hero"
			className="relative w-full bg-cma-navy overflow-hidden flex flex-col items-center justify-center py-[80px] md:py-[120px]"
		>
			<img
				src={imgCutCMA}
				alt=""
				aria-hidden
				className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] opacity-15 pointer-events-none select-none object-contain object-bottom"
			/>

			<div className="shrink-0 h-0 lg:h-[120px] xl:h-[126px]" />

			<div className="cma-section-container relative z-[1] flex flex-col items-center gap-8">
				<motion.div
					className="flex flex-col items-center gap-8 text-center max-w-[800px] mx-auto w-full"
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
				>
					<p className="cma-eyebrow text-cma-teal">{eyebrow}</p>

					<h1 className="text-white">{heading}</h1>

					{subtitle && (
						<p className="font-semibold text-[clamp(16px,1.67vw,24px)] text-cma-blue-light leading-[1.4] tracking-[-0.5px] max-w-[620px]">
							{subtitle}
						</p>
					)}

					{body && (
						<p className="text-white/80 text-[14px] leading-[1.65] max-w-[560px]">
							{body}
						</p>
					)}

					{ctas.length > 0 && (
						<div className="flex flex-col sm:flex-row gap-3">
							{ctas.map((cta) => (
								<a
									key={cta.label}
									href={cta.href}
									className={
										cta.variant === "orange"
											? "cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
											: "cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:border-cma-teal-dark hover:text-white hover:drop-shadow-[0px_3px_4px_rgba(0,0,0,0.12)] font-black"
									}
								>
									{cta.label}
								</a>
							))}
						</div>
					)}
				</motion.div>

				</div>

			<p className="relative z-[1] text-white/50 text-[12px] text-center leading-[1.6] max-w-[560px] mx-auto px-5 mt-8">
				All gifts are tax-deductible to the fullest extent allowed by law. The Museum is a 501(c)(3) tax-exempt organization. Our tax-ID number is 58-1785484.
			</p>
		</section>
	);
}
