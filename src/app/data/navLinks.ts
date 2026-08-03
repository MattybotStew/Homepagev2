export type NavSubPage = { label: string; href: string };
export type NavLink = { label: string; href: string; subPages?: NavSubPage[] };

export const navLinks: NavLink[] = [
	{
		label: "Plan Your Visit",
		href: "#/plan-your-visit",
		subPages: [
			{ label: "Before You Visit", href: "#/plan-your-visit?tab=hours" },
			{ label: "Parties", href: "#/parties" },
			{ label: "Museum Store", href: "#/museum-store" },
		],
	},
	{ label: "Exhibits", href: "#/exhibits" },
	{ label: "Calendar & Events", href: "#/events" },
	{
		label: "For Educators",
		href: "#/educators",
		subPages: [
			{ label: "Field Trips", href: "#/program/field-trips" },
			{ label: "Museum On-the-Go", href: "#/program/museum-on-the-go" },
			{ label: "Scout Workshops", href: "#/program/scout-workshops" },
			{
				label: "Educator PD",
				href: "#/program/educator-professional-development",
			},
		],
	},
	{
		label: "About Us",
		href: "#/about",
		subPages: [
			{ label: "Impact & Community", href: "#/about/impact" },
			{ label: "Careers & Volunteer", href: "#/about/careers" },
		],
	},
	{
		label: "Resources",
		href: "#/news",
		subPages: [
			{ label: "News & Blog", href: "#/news" },
			{
				label: "Playful Learning Resources",
				href: "#/resources/playful-learning",
			},
		],
	},
];

export const TICKETS_URL =
	"https://16707.blackbaudhosting.com/16707/page.aspx?pid=196&tab=2&txobjid=56fa665e-15d9-4500-9b27-c1c2c0b2c6bf";

export const MEMBERSHIP_TICKETS_URL =
	"https://16707.blackbaudhosting.com/16707/CMA-Memberships";

export const membershipsSubPages: NavSubPage[] = [
	{ label: "Memberships", href: "#/memberships" },
	{ label: "Membership Tickets", href: MEMBERSHIP_TICKETS_URL },
	{ label: "Corporate Membership", href: "#/memberships/corporate" },
	{ label: "Information", href: "#/memberships/information" },
];

export const donateSubPages: NavSubPage[] = [
	{ label: "Support", href: "#/support" },
	{ label: "Corporate Partners", href: "#/support/corporate-partners" },
	{ label: "Donor Recognition", href: "#/support/donor-recognition" },
	{ label: "Tournament For Play", href: "#/giving-circles/tournament-for-play" },
	{ label: "Imagination Ball", href: "#/giving-circles/imagination-ball" },
	{ label: "Fun On Tap", href: "#/giving-circles/fun-on-tap" },
	{ label: "Young Professionals", href: "#/giving-circles/young-professionals" },
	{
		label: "Dream Builders Giving Circle",
		href: "#/giving-circles/dream-builders",
	},
];

export function isNavLinkActive(link: NavLink, pathname: string): boolean {
	const linkPath = link.href.replace(/^#/, "");
	return (
		(linkPath === "/"
			? pathname === "/"
			: pathname === linkPath || pathname.startsWith(`${linkPath}/`)) ||
		(link.subPages?.some((sub) => {
			const sp = sub.href.replace(/^#/, "");
			return pathname === sp || pathname.startsWith(`${sp}/`);
		}) ??
			false)
	);
}

export function isSubPageActive(sub: NavSubPage, pathname: string): boolean {
	const subPath = sub.href.replace(/^#/, "");
	return pathname === subPath || pathname.startsWith(`${subPath}/`);
}
