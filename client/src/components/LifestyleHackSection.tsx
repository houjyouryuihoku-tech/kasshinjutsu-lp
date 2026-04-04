/**
 * LifestyleHackSection — ⑤ ライフスタイルハックと親のプレッシャー排除
 * Design: ヒューマン・ウォーム — ベージュ背景、利便性を視覚的に伝える
 * 「親の当番なし」「LINE振替」「ノータッチ歓迎」を強く打ち出す
 */
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Clock,
  MessageCircle,
  MapPin,
  Coffee,
  ShoppingBag,
  Heart,
  CheckCircle2,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "親の当番は一切なし",
    desc: "送迎だけでOK。お茶当番・係の仕事はありません。",
  },
  {
    icon: MessageCircle,
    title: "LINE一本で振替自由",
    desc: "急な予定変更も安心。全6拠点どこでも振替できます。",
  },
  {
    icon: MapPin,
    title: "上伊那エリア全6拠点",
    desc: "箕輪・辰野・伊那を含む6拠点。通いやすい場所を選べます。",
  },
  {
    icon: Users,
    title: "親子参加も大歓迎",
    desc: "一緒に汗を流すもよし、子供だけ預けるもよし。自由です。",
  },
];

export default function LifestyleHackSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: noteRef, isVisible: noteVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="lifestyle"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ backgroundColor: "#F0E8DA" }}
    >
      {/* Decorative */}
      <div className="absolute top-[-40px] left-[-60px] w-[200px] h-[200px] rounded-full bg-[#E07C3A]/6 blur-3xl" />
      <div className="absolute bottom-[-40px] right-[-60px] w-[180px] h-[180px] rounded-full bg-[#5B7B5E]/6 blur-3xl" />

      <div className="container">
        {/* Section heading */}
        <div ref={headingRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headingVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-6 sm:mb-8"
          >
            <span
              className="inline-block text-[#E07C3A] text-xs sm:text-sm font-semibold tracking-[0.15em] mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              LIFESTYLE HACK
            </span>
            <h2
              className="text-[#1A2744] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug sm:leading-snug"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              忙しい上伊那の共働き世帯へ。
              <br />
              道場通いが
              <span className="text-[#E07C3A]">「ライフスタイル・ハック」</span>
              <br className="hidden sm:block" />
              になる理由。
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-[#1A2744] text-base sm:text-lg md:text-xl font-bold mb-12 sm:mb-16"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            親の当番は一切なし。上伊那エリア全6拠点で
            <br className="sm:hidden" />
            <span className="text-[#E07C3A]">【LINE一本で振替自由】</span>。
          </motion.p>
        </div>

        {/* Benefits grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-3xl mx-auto mb-12 sm:mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 25 }}
              animate={cardsVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-[#1A2744]/5 hover:shadow-md transition-shadow duration-400"
            >
              <div className="flex items-start gap-3.5">
                <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#E07C3A]/10 flex items-center justify-center">
                  <benefit.icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#E07C3A]" />
                </div>
                <div>
                  <h3
                    className="text-[#1A2744] text-sm sm:text-base font-bold mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-[#1A2744]/60 text-xs sm:text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Parent no-pressure zone */}
        <div ref={noteRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={noteVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#5B7B5E]/15">
              {/* Header */}
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-[#5B7B5E]" />
                <h3
                  className="text-[#5B7B5E] text-sm sm:text-base font-bold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  親御さんの完全ノータッチ、大歓迎です
                </h3>
              </div>

              <p className="text-[#1A2744]/70 text-sm sm:text-base leading-relaxed mb-5">
                見学の義務はありません。お子様を預けている間は買い物やカフェなど、
                <strong className="text-[#1A2744] font-semibold">親御さんの自由な時間</strong>としてお使いください
                （もちろん、親子での参加も可能です）。
              </p>

              {/* Free time suggestions */}
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Coffee, text: "カフェでひと息" },
                  { icon: ShoppingBag, text: "お買い物" },
                  { icon: Heart, text: "自分の時間" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#5B7B5E]/8 text-[#5B7B5E] text-xs sm:text-sm"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    <item.icon className="w-3.5 h-3.5" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
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
