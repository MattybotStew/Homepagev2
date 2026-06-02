import img0 from "../../assets/educators-img-0.webp";
import img1 from "../../assets/educators-img-1.webp";
import img2 from "../../assets/educators-img-2.webp";
import img3 from "../../assets/educators-img-3.webp";
import type { ContentBlock, SidebarSection } from "../components/ArticleContentWithSidebar";
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
			"8:30 AM — Registration & Breakfast · 9:00 AM — Practice Range & Putting Green Open · 9:45 AM — Welcome Remarks & Player Instruction · 10:00 AM — Shotgun Start · 3:30 PM — Awards Ceremony & Reception.",
			"Player bundles include a Par 3 Poker game card and 2 mulligans — the best poker hand wins $500.",
			{ h3: "Sponsors", id: "sponsorship" },
			"Presenting: PNC Bank · Albatross: Mellow Mushroom · Golf Cart: Osprey · Early Birdie: Anonymous, Christopher Childs, Coca-Cola Company, Georgia Power, Hawkins Parnell Young & Young LLP, JVP Management, KSM, Lazlo 326 Corp, Andy Sanford/Ameriprise, Southern Company, Stanton Barton/McBrayer/Mozley Finlayson Loggins, Tokio Marine HCC.",
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
