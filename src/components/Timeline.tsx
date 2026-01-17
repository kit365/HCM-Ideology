import React, { useState } from 'react';

// --- 1. IMPORT HÌNH ẢNH ---
import khoidauImg from '../utils/picture/khoidauhanhtrinh.png';
import raditimduongImg from '../utils/picture/raditimduong.png';
import anhsangtuluancuongImg from '../utils/picture/anhsangtuluancuong.png';
import thanhlapDangImg from '../utils/picture/thanhlapdang.png';
import trovetoquocImg from '../utils/picture/trovetoquoc.png';
import tuyenngondoclapImg from '../utils/picture/tuyenngondoclap.png';
import bachodixaImg from '../utils/picture/bachodixa.png';

// Import logo búa liềm từ đường dẫn cục bộ của bạn
import buaLiemImg from '../utils/picture/bua_liem.webp';

// --- 2. CẤU TRÚC DỮ LIỆU ---
interface TimelineEvent {
  id: string;
  year: string;
  date: string;
  title: string;
  location: string;
  shortDesc: string;
  fullDesc: string;
  significance: string;
  image: string;
  layout: 'layout-diagonal' | 'layout-split' | 'layout-center' | 'layout-hero';
}

const timelineEvents: TimelineEvent[] = [
  {
    id: '1880',
    year: '1880',
    date: '',
    title: 'Khởi đầu hành trình',
    location: 'Việt Nam',
    shortDesc: 'Khởi đầu hành trình tìm đường cứu nước',
    fullDesc: 'Những năm cuối thế kỷ 19, đất nước Việt Nam đang trong cảnh nô lệ dưới ách thực dân Pháp. Các phong trào yêu nước nổ ra nhưng đều thất bại, đặt ra câu hỏi lớn về con đường giải phóng dân tộc.',
    significance: 'Bối cảnh lịch sử đặt nền móng cho hành trình tìm đường cứu nước của Hồ Chí Minh.',
    image: khoidauImg,
    layout: 'layout-diagonal'
  },
  {
    id: '1911',
    year: '1911',
    date: '5 tháng 6',
    title: 'Ra Đi Tìm Đường',
    location: 'Bến Nhà Rồng, Sài Gòn',
    shortDesc: 'Người thanh niên Nguyễn Tất Thành rời Tổ quốc',
    fullDesc: 'Ngày 5/6/1911, người thanh niên Nguyễn Tất Thành với tên gọi Văn Ba, chỉ với đôi bàn tay trắng, lên tàu Amiral Latouche-Tréville, bắt đầu hành trình 30 năm bôn ba tìm đường cứu nước.',
    significance: 'Đánh dấu bước ngoặt quan trọng, mở đầu hành trình tìm đường giải phóng dân tộc.',
    image: raditimduongImg,
    layout: 'layout-split'
  },
  {
    id: '1920',
    year: '1920',
    date: 'Tháng 7',
    title: 'Ánh Sáng Từ Luận Cương',
    location: 'Paris, Pháp',
    shortDesc: 'Tìm ra con đường cách mạng vô sản',
    fullDesc: 'Tháng 7/1920, Nguyễn Ái Quốc đọc được "Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa" của Lênin. Người vui mừng đến phát khóc vì đã tìm thấy con đường giải phóng.',
    significance: 'Bước ngoặt tư tưởng quan trọng nhất: Đi theo con đường cách mạng vô sản.',
    image: anhsangtuluancuongImg,
    layout: 'layout-center'
  },
  {
    id: '1930',
    year: '1930',
    date: '3 tháng 2',
    title: 'Thành Lập Đảng',
    location: 'Hương Cảng, Trung Quốc',
    shortDesc: 'Đảng ra đời - bước ngoặt lịch sử',
    fullDesc: 'Nguyễn Ái Quốc chủ trì Hội nghị hợp nhất ba tổ chức cộng sản thành Đảng Cộng sản Việt Nam. Đây là bước ngoặt vĩ đại, chấm dứt thời kỳ khủng hoảng về đường lối cứu nước.',
    significance: 'Chấm dứt thời kỳ khủng hoảng, mở ra kỷ nguyên mới cho cách mạng Việt Nam.',
    image: thanhlapDangImg,
    layout: 'layout-diagonal'
  },
  {
    id: '1941',
    year: '1941',
    date: '28 tháng 1',
    title: 'Trở Về Tổ Quốc',
    location: 'Pác Bó, Cao Bằng',
    shortDesc: 'Sau 30 năm xa xứ trở về nước',
    fullDesc: 'Sau 30 năm xa Tổ quốc, Người trở về nước qua cột mốc 108. Người sống và làm việc tại hang Pác Bó, trực tiếp lãnh đạo phong trào cách mạng, thành lập Mặt trận Việt Minh.',
    significance: 'Người về nước đúng lúc, trực tiếp thổi bùng ngọn lửa cách mạng giải phóng.',
    image: trovetoquocImg,
    layout: 'layout-split'
  },
  {
    id: '1945',
    year: '1945',
    date: '2 tháng 9',
    title: 'Tuyên Ngôn Độc Lập',
    location: 'Ba Đình, Hà Nội',
    shortDesc: 'Khai sinh nước Việt Nam mới',
    fullDesc: 'Tại Quảng trường Ba Đình lịch sử, Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa - Nhà nước công nông đầu tiên ở Đông Nam Á.',
    significance: '"Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do, độc lập."',
    image: tuyenngondoclapImg,
    layout: 'layout-hero'
  },
  {
    id: '1969',
    year: '1969',
    date: '2 tháng 9',
    title: 'Bác Hồ Đi Xa',
    location: 'Hà Nội',
    shortDesc: 'Vĩnh biệt Người',
    fullDesc: 'Chủ tịch Hồ Chí Minh từ trần, để lại bản Di chúc thiêng liêng và niềm tiếc thương vô hạn. Tư tưởng và đạo đức của Người trở thành di sản tinh thần vô giá.',
    significance: 'Tư tưởng Hồ Chí Minh sống mãi trong sự nghiệp của chúng ta.',
    image: bachodixaImg,
    layout: 'layout-center'
  }
];

// --- 3. STYLES ---
const TimelineStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Manrope:wght@300;400;600&display=swap');

    :root {
      --primary: #8B2323;
      --bg: #F4F1EA;
      --text: #222;
      /* Sử dụng biến ảnh đã import */
      --hammer-sickle-local: url('${buaLiemImg}');
    }

    .page-wrapper { background-color: var(--bg); color: var(--text); font-family: 'Manrope', sans-serif; height: 100vh; width: 100%; display: flex; flex-direction: column; overflow: hidden; }
    
    .header-section { text-align: center; padding: 30px 0 10px 0; flex-shrink: 0; z-index: 200; position: relative; }
    .header-eyebrow { font-family: 'Manrope', sans-serif; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 2px; color: #555; margin-bottom: 5px; font-weight: 600; }
    .header-title { font-family: 'Playfair Display', serif; font-size: 3.5rem; font-weight: 700; color: #1a1a1a; margin: 0; line-height: 1.2; }
    .header-desc { font-family: 'Playfair Display', serif; font-size: 1.1rem; color: #444; margin-top: 10px; max-width: 600px; margin-left: auto; margin-right: auto; line-height: 1.5; }
    .timeline-body { display: flex; flex-grow: 1; height: 100%; position: relative; }
    .sidebar { width: 120px; height: 100%; border-right: 1px solid rgba(0,0,0,0.05); display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 50px; z-index: 100; background: rgba(244, 241, 234, 0.5); }
    
    /* Nav Dot */
    .nav-dot { 
      width: 18px; 
      height: 18px; 
      background: transparent; 
      border: 3px solid #aaa; 
      border-radius: 50%; 
      cursor: pointer; 
      position: relative; 
      background-position: center; 
      background-size: contain; 
      background-repeat: no-repeat; 
      transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); 
    }

    .nav-dot:hover, .nav-dot.active { 
      width: 50px; 
      height: 50px; 
      border-color: #D4AF37; 
      border-width: 2px; 
      background-color: #D40000; 
      /* Thay đổi sang hình ảnh búa liềm nội bộ */
      background-image: var(--hammer-sickle-local); 
      background-size: 75%;
      box-shadow: 0 0 15px rgba(212, 175, 55, 0.6); 
      transform: scale(1.1); 
    }

    .nav-dot::before { content: attr(data-year); position: absolute; left: 60px; top: 50%; transform: translateY(-50%); font-family: 'Cinzel', serif; font-weight: 700; opacity: 0; transition: all 0.3s; pointer-events: none; white-space: nowrap; font-size: 1.1rem; color: var(--primary); }
    .nav-dot:hover::before { opacity: 1; left: 55px; }
    
    .main-stage { flex-grow: 1; position: relative; height: 100%; overflow: hidden; perspective: 1000px; }
    .slide { position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; visibility: hidden; transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1); display: flex; align-items: center; justify-content: center; }
    .slide.active { opacity: 1; visibility: visible; }
    
    .bg-year { 
      position: absolute; font-family: 'Cinzel', serif; font-size: 20vw; font-weight: 900; 
      color: rgba(139, 35, 35, 0.04); z-index: 1; line-height: 1; user-select: none; 
      transition: transform 1.5s ease; top: 50%; left: 50%; transform: translate(-50%, -50%); 
    }
    .slide.active .bg-year { transform: translate(-45%, -55%) scale(1.05); }

    .content-wrap { position: relative; z-index: 5; width: 85%; height: 85%; }

    .meta-info { font-family: 'Cinzel', serif; font-size: 1.8rem; font-weight: 700; color: #333; letter-spacing: 1px; margin-bottom: 20px; text-transform: uppercase; border-bottom: 3px solid var(--primary); display: inline-block; padding-bottom: 8px; text-shadow: 1px 1px 0px rgba(255,255,255,0.5); }
    .title { font-family: 'Playfair Display', serif; font-size: 5rem; color: var(--primary); line-height: 1; margin: 15px 0 30px 0; text-shadow: 2px 2px 0px #fff; }
    .description-box { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(10px); padding: 40px; border-left: 6px solid var(--primary); box-shadow: 0 20px 50px rgba(0,0,0,0.08); max-width: 650px; }
    .full-desc { font-size: 1.4rem; line-height: 1.6; color: #222; margin-bottom: 25px; text-align: justify; }
    .significance { font-family: 'Playfair Display', serif; font-style: italic; color: var(--primary); font-size: 1.5rem; line-height: 1.4; font-weight: 500; }
    
    .visual-img { object-fit: cover; box-shadow: 15px 15px 0px rgba(139, 35, 35, 0.1); transition: all 0.5s ease; }
    .visual-img:hover { transform: translate(-5px, -5px); box-shadow: 20px 20px 0px rgba(139, 35, 35, 0.2); }

    .layout-diagonal .bg-year { bottom: -5%; right: -5%; top: auto; left: auto; transform: none; }
    .layout-diagonal .visual-img { position: absolute; bottom: 0; left: 5%; width: 38%; height: auto; z-index: 6; transform: rotate(-2deg); }
    .layout-diagonal .text-group { position: absolute; top: 0%; right: 5%; width: 50%; text-align: right; }
    .layout-diagonal .description-box { margin-left: auto; border-left: none; border-right: 6px solid var(--primary); }

    .layout-split .bg-year { top: -10%; left: -5%; transform: none; }
    .layout-split .visual-img { position: absolute; top: 0%; right: 2%; width: 45%; height: 90%; z-index: 4; }
    .layout-split .text-group { position: absolute; top: 10%; left: 5%; width: 45%; z-index: 6; }

    .layout-hero .bg-year { display: none; }
    .layout-hero .visual-img { position: absolute; width: 100%; height: 100%; top: 0; left: 0; opacity: 0.4; z-index: 0; box-shadow: none; object-fit: cover; pointer-events: none; filter: blur(8px) grayscale(30%); }
    .layout-hero .content-wrap { position: relative; z-index: 10; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; height: 100%; width: 100%; }
    .layout-hero .content-wrap::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(244, 241, 234, 0.85); z-index: 2; backdrop-filter: blur(5px); }
    .layout-hero .text-group { width: 100%; display: flex; flex-direction: column; align-items: center; position: relative; z-index: 5; }
    .layout-hero .title { font-size: 6.5rem; text-transform: uppercase; letter-spacing: 8px; margin-bottom: 40px; border-top: 3px solid var(--primary); border-bottom: 3px solid var(--primary); padding: 30px 0; width: auto; display: inline-block; }
    .layout-hero .description-box { background: transparent; border: none; box-shadow: none; max-width: 900px; padding: 0; display: flex; flex-direction: column; align-items: center; }
    .layout-hero .full-desc { font-size: 1.6rem; text-align: center; }
    .layout-hero .significance { font-size: 2rem; font-weight: 400; text-align: center; }
    .layout-hero .meta-info { margin-left: auto; margin-right: auto; }

    .layout-center .bg-year { top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 30vw; z-index: 1; opacity: 0.03; }
    .layout-center .content-wrap { display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 30px; height: 100%; }
    .layout-center .visual-img { position: relative; width: auto; max-width: 80%; height: auto; max-height: 45vh; object-fit: contain; z-index: 5; border: 8px solid #fff; box-shadow: 0 10px 30px rgba(0,0,0,0.2); border-radius: 2px; }
    .layout-center .visual-img::after { content: ''; position: absolute; inset: -5px; border: 1px solid var(--primary); z-index: -1; }
    .layout-center .text-group { position: relative; width: 100%; max-width: 900px; text-align: center; z-index: 10; }
    .layout-center .description-box { margin: 0 auto; background: rgba(255,255,255,0.95); border-top: 1px solid var(--primary); border-bottom: 1px solid var(--primary); padding: 30px; text-align: left; }
    .layout-center .title { font-size: 4rem; margin-bottom: 20px; margin-top: 0; }

    @keyframes slideInDown { from { transform: translateY(-50px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    @keyframes slideInUp { from { transform: translateY(50px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    @keyframes zoomIn { from { transform: scale(1.1); opacity: 0; } to { transform: scale(1); opacity: 1; } }

    @media (max-width: 768px) {
      .page-wrapper { height: auto; min-height: 100vh; }
      .timeline-body { flex-direction: column; height: auto; }
      .sidebar { width: 100%; height: 70px; flex-direction: row; order: 2; border-top: 1px solid #ccc; border-right: none; gap: 0; justify-content: space-evenly; position: fixed; bottom: 0; left: 0; background: #fff; }
      .nav-dot { width: 24px; height: 24px; }
      .nav-dot::before { display: none; }
      .main-stage { height: 80vh; margin-bottom: 70px; }
      .layout-center .visual-img { max-height: 30vh; width: 100%; }
    }
  `}</style>
);

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <TimelineStyles />
      <div className="page-wrapper">
        <div className="header-section">
          <div className="header-eyebrow">Dòng Chảy Lịch Sử</div>
          <h1 className="header-title">Những Mốc Son</h1>
          <div className="header-desc">
            Tổng hợp những sự kiện quan trọng trong tư tưởng Hồ Chí Minh về độc lập dân tộc
          </div>
        </div>

        <div className="timeline-body">
          <div className="sidebar">
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                className={`nav-dot ${index === activeIndex ? 'active' : ''}`}
                data-year={event.year}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <div className="main-stage">
            {timelineEvents.map((event, index) => (
              <div key={event.id} className={`slide ${event.layout} ${index === activeIndex ? 'active' : ''}`}>
                <div className="bg-year">{event.year}</div>
                <div className="content-wrap">
                  <img src={event.image} className="visual-img" alt={event.title} />
                  <div className="text-group">
                    <div className="meta-info">
                      {event.date} {event.year} {event.location && `| ${event.location}`}
                    </div>
                    <h2 className="title">{event.title}</h2>
                    <div className="description-box">
                      <p className="full-desc">{event.fullDesc}</p>
                      <p className="significance">{event.significance}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}