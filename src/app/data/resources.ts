import img01 from "../../assets/loosepartplaythumb.png";
import img02 from "../../assets/talkMorethumb.png";
import img03 from "../../assets/sensorythumb.png";
import img04 from "../../assets/theActofReading.png";
import img05 from "../../assets/gamesThatBuild.png";
import img06 from "../../assets/whyNatureThumb.png";
import img07 from "../../assets/settingupdramatic.png";
import img08 from "../../assets/kitchenSTEAM.png";
import img09 from "../../assets/bringMuseumHome.png";

export type ResourceItem = {
	slug: string;
	image: string;
	badge: string;
	title: string;
	description: string;
	categories: string[];
	paragraphs: string[];
};

export const allResources: ResourceItem[] = [
	{
		slug: "loose-parts-play-guide",
		image: img01,
		badge: "Activity Guide • Ages 2–8",
		title: "Loose Parts Play: A Guide for Caregivers",
		description:
			"Learn how to set up open-ended building and tinkering stations at home using everyday materials — bottle caps, cardboard, fabric scraps, and more.",
		categories: ["Featured", "At-Home Activities"],
		paragraphs: [
			"Loose parts are exactly what they sound like: open-ended materials with no single correct use. A collection of bottle caps, wooden spools, fabric scraps, corks, or cardboard tubes becomes a world of possibility when placed in front of a child. The term was coined by architect Simon Nicholson in 1971, who observed that environments rich in movable, manipulable materials sparked more creativity and deeper engagement than those filled with finished toys.",
			"The beauty of loose parts play is that it costs almost nothing and scales with your child's development. A two-year-old will sort and stack. A four-year-old will build and narrate elaborate stories. A seven-year-old will engineer, hypothesize, and redesign. The same bin of materials grows with your child because the complexity comes from them, not from the toy.",
			"To get started, gather a mix of materials across a few categories: natural items (shells, pinecones, river stones), recyclables (cardboard tubes, bottle caps, egg cartons), craft supplies (fabric scraps, yarn, large buttons), and building materials (craft sticks, corks, wooden blocks). Store them in open containers so children can see and access everything without asking. Rotate materials every few weeks to keep interest high.",
			"The most important thing caregivers can do during loose parts play is resist the urge to direct. Ask open questions — 'What are you making?' or 'What happens if you add this?' — but let the child lead. The process matters far more than any finished product. A pile of materials scattered across the floor at the end of play is not a mess — it is evidence of deep thinking.",
		],
	},
	{
		slug: "language-rich-play",
		image: img02,
		badge: "Research Summary • All Ages",
		title: "Talk More, Ask More: Building Language Through Play",
		description:
			"Discover why open-ended questions during play are more powerful than praise, and how simple narration techniques build vocabulary in children under 5.",
		categories: ["Featured", "Early Literacy"],
		paragraphs: [
			"Decades of research on early language development point to one consistent finding: the quality of adult talk matters far more than the quantity. Children who grow up hearing rich, varied language — not just commands and responses, but narration, speculation, and genuine questions — develop larger vocabularies and stronger comprehension skills by kindergarten.",
			"During play, caregivers have a natural opportunity to provide this kind of language-rich environment. When a child builds a tower and a caregiver says 'That's great!' the exchange is over. When the same caregiver says 'You stacked the big blue one on the bottom — why did you choose that one first?' the child must think, formulate a response, and listen to a follow-up. That back-and-forth exchange, called a conversational turn, is one of the strongest predictors of long-term language development.",
			"Narration is another powerful tool. Simply describing what you see — 'You're pouring the red water into the cup. Now it's almost full. What do you think will happen if you pour more?' — exposes children to vocabulary, sentence structure, and cause-and-effect reasoning simultaneously. This technique, sometimes called sportscasting, is especially effective with children under three who may not yet be verbal but are absorbing everything.",
			"Research from Harvard's Center on the Developing Child shows that these back-and-forth interactions, which they call 'serve and return,' are essential for healthy brain development. Every time a child makes a sound, gesture, or expression and a caregiver responds meaningfully, neural connections strengthen. Play is the natural context for this — and all it takes is slowing down, getting curious, and asking one more question.",
		],
	},
	{
		slug: "sensory-bin-recipes",
		image: img03,
		badge: "Activity Guide • Ages 1–5",
		title: "Sensory Bin Recipes for Every Season",
		description:
			"Six seasonal sensory bin setups using safe, affordable materials. Includes tips for adapting each bin for children with sensory sensitivities.",
		categories: ["At-Home Activities", "Sensory & Social"],
		paragraphs: [
			"Sensory bins are shallow containers filled with a base material — rice, kinetic sand, water beads, dried beans — plus small objects that invite exploration. They support fine motor development, language, scientific thinking, and calm focus. For many children, the sustained, repetitive nature of sensory play is deeply regulating — a kind of tactile meditation that helps them settle and attend.",
			"Fall bin: Fill a bin with dried corn, small gourds, acorns, and dried leaves. Add small scoops, funnels, and woodland animal figures. Talk about the textures — smooth, bumpy, crinkly — and the colors of the season. For extra engagement, hide the figures under the corn and let children 'discover' them.",
			"Winter bin: Use white rice or fake snow (2 cups baking soda + 1/4 cup hair conditioner) as the base. Add silver and white loose parts — bells, pom-poms, metallic spoons — and small arctic animal figures. This bin works especially well for color sorting and pretend play.",
			"Spring bin: Fill with real or artificial grass, flower petals, and potting soil in separate sections. Add small shovels, watering cans, and seed packets (can be made from folded paper). A spring bin connects naturally to conversations about plants, growth, and what living things need.",
			"Summer bin: A simple water bin is endlessly engaging — add a few drops of food coloring, measuring cups, funnels, and bath toys. For children who dislike wet textures, offer tools like tongs and spoons so they can engage without direct contact. Always supervise water play closely and never leave children unattended.",
			"For children with sensory sensitivities, introduce new materials slowly. Let the child observe before touching. Offer gloves, tools, or a tray as a buffer. Never force contact with a texture — trust builds the pathway to engagement. Many children who resist a bin one week will dig in enthusiastically the next.",
		],
	},
	{
		slug: "reading-aloud-techniques",
		image: img04,
		badge: "Educator Resource • Pre-K–Grade 2",
		title: "The Art of Reading Aloud: Techniques That Spark Imagination",
		description:
			"A practitioner's guide to read-aloud strategies that build comprehension, empathy, and a lifelong love of stories — from voice work to post-book conversation.",
		categories: ["Featured", "Early Literacy", "For Educators"],
		paragraphs: [
			"Reading aloud is one of the most evidence-rich practices in early childhood education. Study after study confirms its impact on vocabulary, comprehension, phonological awareness, and — perhaps most powerfully — the development of a child's identity as a reader. Yet many read-alouds fall flat not because of the book, but because of the delivery. A few intentional techniques can transform an ordinary story time into a shared experience children remember for years.",
			"Before you read, do a quick picture walk. Flip through the pages and invite children to make predictions: 'What do you think this story is about? How does this character feel?' This activates prior knowledge, builds anticipation, and gives every child an entry point — especially those who may not yet be confident readers. Let predictions be wrong. That's half the fun.",
			"During the read, vary your voice deliberately. Characters should sound different from each other. Suspenseful moments deserve a slower pace and softer volume. Funny parts are funnier when you pause just before the punchline. These vocal choices aren't performance — they're modeling the way fluent readers hear stories in their minds.",
			"Pause at key moments to think aloud: 'I wonder why she did that. That seems like a hard choice.' This models comprehension strategy in real time. It shows children that good readers don't just decode words — they think, question, connect, and feel their way through a text.",
			"After you finish, resist summarizing. Instead, sit with the story. Ask: 'What's still in your head from that book?' or 'Did anything surprise you?' Post-book conversation, especially when it's open and unhurried, deepens comprehension and strengthens the social bond between reader and listener. The goal is not comprehension check — it's shared wonder.",
		],
	},
	{
		slug: "executive-function-games",
		image: img05,
		badge: "Activity Guide • Ages 3–7",
		title: "Games That Build Executive Function",
		description:
			"Simple games you already own — Simon Says, Freeze Dance, card games — and exactly how they develop self-regulation, working memory, and flexible thinking.",
		categories: ["At-Home Activities", "STEM & Tinkering"],
		paragraphs: [
			"Executive function is the set of mental skills that allows us to plan, focus, follow multi-step directions, and manage impulses. These skills develop most rapidly between ages 3 and 7, and they are among the strongest predictors of academic and life success — stronger, in many studies, than IQ. The good news: executive function skills are highly trainable, and some of the best training tools are games you already own.",
			"Simon Says targets inhibitory control — the ability to stop a habitual response. When children must listen for 'Simon says' before acting, they practice overriding their impulse to just move. This same skill underlies the ability to raise a hand before speaking, to wait one's turn, and to pause before reacting in frustration.",
			"Freeze Dance builds both inhibitory control and attention. The start-stop nature of the game requires children to monitor the music continuously, which is a demanding attention task. Add complexity over time: freeze in shapes, freeze on one foot, or freeze at different speeds. Each variation requires flexible thinking — updating the rules in real time.",
			"Card games like Go Fish, Uno, and Memory build working memory — the ability to hold information in mind while doing something else. Go Fish requires children to remember what they've asked for and what others need. Memory requires holding dozens of card locations in mind simultaneously. These demands feel like play but are serious cognitive work.",
			"Board games that require planning ahead — Candy Land gives way to Chutes and Ladders, which gives way to checkers — gradually increase the planning horizon required. As children grow, so can the complexity of the games you choose. The key is to play regularly, keep it fun, and let children experience both winning and losing gracefully. Emotional regulation in the face of defeat is itself an executive function skill.",
		],
	},
	{
		slug: "nature-play-benefits",
		image: img06,
		badge: "Research Summary • All Ages",
		title: "Why Nature Play Matters: The Science Behind Outdoor Learning",
		description:
			"A plain-language summary of the research on outdoor and nature-based play, including its effects on attention, risk tolerance, and physical development.",
		categories: ["Research & Reports"],
		paragraphs: [
			"Children are spending less time outdoors than any generation in recorded history. The average American child spends fewer than seven minutes in unstructured outdoor play per day, compared to more than seven hours in front of screens. This shift has coincided with rising rates of childhood anxiety, attention disorders, and physical health concerns. The research on what nature exposure does for the developing mind and body is compelling — and largely unknown by the general public.",
			"Attention Restoration Theory, developed by Rachel and Stephen Kaplan in the 1980s, proposes that natural environments restore depleted attention resources in ways that built environments cannot. In natural settings, attention flows effortlessly — drawn by a moving stream, a rustling tree, the path of an ant. This 'fascination' allows the directed attention system to rest and recover. Children with ADHD, in particular, show measurable improvements in attention after time in green spaces.",
			"Risk in outdoor play has also been dramatically underestimated. Studies by Ellen Sandseter at Queen Maud University in Norway found that children who engage in thrilling, risky outdoor play — climbing trees, jumping from heights, rough-and-tumble — develop better risk assessment, greater physical confidence, and lower rates of anxiety as adolescents. The managed removal of risk from childhood environments may be producing children who are less equipped to handle uncertainty.",
			"For urban families without easy access to green space, even small doses matter. Studies show benefits from as little as 20 minutes in a park or near trees. A patch of grass, a community garden, a walk through a neighborhood with mature trees — all count. The goal is not wilderness immersion but regular contact: bare feet on soil, sky above, space to move without walls.",
		],
	},
	{
		slug: "dramatic-play-setup",
		image: img07,
		badge: "Activity Guide • Ages 2–6",
		title: "Setting Up Dramatic Play Spaces at Home",
		description:
			"How to create a dramatic play corner that rotates themes — grocery store, vet clinic, restaurant — without buying a lot of new materials.",
		categories: ["At-Home Activities", "Sensory & Social"],
		paragraphs: [
			"Dramatic play — pretending to be someone or something else — is one of the most cognitively rich activities available to young children. When a child plays grocery store, they are simultaneously practicing literacy (reading labels, writing lists), mathematics (counting, money), social skills (taking turns, negotiating), and emotional regulation (managing the frustration when the 'customer' doesn't cooperate). All of this happens naturally, driven entirely by the child's own imagination.",
			"The key to a great dramatic play corner at home is not buying new materials — it's organizing existing ones into a coherent theme. For a grocery store: empty food boxes and cans, small baskets or bags, a cash register (a shoebox works), paper and pencil for lists, and play money. For a vet clinic: stuffed animals, bandages, a notebook for 'patient records,' an old stethoscope, and a cardboard carrier. For a restaurant: menus (draw them together), aprons, plates, and a notepad for orders.",
			"Rotate the theme every two to four weeks. Longevity comes not from novelty of materials but from increasing complexity of the play narrative. In the first week, children explore the space. By week three, elaborate storylines emerge. If you change the theme too quickly, you short-circuit the deepening of play. If you wait too long, interest wanes.",
			"Caregivers can enrich dramatic play without taking it over. Asking 'Can I be a customer?' and then modeling a tricky interaction — a picky customer, a lost item, a need to make change — introduces complexity without directing. Step out when the child takes over. Your role is spark and scaffold, not director. The best dramatic play is always the child's own.",
		],
	},
	{
		slug: "steam-kitchen-experiments",
		image: img08,
		badge: "Activity Guide • Ages 4–8",
		title: "Kitchen STEAM: Science Experiments with Pantry Staples",
		description:
			"Eight classic and surprising experiments using baking soda, vinegar, food coloring, and other pantry items, with the real science explained in kid-friendly terms.",
		categories: ["STEM & Tinkering"],
		paragraphs: [
			"The kitchen is one of the best science laboratories in the world — fully stocked, always available, and full of materials that react, transform, dissolve, and surprise. The experiments below use only common pantry items and require no special equipment. Each includes the real science behind what's happening, so you can answer the inevitable 'but why?' in a way that deepens rather than closes the inquiry.",
			"Baking soda and vinegar volcano: Mix baking soda and a few drops of dish soap in a cup, then pour vinegar in. The fizzing reaction is an acid-base reaction producing carbon dioxide gas. The science: baking soda (a base) and vinegar (an acid) react to form water, salt, and carbon dioxide. Try varying the ratio — more baking soda or more vinegar — and ask your child to predict which will fizz longer.",
			"Dancing raisins: Drop raisins into a glass of sparkling water. Watch them sink, collect bubbles, rise to the surface, release the bubbles, and sink again. The science: carbon dioxide bubbles attach to the rough surface of the raisins, giving them enough lift to rise. At the surface, the bubbles pop and release, causing the raisin to sink again. Try smooth grapes — they don't dance. Ask: why?",
			"Oobleck (non-Newtonian fluid): Mix 2 parts cornstarch to 1 part water. The result is a substance that acts like a solid when struck and a liquid when held gently. The science: oobleck is a non-Newtonian fluid — its viscosity changes based on the force applied. Punch it: solid. Rest your hand on it: liquid. This is the same principle that allows people to run across pools of cornstarch (yes, this is a real thing). Ask: is it a solid or a liquid?",
			"Cabbage pH indicator: Boil red cabbage, save the purple water, and use it as a pH indicator. Add baking soda (turns green/blue — basic), then vinegar (turns pink/red — acidic). Test other liquids from your kitchen. The science: red cabbage contains anthocyanins, pigments that change color based on acidity. This is the same chemistry behind litmus paper. Children can test lemon juice, milk, baking soda solution, and soda — making predictions before testing and recording results in a simple chart.",
		],
	},
	{
		slug: "museum-at-home-tips",
		image: img09,
		badge: "Educator Resource • All Ages",
		title: "Bringing the Museum Home: Tips from Our Educators",
		description:
			"Our lead educators share the mindsets and micro-habits they use every day — and how caregivers can apply the same principles without a museum budget.",
		categories: ["Featured", "For Educators"],
		paragraphs: [
			"People often ask our educators what makes the Children's Museum of Atlanta different from a playground or a living room full of toys. The honest answer is not the exhibits — it's the approach. Our educators bring a set of mindsets and habits to every interaction that transform ordinary materials into rich learning experiences. These mindsets are learnable, and they cost nothing.",
			"Follow the child's lead. This sounds simple, but it is one of the hardest practices to maintain. When a child picks up a ball and starts rolling it down the ramp in a way that seems 'wrong,' our first instinct is to correct. Resist this. Watch first. Ask a question. 'What are you trying to do?' often reveals a hypothesis more interesting than the one we had in mind. The child who rolls the ball sideways may be testing something the designer never anticipated — and that is exactly the spirit of inquiry we want to nurture.",
			"Name what you see, not what you think. Instead of 'Good job!' — which closes conversation — try 'I notice you added the bigger block to the bottom. What made you decide to do that?' Descriptive feedback prompts reflection, builds metacognition, and communicates genuine attention. Children can tell the difference between praise and presence. They want presence.",
			"Create a culture of failure. In our exhibits, nothing breaks permanently. This is by design — it frees children to experiment without fear. At home, you can cultivate the same spirit by celebrating failed attempts explicitly. 'That tower fell down — great! Now we know something that doesn't work. What do you want to try next?' Normalizing failure as data, not disaster, is one of the most powerful gifts a caregiver can give a growing mind.",
			"Finally, wonder out loud. When children hear adults say 'I don't know — let's find out,' they learn that curiosity is a lifelong practice, not a phase to outgrow. Our best educators are not the ones with the most answers. They are the ones with the most genuine questions. You don't need a museum to be that person for a child.",
		],
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
