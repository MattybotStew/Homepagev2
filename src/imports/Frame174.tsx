import svgPaths from "./svg-i3vshioha";

export default function Frame() {
	return (
		<div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
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
