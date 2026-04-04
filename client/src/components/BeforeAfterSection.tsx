/**
 * BeforeAfterSection — ④ ビフォーアフター（未来の提示）
 * Design: ヒューマン・ウォーム — ベージュ背景、子供と親の変化を視覚的に対比
 * 矢印で「Before → After」を明確に示す
 */
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Sparkles } from "lucide-react";

interface TransformItem {
  label: string;
  labelColor: string;
  before: string;
  after: string;
  accentColor: string;
  bgAccent: string;
}

const transformations: TransformItem[] = [
  {
    label: "子供の変化",
    labelColor: "#E07C3A",
    before: "すぐ諦める",
    after: "失敗しても\n「もう一回！」と\n言える子",
    accentColor: "#E07C3A",
    bgAccent: "#E07C3A",
  },
  {
    label: "親の変化",
    labelColor: "#5B7B5E",
    before: "送迎で疲弊する\n毎日",
    after: "心に余裕ができ、\n子供の成長を\n笑顔で喜べる毎日",
    accentColor: "#5B7B5E",
    bgAccent: "#5B7B5E",
  },
];

export default function BeforeAfterSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="before-after"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ backgroundColor: "#F8F1E7" }}
    >
      {/* Decorative */}
      <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-[#E07C3A]/5 blur-3xl" />

      <div className="container">
        {/* Section heading */}
        <div ref={headingRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headingVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-14 sm:mb-20"
          >
            <span
              className="inline-block text-[#E07C3A] text-xs sm:text-sm font-semibold tracking-[0.15em] mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              TRANSFORMATION
            </span>
            <h2
              className="text-[#1A2744] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug sm:leading-snug"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              活心術 峰丈流護身武道 伊北支部が届ける
              <br />
              <span className="text-[#E07C3A]">「変化」</span>のストーリー
            </h2>
          </motion.div>
        </div>

        {/* Transformation cards */}
        <div ref={cardsRef} className="flex flex-col gap-8 sm:gap-10 max-w-3xl mx-auto">
          {transformations.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={cardsVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Label */}
              <div className="flex items-center gap-2 mb-4 sm:mb-5">
                <Sparkles className="w-4 h-4" style={{ color: item.labelColor }} />
                <span
                  className="text-sm sm:text-base font-bold"
                  style={{ color: item.labelColor, fontFamily: "var(--font-heading)" }}
                >
                  {item.label}
                </span>
              </div>

              {/* Before → After card */}
              <div className="bg-white rounded-2xl shadow-sm border border-[#1A2744]/6 overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  {/* Before */}
                  <div className="flex-1 p-5 sm:p-7 relative">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="px-2.5 py-0.5 rounded-full bg-[#1A2744]/8 text-[#1A2744]/50 text-[10px] sm:text-xs font-semibold tracking-wider uppercase"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        Before
                      </span>
                    </div>
                    <p
                      className="text-[#1A2744]/40 text-lg sm:text-xl font-bold whitespace-pre-line leading-relaxed"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {item.before}
                    </p>
                  </div>

                  {/* Arrow divider */}
                  <div className="flex items-center justify-center py-2 sm:py-0 sm:px-2">
                    {/* Mobile: horizontal arrow */}
                    <div className="sm:hidden flex items-center justify-center w-10 h-10 rounded-full" style={{ backgroundColor: item.accentColor }}>
                      <ArrowRight className="w-5 h-5 text-white rotate-90 sm:rotate-0" />
                    </div>
                    {/* Desktop: horizontal arrow */}
                    <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full" style={{ backgroundColor: item.accentColor }}>
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* After */}
                  <div className="flex-1 p-5 sm:p-7 relative" style={{ backgroundColor: item.bgAccent + "08" }}>
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="px-2.5 py-0.5 rounded-full text-white text-[10px] sm:text-xs font-semibold tracking-wider uppercase"
                        style={{ backgroundColor: item.accentColor, fontFamily: "var(--font-heading)" }}
                      >
                        After
                      </span>
                    </div>
                    <p
                      className="text-[#1A2744] text-lg sm:text-xl font-bold whitespace-pre-line leading-relaxed"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {item.after}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA after transformation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={cardsVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p
            className="text-[#1A2744]/60 text-sm sm:text-base mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            この変化を、あなたのご家族にも。
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScjQ7d1my6etqhc5pIhTpyQqi2mbTDweCaeTzLpR-5HH1mg_A/viewform?usp=sharing&ouid=100710576726757638911"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center gap-2
              px-8 py-4 rounded-xl
              bg-[#E07C3A] hover:bg-[#c96a2e] active:bg-[#b55e28]
              text-white font-bold text-base sm:text-lg
              shadow-lg shadow-[#E07C3A]/25
              transition-all duration-300 hover:shadow-xl hover:shadow-[#E07C3A]/35
              hover:-translate-y-0.5
            "
            style={{ fontFamily: "var(--font-heading)" }}
          >
            まずは無料体験から
          </a>
        </motion.div>
      </div>

      {/* Placeholder divider for next section */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C480,80 960,0 1440,40 L1440,80 L0,80 Z"
            fill="#F0E8DA"
          />
        </svg>
      </div>
    </section>
  );
}
