import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import type { ReactNode } from "react";

interface GridEmptyStateProps {
	eyebrow?: string;
	heading: string;
	body: string;
	icon?: IconDefinition;
	children?: ReactNode;
}

export default function GridEmptyState({
	eyebrow,
	heading,
	body,
	icon = faCalendarDays,
	children,
}: GridEmptyStateProps) {
	return (
		<motion.div
			className="col-span-full"
			initial={{ opacity: 0, y: 16 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
		>
			<div className="relative overflow-hidden bg-cma-cream border-2 border-black/5 rounded-[24px] px-[24px] py-[48px] md:px-[48px] md:py-[64px] flex flex-col items-center text-center gap-[16px]">
				<div
					aria-hidden
					className="absolute top-[12%] left-[6%] w-[72px] h-[72px] md:w-[96px] md:h-[96px] rounded-full bg-cma-orange/10 pointer-events-none"
				/>
				<div
					aria-hidden
					className="absolute bottom-[18%] right-[8%] w-[56px] h-[56px] md:w-[72px] md:h-[72px] rounded-full bg-cma-teal/10 pointer-events-none"
				/>
				<div
					aria-hidden
					className="absolute top-[22%] right-[14%] w-[36px] h-[36px] rounded-full bg-cma-teal-light/15 pointer-events-none"
				/>

				<div className="relative flex items-center justify-center w-[72px] h-[72px] rounded-full bg-cma-teal-pale shrink-0">
					<FontAwesomeIcon
						icon={icon}
						className="text-cma-teal-dark text-[28px]"
						aria-hidden
					/>
				</div>

				{eyebrow && (
					<p className="cma-eyebrow text-cma-orange relative">{eyebrow}</p>
				)}

				<h3 className="text-cma-navy relative">{heading}</h3>

				<p className="text-cma-navy/80 max-w-[440px] relative">{body}</p>

				{children && (
					<div className="relative flex flex-wrap gap-[10px] justify-center pt-[4px]">
						{children}
					</div>
				)}
			</div>
		</motion.div>
	);
}
