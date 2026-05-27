import imgSpring from "../../assets/exhibits-spring-hero.webp"
import imgSummer from "../../assets/exhibits-summer-hero.jpg"
import imgA from "../../assets/1fc4baecdde9a2932370e7a6c6cbbddba70e38a1.webp"
import imgB from "../../assets/1bfa9acf43f185f4d4031bdadb934f4c9dec4b57.webp"
import imgC from "../../assets/39da2bd0af3dceef1e3b406cd981247f82778d27.webp"

export type Exhibit = {
  slug: string
  title: string
  badge: string
  badgeColor: "teal-dark" | "navy"
  eyebrow: string
  heroImage: string
  cardImage: string
  paragraphs: string[]
}

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
    title: "Wild Kratts: Ocean Adventure",
    badge: "Summer 2026",
    badgeColor: "teal-dark",
    eyebrow: "Ages: 3–9 | Usually 20–25 minutes",
    heroImage: imgSummer,
    cardImage: imgSummer,
    paragraphs: [
      "Dive deep into the ocean alongside Chris and Martin Kratt! Explore vibrant coral reef habitats, discover the amazing creatures that call them home, and learn how marine ecosystems stay in balance. Families activate creature powers, investigate ocean zones, and go face-to-face with animated sea life in this aquatic adventure.",
      "This Summer 2026 exhibit brings the beloved Wild Kratts PBS Kids series to life through interactive science play. Discover the biology of bioluminescence, the physics of buoyancy, and why ocean conservation matters — all while having the most fun summer adventure imaginable.",
    ],
  },
  {
    slug: "janes-innovation-station",
    title: "Jane's Innovation Station",
    badge: "Coming Soon",
    badgeColor: "teal-dark",
    eyebrow: "",
    heroImage: imgA,
    cardImage: imgA,
    paragraphs: [
      "Transform everyday boxes into anything you can imagine: cars, houses, rockets, robots, and more! At Jane's Innovation Station, the only limit is your creativity. Young inventors explore the basics of math, engineering, and science by building, testing, and redesigning their own constructions from scratch.",
      "This pop-up exhibit is designed to spark a love of making and experimentation. From collaborative group builds to solo creations, every visit produces something new. Jane's Innovation Station celebrates the spirit of curiosity — the same spirit that drives every great inventor.",
    ],
  },
  {
    slug: "urban-expedition",
    title: "Urban Expedition",
    badge: "Coming Soon",
    badgeColor: "teal-dark",
    eyebrow: "",
    heroImage: imgB,
    cardImage: imgB,
    paragraphs: [
      "Climb, crawl, balance, and explore your way through a giant obstacle course where you choose your own path, take on new challenges, and discover fun, unexpected ways to move your body. Urban Expedition transforms the city into a playground — scaling walls, crossing bridges, and navigating tunnels that test coordination, strength, and bravery.",
      "This pop-up exhibit celebrates physical literacy and adventurous play. Every child's journey through Urban Expedition is unique — some go fast, some go slow, and all arrive at the same destination: confidence, joy, and the satisfaction of a challenge conquered.",
    ],
  },
  {
    slug: "space-explorers-planetarium",
    title: "Space Explorers: Planetarium",
    badge: "Coming Soon",
    badgeColor: "teal-dark",
    eyebrow: "",
    heroImage: imgC,
    cardImage: imgC,
    paragraphs: [
      "Blast off into our solar system! Enter the planetarium to explore the planets and their orbits, discover the difference between stars and galaxies, and find out just how far away the nearest planet really is. Space Explorers brings the universe down to earth — or rather, lets little explorers leave it behind.",
      "This immersive pop-up exhibit is part digital experience, part hands-on science lab. Visitors plot courses between planets, learn what gravity feels like on other worlds, and design their own spacecraft. Whether you're dreaming of Mars or just curious about the night sky, Space Explorers: Planetarium is your launchpad.",
    ],
  },
  {
    slug: "fundamentally-food",
    title: "Fundamentally Food",
    badge: "Permanent",
    badgeColor: "navy",
    eyebrow: "",
    heroImage: imgA,
    cardImage: imgA,
    paragraphs: [
      "Climb tractors, milk a dairy cow, load delivery trucks, shop a bustling grocery store, and cook pretend meals together. Through playful farm-to-table fun, Fundamentally Food invites families to explore where our food comes from, how it moves through communities, and how eating well helps families grow strong and healthy.",
      "One of our most beloved permanent exhibits, Fundamentally Food is a child-sized world where every role — farmer, trucker, grocery shopper, chef — is worth playing. Discover the connections between agriculture, nutrition, and community while building early science, math, and social skills through imaginative play.",
    ],
  },
  {
    slug: "gateway-to-the-world",
    title: "Gateway to the World",
    badge: "Permanent",
    badgeColor: "navy",
    eyebrow: "",
    heroImage: imgB,
    cardImage: imgB,
    paragraphs: [
      "Travel the globe through hands-on play. Guide trains across continents, launch rockets to planets in our solar system, and climb a two-story Earth. Along the way, explore geography, movement, and the ways our world — from neighborhoods to galaxies — is wonderfully connected.",
      "Gateway to the World inspires a sense of wonder about the planet we live on and the universe beyond it. Young travelers develop spatial reasoning, global awareness, and a curiosity about other cultures and environments as they navigate this iconic permanent exhibit.",
    ],
  },
  {
    slug: "enchanted-forest",
    title: "Enchanted Forest",
    badge: "Permanent",
    badgeColor: "navy",
    eyebrow: "",
    heroImage: imgC,
    cardImage: imgC,
    paragraphs: [
      "Step into a magical forest! Cast your rod, catch colorful fish, and slip behind a waterfall without getting wet. Climb the treehouse, spot hidden forest animals, and let little ones explore a cozy space filled with bubbles, wonder, and gentle discovery at every turn.",
      "Enchanted Forest is a sensory-rich environment designed especially for our youngest visitors. Soft textures, gentle sounds, and whimsical visuals create a calming, imaginative space where toddlers and infants can safely explore the natural world through play.",
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
]
