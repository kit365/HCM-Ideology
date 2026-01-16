import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ZoomIn } from 'lucide-react';

const timelineEvents = [
  {
    year: '1911',
    title: 'Khát Vọng Giải Phóng',
    description: 'Người rời bến cảng Nhà Rồng, bắt đầu hành trình bôn ba qua 3 đại dương, 4 châu lục để khảo nghiệm các con đường cứu nước.',
  },
  {
    year: '1920',
    title: 'Tìm Thấy Ánh Sáng Thời Đại',
    description: 'Bắt gặp Sơ thảo luận cương của Lênin, Người khẳng định chân lý: "Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản".',
  },
  {
    year: '1930',
    title: 'Đảng Tiên Phong Ra Đời',
    description: 'Sáng lập Đảng Cộng sản Việt Nam, chấm dứt thời kỳ khủng hoảng về đường lối, xác định ngọn cờ độc lập dân tộc gắn liền với chủ nghĩa xã hội.',
  },
  {
    year: '1941',
    title: 'Xây Dựng Khối Đại Đoàn Kết',
    description: 'Về nước trực tiếp lãnh đạo, thành lập Mặt trận Việt Minh, đặt quyền lợi dân tộc lên trên hết, khơi dậy lòng yêu nước của toàn dân.',
  },
  {
    year: '1945',
    title: 'Khai Sinh Nền Độc Lập',
    description: 'Chớp thời cơ "ngàn năm có một", lãnh đạo Cách mạng Tháng Tám thành công. Người đọc Tuyên ngôn Độc lập, khai sinh nước VNDCCH.',
  },
  {
    year: '1954',
    title: 'Chiến Thắng Lừng Lẫy Năm Châu',
    description: 'Kết thúc thắng lợi cuộc kháng chiến chống thực dân Pháp bằng chiến dịch Điện Biên Phủ, chứng minh sức mạnh của chiến tranh nhân dân.',
  },
  {
    year: '1975',
    title: 'Non Sông Thu Về Một Mối',
    description: 'Giải phóng hoàn toàn miền Nam, thống nhất đất nước, hiện thực hóa chân lý bất di bất dịch: "Nước Việt Nam là một, dân tộc Việt Nam là một".',
  },
];

export function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState<typeof timelineEvents[0] | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle keyboard 'Escape' to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedEvent(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="lich-su" className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 select-none pointer-events-none" style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '25rem',
        fontWeight: 600,
        color: 'rgba(0,0,0,0.02)',
        lineHeight: 1,
        transform: 'translate(-20%, -10%)'
      }}>05</div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[0.65rem] font-medium tracking-[0.2em] uppercase text-[#7B2D3E] mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Hành trình lịch sử
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Dấu Mốc Vẻ Vang
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#7B2D3E] to-[#C9A227] mx-auto mb-6"></div>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            Nhấn vào các mốc thời gian để xem chi tiết.
          </p>
        </div>

        {/* List Events */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-4 bottom-12 w-[1px] bg-gradient-to-b from-[#7B2D3E] via-[#C9A227] to-[#7B2D3E] opacity-30 md:opacity-100"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="w-full text-left md:text-inherit group cursor-pointer bg-[#F5F0E8]/80 rounded-lg border border-black/5 hover:border-[#7B2D3E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-6 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#7B2D3E] focus:ring-offset-2"
                  >
                    <div className="absolute inset-0 bg-[#7B2D3E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="inline-block px-3 py-1 bg-[#7B2D3E] text-white text-sm font-medium mb-4 group-hover:bg-[#C9A227] transition-colors duration-300 rounded" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {event.year}
                    </span>
                    <h3 className="text-xl font-medium text-[#1A1A1A] mb-2 group-hover:text-[#7B2D3E] transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                      {event.title}
                    </h3>
                    <div className={`flex items-center gap-2 text-sm text-[#7B2D3E]/70 mt-3 font-medium ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <ZoomIn size={16} />
                      <span className="uppercase tracking-wider text-xs">Xem chi tiết</span>
                    </div>
                  </button>
                </div>

                {/* Center Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center pt-6 md:pt-0">
                  <div className="w-4 h-4 bg-[#7B2D3E] rounded-full border-4 border-[#FDFBF7] shadow-sm z-10 relative">
                     <div className="absolute inset-0 bg-[#7B2D3E] rounded-full animate-ping opacity-20"></div>
                  </div>
                </div>

                {/* Empty Side for alignment */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL / POPUP */}
      {mounted && selectedEvent && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ isolation: 'isolate' }}
        >

          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer transition-opacity"
            onClick={() => setSelectedEvent(null)}
            aria-hidden="true"
          ></div>

          {/* POPUP CARD */}
          <div 
            className="relative shadow-2xl flex flex-col"
            role="dialog"
            aria-modal="true"
            style={{ 
                // DIMENSIONS
                width: '90%',
                maxWidth: '450px',
                minHeight: '350px', 
                maxHeight: '80vh',
                
                // VISUALS - HARDCODED SOLID WHITE
                backgroundColor: '#ffffff', 
                borderRadius: '24px',
                
                // LAYOUT
                zIndex: 10001,
                opacity: 1, 
                isolation: 'isolate' 
            }}
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full transition-colors z-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#7B2D3E]"
              aria-label="Close modal"
            >
              <X size={22} />
            </button>

            {/* Content Container */}
            <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-10 text-center overflow-y-auto custom-scrollbar">
                
                {/* Year */}
                <div 
                  className="text-lg text-[#7B2D3E] mb-3 tracking-widest font-bold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                   {selectedEvent.year}
                </div>

                {/* Title */}
                <h3 
                  className="text-2xl md:text-3xl font-bold text-black mb-6 leading-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    {selectedEvent.title}
                </h3>

                {/* Divider */}
                <div className="w-12 h-[2px] bg-[#C9A227] mb-6"></div>

                {/* Description */}
                <p 
                  className="text-lg text-gray-900 leading-relaxed font-medium"
                  style={{ fontFamily: "'Lora', Georgia, serif" }}
                >
                    {selectedEvent.description}
                </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}