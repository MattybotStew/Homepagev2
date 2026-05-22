export default function PowerOfPlayMarquee() {
  const items = Array(8).fill("The Power of Play")

  return (
    <div className="w-full overflow-hidden py-[28px] md:py-[40px] bg-white">
      <div className="cma-power-marquee">
        {items.map((text, i) => (
          <span key={i} className="inline-flex items-center shrink-0">
            <span className="font-extrabold text-[clamp(56px,8vw,108px)] text-cma-navy leading-none whitespace-nowrap px-[0.55em]">
              {text}
            </span>
            <span aria-hidden className="text-[clamp(20px,3vw,40px)] text-cma-orange leading-none shrink-0">
              ★
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
