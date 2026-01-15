import { useState, useRef, useEffect } from 'react';
import { Part1Page2 } from './Part1Page2';
import { Part2LeftPage } from './Part2LeftPage';
import { Part2RightPage } from './Part2RightPage';
import tuyenNgonAudio from '../audio/cd80510c4c31f8f1b26e234bcfa7658c01_-_Tuyen_ngon_doc_lap_103854.mp3';
import tatCaDanTocAudio from '../audio/tatrcadantoctrenthegioideusinhrabinhdang.mp3';


interface BookProps {
    onClose: () => void;
}

export function Book({ onClose }: BookProps) {
    const [currentPage, setCurrentPage] = useState(0);
    const [playingQuote, setPlayingQuote] = useState<string | null>(null);
    const currentAudioRef = useRef<HTMLAudioElement | null>(null);

    // Cleanup audio when component unmounts (close book)
    useEffect(() => {
        return () => {
            if (currentAudioRef.current) {
                currentAudioRef.current.pause();
                currentAudioRef.current = null;
            }
        };
    }, []);

    // Use the uploaded Ho Chi Minh image
    const hoChiMinhImage = "/src/Screenshot 2026-01-15 001843.png"; // Ảnh bạn đã upload

    // Audio clips for Ho Chi Minh's quotes
    const audioQuotes: { [key: string]: string } = {
        'khong-co-gi-quy-hon': tuyenNgonAudio, // Tạm thời dùng chung file (cần file riêng cho chính xác)
        'tat-ca-moi-nguoi': tatCaDanTocAudio, // ✅ Audio đã cắt: "Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng..."
        'doc-lap-tu-do-quyen': tuyenNgonAudio, // Tạm thời dùng chung
    };

    const playQuote = (quoteId: string) => {
        console.log('=== playQuote called ===');
        console.log('quoteId:', quoteId);
        console.log('audioQuotes:', audioQuotes);
        console.log('audioQuotes[quoteId]:', audioQuotes[quoteId]);

        // Stop current audio if any
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current = null;
        }

        // If clicking the same quote that is playing, just stop it (toggle off)
        if (playingQuote === quoteId) {
            setPlayingQuote(null);
            return;
        }

        // Play new quote
        setPlayingQuote(quoteId);

        const audioSrc = audioQuotes[quoteId];
        console.log('Creating Audio with src:', audioSrc);

        const audio = new Audio(audioSrc);
        audio.volume = 1.0; // Đảm bảo volume max
        currentAudioRef.current = audio;

        console.log('Attempting to play...');
        audio.play()
            .then(() => {
                console.log('✅ Audio playing successfully!');
            })
            .catch((err) => {
                console.error('❌ Audio playback failed:', err);
                setPlayingQuote(null);
            });

        audio.onended = () => {
            console.log('Audio ended');
            setPlayingQuote(null);
            currentAudioRef.current = null;
        };
    };

    // Detailed book pages based on research
    const pages = [
        {
            title: "Tư Tưởng Hồ Chí Minh",
            subtitle: "Về Độc Lập Dân Tộc",
            content: `Tư tưởng Hồ Chí Minh về độc lập dân tộc là một hệ thống quan điểm toàn diện, sâu sắc và nhân văn cao cả về vấn đề cơ bản nhất của dân tộc Việt Nam trong thời kỳ đấu tranh giải phóng.

Người đã làm sáng tỏ bản chất, ý nghĩa, phạm vi và con đường thực hiện độc lập dân tộc một cách khoa học và thực tiễn, tạo nền tảng tư tưởng vững chắc cho cách mạng Việt Nam.

Trước hết, chúng ta cần hiểu rõ những vấn đề cơ bản về độc lập dân tộc trong tư tưởng Hồ Chí Minh.`,
            showImage: true,
            hasAudio: false
        },
        {
            title: "Phần I",
            subtitle: "Độc Lập, Tự Do - Quyền Thiêng Liêng, Bất Khả Xâm Phạm của Tất Cả Các Dân Tộc",
            content: `Lịch sử dựng nước và giữ nước của dân tộc Việt Nam từ ngàn xưa đến nay gắn liền với truyền thống yêu nước, đấu tranh chống giặc ngoại xâm.

Điều đó nói lên một khát khao to lớn của dân tộc ta là: luôn mong muốn một nền độc lập cho dân tộc, tự do cho nhân dân.

Đó cũng là một giá trị tinh thần thiêng liêng, bất hủ của dân tộc, là động lực mạnh mẽ thúc đẩy mọi người Việt Nam đứng lên đấu tranh giành lại quyền sống, quyền làm người.`,
            showImage: false,
            hasAudio: false
        },
        {
            title: "Phần II",
            subtitle: "Gắn Với Tự Do, Cơm No, Áo Ấm, Và Hạnh Phúc của Nhân Dân",
            content: `Xuyên suốt tư tưởng của Người:

• Độc lập dân tộc phải gắn với tự do của nhân dân.

• Độc lập phải thiết thực, tức là phải gắn với cơm no, áo ấm và hạnh phúc của nhân dân.

Theo Hồ Chí Minh, độc lập dân tộc phải gắn với tự do của nhân dân. Ngoài ra, độc lập cũng phải gắn với cơm no, áo ấm và hạnh phúc của nhân dân.`,
            showImage: false
        },
        {
            title: "Phần II",
            subtitle: "Gắn Với Tự Do, Cơm No, Áo Ấm, Và Hạnh Phúc của Nhân Dân",
            content: `Trong Chánh cương vắn tắt của Đảng (1930), Người đã nêu rõ mục tiêu:

_"Làm cho nước Nam được hoàn toàn độc lập... dân chúng được tự do... thủ tiêu hết các thứ quốc trái... thâu hết ruộng đất của đế quốc chủ nghĩa làm của công chia cho dân cày nghèo. Bỏ sưu thuế cho dân cày nghèo... thi hành luật ngày làm 8 giờ."_
— Chánh cương vắn tắt của Đảng

Đây là quan niệm tiến bộ, toàn diện về độc lập dân tộc gắn liền với quyền và lợi ích thiết thực của nhân dân lao động.`,
            showImage: false
        },
        {
            title: "Phần III",
            subtitle: "Độc Lập Thật Sự, Hoàn Toàn (1/2)",
            content: `Hồ Chí Minh nhấn mạnh độc lập dân tộc phải là nền độc lập thật sự, hoàn toàn và triệt để, không chỉ về hình thức mà phải thực chất trên mọi lĩnh vực: chính trị, kinh tế, văn hóa, xã hội, quốc phòng, an ninh.

Người kiên quyết đấu tranh chống mọi hình thức độc lập giả, độc lập nửa vời, độc lập bù nhìn, độc lập chỉ về mặt hình thức.Độc lập phải có nội dung thực chất, phải thực sự thuộc về nhân dân, do nhân dân làm chủ.

Nền độc lập thật sự phải được củng cố bằng nền kinh tế tự chủ, văn hóa dân tộc phát triển, và chế độ chính trị do nhân dân làm chủ thực sự.`,
            showImage: false
        },
        {
            title: "Phần III",
            subtitle: "Độc Lập Thật Sự, Hoàn Toàn (2/2)",
            content: `Độc lập về chính trị phải đi đôi với độc lập về kinh tế, tự chủ về văn hóa.Chỉ có như vậy, nền độc lập mới thực sự bền vững, không bị lung lay trước mọi thử thách.

** Lời Bác dạy:**

    _"Chúng ta phải giữ vững độc lập, thống nhất, chủ quyền và toàn vẹn lãnh thổ của Tổ quốc."_

_"Muốn có nền độc lập thật sự, hoàn toàn, dân ta phải ra sức xây dựng nước nhà cho giàu mạnh."_

_"Độc lập về chính trị mà không độc lập về kinh tế thì cũng chưa phải là độc lập hoàn toàn."_

_"Độc lập dân tộc phải thật sự, hoàn toàn, không thể có độc lập nửa vời."_

Tư tưởng này thể hiện tầm nhìn chiến lược, toàn diện về xây dựng và bảo vệ nền độc lập dân tộc bền vững.`,
            showImage: false
        },
        {
            title: "Phần IV",
            subtitle: "Gắn Với Thống Nhất, Toàn Vẹn Lãnh Thổ (1/2)",
            content: `Trong tư tưởng Hồ Chí Minh, độc lập dân tộc, thống nhất đất nước và toàn vẹn lãnh thổ là ba vấn đề có mối quan hệ hữu cơ, gắn bó chặt chẽ, không thể tách rời nhau.

Không có độc lập thì không thể thống nhất đất nước.Không có thống nhất thì độc lập không trọn vẹn, không bền vững.Không giữ được toàn vẹn lãnh thổ thì độc lập và thống nhất đều mất ý nghĩa.

Từ khi giành được độc lập năm 1945 cho đến khi đi xa vào năm 1969, Chủ tịch Hồ Chí Minh luôn luôn hướng về mục tiêu thống nhất đất nước, giải phóng hoàn toàn miền Nam yêu dấu.`,
            showImage: false
        },
        {
            title: "Phần IV",
            subtitle: "Gắn Với Thống Nhất, Toàn Vẹn Lãnh Thổ (2/2)",
            content: `Trong Di chúc thiêng liêng, Người dành những dòng xúc động nhất cho sự nghiệp thống nhất non sông, khẳng định niềm tin vào thắng lợi cuối cùng của dân tộc.

** Lời Bác dạy:**

    _"Sông có thể cạn, núi có thể mòn, song chân lý ấy không bao giờ thay đổi: không có gì quý hơn độc lập, tự do!"_

_"Dù phải hy sinh tất cả, dù phải đốt cháy cả dãy Trường Sơn, chúng ta cũng kiên quyết giành cho được độc lập."_

_"Bắc - Nam sum họp, non sông liền một dải, núi Trường Sơn nghìn dặm, một nhà Nam - Bắc."_

_"Cuộc kháng chiến chống Mỹ cứu nước có thể còn kéo dài. Đồng bào ta có thể phải hy sinh nhiều của, nhiều người. Nhưng dù sao chúng ta cũng phải quyết tâm đánh đến thắng lợi hoàn toàn."_

Đây là khát vọng cháy bỏng, là ý chí thép của dân tộc, là động lực to lớn thúc đẩy nhân dân Việt Nam vượt qua mọi khó khăn, gian khổ, hy sinh để bảo vệ và giành lại độc lập, thống nhất.`,
            showImage: false
        },
        {
            title: "Chương 1",
            subtitle: "Con Đường Tìm Đến Chủ Nghĩa Mác-Lênin",
            content: `Sinh ra trong thời kỳ Việt Nam trở thành thuộc địa của Pháp, Hồ Chí Minh từ nhỏ đã chứng kiến cảnh đau khổ, nghèo khó của đồng bào dưới ách áp bức của thực dân.Người đã sớm nung nấu ý chí giải phóng dân tộc.

Sau khi ra đi tìm đường cứu nước, Người đã nghiên cứu nhiều học thuyết và phong trào cách mạng khác nhau trên thế giới.Cuối cùng, Người tìm thấy con đường giải phóng dân tộc đúng đắn nhất là con đường cách mạng vô sản - chủ nghĩa Mác - Lênin.

Bước ngoặt quan trọng là khi đọc "Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa" của Lênin, Người đã tìm ra chân lý: "Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản".`,
            showImage: false
        },
        {
            title: "Chương 2",
            subtitle: "Độc Lập Dân Tộc - Mục Tiêu Cao Cả Nhất",
            content: `Hồ Chí Minh khẳng định độc lập dân tộc là quyền thiêng liêng, bất khả xâm phạm của mỗi dân tộc.Đây là mục tiêu cao cả nhất, là nhiệm vụ trước hết và cấp bách của cách mạng Việt Nam.

Người tuyên bố: "Không có gì quý hơn độc lập tự do" và "Thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ".Quyết tâm giải phóng dân tộc của Người thể hiện ở câu nói nổi tiếng: Người sẵn sàng "đốt cháy cả dãy Trường Sơn" để giành lại độc lập.

Tư tưởng này đã trở thành ngọn cờ tập hợp toàn dân tộc, động viên mọi tầng lớp nhân dân đứng lên đấu tranh chống kẻ thù xâm lược, giành lại độc lập tự do cho Tổ quốc.`,
            showImage: false
        },
        {
            title: "Chương 3",
            subtitle: "Sức Mạnh Của Nhân Dân",
            content: `Hồ Chí Minh luôn tin tưởng sâu sắc vào sức mạnh vô địch của nhân dân.Người khẳng định: "Dân ta có một điều quý nhất là thích độc lập, tự do" và "Không có việc gì khó, chỉ sợ lòng không bền, đào núi và lấp biển, quyết chí ắt làm nên".

Cách mạng giải phóng dân tộc phải dựa vào sức mạnh của quần chúng nhân dân, phát huy tinh thần yêu nước, ý chí tự lực cánh sinh của dân tộc.Người luôn nhấn mạnh: "Dân là gốc nước", "Dân mạnh thì nước mạnh".

Người đã xây dựng được khối đại đoàn kết toàn dân tộc, tập hợp mọi lực lượng yêu nước vào mặt trận thống nhất rộng rãi để cùng nhau đấu tranh giải phóng dân tộc.`,
            showImage: false
        },
        {
            title: "Chương 4",
            subtitle: "Kết Hợp Đấu Tranh Vũ Trang Và Chính Trị",
            content: `Tư tưởng Hồ Chí Minh về cách mạng giải phóng dân tộc đặc biệt nhấn mạnh sự kết hợp chặt chẽ giữa đấu tranh vũ trang và đấu tranh chính trị, giữa chiến tranh du kích và chiến tranh chính quy.

Người chỉ rõ: "Chính trị trọng hơn quân sự, dân quân trọng hơn quân chính quy".Chiến tranh nhân dân là hình thức đấu tranh cao nhất, trong đó toàn dân tham gia, mọi người đều là chiến sĩ.

Chiến lược "toàn dân, toàn diện, lâu dài, dựa vào sức mình là chính" đã giúp nhân dân Việt Nam giành được những thắng lợi vĩ đại trong cuộc kháng chiến chống thực dân Pháp và đế quốc Mỹ.`,
            showImage: false
        },
        {
            title: "Chương 5",
            subtitle: "Vai Trò Lãnh Đạo Của Đảng",
            content: `Hồ Chí Minh khẳng định vai trò lãnh đạo tuyệt đối của Đảng Cộng sản là yếu tố quyết định thắng lợi của cách mạng giải phóng dân tộc.Đảng là bộ tham mưu, là người lãnh đạo, tổ chức và định hướng cho cách mạng.

Người nhấn mạnh: "Có Đảng Cộng sản Việt Nam là nhờ có chủ nghĩa Mác-Lênin" và "Đảng phải thật sự là đạo đức, là văn minh, là đội tiên phong của giai cấp công nhân và của nhân dân lao động".

Đảng phải luôn gắn bó mật thiết với nhân dân, phục vụ nhân dân, lãnh đạo nhân dân giành những thắng lợi trên con đường giải phóng dân tộc và xây dựng đất nước.`,
            showImage: false
        },
        {
            title: "Chương 6",
            subtitle: "Kết Hợp Sức Mạnh Dân Tộc Với Sức Mạnh Thời Đại",
            content: `Tư tưởng Hồ Chí Minh về cách mạng giải phóng dân tộc còn thể hiện ở việc kết hợp sức mạnh dân tộc với sức mạnh thời đại, kết hợp chủ nghĩa yêu nước với chủ nghĩa quốc tế vô sản.

Người luôn coi trọng đoàn kết quốc tế, tranh thủ sự ủng hộ của các lực lượng tiến bộ trên thế giới.Người khẳng định: "Cách mạng Việt Nam là một bộ phận của cách mạng thế giới".

Đây là tư tưởng chiến lược lớn, đã tạo nên sức mạnh tổng hợp giúp nhân dân Việt Nam chiến thắng những kẻ thù hùng mạnh, giành được độc lập, tự do và thống nhất đất nước.`,
            showImage: false
        }
    ];

    // Helper function to stop current audio
    const stopAudio = () => {
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current = null;
        }
        setPlayingQuote(null);
    };

    const nextPage = () => {
        if (currentPage < pages.length - 1) {
            stopAudio(); // Dừng audio khi chuyển trang
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            stopAudio(); // Dừng audio khi chuyển trang
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                animation: 'fadeIn 0.5s ease-out'
            }}
        >
            {/* Close button */}
            <button
                onClick={onClose}
                className="transition-all duration-300"
                style={{
                    position: 'fixed',
                    top: '2rem',
                    right: '2rem',
                    zIndex: 100,
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    border: '2px solid rgba(255, 255, 255, 0.5)',
                    fontSize: '2rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    lineHeight: '1'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                    e.currentTarget.style.borderColor = 'white';
                    e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                    e.currentTarget.style.transform = 'scale(1)';
                }}
            >
                ×
            </button>

            {/* Book container */}
            <div
                className="relative"
                style={{
                    perspective: '2000px',
                    animation: 'bookOpen 1s ease-out'
                }}
            >
                {/* Bìa sách - màu đỏ đô giống hộ chiếu Việt Nam */}
                <div style={{
                    background: 'linear-gradient(135deg, #8B0000 0%, #660000 50%, #4A0000 100%)',
                    padding: '12px',
                    borderRadius: '4px 12px 12px 4px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.5), inset 0 0 60px rgba(0,0,0,0.3)',
                    border: '2px solid #C9A227',
                    position: 'relative'
                }}>
                    {/* Họa tiết viền vàng */}
                    <div style={{
                        position: 'absolute',
                        top: '6px',
                        left: '6px',
                        right: '6px',
                        bottom: '6px',
                        border: '1px solid rgba(201, 162, 39, 0.5)',
                        borderRadius: '2px 10px 10px 2px',
                        pointerEvents: 'none'
                    }}></div>

                    <div
                        className="relative"
                        style={{
                            width: '1000px',
                            height: '700px',
                            maxWidth: '88vw',
                            maxHeight: '82vh',
                            transformStyle: 'preserve-3d',
                            borderRadius: '2px 8px 8px 2px',
                            overflow: 'hidden'
                        }}
                    >
                        {/* LEFT PAGE */}
                        <div
                            className="absolute left-0 top-0"
                            style={{
                                width: '50%',
                                height: '100%',
                                backgroundColor: currentPage === 2 ? 'transparent' : '#FDFBF7',
                                padding: currentPage === 2 ? '0' : '60px 50px',
                                boxShadow: currentPage === 2 ? 'none' : 'inset -10px 0 20px rgba(0,0,0,0.1)',
                                borderLeft: currentPage === 2 ? 'none' : '2px solid #d4c5a0',
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden'
                            }}
                        >
                            {currentPage > 0 ? (
                                currentPage === 2 ? (
                                    /* Phần II - Trang trái: nền đỏ đô với video */
                                    <Part2LeftPage />
                                ) : (
                                    <div style={{ animation: 'pageIn 0.6s ease-out' }}>
                                        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '2rem', color: '#1A1A1A', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                                            {pages[currentPage]?.title}
                                        </h2>
                                        <h3 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '1rem', color: '#7B2D3E', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                                            {pages[currentPage]?.subtitle}
                                        </h3>
                                        <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.95rem', color: '#4A4A4A', lineHeight: '1.7', textAlign: 'justify', whiteSpace: 'pre-line' }}>
                                            {pages[currentPage]?.content}
                                        </p>
                                        <div style={{ position: 'absolute', bottom: '40px', left: '50px', fontFamily: "'Lora', Georgia, serif", fontSize: '0.9rem', color: '#999' }}>
                                            {currentPage * 2}
                                        </div>
                                    </div>
                                )
                            ) : (
                                /* Trang trái đầu tiên - hiển thị ảnh Bác Hồ */
                                currentPage === 0 && pages[0]?.showImage && (
                                    <div style={{ animation: 'pageIn 0.6s ease-out', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                        <div style={{ border: '3px solid #d4c5a0', padding: '8px', backgroundColor: '#f5f5f0', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
                                            <img
                                                src={hoChiMinhImage}
                                                alt="Chân dung Chủ tịch Hồ Chí Minh"
                                                style={{ width: '100%', maxWidth: '360px', height: 'auto', maxHeight: '500px', objectFit: 'contain', filter: 'sepia(0.3) contrast(1.1)', display: 'block' }}
                                            />
                                            <div style={{ marginTop: '0.75rem', textAlign: 'center', fontFamily: "'Lora', Georgia, serif", fontSize: '0.8rem', color: '#888', fontStyle: 'italic' }}>
                                                Chủ tịch Hồ Chí Minh<br />(1890-1969)
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>

                        {/* RIGHT PAGE - Nội dung giới thiệu */}
                        <div
                            className="absolute right-0 top-0"
                            style={{
                                width: '50%',
                                height: '100%',
                                backgroundColor: '#FDFBF7',
                                padding: '60px 50px',
                                boxShadow: 'inset 10px 0 20px rgba(0,0,0,0.1)',
                                borderRight: '2px solid #d4c5a0',
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden'
                            }}
                        >
                            {currentPage < pages.length && (
                                <>
                                    {currentPage === 1 ? (
                                        /* Sử dụng component đặc biệt có audio cho Phần I */
                                        <Part1Page2 playingQuote={playingQuote} onPlayQuote={playQuote} />
                                    ) : currentPage === 2 ? (
                                        /* Phần II - trang phải: nội dung đầy đủ */
                                        <Part2RightPage />
                                    ) : (
                                        /* Render nội dung bình thường cho các trang khác */
                                        <div style={{ animation: 'pageIn 0.6s ease-out' }}>
                                            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '2rem', color: '#1A1A1A', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                                                {pages[currentPage === 0 ? 0 : currentPage + 1]?.title}
                                            </h2>
                                            <h3 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '1rem', color: '#7B2D3E', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                                                {pages[currentPage === 0 ? 0 : currentPage + 1]?.subtitle}
                                            </h3>
                                            <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.95rem', color: '#4A4A4A', lineHeight: '1.7', textAlign: 'justify', whiteSpace: 'pre-line' }}>
                                                {pages[currentPage === 0 ? 0 : currentPage + 1]?.content}
                                            </p>
                                        </div>
                                    )}

                                    {/* Số trang */}
                                    <div style={{ position: 'absolute', bottom: '40px', right: '50px', fontFamily: "'Lora', Georgia, serif", fontSize: '0.9rem', color: '#999' }}>
                                        {currentPage === 0 ? 1 : currentPage * 2 + 1}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Book spine */}
                        <div style={{ position: 'absolute', left: '50%', top: '0', width: '20px', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0,0.2), transparent, rgba(0,0,0,0.2))', transform: 'translateX(-50%)', pointerEvents: 'none' }}></div>
                    </div>

                    {/* Navigation */}
                    <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4" style={{ width: 'calc(100% + 100px)', left: '-50px', pointerEvents: 'none' }}>
                        <button onClick={prevPage} disabled={currentPage === 0} className="transition-all duration-300" style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: currentPage === 0 ? '#ccc' : '#7B2D3E', color: 'white', border: 'none', fontSize: '1.5rem', cursor: currentPage === 0 ? 'not-allowed' : 'pointer', opacity: currentPage === 0 ? 0.5 : 1, pointerEvents: 'auto' }} onMouseEnter={(e) => { if (currentPage > 0) { e.currentTarget.style.backgroundColor = '#5C2230'; e.currentTarget.style.transform = 'scale(1.1)'; } }} onMouseLeave={(e) => { if (currentPage > 0) { e.currentTarget.style.backgroundColor = '#7B2D3E'; e.currentTarget.style.transform = 'scale(1)'; } }}>‹</button>
                        <button onClick={nextPage} disabled={currentPage >= pages.length - 1} className="transition-all duration-300" style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: currentPage >= pages.length - 1 ? '#ccc' : '#7B2D3E', color: 'white', border: 'none', fontSize: '1.5rem', cursor: currentPage >= pages.length - 1 ? 'not-allowed' : 'pointer', opacity: currentPage >= pages.length - 1 ? 0.5 : 1, pointerEvents: 'auto' }} onMouseEnter={(e) => { if (currentPage < pages.length - 1) { e.currentTarget.style.backgroundColor = '#5C2230'; e.currentTarget.style.transform = 'scale(1.1)'; } }} onMouseLeave={(e) => { if (currentPage < pages.length - 1) { e.currentTarget.style.backgroundColor = '#7B2D3E'; e.currentTarget.style.transform = 'scale(1)'; } }}>›</button>
                    </div>
                </div>
            </div>

            <style>{`
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes bookOpen { from { transform: scale(0.8) rotateY(-20deg); opacity: 0; } to { transform: scale(1) rotateY(0deg); opacity: 1; } }
@keyframes pageIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
`}</style>
        </div>
    );
}
