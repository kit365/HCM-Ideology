import { useState, useEffect } from 'react';

// Part 9 - Left Page: Phương pháp bạo lực cách mạng
export function Part9LeftPage() {
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsRevealed(true), 200);
        return () => clearTimeout(timer);
    }, []);

    const foundations = [
        { text: "Giải phóng dân tộc là một cuộc cách mạng bạo lực." },
        { text: "Sự thống trị thực dân, đế quốc không có cơ sở cho đấu tranh phi bạo lực." },
        { text: "Giai cấp thống trị không bao giờ tự nguyện từ bỏ địa vị." }
    ];

    return (
        <div style={{
            width: '100%', height: '100%',
            backgroundColor: '#F4F1EA', // Nền giấy cũ đồng bộ
            display: 'flex', flexDirection: 'column',
            padding: '2rem', boxSizing: 'border-box',
            position: 'relative', overflow: 'hidden',
            color: '#222',
            backgroundImage: 'radial-gradient(#d1d1d1 1px, transparent 1px)',
            backgroundSize: '30px 30px'
        }}>
            {/* Header */}
            <div style={{
                textAlign: 'center', marginBottom: '1.5rem',
                opacity: isRevealed ? 1 : 0,
                transform: isRevealed ? 'translateY(0)' : 'translateY(-20px)',
                transition: 'all 0.6s ease'
            }}>
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.7rem', letterSpacing: '2px', color: '#8B2323', fontWeight: 'bold', display: 'block' }}>
                    HỆ THỐNG QUAN ĐIỂM
                </span>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: '900', color: '#1A1A1A', margin: '0.2rem 0' }}>
                    Phần IX
                </h2>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', color: '#8B2323', fontStyle: 'italic', fontWeight: 'bold' }}>
                    Phương Pháp Bạo Lực Cách Mạng
                </h3>
            </div>

            {/* Main Quote Box */}
            <div style={{
                backgroundColor: '#fff',
                padding: '1.2rem',
                borderRadius: '2px',
                borderLeft: '5px solid #8B2323',
                boxShadow: '5px 5px 15px rgba(0,0,0,0.05)',
                marginBottom: '1.5rem',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.2s'
            }}>
                <p style={{ fontFamily: "'Lora', serif", fontSize: '0.95rem', color: '#1A1A1A', lineHeight: '1.6', fontStyle: 'italic', margin: 0, textAlign: 'center' }}>
                    "Cách mạng giải phóng dân tộc phải được tiến hành bằng <span style={{ color: '#8B2323', fontWeight: 'bold' }}>phương pháp bạo lực cách mạng</span>."
                </p>
            </div>

            {/* Foundations list */}
            <div style={{ flex: 1, opacity: isRevealed ? 1 : 0, transition: 'all 0.6s ease 0.4s' }}>
                <h4 style={{ color: '#8B2323', fontFamily: "'Cinzel', serif", fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.8rem', letterSpacing: '1px' }}>
                    CƠ SỞ KHẲNG ĐỊNH:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {foundations.map((item, index) => (
                        <div key={index} style={{
                            background: 'rgba(255,255,255,0.6)',
                            padding: '0.8rem',
                            border: '1px solid rgba(139, 35, 35, 0.1)',
                            borderRight: '3px solid #C9A227'
                        }}>
                            <p style={{ fontFamily: "'Lora', serif", fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Page number */}
            <div style={{ position: 'absolute', bottom: '15px', left: '15px', fontFamily: "'Cinzel', serif", fontSize: '0.8rem', color: '#8B2323', fontWeight: 'bold' }}>
                26
            </div>
        </div>
    );
}

// Part 9 - Right Page: Nội dung và hình thức bạo lực cách mạng
export function Part9RightPage() {
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsRevealed(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{
            width: '100%', height: '100%',
            backgroundColor: '#F4F1EA',
            display: 'flex', flexDirection: 'column',
            padding: '2rem', boxSizing: 'border-box',
            position: 'relative',
            backgroundImage: 'radial-gradient(#d1d1d1 1px, transparent 1px)',
            backgroundSize: '30px 30px'
        }}>
            {/* Header */}
            <div style={{
                textAlign: 'center', marginBottom: '1.5rem',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.5s ease',
                borderBottom: '1px solid #C9A227',
                paddingBottom: '0.5rem'
            }}>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.1rem', color: '#8B2323', fontWeight: 'bold', margin: 0, letterSpacing: '1px' }}>
                    NỘI DUNG VÀ HÌNH THỨC
                </h3>
            </div>

            {/* Section 2: Hai lực lượng */}
            <div style={{ marginBottom: '1.5rem', opacity: isRevealed ? 1 : 0, transition: 'all 0.6s ease 0.2s' }}>
                <h4 style={{ color: '#1A1A1A', fontFamily: "'Playfair Display', serif", fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '0.8rem', textAlign: 'center' }}>
                    Hai lực lượng cốt lõi
                </h4>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    {['Lực lượng Chính trị', 'Lực lượng Quân sự'].map((text, i) => (
                        <div key={i} style={{
                            flex: 1, backgroundColor: '#8B2323', padding: '0.8rem', textAlign: 'center',
                            boxShadow: '3px 3px 0px #C9A227'
                        }}>
                            <span style={{ color: '#fff', fontFamily: "'Cinzel', serif", fontSize: '0.75rem', fontWeight: 'bold' }}>{text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section 3: Hai hình thức đấu tranh */}
            <div style={{ marginBottom: '1.5rem', opacity: isRevealed ? 1 : 0, transition: 'all 0.6s ease 0.4s' }}>
                <h4 style={{ color: '#1A1A1A', fontFamily: "'Playfair Display', serif", fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '0.8rem', textAlign: 'center' }}>
                    Hai hình thức đấu tranh
                </h4>
                <div style={{ display: 'grid', gap: '0.8rem' }}>
                    <div style={{ border: '1px solid #8B2323', padding: '0.7rem', backgroundColor: '#fff', textAlign: 'center' }}>
                        <span style={{ color: '#8B2323', fontFamily: "'Cinzel', serif", fontSize: '0.8rem', fontWeight: 'bold' }}>ĐẤU TRANH CHÍNH TRỊ</span>
                    </div>
                    <div style={{ border: '1px solid #8B2323', padding: '0.7rem', backgroundColor: '#fff', textAlign: 'center' }}>
                        <span style={{ color: '#8B2323', fontFamily: "'Cinzel', serif", fontSize: '0.8rem', fontWeight: 'bold' }}>ĐẤU TRANH VŨ TRANG</span>
                    </div>
                </div>
            </div>

            {/* Conclusion */}
            <div style={{
                backgroundColor: 'rgba(139, 35, 35, 0.03)',
                padding: '1rem',
                border: '1px dashed #8B2323',
                marginTop: 'auto',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.5s'
            }}>
                <p style={{ color: '#444', fontFamily: "'Lora', serif", fontSize: '0.85rem', lineHeight: 1.5, margin: 0, textAlign: 'center', fontStyle: 'italic' }}>
                    Sự kết hợp nhuần nhuyễn giữa <strong style={{ color: '#8B2323' }}>chính trị</strong> và <strong style={{ color: '#8B2323' }}>vũ trang</strong> là đặc trưng sáng tạo của cách mạng Việt Nam.
                </p>
            </div>

            {/* Page number */}
            <div style={{ position: 'absolute', bottom: '15px', right: '15px', fontFamily: "'Cinzel', serif", fontSize: '0.8rem', color: '#8B2323', fontWeight: 'bold' }}>
                27
            </div>
        </div>
    );
}