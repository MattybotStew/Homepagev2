import { useLocation } from "react-router-dom"

const links = [
  { label: "About Us", href: "#/about" },
  { label: "Impact & Community", href: "#/about/impact" },
  { label: "Careers & Volunteer", href: "#/about/careers" },
]

export default function AboutSubNav() {
  const { pathname } = useLocation()

  const isActive = (href: string) => {
    const path = href.replace("#", "")
    if (href === "#/about") return pathname === "/about"
    return pathname.startsWith(path)
  }

  return (
    <div className="bg-cma-navy w-full sticky top-0 z-40">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-[80px]">
        <div className="cma-pill-scroll py-[10px]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`cma-nav-pill whitespace-nowrap ${isActive(link.href) ? "cma-nav-pill-active" : "bg-white/20 text-white hover:bg-white/30 border border-white/20"}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
