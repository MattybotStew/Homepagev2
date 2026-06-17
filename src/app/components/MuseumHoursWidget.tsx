import { useState } from "react";
import svgPaths from "../../imports/svg-h8ieio7v8a";

function ClockIcon() {
	return (
		<div className="bg-cma-orange rounded-full shrink-0 size-[37px] flex items-center justify-center">
			<svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
				<g clipPath="url(#clip-clock)">
					<path
						d={svgPaths.p14d24500}
						stroke="white"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1.66667"
					/>
					<path
						d="M10 5V10L13.3333 11.6667"
						stroke="white"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1.66667"
					/>
				</g>
				<defs>
					<clipPath id="clip-clock">
						<rect fill="white" height="20" width="20" />
					</clipPath>
				</defs>
			</svg>
		</div>
	);
}

function ChevronIcon({ up }: { up?: boolean }) {
	return (
		<svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
			<path
				d={up ? "M15 12.5L10 7.5L5 12.5" : "M5 7.5L10 12.5L15 7.5"}
				stroke="#1B3D6D"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.66667"
			/>
		</svg>
	);
}

function TriggerRow({ isExpanded }: { isExpanded: boolean }) {
	return (
		<div className="flex items-center gap-[16px] w-full">
			<ClockIcon />
			<div className="flex-1 min-w-0 flex flex-col gap-[2px]">
				<p className="font-black text-[12px] text-cma-navy leading-[1.3]">
					Opening Times Today
				</p>
				<p className="font-medium text-[12px] text-cma-teal-dark leading-[1.3] whitespace-nowrap overflow-hidden text-ellipsis">
					Mon–Fri 10 am–3:30 pm | Sat–Sun 9:30 am–4:30 pm
				</p>
			</div>
			<ChevronIcon up={isExpanded} />
		</div>
	);
}

export default function MuseumHoursWidget() {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div
			className={`bg-white shadow-cma-warm w-full transition-[border-radius] duration-300 ${isExpanded ? "rounded-[24px]" : "rounded-[16px]"}`}
		>
			{/* Outer wrapper provides padding + gap matching Figma open1 container */}
			<div className={`flex flex-col px-[12px] py-[8px] ${isExpanded ? "gap-[16px]" : ""}`}>
				{/* Trigger */}
				<button
					className="flex items-center gap-[16px] w-full cursor-pointer"
					onClick={() => setIsExpanded(!isExpanded)}
					aria-expanded={isExpanded}
				>
					<TriggerRow isExpanded={isExpanded} />
				</button>

				{/* Expanded panel */}
				{isExpanded && (
					<div className="bg-white rounded-[16px] shadow-[0px_10px_40px_0px_rgba(0,0,0,0.15)] overflow-hidden cma-slide-down">
						<div className="p-[20px] flex flex-col">
							<p className="font-black text-[15px] text-cma-navy [text-box-trim:trim-both] [text-box-edge:cap_alphabetic] pb-[16px]">
								Museum Hours
							</p>

							<div className="bg-cma-cream rounded-[8px] px-[16px] py-[16px] flex flex-col gap-[10px]">
								<p className="text-[12px] font-black text-cma-navy text-center [text-box-trim:trim-both] [text-box-edge:cap_alphabetic]">
									Weekday Hours: Mon, Tue, Thu &amp; Fri
								</p>
								<div className="bg-white rounded-[10px] py-[10px] px-[14px] flex flex-col items-center gap-[4px]">
									<p className="font-black text-[12px] text-cma-navy [text-box-trim:trim-both] [text-box-edge:cap_alphabetic]">
										General Admission
									</p>
									<p className="font-medium text-[12px] text-cma-teal-dark [text-box-trim:trim-both] [text-box-edge:cap_alphabetic]">
										10:00 am – 3:30 pm
									</p>
								</div>

								<p className="text-[12px] font-black text-cma-navy text-center [text-box-trim:trim-both] [text-box-edge:cap_alphabetic]">
									Weekend Hours: Saturday &amp; Sunday
								</p>
								<div className="bg-white rounded-[10px] py-[10px] px-[14px] flex flex-col items-center gap-[4px]">
									<p className="font-black text-[12px] text-cma-navy [text-box-trim:trim-both] [text-box-edge:cap_alphabetic]">
										Open to All
									</p>
									<p className="font-medium text-[12px] text-cma-teal-dark [text-box-trim:trim-both] [text-box-edge:cap_alphabetic]">
										9:30 am – 4:30 pm
									</p>
								</div>

								<p className="text-[12px] font-black text-cma-navy text-center [text-box-trim:trim-both] [text-box-edge:cap_alphabetic]">
									Closed Wednesdays
								</p>

								<a
									href="https://16707.blackbaudhosting.com/16707/page.aspx?pid=196&tab=2&txobjid=56fa665e-15d9-4500-9b27-c1c2c0b2c6bf"
									target="_blank"
									rel="noopener noreferrer"
									className="bg-cma-teal hover:bg-cma-teal-dark transition-colors rounded-[1000px] w-full flex items-center justify-center px-[28px] py-[14px]"
								>
									<p className="font-black text-[15px] text-white [text-box-trim:trim-both] [text-box-edge:cap_alphabetic] whitespace-nowrap">
										Buy Tickets
									</p>
								</a>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
