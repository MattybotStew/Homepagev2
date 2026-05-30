import img0 from "../../assets/educators-img-0.webp";
import img1 from "../../assets/educators-img-1.webp";
import img2 from "../../assets/educators-img-2.webp";
import img3 from "../../assets/educators-img-3.webp";
import type { SidebarSection } from "../components/ArticleContentWithSidebar";
import type { Program } from "./programs";

export const givingCircles: Program[] = [
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
			{ id: "details", label: "Event Details" },
			{ id: "sponsorship", label: "Sponsorship" },
			{ id: "related", label: "Other Ways to Give", href: "/support" },
		] satisfies SidebarSection[],
		paragraphs: [
			"The Imagination Ball is the Children's Museum of Atlanta's signature annual gala — an elegant evening of dinner, entertainment, and celebration of the power of play. Every year, hundreds of Atlanta's most dedicated community leaders gather to raise critical funds that support CMA's mission to bring hands-on learning to all children.",
			"Proceeds from the Imagination Ball fund access initiatives, subsidized admissions, and community outreach programs that extend CMA's reach beyond our walls. Sponsorship packages and individual tickets are available. Contact our development team to learn how your support can make a difference.",
		],
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
			{ id: "details", label: "Tournament Details" },
			{ id: "sponsorship", label: "Sponsorship" },
			{ id: "related", label: "Other Ways to Give", href: "/support" },
		] satisfies SidebarSection[],
		paragraphs: [
			"Tournament For Play is CMA's annual golf tournament — a fun-filled day on the course that doubles as one of our most impactful fundraising events. Golfers of all skill levels are welcome to participate while supporting Atlanta's children through the power of play.",
			"All proceeds benefit CMA's access programs, including Community Free Days and the Access It! initiative, which provides free and reduced-price admission to families in need. Sponsorship opportunities range from hole sponsors to presenting sponsor packages. Tee times and team registration open each spring.",
		],
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
			{ id: "related", label: "Other Ways to Give", href: "/support" },
		] satisfies SidebarSection[],
		paragraphs: [
			"The CMA Young Professionals giving circle connects Atlanta's emerging leaders with the Museum's mission in a meaningful and social way. Members enjoy exclusive behind-the-scenes access, networking events, and the satisfaction of knowing their support is shaping the next generation.",
			"Annual membership starts at $250 and includes invitations to exclusive Young Professionals events, recognition in CMA's annual report, and discounted tickets to signature fundraising events. Join a community of forward-thinking Atlantans who believe every child deserves the power of play.",
		],
	},
	{
		slug: "dream-builders",
		title: "Dream Builders Giving Circle",
		badge: "Major Gifts",
		badgeColor: "navy",
		eyebrow: "Visionary Supporters of CMA",
		heroImage: img3,
		cardImage: img3,
		sections: [
			{ id: "overview", label: "Overview" },
			{ id: "impact", label: "Your Impact" },
			{ id: "join", label: "How to Join" },
			{ id: "related", label: "Other Ways to Give", href: "/support" },
		] satisfies SidebarSection[],
		paragraphs: [
			"Dream Builders is CMA's highest-level giving circle, bringing together visionary donors whose transformational gifts make our boldest programs possible. Members at the $10,000+ annual level receive personalized recognition, dedicated stewardship, and invitations to exclusive leadership events with CMA's executive team.",
			"Dream Builders fund the initiatives that change children's lives — from capital improvements to endowed programming to community access scholarships. If you are interested in learning more about Dream Builders membership and the impact of a major gift, please contact our Chief Development Officer.",
		],
	},
];
