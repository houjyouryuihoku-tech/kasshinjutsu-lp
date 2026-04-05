/**
 * TeamSection — ③ 共感のサポートチーム（誠実なエリア表記）
 * Design: ヒューマン・ウォーム — ネイビー背景に白テキスト、温かみのあるカード
 * 4名の指導員を個性的なカードで紹介
 */
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, RefreshCw } from "lucide-react";
import kawashimaImg from "@/assets/kawashima.png";

interface Instructor {
  name: string;
  role: string;
  image: string;
  quote: string;
  area: string;
  accentColor: string;
}

const instructors: Instructor[] = [
  {
    area: '南箕輪村・箕輪町・辰野町',
    role: "1歳児パパ / 情熱のリーダー",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663357873617/DxdqmbcxcTUMAvyLhMFoRh/instructor-mimizuka-real_d98663cf.png",
    quote:
      "毎日悩みながら父親をやっています。育児の苦悩がわかるからこそ、ご家庭のライフスタイルを何より大切にします",
    area: "南箕輪村",
    accentColor: "#E07C3A",
  },
  {
    name: "有賀 晟起",
    role: "子育て完了の賢者 / 技術の要",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663357873617/DxdqmbcxcTUMAvyLhMFoRh/instructor-aruga-real_cdc1b6cc.png",
    quote:
      "3人の子を育て上げました。力任せではない『理（ことわり）』の技術で、本質的な強さを伝えます",
    area: "南箕輪村",
    accentColor: "#5B7B5E",
    area: '南箕輪村',
  {
    name: "川島 正臣",
    role: "経験豊富な技術 / ベテラン指導員",
    image: kawashimaImg,
    quote:
      "確かな技術と温かい笑顔が持ち味。一人ひとりのレベルに合わせ、初心者から経験者まで丁寧にサポートします",
    area: "箕輪町",
    accentColor: "#7B6EC4",
  },
  {
    area: '辰野町',
    role: "誠実な基礎指導 / 医師ママ",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663357873617/DxdqmbcxcTUMAvyLhMFoRh/instructor-suzuki-real_2cca8204.png",
    quote:
      "医療者の冷静な視点と母の誠実さを大切にしています。武道の基礎を丁寧に伝え、お子様の確かな自信を育てます",
    area: "辰野町、箕輪町、南箕輪村",
    accentColor: "#C4856B",
  },
  {
    name: "小野 凌聖",
    role: "元泣き虫 / 等身大のヒーロー",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663357873617/DxdqmbcxcTUMAvyLhMFoRh/instructor-ono-real_817088c0.png",
    quote:
      "昔は挨拶が苦手な泣き虫でした。だからこそ、引っ込み思案な子供の気持ちに一番寄り添えます",
    area: "辰野町",
    accentColor: "#6B8EC4",
  },
];

export default function TeamSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: noteRef, isVisible: noteVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="team" className="relative py-20 sm:py-28 overflow-hidden" style={{ backgroundColor: "#1A2744" }}>
      {/* Subtle decorative elements */}
      <div className="absolute top-20 left-[-100px] w-[300px] h-[300px] rounded-full bg-[#E07C3A]/5 blur-3xl" />
      <div className="absolute bottom-10 right-[-80px] w-[250px] h-[250px] rounded-full bg-[#5B7B5E]/5 blur-3xl" />

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
              SUPPORT TEAM
            </span>
            <h2
              className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug sm:leading-snug mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              完璧な親なんていない。
              <br />
              <span className="text-[#E07C3A]">等身大の悩みを知る</span>5人の指導員が
              <br className="hidden sm:block" />
              伴走します。
            </h2>
            <p className="text-white/50 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              活心術 峰丈流護身武道 伊北支部の指導員は、全員が子育ての当事者。
              だからこそ、ご家庭の事情に寄り添えます。
            </p>
          </motion.div>
        </div>

        {/* Instructor cards */}
        <div ref={cardsRef} className="max-w-4xl mx-auto mb-10 sm:mb-14">
          {/* 2x2 grid for first 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-5 sm:mb-6">
            {instructors.slice(0, 4).map((instructor, index) => (
              <motion.div
                key={instructor.name}
                initial={{ opacity: 0, y: 30 }}
                animate={cardsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group"
              >
              <div className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.09] transition-all duration-500 h-full">
                {/* Profile header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative flex-shrink-0">
                    <div
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-white/10"
                    >
                      <img
                        src={instructor.image}
                        alt={`${instructor.name} - 活心術 峰丈流護身武道 伊北支部 指導員`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    {/* Accent dot */}
                    <div
                      className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-[#1A2744]"
                      style={{ backgroundColor: instructor.accentColor }}
                    />
                  </div>
                  <div className="min-w-0">
                    <h3
                      className="text-white text-base sm:text-lg font-bold truncate"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {instructor.name}
                    </h3>
                    <p
                      className="text-xs sm:text-sm font-medium truncate"
                      style={{ color: instructor.accentColor, fontFamily: "var(--font-heading)" }}
                    >
                      {instructor.role}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative mb-4">
                  <div
                    className="absolute top-0 left-0 text-3xl leading-none opacity-20"
                    style={{ color: instructor.accentColor, fontFamily: "var(--font-heading)" }}
                  >
                    &ldquo;
                  </div>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed pl-5 pt-1">
                    {instructor.quote}
                  </p>
                </div>

                {/* Area badge */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] w-fit">
                  <MapPin className="w-3 h-3 text-white/40" />
                  <span className="text-white/50 text-[10px] sm:text-xs">
                    主な担当エリア：{instructor.area}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
          {/* 5th card centered */}
          {instructors[4] && (
            <motion.div
              key={instructors[4].name}
              initial={{ opacity: 0, y: 30 }}
              animate={cardsVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 4 * 0.15 }}
              className="group max-w-sm mx-auto"
            >
              <div className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.09] transition-all duration-500 h-full">
                {/* Profile header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-white/10">
                      <img
                        src={instructors[4].image}
                        alt={`${instructors[4].name} - 活心術 峰丈流護身武道 伊北支部 指導員`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div
                      className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-[#1A2744]"
                      style={{ backgroundColor: instructors[4].accentColor }}
                    />
                  </div>
                  <div className="min-w-0">
                    <h3
                      className="text-white text-base sm:text-lg font-bold truncate"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {instructors[4].name}
                    </h3>
                    <p
                      className="text-xs sm:text-sm font-medium truncate"
                      style={{ color: instructors[4].accentColor, fontFamily: "var(--font-heading)" }}
                    >
                      {instructors[4].role}
                    </p>
                  </div>
                </div>
                <div className="relative mb-4">
                  <div
                    className="absolute top-0 left-0 text-3xl leading-none opacity-20"
                    style={{ color: instructors[4].accentColor, fontFamily: "var(--font-heading)" }}
                  >
                    &ldquo;
                  </div>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed pl-5 pt-1">
                    {instructors[4].quote}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] w-fit">
                  <MapPin className="w-3 h-3 text-white/40" />
                  <span className="text-white/50 text-[10px] sm:text-xs">
                    主な担当エリア：{instructors[4].area}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Area flexibility note */}
        <div ref={noteRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={noteVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-start gap-3 sm:gap-4 px-5 sm:px-6 py-4 sm:py-5 rounded-2xl bg-[#E07C3A]/10 border border-[#E07C3A]/20">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#E07C3A]/20 flex items-center justify-center">
                  <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 text-[#E07C3A]" />
                </div>
              </div>
              <div>
                <p className="text-[#E07C3A] text-xs sm:text-sm font-semibold mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                  全拠点振替自由
                </p>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                  指導員ごとに担当は異なりますが、活心術 峰丈流護身武道 伊北支部は<strong className="text-white/80">全拠点振替自由</strong>です。
                  ライフスタイルに合わせた通い方や、多様な刺激を受ける出稽古も大歓迎です！
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 C180,90 360,10 540,50 C720,90 900,10 1080,50 C1260,90 1380,60 1440,50 L1440,100 L0,100 Z"
            fill="#F8F1E7"
          />
        </svg>
      </div>
    </section>
  );
}
