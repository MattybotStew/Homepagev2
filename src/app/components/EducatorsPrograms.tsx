import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import img0 from "../../assets/educators-img-0.webp";
import img1 from "../../assets/educators-img-1.webp";
import img2 from "../../assets/educators-img-2.webp";
import img3 from "../../assets/educators-img-3.webp";
import imgWaveTop from "../../assets/impact-wave-top.svg";

const programs = [
	{
		image: img0,
		title: "Field Trips",
		body: "Bring your class to CMA for a hands-on learning adventure. Our field trips align with Georgia standards and spark curiosity through play-based exploration.",
		href: "#/program/field-trips",
	},
	{
		image: img1,
		title: "Museum On-the-Go",
		body: "Can't make it to the Museum? We bring the fun to you. Our educators visit schools with hands-on activities and portable exhibits designed for your students.",
		href: "#/program/museum-on-the-go",
	},
	{
		image: img2,
		title: "Scout Workshops",
		body: "Help scouts earn badges through engaging, museum-based workshops aligned with Cub Scout, Boy Scout, and Girl Scout requirements.",
		href: "#/program/scout-workshops",
	},
	{
		image: img3,
		title: "Educator Professional Development",
		body: "Invest in your teaching practice with PD workshops designed for educators. Leave with new strategies for bringing play-based learning into your classroom.",
		href: "#/program/educator-professional-development",
	},
];

export default function EducatorsPrograms() {
	return (
		<section
			id="programs"
			className="bg-cma-teal-pale w-full py-[80px] md:py-[120px] relative"
		>
			<div className="cma-section-container flex flex-col gap-[48px]">
				<motion.div
					className="flex flex-col gap-[16px] items-center text-center"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
				>
					<h2 className="text-cma-navy">Our Education Programs</h2>
					<p className="text-cma-navy max-w-[560px]">
						Discover the range of programs we offer for schools, scouts, and
						lifelong learners.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[16px]">
					{programs.map((program, i) => (
						<motion.div
							key={program.title}
							className="bg-white border-2 border-black/5 rounded-[24px] p-[24px] flex flex-col gap-[24px]"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-40px" }}
							transition={{
								delay: i * 0.06,
								duration: 0.5,
								ease: [0.16, 1, 0.3, 1],
							}}
						>
							<div className="relative rounded-[16px] overflow-hidden h-[160px] shrink-0">
								<img
									src={program.image}
									alt={program.title}
									className="absolute inset-0 w-full h-full object-cover"
								/>
							</div>
							<p className="font-extrabold text-[22px] text-cma-navy leading-[1.2] tracking-[-0.5px]">
								{program.title}
							</p>
							<p className="text-cma-navy flex-1">{program.body}</p>
							<a href={program.href} className="cma-text-link mt-auto">
								Learn More{" "}
								<FontAwesomeIcon icon={faArrowRight} className="text-[13px]" />
							</a>
						</motion.div>
					))}
				</div>
			</div>

			<div
				aria-hidden
				className="absolute bottom-0 left-0 flex overflow-hidden h-[13px] w-full"
			>
				{Array.from({ length: 10 }).map((_, i) => (
					<img
						key={`item-${i}`}
						src={imgWaveTop}
						alt=""
						className="w-[422px] h-[57px] shrink-0 block"
					/>
				))}
			</div>
		</section>
	);
}
