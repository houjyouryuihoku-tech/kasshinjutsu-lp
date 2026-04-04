import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "哲学", href: "#philosophy" },
  { label: "指導員", href: "#team" },
  { label: "アクセス", href: "#access" },
  { label: "料金・FAQ", href: "#pricing-faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-[#1A2744]/90 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <a
            href="#"
            className="text-white font-bold text-xl tracking-wide"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            活心術 峰丈流護身武道 伊北支部
          </a>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScjQ7d1my6etqhc5pIhTpyQqi2mbTDweCaeTzLpR-5HH1mg_A/viewform?usp=sharing&ouid=100710576726757638911"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center
                px-4 py-2 rounded-lg
                bg-[#E07C3A] hover:bg-[#c96a2e]
                text-white font-bold text-sm
                transition-all duration-200
              "
              style={{ fontFamily: "var(--font-heading)" }}
            >
              無料体験
            </a>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-white p-1"
            aria-label="メニューを開く"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 left-0 right-0 z-40 bg-[#1A2744]/95 backdrop-blur-md border-b border-white/[0.08] sm:hidden"
          >
            <nav className="container flex flex-col py-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-white/80 hover:text-white text-base py-3 border-b border-white/[0.06] last:border-b-0 transition-colors duration-200"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScjQ7d1my6etqhc5pIhTpyQqi2mbTDweCaeTzLpR-5HH1mg_A/viewform?usp=sharing&ouid=100710576726757638911"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="
                  mt-3 flex items-center justify-center
                  px-4 py-3 rounded-xl
                  bg-[#E07C3A] hover:bg-[#c96a2e]
                  text-white font-bold text-base
                  transition-all duration-200
                "
                style={{ fontFamily: "var(--font-heading)" }}
              >
                無料体験に申し込む
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
