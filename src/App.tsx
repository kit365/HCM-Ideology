import { useState } from 'react';
import { Menu, X, Presentation, User } from 'lucide-react';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { DeclarationVideo } from './components/DeclarationVideo';
import { LiberationRevolution } from './components/LiberationRevolution';
import { KeyThoughts } from './components/KeyThoughts';
import { Timeline } from './components/Timeline';
import { Quotes } from './components/Quotes';
import { Footer } from './components/Footer';
import { HousePresentation } from './components/HousePresentation';
import { Biography } from './components/Biography';
import { DailyInspiration } from './components/DailyInspiration';
import { KnowledgeQuiz } from './components/KnowledgeQuiz';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPresentation, setShowPresentation] = useState(false);
  const [showBiography, setShowBiography] = useState(false);

  // Nếu đang xem Presentation → render fullscreen
  if (showPresentation) {
    return <HousePresentation onClose={() => setShowPresentation(false)} />;
  }

  // Nếu đang xem Biography → render fullscreen
  if (showBiography) {
    return <Biography onClose={() => setShowBiography(false)} />;
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'gioi-thieu', label: 'Giới Thiệu' },
    { id: 'tuyen-ngon', label: 'Tuyên Ngôn' },
    { id: 'cach-mang-giai-phong', label: 'Cách Mạng' },
    { id: 'tu-tuong', label: 'Tư Tưởng' },
    { id: 'trac-nghiem', label: 'Trắc Nghiệm' },
    { id: 'lich-su', label: 'Lịch Sử' },
    { id: 'trich-dan', label: 'Trích Dẫn' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(180deg, rgba(45, 26, 26, 0.95) 0%, rgba(92, 34, 48, 0.9) 100%)',
        backdropFilter: 'blur(10px)',
        zIndex: 50,
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
      }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <span style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.2rem',
                color: 'white',
                fontWeight: 600
              }}>
                Tư Tưởng <span style={{ color: '#C9A227' }}>HCM</span>
              </span>
              {/* Biography Button */}
              <button
                onClick={() => setShowBiography(true)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  background: '#C9A227',
                  color: '#1A1A1A',
                  padding: '8px 14px',
                  borderRadius: 6,
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase' as const,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'system-ui, sans-serif'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#B8941F';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#C9A227';
                }}
              >
                <User className="w-3 h-3" />
                <span className="hidden sm:inline">Tiểu Sử</span>
                <span className="sm:hidden">Tiểu Sử</span>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase' as const,
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontFamily: 'system-ui, sans-serif',
                    padding: '8px 0'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#C9A227';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.8)',
                cursor: 'pointer',
                padding: 8
              }}
              className="lg:hidden"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: 16,
              paddingBottom: 16
            }} className="lg:hidden">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'rgba(255,255,255,0.8)',
                      fontSize: '0.8rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase' as const,
                      fontWeight: 500,
                      cursor: 'pointer',
                      textAlign: 'left' as const,
                      padding: '8px 0',
                      fontFamily: 'system-ui, sans-serif'
                    }}
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
      <main className="pt-16">
        <Hero />
        <Introduction />
        <DeclarationVideo />
        <LiberationRevolution />
        <KeyThoughts />
        <KnowledgeQuiz />
        <Timeline />
        <Quotes />
        <DailyInspiration />
      </main>
      <Footer />

      {/* Floating Presentation Button */}
      <button
        onClick={() => setShowPresentation(true)}
        style={{
          position: 'fixed',
          bottom: 32,
          left: 32,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          background: 'linear-gradient(135deg, #7B2D3E, #5C2230)',
          color: 'white',
          padding: '14px 24px',
          borderRadius: 100,
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 8px 30px rgba(123, 45, 62, 0.4)',
          transition: 'all 0.3s ease',
          fontFamily: 'system-ui, sans-serif'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(123, 45, 62, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(123, 45, 62, 0.4)';
        }}
      >
        <Presentation className="w-5 h-5" />
        <span style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>XÂY NHÀ</span>
      </button>
    </div>
  );
}