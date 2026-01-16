import React from 'react';
import { Star } from 'lucide-react';

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
  return (
    <section className="py-20 md:py-32 bg-[#FDFCF8] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tinh Tế */}
        <div className="text-center mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] md:text-[12rem] font-bold text-[#F5EFE0] select-none pointer-events-none opacity-60" style={{ fontFamily: "'Playfair Display', serif" }}>
            HCM
          </div>
          <h2 className="relative text-4xl md:text-5xl font-bold text-[#8B1E3F] mb-4 uppercase tracking-wider" style={{ fontFamily: "'Playfair Display', serif" }}>
            Hành Trình Lịch Sử
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="relative text-gray-600 max-w-2xl mx-auto text-lg italic font-light" style={{ fontFamily: "'Lora', serif" }}>
            Những mốc son chói lọi trong sự nghiệp cách mạng vẻ vang.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Đường Line Giữa (Mảnh & Mờ) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent"></div>

          <div className="space-y-20">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`group relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Cột Nội Dung */}
                  <div className={`flex-1 pl-12 md:pl-0 ${isEven ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left'}`}>
                    <div className="relative z-10 transition-transform duration-500 md:group-hover:-translate-y-2">
                      
                      {/* Năm (Watermark Style) */}
                      <span 
                        className={`absolute -top-10 text-[5rem] md:text-[6.5rem] font-bold text-[#F2E8D5] z-[-1] leading-none select-none transition-colors duration-500 group-hover:text-[#E8DCC0]
                        ${isEven ? 'right-0 md:right-0' : 'left-0 md:left-0'}`}
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {event.year}
                      </span>

                      {/* Tiêu đề & Nội dung */}
                      <div className="pt-4">
                         <span className="block md:hidden text-[#D4AF37] font-bold text-xl mb-1 font-serif">{event.year}</span>
                         <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#8B1E3F] transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                           {event.title}
                         </h3>
                         <div className="w-12 h-[2px] bg-[#8B1E3F]/20 mb-4 md:ml-0 md:mr-auto inline-block"></div>
                         <p className="text-gray-600 text-lg leading-relaxed font-light" style={{ fontFamily: "'Lora', serif" }}>
                           {event.description}
                         </p>
                      </div>

                    </div>
                  </div>
                  {/* Cột Trống (Spacer) */}
                  <div className="hidden md:block flex-1"></div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}