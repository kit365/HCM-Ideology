import React from 'react';
import { Flag, Users, Globe, Heart, BookOpen, Shield } from 'lucide-react';

// --- DATA (Giữ nguyên) ---
const thoughts = [
  {
    icon: Flag,
    title: 'Quyền Dân Tộc Thiêng Liêng',
    description: 'Từ quyền con người nâng lên thành quyền dân tộc. Bác khẳng định: "Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng".',
  },
  {
    icon: Heart,
    title: 'Độc Lập Gắn Liền Hạnh Phúc',
    description: 'Độc lập phải thiết thực. "Nếu nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì".',
  },
  {
    icon: BookOpen,
    title: 'Con Đường Cách Mạng Vô Sản',
    description: 'Rút kinh nghiệm từ lịch sử, Bác kết luận: "Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản".',
  },
  {
    icon: Users,
    title: 'Đảng Lãnh Đạo & Đại Đoàn Kết',
    description: 'Cách mạng là sự nghiệp của quần chúng, do Đảng Cộng sản lãnh đạo, dựa trên nền tảng liên minh công - nông vững chắc.',
  },
  {
    icon: Globe,
    title: 'Tính Chủ Động & Sáng Tạo',
    description: 'Khác với quan điểm cũ, Bác khẳng định cách mạng thuộc địa có thể giành thắng lợi trước cách mạng vô sản ở chính quốc.',
  },
  {
    icon: Shield,
    title: 'Phương Pháp Bạo Lực Cách Mạng',
    description: 'Sử dụng sức mạnh tổng hợp: bạo lực chính trị kết hợp bạo lực vũ trang để đập tan bạo lực phản cách mạng của kẻ thù.',
  },
];

// --- STYLES ---
const AvantGardeStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Manrope:wght@300;400;600&display=swap');

    :root {
      --primary: #8B2323;
      --accent: #C9A227;
      --bg: #F4F1EA;
      --text: #222;
    }

    .avant-section {
      background-color: var(--bg);
      color: var(--text);
      font-family: 'Manrope', sans-serif;
      position: relative;
      overflow: hidden;
      
      /* Họa tiết nền */
      background-image: 
        radial-gradient(#d1d1d1 1px, transparent 1px),
        linear-gradient(to bottom right, rgba(244, 241, 234,0.9), rgba(230, 225, 215, 0.8));
      background-size: 30px 30px, cover;

      /* --- CẬP NHẬT KHOẢNG CÁCH (PADDING) --- */
      padding-top: 10rem;    /* Cách trên 1 khoảng lớn (160px) */
      padding-bottom: 10rem; /* Cách dưới 1 khoảng lớn để tránh bị cắt nội dung */
    }

    /* Chữ nền khổng lồ */
    .big-typo-bg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-5deg);
      font-family: 'Cinzel', serif;
      font-weight: 900;
      font-size: 15vw;
      line-height: 0.8;
      color: transparent;
      -webkit-text-stroke: 2px rgba(139, 35, 35, 0.05);
      pointer-events: none;
      user-select: none;
      white-space: nowrap;
      z-index: 0;
    }

    /* Card Design */
    .avant-card {
      position: relative;
      background: #fff;
      padding: 3rem 2.5rem 2.5rem 2.5rem;
      border-left: 5px solid var(--primary);
      box-shadow: 15px 20px 40px rgba(0,0,0,0.08);
      transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      z-index: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    .avant-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--accent);
      z-index: -1;
      transform: translate(8px, 8px);
      opacity: 0;
      transition: all 0.4s ease;
    }

    .avant-card:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 20px 30px 50px rgba(139, 35, 35, 0.15);
    }
    
    .avant-card:hover::before {
      opacity: 0.2;
      transform: translate(12px, 12px);
    }

    /* Icon nổi */
    .floating-icon-box {
      position: absolute;
      top: -25px;
      left: 2rem;
      width: 60px;
      height: 60px;
      background: var(--primary);
      color: var(--accent);
      display: flex;
      align-items: center;
      justify-content: center;
      transform: rotate(-10deg);
      box-shadow: 5px 5px 15px rgba(0,0,0,0.2);
      transition: all 0.4s ease;
      border: 2px solid #fff;
    }

    .avant-card:hover .floating-icon-box {
      transform: rotate(0deg) scale(1.1);
      background: var(--accent);
      color: var(--primary);
      border-color: var(--primary);
    }

    .thought-title {
      font-family: 'Playfair Display', serif;
      font-size: 1.6rem;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 1.2rem;
      line-height: 1.3;
      margin-top: 1rem;
    }

    .thought-desc {
      font-family: 'Manrope', sans-serif;
      font-size: 1.05rem;
      line-height: 1.7;
      color: #555;
      text-align: justify;
      flex-grow: 1;
    }

    /* Layout so le */
    @media (min-width: 1024px) {
      .masonry-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 4rem 2rem;
        align-items: start;
      }
      .masonry-grid > div:nth-child(2),
      .masonry-grid > div:nth-child(5) {
         margin-top: 6rem; 
      }
      .masonry-grid > div:nth-child(3),
      .masonry-grid > div:nth-child(6) {
         margin-top: 3rem;
      }
    }
  `}</style>
);

export function KeyThoughts() {
  return (
    <>
      <AvantGardeStyles />
      {/* Không cần thêm class padding ở đây nữa vì đã set cứng trong CSS .avant-section */}
      <section id="tu-tuong" className="avant-section">
        
        {/* BIG TYPOGRAPHY BACKGROUND */}
        <div className="big-typo-bg">
          TƯ TƯỞNG<br/>HỒ CHÍ MINH
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* HEADER SECTION */}
          <div className="text-center mb-24 relative">
             {/* Đường trang trí mờ */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
            
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-[#8B2323]"></div>
              <span 
                className="text-sm font-black tracking-[0.2em] uppercase text-[#8B2323]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Hệ thống quan điểm
              </span>
              <div className="w-16 h-[2px] bg-[#8B2323]"></div>
            </div>

            <h2 
              className="text-5xl md:text-7xl font-black text-[#1A1A1A] mb-8 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Giá Trị <span className="text-[#8B2323] inline-block relative">Cốt Lõi
                <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 0, 100 5" stroke="#C9A227" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            
            <p 
              className="text-xl text-gray-700 max-w-3xl mx-auto font-medium"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Những luận điểm sáng tạo, khoa học, là kim chỉ nam cho con đường giải phóng dân tộc.
            </p>
          </div>

          {/* CARDS GRID */}
          <div className="masonry-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
            {thoughts.map((thought, index) => {
              const Icon = thought.icon;
              return (
                <div key={index} className="avant-card group">
                  <div className="floating-icon-box">
                    <Icon className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <h3 className="thought-title group-hover:text-[#8B2323] transition-colors">
                      {thought.title}
                    </h3>
                    <p className="thought-desc">
                      {thought.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}