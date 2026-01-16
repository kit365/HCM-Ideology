import { useState, useEffect } from 'react';

// Component for Part 7 - Left Page: Lực lượng cách mạng
export function Part7LeftPage() {
    const [activeIndex, setActiveIndex] = useState(-1);

    const keyPoints = [
        {
            icon: '👥',
            title: 'Quần chúng nhân dân',
            description: 'Quần chúng nhân dân là chủ thể sáng tạo ra lịch sử'
        },
        {
            icon: '🤝',
            title: 'Đại đoàn kết dân tộc',
            description: 'Cách mạng phải dựa trên lực lượng đại đoàn kết toàn dân tộc'
        },
        {
            icon: '⚡',
            title: 'Liên minh Công - Nông',
            description: 'Lấy liên minh công nhân - nông dân làm nền tảng vững chắc'
        },
        {
            icon: '💪',
            title: 'Công nông là gốc',
            description: 'Công nông là chủ cách mệnh, là gốc cách mệnh'
        }
    ];

    return (
        <div style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            padding: '30px 25px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative elements */}
            <div style={{ position: 'absolute', top: '15px', right: '15px', fontSize: '20px', opacity: 0.3 }}>☭</div>
            <div style={{ position: 'absolute', bottom: '50px', left: '15px', fontSize: '16px', opacity: 0.2 }}>★</div>

            {/* Header */}
            <div style={{ marginBottom: '15px', textAlign: 'center' }}>
                <div style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    color: '#ffd700',
                    fontSize: '1.75rem',
                    fontWeight: 'bold',
                    marginBottom: '6px'
                }}>
                    Phần VII
                </div>
                <h3 style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.9)',
                    fontStyle: 'italic',
                    marginBottom: '0.3rem',
                    lineHeight: 1.4
                }}>
                    Lực Lượng Cách Mạng Giải Phóng Dân Tộc
                </h3>
                <div style={{
                    width: '50px',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #ffd700, transparent)',
                    margin: '8px auto 0'
                }}></div>
            </div>

            {/* Main Quote */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.4) 0%, rgba(102, 0, 0, 0.3) 100%)',
                borderRadius: '10px',
                padding: '12px 15px',
                marginBottom: '15px',
                border: '1px solid rgba(255, 215, 0, 0.3)'
            }}>
                <div style={{
                    color: 'rgba(255,215,0,0.8)',
                    fontSize: '1.2rem',
                    marginBottom: '6px',
                    lineHeight: 1
                }}>
                    ❝
                </div>
                <p style={{
                    color: '#fff',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    fontFamily: "'Lora', Georgia, serif",
                    fontStyle: 'italic',
                    margin: 0
                }}>
                    Cách mạng giải phóng dân tộc phải dựa trên lực lượng <strong style={{ color: '#ffd700' }}>đại đoàn kết toàn dân tộc</strong>, lấy <strong style={{ color: '#ffd700' }}>liên minh công - nông</strong> làm nền tảng
                </p>
            </div>

            {/* Theo Mác-Lênin Label */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '10px'
            }}>
                <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #8B0000, #660000)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    color: '#ffd700'
                }}>
                    📜
                </div>
                <h4 style={{
                    color: '#ffd700',
                    fontSize: '1rem',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 'bold',
                    margin: 0
                }}>
                    Theo chủ nghĩa Mác - Lênin
                </h4>
            </div>

            {/* Key Points - Vertical List like Part 6 */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {keyPoints.map((point, index) => (
                    <div
                        key={index}
                        style={{
                            background: activeIndex === index
                                ? 'rgba(255,215,0,0.15)'
                                : 'rgba(255,255,255,0.05)',
                            borderRadius: '8px',
                            padding: '10px 12px',
                            borderLeft: activeIndex === index
                                ? '3px solid #ffd700'
                                : '3px solid transparent',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(-1)}
                    >
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                            <div style={{ fontSize: '16px' }}>{point.icon}</div>
                            <div>
                                <div style={{
                                    color: '#ffd700',
                                    fontSize: '0.9rem',
                                    fontWeight: 'bold',
                                    marginBottom: '3px'
                                }}>
                                    {point.title}
                                </div>
                                <div style={{
                                    color: 'rgba(255,255,255,0.85)',
                                    fontSize: '0.85rem',
                                    lineHeight: 1.5
                                }}>
                                    {point.description}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Page Number */}
            <div style={{
                position: 'absolute',
                bottom: '15px',
                left: '25px',
                color: 'rgba(255, 255, 255, 0.5)',
                fontFamily: "'Lora', Georgia, serif",
                fontSize: '0.75rem'
            }}>
                20
            </div>
        </div>
    );
}

// Component for Part 7 - Right Page: Content detail
export function Part7RightPage() {
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsRevealed(true), 400);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #FDFBF7 0%, #F5F0E8 100%)',
            padding: '35px 30px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative corner */}
            <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, transparent 50%, rgba(123, 45, 62, 0.1) 50%)'
            }}></div>

            {/* Header */}
            <div style={{
                marginBottom: '20px',
                borderBottom: '2px solid rgba(184, 134, 11, 0.3)',
                paddingBottom: '12px'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '5px'
                }}>
                    <div style={{
                        fontSize: '0.7rem',
                        color: '#B8860B',
                        fontFamily: "'Lora', Georgia, serif",
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        QUAN ĐIỂM
                    </div>
                </div>
                <h2 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.2rem',
                    color: '#7B2D3E',
                    margin: 0,
                    fontWeight: 'bold'
                }}>
                    Theo Hồ Chí Minh
                </h2>
            </div>

            {/* Main Quote Box */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.1) 0%, rgba(139, 105, 20, 0.05) 100%)',
                borderRadius: '10px',
                padding: '15px',
                marginBottom: '15px',
                border: '1px solid rgba(184, 134, 11, 0.3)',
                transform: isRevealed ? 'translateY(0)' : 'translateY(20px)',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.5s ease'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '10px'
                }}>
                    <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #B8860B 0%, #8B6914 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontSize: '14px'
                    }}>
                        🇻🇳
                    </div>
                    <h3 style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: '0.95rem',
                        color: '#8B6914',
                        fontWeight: 'bold',
                        margin: 0,
                        fontStyle: 'italic'
                    }}>
                        "Có dân là có tất cả"
                    </h3>
                </div>
                <p style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.95rem',
                    color: '#4A4A4A',
                    lineHeight: 1.7,
                    margin: 0,
                    textAlign: 'justify'
                }}>
                    Trên đời này <strong style={{ color: '#7B2D3E' }}>không gì quý bằng dân</strong>, được lòng dân thì được tất cả, mất lòng dân thì mất tất cả.
                </p>
            </div>

            {/* Key Point Box */}
            <div style={{
                background: 'rgba(123, 45, 62, 0.08)',
                borderRadius: '8px',
                padding: '12px 15px',
                borderLeft: '3px solid #7B2D3E',
                marginBottom: '15px',
                transform: isRevealed ? 'translateX(0)' : 'translateX(30px)',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.5s ease 0.2s'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '8px'
                }}>
                    <span style={{ fontSize: '1.2rem' }}>⚡</span>
                    <span style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: '0.9rem',
                        color: '#7B2D3E',
                        fontWeight: 'bold'
                    }}>
                        Công nông là gốc cách mệnh
                    </span>
                </div>
                <p style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.9rem',
                    color: '#5C2230',
                    lineHeight: 1.6,
                    margin: 0,
                    fontStyle: 'italic'
                }}>
                    Trong đó <strong style={{ color: '#B8860B' }}>công nông là chủ cách mệnh</strong>... là <strong style={{ color: '#B8860B' }}>gốc cách mệnh</strong>
                </p>
            </div>

            {/* Insight Box */}
            <div style={{
                marginTop: 'auto',
                background: 'linear-gradient(135deg, rgba(123, 45, 62, 0.08) 0%, rgba(184, 134, 11, 0.08) 100%)',
                borderRadius: '8px',
                padding: '12px',
                border: '1px solid rgba(184, 134, 11, 0.2)',
                transform: isRevealed ? 'translateY(0)' : 'translateY(20px)',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.5s ease 0.3s'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px'
                }}>
                    <span style={{ fontSize: '1rem', lineHeight: 1 }}>💡</span>
                    <p style={{
                        fontFamily: "'Lora', Georgia, serif",
                        fontSize: '0.85rem',
                        color: '#5C2230',
                        lineHeight: 1.5,
                        margin: 0,
                        fontStyle: 'italic'
                    }}>
                        Đây là sự sáng tạo của Hồ Chí Minh: đặt <strong style={{ color: '#B8860B' }}>nhân dân làm trung tâm</strong>, lấy liên minh công - nông làm nòng cốt.
                    </p>
                </div>
            </div>

            {/* Page Number */}
            <div style={{
                position: 'absolute',
                bottom: '15px',
                right: '25px',
                color: 'rgba(0, 0, 0, 0.3)',
                fontFamily: "'Lora', Georgia, serif",
                fontSize: '0.75rem'
            }}>
                21
            </div>
        </div>
    );
}
