import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import svgPaths from "../../imports/svg-mzk71uq0h5";
import svgPathsExhibits from "../../imports/svg-qovx1mnin1";
import Vector from "../../imports/Vector";
import Statue from "../../imports/Statue-15-3841";
import imgDivTrxAddonsImageAccordionItemInner from "figma:asset/b8f9ea4dd58f1866ed3c25d4adb731014fe690e2.png";
import imgDivTrxAddonsImageAccordionItemInner1 from "figma:asset/5fbbcf6f08bc318f43c2c8d00d447df6318200dd.png";
import imgDivTrxAddonsImageAccordionItemInner2 from "figma:asset/70606b144d42e6d7ed328be28058d6611206d0a2.png";
import imgStatueHandstand11920X96811 from "figma:asset/2200d5f1414b522eb5abd25d17dd7bf0ff0d738e.png";

export default function PlanYourVisit() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const statueRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Track scroll progress for the statue (scrolling up animation)
  const { scrollYProgress: statueScrollProgress } = useScroll({
    target: statueRef,
    offset: ["start end", "start start"],
  });

  // Map scroll progress to scale: grows from 0.8 to 1.2 as user scrolls through section
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  // Statue slides off screen (to the right) when scrolling up and rotates
  const statueX = useTransform(statueScrollProgress, [0, 1], [150, 0]);
  const statueRotate = useTransform(statueScrollProgress, [0, 1], [15, 0]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const underlineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.2, ease: "easeInOut", delay: 0.3 },
        opacity: { duration: 0.3, delay: 0.3 },
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const accordionData = [
    {
      title: "Hours & What to Expect",
      color: "#00adbb",
      badge: {
        bg: "rgba(0,173,187,0.2)",
        title: "FRIDAY: Open 10am-3:30pm",
        subtitle: "Members: 9am-10am (early access)",
      },
      section: {
        title: "What to Expect:",
        items: [
          "2-3 hour average visit",
          "Self-guided exploration",
          "All ages welcome",
        ],
        iconColor: "#00ADBB",
      },
      button: {
        text: "Plan Your Visit",
        borderColor: "#00adbb",
        hoverBg: "#00adbb",
      },
    },
    {
      title: "Tickets & Pricing",
      color: "#f7941e",
      badge: {
        bg: "rgba(247,148,30,0.2)",
        title: "Members: FREE admission",
        subtitle: "+early access +special events",
      },
      section: {
        title: "General Admission:",
        items: [
          { label: "Adults:", price: "$18.95", priceColor: "#f7941e" },
          { label: "Children (1-8):", price: "$18.95", priceColor: "#f7941e" },
          { label: "Under 1:", price: "FREE", priceColor: "#1d3e6b" },
        ],
        iconColor: "#f7941e",
        isPricing: true,
      },
      button: {
        text: "Buy Tickets",
        borderColor: "#f7941e",
        hoverBg: "#f7941e",
      },
    },
    {
      title: "Getting There",
      color: "#346094",
      badge: {
        bg: "rgba(29,62,107,0.2)",
        title: "Parking:",
        subtitle: "Pre-purchase $8",
      },
      section: {
        title: "Getting Here:",
        items: [
          "MARTA: Civic Center Station",
          "Street parking available",
          "Rideshare drop-off zone",
        ],
        iconColor: "#346094",
      },
      button: {
        text: "Get Directions",
        borderColor: "#346094",
        hoverBg: "#346094",
      },
    },
    {
      title: "Become a Member",
      color: "#00adbb",
      badge: {
        bg: "rgba(0,173,187,0.2)",
        title: "From $175/year",
        subtitle: "FREE admission + exclusive benefits",
      },
      section: {
        title: "Member Benefits:",
        items: [
          "Unlimited visits all year",
          "Early access hours",
          "Special events & workshops",
          "Guest passes included",
        ],
        iconColor: "#00ADBB",
      },
      button: {
        text: "Join Today",
        borderColor: "#00adbb",
        hoverBg: "#00adbb",
      },
    },
  ];

  return (
    <div ref={sectionRef} className="bg-white relative w-full overflow-hidden" style={{ position: 'relative' }}>
      {/* Background Decoration with Scroll-based Animation - Centered horizontally */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 -top-[400px] w-full max-w-[1344px] h-[1585px] pointer-events-none z-0"
        style={{ scale, rotate, position: 'absolute' }}
        initial={{ opacity: 0, scale: 0.6, rotate: -45 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-200px" }}
        transition={{ duration: 1.2 }}
      >
        <Vector />
      </motion.div>

      {/* Content Container */}
      <div className="relative max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 pt-20 md:pt-28 lg:pt-[140px] pb-12 md:pb-16 lg:pb-20 z-[1]" style={{ position: 'relative' }}>
        {/* Heading */}
        <motion.div
          className="mb-8 md:mb-10 lg:mb-[30px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Nunito',sans-serif] font-black text-[#1b3d6d] text-[36px] md:text-[52px] lg:text-[70px] leading-none">
            Planning Your Visit?
            <br />
            We've Got You Covered
          </h2>
        </motion.div>

        {/* Mobile/Tablet Accordion (below lg) */}
        <div className="lg:hidden space-y-3 md:space-y-4 mb-8 md:mb-10 lg:mb-[40px]">
          {accordionData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-[36px] border-2 overflow-hidden shadow-sm"
              style={{ borderColor: 'rgba(0,0,0,0.05)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px", amount: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                translateY: -6,
                scale: 1.02,
                boxShadow: "0 12px 28px rgba(0, 0, 0, 0.15)",
              }}
            >
              {/* Accordion Header */}
              <button
                className="w-full px-5 md:px-6 pt-2 md:pt-2.5 pb-4 md:pb-5 flex items-center justify-between hover:bg-gray-50 transition-colors min-h-[68px]"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  {/* Color Indicator */}
                  <div
                    className="w-1 h-10 md:h-12 rounded-full shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <h3
                    className="font-['Nunito',sans-serif] font-semibold text-left text-[18px] md:text-[22px] leading-tight"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-6 h-6 md:w-7 md:h-7 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "" : "rotate-180"
                  }`}
                  style={{ color: item.color }}
                />
              </button>

              {/* Accordion Content */}
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-5 md:px-6 pb-5 pt-2">
                  {/* Badge */}
                  {item.badge && (
                    <div
                      className="rounded-[10px] px-4 py-3 mb-5"
                      style={{ backgroundColor: item.badge.bg }}
                    >
                      <p className="font-['Nunito',sans-serif] font-medium text-[#1b3d6d] text-[15px] md:text-[16px] leading-[28px] text-center">
                        {item.badge.title}
                      </p>
                      <p className="font-['Nunito',sans-serif] font-normal text-[#4a5565] text-[14px] leading-[20px] text-center">
                        {item.badge.subtitle}
                      </p>
                    </div>
                  )}

                  {/* Section Content */}
                  <div className="mb-5">
                    <h4 className="font-['Nunito',sans-serif] font-semibold text-[#474763] text-[18px] md:text-[20px] leading-[24px] tracking-[-0.8px] mb-3">
                      {item.section.title}
                    </h4>
                    <div className="space-y-0">
                      {item.section.items.map((listItem, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex gap-3 items-center py-[13px] border-b border-[#e8e3d7]"
                        >
                          {typeof listItem === "string" ? (
                            <>
                              <svg
                                className="w-[18px] h-[18px] shrink-0"
                                fill="none"
                                viewBox="0 0 18.05 18.05"
                              >
                                <path
                                  d={svgPaths.p11f8ef00}
                                  fill={item.section.iconColor}
                                />
                              </svg>
                              <p className="font-['Nunito',sans-serif] font-normal text-[#8c8c9d] text-[15px] md:text-[16px] leading-[26px]">
                                {listItem}
                              </p>
                            </>
                          ) : (
                            <>
                              <p className="font-['Nunito',sans-serif] font-bold text-[#364153] text-[15px] md:text-[16px] leading-[26px] flex-1">
                                {listItem.label}
                              </p>
                              <p
                                className="font-['Nunito',sans-serif] font-bold text-[15px] md:text-[16px] leading-[26px]"
                                style={{ color: listItem.priceColor }}
                              >
                                {listItem.price}
                              </p>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    className="w-full rounded-full px-6 md:px-8 py-4 md:py-5 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] transition-colors group min-h-[44px] md:min-h-[56px]"
                    style={{
                      border: `2px solid ${item.button.borderColor}`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = item.button.hoverBg;
                      e.currentTarget.querySelector("p")!.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.querySelector("p")!.style.color =
                        item.button.borderColor;
                    }}
                  >
                    <p
                      className="font-['Nunito',sans-serif] font-bold text-[18px] md:text-[22px] leading-[1.13] transition-colors"
                      style={{ color: item.button.borderColor }}
                    >
                      {item.button.text}
                    </p>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Cards Grid (lg and up) */}
        <div className="hidden lg:grid grid-cols-4 gap-[11.4px] mb-[40px]">
          {/* Card 1: Hours & What to Expect */}
          <motion.div
            className="bg-white rounded-[36px] border-2 p-5 flex flex-col transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[6px] hover:scale-[1.02] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]"
            style={{ borderColor: 'rgba(0,0,0,0.05)' }}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
          >
            {/* Title */}
            <div className="pt-[12.35px] pb-[24.7px]">
              <h3 className="font-['Nunito',sans-serif] font-semibold text-[#474763] text-[22px] leading-[24px] tracking-[-0.96px]">
                Hours & What to Expect
              </h3>
            </div>

            {/* Badge */}
            <div className="bg-[rgba(0,173,187,0.2)] rounded-[10px] px-2 py-[10px] mb-[19px]">
              <p className="font-['Nunito',sans-serif] font-medium text-[#1b3d6d] text-[15px] leading-[28px] text-center">
                FRIDAY: Open 10am-3:30pm
              </p>
              <p className="font-['Nunito',sans-serif] font-normal text-[#4a5565] text-[14px] leading-[20px] text-center">
                Members: 9am-10am (early access)
              </p>
            </div>

            {/* What to Expect List */}
            <div className="py-[19px] flex-1">
              <h4 className="font-['Nunito',sans-serif] font-semibold text-[#474763] text-[20px] leading-[24px] tracking-[-0.8px] mb-[14.25px]">
                What to Expect:
              </h4>
              <div className="space-y-0">
                <div className="flex gap-3 items-center py-[12.35px] border-b border-[#e8e3d7]">
                  <svg className="w-[18px] h-[18px] shrink-0" fill="none" viewBox="0 0 18.05 18.05">
                    <path d={svgPaths.p11f8ef00} fill="#00ADBB" />
                  </svg>
                  <p className="font-['Nunito',sans-serif] font-normal text-[#8c8c9d] text-[16px] leading-[26px]">
                    2-3 hour average visit
                  </p>
                </div>
                <div className="flex gap-3 items-center py-[12.35px] border-b border-[#e8e3d7]">
                  <svg className="w-[18px] h-[18px] shrink-0" fill="none" viewBox="0 0 18.05 18.05">
                    <path d={svgPaths.p11f8ef00} fill="#00ADBB" />
                  </svg>
                  <p className="font-['Nunito',sans-serif] font-normal text-[#8c8c9d] text-[16px] leading-[26px]">
                    Self-guided exploration
                  </p>
                </div>
                <div className="flex gap-3 items-center py-[12.35px] border-b border-[#e8e3d7]">
                  <svg className="w-[18px] h-[18px] shrink-0" fill="none" viewBox="0 0 18.05 18.05">
                    <path d={svgPaths.p11f8ef00} fill="#00ADBB" />
                  </svg>
                  <p className="font-['Nunito',sans-serif] font-normal text-[#8c8c9d] text-[16px] leading-[26px]">
                    All ages welcome
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full rounded-full border-2 border-[#00adbb] px-[34px] py-[19px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-[#00adbb] hover:text-white transition-colors group min-h-[44px]">
              <p className="font-['Nunito',sans-serif] font-bold text-[#00adbb] text-[24px] leading-[1.13] group-hover:text-white transition-colors">
                Plan Your Visit
              </p>
            </button>
          </motion.div>

          {/* Card 2: Tickets & Pricing */}
          <motion.div
            className="bg-white rounded-[36px] border-2 p-5 flex flex-col transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[6px] hover:scale-[1.02] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]"
            style={{ borderColor: 'rgba(0,0,0,0.05)' }}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
          >
            {/* Title */}
            <div className="pt-[12.35px] pb-[24.7px]">
              <h3 className="font-['Nunito',sans-serif] font-semibold text-[#474763] text-[22px] leading-[24px] tracking-[-0.96px]">
                Tickets & Pricing
              </h3>
            </div>

            {/* Badge */}
            <div className="bg-[rgba(247,148,30,0.2)] rounded-[10px] px-2 py-[10px] mb-[19px]">
              <p className="font-['Nunito',sans-serif] font-medium text-[#1b3d6d] text-[15px] leading-[28px] text-center">
                Members: FREE admission
              </p>
              <p className="font-['Nunito',sans-serif] font-normal text-[#4a5565] text-[14px] leading-[20px] text-center">
                +early access +special events
              </p>
            </div>

            {/* Pricing List */}
            <div className="py-[19px] flex-1">
              <h4 className="font-['Nunito',sans-serif] font-semibold text-[#474763] text-[20px] leading-[24px] tracking-[-0.8px] mb-[14.25px]">
                General Admission:
              </h4>
              <div className="space-y-0">
                <div className="flex justify-between items-center py-[12.35px] border-b border-[#e8e3d7]">
                  <p className="font-['Nunito',sans-serif] font-bold text-[#364153] text-[16px] leading-[26px]">
                    Adults:
                  </p>
                  <p className="font-['Nunito',sans-serif] font-bold text-[#f7941e] text-[16px] leading-[26px]">
                    $18.95
                  </p>
                </div>
                <div className="flex justify-between items-center py-[12.35px] border-b border-[#e8e3d7]">
                  <p className="font-['Nunito',sans-serif] font-bold text-[#364153] text-[16px] leading-[26px]">
                    Children (1-8):
                  </p>
                  <p className="font-['Nunito',sans-serif] font-bold text-[#f7941e] text-[16px] leading-[26px]">
                    $18.95
                  </p>
                </div>
                <div className="flex justify-between items-center py-[12.35px] border-b border-[#e8e3d7]">
                  <p className="font-['Nunito',sans-serif] font-bold text-[#364153] text-[16px] leading-[26px]">
                    Under 1:
                  </p>
                  <p className="font-['Nunito',sans-serif] font-bold text-[#1d3e6b] text-[16px] leading-[26px]">
                    FREE
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full rounded-full border-2 border-[#f7941e] px-[34px] py-[19px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-[#f7941e] hover:text-white transition-colors group min-h-[44px]">
              <p className="font-['Nunito',sans-serif] font-bold text-[#f7941e] text-[24px] leading-[1.13] group-hover:text-white transition-colors">
                Buy Tickets
              </p>
            </button>
          </motion.div>

          {/* Card 3: Parking & Directions */}
          <motion.div
            className="bg-white rounded-[36px] border-2 p-5 flex flex-col transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[6px] hover:scale-[1.02] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]"
            style={{ borderColor: 'rgba(0,0,0,0.05)' }}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
          >
            {/* Title */}
            <div className="pt-[12.35px] pb-[24.7px]">
              <h3 className="font-['Nunito',sans-serif] font-semibold text-[#474763] text-[22px] leading-[24px] tracking-[-0.96px]">
                Parking & Directions
              </h3>
            </div>

            {/* Badge */}
            <div className="bg-[rgba(29,62,107,0.2)] rounded-[10px] px-2 py-[10px] mb-[19px]">
              <p className="font-['Nunito',sans-serif] font-semibold text-[#1b3d6d] text-[16px] leading-[26px] text-center">
                Parking:
              </p>
              <p className="font-['Nunito',sans-serif] font-normal text-[#4a5565] text-[14px] leading-[20px] text-center">
                Pre-purchase $8
              </p>
            </div>

            {/* Getting Here List */}
            <div className="py-[19px] flex-1">
              <h4 className="font-['Nunito',sans-serif] font-semibold text-[#474763] text-[20px] leading-[24px] tracking-[-0.8px] mb-[14.25px]">
                Getting Here:
              </h4>
              <div className="space-y-0">
                <div className="flex gap-3 items-center py-[12.35px] border-b border-[#e8e3d7]">
                  <svg className="w-[18px] h-[18px] shrink-0" fill="none" viewBox="0 0 18.05 18.05">
                    <path d={svgPaths.p11f8ef00} fill="#346094" />
                  </svg>
                  <p className="font-['Nunito',sans-serif] font-normal text-[#8c8c9d] text-[16px] leading-[26px]">
                    MARTA: Civic Center Station
                  </p>
                </div>
                <div className="flex gap-3 items-center py-[12.35px] border-b border-[#e8e3d7]">
                  <svg className="w-[18px] h-[18px] shrink-0" fill="none" viewBox="0 0 18.05 18.05">
                    <path d={svgPaths.p11f8ef00} fill="#346094" />
                  </svg>
                  <p className="font-['Nunito',sans-serif] font-normal text-[#8c8c9d] text-[16px] leading-[26px]">
                    Street parking available
                  </p>
                </div>
                <div className="flex gap-3 items-center py-[12.35px] border-b border-[#e8e3d7]">
                  <svg className="w-[18px] h-[18px] shrink-0" fill="none" viewBox="0 0 18.05 18.05">
                    <path d={svgPaths.p11f8ef00} fill="#346094" />
                  </svg>
                  <p className="font-['Nunito',sans-serif] font-normal text-[#8c8c9d] text-[16px] leading-[26px]">
                    Rideshare drop-off zone
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full rounded-full border-2 border-[#346094] px-[34px] py-[19px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-[#346094] hover:text-white transition-colors group min-h-[44px]">
              <p className="font-['Nunito',sans-serif] font-bold text-[#346094] text-[24px] leading-[1.13] group-hover:text-white transition-colors">
                Get Directions
              </p>
            </button>
          </motion.div>

          {/* Card 4: Food & Amenities */}
          <motion.div
            className="bg-white rounded-[36px] border-2 p-5 flex flex-col transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[6px] hover:scale-[1.02] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]"
            style={{ borderColor: 'rgba(0,0,0,0.05)' }}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
          >
            {/* Title */}
            <div className="pt-[12.35px] pb-[24.7px]">
              <h3 className="font-['Nunito',sans-serif] font-semibold text-[#474763] text-[22px] leading-[24px] tracking-[-0.96px]">
                Become a Member
              </h3>
            </div>

            {/* Badge */}
            <div className="bg-[rgba(0,173,187,0.2)] rounded-[10px] px-2 py-[10px] mb-[19px]">
              <p className="font-['Nunito',sans-serif] font-medium text-[#1b3d6d] text-[15px] leading-[28px] text-center">
                From $175/year
              </p>
              <p className="font-['Nunito',sans-serif] font-normal text-[#4a5565] text-[14px] leading-[20px] text-center">
                FREE admission + exclusive benefits
              </p>
            </div>

            {/* Facilities List */}
            <div className="pb-[19px] flex-1">
              <h4 className="font-['Nunito',sans-serif] font-semibold text-[#474763] text-[20px] leading-[24px] tracking-[-0.8px] mb-[14.25px]">
                Member Benefits:
              </h4>
              <div className="space-y-0">
                <div className="flex gap-3 items-center py-[12.35px] border-b border-[#e8e3d7]">
                  <svg className="w-[18px] h-[18px] shrink-0" fill="none" viewBox="0 0 18.05 18.05">
                    <path d={svgPaths.p11f8ef00} fill="#00ADBB" />
                  </svg>
                  <p className="font-['Nunito',sans-serif] font-normal text-[#8c8c9d] text-[16px] leading-[26px]">
                    Unlimited visits all year
                  </p>
                </div>
                <div className="flex gap-3 items-center py-[12.35px] border-b border-[#e8e3d7]">
                  <svg className="w-[18px] h-[18px] shrink-0" fill="none" viewBox="0 0 18.05 18.05">
                    <path d={svgPaths.p11f8ef00} fill="#00ADBB" />
                  </svg>
                  <p className="font-['Nunito',sans-serif] font-normal text-[#8c8c9d] text-[16px] leading-[26px]">
                    Early access hours
                  </p>
                </div>
                <div className="flex gap-3 items-center py-[12.35px] border-b border-[#e8e3d7]">
                  <svg className="w-[18px] h-[18px] shrink-0" fill="none" viewBox="0 0 18.05 18.05">
                    <path d={svgPaths.p11f8ef00} fill="#00ADBB" />
                  </svg>
                  <p className="font-['Nunito',sans-serif] font-normal text-[#8c8c9d] text-[16px] leading-[26px]">
                    Special events & workshops
                  </p>
                </div>
                <div className="flex gap-3 items-center py-[12.35px] border-b border-[#e8e3d7]">
                  <svg className="w-[18px] h-[18px] shrink-0" fill="none" viewBox="0 0 18.05 18.05">
                    <path d={svgPaths.p11f8ef00} fill="#00ADBB" />
                  </svg>
                  <p className="font-['Nunito',sans-serif] font-normal text-[#8c8c9d] text-[16px] leading-[26px]">
                    Guest passes included
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full rounded-full border-2 border-[#00adbb] px-[34px] py-[19px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-[#00adbb] hover:text-white transition-colors group min-h-[44px]">
              <p className="font-['Nunito',sans-serif] font-bold text-[#00adbb] text-[24px] leading-[1.13] group-hover:text-white transition-colors">
                Join Today
              </p>
            </button>
          </motion.div>
        </div>

        {/* Bridge Text CTA */}
        <motion.div
          className="flex items-center justify-center gap-2 md:gap-[10px] bg-[#cceff1] rounded-[20px] px-4 md:px-[10px] py-2 md:py-[6px] mx-auto w-fit mb-20 md:mb-28 lg:mb-[120px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="font-['Nunito',sans-serif] font-bold text-[#346094] text-[12px] md:text-[14px] leading-[21px] tracking-[2px] md:tracking-[3.5px] uppercase">
            keep scrolling to explore our exhibits
          </p>
          <div className="rotate-180">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
              <path d={svgPaths.pa843760} fill="#346094" />
            </svg>
          </div>
        </motion.div>

        {/* Explore Exhibits Section */}
        <motion.div
          className="relative mb-8 md:mb-10 lg:mb-[40px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Large Peach/Cream Blob Background */}
          <div className="absolute -left-[10%] top-[50%] -translate-y-1/2 w-[700px] h-[700px] md:w-[900px] md:h-[900px] lg:w-[1100px] lg:h-[1100px] bg-[#FDF0E0] rounded-full opacity-60 blur-[120px] pointer-events-none -z-10" />

          <div className="relative mb-6 md:mb-8 lg:mb-10">
            {/* Animated Statue - positioned upper right with gentle bob animation */}
            <div ref={statueRef} className="relative" style={{ position: 'relative' }}>
              <div className="hidden md:block absolute right-0 -top-[100px] w-[60px] h-[120px] lg:w-[70px] lg:h-[140px] z-10">
                {/* Shadow - shrinks and grows */}
                <motion.div 
                  className="absolute h-[14.649px] left-0 top-[248.35px] w-[131.84px]"
                  animate={{ 
                    scaleX: [1, 0.7, 1],
                    scaleY: [1, 0.6, 1],
                    opacity: [0.6, 0.2, 0.6]
                  }}
                  transition={{ 
                    duration: 2.5,
                    ease: "easeInOut",
                    repeat: Infinity
                  }}
                >
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131.84 14.6488">
                    <ellipse cx="65.9198" cy="7.32442" fill="url(#paint0_linear_statue_shadow)" rx="65.9198" ry="7.32442" />
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_statue_shadow" x1="0" x2="131.84" y1="7.32442" y2="7.32442">
                        <stop stopColor="#D9D9D9" stopOpacity="0.3" />
                        <stop offset="1" stopColor="#737373" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
                
                {/* Statue - bounces */}
                <motion.div
                  className="absolute h-[262.998px] left-0 top-0 w-[131.158px]"
                  animate={{ 
                    y: [0, -25, 0]
                  }}
                  transition={{ 
                    duration: 2.5,
                    ease: "easeInOut",
                    repeat: Infinity
                  }}
                >
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img 
                      alt="" 
                      className="absolute h-[125.39%] left-[-195.32%] max-w-none top-[-16.32%] w-[498.7%]" 
                      src={imgStatueHandstand11920X96811} 
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            <h2 className="font-['Nunito',sans-serif] font-black text-[#1b3d6d] text-[36px] md:text-[52px] lg:text-[70px] leading-none">
              Explore Our Exhibits:
              <br />
              The Power of Play
            </h2>
          </div>

          <motion.div 
            className="flex justify-end mb-8 md:mb-10 lg:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <p className="font-['Nunito',sans-serif] font-normal text-[#78787a] text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] text-right max-w-[100%] md:max-w-[520px] lg:max-w-[601px]">
              Why is play essential for childhood development—and how does the Children's Museum of Atlanta help make it possible?
            </p>
          </motion.div>
        </motion.div>

        {/* Photo Card Grid (3 cards, same height, expand on hover) */}
        <motion.div
          className="mb-8 md:mb-10 lg:mb-[40px] flex gap-3 md:gap-4 lg:gap-5 h-[500px] md:h-[650px] lg:h-[792px] relative"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        >
          {[
            {
              image: imgDivTrxAddonsImageAccordionItemInner,
              category: "New in 2026",
              title: "Climb inside a Tuskegee Airmen plane replica",
            },
            {
              image: imgDivTrxAddonsImageAccordionItemInner1,
              category: "Kids Activities",
              title: "Festival fun for all ages",
            },
            {
              image: imgDivTrxAddonsImageAccordionItemInner2,
              category: "Family Moments",
              title: "Imagination takes flight",
            },
          ].map((exhibit, index) => (
            <motion.div
              key={index}
              className="relative rounded-[12px] md:rounded-[20px] lg:rounded-[30px] overflow-hidden cursor-pointer h-full transition-all duration-[250ms] ease-out hover:brightness-105"
              style={{
                flex: hoveredIndex === index ? "3" : "1",
                transition: "flex 0.6s cubic-bezier(0.4, 0, 0.2, 1), filter 0.25s ease-out",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(0)}
            >
              {/* Image */}
              <img
                alt={exhibit.title}
                className="absolute inset-0 w-full h-full object-cover"
                src={exhibit.image}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Text Content at Bottom */}
              <div className="absolute bottom-6 md:bottom-10 lg:bottom-12 left-4 md:left-6 lg:left-8 right-4 md:right-6 lg:right-8">
                {/* Category Pill */}
                <motion.div 
                  className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0.9,
                    y: hoveredIndex === index ? 0 : 10 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-['Nunito',sans-serif] font-semibold text-white text-[11px] md:text-[12px] leading-none uppercase tracking-wider">
                    {exhibit.category}
                  </p>
                </motion.div>
                
                {/* Title */}
                <motion.h3 
                  className="font-['Nunito',sans-serif] font-bold text-white text-[20px] md:text-[24px] lg:text-[28px] leading-tight"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0.9,
                    y: hoveredIndex === index ? 0 : 10 
                  }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                >
                  {exhibit.title}
                </motion.h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Link */}
        <motion.div
          className="text-center mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a 
            href="#" 
            className="inline-flex items-center gap-2 font-['Nunito',sans-serif] font-bold text-[#00adbb] text-[16px] md:text-[18px] lg:text-[20px] leading-[1.4] hover:underline underline-offset-4 decoration-2 transition-all group"
          >
            Click something. Be curious. Come back for more
            <svg 
              className="w-5 h-5 transition-transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 20 20"
            >
              <path 
                d="M4.167 10h11.666M10 4.167L15.833 10 10 15.833" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>

        {/* Final Bridge Text CTA - REMOVED */}
      </div>
    </div>
  );
}