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
                "Không có gì quý hơn độc lập, tự do" - đây không chỉ là khẩu hiệu mà là tư tưởng cốt lõi, là chân lý bất hủ của Hồ Chí Minh. Đối với Người, độc lập dân tộc là quyền thiêng liêng, bất khả xâm phạm, là khát vọng cháy bỏng xuyên suốt lịch sử dựng nước và giữ nước của dân tộc.
              </p>
            </div>

            <div className="p-8 bg-[#F5F0E8]/50 rounded-lg border border-black/5">
              <p className="text-lg leading-relaxed text-[#4A4A4A]" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                Độc lập không phải là khái niệm trừu tượng mà phải thiết thực, gắn liền với tự do, cơm no, áo ấm và hạnh phúc của nhân dân. Người khẳng định: "Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì".
              </p>
            </div>

            <div className="p-8 bg-[#F5F0E8]/50 rounded-lg border border-black/5">
              <p className="text-lg leading-relaxed text-[#4A4A4A]" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                Đó phải là nền độc lập hoàn toàn, triệt để và gắn liền với sự thống nhất, toàn vẹn lãnh thổ. Như lời Người từng căn dặn: "Nước Việt Nam là một, dân tộc Việt Nam là một. Sông có thể cạn, núi có thể mòn, song chân lý đó không bao giờ thay đổi".
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={() => document.getElementById('doc-lap-dan-toc')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-[#7B2D3E] hover:text-[#5C2230] text-sm tracking-[0.1em] uppercase font-medium transition-colors group"
              style={{ fontFamily: 'system-ui, sans-serif' }}
            >
             {/* Nội dung button đang trống từ code gốc, bạn có thể điền thêm text vào đây nếu cần */}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}