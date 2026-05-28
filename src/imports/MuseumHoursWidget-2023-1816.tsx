import { imgVector } from "./svg-roqsv";
import svgPaths from "./svg-v39bzij3d5";

function Icon1() {
	return (
		<div
			className="absolute contents inset-[8.33%_8.34%_8.33%_8.33%]"
			data-name="Icon"
		>
			<div
				className="absolute inset-[8.33%_8.34%_8.33%_8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.666px_-1.667px] mask-size-[20px_20px]"
				data-name="Vector"
				style={{ maskImage: `url('${imgVector}')` }}
			>
				<div className="absolute inset-[-5%]">
					<svg
						className="block size-full"
						fill="none"
						preserveAspectRatio="none"
						viewBox="0 0 18.3333 18.3333"
					>
						<path
							d={svgPaths.p33bc6180}
							id="Vector"
							stroke="var(--stroke-0, white)"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.66667"
						/>
					</svg>
				</div>
			</div>
			<div
				className="absolute bottom-[41.67%] left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10px_-5px] mask-size-[20px_20px] right-[33.33%] top-1/4"
				data-name="Vector"
				style={{ maskImage: `url('${imgVector}')` }}
			>
				<div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
					<svg
						className="block size-full"
						fill="none"
						preserveAspectRatio="none"
						viewBox="0 0 5.00015 8.33355"
					>
						<path
							d={svgPaths.p20611880}
							id="Vector"
							stroke="var(--stroke-0, white)"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.66667"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}

function ClipPathGroup() {
	return (
		<div className="absolute contents inset-0" data-name="Clip path group">
			<Icon1 />
		</div>
	);
}

function Icon() {
	return (
		<div
			className="h-[20px] overflow-clip relative shrink-0 w-full"
			data-name="Icon"
		>
			<ClipPathGroup />
		</div>
	);
}

function Container3() {
	return (
		<div
			className="absolute content-stretch flex flex-col items-start left-[10px] size-[20px] top-[10px]"
			data-name="Container"
		>
			<Icon />
		</div>
	);
}

function Container2() {
	return (
		<div
			className="absolute bg-[#f7941e] left-[16px] rounded-[16777200px] size-[40px] top-[12px]"
			data-name="Container"
		>
			<Container3 />
		</div>
	);
}

function Paragraph() {
	return (
		<div className="h-[16px] relative shrink-0 w-[281px]" data-name="Paragraph">
			<div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
				<p className="absolute font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[16px] left-0 text-[#1b3d6d] text-[12px] top-[-0.5px] whitespace-nowrap">
					Opening Times Today
				</p>
			</div>
		</div>
	);
}

function Paragraph1() {
	return (
		<div
			className="flex-[1_0_0] min-h-px min-w-px relative w-[281px]"
			data-name="Paragraph"
		>
			<div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
				<p className="absolute font-['Quicksand:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#f7941e] text-[14px] top-0 whitespace-nowrap">
					Members 9-10 AM | General 10 AM-3:30 PM
				</p>
			</div>
		</div>
	);
}

function Container4() {
	return (
		<div
			className="absolute content-stretch flex flex-col gap-[2px] h-[38px] items-start left-[68px] top-[13px] w-[281px]"
			data-name="Container"
		>
			<Paragraph />
			<Paragraph1 />
		</div>
	);
}

function Icon3() {
	return (
		<div
			className="absolute bottom-[37.5%] contents left-1/4 right-1/4 top-[37.5%]"
			data-name="Icon"
		>
			<div
				className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]"
				data-name="Vector"
			>
				<div className="absolute inset-[-16.67%_-8.33%]">
					<svg
						className="block size-full"
						fill="none"
						preserveAspectRatio="none"
						viewBox="0 0 11.6667 6.66667"
					>
						<path
							d={svgPaths.paa1e700}
							id="Vector"
							stroke="var(--stroke-0, #1B3D6D)"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.66667"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}

function Icon2() {
	return (
		<div
			className="h-[20px] overflow-clip relative shrink-0 w-full"
			data-name="Icon"
		>
			<Icon3 />
		</div>
	);
}

function Container6() {
	return (
		<div
			className="absolute content-stretch flex flex-col items-start left-0 size-[20px] top-0"
			data-name="Container"
		>
			<Icon2 />
		</div>
	);
}

function Container5() {
	return (
		<div
			className="absolute left-[361px] size-[20px] top-[22px]"
			data-name="Container"
		>
			<Container6 />
		</div>
	);
}

function Container1() {
	return (
		<div
			className="flex-[1_0_0] min-h-px min-w-px relative w-[397px]"
			data-name="Container"
		>
			<div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
				<Container2 />
				<Container4 />
				<Container5 />
			</div>
		</div>
	);
}

function Container() {
	return (
		<div
			className="bg-white content-stretch flex flex-col h-[64px] items-start relative rounded-[16px] shadow-[0px_4px_20px_0px_rgba(247,148,30,0.15)] shrink-0 w-full"
			data-name="Container"
		>
			<Container1 />
		</div>
	);
}

function Button() {
	return (
		<div
			className="flex-[1_0_0] min-h-px min-w-px relative w-[397px]"
			data-name="Button"
		>
			<div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
				<Container />
			</div>
		</div>
	);
}

export default function MuseumHoursWidget() {
	return (
		<div
			className="content-stretch flex flex-col items-start relative size-full"
			data-name="MuseumHoursWidget"
		>
			<Button />
		</div>
	);
}
