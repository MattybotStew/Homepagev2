import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { allArticles } from "../data/articles";
import { allEvents } from "../data/events";
import { exhibits } from "../data/exhibits";
import { programs } from "../data/programs";
import AlertBanner from "../components/AlertBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import ScrollProgress from "../components/ScrollProgress";

type Result = {
	title: string;
	description: string;
	href: string;
	type: string;
	typeColor: string;
};

function match(query: string, ...fields: (string | undefined)[]): boolean {
	const q = query.toLowerCase();
	return fields.some((f) => f?.toLowerCase().includes(q));
}

function search(query: string): Result[] {
	if (!query.trim()) return [];
	const results: Result[] = [];

	exhibits.forEach((e) => {
		if (match(query, e.title, e.eyebrow, e.paragraphs[0])) {
			results.push({
				title: e.title,
				description: e.paragraphs[0]?.slice(0, 140) + "…",
				href: `/exhibits/${e.slug}`,
				type: "Exhibit",
				typeColor: "bg-cma-teal-dark",
			});
		}
	});

	allEvents.forEach((e) => {
		if (match(query, e.title, e.description, ...e.categories)) {
			results.push({
				title: e.title,
				description: e.description?.slice(0, 140) + "…",
				href: `/events/${e.slug}`,
				type: "Event",
				typeColor: "bg-cma-orange",
			});
		}
	});

	programs.forEach((p) => {
		if (match(query, p.title, p.eyebrow, p.paragraphs[0])) {
			results.push({
				title: p.title,
				description: p.paragraphs[0]?.slice(0, 140) + "…",
				href: `/program/${p.slug}`,
				type: "Program",
				typeColor: "bg-cma-navy",
			});
		}
	});

	allArticles.forEach((a) => {
		if (match(query, a.title, a.description, ...a.categories)) {
			results.push({
				title: a.title,
				description: a.description?.slice(0, 140) + "…",
				href: `/news`,
				type: "News",
				typeColor: "bg-cma-slate",
			});
		}
	});

	return results;
}

export default function SearchPage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const q = searchParams.get("q") ?? "";
	const [input, setInput] = useState(q);
	const inputRef = useRef<HTMLInputElement>(null);
	const results = search(q);

	useEffect(() => {
		setInput(q);
	}, [q]);

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (input.trim()) setSearchParams({ q: input.trim() });
	}

	return (
		<div className="size-full relative">
			<AlertBanner />
			<div className="lg:hidden"><MobileHeader /></div>
			<div className="hidden lg:block"><Header /></div>
			<div className="hidden lg:block"><ScrollProgress /></div>

			{/* Search hero */}
			<section className="bg-cma-navy">
				<div className="shrink-0 h-0 lg:h-[120px] xl:h-[126px]" />
				<div className="cma-section-container py-[64px] md:py-[80px] flex flex-col items-center gap-[32px]">
					<div className="flex flex-col items-center gap-[12px] text-center">
						<p className="cma-eyebrow text-cma-teal">Children's Museum of Atlanta</p>
						<h1 className="text-white">Search</h1>
					</div>
					<form onSubmit={handleSubmit} className="w-full max-w-[640px]">
						<div className="flex items-center gap-[12px] bg-white rounded-[1000px] px-[20px] py-[14px] shadow-cma-panel">
							<FontAwesomeIcon icon={faMagnifyingGlass} className="text-cma-navy/40 text-[16px] shrink-0" />
							<input
								ref={inputRef}
								type="search"
								value={input}
								onChange={(e) => setInput(e.target.value)}
								placeholder="Search exhibits, events, programs…"
								className="flex-1 bg-transparent text-cma-navy text-[16px] font-medium placeholder:text-cma-navy/30 outline-none"
							/>
							<button
								type="submit"
								className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black !py-[8px] !px-[20px] shrink-0"
							>
								Search
							</button>
						</div>
					</form>
				</div>
			</section>

			{/* Results */}
			<section className="bg-cma-cream py-[64px] md:py-[80px] min-h-[40vh]">
				<div className="cma-section-container flex flex-col gap-[32px]">
					{q && (
						<div className="flex items-center justify-between flex-wrap gap-[12px]">
							<p className="text-cma-navy font-bold text-[15px]">
								{results.length > 0
									? `${results.length} result${results.length !== 1 ? "s" : ""} for "${q}"`
									: `No results for "${q}"`}
							</p>
							{results.length === 0 && (
								<a
									href={`https://www.childrensmuseumatlanta.org/?s=${encodeURIComponent(q)}`}
									target="_blank"
									rel="noopener noreferrer"
									className="cma-text-link font-bold text-[14px]"
								>
									Search on childrensmuseumatlanta.org →
								</a>
							)}
						</div>
					)}

					{results.length > 0 && (
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]">
							{results.map((r, i) => (
								<Link
									key={i}
									to={r.href}
									className="bg-white rounded-[20px] border border-black/5 p-[24px] flex flex-col gap-[12px] hover:shadow-cma-card transition-shadow"
								>
									<span className={`${r.typeColor} text-white text-[11px] font-extrabold uppercase tracking-[1px] px-[10px] py-[4px] rounded-full self-start`}>
										{r.type}
									</span>
									<p className="font-extrabold text-cma-navy text-[16px] leading-[1.3]">{r.title}</p>
									<p className="text-cma-navy/60 text-[13px] leading-[1.5] flex-1">{r.description}</p>
									<span className="cma-text-link font-bold text-[13px]">View →</span>
								</Link>
							))}
						</div>
					)}

					{q && results.length === 0 && (
						<div className="bg-white rounded-[24px] border-2 border-black/5 p-[48px] flex flex-col items-center gap-[16px] text-center">
							<FontAwesomeIcon icon={faMagnifyingGlass} className="text-cma-navy/20 text-[40px]" />
							<h3 className="text-cma-navy">No results found</h3>
							<p className="text-cma-navy/60 max-w-[400px]">
								Try different keywords, or browse our site sections below.
							</p>
							<div className="flex flex-wrap gap-[10px] justify-center pt-[8px]">
								{[
									{ label: "Exhibits", to: "/exhibits" },
									{ label: "Events", to: "/events" },
									{ label: "Programs", to: "/educators" },
									{ label: "News", to: "/news" },
									{ label: "Plan Your Visit", to: "/plan-your-visit" },
								].map(({ label, to }) => (
									<Link
										key={to}
										to={to}
										className="cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:text-white hover:border-cma-teal-dark font-black !py-[8px] !px-[16px] text-[13px]"
									>
										{label}
									</Link>
								))}
							</div>
						</div>
					)}

					{!q && (
						<div className="flex flex-col items-center gap-[12px] text-center py-[40px]">
							<FontAwesomeIcon icon={faMagnifyingGlass} className="text-cma-navy/20 text-[40px]" />
							<p className="text-cma-navy/50 font-medium">Enter a search term above to find exhibits, events, programs, and more.</p>
						</div>
					)}
				</div>
			</section>

			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
