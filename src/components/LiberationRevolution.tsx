import React from 'react';
// IMPORT ẢNH CỦA BẠN
import cachMangImg from '../utils/picture/cachmanggiaiphong.png';

// --- DỮ LIỆU ---
const points = [
  {
    id: '01',
    title: 'Lựa chọn con đường cách mạng vô sản',
    content: 'Sau khi khảo cứu các cuộc cách mạng lớn trên thế giới, Người đi đến kết luận: "Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản".',
  },
  {
    id: '02',
    title: 'Sáng tạo trong trình tự giải phóng',
    content: 'Khác với lý thuyết kinh điển ở Châu Âu, Bác đặt nhiệm vụ giải phóng dân tộc lên hàng đầu: Giải phóng dân tộc -> Giải phóng xã hội -> Giải phóng giai cấp -> Giải phóng con người.',
  },
  {
    id: '03',
    title: 'Đảng Cộng sản lãnh đạo',
    content: 'Đảng không chỉ là đội tiên phong của giai cấp công nhân mà còn là đội tiên phong của nhân dân lao động và của cả dân tộc Việt Nam.',
  },
  {
    id: '04',
    title: 'Sức mạnh đại đoàn kết toàn dân',
    content: 'Cách mạng là sự nghiệp của quần chúng. Người quan niệm "Có dân là có tất cả", phải tập hợp rộng rãi mọi tầng lớp nhân dân yêu nước.',
  },
  {
    id: '05',
    title: 'Liên minh Công - Nông là nền tảng',
    content: 'Trong khối đại đoàn kết đó, liên minh giữa giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức là nền tảng, là "gốc" của cách mạng.',
  }
];

// --- STYLES ---
const LiberationStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Manrope:wght@300;400;500;600&display=swap');

    :root {
      --primary: #8B2323;
      --accent: #C9A227;
      --bg: #F4F1EA;
      --text: #222;
    }

    .liberation-section {
      background-color: var(--bg);
      color: var(--text);
      font-family: 'Manrope', sans-serif;
      position: relative;
      overflow: visible; /* Để sticky hoạt động tốt */
      background-image: radial-gradient(#d1d1d1 1px, transparent 1px);
      background-size: 30px 30px;
      padding-top: 8rem;
      padding-bottom: 8rem;
    }

    /* CARD DESIGN (Chuyển về viền trái cho danh sách dọc) */
    .point-card {
      background: #fff;
      border-left: 5px solid var(--primary); /* Viền trái đậm */
      padding: 2rem 1.5rem 2rem 5rem; /* Padding trái lớn để né số ID */
      position: relative;
      transition: all 0.3s ease;
      box-shadow: 5px 5px 20px rgba(0,0,0,0.03);
      border-radius: 0 4px 4px 0;
      margin-bottom: 2rem;
    }

    .point-card:hover {
      transform: translateX(10px);
      box-shadow: 10px 10px 30px rgba(139, 35, 35, 0.1);
      border-left-color: var(--accent);
    }

    /* Số ID mờ nằm ở đầu thẻ */
    .point-id {
      font-family: 'Cinzel', serif;
      font-weight: 900;
      color: rgba(139, 35, 35, 0.1);
      font-size: 3rem;
      position: absolute;
      top: 1.5rem;
      left: 1rem;
      line-height: 1;
      transition: all 0.3s;
    }

    .point-card:hover .point-id {
      color: var(--accent);
      opacity: 0.5;
      transform: scale(1.1);
    }

    .point-title {
      font-family: 'Playfair Display', serif;
      font-size: 1.4rem;
      font-weight: 700;
      color: #1A1A1A;
      margin-bottom: 0.8rem;
    }

    .point-content {
      font-family: 'Manrope', sans-serif;
      color: #555;
      line-height: 1.6;
      font-size: 1rem;
      text-align: justify;
    }

    /* IMAGE FRAME STYLE */
    .image-frame {
      position: relative;
      padding: 12px;
      border: 2px solid var(--primary);
      background: #fff;
      box-shadow: 20px 20px 0px rgba(139, 35, 35, 0.1); /* Bóng cứng tạo khối */
    }
    
    .image-frame::before {
      content: '';
      position: absolute;
      inset: -6px;
      border: 1px dashed var(--accent);
      z-index: -1;
    }

    .image-caption {
      margin-top: 1.5rem;
      text-align: center;
      font-family: 'Manrope', sans-serif;
      font-size: 0.9rem;
      font-style: italic;
      color: #666;
    }
    
    /* Quote Box dưới ảnh */
    .quote-badge {
        margin-top: 2rem;
        background: #fff;
        border: 1px solid rgba(0,0,0,0.05);
        border-left: 4px solid var(--accent);
        padding: 1.5rem;
        box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    }
  `}</style>
);

export function LiberationRevolution() {
  return (
    <>
      <LiberationStyles />
      <section id="cach-mang-giai-phong" className="liberation-section">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* HEADER SECTION */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-[#C9A227]"></div>
              <span 
                className="text-sm font-bold tracking-[0.2em] uppercase text-[#8B2323]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Con Đường & Lực Lượng
              </span>
              <div className="w-12 h-px bg-[#C9A227]"></div>
            </div>

            <h2 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Cách Mạng Giải Phóng
            </h2>
            
            <p 
              className="text-lg text-gray-600 max-w-3xl mx-auto italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Từ thất bại của các phong trào yêu nước cuối thế kỷ XIX, Hồ Chí Minh đã tìm thấy ánh sáng trong Luận cương của Lênin.
            </p>
          </div>

          {/* GRID: CONTENT LEFT - IMAGE RIGHT */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* 1. LEFT COLUMN: CONTENT (Các luận điểm) */}
            <div className="space-y-4">
              {points.map((point, index) => (
                <div key={index} className="point-card group">
                  {/* Số ID nằm bên trái */}
                  <span className="point-id">{point.id}</span>
                  
                  <div className="relative z-10">
                    <h3 className="point-title group-hover:text-[#8B2323] transition-colors">
                      {point.title}
                    </h3>
                    <p className="point-content">
                      {point.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 2. RIGHT COLUMN: IMAGE (Sticky - Trượt theo nội dung) */}
            <div className="lg:sticky lg:top-32">
              <div className="image-frame">
                <img
                  src={cachMangImg} 
                  alt="Cách mạng giải phóng"
                  className="w-full h-auto object-cover grayscale sepia-[0.2] contrast-110 block"
                />
              </div>
              <div className="image-caption">
                Nguyễn Ái Quốc tại Đại hội V Quốc tế Cộng sản
              </div>

              {/* Hộp trích dẫn nhỏ bổ trợ */}
              <div className="quote-badge">
                 <p className="text-[#8B2323] font-bold text-lg mb-2 font-serif text-center">
                   "Độc lập dân tộc gắn liền với chủ nghĩa xã hội"
                 </p>
                 <div className="flex justify-center mt-2 opacity-50">
                    <div className="w-2 h-2 rounded-full bg-[#C9A227] mx-1"></div>
                    <div className="w-2 h-2 rounded-full bg-[#C9A227] mx-1"></div>
                    <div className="w-2 h-2 rounded-full bg-[#C9A227] mx-1"></div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}