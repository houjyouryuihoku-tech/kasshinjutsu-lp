/**
 * InstagramSection — ⑦ 道場のリアルな日常（Instagramフィード埋め込み枠）
 * 「厳しすぎないかな…？」という不安を払拭するための日常写真セクション
 * プレースホルダー：スクリプト挿入枠 + ダミー画像グリッド
 *
 * 【実装メモ】
 * 実際のInstagram埋め込みには以下の方法があります：
 * 1. Instagram Basic Display API / Graph API を使用
 * 2. SnapWidget, Elfsight 等のサードパーティウィジェットを使用
 * 3. 各投稿のoEmbedを個別に埋め込む
 *
 * 下記のプレースホルダーを実際のスクリプトやAPIレスポンスに差し替えてください。
 */
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Instagram, ExternalLink } from "lucide-react";

export default function InstagramSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://snapwidget.com/js/snapwidget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      id="instagram"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ backgroundColor: "#F8F1E7" }}
    >
      <div className="container">
        {/* Section heading */}
        <div ref={headingRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headingVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span
              className="inline-block text-[#E07C3A] text-xs sm:text-sm font-semibold tracking-[0.15em] mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              DAILY LIFE
            </span>
            <h2
              className="text-[#1A2744] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug sm:leading-snug mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              「厳しすぎないかな…？」
              <br />
              <span className="text-[#E07C3A]">道場のリアルな日常</span>をご覧ください
            </h2>
            <p className="text-[#1A2744]/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              活心術 峰丈流護身武道 伊北支部の稽古風景をInstagramで発信しています。
              <br />
              笑顔あふれる日常をぜひご覧ください。
            </p>
          </motion.div>
        </div>

        {/*
          ========================================
          Instagram埋め込みプレースホルダー
          ========================================
          【差し替え方法】
          以下のダミーグリッドを、実際のInstagramウィジェットに差し替えてください。

          例1: Elfsight Instagram Feed Widget
          <script src="https://static.elfsight.com/platform/platform.js" async></script>
          <div class="elfsight-app-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"></div>

          例2: SnapWidget
          <iframe src="https://snapwidget.com/embed/XXXXXX" ...></iframe>

          例3: Instagram oEmbed（個別投稿）
          <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/XXXXX/" ...></blockquote>
          <script async src="//www.instagram.com/embed.js"></script>
          ========================================
        */}

        {/* Placeholder grid */}
        <div ref={gridRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={gridVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Instagram widget placeholder container */}
            <div
              id="instagram-feed-container"
              className="max-w-4xl mx-auto"
            >
              <iframe src="https://snapwidget.com/embed/1113346" className="snapwidget-widget" allowTransparency={true} frameBorder={0} scrolling="no" style={{ border: "none", overflow: "hidden", width: "100%" }} title="Posts from Instagram"></iframe>
            </div>

            {/* Instagram link */}
            <div className="text-center mt-8">
              <a
                href="https://www.instagram.com/houjyouryu_ihoku?igsh=MTBqazYwZ2o2MXYybg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2 px-6 py-3 rounded-xl
                  bg-gradient-to-r from-[#E07C3A] to-[#c96a2e]
                  text-white font-medium text-sm sm:text-base
                  shadow-md shadow-[#E07C3A]/20
                  hover:shadow-lg hover:shadow-[#E07C3A]/30
                  transition-all duration-300 hover:-translate-y-0.5
                "
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <Instagram className="w-4 h-4" />
                稽古風景をチェックする
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
