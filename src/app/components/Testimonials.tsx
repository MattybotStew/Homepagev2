import { motion } from "motion/react";
import imgWaveNavy from "figma:asset/impact-wave-top.svg";
import svgPaths from "../../imports/svg-zu4i9dl6yt";

interface Testimonial {
  text: string;
  name: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Our kids had the most amazing time! The hands-on exhibits kept them engaged for hours. We especially loved the water play area and the climbing structure. Can't wait to come back!",
    name: "Emily C.",
    location: "Atlanta, GA",
  },
  {
    text: "This museum is a gem! My toddler and preschooler both found activities perfect for their ages. The staff was incredibly friendly and helpful. Highly recommend for families!",
    name: "Michael T.",
    location: "Marietta, GA",
  },
  {
    text: "We've been members for three years and never get tired of visiting. The rotating exhibits keep things fresh, and the educational programs are top-notch. Worth every penny!",
    name: "Sarah L.",
    location: "Decatur, GA",
  },
  {
    text: "The perfect rainy day activity! Clean, safe, and so much fun. My daughter loved the art studio and science experiments. We spent the whole afternoon here and didn't want to leave.",
    name: "James W.",
    location: "Sandy Springs, GA",
  },
  // Page 2
  {
    text: "Amazing birthday party experience! The staff took care of everything and the kids had a blast. The party room was perfect and clean. Will definitely book again next year!",
    name: "Rachel M.",
    location: "Buckhead, GA",
  },
  {
    text: "We visit every month and our kids never get bored! The exhibits are always well-maintained and the educational programs are fantastic. Great value for the membership price!",
    name: "David K.",
    location: "Roswell, GA",
  },
  {
    text: "Such a wonderful place for learning through play! My twins spent hours exploring and trying new things. The museum makes learning fun and interactive. Highly recommend!",
    name: "Jennifer P.",
    location: "Dunwoody, GA",
  },
  {
    text: "Best children's museum we've visited! Clean facilities, friendly staff, and so many activities. Our daughter asks to come back every weekend. Absolutely love this place!",
    name: "Thomas R.",
    location: "Alpharetta, GA",
  },
  // Page 3
  {
    text: "Incredible experience from start to finish! The exhibits are thoughtfully designed and age-appropriate. My kids learned so much while having fun. Can't recommend enough!",
    name: "Lisa H.",
    location: "Midtown, GA",
  },
  {
    text: "We drove an hour to get here and it was worth every minute! The interactive displays are amazing and the staff truly cares about the children's experience. Will visit again soon!",
    name: "Kevin B.",
    location: "Duluth, GA",
  },
  {
    text: "Perfect place for curious minds! My son loves the science exhibits and my daughter enjoys the creative art stations. There's something for every child here. Fantastic museum!",
    name: "Amanda S.",
    location: "Johns Creek, GA",
  },
  {
    text: "Five stars all around! The museum exceeded our expectations. Clean, safe, educational, and most importantly - fun! Our kids talk about it for days after every visit.",
    name: "Brian D.",
    location: "Smyrna, GA",
  },
];


function StarIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <path d={svgPaths.p3d1be700} fill="#F7941E" />
      </svg>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="cma-testimonial-card">
      {/* Star Rating */}
      <div className="flex items-center gap-1">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>

      {/* Testimonial Text */}
      <p className="cma-testimonial-quote">
        "{testimonial.text}"
      </p>

      {/* Author Info */}
      <div className="flex flex-col gap-[8px] mt-auto">
        <p className="cma-testimonial-name">
          {testimonial.name}
        </p>
        <p className="cma-testimonial-location">
          {testimonial.location}
        </p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className="bg-white relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <motion.div
          className="mb-10 md:mb-14 lg:mb-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-cma-navy">
            What Families Are Saying
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-[10px]">
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
      <div aria-hidden className="absolute bottom-0 left-0 flex overflow-hidden h-[13px] w-full">
        {Array.from({ length: 10 }).map((_, i) => (
          <img key={i} src={imgWaveNavy} alt="" className="w-[422px] h-[57px] shrink-0 block" />
        ))}
      </div>
    </div>
  );
}