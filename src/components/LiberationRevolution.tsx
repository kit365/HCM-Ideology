import { ImageWithFallback } from './figma/ImageWithFallback';

export function LiberationRevolution() {
    const points = [
        {
            id: 'a',
            title: 'Đi theo con đường cách mạng vô sản',
            content: 'Cách mạng giải phóng dân tộc muốn thắng lợi phải đi theo con đường cách mạng vô sản, gắn liền giải phóng dân tộc với giải phóng giai cấp.',
        },
        {
            id: 'b',
            title: 'Do Đảng Cộng sản lãnh đạo',
            content: 'Cách mạng giải phóng dân tộc, trong điều kiện của Việt Nam muốn thắng lợi phải do Đảng Cộng sản lãnh đạo để đảm bảo đường lối đúng đắn.',
        },
        {
            id: 'c',
            title: 'Dựa trên lực lượng đại đoàn kết toàn dân tộc',
            content: 'Cách mạng giải phóng dân tộc phải dựa trên lực lượng đại đoàn kết toàn dân tộc, lấy liên minh công - nông làm nền tảng vững chắc.',
        },
        {
            id: 'd',
            title: 'Chủ động, sáng tạo và tự lực cánh sinh',
            content: 'Cách mạng giải phóng dân tộc cần chủ động, sáng tạo, có khả năng giành thắng lợi trước cách mạng vô sản ở chính quốc.',
        },
        {
            id: 'e',
            title: 'Phương pháp bạo lực cách mạng',
            content: 'Cách mạng giải phóng dân tộc phải được tiến hành bằng phương pháp bạo lực cách mạng, kết hợp đấu tranh chính trị với đấu tranh vũ trang.',
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
                        Đường lối cách mạng
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
                            Để giành thắng lợi, cách mạng giải phóng dân tộc phải tuân thủ những nguyên tắc chiến lược, sách lược đúng đắn và sáng tạo.
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
                                src="https://images.unsplash.com/photo-1557858607-e85df646395b?q=80&w=1080&auto=format&fit=crop"
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
