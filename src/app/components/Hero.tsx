import React from "react"
import imgHero from "figma:asset/5e9e706a4edd098b94b55ffc8289a25c57fcd860.png"

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative w-full bg-gray-900 text-white overflow-hidden"
      style={{ minHeight: '520px' }}
    >
      <div className="absolute inset-0 bg-black/40" aria-hidden />

      {/* Background image */}
      <div
        className="absolute right-0 top-0 h-full w-1/2 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{ backgroundImage: `url(${imgHero})` }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-32 flex flex-col md:flex-row items-center md:items-stretch gap-8">
        {/* Left: Text */}
        <div className="w-full md:w-1/2">
          <h1 className="font-extrabold text-white leading-tight" style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}>
            Where Families
            <br />
            Come to Play
          </h1>

          <p className="mt-6 text-white/90 max-w-xl text-lg">
            A hands-on world of exploration and discovery that sparks imagination
            and inspires learning for children of all ages.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#tickets"
              className="inline-flex items-center justify-center bg-[#f7941e] hover:bg-[#e8850d] text-white font-semibold rounded-full px-6 py-3 shadow-md"
            >
              Buy Tickets
            </a>
            <a
              href="#membership"
              className="inline-flex items-center justify-center bg-[#00adbb] hover:bg-[#009aa7] text-white font-semibold rounded-full px-6 py-3 shadow-md"
            >
              Memberships
            </a>
          </div>
        </div>

        {/* Right: On small screens show image below */}
        <div className="w-full md:w-1/2">
          <img
            src={imgHero}
            alt="Children playing at the museum"
            className="w-full h-[320px] md:h-full object-cover rounded-lg shadow-lg md:hidden"
          />
        </div>
      </div>

      {/* Decorative wave */}
      <svg
        className="absolute bottom-0 left-0 w-full h-12 text-white/10"
        viewBox="0 0 1440 54"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0 24c48 8 144 32 288 32s240-24 384-32 240 8 384 16 240 8 384-8V54H0V24z"
          fill="currentColor"
        />
      </svg>
    </section>
  )
}