/**
 * Home Page — 活心術 峰丈流護身武道 伊北支部 LP（完全版）
 * Design: ヒューマン・ウォーム スタイル
 * Color: Navy(#1A2744) + Orange(#E07C3A) + Beige(#F8F1E7) + Moss(#5B7B5E)
 * Font: M PLUS Rounded 1c (heading) + Noto Sans JP (body)
 *
 * セクション構成:
 * ① Hero Section（ファーストビュー）
 * ② 哲学とメソッド
 * ③ 共感のサポートチーム
 * ④ ビフォーアフター
 * ⑤ ライフスタイルハック
 * ⑥ アクセス情報（全6拠点）
 * ⑦ Instagram埋め込み枠
 * ⑧ 体験フロー
 * ⑨ 料金・FAQ
 * ⑩ Closing CTA + Sticky CTA + Footer
 */
import { motion } from "framer-motion";
import { MessageCircle, MapPin, Clock, ChevronDown, Shield } from "lucide-react";
import HeroSlideshow from "@/components/HeroSlideshow";
import PhilosophySection from "@/components/PhilosophySection";
import TeamSection from "@/components/TeamSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import LifestyleHackSection from "@/components/LifestyleHackSection";
import AccessSection from "@/components/AccessSection";
import InstagramSection from "@/components/InstagramSection";
import TrialFlowSection from "@/components/TrialFlowSection";
import PricingFaqSection from "@/components/PricingFaqSection";
import ClosingCtaSection from "@/components/ClosingCtaSection";
import StickyCta from "@/components/StickyCta";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "var(--font-body)" }}>
      <Navbar />
      {/* ===== ① HERO SECTION ===== */}
      <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-16">
        {/* Background slideshow */}
        <HeroSlideshow />

        {/* Content overlay */}
        <div className="relative z-10 container flex flex-col justify-center min-h-[100svh] py-20 sm:py-24">
          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6 sm:mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <MapPin className="w-3.5 h-3.5 text-[#E07C3A]" />
              <span className="text-white/90 text-xs sm:text-sm tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
                長野県 上伊那エリア｜護身武道道場
              </span>
            </div>
          </motion.div>

          {/* Dojo name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-4 sm:mb-5"
          >

          </motion.div>

          {/* Killer copy */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-white leading-[1.4] sm:leading-[1.35] mb-6 sm:mb-8 max-w-[720px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              父は<span className="text-[#E07C3A]">カッコよく</span>、
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-1 sm:mt-2">
              母は<span className="text-[#E07C3A]">癒やされ</span>、
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-1 sm:mt-2">
              子は<span className="text-[#E07C3A]">育つ</span>。
            </span>
            <span className="block text-base sm:text-lg md:text-xl lg:text-2xl font-medium mt-3 sm:mt-4 text-white/90">
              家族みんなが「新しい自分」に出会える場所。
            </span>
          </motion.h1>

          {/* Sub copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="max-w-[600px] mb-8 sm:mb-10"
          >
            <p className="text-white/80 text-sm sm:text-base leading-relaxed sm:leading-loose">
              上伊那エリアの忙しいパパ・ママへ。
              <br className="hidden sm:block" />
              「<strong className="text-white font-semibold">がまんする力</strong>」も
              「<strong className="text-white font-semibold">自分で考える力</strong>」も、
              <br className="hidden sm:block" />
              たった1時間の送迎の合間に。
              <br />
              親の当番は一切なし。
              <br className="hidden sm:block" />
              親子で一緒に通える、新しいサードプレイスがここにあります。
            </p>
          </motion.div>

          {/* Campaign badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="mb-4"
          >
            <span
              className="inline-block bg-[#E07C3A] text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-md"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              🎁 今なら入会で道着無料プレゼント！
            </span>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10"
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScjQ7d1my6etqhc5pIhTpyQqi2mbTDweCaeTzLpR-5HH1mg_A/viewform?usp=sharing&ouid=100710576726757638911"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center gap-2
                px-8 py-4 rounded-xl
                bg-[#E07C3A] hover:bg-[#c96a2e] active:bg-[#b55e28]
                text-white font-bold text-base sm:text-lg
                shadow-lg shadow-[#E07C3A]/30
                transition-all duration-300 hover:shadow-xl hover:shadow-[#E07C3A]/40
                hover:-translate-y-0.5
              "
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <Shield className="w-5 h-5" />
              無料体験に申し込む
            </a>
            <a
              href="https://lin.ee/pTFTiBg"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center gap-2
                px-6 py-4 rounded-xl
                bg-[#06C755] hover:bg-[#05b04c]
                text-white font-medium text-sm sm:text-base
                transition-all duration-300
              "
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <MessageCircle className="w-4 h-4" />
              LINE友だち追加で予約
            </a>
          </motion.div>

          {/* Pressure relief notice */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="max-w-[600px]"
          >
            <div className="flex items-start gap-3 px-4 py-3 rounded-xl bg-[#5B7B5E]/20 backdrop-blur-sm border border-[#5B7B5E]/30">
              <div className="flex-shrink-0 mt-0.5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="text-[#8BC48A]"
                >
                  <path
                    d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm-1 15l-5-5 1.41-1.41L9 12.17l7.59-7.59L18 6l-9 9z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                <strong className="text-[#8BC48A] font-semibold">※もちろん、お子様だけ・大人ひとりでの入会も大歓迎！</strong>
              </p>
            </div>
          </motion.div>

          {/* Quick info badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex flex-wrap gap-2 sm:gap-3 mt-8 sm:mt-10"
          >
            {[
              { icon: Clock, text: "親の当番なし" },
              { icon: Shield, text: "初心者歓迎" },
              { icon: MapPin, text: "上伊那エリア" },
            ].map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 backdrop-blur-sm border border-white/10 text-white/70 text-xs"
              >
                <badge.icon className="w-3 h-3 text-[#E07C3A]/80" />
                <span>{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
        >
          <span className="text-white/40 text-[10px] tracking-widest uppercase" style={{ fontFamily: "var(--font-heading)" }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-white/40" />
          </motion.div>
        </motion.div>

        {/* Bottom wave divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto block"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
              fill="#F8F1E7"
            />
          </svg>
        </div>
      </section>

      {/* ===== ② 哲学とメソッド ===== */}
      <PhilosophySection />

      {/* ===== ③ 共感のサポートチーム ===== */}
      <TeamSection />

      {/* ===== ④ ビフォーアフター ===== */}
      <BeforeAfterSection />

      {/* ===== ⑤ ライフスタイルハック ===== */}
      <LifestyleHackSection />

      {/* ===== ⑥ アクセス情報（全6拠点） ===== */}
      <AccessSection />

      {/* ===== ⑦ Instagramフィード ===== */}
      <InstagramSection />

      {/* ===== ⑧ 体験フロー ===== */}
      <TrialFlowSection />

      {/* ===== ⑨ 料金・FAQ ===== */}
      <PricingFaqSection />

      {/* ===== ⑩ Closing CTA ===== */}
      <ClosingCtaSection />

      {/* ===== Footer ===== */}
      <Footer />

      {/* ===== Sticky CTA（スマホ固定） ===== */}
      <StickyCta />
    </div>
  );
}
