import imgA from "../../assets/1fc4baecdde9a2932370e7a6c6cbbddba70e38a1.webp"
import imgB from "../../assets/1bfa9acf43f185f4d4031bdadb934f4c9dec4b57.webp"
import imgC from "../../assets/39da2bd0af3dceef1e3b406cd981247f82778d27.webp"

export type EventItem = {
  slug: string
  image: string
  badge: string
  title: string
  description: string
  categories: string[]
  paragraphs: string[]
}

export const allEvents: EventItem[] = [
  {
    slug: "messy-thursdays",
    image: imgA,
    badge: "FEB 10 | 10AM–11:30AM",
    title: "Messy Thursdays",
    description: "Get ready to get messy! This weekly sensory play extravaganza features paint, slime, water tables, and creative chaos designed for exploration and fun.",
    categories: ["Featured", "This Week", "Free Events"],
    paragraphs: [
      "Every Thursday, the Children's Museum of Atlanta transforms into a wonderland of creative, sensory-rich play. Messy Thursdays is our signature weekly event — a joyful, uninhibited hour where children explore paint, slime, water tables, sand, and whatever new material we've dreamed up for the week. Smocks are provided, because things are going to get gloriously messy.",
      "Research shows that sensory play builds cognitive skills, fine motor development, and language — but we promise your child won't be thinking about any of that. They'll be too busy having the time of their life. Messy Thursdays is included with regular museum admission and runs every week, rain or shine.",
    ],
  },
  {
    slug: "snow-days",
    image: imgB,
    badge: "FEB 12–16 | ALL DAY",
    title: "Snow Days",
    description: "Experience winter magic indoors! Build snowmen with fake snow, explore ice sculptures, and enjoy cozy winter crafts in our climate-controlled winter wonderland.",
    categories: ["Featured", "Seasonal"],
    paragraphs: [
      "Atlanta may not see much snow, but the Children's Museum brings winter magic indoors every February. Snow Days transforms our main floor into a frosty winter wonderland — complete with real fake snow, towering ice sculptures to touch and observe, cozy craft stations, and hot cocoa-themed sensory tables that smell just as good as they sound.",
      "Running all week long and included with regular museum admission, Snow Days is a full-family experience that makes winter feel like the most magical season of the year. Bundle up (or don't — it's climate-controlled), build your snowman, and discover the science behind ice and snow through hands-on exploration.",
    ],
  },
  {
    slug: "stem-saturdays-rocket-science",
    image: imgC,
    badge: "FEB 15 | 1PM–3PM",
    title: "STEM Saturdays: Rocket Science",
    description: "Launch into learning! Kids will design, build, and test their own rockets while discovering the physics of flight and space exploration.",
    categories: ["Featured", "Workshops"],
    paragraphs: [
      "Every other Saturday, the Children's Museum becomes a laboratory for young scientists, engineers, and curious minds. This month's STEM Saturday takes on one of the most thrilling challenges in science: rocket design. Children will learn the basic principles of thrust, drag, and trajectory before putting their knowledge to the test by building and launching their own model rockets.",
      "STEM Saturdays are led by our trained educator team and are designed for children ages 4–10, with activities scaled to different ability levels. The workshop runs 2 hours and materials are provided — all you need to bring is curiosity. Space is limited, so advance registration through our ticketing portal is strongly recommended.",
    ],
  },
  {
    slug: "story-time-adventures",
    image: imgB,
    badge: "FEB 11 | 2PM–4PM",
    title: "Story Time Adventures",
    description: "Join us for interactive storytelling with puppets, costumes, and dramatic play. Each session features a different beloved children's book brought to life.",
    categories: ["This Week"],
    paragraphs: [
      "Story Time Adventures takes your child's favorite books off the page and into the real world. Each session features an educator-led dramatic read-aloud using puppets, costumes, and props that bring the story to life. After the reading, children step into the narrative themselves — acting out scenes, trying on costumes, and exploring the themes through guided imaginative play.",
      "Each session is themed around a different picture book, so no two Story Time Adventures are exactly alike. Best suited for children ages 2–7, these sessions are drop-in and included with regular museum admission. Check our events calendar for the current featured title.",
    ],
  },
  {
    slug: "music-and-movement-monday",
    image: imgA,
    badge: "FEB 13 | 11AM–12PM",
    title: "Music & Movement Monday",
    description: "Dance, sing, and play instruments in this high-energy music class designed to develop rhythm, coordination, and a love of music.",
    categories: ["This Week"],
    paragraphs: [
      "Monday mornings got a serious upgrade. Music & Movement Monday is a weekly 60-minute class that gets little bodies moving, little voices singing, and little hands playing real instruments. Led by our resident music educator, each session weaves together rhythm games, movement exercises, call-and-response songs, and free dance into a genuinely joyful experience.",
      "Music & Movement Monday is designed for children ages 1–6 with their caregivers and is drop-in with regular museum admission. Whether your child is shy or the first one on the dance floor, this class creates a welcoming space where every child finds their beat.",
    ],
  },
  {
    slug: "member-mornings",
    image: imgC,
    badge: "FEB 14 | 9AM–10AM",
    title: "Early Access: Member Mornings",
    description: "Beat the crowds! Members enjoy exclusive early access to the museum with special activities and breakfast treats in a quieter, more relaxed environment.",
    categories: ["Members-Only"],
    paragraphs: [
      "Member Mornings are one of the most beloved perks of CMA membership. Every Friday before the museum opens to the general public, members get a full hour of exclusive access — quieter galleries, shorter lines for favorite exhibits, and a rotating lineup of special morning activities designed just for our member families.",
      "Complimentary light breakfast snacks are provided, and our educator team is on hand for small-group activities and demonstrations. Member Mornings are free for all active CMA members. Not a member yet? Now's a great time to join — this is just one of many perks waiting for you.",
    ],
  },
  {
    slug: "members-night-glow-party",
    image: imgA,
    badge: "FEB 20 | 6PM–8PM",
    title: "Members Night: Glow Party",
    description: "An after-hours glow-in-the-dark extravaganza exclusively for members! UV face painting, neon crafts, and glowing dance party under black lights.",
    categories: ["Members-Only", "Special Events"],
    paragraphs: [
      "What happens when you turn off the lights and flip on the black lights? Pure magic. Members Night: Glow Party is our most buzzed-about member event of the season — an after-hours extravaganza where the entire museum glows. UV face painting, neon-painted craft stations, glow-in-the-dark slime, and a full dance floor under pulsing black lights await.",
      "This event runs after regular museum hours, from 6–8pm, and is exclusively for CMA member families. Light refreshments are provided, and the energy is entirely optional to control — we have quieter glow zones for sensory-sensitive guests alongside the main dance area. Costumes welcome, glow strongly encouraged.",
    ],
  },
  {
    slug: "member-appreciation-workshop",
    image: imgB,
    badge: "FEB 25 | 5PM–7PM",
    title: "Member Appreciation Workshop",
    description: "A special thank you event featuring exclusive workshops, meet-and-greets with educators, and sneak peeks at upcoming exhibits.",
    categories: ["Members-Only"],
    paragraphs: [
      "Our members make everything we do possible — and this event is our heartfelt thank you. The Member Appreciation Workshop is an intimate evening event where member families get early access to our upcoming exhibit announcements, meet one-on-one with our curatorial and education teams, and participate in exclusive behind-the-scenes workshops.",
      "This event also features a members-only Q&A with CMA leadership about what's coming next — programs, exhibits, community partnerships, and more. Space is strictly limited and RSVP is required. Members will receive a special invitation with RSVP details two weeks before the event.",
    ],
  },
  {
    slug: "community-day-celebration",
    image: imgC,
    badge: "FEB 17 | 3PM–4:30PM",
    title: "Community Day Celebration",
    description: "Free admission for all! Join us for special performances, community art projects, and family activities celebrating our wonderful Atlanta community.",
    categories: ["Free Events"],
    paragraphs: [
      "Community Day is one of the most important events on the CMA calendar — a day when our doors open to all of Atlanta, completely free of charge. This is our opportunity to celebrate the community that has supported us for over 25 years and to ensure that every Atlanta family has the chance to experience the power of play.",
      "The afternoon features live performances from local youth artists, collaborative community mural projects, cultural showcases, and every exhibit running at full capacity with extra educator-led programming. Community Days are made possible through the generous support of our corporate partners and individual donors. We hope to see you there.",
    ],
  },
  {
    slug: "little-engineers-bridge-building",
    image: imgA,
    badge: "FEB 18 | 10AM–12PM",
    title: "Little Engineers: Bridge Building",
    description: "Young architects learn engineering principles by designing and constructing bridges using various materials. Test your creation's strength!",
    categories: ["Workshops"],
    paragraphs: [
      "Little Engineers is our hands-on STEM workshop series for young builders and problem-solvers. In this session, children tackle one of history's most important engineering challenges: the bridge. Using a range of materials — popsicle sticks, tape, pipe cleaners, straws, and more — participants design, build, and stress-test their own bridges to see how much weight they can hold.",
      "Educators guide children through the engineering design process: define the problem, brainstorm solutions, build, test, and improve. This workshop is designed for ages 4–9 and runs for 2 hours. Materials are provided, and all bridge designs are encouraged — there's no single right answer, only creative solutions. Registration recommended; walk-ins welcome as space permits.",
    ],
  },
  {
    slug: "art-studio-clay-creations",
    image: imgB,
    badge: "FEB 22 | 2PM–4PM",
    title: "Art Studio: Clay Creations",
    description: "Mold, sculpt, and design with clay! This hands-on workshop teaches pottery basics and allows kids to create their own masterpieces to take home.",
    categories: ["Workshops"],
    paragraphs: [
      "Art Studio workshops bring focused, material-driven creative experiences to children and families at the Children's Museum. In Clay Creations, participants get their hands into actual clay — not air-dry, not Play-Doh, but the real thing — and learn basic hand-building techniques from pinch pots to coil building and slab construction.",
      "Every child leaves with a creation they made start to finish, plus new vocabulary around ceramics, 3D form, and artistic process. Clay Creations is suitable for ages 4 and up; younger children will need a caregiver to participate alongside them. All tools and materials are provided. Pieces are dried and available for pickup at the museum within two weeks.",
    ],
  },
  {
    slug: "valentines-craft-corner",
    image: imgC,
    badge: "FEB 14 | ALL DAY",
    title: "Valentine's Craft Corner",
    description: "Spread the love! Create handmade valentines, friendship bracelets, and heart-themed art projects. Perfect for sharing with friends and family.",
    categories: ["Seasonal"],
    paragraphs: [
      "Valentine's Day at the Children's Museum is all about making — and giving. Our Valentine's Craft Corner sets up stations throughout the museum where children can create handmade cards, friendship bracelets, heart-stamped prints, and watercolor love letters for anyone on their list: parents, grandparents, best friends, or their favorite teacher.",
      "All materials are provided and included with museum admission. The Craft Corner runs all day, so families can drop in whenever it works for their schedule. Extra supplies are stocked to ensure every child gets to create something — and maybe a little something for themselves too.",
    ],
  },
  {
    slug: "presidents-day-celebration",
    image: imgA,
    badge: "FEB 17 | 11AM–3PM",
    title: "Presidents Day Celebration",
    description: "Honor our nation's leaders with historical dress-up, patriotic crafts, and fun facts about presidents. Kids can even practice signing their own 'executive orders'!",
    categories: ["Seasonal"],
    paragraphs: [
      "Presidents Day at the Children's Museum is a playful, hands-on dive into American history. Children try on historical costumes, discover fun facts about past presidents through interactive trivia stations, and explore what it means to be a leader — from George Washington to the present day. The highlight: drafting and signing your very own \"executive order\" with a feathered quill.",
      "The celebration runs from 11am to 3pm and is included with regular museum admission. Our educators are stationed throughout the exhibits to lead short 10-minute programs on different presidents and historical moments throughout the day. This is a great opportunity for families to spark conversations about civics, leadership, and American history in a kid-friendly way.",
    ],
  },
  {
    slug: "science-fair-spectacular",
    image: imgB,
    badge: "FEB 28 | 10AM–2PM",
    title: "Science Fair Spectacular",
    description: "Young scientists showcase their experiments and discoveries! Interactive demonstrations, hands-on activities, and awards for creative thinking.",
    categories: ["Special Events"],
    paragraphs: [
      "The Science Fair Spectacular is the Children's Museum's celebration of young scientific minds. Children ages 5–12 are invited to bring a science project to showcase — anything from a simple volcano to a more complex experiment they've designed themselves. Display tables are set up throughout the museum, and our educators serve as judges providing encouraging feedback.",
      "Non-participating visitors are equally welcome to walk through the fair, interact with the projects, and participate in a dozen additional hands-on science demos run by our educator team throughout the day. Awards are given for creativity, thoroughness, and \"most surprising result.\" Registration for exhibitors opens two weeks before the event; spectator admission is included with regular museum entry.",
    ],
  },
  {
    slug: "spring-preview-festival",
    image: imgC,
    badge: "MAR 1 | 12PM–4PM",
    title: "Spring Preview Festival",
    description: "Get a sneak peek at our new spring exhibits! Special performances, garden planting activities, and butterfly release ceremony.",
    categories: ["Special Events"],
    paragraphs: [
      "Every year as spring approaches, the Children's Museum throws open its doors for one of our most anticipated events: the Spring Preview Festival. This is the first public look at everything new coming to the museum in the spring season — updated exhibits, new programming, new partnerships — unveiled in an afternoon of celebration and discovery.",
      "The festival includes live performances from local youth groups, hands-on garden planting stations where families can take home a seedling, and the always-magical butterfly release ceremony in our outdoor plaza. Light refreshments are available for purchase, and admission is included with regular museum entry. This is the event that makes Atlanta's families feel spring in their hearts before it arrives.",
    ],
  },
]

export const eventFilters = [
  "Featured",
  "This Week",
  "Members-Only",
  "Free Events",
  "Workshops",
  "Seasonal",
  "Special Events",
]

export const eventsByCategory: Record<string, EventItem[]> = Object.fromEntries(
  eventFilters.map((cat) => [cat, allEvents.filter((e) => e.categories.includes(cat))])
)
