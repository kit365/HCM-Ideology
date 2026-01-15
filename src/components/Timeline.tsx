import { Flag, Star } from 'lucide-react'; // Giả sử bạn có dùng icon, nếu không thì code dưới vẫn chạy bình thường theo layout cũ

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
    <section id="lich-su" className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      {/* Background section number */}
      <div className="absolute top-0 left-0 select-none pointer-events-none" style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '25rem',
        fontWeight: 600,
        color: 'rgba(0,0,0,0.02)',
        lineHeight: 1,
        transform: 'translate(-20%, -10%)'
      }}>
        05
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[0.65rem] font-medium tracking-[0.2em] uppercase text-[#7B2D3E] mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Hành trình lịch sử
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Dấu Mốc Vẻ Vang
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#7B2D3E] to-[#C9A227] mx-auto mb-6"></div>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            Quá trình hiện thực hóa tư tưởng độc lập, tự do của Hồ Chí Minh qua thực tiễn cách mạng.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#7B2D3E] via-[#C9A227] to-[#7B2D3E]"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-[#F5F0E8]/50 rounded-lg border border-black/5 hover:border-[#7B2D3E]/20 transition-all duration-300 hover:shadow-lg p-6">
                    <span
                      className="inline-block px-3 py-1 bg-[#7B2D3E] text-white text-sm font-medium mb-4"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {event.year}
                    </span>
                    <h3 className="text-xl font-medium text-[#1A1A1A] mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                      {event.title}
                    </h3>
                    <p className="text-[#4A4A4A] leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#7B2D3E] rounded-full border-4 border-[#FDFBF7] shadow-sm"></div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}