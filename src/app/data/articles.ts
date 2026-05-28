import imgB from "../../assets/1bfa9acf43f185f4d4031bdadb934f4c9dec4b57.webp";
import imgA from "../../assets/1fc4baecdde9a2932370e7a6c6cbbddba70e38a1.webp";
import imgC from "../../assets/39da2bd0af3dceef1e3b406cd981247f82778d27.webp";

export type ArticleItem = {
	slug: string;
	image: string;
	badge: string;
	title: string;
	description: string;
	categories: string[];
	paragraphs: string[];
};

export const allArticles: ArticleItem[] = [
	{
		slug: "why-play-matters",
		image: imgA,
		badge: "Museum News • May 12, 2026",
		title: "Why Play Matters More Than Ever",
		description:
			"New research shows that unstructured, child-led play is one of the most powerful predictors of lifelong learning and emotional resilience.",
		categories: ["Featured", "Education"],
		paragraphs: [
			"Play is not a break from learning — it is learning. Decades of developmental research confirm that when children engage in self-directed play, they build the executive function, creativity, and social skills that formal instruction alone cannot cultivate.",
			"At Children's Museum of Atlanta, every exhibit is designed with this science at its core. From the open-ended building stations in Fundamentally Food to the role-play environments in WaterWorks, we create conditions where curiosity leads and children follow.",
		],
	},
	{
		slug: "behind-the-scenes-exhibit-build",
		image: imgB,
		badge: "Behind the Scenes • April 28, 2026",
		title: "Building an Exhibit: A Look Behind the Curtain",
		description:
			"Our exhibit design team shares what goes into creating a hands-on experience that works for every child, from concept sketches to opening day.",
		categories: ["Featured", "Behind the Scenes"],
		paragraphs: [
			"Creating a museum exhibit is part architecture, part theater, part child psychology — and entirely collaborative. Our design team includes educators, accessibility specialists, artists, and fabricators who spend months prototyping, testing, and refining before a single panel goes on the floor.",
			"The process always starts with a question: what do we want children to discover? Not learn — discover. That framing shapes every material choice, every height, every texture. By the time an exhibit opens, it has been touched by dozens of hands and tested by hundreds of children.",
		],
	},
	{
		slug: "summer-reading-partnership",
		image: imgC,
		badge: "Community • April 15, 2026",
		title: "Our Summer Reading Partnership with Atlanta Public Libraries",
		description:
			"CMA and Atlanta Public Libraries are teaming up to bring reading and play together across the city this summer.",
		categories: ["Featured", "Community"],
		paragraphs: [
			"This summer, Children's Museum of Atlanta and Atlanta Public Libraries are joining forces to create a seamless bridge between the library and the museum. Families who complete summer reading milestones at their local branch will receive free or discounted admission to CMA, and CMA visitors will receive library card sign-up support and curated reading lists at the museum.",
			"The partnership reflects a shared belief that literacy and play are deeply connected. Reading builds the imagination that play expresses, and play builds the language that reading requires. Together, these two institutions serve over 300,000 Atlanta families — and this summer, they'll do it in lockstep.",
		],
	},
	{
		slug: "educator-spotlight-ms-jones",
		image: imgA,
		badge: "Education • March 30, 2026",
		title: "Educator Spotlight: Ms. Jones and the Art of Asking",
		description:
			"Meet one of our lead museum educators and learn how she uses open-ended questions to turn a simple art table into a rich learning experience.",
		categories: ["Education", "Behind the Scenes"],
		paragraphs: [
			'Ms. Jones has worked at Children\'s Museum of Atlanta for seven years, and in that time she has never once told a child the right way to do something at her table. "My job is to be curious alongside them," she says. "The moment I give the answer, the learning stops."',
			"Her technique — asking open-ended questions, narrating what she observes, and resisting the urge to correct — is grounded in Reggio Emilia pedagogy and decades of early childhood research. It also happens to be one of the hardest things for most adults to do. Watching her work is a masterclass in restraint and wonder.",
		],
	},
	{
		slug: "new-accessible-entrance",
		image: imgB,
		badge: "Museum News • March 10, 2026",
		title: "A More Accessible Museum: Our New Entrance Experience",
		description:
			"We've redesigned our main entrance to be more welcoming for visitors with mobility devices, sensory sensitivities, and visual impairments.",
		categories: ["Museum News"],
		paragraphs: [
			"Accessibility has always been a core value at Children's Museum of Atlanta, and this spring we're putting that value into physical form. Our newly redesigned main entrance features step-free pathways from the parking deck, quieter check-in zones, tactile wayfinding, and sensory kits available at the welcome desk.",
			"These changes were designed in direct partnership with disability advocacy groups and families who shared their experiences with us over the past two years. We're proud of the progress — and we know there's more work ahead. Feedback from the community continues to be our most important guide.",
		],
	},
	{
		slug: "tinycage-recap",
		image: imgC,
		badge: "Events Recap • February 20, 2026",
		title: "TinyCON 2025: A Look Back at Our Biggest Event Yet",
		description:
			"Over 4,000 families attended TinyCON® last fall. Here's a look at the highlights, the community that showed up, and what we're already planning for next year.",
		categories: ["Events Recap", "Community"],
		paragraphs: [
			"TinyCON® 2025 was, by every measure, our most successful event in the museum's history. Over 4,000 families passed through our doors across two days, with costumes ranging from elaborate handmade armor to a toddler in a cardboard rocket — all equally celebrated.",
			"The event featured 18 different activity stations, three cosplay showcases, and a special story-time performance that packed the main hall twice over. We heard from families who drove from Birmingham, Savannah, and Chattanooga specifically for TinyCON®. We're already planning 2026, and it's going to be bigger. Stay tuned.",
		],
	},
];

export const articleFilters = [
	"All",
	"Featured",
	"Museum News",
	"Education",
	"Community",
	"Behind the Scenes",
	"Events Recap",
];

export const articlesByCategory: Record<string, ArticleItem[]> = {
	All: allArticles,
	...Object.fromEntries(
		articleFilters
			.filter((f) => f !== "All")
			.map((cat) => [
				cat,
				allArticles.filter((a) => a.categories.includes(cat)),
			]),
	),
};
