import React, { useRef } from "react"
import { motion, useInView } from "motion/react"
import imgPhoto from "figma:asset/impact-photo.webp"

import imgWaveTop from "figma:asset/impact-wave-top.svg"
import imgWaveBottom from "figma:asset/wave-white.svg"

export default function ImpactSection() {
  const scriptRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(scriptRef, { once: true, margin: "-50px" })

  return (
    <section
      aria-label="Making an Impact Together"
      className="relative w-full overflow-hidden pt-[60px] md:pt-[120px] pb-[140px] md:pb-[220px] lg:pb-[340px] bg-cma-navy"
    >
      {/* Top navy wave */}
      <div aria-hidden className="absolute top-0 left-0 flex overflow-hidden h-[13px] w-full">
        {Array.from({ length: 10 }).map((_, i) => (
          <img key={i} src={imgWaveTop} alt="" className="w-[422px] h-[57px] shrink-0 block" />
        ))}
      </div>

      {/* Decorative script — sits in the lower navy space below the content */}
      <div
        ref={scriptRef}
        className="absolute pointer-events-none right-0 bottom-[13px] w-4/5 max-w-[1083px]"
        aria-hidden
      >
        <svg width="1083" height="452" viewBox="0 0 1083 452" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
          <defs>
            <clipPath id="impact-script-reveal">
              <motion.rect
                x="0"
                y="-10"
                height="480"
                initial={{ width: 0 }}
                animate={{ width: isInView ? 1200 : 0 }}
                transition={{ duration: 2.8, ease: [0.2, 0, 0.5, 1], delay: 0.3 }}
              />
            </clipPath>
          </defs>
          <g clipPath="url(#impact-script-reveal)">
            <path d="M176.403 31.2449C79.1075 52.1968 16.9942 147.565 37.4564 244.581C57.4466 337.285 135.661 406.147 230.456 414.502L217.32 352.872C156.489 339.995 108.968 292.715 95.9453 232.115C82.2738 167.465 123.676 103.896 188.527 89.9665C237.166 79.707 284.916 110.551 295.343 158.963C302.927 194.548 280.119 229.566 244.4 237.179C219.138 242.563 194.311 226.527 188.947 201.36C187.162 193.232 188.718 184.725 193.268 177.739C197.818 170.753 204.983 165.87 213.163 164.179L200.664 105.537C151.176 116.085 119.576 164.603 130.084 213.906C142.351 271.46 199.128 308.134 256.899 295.821C325.062 281.185 368.58 214.368 354.206 146.417C336.876 65.6179 257.177 14.1365 176.028 31.3247" fill="var(--cma-blue-mid)"/>
            <path d="M849.276 355.831C778.595 355.262 805.748 209.937 760.784 209.564C715.82 209.19 682.678 354.019 637.709 353.725C592.74 353.431 593.937 208.141 548.913 207.858C503.888 207.575 470.601 352.776 425.577 352.42C380.552 352.063 407.765 206.722 337.042 206.152" stroke="var(--cma-blue-mid)" strokeWidth="67.8287" strokeLinecap="round" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M947.472 159.163C974.172 149.373 1003.37 150.632 1032.4 165.724C1151.27 227.526 1179.91 352.991 1183.94 391.505C1184.34 395.304 1184.09 399.023 1183.29 402.552C1181.78 416.506 1171.64 428.613 1157.2 431.947C1150.34 433.53 1102.66 446.584 1052.71 450.396C1027.77 452.299 999.836 452.148 974.606 446.079C949.486 440.037 922.173 426.825 906.903 398.769C895.579 377.965 893.45 355.594 902.6 334.853C910.881 316.081 926.37 303.389 940.322 294.986C968.233 278.178 1004.72 269.773 1028.78 266.631C1047.35 264.205 1064.37 277.295 1066.8 295.868C1069.23 314.441 1056.14 331.463 1037.56 333.889C1017.66 336.488 991.736 343.202 975.315 353.092C967.7 357.677 965.289 361.065 964.752 362.045C964.838 362.549 965.173 363.944 966.478 366.342C968.916 370.821 974.972 376.403 990.468 380.131C1005.85 383.832 1025.78 384.424 1047.54 382.764C1071.16 380.961 1094.07 376.795 1111.66 373.002C1101.08 331.436 1071.79 262.649 1001.11 225.905C988.61 219.408 979.229 219.764 970.822 222.847C961.022 226.44 949.833 234.894 938.102 249.105C914.504 277.694 896.48 320.074 887.502 350.984C882.278 368.971 863.462 379.318 845.475 374.094C827.488 368.87 817.141 350.052 822.365 332.065C832.72 296.414 854.077 244.349 885.791 205.928C901.716 186.635 922.165 168.442 947.472 159.163Z" fill="var(--cma-blue-mid)"/>
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative cma-section-container">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[48px] items-start">

          {/* Left: text */}
          <div className="flex-1 flex flex-col gap-6 md:gap-[40px]">
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="leading-none text-white">Making an Impact Together</h2>
            </motion.div>

            <motion.div
              className="flex flex-col gap-[24px]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              <p className="font-medium text-[clamp(15px,2vw,18px)] text-cma-blue-light leading-[1.7]">
                Every child deserves the chance to discover, imagine, and grow through the power of play. Too many children in Atlanta face barriers that limit their access to enriching early learning experiences that are critical to their development. Your gift sparks curiosity and builds school-ready kids across our community, reaching over 180,000 guests annually with interactive exhibits, educator training, and access programs.
              </p>
              <p className="font-semibold text-[clamp(18px,2.5vw,24px)] text-white leading-[1.1]">
                2024 Impact: 1,200 free passes | 15,000 field trips
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-[16px]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              <a
                href="#donate"
                className="cma-btn border-2 border-cma-teal-dark bg-white text-cma-teal-dark hover:bg-cma-teal-dark hover:text-white w-full sm:w-auto font-black"
              >
                Donate
              </a>
              <a
                href="#membership"
                className="cma-btn border-2 border-white bg-white text-cma-navy hover:bg-transparent hover:text-white w-full sm:w-auto font-black"
              >
                Memberships
              </a>
              <a
                href="#tickets"
                className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark w-full sm:w-auto font-black"
              >
                Buy Tickets
              </a>
            </motion.div>
          </div>

          {/* Right: photo */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <img
              src={imgPhoto}
              alt="Child playing at the Children's Museum of Atlanta"
              className="w-full object-cover rounded-[30px] h-[clamp(220px,55vw,470px)]"
            />
          </motion.div>

        </div>
      </div>

      {/* Bottom cream wave */}
      <div aria-hidden className="absolute bottom-0 left-0 flex overflow-hidden h-[13px] w-full">
        {Array.from({ length: 10 }).map((_, i) => (
          <img key={i} src={imgWaveBottom} alt="" className="w-[422px] h-[57px] shrink-0 block" />
        ))}
      </div>
    </section>
  )
}
