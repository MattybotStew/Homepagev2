import { motion } from "motion/react";
import { useState } from "react";
import imgWaveWhite from "../../assets/wave-white.svg";

type Person = { name: string; detail: string };

const boardOfDirectors: Person[] = [
	{ name: "Heather Balkema", detail: "Board Chair · North Highland" },
	{
		name: "Serena Levy",
		detail: "Immediate Past Chair · Southern Company Gas",
	},
	{ name: "Dr. Seema Csukas", detail: "Secretary · Community Leader" },
	{ name: "Molly Hinton", detail: "Treasurer · EY" },
	{
		name: "Sara Hess Mackenzie",
		detail: "General Counsel · Alston & Bird LLP",
	},
	{ name: "Hannah Basinger", detail: "Atlanta Braves" },
	{ name: "Tia Bohannon", detail: "Georgia Power" },
	{ name: "Lauren Bonapfel", detail: "UPS" },
	{ name: "Stephanie Buzzel", detail: "The Home Depot" },
	{ name: "Fabiola Charles Stokes", detail: "Google" },
	{ name: "David Edwards", detail: "Power A, ACCO Brands Inc." },
	{ name: "Jason Esteves", detail: "Hudson Cook, LLP" },
	{ name: "Trisha Hardy", detail: "Boys and Girls Club of America" },
	{ name: "Tracie Hawkins-Simpson", detail: "Kaiser Permanente" },
	{ name: "John Jackson", detail: "BlackRock" },
	{ name: "Shamika Lackey", detail: "Croud" },
	{ name: "Dr. Marrisa Pace", detail: "Emory University" },
	{ name: "Bharath Parthasarathy", detail: "Slalom" },
	{ name: "Puja Patel Lea", detail: "Troutman Pepper Locke" },
	{ name: "Tracy Reznik", detail: "Insight Global" },
	{ name: "Jared Serwer", detail: "Perkins & Will" },
	{ name: "Chirag Shah", detail: "Novelis" },
	{ name: "Avery Walker", detail: "PNC Bank" },
	{ name: "Dr. Brian Williams", detail: "Florida International University" },
	{ name: "Evelyn Zagami", detail: "The Coca-Cola Company" },
	{ name: "Wonya Lucas", detail: "Emeritus · Community Leader" },
	{ name: "Allan J. Tanenbaum", detail: "Emeritus · Taylor Duma LLP" },
];

const boardOfAdvisors: Person[] = [
	{ name: "Madelyn R. Adams", detail: "GreenLight Fund Atlanta" },
	{ name: "Tony Balloon", detail: "Alston & Bird LLP" },
	{ name: "Molly Battin", detail: "The Home Depot" },
	{ name: "Ken Bernhardt", detail: "Georgia State University" },
	{ name: "Staci Brill", detail: "Be Philanthropy Partners" },
	{ name: "Cherie Caldwell", detail: "The Cherie Caldwell Company" },
	{ name: "Nina Cheney", detail: "Andee's Army, Inc." },
	{ name: "Justin Clay", detail: "NRC Voyix" },
	{ name: "Kristin Clyde", detail: "Community Leader" },
	{ name: "Ann Cramer", detail: "Coxe Curry & Associates" },
	{ name: "Erica Dechicchis", detail: "PNC Bank" },
	{ name: "Barbarella Diaz", detail: "Diaz Foods" },
	{ name: "Barry Flink", detail: "Flink Inc." },
	{ name: "Jennifer Frazer", detail: "Carter's Inc." },
	{
		name: "Jane Hardesty",
		detail: "John H. and Wilhelmina D. Harland Charitable Foundation Inc.",
	},
	{ name: "Mike Hobbs", detail: "Troutman Pepper Locke" },
	{ name: "Phillip Hodges", detail: "EY · Ret." },
	{ name: "Dani Hopkins-Robertson", detail: "DMHR Advisory" },
	{ name: "Raghu Kakarala", detail: "Bounteous" },
	{ name: "Nishant N. Mehta", detail: "MehtaCognition" },
	{ name: "Wilson Overend", detail: "Verilty" },
	{ name: "William Pate", detail: "Atlanta Convention & Visitors Bureau" },
	{ name: "Brad Phelps", detail: "Cox Automotive Inc." },
	{ name: "Alison Rand", detail: "Primerica · Ret." },
	{ name: "Paul Robertson", detail: "SCS Financial" },
	{ name: "Irma Shrivastava", detail: "R. Squared Strategic Solutions" },
	{ name: "F. Michael Tesler", detail: "Seacoast Bank" },
	{ name: "Adam Walker", detail: "Edgewise Media" },
	{ name: "Rich Warren", detail: "Egon Zehnder" },
];

const administration: Person[] = [
	{ name: "Edwin Link", detail: "Executive Director" },
	{ name: "Christy Costello", detail: "Director of Finance and Operations" },
	{ name: "Karen Kelly", detail: "Director of Special Exhibits" },
	{
		name: "Gillian Skipper",
		detail: "Assistant Director of Facility Operations",
	},
	{ name: "Keri Atkins", detail: "Bookkeeper" },
	{ name: "Verinda Brown", detail: "Accounting Clerk" },
	{ name: "Markethia McDonald", detail: "HR Generalist" },
	{ name: "Nashana Pritchett", detail: "Education Program Specialist" },
];

const guestExperience: Person[] = [
	{ name: "Natalia Vuley", detail: "Director of Guest Experience & Programs" },
	{ name: "Felix Crutcher", detail: "Assistant Director of Guest Experiences" },
	{ name: "Rachel Bova", detail: "Assistant Director of Programs" },
	{ name: "Liz Seidel", detail: "School and Outreach Associate" },
	{ name: "Kim Kennedy", detail: "Guest Experience Coordinator" },
	{ name: "Athena Malo", detail: "Museum Programs Coordinator" },
	{ name: "Dewayne Morgan", detail: "Mobile Learning Spaces Educator" },
	{ name: "Keatyn Remmel", detail: "Guest Experience Coordinator" },
];

const strategicAdvancement: Person[] = [
	{ name: "Erin Brooks", detail: "Director of Strategic Advancement" },
	{
		name: "Laura Halad",
		detail: "Assistant Director of Advancement and Special Events",
	},
	{ name: "Peyton Corder", detail: "Strategic Advancement Manager" },
	{
		name: "Lilly Heidari",
		detail: "Corporate and Foundation Relations Manager",
	},
];

const marketingAndSales: Person[] = [
	{ name: "Rebecca Morelo Jackson", detail: "Director of Marketing and Sales" },
	{ name: "Heidi Blackwell", detail: "Marketing Manager" },
	{ name: "Grace Ferreira", detail: "Education Sales Manager" },
	{ name: "Briana Griffiths", detail: "Digital Media Manager" },
	{ name: "Lana Zring", detail: "Membership Manager" },
	{ name: "Terra Dexter", detail: "Reservations Coordinator" },
	{ name: "Meghan Zern", detail: "Reservations Coordinator" },
	{ name: "BRAVE PR", detail: "Public Relations Firm" },
];

const tabs = [
	{ label: "Board of Directors", people: boardOfDirectors },
	{ label: "Board of Advisors", people: boardOfAdvisors },
	{ label: "Administration & Finance", people: administration },
	{ label: "Guest Experience", people: guestExperience },
	{ label: "Strategic Advancement", people: strategicAdvancement },
	{ label: "Marketing & Sales", people: marketingAndSales },
];

function PersonCard({ person }: { person: Person }) {
	return (
		<div className="flex flex-col gap-1 py-4 border-b border-[#e4e8ee] last:border-b-0">
			<p className="text-cma-navy font-bold text-[14px] leading-snug">
				{person.name}
			</p>
			<p className="text-[#6b7ea0] text-[13px] leading-snug">{person.detail}</p>
		</div>
	);
}

export default function AboutPeople() {
	const [active, setActive] = useState(0);
	const current = tabs[active];

	return (
		<section
			className="bg-cma-cream w-full py-[80px] md:py-[120px] relative overflow-hidden"
			id="team"
		>
			<div className="cma-section-container flex flex-col gap-10">
				<motion.div
					className="flex flex-col items-center gap-4 text-center"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
				>
					<p className="cma-eyebrow text-cma-teal">
						the people behind the play
					</p>
					<h2 className="text-cma-navy">Our People</h2>
				</motion.div>

				{/* Tab pills — scrollable on mobile */}
				<motion.div
					className="cma-pill-scroll"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
				>
					{tabs.map((tab, i) => (
						<button
							key={tab.label}
							onClick={() => setActive(i)}
							className={`cma-nav-pill ${active === i ? "cma-nav-pill-active" : "cma-nav-pill-inactive"}`}
						>
							{tab.label}
						</button>
					))}
				</motion.div>

				{/* People grid */}
				<motion.div
					key={active}
					className="bg-white rounded-[24px] border border-[rgba(107,126,160,0.15)] p-6 md:p-8"
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
				>
					<div className="columns-1 sm:columns-2 lg:columns-3 gap-x-8">
						{current.people.map((person) => (
							<div key={person.name} className="break-inside-avoid">
								<PersonCard person={person} />
							</div>
						))}
					</div>
				</motion.div>
			</div>

			<div
				aria-hidden
				className="absolute bottom-0 left-0 flex overflow-hidden h-[13px] w-full"
			>
				{Array.from({ length: 10 }).map((_, i) => (
					<img
						key={`item-${i}`}
						src={imgWaveWhite}
						alt=""
						className="w-[422px] h-[57px] shrink-0 block"
					/>
				))}
			</div>
		</section>
	);
}
