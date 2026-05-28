import svgPaths from "./svg-akfmgxmoo7";

function Group() {
	return (
		<div className="absolute inset-[12.5%]" data-name="Group">
			<div className="absolute inset-[-3.61%]">
				<svg
					className="block size-full"
					fill="none"
					preserveAspectRatio="none"
					viewBox="0 0 19.3 19.3"
				>
					<g id="Group">
						<path
							d={svgPaths.p23a8bb70}
							id="Vector"
							stroke="var(--stroke-0, white)"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.3"
						/>
						<path
							d="M8.65 5.65V10.65H13.65"
							id="Vector_2"
							stroke="var(--stroke-0, white)"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.3"
						/>
					</g>
				</svg>
			</div>
		</div>
	);
}

function IconamoonClockBold() {
	return (
		<div
			className="overflow-clip relative shrink-0 size-[24px]"
			data-name="iconamoon:clock-bold"
		>
			<Group />
		</div>
	);
}

function Frame1() {
	return (
		<div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
			<IconamoonClockBold />
			<p className="font-['Nunito:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">
				Today’s Hours: 10:00am-3:30pm
			</p>
		</div>
	);
}

function Frame2() {
	return (
		<div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
			<div
				className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[24px]"
				data-name="Communication / Phone"
			>
				<div className="absolute inset-[12.5%]" data-name="Vector">
					<div className="absolute inset-[-3.61%]">
						<svg
							className="block size-full"
							fill="none"
							preserveAspectRatio="none"
							viewBox="0 0 19.3005 19.3"
						>
							<path
								d={svgPaths.p1e127a00}
								id="Vector"
								stroke="var(--stroke-0, white)"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.3"
							/>
						</svg>
					</div>
				</div>
			</div>
			<p className="font-['Nunito:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">
				404.659.5437
			</p>
		</div>
	);
}

function Frame4() {
	return (
		<div className="content-stretch flex gap-[24px] items-center relative shrink-0">
			<Frame1 />
			<Frame2 />
		</div>
	);
}

function Frame() {
	return (
		<div className="relative shrink-0 size-[28px]">
			<svg
				className="absolute block size-full"
				fill="none"
				preserveAspectRatio="none"
				viewBox="0 0 28 28"
			>
				<g id="Frame 3">
					<rect fill="var(--fill-0, #F9F9FB)" height="28" rx="14" width="28" />
					<path
						d={svgPaths.p301eb200}
						id="Vector"
						stroke="var(--stroke-0, #1D3E6B)"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1.61437"
					/>
				</g>
			</svg>
		</div>
	);
}

function Frame5() {
	return (
		<div className="relative shrink-0 size-[28px]">
			<svg
				className="absolute block size-full"
				fill="none"
				preserveAspectRatio="none"
				viewBox="0 0 28 28"
			>
				<g id="Frame 39915">
					<g clipPath="url(#clip0_10_285)">
						<rect fill="var(--fill-0, white)" height="28" rx="14" width="28" />
						<path
							d={svgPaths.p22999680}
							fill="var(--fill-0, #F7941E)"
							id="Vector"
						/>
					</g>
				</g>
				<defs>
					<clipPath id="clip0_10_285">
						<rect fill="white" height="28" rx="14" width="28" />
					</clipPath>
				</defs>
			</svg>
		</div>
	);
}

function Frame6() {
	return (
		<div className="content-stretch flex gap-[6.038px] items-center relative shrink-0">
			<Frame />
			<Frame5 />
		</div>
	);
}

function Frame3() {
	return (
		<div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
			<p className="font-['Nunito:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">
				Membership Portal
			</p>
			<Frame6 />
		</div>
	);
}

export default function HelloBar() {
	return (
		<div
			className="bg-[#00adbb] content-stretch flex items-center justify-between px-[20px] py-[10px] relative size-full"
			data-name="Hello Bar"
		>
			<Frame4 />
			<Frame3 />
		</div>
	);
}
