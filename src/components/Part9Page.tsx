import { useState, useEffect } from 'react';

// Part 9 - Left Page: Phương pháp bạo lực cách mạng
export function Part9LeftPage() {
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsRevealed(true), 200);
        return () => clearTimeout(timer);
    }, []);

    const foundations = [
        {
            text: "Giải phóng dân tộc là một cuộc cách mạng bạo lực."
        },
        {
            text: "Sự thống trị thực dân, phát xít, đế quốc không có cơ sở cho đấu tranh phi bạo lực."
        },
        {
            text: "Giai cấp thống trị không bao giờ từ bỏ địa vị thống trị."
        }
    ];

    return (
        <div style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #1a365d 0%, #2c5282 50%, #1a365d 100%)',
            display: 'flex',
            flexDirection: 'column',
            padding: '1.5rem',
            boxSizing: 'border-box',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative background */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 30% 20%, rgba(255,215,0,0.08) 0%, transparent 50%)',
                pointerEvents: 'none'
            }} />

            {/* Header */}
            <div style={{
                textAlign: 'center',
                marginBottom: '0.8rem',
                transform: isRevealed ? 'translateY(0)' : 'translateY(-20px)',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease'
            }}>
                <h2 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.4rem',
                    fontWeight: 'bold',
                    color: '#fff',
                    margin: '0 0 0.3rem 0',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}>
                    Phần IX
                </h2>
                <h3 style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.85rem',
                    color: '#ffd700',
                    fontStyle: 'italic',
                    marginBottom: '0.3rem',
                    lineHeight: 1.4
                }}>
                    Phương Pháp Bạo Lực Cách Mạng
                </h3>
                <div style={{
                    width: '50px',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #ffd700, transparent)',
                    margin: '0 auto'
                }} />
            </div>

            {/* Main Quote */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.15) 0%, rgba(184, 134, 11, 0.1) 100%)',
                borderRadius: '10px',
                padding: '0.8rem',
                marginBottom: '0.8rem',
                border: '1px solid rgba(255, 215, 0, 0.3)',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.2s'
            }}>
                <div style={{
                    color: 'rgba(255,215,0,0.8)',
                    fontSize: '1.2rem',
                    marginBottom: '4px',
                    lineHeight: 1
                }}>
                    ❝
                </div>
                <p style={{
                    color: '#fff',
                    fontSize: '0.9rem',
                    lineHeight: 1.5,
                    fontFamily: "'Lora', Georgia, serif",
                    fontStyle: 'italic',
                    margin: 0,
                    textAlign: 'center'
                }}>
                    Cách mạng giải phóng dân tộc phải được tiến hành bằng <strong style={{ color: '#ffd700' }}>phương pháp bạo lực cách mạng</strong>
                </p>
            </div>

            {/* Visual: Violence concept */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.8rem',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.3s'
            }}>
                <div style={{
                    background: 'linear-gradient(135deg, #ed8936 0%, #dd6b20 100%)',
                    borderRadius: '8px',
                    padding: '0.5rem 0.8rem',
                    color: '#fff',
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                }}>
                    Phản cách mạng
                </div>
                <div style={{
                    background: 'linear-gradient(135deg, #ffd700 0%, #B8860B 100%)',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#5C2230',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '0.7rem',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    Bạo lực
                </div>
                <div style={{
                    background: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)',
                    borderRadius: '8px',
                    padding: '0.5rem 0.8rem',
                    color: '#fff',
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                }}>
                    Cách mạng
                </div>
            </div>

            {/* Foundations header */}
            <div style={{
                marginBottom: '0.4rem',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.4s'
            }}>
                <h4 style={{
                    color: '#ffd700',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '0.85rem',
                    fontWeight: 'bold',
                    margin: 0
                }}>
                    Cơ sở để Hồ Chí Minh khẳng định:
                </h4>
            </div>

            {/* Foundations list */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
                flex: 1,
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.5s'
            }}>
                {foundations.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            background: 'rgba(255,255,255,0.08)',
                            borderRadius: '8px',
                            padding: '0.6rem',
                            borderLeft: '3px solid rgba(255,215,0,0.5)'
                        }}
                    >
                        <div style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.5rem'
                        }}>
                            <div style={{
                                color: '#ffd700',
                                fontSize: '0.8rem',
                                fontWeight: 'bold'
                            }}>
                                •
                            </div>
                            <p style={{
                                color: 'rgba(255,255,255,0.9)',
                                fontFamily: "'Lora', Georgia, serif",
                                fontSize: '0.78rem',
                                lineHeight: 1.5,
                                margin: 0
                            }}>
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Page number */}
            <div style={{
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'rgba(255,255,255,0.5)',
                fontFamily: "'Lora', Georgia, serif",
                fontSize: '0.75rem'
            }}>
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
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #faf8f1 0%, #f5f0e1 100%)',
            display: 'flex',
            flexDirection: 'column',
            padding: '1.5rem',
            boxSizing: 'border-box',
            position: 'relative'
        }}>
            {/* Header */}
            <div style={{
                textAlign: 'center',
                marginBottom: '0.8rem',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.5s ease'
            }}>
                <h3 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.1rem',
                    color: '#2c5282',
                    fontWeight: 'bold',
                    margin: '0 0 0.3rem 0'
                }}>
                    Nội Dung Và Hình Thức
                </h3>
                <div style={{
                    width: '40px',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #B8860B, transparent)',
                    margin: '0 auto'
                }} />
            </div>

            {/* Content section 1 */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(123, 45, 62, 0.1) 0%, rgba(123, 45, 62, 0.05) 100%)',
                borderRadius: '10px',
                padding: '0.8rem',
                marginBottom: '0.7rem',
                border: '1px solid rgba(123, 45, 62, 0.2)',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.2s'
            }}>
                <h4 style={{
                    color: '#7B2D3E',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    margin: '0 0 0.4rem 0'
                }}>
                    Mục đích sử dụng bạo lực
                </h4>
                <p style={{
                    color: '#4a5568',
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.82rem',
                    lineHeight: 1.6,
                    margin: 0
                }}>
                    Dùng <strong style={{ color: '#7B2D3E' }}>bạo lực cách mạng</strong> để chống lại bạo lực phản cách mạng và sự cần thiết phải sử dụng bạo lực cách mạng.
                </p>
            </div>

            {/* Section 2: Hai lực lượng */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(44, 82, 130, 0.1) 0%, rgba(44, 82, 130, 0.05) 100%)',
                borderRadius: '10px',
                padding: '0.7rem',
                marginBottom: '0.6rem',
                border: '1px solid rgba(44, 82, 130, 0.2)',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.3s'
            }}>
                <h4 style={{
                    color: '#2c5282',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '0.85rem',
                    fontWeight: 'bold',
                    margin: '0 0 0.4rem 0'
                }}>
                    Hai lực lượng
                </h4>
                <div style={{
                    display: 'flex',
                    gap: '0.5rem'
                }}>
                    <div style={{
                        flex: 1,
                        background: 'linear-gradient(135deg, #4299e1 0%, #3182ce 100%)',
                        borderRadius: '6px',
                        padding: '0.5rem',
                        textAlign: 'center'
                    }}>
                        <div style={{
                            color: '#fff',
                            fontFamily: "'Lora', Georgia, serif",
                            fontSize: '0.75rem',
                            fontWeight: 'bold'
                        }}>
                            Lực lượng Chính trị
                        </div>
                    </div>
                    <div style={{
                        flex: 1,
                        background: 'linear-gradient(135deg, #ed8936 0%, #dd6b20 100%)',
                        borderRadius: '6px',
                        padding: '0.5rem',
                        textAlign: 'center'
                    }}>
                        <div style={{
                            color: '#fff',
                            fontFamily: "'Lora', Georgia, serif",
                            fontSize: '0.75rem',
                            fontWeight: 'bold'
                        }}>
                            Lực lượng Quân sự
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3: Hai hình thức đấu tranh */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(72, 187, 120, 0.1) 0%, rgba(56, 161, 105, 0.05) 100%)',
                borderRadius: '10px',
                padding: '0.7rem',
                marginBottom: '0.6rem',
                border: '1px solid rgba(72, 187, 120, 0.2)',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.4s'
            }}>
                <h4 style={{
                    color: '#276749',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '0.85rem',
                    fontWeight: 'bold',
                    margin: '0 0 0.4rem 0'
                }}>
                    Hai hình thức đấu tranh
                </h4>
                <div style={{
                    display: 'flex',
                    gap: '0.5rem'
                }}>
                    <div style={{
                        flex: 1,
                        background: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)',
                        borderRadius: '6px',
                        padding: '0.5rem',
                        textAlign: 'center'
                    }}>
                        <div style={{
                            color: '#fff',
                            fontFamily: "'Lora', Georgia, serif",
                            fontSize: '0.75rem',
                            fontWeight: 'bold'
                        }}>
                            Đấu tranh Chính trị
                        </div>
                    </div>
                    <div style={{
                        flex: 1,
                        background: 'linear-gradient(135deg, #9f7aea 0%, #805ad5 100%)',
                        borderRadius: '6px',
                        padding: '0.5rem',
                        textAlign: 'center'
                    }}>
                        <div style={{
                            color: '#fff',
                            fontFamily: "'Lora', Georgia, serif",
                            fontSize: '0.75rem',
                            fontWeight: 'bold'
                        }}>
                            Đấu tranh Vũ trang
                        </div>
                    </div>
                </div>
            </div>

            {/* Conclusion */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.12) 0%, rgba(212, 175, 55, 0.08) 100%)',
                borderRadius: '10px',
                padding: '0.7rem',
                border: '1px solid rgba(184, 134, 11, 0.3)',
                marginTop: 'auto',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.4s'
            }}>
                <p style={{
                    color: '#5C2230',
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.8rem',
                    lineHeight: 1.5,
                    margin: 0,
                    textAlign: 'center',
                    fontStyle: 'italic'
                }}>
                    Kết hợp cả <strong style={{ color: '#B8860B' }}>đấu tranh chính trị</strong> và <strong style={{ color: '#B8860B' }}>đấu tranh vũ trang</strong> - đây là đặc trưng của cách mạng Việt Nam.
                </p>
            </div>

            {/* Page number */}
            <div style={{
                position: 'absolute',
                bottom: '10px',
                right: '20px',
                color: 'rgba(0,0,0,0.3)',
                fontFamily: "'Lora', Georgia, serif",
                fontSize: '0.75rem'
            }}>
                27
            </div>
        </div>
    );
}
