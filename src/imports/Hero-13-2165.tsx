import imgHero from "figma:asset/5e9e706a4edd098b94b55ffc8289a25c57fcd860.webp";
import svgPaths from "./svg-0zn5cqfzv6";

function Frame1() {
	return (
		<div className="content-stretch flex gap-[12px] items-start pt-[50px] relative shrink-0">
			<div
				className="bg-[#f7941e] content-stretch flex items-center justify-center overflow-clip px-[34px] py-[22px] relative rounded-[1000px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0"
				data-name="CTA"
			>
				<p className="font-['Nunito:Bold',sans-serif] font-bold leading-[1.13] relative shrink-0 text-[24px] text-white whitespace-nowrap">
					Buy Tickets
				</p>
			</div>
			<div
				className="bg-[#00adbb] content-stretch flex items-center justify-center overflow-clip px-[34px] py-[22px] relative rounded-[1000px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0"
				data-name="CTA"
			>
				<p className="font-['Nunito:Bold',sans-serif] font-bold leading-[1.13] relative shrink-0 text-[24px] text-white whitespace-nowrap">
					Memberships
				</p>
			</div>
		</div>
	);
}

function Frame() {
	return (
		<div className="content-stretch flex flex-col gap-[50px] items-start justify-center relative shrink-0">
			<div
				className="absolute flex h-[23.397px] items-center justify-center left-[0.11px] top-[252.48px] w-[586.45px]"
				style={
					{
						"--transform-inner-width": "1200",
						"--transform-inner-height": "19",
					} as React.CSSProperties
				}
			>
				<div className="flex-none skew-x-[-0.18deg]">
					<div
						className="h-[23.397px] relative w-[586.377px]"
						data-name="eVTOJl2v6Zp43"
					>
						<div className="absolute inset-[-12.82%_-0.51%]">
							<svg
								className="block size-full"
								fill="none"
								preserveAspectRatio="none"
								viewBox="0 0 592.377 29.397"
							>
								<path
									d={svgPaths.p3115e280}
									id="eVTOJl2v6Zp43"
									stroke="var(--stroke-0, #FBB040)"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="6"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
			<div
				className="absolute flex h-[22.397px] items-center justify-center left-[0.11px] top-[370.48px] w-[586.447px]"
				style={
					{
						"--transform-inner-width": "1200",
						"--transform-inner-height": "19",
					} as React.CSSProperties
				}
			>
				<div className="flex-none skew-x-[-0.18deg]">
					<div
						className="h-[22.397px] relative w-[586.377px]"
						data-name="eVTOJl2v6Zp43"
					>
						<div className="absolute inset-[-13.39%_-0.51%]">
							<svg
								className="block size-full"
								fill="none"
								preserveAspectRatio="none"
								viewBox="0 0 592.377 28.397"
							>
								<path
									d={svgPaths.p2cd2f180}
									id="eVTOJl2v6Zp43"
									stroke="var(--stroke-0, #00ADBB)"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="6"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
			<p className="font-['Nunito:Bold',sans-serif] font-bold leading-none opacity-90 relative shrink-0 text-[92px] text-white w-[581px]">
				Experience Possibility Through Play
			</p>
			<div className="flex flex-col font-['Nunito:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]">
				<p className="leading-[1.6]">{`Welcome to a world of hands-on exploration & discovery that sparks imagination & inspires learning.`}</p>
			</div>
			<Frame1 />
			<div className="absolute flex h-[64px] items-center justify-center left-0 top-[522px] w-[48px]">
				<div className="flex-none rotate-180">
					<div className="h-[64px] relative w-[48px]" data-name="Vector">
						<div className="absolute inset-[-1.17%_-1.56%]">
							<svg
								className="block size-full"
								fill="none"
								preserveAspectRatio="none"
								viewBox="0 0 49.5 65.5"
							>
								<path
									d={svgPaths.p39a6b100}
									id="Vector"
									stroke="var(--stroke-0, white)"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function Icon() {
	return (
		<div className="relative shrink-0 size-[20px]" data-name="Icon">
			<svg
				className="absolute block size-full"
				fill="none"
				preserveAspectRatio="none"
				viewBox="0 0 20 20"
			>
				<g clipPath="url(#clip0_12_857)" id="Icon">
					<path
						d={svgPaths.p14d24500}
						id="Vector"
						stroke="var(--stroke-0, white)"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1.66667"
					/>
					<path
						d="M10 5V10L13.3333 11.6667"
						id="Vector_2"
						stroke="var(--stroke-0, white)"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1.66667"
					/>
				</g>
				<defs>
					<clipPath id="clip0_12_857">
						<rect fill="white" height="20" width="20" />
					</clipPath>
				</defs>
			</svg>
		</div>
	);
}

function Container1() {
	return (
		<div
			className="bg-[#f7941e] relative rounded-[16777200px] shrink-0 size-[40px]"
			data-name="Container"
		>
			<div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
				<Icon />
			</div>
		</div>
	);
}

function Container3() {
	return (
		<div className="h-[16px] relative shrink-0 w-full" data-name="Container">
			<p className="absolute font-['Nunito:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#1d3e6b] text-[12px] text-left top-[-0.5px] whitespace-nowrap">
				Opening Times Today
			</p>
		</div>
	);
}

function Container4() {
	return (
		<div
			className="h-[20px] overflow-clip relative shrink-0 w-full"
			data-name="Container"
		>
			<p className="absolute font-['Nunito:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#f7941e] text-[14px] text-left top-0 whitespace-nowrap">
				Members 9-10 AM | General 10 AM-3:30 PM
			</p>
		</div>
	);
}

function Container2() {
	return (
		<div
			className="flex-[1_0_0] h-[38px] min-h-px min-w-px relative"
			data-name="Container"
		>
			<div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
				<Container3 />
				<Container4 />
			</div>
		</div>
	);
}

function Icon1() {
	return (
		<div className="relative size-[20px]" data-name="Icon">
			<svg
				className="absolute block size-full"
				fill="none"
				preserveAspectRatio="none"
				viewBox="0 0 20 20"
			>
				<g id="Icon">
					<path
						d="M5 7.5L10 12.5L15 7.5"
						id="Vector"
						stroke="var(--stroke-0, #1B3D6D)"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1.66667"
					/>
				</g>
			</svg>
		</div>
	);
}

function Container() {
	return (
		<div
			className="content-stretch flex gap-[12px] h-[64px] items-center px-[16px] relative shrink-0 w-[397.266px]"
			data-name="Container"
		>
			<Container1 />
			<Container2 />
			<div className="flex items-center justify-center relative shrink-0">
				<div className="flex-none rotate-180">
					<Icon1 />
				</div>
			</div>
		</div>
	);
}

function Button() {
	return (
		<div
			className="bg-white content-stretch flex flex-col items-start relative rounded-[16px] shadow-[0px_4px_20px_0px_rgba(247,148,30,0.15)] shrink-0 w-full"
			data-name="Button"
		>
			<Container />
		</div>
	);
}

export default function Hero() {
	return (
		<div
			className="content-stretch flex flex-col items-start justify-center px-[60px] py-[140px] relative size-full"
			data-name="hero"
		>
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<img
					alt=""
					className="absolute h-[155.41%] left-0 max-w-none top-[-4.81%] w-[127.92%]"
					src={imgHero}
				/>
			</div>
			<Frame />
			<button
				className="absolute content-stretch cursor-pointer flex flex-col gap-[12px] h-[64px] items-start right-[30px] top-[30.48px] w-[397px]"
				data-name="MuseumHours"
			>
				<Button />
			</button>
			<div className="absolute left-[75px] size-[18px] top-[743.48px]">
				<svg
					className="absolute block size-full"
					fill="none"
					preserveAspectRatio="none"
					viewBox="0 0 18 18"
				>
					<circle
						cx="9"
						cy="9"
						fill="var(--fill-0, #FBB040)"
						fillOpacity="0.7"
						id="Ellipse 33"
						r="9"
					/>
				</svg>
			</div>
		</div>
	);
}
