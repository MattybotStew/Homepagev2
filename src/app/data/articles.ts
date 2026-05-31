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
	content?: string; // HTML string — used when rendering WordPress post content
	author?: string;
};

export const allArticles: ArticleItem[] = [
	{
		slug: "the-science-of-play",
		image: imgA,
		badge: "Education • June 1, 2026",
		title: "The Science of Play: Why Every Child Needs Time to Be Bored, Build, and Discover",
		description:
			"From drop caps to data tables — a deep dive into how unstructured play shapes the developing brain, with insights from neuroscience, developmental psychology, and 20 years of programming at CMA.",
		categories: ["Featured", "Education", "Research"],
		author: "Dr. Maya Chen, Director of Education",
		paragraphs: [],
		content: `
<p class="intro">Play is not the opposite of learning. It <em>is</em> learning — and the neuroscience behind it is more compelling than anything a worksheet can offer. This post explores the research, the practice, and the everyday moments that make Children's Museum of Atlanta one of the most evidence-based play environments in the Southeast.</p>

<h2>Why the Brain Needs Play</h2>

<p>When a child stacks blocks, they are not just having fun. They are rehearsing physics, negotiating spatial relationships, and practising the kind of hypothesis-testing that drives scientific thinking. <strong>Executive function — the cluster of skills that includes working memory, flexible thinking, and self-control — develops most rapidly during free play</strong>, not during directed instruction.</p>

<p>Dr. Stuart Brown, founder of the National Institute for Play, has spent four decades documenting what happens when play is removed from childhood. His findings are stark: children who are denied sufficient play time show measurable deficits in empathy, resilience, and the capacity for joy. These are not soft outcomes. They are predictors of lifelong health, academic achievement, and workplace success.</p>

<blockquote>
	<p>The opposite of play is not work — it is depression.</p>
	<cite>Dr. Stuart Brown, National Institute for Play</cite>
</blockquote>

<h2>Three Types of Play Every Child Needs</h2>

<p>Not all play is created equal. Developmental research consistently identifies three distinct modes, each serving a different neurological function:</p>

<ol>
	<li><strong>Solitary / exploratory play</strong> — A child alone with an open-ended material. This is where intrinsic motivation is born. The child sets the agenda, the pace, and the criteria for success.</li>
	<li><strong>Parallel play</strong> — Children playing alongside each other without explicit collaboration. This is how young children observe, compare, and begin to develop the social awareness that cooperative play requires.</li>
	<li><strong>Cooperative play</strong> — The full expression: shared goals, negotiated rules, distributed roles. This is where language acquisition accelerates, conflict resolution skills are practised, and genuine friendships form.</li>
</ol>

<p>At CMA, every exhibit is intentionally designed to support all three modes simultaneously. A child can explore WaterWorks alone, observe a sibling, or collaborate on a shared water channel — sometimes within the same five-minute visit.</p>

<h2>What Research Says About Screens and Unstructured Time</h2>

<p>The average American child between ages 8 and 12 now spends <mark>four to six hours per day</mark> in front of screens. This is not an argument against technology — it is an argument for balance. The question researchers are asking is not "are screens bad?" but <em>"what is being displaced when screen time expands?"</em></p>

<p>The answer, in most studies, is outdoor play, imaginative play, and social play — precisely the three categories with the strongest developmental outcomes. The implication for families, schools, and institutions like ours is clear:</p>

<ul>
	<li>Unstructured time is not wasted time — it is recovery time for the prefrontal cortex</li>
	<li>Boredom is not a problem to solve — it is a prerequisite for creative thinking</li>
	<li>Child-led play is not optional enrichment — it is a developmental necessity</li>
	<li>Adults who resist the urge to over-schedule give children one of the most powerful gifts available</li>
</ul>

<hr />

<h3>The Role of the Museum Environment</h3>

<p>Museums occupy a unique position in the play landscape. Unlike a playground, which offers physical challenge, or a screen, which offers passive stimulation, a children's museum offers <strong>structured freedom</strong> — an environment that is safe enough for risk-taking, rich enough to sustain curiosity, and open enough to support a child's own agenda.</p>

<p>Consider what happens in our Fundamentally Food exhibit. A child walks in, sees a dozen open-ended stations, and makes a choice. That choice — entirely their own — activates the dopaminergic reward pathways associated with intrinsic motivation. Every subsequent decision compounds the effect. By the end of a twenty-minute session, a child has made hundreds of micro-decisions, each one strengthening the neural architecture of agency.</p>

<div class="pullquote">
	<p>"Every choice a child makes in a well-designed play environment is a small act of authorship over their own learning."</p>
</div>

<h3>What Educators Can Do</h3>

<p>For classroom teachers and early childhood educators reading this, the research points toward a few high-leverage practices:</p>

<ul>
	<li>Increase the ratio of child-initiated to teacher-directed activity, especially in the first hour of the day</li>
	<li>Introduce open-ended materials — blocks, loose parts, art supplies — and step back
		<ul>
			<li>Resist the urge to show children the "right" way to use a material</li>
			<li>Ask questions instead: <em>"What happens if you add more water?"</em></li>
		</ul>
	</li>
	<li>Protect recess — it is not a reward, it is a neurological requirement</li>
	<li>Observe and document what children do during free play — the data will surprise you</li>
</ul>

<h2>Measuring What Matters</h2>

<p>One of the persistent challenges in play advocacy is measurement. How do you put a number on curiosity? How do you quantify the moment a child discovers that they can make a ramp longer and the ball will go faster? These are real outcomes — and they are genuinely difficult to standardise.</p>

<p>At CMA, we use a combination of visitor observation protocols, educator feedback surveys, and longitudinal partnership studies with Atlanta Public Schools to track what we call <strong>the four indicators of deep engagement</strong>:</p>

<table>
	<thead>
		<tr>
			<th>Indicator</th>
			<th>What We Observe</th>
			<th>Why It Matters</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Sustained attention</td>
			<td>Child returns to the same activity 3+ times</td>
			<td>Correlates with executive function development</td>
		</tr>
		<tr>
			<td>Self-correction</td>
			<td>Child modifies approach after failure without adult prompt</td>
			<td>Early indicator of growth mindset</td>
		</tr>
		<tr>
			<td>Peer invitation</td>
			<td>Child invites another to join or observe</td>
			<td>Foundation of collaborative learning</td>
		</tr>
		<tr>
			<td>Verbalisation</td>
			<td>Child narrates their actions or asks questions</td>
			<td>Strongest single predictor of vocabulary growth</td>
		</tr>
	</tbody>
</table>

<h2>How You Can Bring This Home</h2>

<p>You do not need a museum to give your child the benefits of play. Here is what the research says makes the biggest difference at home:</p>

<ol>
	<li><strong>Create a yes space.</strong> Designate one area where the child can use materials without asking permission — paint, clay, scissors, tape. The reduced friction dramatically increases creative output.</li>
	<li><strong>Follow, don't lead.</strong> When your child is playing, ask what they are doing rather than suggesting what to do next. Your job is narrator, not director.</li>
	<li><strong>Let them be bored.</strong> The discomfort of boredom lasts about twelve minutes before a child finds something to do. Those twelve minutes are where some of the best play begins.</li>
	<li><strong>Play alongside them.</strong> Not directing — playing. Build your own tower. Make your own drawing. Model what it looks like to be absorbed in something for its own sake.</li>
	<li><strong>Protect the time.</strong> Unscheduled time is the rarest resource in a modern childhood. Guard it as fiercely as you would any appointment.</li>
	<li><strong>Visit us.</strong> We will be here — with water tables, building stations, science stages, and a team of educators who believe, with every research finding they have ever read, that play is the most serious work a child can do.</li>
</ol>

<p>The science is settled. The practice is yours to build. And if you need a place to start, we know just the spot.</p>
		`,
	},
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
