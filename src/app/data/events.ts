import imgB from "../../assets/1bfa9acf43f185f4d4031bdadb934f4c9dec4b57.webp";
import imgA from "../../assets/1fc4baecdde9a2932370e7a6c6cbbddba70e38a1.webp";
import imgC from "../../assets/39da2bd0af3dceef1e3b406cd981247f82778d27.webp";

export type EventItem = {
	slug: string;
	image: string;
	badge: string;
	title: string;
	description: string;
	categories: string[];
	paragraphs: string[];
};

export const allEvents: EventItem[] = [
	{
		slug: "sensory-friendly-playtime",
		image: imgA,
		badge: "August 2, 2026 • Ages: 4–8",
		title: "Sensory Friendly Playtime",
		description:
			"Enjoy a sensory-modified experience on select Sunday mornings. This experience includes lowered lighting, limited admission and sound adjustments.",
		categories: ["Featured", "Special Events"],
		paragraphs: [
			"Sensory Friendly Playtime is a specially modified museum experience designed for children who benefit from a quieter, calmer environment. On select Sunday mornings, we reduce lighting levels, limit overall admission capacity, minimize ambient sound, and ask visitors to keep voices low so every child can enjoy the museum at their own pace.",
			"This experience is open to all families — you do not need a diagnosis or documentation to attend. We simply ask that all guests be mindful of others and support a peaceful, sensory-aware environment. Sensory-friendly mornings are included with regular museum admission.",
		],
	},
	{
		slug: "members-only-hour",
		image: imgB,
		badge: "August 1–31, 2026 • Ages: 1–8",
		title: "Members-Only Hour",
		description:
			"Members enjoy exclusive early access every day in August. Explore your favorite exhibits before doors open to the public.",
		categories: ["Featured", "Members-Only"],
		paragraphs: [
			"Every day in August, CMA members get a head start on the fun. Members-Only Hour runs from 9–10am daily, giving member families a full hour of quiet, crowd-free access to all exhibits before general admission opens. It's the best way to get more out of every visit.",
			"This perk is available to all active CMA member households at no additional cost. Simply show your member card or digital membership confirmation at the door. Not a member yet? August is a great time to join — this exclusive access is just one of many benefits waiting for your family.",
		],
	},
	{
		slug: "tinycon",
		image: imgC,
		badge: "September 5–6, 2026 • Ages: 4–8",
		title: "TinyCON®",
		description:
			"A kid-sized comic convention celebrating imagination, creativity, and pop culture. Costumes encouraged — all ages welcome!",
		categories: ["Featured", "Special Events"],
		paragraphs: [
			"TinyCON® is the Children's Museum of Atlanta's annual celebration of all things playful, creative, and pop culture. This two-day event transforms the museum into a mini convention floor — complete with cosplay contests, character meet-and-greets, artist tables, panel-style storytimes, and hands-on activities inspired by beloved books, shows, and games.",
			"Costumes are strongly encouraged but never required. TinyCON® is designed as a safe, family-friendly environment where every child's interest is celebrated — whether they love superheroes, anime, fantasy, gaming, or something entirely their own. Included with regular museum admission; some ticketed meet-and-greet experiences available on a first-come basis.",
		],
	},
	{
		slug: "gabbys-dollhouse",
		image: imgA,
		badge: "October 9–11, 2026 • Ages: 4–8",
		title: "Gabby's Dollhouse",
		description:
			"Step inside Gabby's Dollhouse for a magical weekend of creativity and play inspired by the beloved Netflix series.",
		categories: ["Special Events", "Seasonal"],
		paragraphs: [
			"Join Gabby and the CatRat crew for a magical three-day pop-up weekend at the Children's Museum! Inspired by the beloved Netflix series Gabby's Dollhouse, this event brings the colorful, crafty world of the show to life with themed play stations, art-making, character activities, and surprise appearances.",
			"Children can create their own dollhouse scenes, design their own cats, and explore rooms inspired by the show throughout the museum. This event is included with regular museum admission and is sure to sell out quickly — advance tickets are strongly recommended.",
		],
	},
	{
		slug: "trick-or-treat",
		image: imgB,
		badge: "October 24, 2026 • Ages: 4–8",
		title: "Trick-Or-Treat",
		description:
			"Bring your little ghouls and goblins for a safe, indoor Halloween treat trail through the museum. Costumes required, candy guaranteed.",
		categories: ["Featured", "Seasonal"],
		paragraphs: [
			"Trick-or-Treat at the Children's Museum is the safest, most fun Halloween experience in Atlanta. On October 24th, the museum transforms into a candy trail — with treat stations at every exhibit, educator-led Halloween activities, and a costume parade that kids and caregivers will talk about all year.",
			"Costumes are required for participation in the treat trail. All candy is individually wrapped and peanut-free. We also offer a designated quiet zone for children who may find the event overstimulating. Advance tickets are required and this event sells out every year — book early!",
		],
	},
	{
		slug: "bubble-bash",
		image: imgC,
		badge: "December 31, 2026 • Ages: 4–8",
		title: "Bubble Bash",
		description:
			"Ring in the New Year early with our family-friendly countdown celebration featuring giant bubbles, dancing, and a noon confetti drop!",
		categories: ["Featured", "Special Events"],
		paragraphs: [
			"No need to stay up until midnight — Bubble Bash is New Year's Eve done right for families. Join us on December 31st for an afternoon of giant bubbles, dancing, silly string stations, and our signature noon-o'clock confetti drop that counts down to the new year at a very reasonable hour.",
			"The celebration includes live DJ music, a photo booth with props, and a special bubble science demo that explains the physics of why bubbles are perfectly round. Included with regular museum admission. Party hats provided. Confetti not optional.",
		],
	},
	{
		slug: "artsy-mondays",
		image: imgA,
		badge: "September 7, 2026 • Building Blocks",
		title: "Artsy Mondays",
		description:
			"Dive into open-ended art-making every Monday as part of our Building Blocks series. Drop in anytime during museum hours.",
		categories: ["Workshops", "This Week"],
		paragraphs: [
			"Artsy Mondays is part of the Building Blocks series — a rotating weekly programming schedule at the Children's Museum designed to give families a new reason to visit every week. On Mondays, our art educators set up open-ended art-making stations throughout the museum with rotating materials and prompts.",
			"There's no right or wrong way to participate — children explore materials at their own pace, guided gently by educators who ask questions rather than give instructions. Drop in anytime during regular museum hours. Artsy Mondays is included with regular museum admission.",
		],
	},
];

export const eventFilters = [
	"All",
	"Featured",
	"Today",
	"This Week",
	"Members-Only",
	"Free Events",
	"Workshops",
	"Seasonal",
	"Special Events",
];

export const eventsByCategory: Record<string, EventItem[]> = {
	All: allEvents,
	Today: [],
	...Object.fromEntries(
		eventFilters
			.filter((f) => f !== "All" && f !== "Today")
			.map((cat) => [cat, allEvents.filter((e) => e.categories.includes(cat))]),
	),
};
