import { AnimatePresence, motion } from "motion/react";
import MuseumHoursWidget from "../../app/components/MuseumHoursWidget";
import imgWaveOrange from "../../assets/hero-wave-orange.svg?url";
import imgWaveTeal from "../../assets/hero-wave-teal.svg?url";

export type Cta = {
  label: string;
  href: string;
  variant: "orange" | "teal-outline";
};

export const widgetConfig = {
  name: 'HeroWidget',
  label: 'Hero Section',
  category: 'Hero',
  editableProps: ['eyebrow', 'heading', 'subtitle', 'ctas', 'bgImage', 'showHoursWidget', 'showWaves'],
  defaultProps: {
    eyebrow: "children's museum of atlanta",
    heading: "Where Families Come to Play",
    subtitle: "Welcome to a safe, joyful place where children and caregivers have fun, explore, connect and grow through play.",
    bgImage: "/hero-bg.webp",
    showHoursWidget: true,
    showWaves: true,
    ctas: [
      { label: "Buy Tickets Now", href: "#/book-your-visit", variant: "orange" as const },
      { label: "Memberships", href: "#/memberships/information", variant: "teal-outline" as const },
    ]
  }
};

type HeroWidgetProps = {
  bgImage?: string;
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
  ctas?: Cta[];
  showHoursWidget?: boolean;
  showWaves?: boolean;
};

export default function HeroWidget({
  bgImage = widgetConfig.defaultProps.bgImage,
  eyebrow = widgetConfig.defaultProps.eyebrow,
  heading = widgetConfig.defaultProps.heading,
  subtitle = widgetConfig.defaultProps.subtitle,
  ctas = widgetConfig.defaultProps.ctas as Cta[],
  showHoursWidget = widgetConfig.defaultProps.showHoursWidget,
  showWaves = widgetConfig.defaultProps.showWaves,
}: HeroWidgetProps) {
  return (
    <section
      aria-label="Hero"
      className="relative w-full flex flex-col px-5 sm:px-10 md:px-[80px] min-h-[70svh] md:min-h-0"
    >
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none bg-black"
        aria-hidden
      >
        <AnimatePresence mode="sync">
          <motion.img
            key={bgImage}
            src={bgImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-[75%_50%] md:object-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-cma-hero-overlay" />
      </div>

      {/* Spacer = combined height of fixed AlertBanner + Header at each breakpoint */}
      <div className="shrink-0 h-0 lg:h-[120px] xl:h-[126px]" />

      <div className="relative flex-1 flex items-center py-[40px] md:py-[120px] lg:py-[200px]">
        <div className="w-full max-w-[1280px]">
          <div className="flex flex-col max-w-[640px]">
            <motion.div
              className="flex flex-col gap-4 md:gap-6 text-white"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.0,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.15,
              }}
            >
              <p className="cma-eyebrow opacity-80">{eyebrow}</p>
              <h1 className="font-extrabold text-white">{heading}</h1>
            </motion.div>

            {/* Orange wave - positioned after heading */}
            {showWaves && (
              <div className="h-8 md:h-[40px] lg:h-[50px] flex items-center justify-end shrink-0">
                <img
                  src={imgWaveOrange}
                  alt=""
                  aria-hidden
                  className="w-[249px] h-[15px] block cma-wave-float"
                />
              </div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.0,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.4,
              }}
            >
              <p className="font-semibold text-[clamp(16px,2.1vw,30px)] text-cma-blue-light leading-[1.3] tracking-[-1px] [text-box-trim:trim-both] [text-box-edge:cap_alphabetic]">
                {subtitle}
              </p>
            </motion.div>

            {/* Teal wave - positioned after subtitle */}
            {showWaves && (
              <div className="h-8 md:h-[40px] lg:h-[50px] flex items-center justify-start shrink-0">
                <img
                  src={imgWaveTeal}
                  alt=""
                  aria-hidden
                  className="w-[257px] h-[16px] block cma-wave-float-reverse"
                />
              </div>
            )}

            <motion.div
              className="flex flex-col sm:flex-row gap-3 mt-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.0,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.65,
              }}
            >
              {ctas.map((cta) => (
                <a
                  key={cta.href}
                  href={cta.href}
                  className={
                    cta.variant === "orange"
                      ? "cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
                      : "cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:border-cma-teal-dark hover:text-white hover:drop-shadow-[0px_3px_4px_rgba(0,0,0,0.12)] font-black"
                  }
                >
                  {cta.label}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {showHoursWidget && (
        <div className="hidden md:block absolute right-5 w-[360px] md:top-[20px] lg:top-[136px] xl:top-[142px] z-10">
          <MuseumHoursWidget />
        </div>
      )}
    </section>
  );
}