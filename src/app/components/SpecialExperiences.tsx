import { useState } from "react";
import { motion } from "motion/react";
import { Bookmark } from "lucide-react";
import svgPaths from "../../imports/svg-778gp0zx2n";
import strokeSvg from "../../imports/stroke.svg";
import imgFrame39916 from "figma:asset/1fc4baecdde9a2932370e7a6c6cbbddba70e38a1.png";
import imgFrame39917 from "figma:asset/1bfa9acf43f185f4d4031bdadb934f4c9dec4b57.png";
import imgFrame39918 from "figma:asset/39da2bd0af3dceef1e3b406cd981247f82778d27.png";
import EVtoJl2V6Zp from "../../imports/EVtoJl2V6Zp40-2008-1292";

export default function SpecialExperiences() {
  const [activeFilter, setActiveFilter] = useState("Featured");

  const filters = [
    "Featured",
    "This Week",
    "Members-Only",
    "Free Events",
    "Workshops",
    "Seasonal",
    "Special Events",
  ];

  const allEvents = {
    Featured: [
      {
        image: imgFrame39916,
        date: "FEB 10 | 10AM-11:30AM",
        title: "Messy Thursdays",
        description:
          "Get ready to get messy! This weekly sensory play extravaganza features paint, slime, water tables, and creative chaos designed for exploration and fun.",
        details: [
          "Age range: Ages 2-8",
          "Cost: FREE with admission",
          "Format: Drop-in (no RSVP needed)",
        ],
      },
      {
        image: imgFrame39917,
        date: "FEB 12-16 | ALL DAY",
        title: "Snow Days",
        description:
          "Experience winter magic indoors! Build snowmen with fake snow, explore ice sculptures, and enjoy cozy winter crafts in our climate-controlled winter wonderland.",
        details: [
          "Age range: All ages welcome",
          "Cost: FREE with admission",
          "Format: Drop-in (no RSVP needed)",
        ],
      },
      {
        image: imgFrame39918,
        date: "FEB 15 | 1PM-3PM",
        title: "STEM Saturdays: Rocket Science",
        description:
          "Launch into learning! Kids will design, build, and test their own rockets while discovering the physics of flight and space exploration.",
        details: [
          "Age range: Ages 6-12",
          "Cost: $15 per child + admission",
          "Format: Registration required",
        ],
      },
    ],
    "This Week": [
      {
        image: imgFrame39916,
        date: "FEB 10 | 10AM-11:30AM",
        title: "Messy Thursdays",
        description:
          "Get ready to get messy! This weekly sensory play extravaganza features paint, slime, water tables, and creative chaos designed for exploration and fun.",
        details: [
          "Age range: Ages 2-8",
          "Cost: FREE with admission",
          "Format: Drop-in (no RSVP needed)",
        ],
      },
      {
        image: imgFrame39918,
        date: "FEB 11 | 2PM-4PM",
        title: "Story Time Adventures",
        description:
          "Join us for interactive storytelling with puppets, costumes, and dramatic play. Each session features a different beloved children's book brought to life.",
        details: [
          "Age range: Ages 3-7",
          "Cost: FREE with admission",
          "Format: Drop-in (no RSVP needed)",
        ],
      },
      {
        image: imgFrame39917,
        date: "FEB 13 | 11AM-12PM",
        title: "Music & Movement Monday",
        description:
          "Dance, sing, and play instruments in this high-energy music class designed to develop rhythm, coordination, and a love of music.",
        details: [
          "Age range: Ages 1-5",
          "Cost: FREE with admission",
          "Format: Drop-in (no RSVP needed)",
        ],
      },
    ],
    "Members-Only": [
      {
        image: imgFrame39918,
        date: "FEB 14 | 9AM-10AM",
        title: "Early Access: Member Mornings",
        description:
          "Beat the crowds! Members enjoy exclusive early access to the museum with special activities and breakfast treats in a quieter, more relaxed environment.",
        details: [
          "Age range: All ages",
          "Cost: FREE for members",
          "Format: Members only",
        ],
      },
      {
        image: imgFrame39916,
        date: "FEB 20 | 6PM-8PM",
        title: "Members Night: Glow Party",
        description:
          "An after-hours glow-in-the-dark extravaganza exclusively for members! UV face painting, neon crafts, and glowing dance party under black lights.",
        details: [
          "Age range: Ages 3-10",
          "Cost: FREE for members",
          "Format: RSVP required",
        ],
      },
      {
        image: imgFrame39917,
        date: "FEB 25 | 5PM-7PM",
        title: "Member Appreciation Workshop",
        description:
          "A special thank you event featuring exclusive workshops, meet-and-greets with educators, and sneak peeks at upcoming exhibits.",
        details: [
          "Age range: All ages",
          "Cost: FREE for members",
          "Format: RSVP required",
        ],
      },
    ],
    "Free Events": [
      {
        image: imgFrame39916,
        date: "FEB 10 | 10AM-11:30AM",
        title: "Messy Thursdays",
        description:
          "Get ready to get messy! This weekly sensory play extravaganza features paint, slime, water tables, and creative chaos designed for exploration and fun.",
        details: [
          "Age range: Ages 2-8",
          "Cost: FREE with admission",
          "Format: Drop-in (no RSVP needed)",
        ],
      },
      {
        image: imgFrame39917,
        date: "FEB 12-16 | ALL DAY",
        title: "Snow Days",
        description:
          "Experience winter magic indoors! Build snowmen with fake snow, explore ice sculptures, and enjoy cozy winter crafts in our climate-controlled winter wonderland.",
        details: [
          "Age range: All ages welcome",
          "Cost: FREE with admission",
          "Format: Drop-in (no RSVP needed)",
        ],
      },
      {
        image: imgFrame39918,
        date: "FEB 17 | 3PM-4:30PM",
        title: "Community Day Celebration",
        description:
          "Free admission for all! Join us for special performances, community art projects, and family activities celebrating our wonderful Atlanta community.",
        details: [
          "Age range: All ages",
          "Cost: Completely FREE",
          "Format: Drop-in (no RSVP needed)",
        ],
      },
    ],
    Workshops: [
      {
        image: imgFrame39918,
        date: "FEB 15 | 1PM-3PM",
        title: "STEM Saturdays: Rocket Science",
        description:
          "Launch into learning! Kids will design, build, and test their own rockets while discovering the physics of flight and space exploration.",
        details: [
          "Age range: Ages 6-12",
          "Cost: $15 per child + admission",
          "Format: Registration required",
        ],
      },
      {
        image: imgFrame39916,
        date: "FEB 18 | 10AM-12PM",
        title: "Little Engineers: Bridge Building",
        description:
          "Young architects learn engineering principles by designing and constructing bridges using various materials. Test your creation's strength!",
        details: [
          "Age range: Ages 5-10",
          "Cost: $12 per child + admission",
          "Format: Registration required",
        ],
      },
      {
        image: imgFrame39917,
        date: "FEB 22 | 2PM-4PM",
        title: "Art Studio: Clay Creations",
        description:
          "Mold, sculpt, and design with clay! This hands-on workshop teaches pottery basics and allows kids to create their own masterpieces to take home.",
        details: [
          "Age range: Ages 4-12",
          "Cost: $18 per child + admission",
          "Format: Registration required",
        ],
      },
    ],
    Seasonal: [
      {
        image: imgFrame39917,
        date: "FEB 12-16 | ALL DAY",
        title: "Snow Days",
        description:
          "Experience winter magic indoors! Build snowmen with fake snow, explore ice sculptures, and enjoy cozy winter crafts in our climate-controlled winter wonderland.",
        details: [
          "Age range: All ages welcome",
          "Cost: FREE with admission",
          "Format: Drop-in (no RSVP needed)",
        ],
      },
      {
        image: imgFrame39918,
        date: "FEB 14 | ALL DAY",
        title: "Valentine's Craft Corner",
        description:
          "Spread the love! Create handmade valentines, friendship bracelets, and heart-themed art projects. Perfect for sharing with friends and family.",
        details: [
          "Age range: Ages 2-10",
          "Cost: FREE with admission",
          "Format: Drop-in (no RSVP needed)",
        ],
      },
      {
        image: imgFrame39916,
        date: "FEB 17 | 11AM-3PM",
        title: "Presidents Day Celebration",
        description:
          "Honor our nation's leaders with historical dress-up, patriotic crafts, and fun facts about presidents. Kids can even practice signing their own 'executive orders'!",
        details: [
          "Age range: Ages 4-12",
          "Cost: FREE with admission",
          "Format: Drop-in (no RSVP needed)",
        ],
      },
    ],
    "Special Events": [
      {
        image: imgFrame39916,
        date: "FEB 20 | 6PM-8PM",
        title: "Members Night: Glow Party",
        description:
          "An after-hours glow-in-the-dark extravaganza exclusively for members! UV face painting, neon crafts, and glowing dance party under black lights.",
        details: [
          "Age range: Ages 3-10",
          "Cost: FREE for members",
          "Format: RSVP required",
        ],
      },
      {
        image: imgFrame39917,
        date: "FEB 28 | 10AM-2PM",
        title: "Science Fair Spectacular",
        description:
          "Young scientists showcase their experiments and discoveries! Interactive demonstrations, hands-on activities, and awards for creative thinking.",
        details: [
          "Age range: Ages 5-14",
          "Cost: $10 per child + admission",
          "Format: Registration required",
        ],
      },
      {
        image: imgFrame39918,
        date: "MAR 1 | 12PM-4PM",
        title: "Spring Preview Festival",
        description:
          "Get a sneak peek at our new spring exhibits! Special performances, garden planting activities, and butterfly release ceremony.",
        details: [
          "Age range: All ages",
          "Cost: FREE with admission",
          "Format: Drop-in (no RSVP needed)",
        ],
      },
    ],
  };

  const events = allEvents[activeFilter as keyof typeof allEvents] || allEvents.Featured;

  return (
    <div className="bg-[#FDF6EE] relative w-full overflow-hidden" style={{ position: 'relative' }}>
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[60px] md:h-[80px] lg:h-[100px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,80 350,80 600,50 C850,20 1050,20 1200,50 L1200,0 L0,0 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* Teal Brush Stroke Decoration - Top Right */}
      <motion.div
        className="absolute right-0 top-[80px] md:top-[120px] lg:top-[160px] w-[300px] h-[120px] md:w-[400px] md:h-[150px] lg:w-[450px] lg:h-[173px] pointer-events-none hidden md:block z-0"
        style={{ position: 'absolute' }}
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <EVtoJl2V6Zp />
      </motion.div>

      {/* Content Container */}
      <div className="relative max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 pt-20 md:pt-28 lg:pt-[160px] pb-24 md:pb-32 lg:pb-[140px] z-[1]" style={{ position: 'relative' }}>
        {/* Heading */}
        <motion.div
          className="mb-8 md:mb-10 lg:mb-[34px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Nunito',sans-serif] font-black text-[#1b3d6d] text-[36px] md:text-[52px] lg:text-[70px] leading-none">
            Don't Miss These
            <br />
            Special Experiences
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-[50px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 md:px-[16px] py-2.5 md:py-[10px] font-['Nunito',sans-serif] font-bold text-[11px] md:text-[11.4px] leading-[1.13] transition-all min-h-[44px] md:min-h-[auto] shadow-[0px_0.475px_0.95px_0px_rgba(16,24,40,0.05)] ${
                activeFilter === filter
                  ? "bg-[#00adbb] text-white"
                  : "bg-white text-[#346094] border-[0.475px] border-[#346094] hover:bg-[#00adbb] hover:text-white hover:border-[#00adbb]"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[12px] mt-8 md:mt-10 lg:mt-[4px]">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-[20px] p-5 flex flex-col shadow-sm border border-gray-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.15)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Image with Date Badge */}
              <div className="relative rounded-[20px] h-[250px] mb-6 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Date Badge - Overlaid on top */}
                <div className="absolute top-0 left-0 right-0 bg-[#f7941e] rounded-tl-[20px] rounded-tr-[20px] px-2 py-[10px]">
                  <p className="font-['Nunito',sans-serif] font-bold text-white text-[16px] leading-[24px] text-center">
                    {event.date}
                  </p>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex-1 flex flex-col">
                {/* Title */}
                <h3 className="font-['Nunito',sans-serif] font-extrabold text-[#1b3d6d] text-[20px] leading-[24px] tracking-[-0.8px] mb-[18px]">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="font-['Nunito',sans-serif] font-normal text-[#78787a] text-[16px] leading-[26px] mb-[18px]">
                  {event.description}
                </p>

                {/* What to Expect Label */}
                <h4 className="font-['Nunito',sans-serif] font-semibold text-[#474763] text-[20px] leading-[24px] tracking-[-0.8px] mb-[18px]">
                  What to Expect:
                </h4>

                {/* Details List */}
                <div className="flex flex-col mb-6">
                  {event.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex gap-3 items-center py-[15px] border-b border-[#e8e3d7]"
                    >
                      <svg
                        className="w-[18px] h-[18px] shrink-0"
                        fill="none"
                        viewBox="0 0 18.05 18.05"
                      >
                        <path d={svgPaths.p11f8ef00} fill="#00ADBB" />
                      </svg>
                      <p className="font-['Nunito',sans-serif] font-normal text-[#1d3e6b] text-[16px] leading-[26px]">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex items-center justify-between gap-3 mt-auto">
                  {/* See Full Schedule Button */}
                  <button
                    className="flex-1 rounded-full border-2 border-[#f7941e] px-6 md:px-[34px] py-4 md:py-[22px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-[#f7941e] transition-colors group min-h-[44px]"
                  >
                    <p className="font-['Nunito',sans-serif] font-bold text-[#f7941e] text-[18px] md:text-[24px] leading-[1.13] group-hover:text-white transition-colors whitespace-nowrap">
                      See Full Schedule
                    </p>
                  </button>

                  {/* Bookmark Button */}
                  <button
                    className="flex-shrink-0 w-[56px] md:w-[60px] h-[56px] md:h-[60px] rounded-full border-2 border-[#00adbb] flex items-center justify-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-[#00adbb] transition-colors group"
                    aria-label="Bookmark event"
                  >
                    <Bookmark className="w-6 h-6 text-[#00adbb] group-hover:text-white group-hover:fill-white transition-colors" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[60px] md:h-[80px] lg:h-[100px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 L0,70 C150,20 350,20 600,50 C850,80 1050,80 1200,50 L1200,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </div>
  );
}