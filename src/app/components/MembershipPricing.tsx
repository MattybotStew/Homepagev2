import svgPaths from "../../imports/svg-jimhgnmmnu";
import { motion } from "motion/react";

export default function MembershipPricing() {
  return (
    <div className="bg-white relative w-full pb-16 md:pb-24 lg:pb-32" style={{ position: 'relative' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12" style={{ position: 'relative' }}>
        {/* Heading */}
        <motion.div 
          className="flex flex-col gap-6 md:gap-10 items-center mb-10 md:mb-14 lg:mb-[70px]" 
          style={{ position: 'relative' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-['Nunito',sans-serif] font-black text-[#1b3d6d] text-[36px] md:text-[52px] lg:text-[70px] leading-none text-center">
            Visit More, Pay Less
          </h2>
          <p className="font-['Nunito',sans-serif] font-normal text-[#1b3d6d] text-[17px] md:text-[19px] leading-[24px] text-center max-w-[601px]">
            Family membership pays for itself in just 3 visits
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[30px]" style={{ position: 'relative' }}>
          {/* Single Visit Card */}
          <motion.div 
            className="bg-[#FDF6EE] rounded-[24px] p-6 md:p-10 flex flex-col transition-all duration-200 ease-out hover:translate-y-[-6px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]" 
            style={{ position: 'relative' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          >
            {/* Card Content */}
            <div className="flex flex-col gap-6 md:gap-6">
              {/* Price */}
              <div className="flex flex-col gap-2">
                <div className="font-['Nunito',sans-serif]">
                  <span className="font-black text-[#F7941E] text-[48px] md:text-[56px] leading-[1]">$17.95</span>
                  <span className="font-black text-[#F7941E] text-[24px] md:text-[28px] leading-[1]">/person</span>
                </div>
                <p className="font-['Nunito',sans-serif] font-semibold text-[#1b3d6d]/70 text-[14px] md:text-[15px] leading-[1.4]">
                  Family of 4: $71.80
                </p>
              </div>

              {/* Description */}
              <p className="font-['Nunito',sans-serif] font-normal text-[#1b3d6d] text-[16px] md:text-[17px] leading-[1.6]">
                Perfect for trying us out or one-time visits.
              </p>

              {/* CTA Button */}
              <button className="bg-[#F7941E] text-white font-['Nunito',sans-serif] font-bold text-[18px] md:text-[20px] leading-[1.2] px-8 py-4 rounded-full hover:bg-[#e6840d] transition-colors min-h-[44px] w-full mt-4">
                Buy Tickets Now
              </button>
            </div>
          </motion.div>

          {/* Membership Card */}
          <motion.div 
            className="bg-[#00ADBD] rounded-[24px] p-6 md:p-10 md:pt-12 md:pb-12 flex flex-col relative transition-all duration-200 ease-out hover:translate-y-[-6px] hover:shadow-[0_8px_24px_rgba(0,173,189,0.3)]" 
            style={{ position: 'relative' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          >
            {/* Best Value Badge - Top Right */}
            <div className="absolute -top-2 -right-2 md:top-4 md:right-4 bg-[#F7941E] rounded-full px-5 py-2 transform rotate-[-2deg]">
              <span className="font-['Nunito',sans-serif] font-extrabold text-white text-[13px] md:text-[14px] leading-[1] uppercase tracking-wide">
                Best Value
              </span>
            </div>

            {/* Card Content */}
            <div className="flex flex-col gap-6 md:gap-6">
              {/* Price */}
              <div className="flex flex-col gap-2">
                <div className="font-['Nunito',sans-serif]">
                  <span className="font-black text-white text-[48px] md:text-[60px] leading-[1]">$149</span>
                  <span className="font-black text-white text-[24px] md:text-[30px] leading-[1]">/year</span>
                </div>
                <p className="font-['Nunito',sans-serif] font-semibold text-white/85 text-[14px] md:text-[15px] leading-[1.4]">
                  Family of 4 covered · Pays for itself in 3 visits
                </p>
              </div>

              {/* Description */}
              <p className="font-['Nunito',sans-serif] font-normal text-white text-[16px] md:text-[17px] leading-[1.6]">
                Unlimited visits + exclusive perks all year long.
              </p>

              {/* CTA Button */}
              <button className="bg-white text-[#00ADBD] font-['Nunito',sans-serif] font-bold text-[18px] md:text-[20px] leading-[1.2] px-8 py-4 rounded-full hover:bg-gray-50 transition-colors min-h-[44px] w-full mt-4">
                Become a Member
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}