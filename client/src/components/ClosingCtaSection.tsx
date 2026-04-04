/**
 * ClosingCtaSection — ⑩ Closing CTA（コンバージョン導線の最終セクション）
 * Design: ヒューマン・ウォーム — ベージュ背景、感情に訴えるクロージングコピー
 * メインCTA（LINE予約）＋サブCTA（Webフォーム）の2段構え
 */
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MessageCircle, Heart } from "lucide-react";

export default function ClosingCtaSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="closing-cta"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ backgroundColor: "#F8F1E7" }}
    >
      {/* Decorative */}
      <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-[#E07C3A]/6 blur-3xl" />

      <div className="container" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Emotional closing copy */}
          <Heart className="w-8 h-8 text-[#E07C3A]/40 mx-auto mb-6" />

          <h2
            className="text-[#1A2744] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug sm:leading-snug mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            お子様の「心の土台」は、
            <br />
            <span className="text-[#E07C3A]">今この瞬間</span>から育ちはじめます。
          </h2>

          <p className="text-[#1A2744]/70 text-sm sm:text-base leading-relaxed sm:leading-loose mb-10 sm:mb-12">
            活心術 峰丈流護身武道 伊北支部で、
            <br className="hidden sm:block" />
            家族みんなが「新しい自分」に出会える体験を。
            <br />
            まずは気軽に、無料体験からはじめてみませんか？
          </p>

          {/* Main CTA — LINE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-4"
          >
            <a
              href="https://lin.ee/pTFTiBg"
              className="
                inline-flex items-center justify-center gap-3
                w-full sm:w-auto
                px-10 py-5 rounded-2xl
                bg-[#06C755] hover:bg-[#05b04c] active:bg-[#04a044]
                text-white font-bold text-base sm:text-lg
                shadow-lg shadow-[#06C755]/25
                transition-all duration-300 hover:shadow-xl hover:shadow-[#06C755]/35
                hover:-translate-y-0.5
              "
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <MessageCircle className="w-6 h-6" />
              LINE友だち追加で予約
            </a>
            <p
              className="text-[#06C755]/70 text-xs sm:text-sm mt-2 font-medium"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              1分で完了
            </p>
          </motion.div>


          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4 mt-10 sm:mt-12"
          >
            {["強引な勧誘なし", "手ぶらでOK", "親の当番なし"].map((text) => (
              <span
                key={text}
                className="text-[#1A2744]/40 text-xs flex items-center gap-1"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M6 0C2.69 0 0 2.69 0 6s2.69 6 6 6 6-2.69 6-6S9.31 0 6 0zm-.6 9L2.4 6l.85-.85L5.4 7.3l4.35-4.35.85.85L5.4 9z"
                    fill="currentColor"
                  />
                </svg>
                {text}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
