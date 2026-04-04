/**
 * HeroSlideshow Component
 * Design: ヒューマン・ウォーム — ソフトフェード＋スケールのスライドショー
 * 3枚の画像（子供・父親・母親）をクロスフェードで切り替え
 * 各スライドにはキャプションテキストを表示
 */
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  src: string;
  alt: string;
  caption: string;
}

const slides: Slide[] = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663357873617/DxdqmbcxcTUMAvyLhMFoRh/hero-child-UyeZbYpytuf4GzNsivnzSH.webp",
    alt: "笑顔で稽古に励む子供",
    caption: "子は育つ",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663357873617/DxdqmbcxcTUMAvyLhMFoRh/hero-father-gbry9NejRjq3B7uUf5iN7u.webp",
    alt: "力強くミットを打つ父親",
    caption: "父はカッコよく",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663357873617/DxdqmbcxcTUMAvyLhMFoRh/hero-mother-afmrSPyi6sJ2BjF9MTC6Mb.webp",
    alt: "凛とした姿勢で型を行う母親",
    caption: "母は癒やされ",
  },
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        >
          <img
            src={slides[currentIndex].src}
            alt={slides[currentIndex].alt}
            className="w-full h-full object-cover"
            loading={currentIndex === 0 ? "eager" : "lazy"}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A2744]/70 via-[#1A2744]/50 to-[#1A2744]/80" />
        </motion.div>
      </AnimatePresence>

      {/* Slide caption badge */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10 sm:bottom-8">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
              flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium
              transition-all duration-500 backdrop-blur-sm
              ${
                index === currentIndex
                  ? "bg-white/25 text-white border border-white/40 shadow-lg"
                  : "bg-white/10 text-white/60 border border-white/10 hover:bg-white/15 hover:text-white/80"
              }
            `}
            aria-label={`スライド ${index + 1}: ${slide.caption}`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                index === currentIndex ? "bg-[#E07C3A]" : "bg-white/40"
              }`}
            />
            <span className="font-heading hidden sm:inline" style={{ fontFamily: "var(--font-heading)" }}>
              {slide.caption}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
