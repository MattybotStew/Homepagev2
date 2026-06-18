import img0 from "../../assets/educators-img-0.webp";
import img1 from "../../assets/educators-img-1.webp";
import img2 from "../../assets/educators-img-2.webp";
import img3 from "../../assets/educators-img-3.webp";
import type { ContentBlock, SidebarSection } from "../components/ArticleContentWithSidebar";
import type { Program } from "./programs";

export type FundraisingEventDetails = {
	heroSubtitle: string;
	heroCtas: { label: string; href: string }[];
	stats: { value: string; label: string }[];
	award?: {
		heading: string;
		recipientName: string;
		recipientDate: string;
		recipientBio: string;
	};
	scheduleHeading?: string;
	scheduleItems?: { time: string; activity: string }[];
	scheduleNote?: string;
	leadership?: {
		heading: string;
		chairsLabel: string;
		chairs: string[];
		committeeLabel: string;
		committee: string[];
	};
	sponsorsHeading: string;
	sponsorTiers: { name: string; featured: boolean; sponsors: string[] }[];
	photosHeading: string;
	photos: string[];
	resources?: { label: string; href: string }[];
	closingHeading: string;
	closingBody: string;
	closingCtas: { label: string; href: string }[];
};

export type GivingCircle = Program & { fundraisingEvent?: FundraisingEventDetails };

const REGISTER_HREF =
	"mailto:ebrooks@childrensmuseumatlanta.org?subject=Tournament%20For%20Play%20Registration";
const WAITLIST_HREF =
	"mailto:ebrooks@childrensmuseumatlanta.org?subject=Tournament%20For%20Play%20Waitlist";
const TFP_SPONSOR_HREF =
	"mailto:ebrooks@childrensmuseumatlanta.org?subject=Tournament%20For%20Play%20Sponsorship";
const IB_SPONSOR_HREF =
	"mailto:ebrooks@childrensmuseumatlanta.org?subject=Imagination%20Ball%20Sponsorship";
const FOT_TICKETS_HREF =
	"mailto:ebrooks@childrensmuseumatlanta.org?subject=Fun%20On%20Tap%20Tickets";
const FOT_SPONSOR_HREF =
	"mailto:ebrooks@childrensmuseumatlanta.org?subject=Fun%20On%20Tap%20Sponsorship";

export const givingCircles: GivingCircle[] = [
	{
		slug: "imagination-ball",
		title: "Imagination Ball",
		badge: "Annual Gala",
		badgeColor: "navy",
		eyebrow: "CMA's Premier Fundraising Gala",
		heroImage: img0,
		cardImage: img0,
		sections: [
			{ id: "overview", label: "Overview" },
			{ id: "details", label: "2026 Highlights" },
			{ id: "sponsorship", label: "Sponsorship" },
			{ id: "related", label: "Other Ways to Give", href: "#/support" },
		] satisfies SidebarSection[],
		paragraphs: [
			"Imagination Ball is Children's Museum of Atlanta's playful charity ball for grownups. Every dollar raised goes towards making learning through play accessible to all children — breaking down barriers while building up the skills kids need to thrive.",
			{ h3: "2026 Highlights", id: "details" },
			"Imagination Ball 2026 was a wildly successful evening where we raised over $430,000 to support CMA programs that increase the number of children who can access play-based learning experiences, regardless of their circumstances.",
			{ h3: "Sponsorship", id: "sponsorship" },
			"We are looking forward to next year's Imagination Ball which will take place in March 2027. To learn more about Imagination Ball or to become a sponsor, please email the advancement office.",
		],
		fundraisingEvent: {
			heroSubtitle:
				"Imagination Ball is Children's Museum of Atlanta's playful charity ball for grownups. Every dollar raised goes towards making learning through play accessible to all children.",
			heroCtas: [
				{ label: "Email Advancement Office", href: IB_SPONSOR_HREF },
			],
			stats: [
				{ value: "$430K+", label: "Raised in 2026" },
				{ value: "March 2027", label: "Next Imagination Ball" },
			],
			award: {
				heading: "Power of Play Award",
				recipientName: "Andrea Montag",
				recipientDate: "March 13, 2026",
				recipientBio:
					"Andrea currently serves on the Boards of the WABE, Skyland Trail, A Million Matters, and Washington University Atlanta Alumni.",
			},
			leadership: {
				heading: "Event Leadership",
				chairsLabel: "Event Chairs",
				chairs: ["Stephanie Blank", "Serena Levy"],
				committeeLabel: "Host Committee",
				committee: [
					"Madelyn Adams",
					"Maurice Baker",
					"Erin & Pete Boorn",
					"Aileen Reischl & Andrew Chang",
					"Nina Cheney",
					"Kristin & Tom Clyde",
					"Burch & Mark Hanson",
					"Jane & Derek Hardesty",
					"Christine & William Hunt",
					"Mary & Neil Johnson",
					"Wonya Lucas",
					"Elizabeth & John Ralls",
					"Justin A. Sullivan",
					"Elizabeth Klump & Kevin Thomas",
					"Jane & David Turner",
					"Halli Cohn & Rich Warren",
				],
			},
			sponsorsHeading: "Sponsors",
			sponsorTiers: [
				{ name: "Presenting", featured: true, sponsors: ["GNG"] },
				{ name: "Emerald", featured: false, sponsors: ["Montag"] },
				{
					name: "Diamond",
					featured: false,
					sponsors: [
						"Arthur M Blank Family Foundation",
						"Coca-Cola",
						"Georgia Power",
					],
				},
				{
					name: "Platinum",
					featured: false,
					sponsors: [
						"Atlanta Braves",
						"AGS",
						"Community Foundation for Greater Atlanta",
						"Kaiser Permanente",
						"Liz Blake",
						"PNC",
						"United Way",
					],
				},
				{
					name: "Gold",
					featured: false,
					sponsors: [
						"CareSource",
						"Children's Healthcare of Atlanta",
						"EY",
						"The Herschend Family Foundation",
						"Novelis",
						"Wonya Lucas",
						"Halli Cohn & Richard J. Warren",
					],
				},
				{
					name: "Silver",
					featured: false,
					sponsors: [
						"Greenberg Traurig, LLP",
						"Perkins&Will",
						"Madelyn R. Adams",
						"Julie and Randy Bassett",
						"Aileen Reischl & Andrew Chang",
						"Nina Cheney",
						"Kristin & Tom Clyde",
						"Jane and Derek Hardesty",
						"Caryl and Kendrick Smith",
						"Elaine and Allan Tanenbaum",
						"Elizabeth Klump and Kevin Thomas",
						"Jane & David Turner",
					],
				},
				{
					name: "Bronze",
					featured: false,
					sponsors: [
						"Alston & Bird",
						"Carr, Riggs & Ingram, LLC",
						"Decide DeKalb Development Authority",
						"Erin & Pete Boorn",
						"Burch and Mark Hanson",
						"Christine & William Hunt",
					],
				},
			],
			photosHeading: "From Imagination Ball 2026",
			photos: [img0, img1, img2, img3],
			closingHeading: "Interested in Imagination Ball 2027?",
			closingBody:
				"To learn more about Imagination Ball or to become a sponsor, please email the advancement office.",
			closingCtas: [
				{ label: "Email Advancement Office", href: IB_SPONSOR_HREF },
			],
		},
	},
	{
		slug: "tournament-for-play",
		title: "Tournament For Play",
		badge: "Golf Tournament",
		badgeColor: "teal-dark",
		eyebrow: "Annual Golf Fundraiser",
		heroImage: img1,
		cardImage: img1,
		sections: [
			{ id: "overview", label: "Overview" },
			{ id: "details", label: "Schedule" },
			{ id: "sponsorship", label: "Sponsors" },
			{ id: "related", label: "Other Ways to Give", href: "#/support" },
		] satisfies SidebarSection[],
		paragraphs: [
			"The 14th Annual Tournament for Play is held at Peachtree Golf Club (4600 Peachtree Rd NE, Atlanta, GA 30319) on August 17, 2026. The tournament is limited to 30 foursomes distributed between four sponsorship levels. Tournament foursomes are SOLD OUT — join the waitlist or inquire about non-player sponsorship opportunities.",
			{ h3: "Schedule", id: "details" },
			"8:30 am — Registration & Breakfast · 9:00 am — Practice Range & Putting Green Open · 9:45 am — Welcome Remarks & Player Instruction · 10:00 am — Shotgun Start · 3:30 pm — Awards Ceremony & Reception.",
			"Player bundles include a Par 3 Poker game card and 2 mulligans — the best poker hand wins $500.",
			{ h3: "Sponsors", id: "sponsorship" },
			"Presenting: PNC Bank · Albatross: Mellow Mushroom · Golf Cart: Osprey · Early Birdie: Anonymous, Christopher Childs, Coca-Cola Company, Georgia Power, Hawkins Parnell Young & Young LLP, JVP Management, KSM, Lazlo 326 Corp, Andy Sanford/Ameriprise, Southern Company, Stanton Barton/McBrayer/Mozley Finlayson Loggins, Tokio Marine HCC.",
		],
		fundraisingEvent: {
			heroSubtitle:
				"The 14th Annual Tournament for Play tees off at Peachtree Golf Club (4600 Peachtree Rd NE, Atlanta, GA 30319) on August 17, 2026. Foursomes are sold out — join the waitlist or ask about non-player sponsorship.",
			heroCtas: [
				{ label: "Register", href: REGISTER_HREF },
				{ label: "Join Waitlist", href: WAITLIST_HREF },
				{ label: "Sponsorship Inquiry", href: TFP_SPONSOR_HREF },
			],
			stats: [
				{ value: "14th", label: "Annual Tournament" },
				{ value: "$430K+", label: "Raised in 2026" },
				{ value: "30", label: "Foursomes" },
				{ value: "Aug 17, 2026", label: "Peachtree Golf Club" },
			],
			scheduleHeading: "Schedule",
			scheduleItems: [
				{ time: "8:30 am", activity: "Registration & Breakfast" },
				{ time: "9:00 am", activity: "Practice Range & Putting Green Open" },
				{ time: "9:45 am", activity: "Welcome Remarks & Player Instruction" },
				{ time: "10:00 am", activity: "Shotgun Start" },
				{ time: "3:30 pm", activity: "Awards Ceremony & Reception" },
			],
			scheduleNote:
				"Player bundles include a Par 3 Poker game card and 2 mulligans — the best poker hand wins $500.",
			sponsorsHeading: "Sponsors",
			sponsorTiers: [
				{ name: "Presenting", featured: true, sponsors: ["PNC Bank"] },
				{ name: "Albatross", featured: false, sponsors: ["Mellow Mushroom"] },
				{ name: "Golf Cart", featured: false, sponsors: ["Osprey"] },
				{ name: "Breakfast", featured: false, sponsors: ["Lexis Nexis"] },
				{
					name: "Early Birdie",
					featured: false,
					sponsors: [
						"Anonymous",
						"Christopher Childs",
						"Coca-Cola Company",
						"Georgia Power",
						"Hawkins Parnell Young & Young LLP",
						"JVP Management",
						"KSM",
						"Lazlo 326 Corp",
						"ML Healthcare",
						"Andy Sanford/Ameriprise",
						"Southern Company",
						"Stanton Barton/McBrayer/Mozley Finlayson Loggins",
						"Tokio Marine HCC",
					],
				},
			],
			photosHeading: "From Past Tournaments",
			photos: [img0, img1, img2, img3],
			resources: [
				{ label: "Sponsorship Brochure (PDF)", href: "#" },
				{ label: "Foursomes and Sponsorship Levels (PDF)", href: "#" },
			],
			closingHeading: "Interested in Sponsoring or Joining the Waitlist?",
			closingBody:
				"Tournament foursomes are sold out for 2026, but waitlist spots and non-player sponsorships are still open.",
			closingCtas: [
				{ label: "Join Waitlist", href: WAITLIST_HREF },
				{ label: "Sponsorship Inquiry", href: TFP_SPONSOR_HREF },
			],
		},
	},
	{
		slug: "fun-on-tap",
		title: "Fun On Tap",
		badge: "Trivia Night",
		badgeColor: "teal-dark",
		eyebrow: "Trivia Night Fundraiser",
		heroImage: img2,
		cardImage: img2,
		sections: [
			{ id: "overview", label: "Overview" },
			{ id: "details", label: "Schedule" },
			{ id: "sponsorship", label: "Sponsors" },
			{ id: "related", label: "Other Ways to Give", href: "#/support" },
		] satisfies SidebarSection[],
		paragraphs: [
			"Fun On Tap is Children's Museum of Atlanta's trivia night fundraiser — gather your team, grab a drink, and test your knowledge for a good cause. Details for the next event are coming soon.",
		],
		fundraisingEvent: {
			heroSubtitle:
				"Gather your team for a night of trivia, drinks, and friendly competition — all to support play-based learning at CMA. Date and venue coming soon.",
			heroCtas: [
				{ label: "Get Tickets", href: FOT_TICKETS_HREF },
				{ label: "Sponsorship Inquiry", href: FOT_SPONSOR_HREF },
			],
			stats: [
				{ value: "1st", label: "Annual Fun On Tap" },
				{ value: "$10K", label: "Fundraising Goal" },
				{ value: "20+", label: "Teams" },
				{ value: "Date TBA", label: "Venue TBA" },
			],
			scheduleHeading: "Game Night Schedule",
			scheduleItems: [
				{ time: "6:30 pm", activity: "Doors Open & Team Check-In" },
				{ time: "7:00 pm", activity: "Round 1 — Warm Up" },
				{ time: "7:30 pm", activity: "Round 2 — Brain Teasers" },
				{ time: "8:00 pm", activity: "Round 3 — Lightning Round" },
				{ time: "8:30 pm", activity: "Final Round & Awards" },
			],
			scheduleNote:
				"Teams of up to 6. Prizes for top three teams plus best team name.",
			sponsorsHeading: "Sponsors",
			sponsorTiers: [
				{ name: "Presenting", featured: true, sponsors: ["Sponsor TBA"] },
				{ name: "Round", featured: false, sponsors: ["Sponsor TBA", "Sponsor TBA"] },
				{
					name: "Team",
					featured: false,
					sponsors: ["Sponsor TBA", "Sponsor TBA", "Sponsor TBA"],
				},
			],
			photosHeading: "From Past Events",
			photos: [img2, img3, img0, img1],
			closingHeading: "Interested in Playing or Sponsoring?",
			closingBody:
				"Fun On Tap details are coming soon — join the list to be the first to know, or ask about sponsorship.",
			closingCtas: [
				{ label: "Get Tickets", href: FOT_TICKETS_HREF },
				{ label: "Sponsorship Inquiry", href: FOT_SPONSOR_HREF },
			],
		},
	},
	{
		slug: "young-professionals",
		title: "Young Professionals",
		badge: "Giving Circle",
		badgeColor: "teal-dark",
		eyebrow: "Next-Generation Philanthropists",
		heroImage: img2,
		cardImage: img2,
		sections: [
			{ id: "overview", label: "Overview" },
			{ id: "benefits", label: "Member Benefits" },
			{ id: "join", label: "How to Join" },
			{ id: "related", label: "Other Ways to Give", href: "#/support" },
		] satisfies SidebarSection[],
		paragraphs: [
			"The CMA Young Professionals giving circle connects Atlanta's emerging leaders with the Museum's mission in a meaningful and social way. Members enjoy exclusive behind-the-scenes access, networking events, and the satisfaction of knowing their support is shaping the next generation.",
			{ h3: "Member Benefits", id: "benefits" },
			"Annual membership starts at $250 and includes invitations to exclusive Young Professionals events, recognition in CMA's annual report, and discounted tickets to signature fundraising events.",
			{ h3: "How to Join", id: "join" },
			"Join a community of forward-thinking Atlantans who believe every child deserves the power of play. Contact the Strategic Advancement office to learn more.",
		],
	},
	{
		slug: "dream-builders",
		title: "Dream Builders Giving Circle",
		badge: "Major Gifts",
		badgeColor: "navy",
		eyebrow: "Giving Circle · $1,000+ Annually",
		heroImage: img3,
		cardImage: img3,
		sections: [
			{ id: "overview", label: "Overview" },
			{ id: "impact", label: "Your Impact" },
			{ id: "join", label: "How to Join" },
			{ id: "related", label: "Other Ways to Give", href: "#/support" },
		] satisfies SidebarSection[],
		paragraphs: [
			"Children's Museum of Atlanta is supported by donations, large and small. And thanks to our donors, we can provide more access and opportunities for children to learn through play. Our Dream Builders circle is a dedicated group for our most loyal and passionate donors who believe in the power of play.",
			{ h3: "Your Impact", id: "impact" },
			"Fuel Children's Museum of Atlanta's mission to change the world by sparking every child's imagination, sense of discovery, and learning through the power of play! Membership requires a minimum $1,000 contribution annually during the fiscal year (July 1 – June 30). Recurring monthly gifts that total $1,000 or more also qualify.",
			"Dream Builders enjoy exclusive invitations to tours, special events, and conversations with community leaders, recognition in CMA's annual report, and the satisfaction of making a direct impact on Atlanta's children. Dream Builders is for individual donors only — corporate giving inquiries are handled separately.",
			{ h3: "How to Join", id: "join" },
			"Contact Peyton Corder, Strategic Advancement Manager, at pcorder@childrensmuseumatlanta.org, or Erin Brooks, Director of Strategic Advancement, at ebrooks@childrensmuseumatlanta.org.",
		],
	},
];
