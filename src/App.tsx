import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { NationalIndependence } from './components/NationalIndependence';
import { LiberationRevolution } from './components/LiberationRevolution';
import { KeyThoughts } from './components/KeyThoughts';
import { Timeline } from './components/Timeline';
import { Quotes } from './components/Quotes';
import { Footer } from './components/Footer';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'gioi-thieu', label: 'Giới Thiệu' },
    { id: 'doc-lap-dan-toc', label: 'Độc Lập' },
    { id: 'cach-mang-giai-phong', label: 'Cách Mạng' },
    { id: 'tu-tuong', label: 'Tư Tưởng' },
    { id: 'lich-su', label: 'Lịch Sử' },
    { id: 'trich-dan', label: 'Trích Dẫn' },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Navigation - Refined minimal style */}
      <nav className="fixed top-0 left-0 right-0 bg-[#FDFBF7]/90 backdrop-blur-sm z-50 border-b border-black/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-12">
            {/* Logo */}
            <div className="flex items-center">
              <span
                className="text-xs tracking-[0.08em] uppercase text-[#7B2D3E] font-medium"
                style={{ fontFamily: 'system-ui, sans-serif' }}
              >
                Tư Tưởng HCM
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-4 xl:gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[#4A4A4A] hover:text-[#7B2D3E] transition-colors text-[0.65rem] tracking-[0.08em] uppercase font-medium whitespace-nowrap"
                  style={{ fontFamily: 'system-ui, sans-serif' }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#4A4A4A] hover:text-[#7B2D3E] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-black/5">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-[#4A4A4A] hover:text-[#7B2D3E] transition-colors text-xs tracking-[0.08em] uppercase font-medium py-1"
                    style={{ fontFamily: 'system-ui, sans-serif' }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-12">
        <Hero />
        <Introduction />
        <NationalIndependence />
        <LiberationRevolution />
        <KeyThoughts />
        <Timeline />
        <Quotes />
      </main>
      <Footer />
    </div>
  );
}