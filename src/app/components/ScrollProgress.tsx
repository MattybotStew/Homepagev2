import { useEffect, useState } from "react";

export default function ScrollProgress() {
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			// Get total scrollable height
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;
			const scrollableHeight = documentHeight - windowHeight;

			// Get current scroll position
			const scrolled = window.scrollY;

			// Calculate percentage (0 to 100)
			const progress =
				scrollableHeight > 0 ? (scrolled / scrollableHeight) * 100 : 0;

			setScrollProgress(progress);
		};

		// Set initial value
		handleScroll();

		// Add scroll listener
		window.addEventListener("scroll", handleScroll, { passive: true });

		// Cleanup
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="fixed top-[90px] xs:top-[96px] sm:top-[108px] md:top-[116px] lg:top-[110px] xl:top-[126px] left-0 right-0 z-30 bg-cma-progress-track h-[6px] w-full">
			<div
				className="bg-cma-orange h-full rounded-br-[1000px] rounded-tr-[1000px]"
				style={{ width: `${scrollProgress}%` }}
			/>
		</div>
	);
}
