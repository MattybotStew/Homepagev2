import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";

const tiers = [
	{ name: "Explorer", price: "$7,000" },
	{ name: "Inventor", price: "$13,000" },
	{ name: "Achiever", price: "$25,000" },
	{ name: "Patron", price: "$55,000" },
	{ name: "Champion", price: "$100,000" },
];

type Cell = "check" | null | string;

const employeeRows: { label: string; sub?: string; cells: Cell[] }[] = [
	{
		label: "One year of free admission",
		sub: "For 2 adults & 4 children",
		cells: ["50 families", "100 families", "200 families", "500 families", "1,000 families"],
	},
	{
		label: "50% off 2 tickets per visit",
		cells: ["check", "check", "check", "check", "check"],
	},
];

const companyRows: { label: string; sub?: string; cells: Cell[] }[] = [
	{
		label: "Recognition on website",
		sub: "And in annual report",
		cells: ["check", "check", "check", "check", "check"],
	},
	{
		label: "Museum buy-out discount",
		cells: [null, "10%", "15%", "20%", "25%"],
	},
	{
		label: "2 complimentary on-site",
		sub: "Family workshops",
		cells: [null, null, "check", "check", "check"],
	},
	{
		label: "Opportunity to",
		sub: "Sponsor 1 field trip",
		cells: [null, null, null, "check", "check"],
	},
	{
		label: "1 complimentary",
		sub: "After-hours reception",
		cells: [null, null, null, "check", "check"],
	},
	{
		label: "Recognition in",
		sub: "Museum lobby",
		cells: [null, null, null, null, "check"],
	},
	{
		label: "Priority access to major",
		sub: "Sponsorship opportunities",
		cells: [null, null, null, null, "check"],
	},
];

function Check() {
	return <FontAwesomeIcon icon={faCircleCheck} className="text-cma-orange text-[20px]" />;
}

function SectionHeader({ label, color }: { label: string; color: string }) {
	return (
		<tr>
			<td colSpan={6} className={`pt-[28px] pb-[10px] px-[16px] ${color} font-extrabold text-[13px] uppercase tracking-[1.5px]`}>
				{label}
			</td>
		</tr>
	);
}

function Row({ label, sub, cells, striped }: { label: string; sub?: string; cells: Cell[]; striped: boolean }) {
	return (
		<tr className={striped ? "bg-cma-cream/50" : "bg-white"}>
			<td className="py-[16px] px-[16px] min-w-[200px] align-middle">
				<p className="font-semibold text-[14px] text-cma-navy leading-[1.3]">{label}</p>
				{sub && <p className="text-[13px] text-cma-navy/60 leading-[1.3]">{sub}</p>}
			</td>
			{cells.map((cell, i) => (
				<td key={i} className="py-[16px] px-[16px] text-center align-middle min-w-[100px]">
					{cell === "check" ? (
						<Check />
					) : cell ? (
						<span className="font-bold text-[14px] text-cma-navy">{cell}</span>
					) : (
						<span className="text-cma-navy/20 text-[18px]">—</span>
					)}
				</td>
			))}
		</tr>
	);
}

export default function MembershipPlanTable() {
	return (
		<section id="plan-table" className="bg-white w-full py-[80px] md:py-[120px]">
			<div className="cma-section-container flex flex-col gap-[48px]">
				<motion.h2
					className="text-cma-navy text-center"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
				>
					Compare Plan Features Table
				</motion.h2>

				<motion.div
					className="overflow-x-auto rounded-[20px] border border-black/8"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
				>
					<table className="w-full border-collapse text-left">
						{/* Column headers */}
						<thead>
							<tr className="border-b border-black/8">
								<th className="py-[20px] px-[16px] min-w-[200px]" />
								{tiers.map((tier) => (
									<th key={tier.name} className="py-[20px] px-[16px] text-center min-w-[100px]">
										<p className="font-extrabold text-[14px] text-cma-navy leading-[1.2]">{tier.name}</p>
										<p className="font-semibold text-[13px] text-cma-navy/50 leading-[1.4]">{tier.price}</p>
									</th>
								))}
							</tr>
						</thead>

						<tbody>
							{/* Employee benefits */}
							<SectionHeader label="Employee benefits" color="text-cma-teal-dark" />
							{employeeRows.map((row, i) => (
								<Row key={row.label} {...row} striped={i % 2 === 1} />
							))}

							{/* Company benefits */}
							<SectionHeader label="Company benefits" color="text-cma-orange-dark" />
							{companyRows.map((row, i) => (
								<Row key={row.label} {...row} striped={i % 2 === 1} />
							))}
						</tbody>
					</table>
				</motion.div>
			</div>
		</section>
	);
}
