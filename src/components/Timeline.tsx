import React, { useState } from 'react';
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';

// --- TIMELINE DATA ---
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
}

const timelineEvents: TimelineEvent[] = [
  {
    id: '1911',
    year: '1911',
    date: '5 tháng 6',
    title: 'Ra Đi Tìm Đường Cứu Nước',
    location: 'Bến Nhà Rồng, Sài Gòn',
    shortDesc: 'Người thanh niên Nguyễn Tất Thành rời Tổ quốc',
    fullDesc: 'Ngày 5/6/1911, người thanh niên Nguyễn Tất Thành (sau này là Chủ tịch Hồ Chí Minh) chỉ với đôi bàn tay trắng, lên tàu Amiral Latouche-Tréville tại bến cảng Nhà Rồng, bắt đầu hành trình 30 năm bôn ba tìm đường cứu nước.',
    significance: 'Đánh dấu bước ngoặt quan trọng, mở đầu hành trình tìm đường giải phóng dân tộc của người thanh niên yêu nước.',
    image: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&q=80'
  },
  {
    id: '1920',
    year: '1920',
    date: 'Tháng 7',
    title: 'Ánh Sáng Từ Luận Cương Lênin',
    location: 'Paris, Pháp',
    shortDesc: 'Tìm ra con đường cách mạng vô sản',
    fullDesc: 'Tháng 7/1920, Nguyễn Ái Quốc đọc được "Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa" của Lênin trên báo L\'Humanité. Người vui mừng đến phát khóc vì đã tìm thấy con đường giải phóng dân tộc.',
    significance: 'Bước ngoặt tư tưởng quan trọng nhất, xác định con đường cách mạng vô sản cho Việt Nam.',
    image: 'https://images.unsplash.com/photo-1461360370896-922624d12a74?w=800&q=80'
  },
  {
    id: '1930',
    year: '1930',
    date: '3 tháng 2',
    title: 'Thành Lập Đảng Cộng Sản Việt Nam',
    location: 'Hương Cảng, Trung Quốc',
    shortDesc: 'Đảng ra đời - bước ngoặt lịch sử',
    fullDesc: 'Ngày 3/2/1930, tại Hương Cảng, Nguyễn Ái Quốc chủ trì Hội nghị hợp nhất ba tổ chức cộng sản thành Đảng Cộng sản Việt Nam. Đây là bước ngoặt vĩ đại trong lịch sử cách mạng nước ta.',
    significance: 'Chấm dứt thời kỳ khủng hoảng về đường lối, mở ra kỷ nguyên mới cho cách mạng Việt Nam.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80'
  },
  {
    id: '1941',
    year: '1941',
    date: '28 tháng 1',
    title: 'Trở Về Tổ Quốc',
    location: 'Pác Bó, Cao Bằng',
    shortDesc: 'Sau 30 năm xa xứ',
    fullDesc: 'Ngày 28/1/1941, sau 30 năm xa Tổ quốc, Nguyễn Ái Quốc trở về nước qua cột mốc 108 biên giới Việt - Trung. Người sống và làm việc tại hang Pác Bó, trực tiếp lãnh đạo phong trào cách mạng.',
    significance: 'Người về nước đúng lúc tình hình thế giới và trong nước thuận lợi, chuẩn bị cho cao trào cách mạng.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
  },
  {
    id: '1945',
    year: '1945',
    date: '2 tháng 9',
    title: 'Tuyên Ngôn Độc Lập',
    location: 'Quảng trường Ba Đình, Hà Nội',
    shortDesc: 'Khai sinh nước Việt Nam mới',
    fullDesc: 'Ngày 2/9/1945, tại Quảng trường Ba Đình lịch sử, trước hàng vạn đồng bào, Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa - Nhà nước công nông đầu tiên ở Đông Nam Á.',
    significance: 'Mở ra kỷ nguyên độc lập, tự do cho dân tộc Việt Nam sau gần một thế kỷ đô hộ.',
    image: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=800&q=80'
  },
  {
    id: '1954',
    year: '1954',
    date: '7 tháng 5',
    title: 'Chiến Thắng Điện Biên Phủ',
    location: 'Điện Biên Phủ',
    shortDesc: 'Lừng lẫy năm châu, chấn động địa cầu',
    fullDesc: 'Sau 56 ngày đêm chiến đấu kiên cường, chiều 7/5/1954, lá cờ "Quyết chiến Quyết thắng" tung bay trên nóc hầm Đờ-cát-xtơ-ri. Chiến thắng Điện Biên Phủ buộc Pháp phải ký Hiệp định Genève.',
    significance: 'Kết thúc 9 năm kháng chiến chống Pháp, làm sụp đổ chủ nghĩa thực dân cũ trên thế giới.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80'
  },
  {
    id: '1969',
    year: '1969',
    date: '2 tháng 9',
    title: 'Bác Hồ Đi Xa',
    location: 'Hà Nội',
    shortDesc: 'Vĩnh biệt Người',
    fullDesc: 'Ngày 2/9/1969, đúng vào ngày Quốc khánh, Chủ tịch Hồ Chí Minh từ trần tại Hà Nội, để lại bản Di chúc thiêng liêng và niềm tiếc thương vô hạn cho toàn thể dân tộc Việt Nam và bạn bè quốc tế.',
    significance: 'Tư tưởng và đạo đức Hồ Chí Minh trở thành di sản tinh thần vô giá của dân tộc.',
    image: 'https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?w=800&q=80'
  },
  {
    id: '1975',
    year: '1975',
    date: '30 tháng 4',
    title: 'Thống Nhất Đất Nước',
    location: 'Dinh Độc Lập, Sài Gòn',
    shortDesc: 'Non sông thu về một mối',
    fullDesc: 'Đúng 11h30 ngày 30/4/1975, xe tăng quân giải phóng húc đổ cổng Dinh Độc Lập. Tổng thống Dương Văn Minh tuyên bố đầu hàng vô điều kiện. Miền Nam hoàn toàn giải phóng, đất nước thống nhất.',
    significance: 'Thực hiện trọn vẹn Di chúc của Bác Hồ, kết thúc 30 năm kháng chiến chống ngoại xâm.',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80'
  }
];

// --- COMPONENT ---
export function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  // === DETAIL PAGE VIEW ===
  if (selectedEvent) {
    return (
      <section className="min-h-screen py-12" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back Button */}
          <button
            onClick={() => setSelectedEvent(null)}
            className="flex items-center gap-2 text-[#7B2D3E] hover:text-[#5C2230] mb-8 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Quay lại Timeline</span>
          </button>

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden mb-8 shadow-xl">
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* Year Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <span
                className="text-6xl md:text-8xl font-black text-white/90"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {selectedEvent.year}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="flex items-center gap-2 text-[#7B2D3E] text-sm font-medium px-3 py-1.5 bg-[#7B2D3E]/10 rounded-full">
                <Calendar className="w-4 h-4" />
                {selectedEvent.date}
              </span>
              <span className="flex items-center gap-2 text-gray-600 text-sm px-3 py-1.5 bg-gray-100 rounded-full">
                <MapPin className="w-4 h-4" />
                {selectedEvent.location}
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {selectedEvent.title}
            </h1>

            {/* Decorative Line */}
            <div className="w-24 h-1 bg-[#C9A227] mb-8"></div>

            {/* Full Description */}
            <p
              className="text-lg text-gray-700 leading-relaxed mb-8"
              style={{ fontFamily: "'Lora', serif" }}
            >
              {selectedEvent.fullDesc}
            </p>

            {/* Significance Box */}
            <div className="bg-gradient-to-r from-[#7B2D3E]/5 to-[#C9A227]/5 border-l-4 border-[#7B2D3E] p-6 rounded-r-xl">
              <h3
                className="text-sm font-bold uppercase tracking-wider text-[#7B2D3E] mb-2"
                style={{ fontFamily: 'system-ui, sans-serif' }}
              >
                Ý Nghĩa Lịch Sử
              </h3>
              <p
                className="text-gray-700 leading-relaxed"
                style={{ fontFamily: "'Lora', serif" }}
              >
                {selectedEvent.significance}
              </p>
            </div>
          </div>

          {/* Navigation to Next/Prev */}
          <div className="flex justify-between mt-8">
            {(() => {
              const currentIndex = timelineEvents.findIndex(e => e.id === selectedEvent.id);
              const prevEvent = timelineEvents[currentIndex - 1];
              const nextEvent = timelineEvents[currentIndex + 1];
              return (
                <>
                  {prevEvent ? (
                    <button
                      onClick={() => setSelectedEvent(prevEvent)}
                      className="flex items-center gap-2 text-gray-500 hover:text-[#7B2D3E] transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span className="text-sm">{prevEvent.year} - {prevEvent.title}</span>
                    </button>
                  ) : <div />}
                  {nextEvent && (
                    <button
                      onClick={() => setSelectedEvent(nextEvent)}
                      className="flex items-center gap-2 text-gray-500 hover:text-[#7B2D3E] transition-colors ml-auto"
                    >
                      <span className="text-sm">{nextEvent.year} - {nextEvent.title}</span>
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </button>
                  )}
                </>
              );
            })()}
          </div>
        </div>
      </section>
    );
  }

  // === MAIN TIMELINE VIEW ===
  return (
    <section id="lich-su" className="py-20 md:py-32" style={{ backgroundColor: '#FDFBF7' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* === HEADER === */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-[#C9A227]"></div>
            <span
              className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7B2D3E]"
              style={{ fontFamily: 'system-ui, sans-serif' }}
            >
              Dòng Chảy Lịch Sử
            </span>
            <div className="w-12 h-px bg-[#C9A227]"></div>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Những Mốc Son Vàng
          </h2>
          <p
            className="text-gray-500 max-w-lg mx-auto"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Hành trình vĩ đại của dân tộc qua từng dấu mốc lịch sử
          </p>
        </div>

        {/* === TIMELINE GRID === */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
            style={{ background: 'linear-gradient(180deg, transparent, #C9A227 10%, #C9A227 90%, transparent)' }}
          ></div>

          {/* Timeline Items */}
          <div className="space-y-16 md:space-y-24">
            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={event.id}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${isLeft ? '' : 'md:flex-row-reverse'}`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 w-full ${isLeft ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div
                      onClick={() => setSelectedEvent(event)}
                      className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    >
                      {/* Image */}
                      <div className="relative h-48 md:h-56 overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                        {/* Year Badge */}
                        <div className="absolute bottom-4 left-4">
                          <span
                            className="text-4xl md:text-5xl font-black text-white"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                          >
                            {event.year}
                          </span>
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-[#7B2D3E] text-sm mb-2">
                          <Calendar className="w-4 h-4" />
                          <span style={{ fontFamily: 'system-ui, sans-serif' }}>{event.date}</span>
                        </div>

                        <h3
                          className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-2 group-hover:text-[#7B2D3E] transition-colors"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {event.title}
                        </h3>

                        <p
                          className="text-gray-500 text-sm mb-4"
                          style={{ fontFamily: "'Lora', serif" }}
                        >
                          {event.shortDesc}
                        </p>

                        <span
                          className="inline-flex items-center gap-1 text-[#7B2D3E] text-sm font-medium group-hover:gap-2 transition-all"
                          style={{ fontFamily: 'system-ui, sans-serif' }}
                        >
                          Xem chi tiết
                          <ArrowLeft className="w-4 h-4 rotate-180" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex z-10">
                    <div
                      className="w-5 h-5 rounded-full bg-[#C9A227] border-4 border-[#FDFBF7] shadow-lg"
                    ></div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* End Marker */}
        <div className="flex flex-col items-center mt-20">
          <div className="w-4 h-4 rounded-full bg-[#7B2D3E]"></div>
          <div className="w-px h-12 bg-gradient-to-b from-[#7B2D3E] to-transparent"></div>
        </div>
      </div>
    </section>
  );
}