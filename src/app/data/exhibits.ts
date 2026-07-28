import imgCreativity from "../../assets/exhibit-creativity.webp";
import imgTools from "../../assets/exhibit-tools.webp";
import imgSpring from "../../assets/exhibits-spring-hero.webp";
import kratts from "../../assets/kratts.png";
import mcstuff from "../../assets/mcstuff.png";
import amazingCastle from "../../assets/amazing-castle.png";
import fundamentallyFoods from "../../assets/fundamentally-foods.png";
import gatewayToTheWorld from "../../assets/gateway-to-the-world.png";
import outsideTheBox from "../../assets/outside-the-box.png";
import placeInSpace from "../../assets/place-in-space.png";
import stepUpToScience from "../../assets/step-up-to-science.png";
import leapingIntoLearning from "../../assets/Leaping-into-Learning.png";
import obstacleAdventure from "../../assets/ObstacleAdventure.png";
import sponsorAtlMoca from "../../assets/sponsor-atl-moca.png";
import sponsorFultonArts from "../../assets/sponsor-fulton-arts.png";
import wkTortuga from "../../assets/wk-tortuga.png";
import wkSeahorse from "../../assets/wk-seahorse.png";
import wkShallowSeas from "../../assets/wk-shallow-seas.png";
import wkDeepSea from "../../assets/wk-deep-sea.png";
import wkTotSpot from "../../assets/wk-tot-spot.png";

export type ExhibitSection = {
	title: string;
	subtitle?: string;
	body: string;
};

export type Exhibit = {
	slug: string;
	title: string;
	badge: string;
	badgeColor: "teal-dark" | "navy";
	eyebrow: string;
	heroImage: string;
	cardImage: string;
	paragraphs: string[];
	sections?: ExhibitSection[];
	/** HTML rich text — preferred body when present (WordPress-ready) */
	content?: string;
};

export const exhibits: Exhibit[] = [
	{
		slug: "aim-high-soaring-with-the-tuskegee-airmen",
		title: "Aim High: Soaring with the Tuskegee Airmen",
		badge: "Spring 2026",
		badgeColor: "teal-dark",
		eyebrow: "Ages: 5–8 | Usually 15–20 minutes",
		heroImage: imgSpring,
		cardImage: imgSpring,
		paragraphs: [
			"Play in a replica cockpit and discover the remarkable story of the Tuskegee Airmen — America's first Black military aviators. Visitors take the controls in a full-size cockpit, decode flight instruments, and learn how courage and determination helped these pioneering pilots break barriers in the skies above World War II Europe.",
			"Through hands-on activities and immersive storytelling, children and families explore the science of flight, the history of the civil rights movement, and the powerful message that anything is possible when you dare to dream. Part of our Spring 2026 rotating exhibit series, this experience is designed to inspire the next generation of aviators, scientists, and changemakers.",
		],
	},
	{
		slug: "wild-kratts-ocean-adventure",
		title: "Wild Kratts®: Ocean Adventure!",
		badge: "Summer 2026",
		badgeColor: "teal-dark",
		eyebrow: "Ages: 4–14 | May 23 – Sep 13, 2026 | 25–30 minutes",
		heroImage: kratts,
		cardImage: kratts,
		paragraphs: [
			"Wild Kratts®: Ocean Adventure!, a brand-new temporary exhibit at the Museum, immerses the young explorers in your life in whole body explorations of ocean habitats and the fascinating creatures within them.",
		],
		content: `
<p>Wild Kratts®: Ocean Adventure!, a brand-new temporary exhibit at the Museum, immerses the young explorers in your life in whole body explorations of ocean habitats and the fascinating creatures within them. Using Wild Kratts technology and the powers of science and teamwork, visitors will join the Wild Kratts team to solve problems, help animals, and foil the villains' nefarious plans.</p>
<p>This exhibit is recommended for children ages 3 – 9, and includes a “tot spot” specifically for children under three years of age. This exhibit is only at Children's Museum of Atlanta for a limited time. Catch this adventure before it leaves town!</p>

<div class="wp-block-media-text is-stacked-on-mobile has-media-on-the-right">
	<figure class="wp-block-media-text__media"><img src="${wkTortuga}" alt="The Tortuga zone in Wild Kratts Ocean Adventure" /></figure>
	<div class="wp-block-media-text__content">
		<h3>The Tortuga</h3>
		<p>Stepping through the entry arch brings visitors straight into the Tortuga, where a large scenic graphic provides context and subtly cues a narrative of the work happening in Wild Kratts HQ.</p>
		<p>Children don a creature power vest and begin their creature adventure by working alongside the Wild Kratts team, testing a prototype for the colossal squid creature power suit, and researching marine animals. Here they're also prompted to take on missions throughout the exhibit to help animals and foil the villains.</p>
	</div>
</div>

<div class="wp-block-media-text is-stacked-on-mobile has-media-on-the-right">
	<figure class="wp-block-media-text__media"><img src="${wkSeahorse}" alt="Seahorse tide pool zone in Wild Kratts Ocean Adventure" /></figure>
	<div class="wp-block-media-text__content">
		<h3>Seahorse</h3>
		<p>A structure based on a rocky coastline provides the perimeter of an oversized tide pool within. Visitors take notice of the tide pool creatures featured on the rocky exterior and are enticed to enter the space within.</p>
		<p>Stepping across the miniaturizer, they “shrink down” and enter an oversized, otherworldly environment where they get an up-close experience with hardy tide pool creatures.</p>
	</div>
</div>

<div class="wp-block-media-text is-stacked-on-mobile has-media-on-the-right">
	<figure class="wp-block-media-text__media"><img src="${wkShallowSeas}" alt="Shallow Seas zone in Wild Kratts Ocean Adventure" /></figure>
	<div class="wp-block-media-text__content">
		<h3>Shallow Seas</h3>
		<p>A large coral arch welcomes visitors to the shallow seas. Visitors dive into explorations of some of the most popular marine animals, cleaning algae off a shark, creating their own dolphin names, and replacing a shark's lost teeth.</p>
	</div>
</div>

<div class="wp-block-media-text is-stacked-on-mobile has-media-on-the-right">
	<figure class="wp-block-media-text__media"><img src="${wkDeepSea}" alt="Deep Sea zone in Wild Kratts Ocean Adventure" /></figure>
	<div class="wp-block-media-text__content">
		<h3>Deep Sea</h3>
		<p>Traveling to the darkest ocean depths, visitors pilot the amphisub to view creatures living along the sea floor, simulate a sperm whale's booming power, and interact with rarely seen deep-sea creatures.</p>
	</div>
</div>

<div class="wp-block-media-text is-stacked-on-mobile has-media-on-the-right">
	<figure class="wp-block-media-text__media"><img src="${wkTotSpot}" alt="Tot Spot zone in Wild Kratts Ocean Adventure" /></figure>
	<div class="wp-block-media-text__content">
		<h3>Tot Spot</h3>
		<p>Based loosely on a commercial boat slip, a ring of fenders attached to a bulkhead provides a safe harbor for the youngest visitors. The space within protects crawlers and walkers from the activity of older children, and ocean-themed busy wall activities delight and entertain.</p>
		<p>Parents and caregivers can sit on the fender wall and engage with their children while keeping an eye on any older children playing elsewhere in the exhibit.</p>
	</div>
</div>

<h2>Sponsors</h2>
<p>The exhibit has been made possible by the generous support of:</p>

<div class="wp-block-media-text is-stacked-on-mobile has-media-on-the-left is-sponsor-row">
	<figure class="wp-block-media-text__media"><img src="${sponsorAtlMoca}" alt="City of Atlanta — Moving Atlanta Forward" /></figure>
	<div class="wp-block-media-text__content">
		<p><em>This program is supported in part by the City of Atlanta Mayor's Office of Cultural Affairs.</em></p>
	</div>
</div>

<div class="wp-block-media-text is-stacked-on-mobile has-media-on-the-left is-sponsor-row">
	<figure class="wp-block-media-text__media"><img src="${sponsorFultonArts}" alt="Fulton County Arts &amp; Culture" /></figure>
	<div class="wp-block-media-text__content">
		<p><em>Major funding for this organization is provided by the Fulton County Board of Commissioners.</em></p>
	</div>
</div>

<p>Wild Kratts®: Ocean Adventure! was created by Minnesota Children's Museum and The Kratt Brothers Company. Wild Kratts® © 2026 Kratt Brothers Company Ltd. / 9 Story Media Group Inc. Wild Kratts® and Ocean Adventure and associated characters, trademarks, and design elements are owned by Kratt Brothers Company Ltd. Licensed by Kratt Brothers Company Ltd. All Rights Reserved.</p>
`.trim(),
	},
	{
		slug: "outside-the-box",
		title: "Outside the Box",
		badge: "Coming Soon",
		badgeColor: "teal-dark",
		eyebrow: "",
		heroImage: outsideTheBox,
		cardImage: outsideTheBox,
		paragraphs: [
			"Transform everyday boxes into anything you can imagine: cars, houses, rockets, robots, and more! At Outside the Box, the only limit is your creativity. Young inventors explore the basics of math, engineering, and science by building, testing, and redesigning their own constructions from scratch.",
			"This pop-up exhibit is designed to spark a love of making and experimentation. From collaborative group builds to solo creations, every visit produces something new. Outside the Box celebrates the spirit of curiosity — the same spirit that drives every great inventor.",
		],
	},
	{
		slug: "obstacle-adventure",
		title: "Obstacle Adventure: Make Your Own Path",
		badge: "Coming Soon",
		badgeColor: "teal-dark",
		eyebrow: "",
		heroImage: obstacleAdventure,
		cardImage: obstacleAdventure,
		paragraphs: [
			"Climb, crawl, balance, and explore your way through a giant obstacle course where you choose your own path, take on new challenges, and discover fun, unexpected ways to move your body. Obstacle Adventure transforms the museum into a playground — scaling walls, crossing bridges, and navigating tunnels that test coordination, strength, and bravery.",
			"This pop-up exhibit celebrates physical literacy and adventurous play. Every child's journey through Obstacle Adventure is unique — some go fast, some go slow, and all arrive at the same destination: confidence, joy, and the satisfaction of a challenge conquered.",
		],
	},
	{
		slug: "our-place-in-space",
		title: "Our Place in Space",
		badge: "Coming Soon",
		badgeColor: "teal-dark",
		eyebrow: "",
		heroImage: placeInSpace,
		cardImage: placeInSpace,
		paragraphs: [
			"Blast off into our solar system! Enter the planetarium to explore the planets and their orbits, discover the difference between stars and galaxies, and find out just how far away the nearest planet really is. Our Place in Space brings the universe down to earth — or rather, lets little explorers leave it behind.",
			"This immersive pop-up exhibit is part digital experience, part hands-on science lab. Visitors plot courses between planets, learn what gravity feels like on other worlds, and design their own spacecraft. Whether you're dreaming of Mars or just curious about the night sky, Our Place in Space is your launchpad.",
		],
	},
	{
		slug: "fundamentally-food",
		title: "Fundamentally Food",
		badge: "Permanent",
		badgeColor: "navy",
		eyebrow: "Ages: 10 months – 8 years",
		heroImage: fundamentallyFoods,
		cardImage: fundamentallyFoods,
		paragraphs: [
			"Climb tractors, milk a dairy cow, load delivery trucks, shop a bustling grocery store, and cook pretend meals together. Through playful farm-to-table fun, explore where our food comes from, how it moves, and how food helps families grow strong and healthy.",
		],
		sections: [
			{
				title: "Farm",
				body: "In addition to favorites such as Buttercup the cow and our John Deere Tractor, the farm area includes a new chicken coop where children may collect eggs, a Georgia-grown planting area, and two computer interactives: one that demonstrates the many jobs needed in order to make a farm run and the other that illustrates how different seeds grow.",
			},
			{
				title: "Grocery Store",
				subtitle: "Closed September 25 – October 3.",
				body: "Children learn math and coordination skills as they fill up their grocery carts, stock groceries on the shelves, use the cash register, work in the deli, and run their own grocery store filled with nutritious options.",
			},
			{
				title: "Delivery Truck",
				subtitle: "Closed September 25 – October 3.",
				body: 'How does our food get from the farm to the grocery store? The delivery truck, of course! Children "drive" the Museum delivery truck and use the conveyor belts to move important goods to and from the neighborhood grocery store.',
			},
			{
				title: "Cafe",
				body: "Pretend play is front and center at the CMA Cafe. Children will love playing chef behind the grill, taking orders at the counter, creating menus of healthy food options, and ordering meals all on their own.",
			},
		],
	},
	{
		slug: "gateway-to-the-world",
		title: "Gateway to the World",
		badge: "Permanent",
		badgeColor: "navy",
		eyebrow: "Ages: 10 months – 8 years",
		heroImage: gatewayToTheWorld,
		cardImage: gatewayToTheWorld,
		paragraphs: [
			"Travel the globe through hands-on play. Guide trains across continents, launch rockets to planets in our solar system, and climb a two-story Earth. Along the way, explore geography, movement, and the ways our world is connected, from the ground beneath their feet to far beyond the sky.",
		],
		sections: [
			{
				title: "Globe",
				body: "Explore the layers of the earth in this 2-story climbing structure at the center of the Museum. Once children have reached the earth's center, they may use kid-power to make the outer skin of the earth spin.",
			},
			{
				title: "Continent Tables",
				body: "Learn about six of the world's continents, their geography, river systems, and animal life at the Museum's interactive continent tables. Children can feel an earthquake on a shake table in South America, test the temperature of a glacier in North America, find the major cities in each country and push trains throughout the landscape.",
			},
			{
				title: "Rocket Launcher",
				body: "Be a rocket scientist! Design and build a rocket and then launch it to the planets. Will it reach Mercury? Mars? Jupiter? If it didn't make it, re-design your rocket and try again! Young astrophysicists will learn about physics and engineering with this hands-on activity.",
			},
			{
				title: "The Climber",
				body: "How high can you climb? This two-story structure helps children see the museum from a new point of view as they build their climbing skills and confidence levels.",
			},
		],
	},
	{
		slug: "leaping-into-learning",
		title: "Leaping into Learning",
		badge: "Permanent",
		badgeColor: "navy",
		eyebrow: "",
		heroImage: leapingIntoLearning,
		cardImage: leapingIntoLearning,
		paragraphs: [
			"Step into a magical forest! Cast your rod, catch colorful fish, and slip behind a waterfall without getting wet. Climb the treehouse, spot hidden forest animals, and let little ones explore a cozy space filled with bubbles, wonder, and gentle discovery at every turn.",
			"Leaping into Learning is a sensory-rich environment designed especially for our youngest visitors. Soft textures, gentle sounds, and whimsical visuals create a calming, imaginative space where toddlers and infants can safely explore the natural world through play.",
		],
	},
	{
		slug: "let-your-creativity-flow",
		title: "Let Your Creativity Flow",
		badge: "Permanent",
		badgeColor: "navy",
		eyebrow: "",
		heroImage: imgCreativity,
		cardImage: imgCreativity,
		paragraphs: [
			"Create a masterpiece on the paint wall, shape and reshape sand into living landscapes, and watch digital topography shift beneath your hands. Create your own avatar and share an act of kindness — then see how that ripple travels through the museum's interactive network.",
			"Let Your Creativity Flow is where art and technology meet in a joyful, expressive space. Children of all abilities find their medium here: visual art, digital design, or collaborative creation. There are no wrong answers — only new ideas waiting to be born.",
		],
	},
	{
		slug: "step-up-to-science",
		title: "Step Up to Science",
		badge: "Permanent",
		badgeColor: "navy",
		eyebrow: "",
		heroImage: stepUpToScience,
		cardImage: stepUpToScience,
		paragraphs: [
			"Experiment with light and sound through playful, hands-on activities — creating shadows, exploring color mixing, and making vibrations move through different materials. Discover how waves work, how science and creativity connect, and how a simple experiment can lead to an exciting new discovery.",
			"Step Up to Science turns everyday phenomena into wonder. Every station is designed to spark the scientific method: observe, question, experiment, discover. Whether your child is a future physicist or just loves watching things glow and beep, this exhibit is built for curious minds at every stage.",
		],
	},
	{
		slug: "tools-for-solutions",
		title: "Tools for Solutions",
		badge: "Permanent",
		badgeColor: "navy",
		eyebrow: "",
		heroImage: imgTools,
		cardImage: imgTools,
		paragraphs: [
			"Guide balls through a giant machine using six simple machines, connect make-believe wires and pipes in the Construction House, build skyscrapers, and design a city of the future with blocks. Tools for Solutions is where young engineers discover that every big problem has a clever solution.",
			"This exhibit introduces the fundamentals of engineering, architecture, and systems thinking through child-directed play. Visitors collaborate, prototype, fail, and try again — building not just structures but the growth mindset that turns future thinkers into makers and problem-solvers.",
		],
	},
];
