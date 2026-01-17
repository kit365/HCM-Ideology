import React from 'react';
import { Quote, Star } from 'lucide-react';

import doclaptudoImg from '../utils/picture/doclaptudo.png';
import doanketImg from '../utils/picture/doanket.png';
import danlachuImg from '../utils/picture/danlachu.png';
import dangcotheImg from '../utils/picture/dangcothe.png';
import doanketmotnguoiImg from '../utils/picture/doanketmotnguoi.png';
import apbucImg from '../utils/picture/apbuc.png';

// --- DATA (Giữ nguyên) ---
const quotes = [
  {
    text: 'Không có gì quý hơn độc lập, tự do',
    context: 'Khẳng định giá trị tối thượng của dân tộc',
    image: doclaptudoImg
  },
  {
    text: 'Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công',
    context: 'Sức mạnh của khối đại đoàn kết toàn dân',
    image: doanketImg
  },
  {
    text: 'Dân là chủ, nước là nhà. Đã là chủ, đã là nhà, thì việc nhà, việc nước, mỗi người dân phải lo',
    context: 'Về quyền và trách nhiệm làm chủ',
    image: danlachuImg
  },
  {
    text: 'Đảng có thể, chính phủ có thể, nhưng có thể nhất vẫn là nhân dân',
    context: 'Vai trò quyết định của quần chúng',
    image: dangcotheImg
  },
  {
    text: 'Chúng ta phải đoàn kết như một người',
    context: 'Tinh thần đấu tranh giải phóng',
    image: doanketmotnguoiImg
  },
  {
    text: 'Chỉ có chủ nghĩa xã hội, chủ nghĩa cộng sản mới giải phóng được các dân tộc bị áp bức',
    context: 'Con đường cứu nước đúng đắn',
    image: apbucImg
  },
];

// --- STYLES ---
const QuoteStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Manrope:wght@300;400;600&display=swap');
    
    :root {
      --primary: #8B2323;
      --accent: #C9A227;
      --bg: #F4F1EA;
      --text: #222;
    }

    .quotes-section {
      background-color: var(--bg);
      color: var(--text);
      font-family: 'Manrope', sans-serif;
      position: relative;
      background-image: radial-gradient(#d1d1d1 1px, transparent 1px);
      background-size: 30px 30px;
    }

    .quote-card {
      position: relative;
      overflow: hidden;
      border-radius: 4px;
      border: 4px solid white;
      box-shadow: 0 15px 35px rgba(0,0,0,0.2);
      transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      height: 100%;
      min-height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .quote-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 25px 50px rgba(139, 35, 35, 0.3);
      border-color: var(--accent);
    }

    .card-bg-img {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      object-fit: cover;
      filter: grayscale(100%) blur(2px) brightness(0.6);
      transform: scale(1.05);
      transition: all 0.7s ease;
    }

    .quote-card:hover .card-bg-img {
      filter: grayscale(20%) blur(0px) brightness(0.8);
      transform: scale(1.15);
    }

    .card-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.95) 10%, rgba(60, 10, 10, 0.6) 50%, rgba(0,0,0,0.2) 100%);
      z-index: 1;
    }

    .card-content {
      position: relative;
      z-index: 2;
      padding: 30px;
      color: white;
      transform: translateY(0);
      transition: transform 0.5s ease;
    }

    .quote-icon { color: var(--accent); margin-bottom: 15px; opacity: 0.8; }
    .quote-text { font-family: 'Playfair Display', serif; font-size: 1.5rem; line-height: 1.4; margin-bottom: 20px; text-shadow: 0 2px 4px rgba(0,0,0,0.5); border-left: 3px solid var(--primary); padding-left: 15px; }
    .quote-context { font-family: 'Manrope', sans-serif; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; color: rgba(255,255,255,0.7); border-top: 1px solid rgba(255,255,255,0.2); padding-top: 15px; display: inline-block; }
    
    .quote-card:hover .quote-text { color: #fff; border-left-color: var(--accent); }
    .quote-card:hover .quote-context { color: var(--accent); }

    /* MONUMENT BOX */
    .monument-box {
      background-color: var(--primary);
      position: relative;
      padding: 60px 40px;
      color: white;
      text-align: center;
      box-shadow: 0 20px 60px rgba(139, 35, 35, 0.4);
      border: 1px solid rgba(0,0,0,0.2);
      overflow: hidden;
    }

    .monument-border {
      position: absolute;
      top: 10px; bottom: 10px; left: 10px; right: 10px;
      border: 2px solid var(--accent);
      pointer-events: none;
    }
    
    .monument-border::after {
      content: ''; position: absolute; inset: 4px; border: 1px dashed rgba(201, 162, 39, 0.5);
    }

    .star-bg {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 400px; height: 400px;
      color: var(--accent);
      opacity: 0.05;
      pointer-events: none;
    }
  `}</style>
);

export function Quotes() {
  return (
    <>
      <QuoteStyles />
      <section id="trich-dan" className="quotes-section py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-[#C9A227]"></div>
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#8B2323]" style={{ fontFamily: "'Cinzel', serif" }}>
                Di Sản Tư Tưởng
              </span>
              <div className="w-12 h-px bg-[#C9A227]"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Lời Vàng Ngọc
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              Những tư tưởng vĩ đại sống mãi với thời gian
            </p>
          </div>

          {/* QUOTES GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {quotes.map((quote, index) => (
              <div key={index} className="h-full">
                <div className="quote-card group">
                  <img src={quote.image} alt="Background" className="card-bg-img" />
                  <div className="card-overlay"></div>
                  <div className="card-content">
                    <Quote className="quote-icon w-8 h-8" />
                    <blockquote className="quote-text">"{quote.text}"</blockquote>
                    <div className="quote-context">{quote.context}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* --- GIÁ TRỊ TRƯỜNG TỒN --- */}
          <div className="relative mt-32 md:mt-48">
            <div className="monument-box">
              <Star className="star-bg" strokeWidth={1} />
              <div className="monument-border"></div>

              <div className="relative z-10 max-w-4xl mx-auto">
                <span className="block text-[#C9A227] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
                  Tổng Kết
                </span>

                <h3 className="text-4xl md:text-5xl text-white mb-8 font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Giá Trị Trường Tồn
                </h3>

                <div className="flex justify-center items-center gap-4 mb-8 opacity-70">
                  <div className="h-px w-16 bg-[#C9A227]"></div>
                  <Star className="w-4 h-4 text-[#C9A227] fill-[#C9A227]" />
                  <div className="h-px w-16 bg-[#C9A227]"></div>
                </div>

                {/* --- CẬP NHẬT: ĐỔI FONT CHỮ SANG TIMES NEW ROMAN --- */}
                <div
                  className="space-y-8 text-xl md:text-2xl leading-relaxed text-white/95"
                  style={{ fontFamily: '"Times New Roman", Times, serif' }}
                >
                  <p>
                    Tư tưởng Hồ Chí Minh về cách mạng giải phóng dân tộc đã trở thành <span className="text-[#C9A227] font-bold">ngọn cờ tư tưởng</span>,
                    kim chỉ nam dẫn đường cho cách mạng Việt Nam giành thắng lợi vẻ vang.
                  </p>
                  <p className="italic">
                    "Tài sản tinh thần vô giá của Đảng và dân tộc ta, mãi mãi soi đường cho sự nghiệp cách mạng của nhân dân ta giành thắng lợi."
                  </p>
                </div>

              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-full h-full border-r-4 border-b-4 border-[#C9A227]/20 pointer-events-none"></div>
          </div>
        </div>
      </section>
    </>
  );
}