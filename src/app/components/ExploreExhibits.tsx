import { motion } from "motion/react";
import svgPaths from "../../imports/svg-qovx1mnin1";
import imgDivTrxAddonsImageAccordionItemInner from "figma:asset/b8f9ea4dd58f1866ed3c25d4adb731014fe690e2.png";
import imgDivTrxAddonsImageAccordionItemInner1 from "figma:asset/5fbbcf6f08bc318f43c2c8d00d447df6318200dd.png";
import imgDivTrxAddonsImageAccordionItemInner2 from "figma:asset/70606b144d42e6d7ed328be28058d6611206d0a2.png";
import { useState } from "react";

export default function ExploreExhibits() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

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

  const exhibits = [
    {
      image: imgDivTrxAddonsImageAccordionItemInner,
      title: "Spring 2026",
      subtitle: "Climb inside a Tuskegee Airmen plane replica",
    },
    {
      image: imgDivTrxAddonsImageAccordionItemInner1,
      title: "Festival fun",
      subtitle: "Kids Activities",
    },
    {
      image: imgDivTrxAddonsImageAccordionItemInner2,
      title: "Imagination flight",
      subtitle: "Family Moments",
    },
  ];

  return (
    <div className="bg-white relative w-full overflow-visible" style={{ position: 'relative' }}>
      {/* Content Container */}
      <div className="relative max-w-[1280px] mx-auto px-5 md:px-8 lg:px-0 py-20 md:py-28 lg:pt-[120px] lg:pb-[60px]" style={{ position: 'relative' }}>
        {/* Heading Section */}
        <motion.div
          className="mb-8 md:mb-10 lg:mb-[40px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative mb-6 md:mb-8 lg:mb-10">
            <h2 className="font-['Nunito',sans-serif] font-bold text-[#1b3d6d] text-[36px] md:text-[52px] lg:text-[70px] leading-none">
              Explore Our Exhibits:
              <br />
              The Power of Play
            </h2>
            
            {/* Orange Underline with Stroke Animation */}
            <motion.div 
              className="absolute left-0 top-[90px] md:top-[130px] lg:top-[160px] w-full max-w-[320px] md:max-w-[480px] lg:max-w-[645px] h-[20px] md:h-[28px] lg:h-[32px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <svg 
                className="w-full h-full" 
                fill="none" 
                preserveAspectRatio="none" 
                viewBox="0 0 651.481 29.397"
              >
                <motion.path 
                  d={svgPaths.p5d7bb80} 
                  stroke="#FBB040" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="6"
                  variants={underlineVariants}
                />
              </svg>
            </motion.div>
          </div>

          <motion.div 
            className="flex justify-end"
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

        {/* Image Accordion */}
        <motion.div
          className="mb-8 md:mb-10 lg:mb-[40px] flex gap-3 md:gap-4 lg:gap-5 h-[500px] md:h-[650px] lg:h-[792px] relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
        >
          {exhibits.map((exhibit, index) => (
            <motion.div
              key={index}
              className="relative rounded-[12px] md:rounded-[20px] lg:rounded-[30px] overflow-hidden cursor-pointer h-full"
              style={{
                flex: hoveredIndex === index ? "3" : "1",
                transition: "flex 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Text Content */}
              <div className="absolute bottom-6 md:bottom-10 lg:bottom-12 left-4 md:left-6 lg:left-8 right-4 md:right-6 lg:right-8">
                <motion.h3
                  className="font-['Nunito',sans-serif] font-medium text-white text-[20px] md:text-[24px] lg:text-[28px] leading-none tracking-[-1.12px] mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0.9,
                    y: hoveredIndex === index ? 0 : 10 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {exhibit.title}
                </motion.h3>
                <motion.p
                  className="font-['Nunito',sans-serif] font-normal text-white/90 text-[12px] md:text-[13px] lg:text-[14px] leading-[20px]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0.7,
                    y: hoveredIndex === index ? 0 : 10 
                  }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                >
                  {exhibit.subtitle}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section Navigation - REMOVED */}
      </div>
    </div>
  );
}