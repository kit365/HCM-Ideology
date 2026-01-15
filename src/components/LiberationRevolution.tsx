import { ImageWithFallback } from './figma/ImageWithFallback';

export function LiberationRevolution() {
  const points = [
    {
      id: 'a',
      title: 'Lựa chọn con đường cách mạng vô sản',
      content: 'Sau khi khảo cứu các cuộc cách mạng lớn trên thế giới, Người đi đến kết luận: "Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản".',
    },
    {
      id: 'b',
      title: 'Sáng tạo trong trình tự giải phóng',
      content: 'Khác với lý thuyết kinh điển ở Châu Âu, Bác đặt nhiệm vụ giải phóng dân tộc lên hàng đầu: Giải phóng dân tộc -> Giải phóng xã hội -> Giải phóng giai cấp -> Giải phóng con người.',
    },
    {
      id: 'c',
      title: 'Đảng Cộng sản lãnh đạo',
      content: 'Đảng không chỉ là đội tiên phong của giai cấp công nhân mà còn là đội tiên phong của nhân dân lao động và của cả dân tộc Việt Nam.',
    },
    {
      id: 'd',
      title: 'Sức mạnh đại đoàn kết toàn dân',
      content: 'Cách mạng là sự nghiệp của quần chúng. Người quan niệm "Có dân là có tất cả", phải tập hợp rộng rãi mọi tầng lớp nhân dân yêu nước.',
    },
    {
      id: 'e',
      title: 'Liên minh Công - Nông là nền tảng',
      content: 'Trong khối đại đoàn kết đó, liên minh giữa giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức là nền tảng, là "gốc" của cách mạng.',
    }
  ];

  return (
    <section id="cach-mang-giai-phong" className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      {/* Background section number */}
      <div className="absolute top-0 left-0 select-none pointer-events-none" style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '25rem',
        fontWeight: 600,
        color: 'rgba(0,0,0,0.02)',
        lineHeight: 1,
        transform: 'translate(-20%, -10%)'
      }}>
        03
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[0.65rem] font-medium tracking-[0.2em] uppercase text-[#7B2D3E] mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Con Đường & Lực Lượng
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Cách Mạng Giải Phóng
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#7B2D3E] to-[#C9A227] mx-auto"></div>
        </div>

        {/* Content Grid - Reversed layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content Column - Left */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Intro text */}
            <p className="text-lg leading-relaxed text-[#4A4A4A] mb-8" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              Từ thất bại của các phong trào yêu nước cuối thế kỷ XIX, Hồ Chí Minh đã tìm thấy ánh sáng trong Luận cương của Lênin về vấn đề dân tộc và thuộc địa.
            </p>

            {/* Points */}
            <div className="space-y-6">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="group p-6 bg-[#F5F0E8]/50 rounded-lg border border-black/5 hover:border-[#7B2D3E]/20 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-sm font-medium text-[#7B2D3E] bg-[#7B2D3E]/10 rounded-full"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {point.id}
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-[#1A1A1A] mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                        {point.title}
                      </h3>
                      <p className="text-base text-[#4A4A4A] leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                        {point.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column - Right, Sticky */}
          <div className="order-1 lg:order-2 relative lg:sticky lg:top-24">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://th.bing.com/th/id/R.d1a9d6b130707ea4a1e5943dfecae091?rik=Lofwxv7%2fCXhW7A&pid=ImgRaw&r=0"
                alt="Vietnam Revolution"
                className="w-full h-full object-cover"
                style={{ filter: 'sepia(10%) contrast(1.02)' }}
              />
            </div>
            <div className="mt-4 text-center">
              <span className="text-[0.6rem] tracking-[0.15em] uppercase text-[#6B6B6B]" style={{ fontFamily: 'system-ui, sans-serif' }}>
                Hình ảnh tư liệu
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}