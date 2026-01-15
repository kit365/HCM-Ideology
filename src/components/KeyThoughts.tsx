import { Flag, Users, Globe, Heart, BookOpen, Shield } from 'lucide-react';

const thoughts = [
  {
    icon: Flag,
    title: 'Quyền Dân Tộc Thiêng Liêng',
    description: 'Từ quyền con người nâng lên thành quyền dân tộc. Bác khẳng định: "Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng".',
  },
  {
    icon: Heart,
    title: 'Độc Lập Gắn Liền Hạnh Phúc',
    description: 'Độc lập phải thiết thực. "Nếu nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì".',
  },
  {
    icon: BookOpen,
    title: 'Con Đường Cách Mạng Vô Sản',
    description: 'Rút kinh nghiệm từ lịch sử, Bác kết luận: "Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản".',
  },
  {
    icon: Users,
    title: 'Đảng Lãnh Đạo & Đại Đoàn Kết',
    description: 'Cách mạng là sự nghiệp của quần chúng, do Đảng Cộng sản lãnh đạo, dựa trên nền tảng liên minh công - nông vững chắc.',
  },
  {
    icon: Globe,
    title: 'Tính Chủ Động & Sáng Tạo',
    description: 'Khác với quan điểm cũ, Bác khẳng định cách mạng thuộc địa có thể giành thắng lợi trước cách mạng vô sản ở chính quốc.',
  },
  {
    icon: Shield,
    title: 'Phương Pháp Bạo Lực Cách Mạng',
    description: 'Sử dụng sức mạnh tổng hợp: bạo lực chính trị kết hợp bạo lực vũ trang để đập tan bạo lực phản cách mạng của kẻ thù.',
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
            Hệ thống quan điểm
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Giá Trị Cốt Lõi
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#7B2D3E] to-[#C9A227] mx-auto mb-6"></div>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            Tổng hợp những luận điểm sáng tạo và khoa học nhất trong tư tưởng Hồ Chí Minh về cách mạng giải phóng dân tộc.
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