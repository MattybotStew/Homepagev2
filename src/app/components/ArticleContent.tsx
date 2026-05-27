import { Facebook, Instagram } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { motion } from "motion/react"
import type { Exhibit } from "../data/exhibits"

type Props = {
  exhibit: Exhibit
  related: Exhibit[]
}

export default function ArticleContent({ exhibit, related }: Props) {
  const badgeBg = exhibit.badgeColor === "navy" ? "bg-cma-navy" : "bg-cma-teal-dark"

  return (
    <section className="bg-cma-cream py-[60px] md:py-[80px]">
      <div className="shrink-0 h-0 lg:h-[120px] xl:h-[126px]" />

      <div className="cma-section-container">
        <div className="max-w-[1024px] mx-auto flex flex-col gap-[24px]">
          {/* Breadcrumbs + Social Share */}
          <div className="flex items-center justify-between flex-wrap gap-[12px]">
            <div className="flex items-center gap-[8px] flex-wrap text-[15px]">
              <a href="#/exhibits" className="text-cma-navy hover:underline">
                Exhibits
              </a>
              <span className="text-cma-navy text-[18px]">›</span>
              <span className="text-cma-teal-dark">{exhibit.title}</span>
            </div>
            <div className="flex gap-[16px] items-center shrink-0">
              <a
                href="https://www.facebook.com/childrensmuseumofatlanta"
                target="_blank"
                rel="noopener noreferrer"
                className="cma-social-btn-filled shrink-0"
                aria-label="Share on Facebook"
              >
                <Facebook className="size-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/childrensmuseumofatlanta/"
                target="_blank"
                rel="noopener noreferrer"
                className="cma-social-btn-filled shrink-0"
                aria-label="Share on Instagram"
              >
                <Instagram className="size-5 text-white" />
              </a>
            </div>
          </div>

          {/* Article Card */}
          <div className="bg-white rounded-[24px] border-2 border-black/5 p-[24px] md:p-[48px] flex flex-col gap-[32px] md:gap-[48px]">
            {/* Hero Image */}
            <div className="relative">
              <img
                src={exhibit.heroImage}
                alt={exhibit.title}
                className="w-full h-[220px] sm:h-[300px] md:h-[380px] object-cover rounded-[24px]"
              />
              <div className={`absolute top-[20px] left-[23px] ${badgeBg} rounded-[8px] px-[18px] py-[12px]`}>
                <p className="text-white text-[14px] font-bold leading-[1.5]">{exhibit.badge}</p>
              </div>
            </div>

            {/* Meta + Title */}
            <div className="flex flex-col gap-[24px]">
              {exhibit.eyebrow && (
                <p className="text-cma-teal-dark">{exhibit.eyebrow}</p>
              )}
              <h1 className="text-cma-navy !text-[clamp(28px,3.75vw,48px)] !leading-none !tracking-[-1px] !font-extrabold">
                {exhibit.title}
              </h1>
            </div>

            {/* Body */}
            {exhibit.paragraphs.map((para, i) => (
              <p key={i} className="text-cma-navy">{para}</p>
            ))}

            {/* Divider */}
            <div className="bg-black/15 h-px w-full" />

            {/* Related Exhibits */}
            <div className="flex flex-col gap-[48px]">
              <p className="text-cma-navy font-extrabold text-[28px] md:text-[36px] leading-[1.1]">Related Exhibits</p>
              <div className="flex flex-col gap-[16px]">
                {related.map((rel, i) => (
                  <motion.div
                    key={rel.slug}
                    className="bg-white border-2 border-black/5 rounded-[24px] p-[24px] flex flex-col md:flex-row gap-[32px] md:items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <img
                      src={rel.cardImage}
                      alt={rel.title}
                      className="w-full md:w-[266px] md:h-[220px] h-[180px] rounded-[24px] object-cover shrink-0"
                    />
                    <div className="flex flex-col gap-[20px] md:gap-[32px] flex-1 min-w-0 md:justify-center">
                      <div className="flex flex-col gap-[8px] md:gap-[24px]">
                        {rel.eyebrow && (
                          <p className="text-cma-teal-dark">{rel.eyebrow}</p>
                        )}
                        <p className="text-cma-navy font-extrabold text-[24px] md:text-[30px] leading-[1.3] tracking-[-0.5px] md:tracking-[-1px]">{rel.title}</p>
                      </div>
                      <p className="text-cma-navy line-clamp-3">{rel.paragraphs[0]}</p>
                      <a href={`/#/exhibits/${rel.slug}`} className="cma-text-link">
                        See Exhibit <FontAwesomeIcon icon={faArrowRight} className="text-[13px]" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
