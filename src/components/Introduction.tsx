import { ImageWithFallback } from './figma/ImageWithFallback';

export function Introduction() {
  return (
    <section id="gioi-thieu" className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      {/* Background section number */}
      <div className="absolute top-0 left-0 select-none pointer-events-none" style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '25rem',
        fontWeight: 600,
        color: 'rgba(0,0,0,0.02)',
        lineHeight: 1,
        transform: 'translate(-20%, -10%)'
      }}>
        01
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[0.65rem] font-medium tracking-[0.2em] uppercase text-[#7B2D3E] mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Về Bác Hồ
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Giới Thiệu
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#7B2D3E] to-[#C9A227] mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1580666619107-09125350b838?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxobyUyMGNoaSUyMG1pbmglMjBzdGF0dWV8ZW58MXx8fHwxNzY4MzE1MDM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Ho Chi Minh"
                className="w-full h-full object-cover"
                style={{ filter: 'sepia(10%) contrast(1.02)' }}
              />
            </div>
            {/* Caption */}
            <div className="mt-4 text-center">
              <span className="text-[0.6rem] tracking-[0.15em] uppercase text-[#6B6B6B]" style={{ fontFamily: 'system-ui, sans-serif' }}>
                Hình ảnh tư liệu
              </span>
            </div>
          </div>

          {/* Text Column */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="p-8 bg-[#F5F0E8]/50 rounded-lg border border-black/5">
              <p className="text-lg leading-relaxed text-[#4A4A4A]" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                Tư tưởng Hồ Chí Minh về cách mạng giải phóng dân tộc là một hệ thống quan điểm toàn diện,
                sâu sắc về con đường giải phóng dân tộc, giành độc lập tự do cho Tổ quốc.
              </p>
            </div>

            <div className="p-8 bg-[#F5F0E8]/50 rounded-lg border border-black/5">
              <p className="text-lg leading-relaxed text-[#4A4A4A]" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                Người đã kết hợp sáng tạo chủ nghĩa Mác - Lênin với thực tiễn cách mạng Việt Nam,
                với truyền thống yêu nước và văn hóa dân tộc, tạo nên một tư tưởng độc đáo,
                mang đậm bản sắc Việt Nam.
              </p>
            </div>

            <div className="p-8 bg-[#F5F0E8]/50 rounded-lg border border-black/5">
              <p className="text-lg leading-relaxed text-[#4A4A4A]" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                Tư tưởng của Người không chỉ dẫn dắt cách mạng Việt Nam giành thắng lợi vẻ vang
                mà còn có ý nghĩa to lớn đối với các dân tộc bị áp bức trên thế giới.
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={() => document.getElementById('doc-lap-dan-toc')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-[#7B2D3E] hover:text-[#5C2230] text-sm tracking-[0.1em] uppercase font-medium transition-colors group"
              style={{ fontFamily: 'system-ui, sans-serif' }}
            >
              Khám phá thêm
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}