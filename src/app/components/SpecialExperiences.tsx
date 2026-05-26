import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import imgFrame39916 from "figma:asset/1fc4baecdde9a2932370e7a6c6cbbddba70e38a1.png";
import imgFrame39917 from "figma:asset/1bfa9acf43f185f4d4031bdadb934f4c9dec4b57.png";
import imgFrame39918 from "figma:asset/39da2bd0af3dceef1e3b406cd981247f82778d27.png";
import squiggleSvg from "../../imports/sqig2.svg";

type EventItem = {
  image: string;
  date: string;
  title: string;
  description: string;
};

const filters = [
  "Featured",
  "This Week",
  "Members-Only",
  "Free Events",
  "Workshops",
  "Seasonal",
  "Special Events",
];

const allEvents: Record<string, EventItem[]> = {
  Featured: [
    {
      image: imgFrame39916,
      date: "FEB 10 | 10AM–11:30AM",
      title: "Messy Thursdays",
      description:
        "Get ready to get messy! This weekly sensory play extravaganza features paint, slime, water tables, and creative chaos designed for exploration and fun.",
    },
    {
      image: imgFrame39917,
      date: "FEB 12–16 | ALL DAY",
      title: "Snow Days",
      description:
        "Experience winter magic indoors! Build snowmen with fake snow, explore ice sculptures, and enjoy cozy winter crafts in our climate-controlled winter wonderland.",
    },
    {
      image: imgFrame39918,
      date: "FEB 15 | 1PM–3PM",
      title: "STEM Saturdays: Rocket Science",
      description:
        "Launch into learning! Kids will design, build, and test their own rockets while discovering the physics of flight and space exploration.",
    },
  ],
  "This Week": [
    {
      image: imgFrame39916,
      date: "FEB 10 | 10AM–11:30AM",
      title: "Messy Thursdays",
      description:
        "Get ready to get messy! This weekly sensory play extravaganza features paint, slime, water tables, and creative chaos designed for exploration and fun.",
    },
    {
      image: imgFrame39918,
      date: "FEB 11 | 2PM–4PM",
      title: "Story Time Adventures",
      description:
        "Join us for interactive storytelling with puppets, costumes, and dramatic play. Each session features a different beloved children's book brought to life.",
    },
    {
      image: imgFrame39917,
      date: "FEB 13 | 11AM–12PM",
      title: "Music & Movement Monday",
      description:
        "Dance, sing, and play instruments in this high-energy music class designed to develop rhythm, coordination, and a love of music.",
    },
  ],
  "Members-Only": [
    {
      image: imgFrame39918,
      date: "FEB 14 | 9AM–10AM",
      title: "Early Access: Member Mornings",
      description:
        "Beat the crowds! Members enjoy exclusive early access to the museum with special activities and breakfast treats in a quieter, more relaxed environment.",
    },
    {
      image: imgFrame39916,
      date: "FEB 20 | 6PM–8PM",
      title: "Members Night: Glow Party",
      description:
        "An after-hours glow-in-the-dark extravaganza exclusively for members! UV face painting, neon crafts, and glowing dance party under black lights.",
    },
    {
      image: imgFrame39917,
      date: "FEB 25 | 5PM–7PM",
      title: "Member Appreciation Workshop",
      description:
        "A special thank you event featuring exclusive workshops, meet-and-greets with educators, and sneak peeks at upcoming exhibits.",
    },
  ],
  "Free Events": [
    {
      image: imgFrame39916,
      date: "FEB 10 | 10AM–11:30AM",
      title: "Messy Thursdays",
      description:
        "Get ready to get messy! This weekly sensory play extravaganza features paint, slime, water tables, and creative chaos designed for exploration and fun.",
    },
    {
      image: imgFrame39917,
      date: "FEB 12–16 | ALL DAY",
      title: "Snow Days",
      description:
        "Experience winter magic indoors! Build snowmen with fake snow, explore ice sculptures, and enjoy cozy winter crafts in our climate-controlled winter wonderland.",
    },
    {
      image: imgFrame39918,
      date: "FEB 17 | 3PM–4:30PM",
      title: "Community Day Celebration",
      description:
        "Free admission for all! Join us for special performances, community art projects, and family activities celebrating our wonderful Atlanta community.",
    },
  ],
  Workshops: [
    {
      image: imgFrame39918,
      date: "FEB 15 | 1PM–3PM",
      title: "STEM Saturdays: Rocket Science",
      description:
        "Launch into learning! Kids will design, build, and test their own rockets while discovering the physics of flight and space exploration.",
    },
    {
      image: imgFrame39916,
      date: "FEB 18 | 10AM–12PM",
      title: "Little Engineers: Bridge Building",
      description:
        "Young architects learn engineering principles by designing and constructing bridges using various materials. Test your creation's strength!",
    },
    {
      image: imgFrame39917,
      date: "FEB 22 | 2PM–4PM",
      title: "Art Studio: Clay Creations",
      description:
        "Mold, sculpt, and design with clay! This hands-on workshop teaches pottery basics and allows kids to create their own masterpieces to take home.",
    },
  ],
  Seasonal: [
    {
      image: imgFrame39917,
      date: "FEB 12–16 | ALL DAY",
      title: "Snow Days",
      description:
        "Experience winter magic indoors! Build snowmen with fake snow, explore ice sculptures, and enjoy cozy winter crafts in our climate-controlled winter wonderland.",
    },
    {
      image: imgFrame39918,
      date: "FEB 14 | ALL DAY",
      title: "Valentine's Craft Corner",
      description:
        "Spread the love! Create handmade valentines, friendship bracelets, and heart-themed art projects. Perfect for sharing with friends and family.",
    },
    {
      image: imgFrame39916,
      date: "FEB 17 | 11AM–3PM",
      title: "Presidents Day Celebration",
      description:
        "Honor our nation's leaders with historical dress-up, patriotic crafts, and fun facts about presidents. Kids can even practice signing their own 'executive orders'!",
    },
  ],
  "Special Events": [
    {
      image: imgFrame39916,
      date: "FEB 20 | 6PM–8PM",
      title: "Members Night: Glow Party",
      description:
        "An after-hours glow-in-the-dark extravaganza exclusively for members! UV face painting, neon crafts, and glowing dance party under black lights.",
    },
    {
      image: imgFrame39917,
      date: "FEB 28 | 10AM–2PM",
      title: "Science Fair Spectacular",
      description:
        "Young scientists showcase their experiments and discoveries! Interactive demonstrations, hands-on activities, and awards for creative thinking.",
    },
    {
      image: imgFrame39918,
      date: "MAR 1 | 12PM–4PM",
      title: "Spring Preview Festival",
      description:
        "Get a sneak peek at our new spring exhibits! Special performances, garden planting activities, and butterfly release ceremony.",
    },
  ],
};

export default function SpecialExperiences() {
  const [activeFilter, setActiveFilter] = useState("Featured");

  const events = allEvents[activeFilter] ?? allEvents.Featured;

  return (
    <section className="bg-cma-cream relative w-full py-[80px] lg:pt-[100px] lg:pb-0">
      {/* Squiggle clip container — isolates overflow to just this decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <motion.div
          className="absolute right-0 top-[80px] md:top-[100px] lg:top-[120px] w-[260px] md:w-[420px] lg:w-[560px] hidden md:block"
          initial={{ x: 160, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={squiggleSvg} alt="" className="w-full h-auto object-contain" />
        </motion.div>
      </div>

      <div className="relative z-[1] max-w-[1280px] mx-auto px-5 md:px-8 lg:px-[80px] flex flex-col items-center gap-[48px]">
        {/* Heading */}
        <motion.h2
          className="text-cma-navy text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Don&apos;t Miss The Fun.
        </motion.h2>

        {/* Filter pill bar — same pattern as FeaturedExhibits */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          <div className="cma-filter-bar mx-auto max-w-[900px]">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`cma-filter-pill ${
                  filter === activeFilter ? "cma-filter-pill-active" : "cma-filter-pill-inactive"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Event cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {events.map((event, index) => (
              <motion.div
                key={index}
                className="bg-white border-2 border-black/5 rounded-[24px] p-[24px] flex flex-col gap-[32px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                {/* Image with teal date badge */}
                <div className="cma-card-img">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute bottom-[10px] left-[10px] bg-cma-teal-dark px-[18px] py-[12px] rounded-[8px]">
                    <p className="font-extrabold text-[14px] text-white leading-[1.5] whitespace-nowrap">
                      {event.date}
                    </p>
                  </div>
                </div>

                {/* Title */}
                <p className="font-extrabold text-[30px] text-cma-navy leading-[1.3] tracking-[-1px]">
                  {event.title}
                </p>

                {/* Description */}
                <p className="text-cma-navy">{event.description}</p>

                {/* Text link */}
                <a href="#events" className="cma-text-link mt-auto">
                  Learn More <FontAwesomeIcon icon={faArrowRight} className="text-[13px]" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
