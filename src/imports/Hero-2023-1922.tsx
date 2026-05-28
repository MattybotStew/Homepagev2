import imgImage from "figma:asset/5e9e706a4edd098b94b55ffc8289a25c57fcd860.webp";
import { imgVector } from "./svg-v7gnn";
import svgPaths from "./svg-xgubjcarj5";

function Image() {
	return (
		<div
			className="absolute h-[766.797px] left-0 top-0 w-[1440px]"
			data-name="Image"
		>
			<img
				alt=""
				className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
				src={imgImage}
			/>
		</div>
	);
}

function Text() {
	return (
		<div className="h-[105.594px] relative shrink-0 w-full" data-name="Text">
			<p className="absolute font-['Nunito:Black',sans-serif] font-black leading-[105.6px] left-0 text-[96px] text-white top-0 whitespace-nowrap">
				Experience
			</p>
		</div>
	);
}

function Hero2() {
	return (
		<div
			className="h-[24.863px] overflow-clip relative shrink-0 w-full"
			data-name="Hero"
		>
			<div className="absolute inset-[30%_0]" data-name="Vector">
				<div className="absolute inset-[-25%_-1%]">
					<svg
						className="block size-full"
						fill="none"
						preserveAspectRatio="none"
						viewBox="0 0 253.6 14.9175"
					>
						<path
							d={svgPaths.p1bde4d00}
							id="Vector"
							stroke="var(--stroke-0, #F7941E)"
							strokeLinecap="round"
							strokeWidth="4.97252"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}

function Text2() {
	return (
		<div
			className="absolute content-stretch flex flex-col h-[24.863px] items-start left-[474.45px] top-[40.37px] w-[248.626px]"
			data-name="Text"
		>
			<Hero2 />
		</div>
	);
}

function Text1() {
	return (
		<div className="h-[105.594px] relative shrink-0 w-full" data-name="Text">
			<p className="absolute font-['Nunito:Black',sans-serif] font-black leading-[105.6px] left-0 text-[96px] text-white top-0 whitespace-nowrap">
				Possibility
			</p>
			<Text2 />
		</div>
	);
}

function Hero3() {
	return (
		<div
			className="h-[25.668px] overflow-clip relative shrink-0 w-full"
			data-name="Hero"
		>
			<div className="absolute inset-[30%_0]" data-name="Vector">
				<div className="absolute inset-[-25%_-1%]">
					<svg
						className="block size-full"
						fill="none"
						preserveAspectRatio="none"
						viewBox="0 0 261.813 15.4006"
					>
						<path
							d={svgPaths.pbf57440}
							id="Vector"
							stroke="var(--stroke-0, #00ADBD)"
							strokeLinecap="round"
							strokeWidth="5.13355"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}

function Text4() {
	return (
		<div
			className="absolute content-stretch flex flex-col h-[25.668px] items-start left-[-12.34px] top-[102.76px] w-[256.678px]"
			data-name="Text"
		>
			<Hero3 />
		</div>
	);
}

function Text3() {
	return (
		<div className="h-[125.594px] relative shrink-0 w-full" data-name="Text">
			<p className="absolute font-['Nunito:Black',sans-serif] font-black leading-[105.6px] left-0 text-[96px] text-white top-0 whitespace-nowrap">
				Through Play
			</p>
			<Text4 />
		</div>
	);
}

function Hero1() {
	return (
		<div
			className="flex-[1_0_0] min-h-px min-w-px relative w-[700px]"
			data-name="Hero"
		>
			<div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
				<Text />
				<Text1 />
				<Text3 />
			</div>
		</div>
	);
}

function Paragraph() {
	return (
		<div
			className="h-[58.5px] relative shrink-0 w-[600px]"
			data-name="Paragraph"
		>
			<div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
				<p className="absolute font-['Nunito:Regular',sans-serif] font-normal leading-[29.25px] left-0 text-[18px] text-white top-[-1px] w-[555px]">{`Welcome to a world of hands-on exploration & discovery that sparks imagination & inspires learning.`}</p>
			</div>
		</div>
	);
}

function Hero4() {
	return (
		<div className="h-[31.109px] relative shrink-0 w-full" data-name="Hero">
			<p className="-translate-x-1/2 absolute font-['Nunito:Bold',sans-serif] font-bold leading-[31.111px] left-[54.5px] text-[20px] text-center text-white top-0 whitespace-nowrap">
				Buy Tickets
			</p>
		</div>
	);
}

function Button() {
	return (
		<div
			className="bg-[#f7941e] h-[79.109px] relative rounded-[16777200px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 w-[188.102px]"
			data-name="Button"
		>
			<div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] px-[40px] relative size-full">
				<Hero4 />
			</div>
		</div>
	);
}

function Hero5() {
	return (
		<div className="h-[31.109px] relative shrink-0 w-full" data-name="Hero">
			<p className="-translate-x-1/2 absolute font-['Nunito:Bold',sans-serif] font-bold leading-[31.111px] left-[62.5px] text-[20px] text-center text-white top-0 whitespace-nowrap">
				Memberships
			</p>
		</div>
	);
}

function Button1() {
	return (
		<div
			className="bg-[#00adbb] flex-[1_0_0] h-[79.109px] min-h-px min-w-px relative rounded-[16777200px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
			data-name="Button"
		>
			<div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] px-[40px] relative size-full">
				<Hero5 />
			</div>
		</div>
	);
}

function Container2() {
	return (
		<div
			className="h-[79.109px] relative shrink-0 w-[408.742px]"
			data-name="Container"
		>
			<div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
				<Button />
				<Button1 />
			</div>
		</div>
	);
}

function Container1() {
	return (
		<div
			className="h-[574.391px] relative shrink-0 w-[700px]"
			data-name="Container"
		>
			<div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[50px] items-start relative size-full">
				<Hero1 />
				<Paragraph />
				<Container2 />
			</div>
		</div>
	);
}

function Container() {
	return (
		<div
			className="absolute content-stretch flex flex-col h-[766.797px] items-start justify-center left-0 pl-[60px] py-[96.203px] top-0 w-[1440px]"
			data-name="Container"
		>
			<Container1 />
		</div>
	);
}

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

function Container6() {
	return (
		<div
			className="absolute content-stretch flex flex-col items-start left-[10px] size-[20px] top-[10px]"
			data-name="Container"
		>
			<Icon />
		</div>
	);
}

function Container5() {
	return (
		<div
			className="absolute bg-[#f7941e] left-[16px] rounded-[16777200px] size-[40px] top-[12px]"
			data-name="Container"
		>
			<Container6 />
		</div>
	);
}

function Paragraph1() {
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

function Paragraph2() {
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

function Container7() {
	return (
		<div
			className="absolute content-stretch flex flex-col gap-[2px] h-[38px] items-start left-[68px] top-[13px] w-[281px]"
			data-name="Container"
		>
			<Paragraph1 />
			<Paragraph2 />
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

function Container9() {
	return (
		<div
			className="absolute content-stretch flex flex-col items-start left-0 size-[20px] top-0"
			data-name="Container"
		>
			<Icon2 />
		</div>
	);
}

function Container8() {
	return (
		<div
			className="absolute left-[361px] size-[20px] top-[22px]"
			data-name="Container"
		>
			<Container9 />
		</div>
	);
}

function Container4() {
	return (
		<div
			className="flex-[1_0_0] min-h-px min-w-px relative w-[397px]"
			data-name="Container"
		>
			<div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
				<Container5 />
				<Container7 />
				<Container8 />
			</div>
		</div>
	);
}

function Container3() {
	return (
		<div
			className="bg-white content-stretch flex flex-col h-[64px] items-start relative rounded-[16px] shadow-[0px_4px_20px_0px_rgba(247,148,30,0.15)] shrink-0 w-full"
			data-name="Container"
		>
			<Container4 />
		</div>
	);
}

function Button2() {
	return (
		<div
			className="flex-[1_0_0] min-h-px min-w-px relative w-[397px]"
			data-name="Button"
		>
			<div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
				<Container3 />
			</div>
		</div>
	);
}

function MuseumHoursWidget() {
	return (
		<div
			className="absolute content-stretch flex flex-col h-[64px] items-start left-[1013px] top-[30px] w-[397px]"
			data-name="MuseumHoursWidget"
		>
			<Button2 />
		</div>
	);
}

export default function Hero() {
	return (
		<div className="relative size-full" data-name="Hero">
			<Image />
			<Container />
			<MuseumHoursWidget />
		</div>
	);
}
