import { useLocation } from "react-router-dom";

const links = [
	{ label: "Education Home", href: "#/educators" },
	{ label: "Field Trips", href: "#/program/field-trips" },
	{ label: "Museum On-the-Go", href: "#/program/museum-on-the-go" },
	{ label: "Scout Workshops", href: "#/program/scout-workshops" },
	{ label: "Educator PD", href: "#/program/educator-professional-development" },
];

export default function EducatorsSubNav() {
	const { pathname } = useLocation();

	const isActive = (href: string) => {
		const slug = href
			.replace("#/program/", "")
			.replace("#/educators", "educators");
		if (href === "#/educators") return pathname === "/educators";
		return pathname.includes(slug);
	};

	return (
		<div className="bg-cma-teal-dark w-full">
			<div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-[80px]">
				<div className="cma-pill-scroll py-[10px]">
					{links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className={`cma-nav-pill whitespace-nowrap ${isActive(link.href) ? "cma-nav-pill-active" : "bg-white/20 text-white hover:bg-white/30 border border-white/20"}`}
						>
							{link.label}
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
