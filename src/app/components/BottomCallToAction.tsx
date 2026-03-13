import { motion } from "motion/react";
import svgPaths from "../../imports/svg-9k39sqzzx8";
import waveSvgPaths from "../../imports/svg-gweyni7zh7";
import imgBottomCallToAction from "figma:asset/e8d56ebc415002dbd15dc991825ef1684a7a8be2.png";

export default function BottomCallToAction() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  const arrowVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1.5,
      },
    },
    pulse: {
      y: [0, -8, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full h-[60px] md:h-[80px] lg:h-[100px] z-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,50 Q360,0 720,50 T1440,50 L1440,0 L0,0 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Background Image with Overlay */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img
          alt=""
          className="absolute size-full object-cover object-center"
          src={imgBottomCallToAction}
        />
        <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
      </div>

      {/* Content Container */}
      <div className="relative px-5 py-16 md:px-12 md:py-24 lg:px-[60px] lg:py-[100px] flex flex-col items-start justify-center min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
        <motion.div
          className="flex flex-col gap-6 md:gap-8 lg:gap-[50px] items-start justify-center max-w-full lg:max-w-[768px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Main Heading */}
          <motion.h2
            className="font-['Nunito',sans-serif] font-bold leading-none text-white text-[36px] md:text-[56px] lg:text-[86px] max-w-full lg:max-w-[581px] tracking-[-0.02em] lg:tracking-[-3.44px]"
            style={{ opacity: 0.9 }}
            variants={headingVariants}
          >
            Make Play Possible for All
          </motion.h2>

          {/* Description */}
          <motion.p
            className="font-['Nunito',sans-serif] font-medium text-white text-base md:text-lg leading-relaxed max-w-full"
            variants={fadeInUpVariants}
          >
            As a nonprofit, we make joy accessible to every child. Your support
            helps us serve 100,000+ families and keep admission affordable.
          </motion.p>

          {/* Impact Statistics */}
          <motion.p
            className="font-['Nunito',sans-serif] font-bold text-[#ffd69a] text-sm md:text-[15px] leading-relaxed"
            variants={fadeInUpVariants}
          >
            2024 Impact: 1,200 free passes | 15,000 field trips
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 md:gap-[12px] w-full sm:w-auto"
            variants={fadeInUpVariants}
          >
            <motion.button
              className="bg-[#f7941e] rounded-full shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] px-6 py-4 md:px-[34px] md:py-[22px] hover:bg-[#e8850d] transition-colors w-full sm:w-auto"
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <p className="font-['Nunito',sans-serif] font-bold text-white text-lg md:text-[24px] whitespace-nowrap">
                Buy Tickets
              </p>
            </motion.button>
            <motion.button
              className="bg-[#00adbb] rounded-full shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] px-6 py-4 md:px-[34px] md:py-[22px] hover:bg-[#009aa7] transition-colors w-full sm:w-auto"
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <p className="font-['Nunito',sans-serif] font-bold text-white text-lg md:text-[24px] whitespace-nowrap">
                Memberships
              </p>
            </motion.button>
          </motion.div>

          {/* Up Arrow - Desktop Only */}
          <motion.div
            className="hidden lg:flex absolute left-0 bottom-[-80px] w-12 h-16 items-center justify-center rotate-180"
            variants={arrowVariants}
            initial="hidden"
            whileInView="visible"
            animate="pulse"
            viewport={{ once: true }}
          >
            <svg
              className="block w-full h-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 49.5 65.5"
            >
              <path
                d={svgPaths.p39a6b100}
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </motion.div>

          {/* Decorative Orange Dot - Desktop Only */}
          <motion.div
            className="hidden lg:block absolute left-[15px] bottom-[-120px] w-[18px] h-[18px]"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
          >
            <svg
              className="block w-full h-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 18 18"
            >
              <circle cx="9" cy="9" fill="#FBB040" fillOpacity="0.7" r="9" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full h-[60px] md:h-[80px] lg:h-[105px] z-10 scale-y-[-1]">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 105"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d={waveSvgPaths.p2e48b5f0}
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}