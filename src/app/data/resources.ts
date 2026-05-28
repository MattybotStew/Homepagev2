import imgB from "../../assets/1bfa9acf43f185f4d4031bdadb934f4c9dec4b57.webp";
import imgA from "../../assets/1fc4baecdde9a2932370e7a6c6cbbddba70e38a1.webp";
import imgC from "../../assets/39da2bd0af3dceef1e3b406cd981247f82778d27.webp";

export type ResourceItem = {
	slug: string;
	image: string;
	badge: string;
	title: string;
	description: string;
	categories: string[];
};

export const allResources: ResourceItem[] = [
	{
		slug: "loose-parts-play-guide",
		image: imgA,
		badge: "Activity Guide • Ages 2–8",
		title: "Loose Parts Play: A Guide for Caregivers",
		description:
			"Learn how to set up open-ended building and tinkering stations at home using everyday materials — bottle caps, cardboard, fabric scraps, and more.",
		categories: ["Featured", "At-Home Activities"],
	},
	{
		slug: "language-rich-play",
		image: imgB,
		badge: "Research Summary • All Ages",
		title: "Talk More, Ask More: Building Language Through Play",
		description:
			"Discover why open-ended questions during play are more powerful than praise, and how simple narration techniques build vocabulary in children under 5.",
		categories: ["Featured", "Early Literacy"],
	},
	{
		slug: "sensory-bin-recipes",
		image: imgC,
		badge: "Activity Guide • Ages 1–5",
		title: "Sensory Bin Recipes for Every Season",
		description:
			"Six seasonal sensory bin setups using safe, affordable materials. Includes tips for adapting each bin for children with sensory sensitivities.",
		categories: ["At-Home Activities", "Sensory & Social"],
	},
	{
		slug: "reading-aloud-techniques",
		image: imgA,
		badge: "Educator Resource • PreK–Grade 2",
		title: "The Art of Reading Aloud: Techniques That Spark Imagination",
		description:
			"A practitioner's guide to read-aloud strategies that build comprehension, empathy, and a lifelong love of stories — from voice work to post-book conversation.",
		categories: ["Featured", "Early Literacy", "For Educators"],
	},
	{
		slug: "executive-function-games",
		image: imgB,
		badge: "Activity Guide • Ages 3–7",
		title: "Games That Build Executive Function",
		description:
			"Simple games you already own — Simon Says, Freeze Dance, card games — and exactly how they develop self-regulation, working memory, and flexible thinking.",
		categories: ["At-Home Activities", "STEM & Tinkering"],
	},
	{
		slug: "nature-play-benefits",
		image: imgC,
		badge: "Research Summary • All Ages",
		title: "Why Nature Play Matters: The Science Behind Outdoor Learning",
		description:
			"A plain-language summary of the research on outdoor and nature-based play, including its effects on attention, risk tolerance, and physical development.",
		categories: ["Research & Reports"],
	},
	{
		slug: "dramatic-play-setup",
		image: imgA,
		badge: "Activity Guide • Ages 2–6",
		title: "Setting Up Dramatic Play Spaces at Home",
		description:
			"How to create a dramatic play corner that rotates themes — grocery store, vet clinic, restaurant — without buying a lot of new materials.",
		categories: ["At-Home Activities", "Sensory & Social"],
	},
	{
		slug: "steam-kitchen-experiments",
		image: imgB,
		badge: "Activity Guide • Ages 4–8",
		title: "Kitchen STEAM: Science Experiments with Pantry Staples",
		description:
			"Eight classic and surprising experiments using baking soda, vinegar, food coloring, and other pantry items, with the real science explained in kid-friendly terms.",
		categories: ["STEM & Tinkering"],
	},
	{
		slug: "museum-at-home-tips",
		image: imgC,
		badge: "Educator Resource • All Ages",
		title: "Bringing the Museum Home: Tips from Our Educators",
		description:
			"Our lead educators share the mindsets and micro-habits they use every day — and how caregivers can apply the same principles without a museum budget.",
		categories: ["Featured", "For Educators"],
	},
];

export const resourceFilters = [
	"All",
	"Featured",
	"At-Home Activities",
	"Early Literacy",
	"STEM & Tinkering",
	"Sensory & Social",
	"For Educators",
	"Research & Reports",
];

export const resourcesByCategory: Record<string, ResourceItem[]> = {
	All: allResources,
	...Object.fromEntries(
		resourceFilters
			.filter((f) => f !== "All")
			.map((cat) => [
				cat,
				allResources.filter((r) => r.categories.includes(cat)),
			]),
	),
};
