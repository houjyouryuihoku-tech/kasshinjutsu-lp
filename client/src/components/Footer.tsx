/**
 * Footer — サイトフッター
 * Design: ヒューマン・ウォーム — ネイビー背景、シンプルで信頼感のあるフッター
 */

export default function Footer() {
  return (
    <footer className="py-10 sm:py-14" style={{ backgroundColor: "#131D30" }}>
      <div className="container">
        <div className="text-center">
          {/* Dojo name */}
          <p
            className="text-white/60 text-xs sm:text-sm tracking-wider mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            活心術 峰丈流護身武道 伊北支部
          </p>
          <p className="text-white/30 text-[10px] sm:text-xs mb-6">
            長野県上伊那エリア｜護身武道道場
          </p>

          {/* Navigation links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
            {[
              { label: "哲学とメソッド", href: "#philosophy" },
              { label: "指導員紹介", href: "#team" },
              { label: "アクセス", href: "#access" },
              { label: "料金・FAQ", href: "#pricing-faq" },
              { label: "無料体験", href: "#trial" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/30 hover:text-white/60 text-xs transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-12 h-px bg-white/10 mx-auto mb-6" />

          {/* Copyright */}
          <p className="text-white/20 text-[10px] sm:text-xs">
            &copy; {new Date().getFullYear()} 活心術 峰丈流護身武道 伊北支部. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
