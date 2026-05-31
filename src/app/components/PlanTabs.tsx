import {
	faFacebook,
	faInstagram,
	faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { useState } from "react";

const regularHours = [
	{ day: "Monday", hours: "10:00 AM – 3:30 PM" },
	{ day: "Tuesday", hours: "10:00 AM – 3:30 PM" },
	{ day: "Wednesday", hours: "Closed" },
	{ day: "Thursday", hours: "10:00 AM – 3:30 PM" },
	{ day: "Friday", hours: "10:00 AM – 3:30 PM" },
	{ day: "Saturday", hours: "9:30 AM – 4:30 PM" },
	{ day: "Sunday", hours: "9:30 AM – 4:30 PM" },
];

const holidayHours = [
	{ day: "New Year's Day", hours: "10:00 AM – 3:30 PM" },
	{ day: "Memorial Day", hours: "10:00 AM – 3:30 PM" },
	{ day: "July 4th", hours: "10:00 AM – 3:30 PM" },
	{ day: "Labor Day", hours: "10:00 AM – 3:30 PM" },
	{ day: "Thanksgiving", hours: "Closed" },
	{ day: "Christmas Eve", hours: "10:00 AM – 3:30 PM" },
	{ day: "Christmas Day", hours: "Closed" },
];

function HoursTable({ rows }: { rows: { day: string; hours: string }[] }) {
	return (
		<div className="flex flex-col">
			{rows.map(({ day, hours }) => (
				<div key={day} className="flex flex-col">
					<div className="flex items-center justify-between py-4 text-[12px] font-medium leading-[1.5]">
						<span className="text-cma-navy">{day}</span>
						<span
							className={
								hours === "Closed"
									? "text-cma-navy font-bold"
									: "text-[#6b7ea0]"
							}
						>
							{hours}
						</span>
					</div>
					<div className="h-px bg-cma-blue-light" />
				</div>
			))}
		</div>
	);
}

const navItems = [
	"Hours & Address",
	"Location, Parking & Directions",
	"What to Bring",
	"Food & Amenities",
	"Safety & Cleanliness",
	"Accessibility",
];

function TabContent({ item }: { item: string }) {
	if (item === "Hours & Address") {
		return (
			<div className="flex flex-col gap-12">
				<div className="flex flex-col xl:flex-row gap-8">
					{/* Hours columns */}
					<div className="flex flex-col sm:flex-row xl:flex-col gap-6 flex-1 min-w-0">
						<div className="flex-1 flex flex-col gap-4">
							<h4 className="text-cma-navy font-bold">Regular Hours</h4>
							<HoursTable rows={regularHours} />
						</div>
						<div className="flex-1 flex flex-col gap-4">
							<h4 className="text-cma-navy font-bold">Holiday Hours</h4>
							<HoursTable rows={holidayHours} />
						</div>
					</div>

					{/* Address sidebar */}
					<div className="w-full xl:w-[360px] shrink-0 flex flex-col gap-8">
						<h3 className="text-cma-navy">Address</h3>
						<a
							href="https://maps.google.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-cma-teal-dark leading-[1.65] hover:underline"
						>
							275 Centennial Olympic Park Dr NW
							<br />
							Atlanta, GA 30313
						</a>
						<a
							href="tel:4046595437"
							className="text-cma-teal-dark text-[20px] font-black leading-[1.1] hover:underline"
						>
							404-659-5437
						</a>
						<div className="flex gap-4 items-center">
							{[
								{
									icon: faFacebook,
									href: "https://www.facebook.com/childrensmuseumofatlanta",
								},
								{
									icon: faInstagram,
									href: "https://www.instagram.com/childrensmuseumofatlanta/",
								},
								{
									icon: faTiktok,
									href: "https://www.tiktok.com/@childrensmuseumatlanta",
								},
							].map(({ icon, href }) => (
								<a
									key={href}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									className="cma-social-btn-filled"
								>
									<FontAwesomeIcon
										icon={icon}
										className="text-[18px] text-white"
									/>
								</a>
							))}
						</div>
						<div className="rounded-[24px] overflow-hidden h-[200px]">
							<iframe
								title="Children's Museum of Atlanta map"
								src="https://maps.google.com/maps?q=275+Centennial+Olympic+Park+Dr+NW,+Atlanta,+GA+30313&output=embed"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							/>
						</div>
					</div>
				</div>

				{/* CTAs */}
				<div className="flex flex-col sm:flex-row gap-3">
					<a
						href="#/book-your-visit"
						className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
					>
						Buy Tickets
					</a>
					<a
						href="#parking"
						className="cma-btn bg-white border-2 border-cma-navy text-cma-navy hover:bg-cma-blue-light font-black"
					>
						Parking Guide
					</a>
				</div>

				{/* Quieter Experience callout */}
				<div className="bg-cma-teal-dark border-2 border-black/5 rounded-[24px] p-8 flex flex-col gap-6">
					<h2 className="text-white leading-none">
						Looking for a Quieter Experience?
					</h2>
					<p className="text-cma-blue-light">
						<span className="font-black text-white">Member-Only Hours: </span>
						Monday, Tuesday, Thursday, Friday, 9–10 a.m. Enjoy exclusive early
						access before general admission opens. It's quieter, less crowded,
						and perfect for young children.
					</p>
					<p className="text-cma-blue-light">
						<span className="font-black text-white">
							Avoid Field Trip Groups:{" "}
						</span>
						School groups visit Monday–Friday from 10 a.m. – 12:30 p.m. For a
						quieter experience, visit after 12:30 on weekdays.
					</p>
					<p className="text-cma-blue-light">
						<span className="font-black text-white">Pro-tip: </span>
						Escape weekday crowds during the school year and head to Building
						Blocks in the Art Studio from 10 a.m.–12 p.m. for fun facilitated
						activities for babies, toddlers, and pre-kindergarteners.
					</p>
				</div>
			</div>
		);
	}

	if (item === "Location, Parking & Directions") {
		return (
			<div className="flex flex-col gap-8">
				<div className="flex flex-col lg:flex-row gap-8">
					{/* Driving */}
					<div className="flex-1 flex flex-col gap-5">
						<h3 className="text-cma-navy">Driving Directions</h3>
						<div className="flex flex-col gap-4">
							<p className="text-cma-navy">
								<strong>SOUTHBOUND via I-75:</strong> Exit 249C Williams Street.
								Go straight off the exit onto Williams Street. Turn right onto
								Baker Street. The Museum is located on the corner of Baker
								Street and Centennial Olympic Park Drive.
							</p>
							<p className="text-cma-navy">
								<strong>NORTHBOUND via I-75/I-85:</strong> Exit 248C toward
								Andrew Young International Blvd. Keep left toward Piedmont Ave.
								Turn right on Piedmont Ave. Turn right on Baker Street. The
								Museum is located on the corner of Baker Street and Centennial
								Olympic Park Drive.
							</p>
							<p className="text-cma-navy">
								<strong>EASTBOUND or WESTBOUND via I-20:</strong> Exit I-75/85
								North. Exit Andrew Young International Blvd. Go through downtown
								towards Centennial Olympic Park. Turn right onto Williams
								Street. Go two blocks to Baker Street and turn left. The Museum
								is located on the corner of Baker Street and Centennial Olympic
								Park Drive.
							</p>
						</div>
						<div className="flex flex-col gap-3">
							<h4 className="text-cma-navy font-bold">Parking Options</h4>
							<p className="text-cma-navy">
								The recommended parking lot for the Museum can be found at 236
								Williams Street, one block from the Museum. For the best price,
								pre-purchase your parking in advance. $8 parking is available
								for Museum guests except during blackout windows. Parking at 236
								Williams Street is independently owned and not operated by
								Children's Museum of Atlanta.
							</p>
						</div>
						<div className="flex flex-col gap-3">
							<h4 className="text-cma-navy font-bold">
								Additional parking locations:
							</h4>
							<ul className="flex flex-col gap-1 pl-4 list-disc">
								{[
									"112 Baker Street",
									"Georgia Aquarium",
									"World of Coca-Cola",
									"Downtown public lots",
								].map((l) => (
									<li key={l} className="text-cma-navy">
										{l}
									</li>
								))}
							</ul>
						</div>
					</div>
					{/* Transit */}
					<div className="flex-1 flex flex-col gap-5">
						<h3 className="text-cma-navy">Public Transportation Directions</h3>
						<div className="flex flex-col gap-4">
							<p className="text-cma-navy">
								<strong>15-minute walk:</strong> The closest MARTA train station
								is Peachtree Center on the Red and Gold lines. Exit the station
								towards Ellis Street NE. Walk North on Peachtree Street three
								blocks before turning left on Baker Street NW. Continue walking
								on Baker Street past Ted Turner Drive NW and Williams Street NW.
								The Museum is on the right side on the corner of Baker Street
								and Centennial Olympic Drive NW.
							</p>
							<p className="text-cma-navy">
								<strong>18-minute walk:</strong> The closest MARTA train station
								on the Blue and Green lines is GWCC/CNN Center. Exit the station
								towards State Farm Arena and walk down Andrew Young
								International Boulevard towards Marietta Street NW (away from
								Mercedes-Benz Stadium). Cross Marietta Street and continue
								through Centennial Olympic Park to the corner of Centennial
								Olympic Park Drive NW and Baker Street NW. Cross both streets to
								arrive at the Museum.
							</p>
							<p className="text-cma-navy">
								<strong>5-minute walk:</strong> The closest bus stops are the
								411 and 413 stops, one block away on the corner of Baker Street
								and Williams Street.
							</p>
							<p className="text-cma-navy">
								<strong>8-minute walk:</strong> The closest streetcar stop is
								Centennial Olympic Park Drive &amp; Andrew Young International
								Boulevard.
							</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col sm:flex-row gap-3">
					<a
						href="https://maps.google.com/maps?q=275+Centennial+Olympic+Park+Dr+NW,+Atlanta,+GA+30313"
						target="_blank"
						rel="noopener noreferrer"
						className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
					>
						Get Directions
					</a>
					<a
						href="#/book-your-visit"
						className="cma-btn bg-white border-2 border-cma-navy text-cma-navy hover:bg-cma-blue-light font-black"
					>
						Buy Tickets
					</a>
				</div>
			</div>
		);
	}

	if (item === "What to Bring") {
		return (
			<div className="flex flex-col gap-6">
				<h3 className="text-cma-navy">What to Bring</h3>
				<p className="text-cma-navy font-semibold">
					Everything to bring for perfect play day.
				</p>
				<ul className="flex flex-col gap-3 pl-4 list-disc">
					<li className="text-cma-navy">
						<strong>Comfortable Clothes:</strong> Wear comfy play clothes and
						closed-toe shoes.
					</li>
					<li className="text-cma-navy">
						<strong>Change of Clothes:</strong> While we provide aprons and
						ponchos for paint, you may want a fresh change of clothes.
					</li>
					<li className="text-cma-navy">
						<strong>Water Bottle:</strong> Water bottles are allowed on the
						exhibit floor and can be refilled at our water fountains.
					</li>
					<li className="text-cma-navy">
						<strong>Membership Card and Tickets:</strong> Bring your digital
						membership card and/or tickets to show at check-in.
					</li>
				</ul>
				<div className="flex flex-col sm:flex-row gap-3">
					<a
						href="#/book-your-visit"
						className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
					>
						Buy Tickets
					</a>
					<a
						href="#/plan-your-visit"
						className="cma-btn bg-white border-2 border-cma-navy text-cma-navy hover:bg-cma-blue-light font-black"
					>
						Plan Your Visit
					</a>
				</div>
			</div>
		);
	}

	if (item === "Food & Amenities") {
		return (
			<div className="flex flex-col gap-8">
				<div className="flex flex-col gap-4">
					<h3 className="text-cma-navy">Food</h3>
					<p className="text-cma-navy">
						You can buy snacks and beverages in the Museum store or bring your
						own from home. Snacks can be eaten in the Snack Stop (next to the
						Museum Store). Water bottles and soda bottles with caps are
						permitted on the exhibit floor. There is a water fountain by the
						front entrance restrooms.
					</p>
					<p className="text-cma-navy">
						The Museum is walking-distance from several restaurants, including
						Mellow Mushroom, Waffle House, the restaurants in Peachtree Center,
						Kwan's Deli and Korean Kitchen, Baja Fresh and Chick-fil-a.
					</p>
				</div>
				<div className="flex flex-col gap-4">
					<h3 className="text-cma-navy">Amenities</h3>
					<ul className="flex flex-col gap-3 pl-4 list-disc">
						<li className="text-cma-navy">
							<strong>Coat Racks:</strong> Available in the Museum for storing
							coats and jackets.
						</li>
						<li className="text-cma-navy">
							<strong>Lockers:</strong> Small lockers can be checked out at the
							front desk to store your items.
						</li>
						<li className="text-cma-navy">
							<strong>Stroller Parking:</strong> Limited stroller parking
							available. CMA is not responsible for lost or stolen items. The
							Museum is fully stroller-accessible. We recommend leaving
							strollers at home or in the car when possible.
						</li>
						<li className="text-cma-navy">
							<strong>Quiet Room:</strong> Located in Leaping into Learning.
							Available for families that need a quiet break or for parents who
							are nursing. Nursing is permitted anywhere in the Museum.
						</li>
					</ul>
				</div>
				<div className="flex flex-col sm:flex-row gap-3">
					<a
						href="#/book-your-visit"
						className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
					>
						Buy Tickets
					</a>
					<a
						href="#/museum-store"
						className="cma-btn bg-white border-2 border-cma-navy text-cma-navy hover:bg-cma-blue-light font-black"
					>
						Visit the Museum Store
					</a>
				</div>
			</div>
		);
	}

	if (item === "Safety & Cleanliness") {
		return (
			<div className="flex flex-col gap-6">
				<h3 className="text-cma-navy">Safety &amp; Cleanliness</h3>
				<p className="text-cma-navy">
					You are responsible for supervising your children at all times. You
					are your child's best advocate for staying safe while playing.
				</p>
				<p className="text-cma-navy">
					Security cameras record everyone entering and leaving public
					entrances, as well as moving about the Museum in public spaces.
				</p>
				<p className="text-cma-navy">
					Adults are not allowed to enter the Museum without a child. Any adult
					who needs to be united with their party will be asked to wait until
					someone in their party can come meet them at check-in.
				</p>
				<p className="text-cma-navy">
					Museum team members on the exhibit floor are in radio communication
					with one another. When children are separated from their grown-ups, we
					immediately activate our reunification procedure to quickly and
					efficiently reunite guests. Our Security desk is the best place to
					start if a child or grown-up has been separated from their party.
				</p>
				<p className="text-cma-navy">
					The Museum partners with a professional cleaning company to keep our
					facility clean and safe for families to play. Our team continually
					tidies, disinfects high-touch areas, and cleans spills and restrooms.
					In the evening, the Museum is cleaned using hospital-grade cleaning
					agents.
				</p>
				<p className="text-cma-navy">
					We also partner with a professional building performance company to
					monitor and regularly service our heating, ventilation, and air
					conditioning systems and keep our air clean.
				</p>
				<div className="flex flex-col sm:flex-row gap-3">
					<a
						href="#/book-your-visit"
						className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
					>
						Buy Tickets
					</a>
					<a
						href="#/plan-your-visit"
						className="cma-btn bg-white border-2 border-cma-navy text-cma-navy hover:bg-cma-blue-light font-black"
					>
						Plan Your Visit
					</a>
				</div>
			</div>
		);
	}

	if (item === "Accessibility") {
		return (
			<div className="flex flex-col gap-6">
				<h3 className="text-cma-navy">Accessibility</h3>
				<p className="text-cma-navy">
					<strong>ADA Compliance:</strong> If you need reasonable accommodations
					due to a disability, including communications in an alternate format,
					to participate in any program or meeting, please contact Natalia Vulay
					at 404-507-7222 seven (7) days in advance to facilitate your request.
					For TDD/TTY or Georgia Relay Service Access, dial 711.
				</p>
				<p className="text-cma-navy">
					<strong>Wheelchair Accessibility:</strong> The entire museum is
					wheelchair accessible. Elevators provide access to the Mezzanine. All
					bathrooms and water fountains are wheelchair accessible. The front
					entrance is wheelchair-accessible and marked with blue stickers that
					say "Automatic Doors." Red buttons, one outside and one inside, open
					the doors when pushed.
				</p>
				<p className="text-cma-navy">
					<strong>Sensory Packs:</strong> Available at the front desk and can be
					checked out for free at any time. Each pack includes headphones and
					several sensory toys.
				</p>
				<p className="text-cma-navy">
					<strong>Sensory Friendly Playtime:</strong> Offered on select Sunday
					mornings throughout the year, this experience provides limited
					admission and sound adjustments.
				</p>
				<p className="text-cma-navy">
					<strong>Service Animals:</strong> Restrained service animals are
					permitted in the Museum.
				</p>
				<p className="text-cma-navy">
					<strong>Web Accessibility:</strong> Our website uses the Recite Me web
					accessibility and language toolbar. You can open the Recite Me
					language and accessibility toolbar by clicking the accessibility icon.
					The toolbar offers text-to-speech, options for changing how the
					website looks, and translation to 134 languages.
				</p>
				<div className="flex flex-col sm:flex-row gap-3">
					<a
						href="#/book-your-visit"
						className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
					>
						Buy Tickets
					</a>
					<a
						href="tel:4046595437"
						className="cma-btn bg-white border-2 border-cma-navy text-cma-navy hover:bg-cma-blue-light font-black"
					>
						Contact Us
					</a>
				</div>
			</div>
		);
	}

	return null;
}

export default function PlanTabs() {
	const [active, setActive] = useState(navItems[0]);

	return (
		<section id="parking" className="bg-cma-cream w-full py-[80px] md:py-[120px]">
			<div className="cma-section-container flex flex-col gap-12 items-center">
				{/* Heading */}
				<motion.div
					className="flex flex-col gap-8 items-center text-center w-full"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
				>
					<h2 className="text-cma-navy">Before You Arrive</h2>
					<p className="text-cma-navy max-w-[560px]">
						Find everything you need to pick your perfect play day.
					</p>
					<div className="bg-white border border-[rgba(107,126,160,0.25)] rounded-[200px] px-[25px] py-[17px] text-cma-blue-mid text-center max-w-[720px]">
						<span className="font-black">Important: </span>
						We're closed Wednesdays in August–June, Thanksgiving and Christmas
						Day. Plan ahead and book tickets online to guarantee your spot!
					</div>
				</motion.div>

				{/* Mobile pills + content (hidden at lg+) */}
				<motion.div
					className="flex flex-col gap-4 w-full lg:hidden"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
				>
					<div className="cma-pill-scroll">
						{navItems.map((item) => (
							<button
								key={item}
								onClick={() => setActive(item)}
								className={`cma-nav-pill ${active === item ? "cma-nav-pill-active" : "cma-nav-pill-inactive"}`}
							>
								{item}
							</button>
						))}
					</div>
					<div className="bg-white border-2 border-black/5 rounded-[24px] p-6">
						<TabContent item={active} />
					</div>
				</motion.div>

				{/* Desktop sidebar + content (hidden below lg) */}
				<motion.div
					className="hidden lg:flex flex-row gap-8 items-start w-full"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
				>
					{/* Left nav */}
					<div className="w-[220px] shrink-0">
						<div className="bg-white border border-[#e4e8ee] rounded-[16px] overflow-hidden">
							{navItems.map((item) => (
								<button
									key={item}
									onClick={() => setActive(item)}
									className={`w-full flex items-center justify-between px-5 py-[18px] text-left border-b border-[#e4e8ee] last:border-b-0 transition-colors
                    ${
											active === item
												? "bg-cma-orange text-white font-bold"
												: "bg-white text-cma-navy hover:bg-cma-blue-light"
										}`}
								>
									<span>{item}</span>
									<span
										className={`text-[18px] leading-none ${active === item ? "text-white" : "text-cma-navy opacity-50"}`}
									>
										›
									</span>
								</button>
							))}
						</div>
					</div>

					{/* Content panel */}
					<div className="bg-white border-2 border-black/5 rounded-[24px] flex-1 min-w-0">
						<div className="p-8 md:p-12">
							<TabContent item={active} />
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
