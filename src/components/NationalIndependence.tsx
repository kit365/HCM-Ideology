import { ImageWithFallback } from './figma/ImageWithFallback';

export function NationalIndependence() {
    const points = [
        {
            id: 'a',
            title: 'Độc lập, tự do là quyền thiêng liêng, bất khả xâm phạm',
            content: 'Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng, dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do.',
        },
        {
            id: 'b',
            title: 'Gắn liền với tự do, cơm no, áo ấm và hạnh phúc',
            content: 'Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì.',
        },
        {
            id: 'c',
            title: 'Nền độc lập thật sự, hoàn toàn và triệt để',
            content: 'Độc lập hoàn toàn chứ không phải là thứ độc lập giả hiệu. Phải có quyền tự quyết về mọi mặt: chính trị, kinh tế, quốc phòng, ngoại giao.',
        },
        {
            id: 'd',
            title: 'Gắn liền với thống nhất và toàn vẹn lãnh thổ',
            content: 'Đồng bào Nam Bắc là con một nhà, nước Việt Nam là một, dân tộc Việt Nam là một.',
        }
    ];

    return (
        <section id="doc-lap-dan-toc" className="py-24 bg-[#F5F0E8] relative overflow-hidden">
            {/* Background section number */}
            <div className="absolute top-0 right-0 select-none pointer-events-none" style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '25rem',
                fontWeight: 600,
                color: 'rgba(0,0,0,0.02)',
                lineHeight: 1,
                transform: 'translate(20%, -10%)'
            }}>
                02
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block text-[0.65rem] font-medium tracking-[0.2em] uppercase text-[#7B2D3E] mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
                        Vấn đề cơ bản
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                        Độc Lập Dân Tộc
                    </h2>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-[#7B2D3E] to-[#C9A227] mx-auto"></div>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Image Column - Sticky */}
                    <div className="order-2 lg:order-1 relative lg:sticky lg:top-24">
                        <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1580666619107-09125350b838?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxobyUyMGNoaSUyMG1pbmglMjBzdGF0dWV8ZW58MXx8fHwxNzY4MzE1MDM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                                alt="Ho Chi Minh"
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

                    {/* Content Column */}
                    <div className="space-y-8 order-1 lg:order-2">
                        {/* Intro text */}
                        <p className="text-lg leading-relaxed text-[#4A4A4A] mb-8" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                            Tư tưởng Hồ Chí Minh về vấn đề dân tộc và cách mạng giải phóng dân tộc là một hệ thống quan điểm toàn diện và sâu sắc, là ngọn đuốc soi đường cho cách mạng Việt Nam.
                        </p>

                        {/* Points */}
                        <div className="space-y-6">
                            {points.map((point, index) => (
                                <div
                                    key={index}
                                    className="group p-6 bg-[#FDFBF7] rounded-lg border border-black/5 hover:border-[#7B2D3E]/20 transition-all duration-300 hover:shadow-lg"
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

                        {/* CTA */}
                        <button
                            onClick={() => document.getElementById('cach-mang-giai-phong')?.scrollIntoView({ behavior: 'smooth' })}
                            className="inline-flex items-center gap-2 text-[#7B2D3E] hover:text-[#5C2230] text-sm tracking-[0.1em] uppercase font-medium transition-colors group mt-8"
                            style={{ fontFamily: 'system-ui, sans-serif' }}
                        >
                            Tiếp tục
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
