/**
 * TrialFlowSection — ⑧ 心理ハードルゼロの「3ステップ体験フロー」と「当日の安心タイムライン」
 * Design: ヒューマン・ウォーム — 温かみのあるステップ図解
 * 各ステップに安心感を与えるメッセージを配置
 */
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Eye, Users, Smile, Shield } from "lucide-react";

interface Step {
  number: number;
  icon: React.ElementType;
  title: string;
  description: string;
  accentColor: string;
  bgColor: string;
}

const steps: Step[] = [
  {
    number: 1,
    icon: Eye,
    title: "到着〜見学",
    description:
      "場所見知りで泣いてしまってもOK！最初はパパやママのお膝の上で見学からスタートで大丈夫です。",
    accentColor: "#5B7B5E",
    bgColor: "#5B7B5E",
  },
  {
    number: 2,
    icon: Users,
    title: "稽古参加",
    description:
      "少し空間に慣れてきたら、優しい先輩の子供たちが「一緒にやろう！」とサポートしてくれます。",
    accentColor: "#E07C3A",
    bgColor: "#E07C3A",
  },
  {
    number: 3,
    icon: Smile,
    title: "笑顔で解散",
    description:
      "稽古後は、先生から今日「できたこと」をたくさん褒めてもらって、笑顔で解散！引き留めや強引な入会勧誘は一切ありません。",
    accentColor: "#C4856B",
    bgColor: "#C4856B",
  },
];

export default function TrialFlowSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="trial"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ backgroundColor: "#F8F1E7" }}
    >
      {/* Decorative */}
      <div className="absolute top-[-30px] left-[-50px] w-[180px] h-[180px] rounded-full bg-[#E07C3A]/5 blur-3xl" />

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
              TRIAL FLOW
            </span>
            <h2
              className="text-[#1A2744] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug sm:leading-snug mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              「うちの子にできるかな…」
              <br />
              まずは<span className="text-[#E07C3A]">手ぶらで遊びに来てください！</span>
            </h2>
            <p className="text-[#1A2744]/60 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
              活心術 峰丈流護身武道 伊北支部の無料体験は、お子様のペースに合わせた3ステップ。
              無理は一切ありません。
            </p>
          </motion.div>
        </div>

        {/* Timeline steps */}
        <div ref={stepsRef} className="max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-6 sm:left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-[#5B7B5E]/30 via-[#E07C3A]/30 to-[#C4856B]/30 hidden sm:block" />

            <div className="flex flex-col gap-6 sm:gap-0">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  animate={stepsVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  className="relative sm:pl-20 sm:pb-10 last:sm:pb-0"
                >
                  {/* Step number circle */}
                  <div
                    className="sm:absolute sm:left-0 sm:top-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-md mb-3 sm:mb-0"
                    style={{ backgroundColor: step.bgColor }}
                  >
                    <span
                      className="text-white text-lg sm:text-xl font-bold"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Content card */}
                  <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-[#1A2744]/5 hover:shadow-md transition-shadow duration-400">
                    <div className="flex items-center gap-2 mb-3">
                      <step.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: step.accentColor }} />
                      <h3
                        className="text-[#1A2744] text-base sm:text-lg font-bold"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[#1A2744]/70 text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* No-pressure guarantee */}
        <div ref={ctaRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <div className="flex items-start gap-3 px-5 sm:px-6 py-4 sm:py-5 rounded-2xl bg-[#5B7B5E]/10 border border-[#5B7B5E]/20">
              <div className="flex-shrink-0 mt-0.5">
                <Shield className="w-5 h-5 text-[#5B7B5E]" />
              </div>
              <p className="text-[#1A2744]/70 text-xs sm:text-sm leading-relaxed">
                <strong className="text-[#5B7B5E] font-semibold">安心のお約束：</strong>
                体験後の引き留めや強引な入会勧誘は一切行いません。
                お子様が「楽しかった！また来たい！」と思ってくれたら、それが一番の答えです。
              </p>
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
            d="M0,30 C480,80 960,0 1440,40 L1440,80 L0,80 Z"
            fill="#1A2744"
          />
        </svg>
      </div>
    </section>
  );
}
