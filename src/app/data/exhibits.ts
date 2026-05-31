import imgB from "../../assets/1bfa9acf43f185f4d4031bdadb934f4c9dec4b57.webp";
import imgA from "../../assets/1fc4baecdde9a2932370e7a6c6cbbddba70e38a1.webp";
import imgC from "../../assets/39da2bd0af3dceef1e3b406cd981247f82778d27.webp";
import imgSpring from "../../assets/exhibits-spring-hero.webp";
import imgSummer from "../../assets/exhibits-summer-hero.jpg";

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
		heroImage: imgSummer,
		cardImage: imgSummer,
		paragraphs: [
			"Wild Kratts®: Ocean Adventure!, a brand-new temporary exhibit at the Museum, immerses the young explorers in your life in whole body explorations of ocean habitats and the fascinating creatures within them. Using Wild Kratts technology and the powers of science and teamwork, visitors will join the Wild Kratts team to solve problems, help animals, and foil the villains' nefarious plans.",
			"This exhibit is only at Children's Museum of Atlanta for a limited time. Catch this adventure before it leaves town! Plan your visit today.",
			"Ocean habitats immerse children and families in whole body explorations of animals, habitats, and the relationships between them.",
			"This exhibit is made possible through the generous support of the City of Atlanta Mayor's Office of Cultural Affairs and the Fulton County Board of Commissioners.",
			"Wild Kratts®: Ocean Adventure! was created by Minnesota Children's Museum and The Kratt Brothers Company. Wild Kratts® © 2026 Kratt Brothers Company Ltd. / 9 Story Media Group Inc. Wild Kratts® and Ocean Adventure and associated characters, trademarks, and design elements are owned by Kratt Brothers Company Ltd. Licensed by Kratt Brothers Company Ltd. All Rights Reserved.",
		],
	},
	{
		slug: "outside-the-box",
		title: "Outside the Box",
		badge: "Coming Soon",
		badgeColor: "teal-dark",
		eyebrow: "",
		heroImage: imgA,
		cardImage: imgA,
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
		heroImage: imgB,
		cardImage: imgB,
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
		heroImage: imgC,
		cardImage: imgC,
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
		heroImage: imgA,
		cardImage: imgA,
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
		heroImage: imgB,
		cardImage: imgB,
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
		heroImage: imgC,
		cardImage: imgC,
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
		heroImage: imgA,
		cardImage: imgA,
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
		heroImage: imgB,
		cardImage: imgB,
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
		heroImage: imgC,
		cardImage: imgC,
		paragraphs: [
			"Guide balls through a giant machine using six simple machines, connect make-believe wires and pipes in the Construction House, build skyscrapers, and design a city of the future with blocks. Tools for Solutions is where young engineers discover that every big problem has a clever solution.",
			"This exhibit introduces the fundamentals of engineering, architecture, and systems thinking through child-directed play. Visitors collaborate, prototype, fail, and try again — building not just structures but the growth mindset that turns future thinkers into makers and problem-solvers.",
		],
	},
];
