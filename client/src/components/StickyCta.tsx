/**
 * StickyCta — スマホファーストで画面下部に常時固定表示されるCTA
 * メインCTA: LINE予約ボタン
 * サブCTA: Webフォームへのテキストリンク
 * スクロール後に表示、Hero Section表示中は非表示
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function StickyCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hero sectionの高さ（約100vh）を超えたら表示
      const scrollThreshold = window.innerHeight * 0.8;
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 sm:hidden"
        >
          {/* Gradient fade above the bar */}
          <div className="h-4 bg-gradient-to-t from-[#1A2744] to-transparent" />

          <div className="bg-[#1A2744] border-t border-white/10 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
            {/* Main CTA — LINE */}
            <a
              href="https://lin.ee/pTFTiBg"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center gap-2
                w-full px-6 py-3.5 rounded-xl
                bg-[#06C755] hover:bg-[#05b04c] active:bg-[#04a044]
                text-white font-bold text-sm
                shadow-lg shadow-[#06C755]/30
                transition-all duration-200
              "
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <MessageCircle className="w-5 h-5" />
              LINE友だち追加で予約
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
