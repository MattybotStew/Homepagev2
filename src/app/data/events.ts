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
	dateStart: string; // ISO 8601 local datetime e.g. "2026-08-02T09:00:00"
	dateEnd: string;
	location: string;
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
		dateStart: "2026-08-02T09:00:00",
		dateEnd: "2026-08-02T11:00:00",
		location: "275 Centennial Olympic Park Dr NW, Atlanta, GA 30313",
		paragraphs: [
			"Sensory Friendly Playtime is a specially modified museum experience designed for children who benefit from a quieter, calmer environment. On select Sunday mornings, we reduce lighting levels, limit overall admission capacity, minimize ambient sound, and ask visitors to keep voices low so every child can enjoy the museum at their own pace.",
			"This experience is open to all families — you do not need a diagnosis or documentation to attend. We simply ask that all guests be mindful of others and support a peaceful, sensory-aware environment. Sensory-friendly mornings are included with regular museum admission.",
		],
	},
	{
		slug: "tinycon",
		image: imgC,
		badge: "September 5–6, 2026 • Ages: 4–8",
		title: "TinyCON®",
		description:
			"A con just for kids! Held annually on Labor Day weekend, TinyCON® is a multi-day celebration of fantasy, science fiction, and your favorite fictional universes!",
		categories: ["Featured", "Special Events"],
		dateStart: "2026-09-05T10:00:00",
		dateEnd: "2026-09-06T17:00:00",
		location: "275 Centennial Olympic Park Dr NW, Atlanta, GA 30313",
		paragraphs: [
			"TinyCON® is the Children's Museum of Atlanta's annual celebration of all things playful, creative, and pop culture. This two-day event transforms the museum into a mini convention floor — complete with cosplay contests, character meet-and-greets, artist tables, panel-style storytimes, and hands-on activities inspired by beloved books, shows, and games.",
			"Costumes are strongly encouraged but never required. TinyCON® is designed as a safe, family-friendly environment where every child's interest is celebrated — whether they love superheroes, anime, fantasy, gaming, or something entirely their own. Included with regular museum admission; some ticketed meet-and-greet experiences available on a first-come basis.",
		],
	},
	{
		slug: "gabbys-dollhouse",
		image: imgA,
		badge: "October 9–11, 2026 • Ages: 4–8",
		title: "Gabby's Dollhouse MEOWseum Discovery Days",
		description:
			"Join us for a purr-fectly fun day with Gabby's Dollhouse MEOWseum Discovery Days! Families will have the chance to meet and snap a photo with the beloved costumed character Gabby, of Gabby's Dollhouse!",
		categories: ["Special Events", "Seasonal"],
		dateStart: "2026-10-09T10:00:00",
		dateEnd: "2026-10-11T17:00:00",
		location: "275 Centennial Olympic Park Dr NW, Atlanta, GA 30313",
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
			"Spooktacular family fun! Pull on your costume for trick-or-treating and fang-tastically fun hands-on play. With a live DJ, candy galore, and more! Trick-or-Treat at the Museum is always a ghoulishly good time!",
		categories: ["Featured", "Seasonal"],
		dateStart: "2026-10-24T10:00:00",
		dateEnd: "2026-10-24T17:00:00",
		location: "275 Centennial Olympic Park Dr NW, Atlanta, GA 30313",
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
			"Join us for a special kid-friendly New Year's countdown! We'll laugh, dance, play games, and more. Enjoy music from our DJ, hands-on fun, and ring in the new year with our yearly bubble-wrap-popping tradition!",
		categories: ["Featured", "Special Events"],
		dateStart: "2026-12-31T10:00:00",
		dateEnd: "2026-12-31T15:00:00",
		location: "275 Centennial Olympic Park Dr NW, Atlanta, GA 30313",
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
			"Let's get artsy! Join us in the Art Studio for a fun artsy craft on Mondays.",
		categories: ["Workshops", "This Week"],
		dateStart: "2026-09-07T10:00:00",
		dateEnd: "2026-09-07T17:00:00",
		location: "275 Centennial Olympic Park Dr NW, Atlanta, GA 30313",
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
