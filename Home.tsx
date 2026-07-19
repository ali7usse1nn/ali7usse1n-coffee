import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

/**
 * Ali7usse1n Coffee - Luxury Coffee Shop Landing Page
 * Design Philosophy: Luxury Minimalism with Warm Elegance
 * - Single screen view without scrolling
 * - Dark sophisticated background with warm gold accents
 * - Compact, efficient layout
 * - PDF menu download on button click
 */

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuDownload = () => {
    // Open PDF in new tab
    window.open("/manus-storage/coffee_menu_99575bcf.pdf", "_blank");
  };

  return (
    // Added dir="rtl" to support proper Arabic text flow and alignment
    <div dir="rtl" className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* Header - Compact */}
      <header className="bg-background/80 backdrop-blur-md border-b border-primary/20 py-3 flex-shrink-0">
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0">
              <span className="text-primary text-lg font-bold">☕</span>
            </div>
            <span className="font-playfair text-lg font-bold text-foreground hidden sm:inline">
              Ali7usse1n
            </span>
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-primary/10 rounded-lg transition-colors flex-shrink-0"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-primary" />
            ) : (
              <Menu className="w-5 h-5 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-primary/20 bg-card/50 backdrop-blur-sm">
            <div className="container py-3 space-y-2 text-sm text-right">
              <button className="block w-full text-right py-1 text-foreground hover:text-primary transition-colors">
                منيو الكافي
              </button>
              <button className="block w-full text-right py-1 text-foreground hover:text-primary transition-colors">
                عن الكافي
              </button>
              <button className="block w-full text-right py-1 text-foreground hover:text-primary transition-colors">
                اتصل بنا
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content - Single Screen */}
      <main className="container flex-1 flex flex-col justify-center py-4 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center h-full">
          {/* Left Side - Logo & Branding */}
          <div className="flex flex-col items-center justify-center space-y-4 animate-fade-in">
            {/* Coffee Cup Logo */}
            <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-3 lg:border-4 border-primary flex items-center justify-center bg-card/50 flex-shrink-0">
              <svg
                viewBox="0 0 100 100"
                className="w-14 h-14 lg:w-20 lg:h-20 text-primary"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                {/* Cup */}
                <path d="M 25 30 L 30 70 Q 30 80 40 80 L 60 80 Q 70 80 70 70 L 75 30 Z" />
                {/* Handle */}
                <path d="M 75 40 Q 85 40 85 50 Q 85 60 75 60" />
                {/* Steam */}
                <path d="M 40 25 Q 40 15 45 10" strokeLinecap="round" />
                <path d="M 50 28 Q 50 15 55 8" strokeLinecap="round" />
                <path d="M 60 25 Q 60 15 65 10" strokeLinecap="round" />
              </svg>
            </div>

            {/* Brand Name */}
            <div className="text-center">
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground tracking-wide">
                Ali7usse1n
              </h1>

              {/* Decorative Line with Accent */}
              <div className="flex items-center justify-center gap-2 my-2">
                <div className="w-8 lg:w-12 h-px bg-primary/40"></div>
                <span className="text-primary text-sm lg:text-base font-semibold tracking-widest">COFFEE</span>
                <div className="w-8 lg:w-12 h-px bg-primary/40"></div>
              </div>

              {/* Small Accent Dot */}
              <div className="w-2 h-2 rounded-full bg-primary mx-auto"></div>
            </div>

            {/* Description */}
            <p className="text-center text-foreground/60 text-xs lg:text-sm max-w-xs">
              تجربة قهوة فاخرة مع حلويات شهية
            </p>
          </div>

          {/* Right Side - Daily Offer Card */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="luxury-card w-full max-w-sm overflow-hidden rounded-xl border border-primary/10 shadow-xl">
              {/* Image */}
              <div className="relative h-48 lg:h-56 overflow-hidden bg-gradient-to-b from-black/20 to-black/40">
                <img
                  src="/manus-storage/coffee_hero_066d2dcb.png"
                  alt="Caramel Latte with Chocolate Cake"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                {/* Price Badge - Fixed position for RTL consistency */}
                <div className="absolute bottom-4 right-4 flex flex-col items-center justify-center">
                  <div className="w-16 lg:w-20 h-16 lg:h-20 rounded-full border-2 lg:border-3 border-primary flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm animate-pulse-soft">
                    <span className="text-lg lg:text-2xl font-bold text-primary">15</span>
                    <span className="text-xs text-primary mt-0.5">ريال</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 lg:p-6 bg-card">
                {/* Offer Label */}
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="h-px w-6 bg-primary/40"></div>
                  <span className="text-primary text-xs font-semibold tracking-widest">
                    عرض اليوم
                  </span>
                  <div className="h-px w-6 bg-primary/40"></div>
                </div>

                {/* Offer Title */}
                <h2 className="text-xl lg:text-2xl font-bold text-center text-foreground mb-2 leading-tight">
                  لاتيه كراميل
                  <br />
                  <span className="text-sm lg:text-base font-normal text-primary/80 mt-1 block">
                    مع كيكة الشوكولاتة
                  </span>
                </h2>

                {/* Decorative Element */}
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="h-px w-8 bg-primary/30"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <div className="h-px w-8 bg-primary/30"></div>
                </div>

                {/* Description */}
                <p className="text-center text-foreground/70 text-xs lg:text-sm leading-relaxed mb-4">
                  مزيج مثالي من الكراميل والقهوة مع شريحة شوكولاتة فاخرة
                </p>

                {/* CTA Button - Added native variant mapping */}
                <Button
                  variant="default"
                  className="w-full font-semibold py-2 lg:py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm lg:text-base"
                  onClick={handleMenuDownload}
                >
                  <span>منيو الكافي</span>
                  <span>📋</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Compact */}
      <footer className="border-t border-primary/20 bg-card/30 py-3 flex-shrink-0 text-center text-foreground/50 text-xs">
        <p>© 2026 Ali7usse1n Coffee | +966 50 123 4567</p>
      </footer>
    </div>
  );
}
