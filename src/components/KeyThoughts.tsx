import { Flag, Users, Globe, Heart, BookOpen, Shield } from 'lucide-react';

const thoughts = [
  {
    icon: Flag,
    title: 'Độc Lập Dân Tộc',
    description: 'Độc lập dân tộc là vấn đề sống còn, là quyền thiêng liêng của mỗi dân tộc. Người khẳng định: "Không có gì quý hơn độc lập tự do".',
  },
  {
    icon: Users,
    title: 'Đoàn Kết Dân Tộc',
    description: 'Đại đoàn kết toàn dân tộc là nguồn sức mạnh to lớn, là động lực để giành thắng lợi trong sự nghiệp giải phóng dân tộc.',
  },
  {
    icon: Globe,
    title: 'Đoàn Kết Quốc Tế',
    description: 'Kết hợp sức mạnh dân tộc với sức mạnh thời đại, đoàn kết với các dân tộc yêu chuộng hòa bình và tiến bộ trên thế giới.',
  },
  {
    icon: Heart,
    title: 'Lấy Dân Làm Gốc',
    description: 'Dân là chủ, dân là gốc của cách mạng. Mọi chính sách phải xuất phát từ lợi ích của nhân dân, vì nhân dân phục vụ.',
  },
  {
    icon: BookOpen,
    title: 'Kết Hợp Lý Luận Với Thực Tiễn',
    description: 'Vận dụng sáng tạo chủ nghĩa Mác - Lênin vào điều kiện cụ thể của Việt Nam, không rập khuôn, giáo điều.',
  },
  {
    icon: Shield,
    title: 'Bạo Lực Cách Mạng',
    description: 'Đấu tranh chính trị kết hợp với đấu tranh vũ trang khi cần thiết để lật đổ ách thống trị của đế quốc và tay sai.',
  },
];

export function KeyThoughts() {
  return (
    <section id="tu-tuong" className="py-24 bg-[#F5F0E8] relative overflow-hidden">
      {/* Background section number */}
      <div className="absolute top-0 right-0 select-none pointer-events-none" style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '25rem',
        fontWeight: 600,
        color: 'rgba(0,0,0,0.02)',
        lineHeight: 1,
        transform: 'translate(20%, -10%)'
      }}>
        04
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[0.65rem] font-medium tracking-[0.2em] uppercase text-[#7B2D3E] mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Hệ thống tư tưởng
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Những Tư Tưởng Chính
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#7B2D3E] to-[#C9A227] mx-auto mb-6"></div>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            Hệ thống tư tưởng toàn diện về con đường giải phóng dân tộc
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {thoughts.map((thought, index) => {
            const Icon = thought.icon;
            return (
              <div
                key={index}
                className="group bg-[#FDFBF7] rounded-lg border border-black/5 hover:border-[#7B2D3E]/20 transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
                <div className="p-8">
                  <div className="w-12 h-12 flex items-center justify-center mb-6 bg-[#7B2D3E]/10 rounded-lg group-hover:bg-[#7B2D3E] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#7B2D3E] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-medium text-[#1A1A1A] mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {thought.title}
                  </h3>
                  <p className="text-[#4A4A4A] leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                    {thought.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}