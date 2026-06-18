export type NavSubPage = { label: string; href: string };
export type NavLink = { label: string; href: string; subPages?: NavSubPage[] };

export const navLinks: NavLink[] = [
	{
		label: "Plan Your Visit",
		href: "#/plan-your-visit",
		subPages: [
			{ label: "Hours & Address", href: "#/plan-your-visit?tab=hours" },
			{ label: "Location & Parking", href: "#/plan-your-visit?tab=parking" },
			{ label: "What to Bring", href: "#/plan-your-visit?tab=bring" },
			{ label: "Food & Amenities", href: "#/plan-your-visit?tab=amenities" },
			{ label: "Safety & Cleanliness", href: "#/plan-your-visit?tab=safety" },
			{ label: "Accessibility", href: "#/plan-your-visit?tab=accessibility" },
			{ label: "Parties", href: "#/plan-your-visit?tab=parties" },
			{ label: "Private Events", href: "#/plan-your-visit?tab=private" },
			{ label: "Arrival Window", href: "#/plan-your-visit?tab=arrival" },
			{ label: "Code of Conduct", href: "#/plan-your-visit?tab=conduct" },
			{ label: "Policies & Rules", href: "#/plan-your-visit?tab=policies" },
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
