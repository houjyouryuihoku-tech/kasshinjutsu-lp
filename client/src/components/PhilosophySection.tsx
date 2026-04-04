/**
 * PhilosophySection — ② 哲学とメソッド（規律と承認のメリハリ徳育）
 * Design: ヒューマン・ウォーム — ベージュ背景にネイビーテキスト
 * 「静の規律」と「動の即時肯定」を視覚的に対比させるレイアウト
 */
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Volume2, Zap, Brain } from "lucide-react";

export default function PhilosophySection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: noteRef, isVisible: noteVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="philosophy"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ backgroundColor: "#F8F1E7" }}
    >
      {/* Subtle decorative circles */}
      <div className="absolute top-10 right-[-60px] w-[200px] h-[200px] rounded-full bg-[#E07C3A]/5 blur-2xl" />
      <div className="absolute bottom-20 left-[-80px] w-[250px] h-[250px] rounded-full bg-[#1A2744]/5 blur-2xl" />

      <div className="container">
        {/* Section heading */}
        <div ref={sectionRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-14 sm:mb-20"
          >
            <span
              className="inline-block text-[#E07C3A] text-xs sm:text-sm font-semibold tracking-[0.15em] mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              PHILOSOPHY & METHOD
            </span>
            <h2
              className="text-[#1A2744] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug sm:leading-snug"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ただ褒めるだけの「お遊戯教室」
              <br className="sm:hidden" />
              ではありません。
              <br />
              <span className="text-[#E07C3A]">心を育む</span>
              『メリハリの魔法』
            </h2>
          </motion.div>
        </div>

        {/* Introduction text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-14 sm:mb-20"
        >
          <p className="text-[#1A2744]/80 text-sm sm:text-base leading-relaxed sm:leading-loose">
            活心術 峰丈流護身武道 伊北支部は、古い精神論を押し付ける場所ではありません。
            <br className="hidden sm:block" />
            武道特有のピリッとした「静の規律」と、できた瞬間を見逃さない「動の即時肯定」。
            <br className="hidden sm:block" />
            この2つのメリハリが、お子様の心を大きく育てます。
          </p>
        </motion.div>

        {/* Two pillars: 静 and 動 */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-14 sm:mb-20">
          {/* 静の規律 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={cardsVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative group"
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-500 border border-[#1A2744]/8 h-full">
              {/* Top accent bar */}
              <div className="w-12 h-1 bg-[#1A2744] rounded-full mb-5" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1A2744]/8 flex items-center justify-center">
                  <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#1A2744]" />
                </div>
                <div>
                  <span
                    className="text-[#1A2744]/50 text-[10px] sm:text-xs tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Discipline
                  </span>
                  <h3
                    className="text-[#1A2744] text-lg sm:text-xl font-bold"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    静の規律
                  </h3>
                </div>
              </div>

              <p className="text-[#1A2744]/70 text-sm sm:text-base leading-relaxed mb-4">
                挨拶・黙想・正座。武道特有のピリッとした空気が、
                困難から逃げない<strong className="text-[#1A2744] font-semibold">「がまんする力」</strong>を育みます。
              </p>

              <div className="flex flex-wrap gap-2">
                {["挨拶", "黙想", "正座", "礼儀"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-[#1A2744]/5 text-[#1A2744]/60 text-xs"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 動の即時肯定 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={cardsVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative group"
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-500 border border-[#E07C3A]/10 h-full">
              {/* Top accent bar */}
              <div className="w-12 h-1 bg-[#E07C3A] rounded-full mb-5" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#E07C3A]/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#E07C3A]" />
                </div>
                <div>
                  <span
                    className="text-[#E07C3A]/50 text-[10px] sm:text-xs tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Motivation
                  </span>
                  <h3
                    className="text-[#1A2744] text-lg sm:text-xl font-bold"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    動の即時肯定
                  </h3>
                </div>
              </div>

              <p className="text-[#1A2744]/70 text-sm sm:text-base leading-relaxed mb-4">
                できた瞬間を見逃さず褒める。その即時フィードバックが、
                子供たちの<strong className="text-[#E07C3A] font-semibold">「やる気」</strong>を爆発させます。
              </p>

              <div className="flex flex-wrap gap-2">
                {["即時褒め", "達成感", "自信", "やる気"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-[#E07C3A]/8 text-[#E07C3A]/70 text-xs"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Science note — さりげない補足 */}
        <div ref={noteRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={noteVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-start gap-3 sm:gap-4 px-5 sm:px-6 py-4 sm:py-5 rounded-2xl bg-[#1A2744]/5 border border-[#1A2744]/8">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#5B7B5E]/15 flex items-center justify-center">
                  <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-[#5B7B5E]" />
                </div>
              </div>
              <div>
                <p className="text-[#1A2744]/60 text-xs sm:text-sm leading-relaxed">
                  この「静と動のメリハリ」は、自制心を司る<strong className="text-[#1A2744]/80">前頭前野</strong>を鍛え、
                  達成感を生む<strong className="text-[#1A2744]/80">報酬系</strong>を活性化させる、
                  理にかなった徳育メソッドです。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave divider to next section */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
            fill="#1A2744"
          />
        </svg>
      </div>
    </section>
  );
}
