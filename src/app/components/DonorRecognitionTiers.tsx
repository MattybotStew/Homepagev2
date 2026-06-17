import {
	faMinus,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const tiers = [
	{
		number: 1,
		name: "Visionary",
		donors: [
			"Anonymous",
			"Anonymous",
			"Around The Table Foundation",
			"Atlanta Braves Foundation",
			"Stephanie V. Blank and Charles Hodges",
			"CareSource",
			"Chick-Fil-A",
			"Children's Healthcare of Atlanta",
			"City of Atlanta Mayor's Office of Cultural Affairs",
			"Fulton County Arts and Culture",
			"Georgia Natural Gas",
			"Georgia Power",
			"Georgia-Pacific Foundation",
			"Cathy and Phillip Hodges",
			"Home-Grown Industries of GA Inc.",
			"Invesco Foundation Inc.",
			"Invest Atlanta",
			"John H. and Wilhelmina D. Harland Charitable Foundation Inc.",
			"Kaiser Permanente",
			"LexisNexis Risk Solutions",
			"Lilly Endowment Inc.",
			"Wonya Lucas",
			"Molly Blank Fund of the Arthur M. Blank Family Foundation",
			"Novelis",
			"Osprey Corporation",
			"PNC Bank",
			"Price Gilbert Jr. Charitable Fund",
			"Publix Super Markets Charities",
			"Southern Company Gas Foundation",
			"The Coca-Cola Company",
			"The Lattner Family Foundation",
			"The Liz Blake Giving Fund",
			"The Sartain Lanier Family Foundation Inc.",
			"The Zeist Foundation Inc.",
			"United Way of Greater Atlanta",
		],
	},
	{
		number: 2,
		name: "Creator",
		donors: [
			"Anonymous",
			"Aileen Reischl and Andrew Chang",
			"EY",
			"Georgia Council for the Arts",
			"Karyn Heavenrich and William Alexander",
			"Hendon Properties",
			"The Home Depot Foundation",
			"John and Mary Franklin Foundation",
			"Jones Day",
			"Amy and Randall Kirsch",
			"KSM",
			"Lazlo 326 Corp.",
			"Sarah Hess Mackenzie",
			"Todd Oglesby",
			"Andy Sanford / Ameriprise",
			"The Scott Hudgens Family Foundation",
			"Sobotka Foundation",
			"Stanton | Barton LLC and McBrayer PLLC",
			"Elaine and Allan Tanenbaum",
			"TEGNA Foundation",
			"Tokio Marine HCC",
			"Woodruff Arts Center / Alliance Theatre",
			"Evelyn Zagami",
		],
	},
	{
		number: 3,
		name: "Champion",
		donors: [
			"Alston & Bird LLP",
			"American Cancer Society",
			"Hannah Basinger",
			"Lauren Bonapfel",
			"Katherine and David Bowlin",
			"Stephanie Buzzell",
			"Kristin and Tom Clyde",
			"Ann and Jeff Cramer",
			"Dr. Seema Csukas",
			"Cynthia Currence Kenneth and Bernhardt",
			"Robin and David Edwards",
			"April and Mark Estes",
			"Ariel and Jason Esteves",
			"Greenberg Traurig, LLP",
			"Trisha Hardy",
			"Serena and Scott Harrison",
			"Hawkins Parnell & Young",
			"Janin and Tad Hutcheson",
			"iDiscovery",
			"Bharath Parthasarathy",
			"Purpose Possible",
			"Shama and Chirag Shah",
			"Fabiola and Shereitte Stokes IV",
			"Troutman Pepper Locke",
			"Truist",
			"Waffle House",
			"Weinberg Wheeler Hudgins Gunn & Dial",
			"Hon. Mike Wilensky",
		],
	},
	{
		number: 4,
		name: "Adventurer",
		donors: [
			"Heather Balkema",
			"Jason Bearden",
			"BlackRock",
			"Rita and John Breen",
			"Carr Riggs & Ingram LLC",
			"The Deutsch Family Philanthropic Fund",
			"Elizabeth and Brandon Duany",
			"Lauren Estrin and Andy Deutsch",
			"Molly and Dane Hinton",
			"Bob Hope",
			"Adrienne and Nathan Hoyt",
			"Jabian Consulting",
			"Frances and John Jackson",
			"Melissa and Larry Jackson",
			"Kessler & Solomiany Family Law Attorneys",
			"Sheri and Steve Labovitz",
			"Suzanne Lindsay-Walker",
			"Kathleen and Edwin Link",
			"Beth Lowry",
			"Ross and Kate McLeod",
			"Alecia and Jeff Mokros",
			"Marissa Pace",
			"Partners Real Estate",
			"William Pate",
			"Kama and Joe Pierce",
			"Tracy and Bradley Reznik",
			"David Roemer",
			"Carine Roman and Peter Westerman",
			"Mary Spanburgh and Patrick Mulvaney",
			"James R. Summer III",
			"Beth Tanis and John Chandler",
			"The Richard C. Munroe Foundation Inc.",
			"Ryan Trepte",
			"Chelsea and Caleb Turner",
			"Melissa and Richard Valladares",
			"Kathy Waller and Kenneth Goggins",
			"Kathy and Jim Wright",
			"Leon Yang",
		],
	},
	{
		number: 5,
		name: "Innovator",
		donors: [
			"ADP",
			"Bank of America",
			"Coco Black",
			"Staci and Matt Brill",
			"Shanice and Kirk Brown",
			"Halli Cohn and Richard J. Warren",
			"Christy Costello",
			"Fiorella Enciso",
			"James Freeman",
			"Neha Gandhi",
			"John Hardman",
			"Rose Jones",
			"Puja Patel Lea and Brian Lea",
			"Dana and John Lilly",
			"Hala and Steve Moddelmog",
			"Sierra and Demond Nash",
			"Abraham Nesmith",
			"Sonya and James Parker",
			"Angela Randle",
			"Paul Roeser",
			"Allison and Louis Tanenbaum",
			"DeAna Jo and Al Vivian",
			"Dan Walden",
		],
	},
];

export default function DonorRecognitionTiers() {
	const [openTier, setOpenTier] = useState<number>(0);

	return (
		<section className="bg-cma-cream w-full py-[80px] md:py-[120px]">
			<div className="cma-section-container flex flex-col gap-[40px]">
				<div className="flex flex-col gap-[12px] items-center text-center">
					<h2 className="text-cma-navy">Supporters: July 2024 – June 2025</h2>
					<p className="text-cma-navy max-w-[720px]">
						Thank you to the generous individuals, corporations, foundations, and
						government agencies for annually supporting our hands-on exhibits,
						educational programming, and community outreach efforts. Want to
						support the power of play?{" "}
						<a href="https://16707.blackbaudhosting.com/16707/Annual-Fund" className="cma-text-link">
							Donate today!
						</a>
					</p>
				</div>

				<div className="flex flex-col gap-[12px]">
					{tiers.map((tier, i) => {
						const isOpen = openTier === i;
						return (
							<div
								key={tier.name}
								className={`rounded-[24px] border-2 border-black/5 overflow-hidden transition-colors ${isOpen ? "bg-cma-teal-pale" : "bg-white"}`}
							>
								<button
									onClick={() => setOpenTier(isOpen ? -1 : i)}
									className="w-full flex items-center justify-between px-[28px] py-[22px] text-left"
								>
									<span
										className={`text-cma-navy text-[16px] leading-[1.3] ${isOpen ? "font-black" : "font-semibold"}`}
									>
										TIER {tier.number} — {tier.name}
									</span>
									<FontAwesomeIcon
										icon={isOpen ? faMinus : faPlus}
										className="text-cma-orange text-[12px] shrink-0 ml-[16px]"
									/>
								</button>

								{isOpen && (
									<div className="px-[28px] pb-[28px] flex flex-col gap-[24px]">
										<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[40px] gap-y-[2px]">
											{tier.donors.map((donor, j) => (
												<p
													key={`${donor}-${j}`}
													className="text-cma-navy text-[14px] font-medium border-b border-black/8 py-[8px]"
												>
													{donor}
												</p>
											))}
										</div>
										<div>
											<a
												href="https://16707.blackbaudhosting.com/16707/Annual-Fund"
												className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
											>
												Become a {tier.name}
											</a>
										</div>
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
