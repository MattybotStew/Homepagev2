import { motion } from "motion/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import imgCustomImg001CopyrightJpg from "figma:asset/c175e874c4aacf4ffa7f1e2ab0fc3be96ac8d0aa.png";
import imgCustomImg002CopyrightJpg from "figma:asset/797b45911a1d0a1f965f58bc294a8d4a73f9d367.png";
import imgCustomImg003CopyrightJpg from "figma:asset/d83f9a80814ccc977216de3c0728e23db20372e5.png";
import imgCustomImg004CopyrightJpg from "figma:asset/95c906e032d463c9a1af96c555cb8b8b38c3355e.png";
import imgCustomImg005CopyrightJpg from "figma:asset/b125d7cd6a5d7d4c157e4fe139575f17a032648f.png";
import imgCustomImg006CopyrightJpg from "figma:asset/d1164ccabdda53ce7212976c9699db7b05f6c336.png";

export default function InstagramSection() {
  const images = [
    { src: imgCustomImg001CopyrightJpg, overlay: null },
    { 
      src: imgCustomImg002CopyrightJpg, 
      overlay: {
        type: "card",
        title: "Celebrate Holi",
        date: "March 15"
      }
    },
    { src: imgCustomImg003CopyrightJpg, overlay: null },
    { 
      src: imgCustomImg004CopyrightJpg, 
      overlay: {
        type: "bubble",
        text: "Special Guest"
      }
    },
    { src: imgCustomImg005CopyrightJpg, overlay: null },
    { src: imgCustomImg006CopyrightJpg, overlay: null },
  ];

  return (
    <section className="relative w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-5 md:px-12 lg:px-[60px]">
        {/* Heading */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-['Nunito',sans-serif] text-[#1b3d6d] mb-4">
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

        {/* Masonry Grid */}
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2, 768: 3 }}>
          <Masonry gutter="12px">
            {images.map((item, index) => (
              <motion.a
                key={index}
                href="https://www.instagram.com/childrensmuseumofatlanta/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block overflow-hidden rounded-[16px] group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ display: 'block' }}
              >
                <div className="relative overflow-hidden rounded-[16px] transition-transform duration-200 group-hover:scale-[1.04]">
                  <img
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-auto object-cover"
                    src={item.src}
                  />
                  
                  {/* Overlay Cards/Bubbles */}
                  {item.overlay && item.overlay.type === "card" && (
                    <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl shadow-lg p-4">
                      <p className="font-['Nunito',sans-serif] font-bold text-[#1b3d6d] text-lg">
                        {item.overlay.title}
                      </p>
                      <p className="font-['Nunito',sans-serif] text-[#78787a] text-sm mt-1">
                        {item.overlay.date}
                      </p>
                    </div>
                  )}
                  
                  {item.overlay && item.overlay.type === "bubble" && (
                    <div className="absolute top-4 right-4 bg-[#F7941E] rounded-full shadow-lg px-5 py-3">
                      <p className="font-['Nunito',sans-serif] font-bold text-white text-sm whitespace-nowrap">
                        {item.overlay.text}
                      </p>
                    </div>
                  )}
                </div>
              </motion.a>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
}