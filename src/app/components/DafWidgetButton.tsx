import { useEffect, useRef } from "react";

export default function DafWidgetButton() {
	const placeholderRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const placeholder = placeholderRef.current;
		if (!placeholder) return;

		// Mount on document.body — placing this inside a motion.div tree
		// breaks it, since framer-motion leaves an inline `transform` on its
		// elements, and any transformed ancestor becomes the containing block
		// for `position: fixed` descendants (the widget's modal relies on
		// `position: fixed` sized to its iframe's viewport).
		const iframe = document.createElement("iframe");
		iframe.title = "Give from your Donor-Advised Fund";
		iframe.style.position = "fixed";
		iframe.style.border = "none";
		// Kept below the site header (z-40, fixed) while inline, so it scrolls
		// behind the header like normal content — only raised above it once
		// the modal opens.
		iframe.style.zIndex = "1";
		document.body.appendChild(iframe);

		let expanded = false;

		const syncPosition = () => {
			if (expanded) return;
			const rect = placeholder.getBoundingClientRect();
			iframe.style.top = `${rect.top}px`;
			iframe.style.left = `${rect.left}px`;
			iframe.style.width = `${rect.width}px`;
			iframe.style.height = `${rect.height}px`;
		};

		const collapse = () => {
			expanded = false;
			iframe.style.zIndex = "1";
			syncPosition();
		};

		const expand = () => {
			expanded = true;
			iframe.style.zIndex = "9999";
			iframe.style.top = "0";
			iframe.style.left = "0";
			iframe.style.width = "100vw";
			iframe.style.height = "100vh";
		};

		syncPosition();
		window.addEventListener("resize", syncPosition);
		window.addEventListener("scroll", syncPosition, true);

		let observer: MutationObserver | null = null;

		// The widget's modal is `position: fixed; width/height: 100%` relative
		// to this iframe's own viewport — expand the iframe to fill the real
		// screen while the modal is open, then shrink it back when it closes.
		iframe.addEventListener("load", () => {
			const frameDoc = iframe.contentDocument;
			if (!frameDoc) return;
			observer = new MutationObserver(() => {
				const modal = frameDoc.getElementById("daf_modal");
				const isOpen = !!modal && frameDoc.defaultView?.getComputedStyle(modal).visibility === "visible";
				if (isOpen) expand();
				else collapse();
			});
			observer.observe(frameDoc.documentElement, {
				attributes: true,
				subtree: true,
				attributeFilter: ["style"],
			});
		});

		const doc = iframe.contentDocument;
		if (doc) {
			doc.open();
			doc.write(`
				<!DOCTYPE html>
				<html>
					<head>
						<style>
							body { margin: 0; font-family: Nunito, sans-serif; }
							#daf_link {
								display: inline-flex !important;
								align-items: center !important;
								justify-content: center !important;
								width: fit-content !important;
								max-width: 100% !important;
								box-sizing: border-box !important;
								text-align: center !important;
								white-space: normal !important;
								margin: 0 !important;
								vertical-align: top !important;
								background-color: #f7941e !important;
								color: #1d3e6b !important;
								font-family: Nunito, sans-serif !important;
								font-weight: 900 !important;
								font-size: 15px !important;
								line-height: 1.3 !important;
								text-decoration: none !important;
								border-radius: 1000px !important;
								padding: 13px 24px !important;
								cursor: pointer !important;
								transition: background-color 0.2s ease !important;
							}
							#daf_link:hover { background-color: #b8620a !important; }
						</style>
					</head>
					<body>
						<script>var _msdaf_id= 'f18b69490bb9e'</script>
						<script src="https://app.dafwidget.com/api/js/source.js"></script>
					</body>
				</html>
			`);
			doc.close();
		}

		return () => {
			observer?.disconnect();
			window.removeEventListener("resize", syncPosition);
			window.removeEventListener("scroll", syncPosition, true);
			iframe.remove();
		};
	}, []);

	return <div ref={placeholderRef} className="w-full h-[76px]" />;
}
