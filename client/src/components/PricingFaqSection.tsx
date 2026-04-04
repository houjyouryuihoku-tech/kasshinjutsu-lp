/**
 * PricingFaqSection — ⑨ 投資対効果（料金提示）とFAQ
 * Design: ヒューマン・ウォーム — ネイビー背景、料金の価値訴求＋FAQ
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronDown, Heart, Shield, Users, Clock } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "親の当番や係はありますか？",
    answer:
      "一切ありません。活心術 峰丈流護身武道 伊北支部では、お茶当番・送迎当番・イベント係などの保護者負担は一切ございません。送迎のみでOKです。",
  },
  {
    question: "運動が苦手な子供でも大丈夫ですか？",
    answer:
      "もちろん大丈夫です。活心術 峰丈流護身武道 伊北支部では、一人ひとりのペースに合わせた「スモールステップ指導」を行っています。運動音痴だった指導員（鈴木）自身が、その証明です。",
  },
  {
    question: "何歳から始められますか？",
    answer:
      "3歳から始められます。お子様の発達段階に合わせて稽古を行っていますので、無理なくスタートできます。詳しくは無料体験時にご相談ください。",
  },
  {
    question: "親も一緒にやらないといけませんか？",
    answer:
      "いいえ、お子様だけの入会・送迎のみも大歓迎です。もちろん親子で一緒に参加することもできますが、親御さんに無理な参加をお願いすることは一切ありません。",
  },
  {
    question: "稽古に必要な道具はありますか？",
    answer:
      "無料体験時は動きやすい服装だけでOKです。入会後に必要な道着などについては、体験時に詳しくご案内いたします。",
  },
  {
    question: "振替はできますか？",
    answer:
      "はい、LINE一本で全6拠点どこでも振替可能です。急な予定変更にも柔軟に対応しています。",
  },
  {
    question: "兄弟や家族で入会する場合、割引はありますか？",
    answer:
      "はい、ございます！ご兄弟での入会はもちろん、ご家族3名以上で稽古に励まれる場合は、月謝が20%OFFになる特別な家族3人割引をご用意しております。家計にも優しく、ご家族全員で心の土台作りに取り組んでいただける制度です。詳細については、無料体験の際にお気軽にお尋ねください。",
  },
];

function FaqAccordion({ item, index }: { item: FaqItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.08] last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between gap-4 py-5 sm:py-6 text-left group"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-3">
          <span
            className="text-[#E07C3A]/60 text-xs font-bold mt-0.5 flex-shrink-0"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Q{index + 1}
          </span>
          <span
            className="text-white text-sm sm:text-base font-medium leading-relaxed group-hover:text-white/90 transition-colors"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {item.question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 mt-1"
        >
          <ChevronDown className="w-4 h-4 text-white/40" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-5 sm:pb-6 pl-8 sm:pl-9 pr-4">
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PricingFaqSection() {
  const { ref: pricingRef, isVisible: pricingVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="pricing-faq" className="relative pt-20 sm:pt-28 pb-48 overflow-hidden" style={{ backgroundColor: "#1A2744" }}>
      {/* Decorative */}
      <div className="absolute top-20 left-[-80px] w-[250px] h-[250px] rounded-full bg-[#E07C3A]/5 blur-3xl" />

      <div className="container">
        {/* ===== Pricing ===== */}
        <div ref={pricingRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={pricingVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-14"
          >
            <span
              className="inline-block text-[#E07C3A] text-xs sm:text-sm font-semibold tracking-[0.15em] mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              PRICING
            </span>
            <h2
              className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug sm:leading-snug mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              一生モノの<span className="text-[#E07C3A]">「心の土台」</span>への投資
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={pricingVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto mb-16 sm:mb-24"
          >
            <div className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/[0.08]">
              <p className="text-white/80 text-sm sm:text-base leading-relaxed sm:leading-loose text-center mb-6">
                学習塾の夏期講習1回分の投資で、一生モノの「心の土台」が手に入る。
                <br className="hidden sm:block" />
                家族全員で通っても家計に優しい料金体系をご用意しています。
              </p>

              {/* Pricing table */}
              <div className="bg-white/[0.04] rounded-xl p-4 border border-white/[0.12]">
                {[
                  { label: "月謝（週2回まで）", price: "¥4,950" },
                  { label: "月謝（週3回以上）", price: "¥6,490" },
                  { label: "入会金", price: "¥10,000" },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-center py-3 border-b border-white/[0.08] last:border-b-0">
                    <span className="text-white/60 text-sm">{row.label}</span>
                    <span className="text-white text-base font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                      {row.price}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[#E07C3A] text-xs sm:text-sm font-semibold text-center mt-4" style={{ fontFamily: "var(--font-heading)" }}>
                🎁 今なら入会で道着無料プレゼント実施中！
              </p>
            </div>
          </motion.div>
        </div>

        {/* ===== FAQ ===== */}
        <div ref={faqRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-14"
          >
            <span
              className="inline-block text-[#E07C3A] text-xs sm:text-sm font-semibold tracking-[0.15em] mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              FAQ
            </span>
            <h2
              className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-snug"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              よくあるご質問
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white/[0.04] rounded-2xl px-5 sm:px-8 border border-white/[0.06]">
              {faqs.map((faq, index) => (
                <FaqAccordion key={index} item={faq} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 C360,90 720,10 1080,50 C1260,70 1380,60 1440,50 L1440,100 L0,100 Z"
            fill="#F8F1E7"
          />
        </svg>
      </div>
    </section>
  );
}
