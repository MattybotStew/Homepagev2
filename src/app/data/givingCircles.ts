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
			"Imagination Ball is Children's Museum of Atlanta's playful charity ball for grownups. Every dollar raised goes towards making learning through play accessible to all children — breaking down barriers while building up the skills kids need to thrive.",
			"Imagination Ball 2026 was a wildly successful evening where we raised over $430,000 to support CMA programs that increase the number of children who can access play-based learning experiences, regardless of their circumstances.",
			"We are looking forward to next year's Imagination Ball which will take place in March 2027. To learn more about Imagination Ball or to become a sponsor, please email the advancement office.",
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
			"The 14th Annual Tournament for Play is held at Peachtree Golf Club (4600 Peachtree Rd NE, Atlanta, GA 30319) on August 17, 2026. The tournament raises significant funds for educational exhibits and community outreach programs. This year's presenting sponsor is PNC Bank.",
			"Schedule: 8:30 AM Registration & Breakfast · 9:00 AM Practice Range & Putting Green · 9:45 AM Welcome Remarks · 10:00 AM Shotgun Start · 3:30 PM Awards Ceremony & Reception. The tournament foursomes are limited to 30 foursomes distributed between four sponsorship levels.",
			"All proceeds benefit CMA's mission to spark every child's imagination, sense of discovery, and learning through the power of play. For non-player sponsorship opportunities, contact the advancement office.",
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
