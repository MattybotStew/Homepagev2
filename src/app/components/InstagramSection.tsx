import { motion } from "motion/react";
import { Instagram } from "lucide-react";
import imgCustomImg001CopyrightJpg from "figma:asset/c175e874c4aacf4ffa7f1e2ab0fc3be96ac8d0aa.png";
import imgCustomImg002CopyrightJpg from "figma:asset/797b45911a1d0a1f965f58bc294a8d4a73f9d367.png";
import imgCustomImg003CopyrightJpg from "figma:asset/d83f9a80814ccc977216de3c0728e23db20372e5.png";
import imgCustomImg004CopyrightJpg from "figma:asset/95c906e032d463c9a1af96c555cb8b8b38c3355e.png";
import imgCustomImg005CopyrightJpg from "figma:asset/b125d7cd6a5d7d4c157e4fe139575f17a032648f.png";
import imgCustomImg006CopyrightJpg from "figma:asset/d1164ccabdda53ce7212976c9699db7b05f6c336.png";
import svgPaths from "../../imports/svg-k2j87ddur7";

export default function InstagramSection() {
  const images = [
    imgCustomImg001CopyrightJpg,
    imgCustomImg002CopyrightJpg,
    imgCustomImg003CopyrightJpg,
    imgCustomImg004CopyrightJpg,
    imgCustomImg005CopyrightJpg,
    imgCustomImg006CopyrightJpg,
  ];

  return (
    <section className="relative w-full bg-white py-16 md:py-20 lg:py-24 pb-0 overflow-hidden">
      <div className="container mx-auto px-5 md:px-12 lg:px-[60px] pb-0">
        {/* Heading */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Nunito',sans-serif] font-bold text-[#1b3d6d] text-[32px] md:text-[48px] lg:text-[56px] mb-4">
            Follow the Fun
          </h2>
          <p className="font-['Nunito',sans-serif] text-[#78787a] text-base md:text-lg max-w-2xl mx-auto">
            See what's happening at the museum! Follow us{" "}
            <a
              href="https://www.instagram.com/childrensmuseumofatlanta/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00adbb] hover:text-[#009aa7] transition-colors font-bold"
            >
              @childrensmuseumofatlanta
            </a>
          </p>
        </motion.div>

        {/* Instagram Gallery - Desktop: Horizontal Scroll Layout */}
        <div className="relative hidden lg:block h-[240px] mb-0">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-[1440px] h-[240px]">
              {/* Images */}
              {images.map((img, index) => {
                const positions = [
                  "calc(50% - 600px)",
                  "calc(50% - 360px)",
                  "calc(50% - 120px)",
                  "calc(50% + 120px)",
                  "calc(50% + 360px)",
                  "calc(50% + 600px)",
                ];

                return (
                  <motion.a
                    key={index}
                    href="https://www.instagram.com/childrensmuseumofatlanta/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-0 -translate-x-1/2 size-[240px] rounded-lg overflow-hidden group cursor-pointer"
                    style={{ left: positions[index] }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                  >
                    <img
                      alt={`Instagram post ${index + 1}`}
                      className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-110"
                      src={img}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#00adbb] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </motion.a>
                );
              })}

              {/* Instagram Icon */}
              <motion.a
                href="https://www.instagram.com/childrensmuseumofatlanta/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-1/2 -translate-x-1/2 top-[76px] size-[80px] bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#00adbb] hover:scale-110 transition-all duration-300 group z-20"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
              >
                <svg
                  className="size-6 fill-[#1A0604] group-hover:fill-white transition-colors duration-300"
                  viewBox="0 0 24 24"
                >
                  <path d={svgPaths.p3bcd3c00} />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Instagram Gallery - Tablet: 3 Column Grid */}
        <div className="hidden md:grid lg:hidden grid-cols-3 gap-4 mb-0">
          {images.map((img, index) => (
            <motion.a
              key={index}
              href="https://www.instagram.com/childrensmuseumofatlanta/"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square rounded-lg overflow-hidden group cursor-pointer relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                alt={`Instagram post ${index + 1}`}
                className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-110"
                src={img}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#00adbb] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </motion.a>
          ))}
        </div>

        {/* Instagram Gallery - Mobile: 2 Column Grid */}
        <div className="grid md:hidden grid-cols-2 gap-3 mb-0">
          {images.map((img, index) => (
            <motion.a
              key={index}
              href="https://www.instagram.com/childrensmuseumofatlanta/"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square rounded-lg overflow-hidden group cursor-pointer relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                alt={`Instagram post ${index + 1}`}
                className="absolute inset-0 size-full object-cover"
                src={img}
              />
            </motion.a>
          ))}
        </div>

        {/* CTA Button - Tablet/Mobile */}
        <motion.div
          className="lg:hidden flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://www.instagram.com/childrensmuseumofatlanta/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00adbb] hover:bg-[#009aa7] text-white font-['Nunito',sans-serif] font-bold text-base md:text-lg px-6 py-3 md:px-8 md:py-4 rounded-full transition-colors shadow-md"
          >
            <Instagram className="size-5 md:size-6" />
            Follow Us on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}