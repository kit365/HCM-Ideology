import { useState, useRef, useEffect } from 'react';
import tuyenNgonDocLapAudio from '../audio/Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do độc lập.mp3';

// Trang trái Phần III (trang 6) - Layout hiện đại
export function Part3LeftPage() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        audioRef.current = new Audio(tuyenNgonDocLapAudio);
        audioRef.current.onended = () => setIsPlaying(false);

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        }
    }, []);

    const toggleAudio = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0; // Stop completely like other components
            setIsPlaying(false);
        } else {
            // Stop any other audio potentially playing (simple local logic, global state management would be better but keeping it contained as per current architecture)
            // For this specific iteration, we just handle local playback.
            audioRef.current.play().catch(e => console.error("Error playing audio:", e));
            setIsPlaying(true);
        }
    };

    return (
        <div style={{
            animation: 'pageIn 0.6s ease-out',
            position: 'relative',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* Tiêu đề */}
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.8rem', color: '#1A1A1A', marginBottom: '0.2rem', fontWeight: 'bold' }}>
                Phần III
            </h2>

            <h3 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.9rem', color: '#7B2D3E', marginBottom: '0.8rem', fontStyle: 'italic' }}>
                Độc Lập Thật Sự, Hoàn Toàn Và Triệt Để
            </h3>

            {/* Câu nói bao quát */}
            <div style={{
                marginBottom: '1rem',
                paddingRight: '1rem'
            }}>
                <p style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1rem',
                    color: '#1A1A1A',
                    fontStyle: 'italic',
                    fontWeight: '600',
                    lineHeight: '1.4',
                    margin: 0
                }}>
                    "Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì."
                </p>
            </div>


            {/* Intro */}
            <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.85rem', color: '#4A4A4A', lineHeight: '1.6', marginBottom: '0.8rem', textAlign: 'justify' }}>
                Hồ Chí Minh quan niệm độc lập không phải là cái vỏ bọc bên ngoài, mà phải nắm <strong>thực quyền</strong> trên mọi lĩnh vực: Quân sự, Ngoại giao, Kinh tế và Chính trị.
            </p>

            {/* Quote box 1 */}
            <div
                onClick={toggleAudio}
                style={{
                    background: 'linear-gradient(135deg, rgba(91, 163, 198, 0.15) 0%, rgba(91, 163, 198, 0.05) 100%)',
                    padding: '1rem',
                    borderRadius: '8px',
                    borderLeft: '4px solid #5BA3C6',
                    marginBottom: '0.5rem',
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    border: isPlaying ? '1px solid #5BA3C6' : '1px solid transparent'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.9rem', color: '#2A5A70', lineHeight: '1.5', fontStyle: 'italic', margin: 0, fontWeight: '500' }}>
                        "Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do độc lập."
                    </p>
                    {isPlaying ? (
                        <span style={{ fontSize: '1.2rem', marginLeft: '10px' }}>🔊</span>
                    ) : (
                        <span style={{ fontSize: '1.2rem', marginLeft: '10px', opacity: 0.5 }}>🔈</span>
                    )}
                </div>

                <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.8rem', color: '#5BA3C6', marginTop: '0.4rem', marginBottom: 0, fontWeight: '600' }}>
                    — Tuyên ngôn Độc lập, 2/9/1945
                </p>
            </div>

            {/* Quote box 2 */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(123, 45, 62, 0.12) 0%, rgba(123, 45, 62, 0.04) 100%)',
                padding: '1rem',
                borderRadius: '8px',
                borderLeft: '4px solid #7B2D3E',
                marginBottom: '0.5rem'
            }}>
                <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.9rem', color: '#5C2230', lineHeight: '1.5', fontStyle: 'italic', margin: 0, fontWeight: '500' }}>
                    "Độc lập mà không có quân đội riêng, ngoại giao riêng, kinh tế riêng thì không phải là độc lập."
                </p>
                <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.8rem', color: '#7B2D3E', marginTop: '0.4rem', marginBottom: 0, fontWeight: '600' }}>
                    — Giai đoạn đàm phán với Pháp, 1946
                </p>
            </div>

            {/* Quote box 3 */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(91, 163, 198, 0.15) 0%, rgba(91, 163, 198, 0.05) 100%)',
                padding: '1rem',
                borderRadius: '8px',
                borderLeft: '4px solid #5BA3C6'
            }}>
                <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.95rem', color: '#2A5A70', lineHeight: '1.5', fontStyle: 'italic', margin: 0 }}>
                    "Nam Bộ là máu của máu Việt Nam, là thịt của thịt Việt Nam. Sông có thể cạn, núi có thể mòn, song chân lý ấy không bao giờ thay đổi."
                </p>
                <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.8rem', color: '#5BA3C6', marginTop: '0.5rem', marginBottom: 0, fontWeight: '600' }}>
                    — Thư gửi đồng bào Nam Bộ, 1946
                </p>
            </div>

            {/* Số trang */}
            <div style={{ position: 'absolute', bottom: '10px', left: '10px', fontFamily: "'Lora', Georgia, serif", fontSize: '0.85rem', color: '#999' }}>6</div>
        </div >
    );
}

// Trang phải Phần III (trang 7) - Phê phán độc lập giả hiệu
export function Part3RightPage() {
    return (
        <div style={{ animation: 'pageIn 0.6s ease-out', position: 'relative', height: '100%', overflow: 'hidden' }}>
            {/* Header với accent */}
            <div style={{
                background: 'linear-gradient(90deg, #7B2D3E 0%, #5C2230 100%)',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                marginBottom: '0.75rem'
            }}>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.2rem', color: 'white', margin: 0, fontWeight: 'bold' }}>
                    Phê Phán "Độc Lập Giả Hiệu"
                </h3>
            </div>

            <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.9rem', color: '#666', marginBottom: '0.6rem', lineHeight: '1.5' }}>
                Bác vạch trần chế độ thực dân núp bóng "bảo hộ" hoặc "trao trả độc lập giả tạo":
            </p>

            {/* Grid các biểu hiện */}
            {/* Grid các biểu hiện */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '0.6rem' }}>
                <div style={{ backgroundColor: 'rgba(139, 69, 19, 0.1)', padding: '0.5rem', borderRadius: '6px', textAlign: 'center' }}>
                    <span style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.8rem', color: '#8B4513', fontWeight: '600' }}>Bóc lột kinh tế</span>
                </div>
                <div style={{ backgroundColor: 'rgba(139, 69, 19, 0.1)', padding: '0.5rem', borderRadius: '6px', textAlign: 'center' }}>
                    <span style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.8rem', color: '#8B4513', fontWeight: '600' }}>Áp bức chính trị</span>
                </div>
                <div style={{ backgroundColor: 'rgba(139, 69, 19, 0.1)', padding: '0.5rem', borderRadius: '6px', textAlign: 'center' }}>
                    <span style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.8rem', color: '#8B4513', fontWeight: '600' }}>Nô dịch văn hóa</span>
                </div>
                <div style={{ backgroundColor: 'rgba(139, 69, 19, 0.1)', padding: '0.5rem', borderRadius: '6px', textAlign: 'center' }}>
                    <span style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.8rem', color: '#8B4513', fontWeight: '600' }}>Không quyền tự quyết</span>
                </div>
                <div style={{ backgroundColor: 'rgba(139, 69, 19, 0.1)', padding: '0.5rem', borderRadius: '6px', textAlign: 'center', gridColumn: 'span 2' }}>
                    <span style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.8rem', color: '#8B4513', fontWeight: '600' }}>Chế độ ăn cướp</span>
                </div>
            </div>


            {/* Kết luận - Highlight */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(123, 45, 62, 0.15) 0%, rgba(123, 45, 62, 0.08) 100%)',
                padding: '0.75rem',
                borderRadius: '8px',
                border: '1px solid rgba(123, 45, 62, 0.3)'
            }}>
                <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.85rem', color: '#4A4A4A', lineHeight: '1.5', margin: 0 }}>
                    <strong style={{ color: '#7B2D3E' }}>1948:</strong> Khi Pháp dựng chính quyền Bảo Đại, Hồ Chí Minh gọi đó là <strong style={{ color: '#7B2D3E', fontSize: '0.9rem' }}>"Độc lập bánh vẽ"</strong> — thực chất chỉ là chính quyền bù nhìn.
                </p>
            </div>

            {/* Chú thích */}
            <p style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: '0.75rem',
                color: '#888',
                marginTop: '1rem',
                borderTop: '1px solid #ddd',
                paddingTop: '0.5rem',
                fontStyle: 'italic'
            }}>
                * <strong>Độc lập giả hiệu</strong>: Là nền độc lập hình thức, không có thực quyền, chính quyền bản xứ chỉ là bù nhìn, mọi quyền quyết định quan trọng vẫn nằm trong tay thực dân/đế quốc.
            </p>


            {/* Số trang */}
            <div style={{ position: 'absolute', bottom: '10px', right: '10px', fontFamily: "'Lora', Georgia, serif", fontSize: '0.85rem', color: '#999' }}>7</div>
        </div >
    );
}
