import { useState, useRef, useEffect } from 'react';

// Timeline data for the revolutionary path
const timelineData = [
    {
        year: '',
        title: 'Thực tiễn phong trào yêu nước',
        description: 'Các phong trào yêu nước nổ ra và thất bại',
        detail: 'Từ phong trào Cần Vương, Đông Du, Duy Tân đến khởi nghĩa Yên Bái... tất cả đều thất bại do thiếu đường lối đúng đắn.',
        icon: '⚔️'
    },
    {
        year: '',
        title: 'Khảo cứu cách mạng Pháp, Mỹ',
        description: 'Tìm hiểu các cuộc cách mạng tư sản',
        detail: 'Hồ Chí Minh nghiên cứu Cách mạng Pháp 1789, Cách mạng Mỹ 1776 và nhận ra những hạn chế của cách mạng tư sản.',
        icon: '📚'
    },
    {
        year: '1917',
        title: 'Cách mạng Tháng Mười Nga',
        description: 'Bước ngoặt lịch sử thế giới',
        detail: 'Cách mạng Tháng Mười Nga thắng lợi mở ra thời đại mới - thời đại quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội.',
        icon: '🌟'
    },
    {
        year: '1920',
        title: 'Đọc Luận cương của Lênin',
        description: 'Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa',
        detail: 'Đây là bước ngoặt quyết định trong tư tưởng Hồ Chí Minh, tìm ra con đường cứu nước đúng đắn.',
        icon: '📖'
    }
];

export function Part5LeftPage() {
    const [activeIndex, setActiveIndex] = useState(-1);

    return (
        <div style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            padding: '40px 35px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative stars */}
            <div style={{ position: 'absolute', top: '20px', right: '20px', fontSize: '24px', opacity: 0.3 }}>✦</div>
            <div style={{ position: 'absolute', bottom: '60px', left: '20px', fontSize: '16px', opacity: 0.2 }}>✧</div>

            {/* Header */}
            <div style={{ marginBottom: '25px', textAlign: 'center' }}>
                <div style={{
                    color: '#ffd700',
                    fontSize: '0.75rem',
                    letterSpacing: '3px',
                    marginBottom: '8px',
                    textTransform: 'uppercase'
                }}>
                    Phần V
                </div>
                <h2 style={{
                    color: '#fff',
                    fontSize: '1.3rem',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 'bold',
                    lineHeight: 1.3,
                    textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                }}>
                    Con Đường Cách Mạng Vô Sản
                </h2>
                <div style={{
                    width: '60px',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #ffd700, transparent)',
                    margin: '12px auto 0'
                }}></div>
            </div>

            {/* Timeline */}
            <div style={{ flex: 1, position: 'relative', paddingLeft: '30px' }}>
                {/* Timeline line */}
                <div style={{
                    position: 'absolute',
                    left: '10px',
                    top: '0',
                    bottom: '20px',
                    width: '2px',
                    background: 'linear-gradient(to bottom, #ffd700, #ff6b6b, #ffd700)',
                    opacity: 0.6
                }}></div>

                {timelineData.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            position: 'relative',
                            marginBottom: '20px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(-1)}
                    >
                        {/* Timeline dot */}
                        <div style={{
                            position: 'absolute',
                            left: '-26px',
                            top: '5px',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: activeIndex === index ? '#ffd700' : 'rgba(255,215,0,0.3)',
                            border: '2px solid #ffd700',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '10px',
                            transition: 'all 0.3s ease',
                            boxShadow: activeIndex === index ? '0 0 15px rgba(255,215,0,0.5)' : 'none'
                        }}>
                            {item.icon}
                        </div>

                        {/* Content */}
                        <div style={{
                            background: activeIndex === index
                                ? 'rgba(255,215,0,0.15)'
                                : 'rgba(255,255,255,0.05)',
                            borderRadius: '8px',
                            padding: '12px 15px',
                            borderLeft: activeIndex === index
                                ? '3px solid #ffd700'
                                : '3px solid transparent',
                            transition: 'all 0.3s ease'
                        }}>
                            {item.year && (
                                <div style={{
                                    color: '#ffd700',
                                    fontSize: '0.7rem',
                                    fontWeight: 'bold',
                                    marginBottom: '4px'
                                }}>
                                    Năm {item.year}
                                </div>
                            )}
                            <div style={{
                                color: '#fff',
                                fontSize: '0.85rem',
                                fontWeight: '600',
                                marginBottom: '4px'
                            }}>
                                {item.title}
                            </div>
                            <div style={{
                                color: 'rgba(255,255,255,0.7)',
                                fontSize: '0.75rem',
                                lineHeight: 1.4
                            }}>
                                {item.description}
                            </div>

                            {/* Expanded detail on hover */}
                            {activeIndex === index && (
                                <div style={{
                                    marginTop: '8px',
                                    paddingTop: '8px',
                                    borderTop: '1px solid rgba(255,215,0,0.3)',
                                    color: 'rgba(255,255,255,0.85)',
                                    fontSize: '0.7rem',
                                    lineHeight: 1.5,
                                    fontStyle: 'italic'
                                }}>
                                    {item.detail}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div style={{
                position: 'absolute',
                bottom: '30px',
                left: '35px',
                color: '#ffd700',
                fontSize: '0.9rem',
                opacity: 0.7
            }}>
                14
            </div>
        </div>
    );
}

export function Part5RightPage() {
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsRevealed(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#FDFBF7',
            padding: '25px 30px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Header */}
            <div style={{ marginBottom: '12px', textAlign: 'center' }}>
                <div style={{
                    color: '#B8860B',
                    fontSize: '0.65rem',
                    letterSpacing: '2px',
                    marginBottom: '4px',
                    textTransform: 'uppercase'
                }}>
                    Kết Luận Của Hồ Chí Minh
                </div>
                <h2 style={{
                    color: '#7B2D3E',
                    fontSize: '1rem',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 'bold',
                    margin: 0
                }}>
                    Từ Thực Tiễn và Lý Luận
                </h2>
            </div>

            {/* Arrow pointing to conclusion */}
            <div style={{
                textAlign: 'center',
                marginBottom: '10px',
                color: '#B8860B',
                fontSize: '1.5rem',
                animation: 'bounce 1s infinite'
            }}>
                ↓
            </div>

            {/* Main Quote Box 1 */}
            <div style={{
                background: 'linear-gradient(135deg, #7B2D3E 0%, #5C2230 100%)',
                borderRadius: '10px',
                padding: '15px 18px',
                marginBottom: '12px',
                boxShadow: '0 6px 20px rgba(123, 45, 62, 0.3)',
                transform: isRevealed ? 'translateY(0)' : 'translateY(20px)',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease'
            }}>
                <div style={{
                    color: 'rgba(255,215,0,0.8)',
                    fontSize: '1.3rem',
                    marginBottom: '6px',
                    lineHeight: 1
                }}>
                    ❝
                </div>
                <p style={{
                    color: '#fff',
                    fontSize: '0.85rem',
                    lineHeight: 1.5,
                    fontFamily: "'Lora', Georgia, serif",
                    fontStyle: 'italic',
                    margin: 0
                }}>
                    Muốn cứu nước và giải phóng dân tộc không có con đường nào khác <strong style={{ color: '#ffd700' }}>con đường cách mạng vô sản</strong>.
                </p>
                <div style={{
                    marginTop: '8px',
                    textAlign: 'right',
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.7rem'
                }}>
                    — Hồ Chí Minh
                </div>
            </div>

            {/* Main Quote Box 2 */}
            <div style={{
                background: 'linear-gradient(135deg, #B8860B 0%, #8B6914 100%)',
                borderRadius: '10px',
                padding: '15px 18px',
                boxShadow: '0 6px 20px rgba(184, 134, 11, 0.3)',
                transform: isRevealed ? 'translateY(0)' : 'translateY(20px)',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.2s'
            }}>
                <div style={{
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '1.3rem',
                    marginBottom: '6px',
                    lineHeight: 1
                }}>
                    ❝
                </div>
                <p style={{
                    color: '#fff',
                    fontSize: '0.85rem',
                    lineHeight: 1.5,
                    fontFamily: "'Lora', Georgia, serif",
                    fontStyle: 'italic',
                    margin: 0
                }}>
                    <strong style={{ color: '#fff', textDecoration: 'underline' }}>Độc lập dân tộc</strong> gắn liền với <strong style={{ color: '#fff', textDecoration: 'underline' }}>chủ nghĩa xã hội</strong>
                </p>
            </div>

            {/* Bottom insight - simple */}
            <div style={{
                marginTop: 'auto',
                paddingTop: '20px',
                textAlign: 'center'
            }}>
                <div style={{
                    background: 'linear-gradient(135deg, rgba(123, 45, 62, 0.1) 0%, rgba(184, 134, 11, 0.1) 100%)',
                    borderRadius: '8px',
                    padding: '15px',
                    border: '1px solid rgba(184, 134, 11, 0.3)'
                }}>
                    <p style={{
                        color: '#5C2230',
                        fontSize: '0.8rem',
                        lineHeight: 1.6,
                        fontStyle: 'italic',
                        margin: 0,
                        fontFamily: "'Lora', Georgia, serif"
                    }}>
                        Đây là kết luận quan trọng nhất của Hồ Chí Minh trong hành trình tìm đường cứu nước.
                    </p>
                </div>
                <div style={{
                    marginTop: '12px',
                    color: '#B8860B',
                    fontSize: '0.7rem'
                }}>
                    ➤ Xem trang tiếp theo để hiểu rõ hơn về đường lối cách mạng
                </div>
            </div>

            {/* Page number */}
            <div style={{
                position: 'absolute',
                bottom: '15px',
                right: '25px',
                color: '#999',
                fontSize: '0.8rem'
            }}>
                15
            </div>

            <style>{`
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(5px); }
                }
            `}</style>
        </div>
    );
}
