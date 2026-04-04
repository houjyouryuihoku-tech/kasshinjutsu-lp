/**
 * AccessSection — ⑥ アクセス情報（全6拠点マップのプレースホルダー設計）
 * ダミー地図を生成せず、ユーザーが後から正確な情報を入力できる精巧なプレースホルダー
 * 各拠点：名称・住所・施設名・Googleマップ埋め込み枠（iframe用ダミーコード）
 */
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Navigation, Clock } from "lucide-react";

interface Location {
  id: number;
  name: string;
  postalCode: string;
  addressLine: string;
  facilityName: string;
  mapEmbedUrl: string;
  schedule: string[];
}

const locations: Location[] = [
  {
    id: 1,
    name: "南箕輪教室（月）",
    postalCode: "〒399-4511",
    addressLine: "長野県上伊那郡南箕輪村北殿4802−1",
    facilityName: "南箕輪村体育館 柔剣道場",
    mapEmbedUrl: "https://www.google.com/maps?q=%E5%8D%97%E7%AE%95%E8%BC%AA%E6%9D%91%E4%BD%93%E8%82%B2%E9%A4%A8+%E9%95%B7%E9%87%8E%E7%9C%8C%E4%B8%8A%E4%BC%8A%E9%82%A3%E9%83%A1%E5%8D%97%E7%AE%95%E8%BC%AA%E6%9D%91%E5%8C%97%E6%AE%BF4802-1&output=embed",
    schedule: ["毎週月曜日", "合同 19:00〜20:10"],
  },
  {
    id: 2,
    name: "辰野荒神山教室（火）",
    postalCode: "〒399-0424",
    addressLine: "長野県上伊那郡辰野町赤羽1817",
    facilityName: "辰野町荒神山武道館",
    mapEmbedUrl: "https://www.google.com/maps?q=%E8%BE%B0%E9%87%8E%E7%94%BA%E8%8D%92%E7%A5%9E%E5%B1%B1%E6%AD%A6%E9%81%93%E9%A4%A8+%E9%95%B7%E9%87%8E%E7%9C%8C%E4%B8%8A%E4%BC%8A%E9%82%A3%E9%83%A1%E8%BE%B0%E9%87%8E%E7%94%BA%E8%B5%A4%E7%BE%BD1817&output=embed",
    schedule: [
      "毎週火曜日",
      "少年部 18:45〜19:55",
      "一般部 20:00〜21:10",
    ],
  },
  {
    id: 3,
    name: "箕輪八乙女教室（水）",
    postalCode: "〒399-4601",
    addressLine: "長野県上伊那郡箕輪町中箕輪4220",
    facilityName: "北西部多目的センター",
    mapEmbedUrl: "https://www.google.com/maps?q=%E5%8C%97%E8%A5%BF%E9%83%A8%E5%A4%9A%E7%9B%AE%E7%9A%84%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC+%E9%95%B7%E9%87%8E%E7%9C%8C%E4%B8%8A%E4%BC%8A%E9%82%A3%E9%83%A1%E7%AE%95%E8%BC%AA%E7%94%BA%E4%B8%AD%E7%AE%95%E8%BC%AA4220&output=embed",
    schedule: [
      "毎週水曜日",
      "少年部 18:30〜19:40",
      "一般部 20:00〜21:00",
    ],
  },
  {
    id: 4,
    name: "辰野中央教室（木）",
    postalCode: "〒399-0428",
    addressLine: "長野県上伊那郡辰野町伊那富2802-7",
    facilityName: "辰野西小学校あおぞら体育館",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1614.3659242563183!2d137.98799!3d35.9779808!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601cfd3573ca962f%3A0xfff3daae3f9f977c!2z44GC44GJ44Ge44KJ5L2T6IKy6aSo!5e0!3m2!1sja!2sjp!4v1775266717411!5m2!1sja!2sjp",
    schedule: [
      "毎週木曜日",
      "少年部 19:00〜20:10",
      "一般部 20:15〜21:25",
    ],
  },
  {
    id: 5,
    name: "南箕輪教室（金）",
    postalCode: "〒399-4511",
    addressLine: "長野県上伊那郡南箕輪村北殿4802−1",
    facilityName: "南箕輪村体育館 柔剣道場",
    mapEmbedUrl: "https://www.google.com/maps?q=%E5%8D%97%E7%AE%95%E8%BC%AA%E6%9D%91%E4%BD%93%E8%82%B2%E9%A4%A8+%E9%95%B7%E9%87%8E%E7%9C%8C%E4%B8%8A%E4%BC%8A%E9%82%A3%E9%83%A1%E5%8D%97%E7%AE%95%E8%BC%AA%E6%9D%91%E5%8C%97%E6%AE%BF4802-1&output=embed",
    schedule: [
      "毎週金曜日",
      "合同 18:45〜19:55",
      "柔術 20:00〜21:00",
    ],
  },
  {
    id: 6,
    name: "箕輪中央教室（土）",
    postalCode: "〒399-4601",
    addressLine: "長野県上伊那郡箕輪町中箕輪松島10291",
    facilityName: "箕輪町文化センター",
    mapEmbedUrl: "https://www.google.com/maps?q=%E7%AE%95%E8%BC%AA%E7%94%BA%E6%96%87%E5%8C%96%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC+%E9%95%B7%E9%87%8E%E7%9C%8C%E4%B8%8A%E4%BC%8A%E9%82%A3%E9%83%A1%E7%AE%95%E8%BC%AA%E7%94%BA%E4%B8%AD%E7%AE%95%E8%BC%AA%E6%9D%BE%E5%B3%B610291&output=embed",
    schedule: ["毎週土曜日", "合同 19:30〜20:40"],
  },
];

function MapPlaceholder({ location }: { location: Location }) {
  if (location.mapEmbedUrl) {
    return (
      <iframe
        src={location.mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`${location.name}の地図`}
      />
    );
  }

  return (
    <div className="w-full h-full bg-[#1A2744]/5 flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[#1A2744]/15">
      <MapPin className="w-8 h-8 text-[#1A2744]/20" />
      <p className="text-[#1A2744]/30 text-xs text-center px-4" style={{ fontFamily: "var(--font-heading)" }}>
        Googleマップ埋め込み枠
        <br />
        <span className="text-[10px]">
          {/* 実装メモ：以下のようなiframe srcを設定してください */}
          {/* src="https://www.google.com/maps/embed?pb=..." */}
        </span>
      </p>
    </div>
  );
}

export default function AccessSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="access" className="relative py-20 sm:py-28 overflow-hidden" style={{ backgroundColor: "#1A2744" }}>
      {/* Decorative */}
      <div className="absolute top-10 right-[-80px] w-[250px] h-[250px] rounded-full bg-[#E07C3A]/5 blur-3xl" />

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
              ACCESS
            </span>
            <h2
              className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug sm:leading-snug mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              上伊那エリア<span className="text-[#E07C3A]">全6拠点</span>
              <br />
              お近くの道場をお選びください
            </h2>
            <p className="text-white/50 text-sm sm:text-base max-w-xl mx-auto">
              活心術 峰丈流護身武道 伊北支部は全拠点振替自由。ライフスタイルに合わせて通えます。
            </p>
          </motion.div>
        </div>

        {/* Location grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 25 }}
              animate={gridVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.08] hover:border-white/[0.15] transition-all duration-400"
            >
              {/* Map area */}
              <div className="h-40 sm:h-44 w-full">
                <MapPlaceholder location={location} />
              </div>

              {/* Info */}
              <div className="p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-lg bg-[#E07C3A]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#E07C3A] text-xs font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                      {location.id}
                    </span>
                  </div>
                  <h3
                    className="text-white text-sm sm:text-base font-bold leading-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {location.name}
                  </h3>
                </div>

                <div className="flex items-start gap-1.5 mb-2">
                  <Navigation className="w-3 h-3 text-white/30 mt-1 flex-shrink-0" />
                  <div className="text-white/50 text-xs sm:text-sm leading-relaxed">
                    <p>{location.postalCode}</p>
                    <p>{location.addressLine}</p>
                    <p className="text-white/40 text-[11px]">{location.facilityName}</p>
                  </div>
                </div>

                <div className="flex items-start gap-1.5">
                  <Clock className="w-3 h-3 text-white/30 mt-0.5 flex-shrink-0" />
                  <div className="text-white/50 text-xs sm:text-sm">
                    {location.schedule.map((line, i) => (
                      <p key={i} className={i === 0 ? "font-medium text-white/60" : ""}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
            d="M0,50 C180,90 360,10 540,50 C720,90 900,10 1080,50 C1260,90 1380,60 1440,50 L1440,100 L0,100 Z"
            fill="#F8F1E7"
          />
        </svg>
      </div>
    </section>
  );
}
