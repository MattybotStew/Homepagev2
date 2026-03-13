import { motion } from "motion/react";
import svgPaths from "../../imports/svg-0zn5cqfzv6";
import imgHero from "figma:asset/5e9e706a4edd098b94b55ffc8289a25c57fcd860.png";
import MuseumHoursWidget from "./MuseumHoursWidget";

export default function Hero() {
  // Animation variants for text entrance
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

  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
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

  const widgetVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3,
      },
    },
  };

  return (
    <div className="relative w-full overflow-hidden" style={{ height: '90vh', marginTop: '34px', minHeight: '500px' }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          alt=""
          className="absolute h-full w-full object-cover object-center md:object-[center_top]"
          src={imgHero}
        />
      </div>

      {/* Content Container */}
      <div className="relative px-5 py-12 md:px-12 md:py-20 lg:px-[60px] lg:py-24 flex flex-col items-start justify-center h-full" style={{ position: 'relative' }}>
        <motion.div
          className="flex flex-col gap-8 md:gap-10 lg:gap-[50px] items-start justify-start max-w-full lg:max-w-[700px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading with Inline Animated Waves */}
          <div className="relative w-full">
            <h1 className="font-['Nunito',sans-serif] font-black text-white text-left leading-[1.1]"
                style={{ fontSize: 'clamp(56px, 7vw, 96px)' }}>
              {/* Line 1: "Experience" */}
              <motion.span
                variants={lineVariants}
                className="block"
              >
                Experience
              </motion.span>
              
              {/* Line 2: "Possibility" + Orange Wave */}
              <motion.span
                variants={lineVariants}
                className="block relative inline-flex items-center flex-wrap"
              >
                Possibility
                {/* Orange Wave - Inline */}
                <motion.span
                  className="inline-block ml-4 relative"
                  style={{ width: 'clamp(120px, 15vw, 200px)', height: 'clamp(12px, 1.5vw, 20px)' }}
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <svg
                    className="block w-full h-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 200 20"
                  >
                    <path
                      d="M0 10 Q 25 2, 50 10 T 100 10 T 150 10 T 200 10"
                      stroke="#F7941E"
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </motion.span>
              </motion.span>
              
              {/* Line 3: "Through Play" + Teal Wave */}
              <motion.span
                variants={lineVariants}
                className="block relative inline-flex items-center flex-wrap"
              >
                Through Play
                {/* Teal Wave - Inline */}
                <motion.span
                  className="inline-block ml-4 relative"
                  style={{ width: 'clamp(120px, 15vw, 200px)', height: 'clamp(12px, 1.5vw, 20px)' }}
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <svg
                    className="block w-full h-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 200 20"
                  >
                    <path
                      d="M0 10 Q 25 2, 50 10 T 100 10 T 150 10 T 200 10"
                      stroke="#00ADBD"
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </motion.span>
              </motion.span>
            </h1>
          </div>

          {/* Subtitle */}
          <motion.p
            className="font-['Nunito',sans-serif] font-normal text-white text-[18px] max-w-full lg:max-w-[600px] leading-relaxed"
            variants={fadeInUpVariants}
          >
            Welcome to a world of hands-on exploration & discovery that sparks
            imagination & inspires learning.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 md:gap-[16px] w-full sm:w-auto"
            variants={fadeInUpVariants}
          >
            <motion.button
              className="bg-[#f7941e] rounded-full shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] px-8 py-4 md:px-[40px] md:py-[24px] hover:bg-[#e8850d] transition-colors w-full sm:w-auto"
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <p className="font-['Nunito',sans-serif] font-bold text-white text-lg md:text-[20px] whitespace-nowrap">
                Buy Tickets
              </p>
            </motion.button>
            <motion.button
              className="bg-[#00adbb] rounded-full shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] px-8 py-4 md:px-[40px] md:py-[24px] hover:bg-[#009aa7] transition-colors w-full sm:w-auto"
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <p className="font-['Nunito',sans-serif] font-bold text-white text-lg md:text-[20px] whitespace-nowrap">
                Memberships
              </p>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Opening Times Today Widget - Top Right with Slide Down Animation */}
      <motion.div 
        className="hidden md:block absolute right-5 md:right-8 lg:right-[30px] top-5 md:top-8 lg:top-[30px] w-full max-w-[280px] md:max-w-[320px] lg:max-w-[397px] z-10"
        variants={widgetVariants}
        initial="hidden"
        animate="visible"
      >
        <MuseumHoursWidget />
      </motion.div>
    </div>
  );
}