import { useState, useEffect } from 'react';

// Part 8 Page 1 - Left Page: Giải thích Chính Quốc vs Thuộc địa
export function Part8LeftPage() {
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsRevealed(true), 200);
        return () => clearTimeout(timer);
    }, []);

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
            {/* Decorative background elements */}
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
                marginBottom: '1rem',
                transform: isRevealed ? 'translateY(0)' : 'translateY(-20px)',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease'
            }}>
                <h2 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.4rem',
                    fontWeight: 'bold',
                    color: '#fff',
                    margin: '0 0 0.4rem 0',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}>
                    Phần VIII
                </h2>
                <h3 style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.9rem',
                    color: '#ffd700',
                    fontStyle: 'italic',
                    marginBottom: '0.3rem',
                    lineHeight: 1.4
                }}>
                    Chính Quốc và Thuộc Địa
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
                    margin: 0
                }}>
                    Cách mạng giải phóng dân tộc cần <strong style={{ color: '#ffd700' }}>chủ động, sáng tạo</strong>, có khả năng giành thắng lợi trước cách mạng vô sản ở chính quốc
                </p>
            </div>

            {/* Two concepts - Vertical list */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                flex: 1,
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.3s'
            }}>
                {/* Chính Quốc */}
                <div style={{
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: '8px',
                    padding: '0.8rem',
                    borderLeft: '3px solid #63b3ed'
                }}>
                    <div style={{
                        color: '#63b3ed',
                        fontSize: '0.95rem',
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontWeight: 'bold',
                        marginBottom: '0.4rem'
                    }}>
                        Chính Quốc
                    </div>
                    <p style={{
                        color: 'rgba(255,255,255,0.85)',
                        fontFamily: "'Lora', Georgia, serif",
                        fontSize: '0.8rem',
                        lineHeight: 1.5,
                        margin: 0
                    }}>
                        Các nước đế quốc, thực dân (Pháp, Anh, Mỹ...) - những quốc gia thống trị. Cách mạng ở đây là <strong style={{ color: '#ffd700' }}>cách mạng vô sản</strong> do giai cấp công nhân lãnh đạo.
                    </p>
                </div>

                {/* Thuộc Địa */}
                <div style={{
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: '8px',
                    padding: '0.8rem',
                    borderLeft: '3px solid #ed8936'
                }}>
                    <div style={{
                        color: '#ed8936',
                        fontSize: '0.95rem',
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontWeight: 'bold',
                        marginBottom: '0.4rem'
                    }}>
                        Thuộc Địa
                    </div>
                    <p style={{
                        color: 'rgba(255,255,255,0.85)',
                        fontFamily: "'Lora', Georgia, serif",
                        fontSize: '0.8rem',
                        lineHeight: 1.5,
                        margin: 0
                    }}>
                        Các nước bị xâm lược, đô hộ (Việt Nam, Ấn Độ...) - phải chịu ách thống trị của đế quốc. Cách mạng ở đây là <strong style={{ color: '#ffd700' }}>cách mạng giải phóng dân tộc</strong>.
                    </p>
                </div>

                {/* Traditional view insight */}
                <div style={{
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '8px',
                    padding: '0.7rem',
                    textAlign: 'center',
                    marginTop: 'auto'
                }}>
                    <p style={{
                        color: 'rgba(255,255,255,0.8)',
                        fontFamily: "'Lora', Georgia, serif",
                        fontSize: '0.75rem',
                        lineHeight: 1.5,
                        margin: 0,
                        fontStyle: 'italic'
                    }}>
                        Theo quan điểm truyền thống: Cách mạng thuộc địa <strong style={{ color: '#ffd700' }}>phụ thuộc</strong> vào chính quốc
                    </p>
                </div>
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
                22
            </div>
        </div>
    );
}

// Part 8 Page 1 - Right Page
export function Part8RightPage() {
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
                marginBottom: '1rem',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.5s ease'
            }}>
                <div style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.7rem',
                    color: '#B8860B',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    marginBottom: '0.3rem'
                }}>
                    Quan Điểm Mác - Lênin
                </div>
                <h3 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.1rem',
                    color: '#2c5282',
                    fontWeight: 'bold',
                    margin: 0
                }}>
                    Mối Quan Hệ Truyền Thống
                </h3>
            </div>

            {/* Visual comparison */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(44, 82, 130, 0.08) 0%, rgba(44, 82, 130, 0.03) 100%)',
                borderRadius: '10px',
                padding: '1rem',
                marginBottom: '0.8rem',
                border: '1px solid rgba(44, 82, 130, 0.2)',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.2s'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.8rem',
                    marginBottom: '0.6rem'
                }}>
                    <div style={{
                        background: 'linear-gradient(135deg, #4299e1 0%, #2b6cb0 100%)',
                        borderRadius: '8px',
                        padding: '0.5rem 1rem',
                        color: '#fff',
                        fontFamily: "'Lora', Georgia, serif",
                        fontSize: '0.8rem',
                        fontWeight: 'bold'
                    }}>
                        Chính quốc
                    </div>
                    <div style={{ color: '#B8860B', fontSize: '1.2rem' }}>→</div>
                    <div style={{
                        background: 'linear-gradient(135deg, #ed8936 0%, #dd6b20 100%)',
                        borderRadius: '8px',
                        padding: '0.5rem 1rem',
                        color: '#fff',
                        fontFamily: "'Lora', Georgia, serif",
                        fontSize: '0.8rem',
                        fontWeight: 'bold'
                    }}>
                        Thuộc địa
                    </div>
                </div>
                <p style={{
                    color: '#4a5568',
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.8rem',
                    lineHeight: 1.5,
                    margin: 0,
                    textAlign: 'center',
                    fontStyle: 'italic'
                }}>
                    Thuộc địa là "hậu phương", chỉ thắng lợi <strong>sau khi</strong> chính quốc thắng
                </p>
            </div>

            {/* Ho Chi Minh's view */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.12) 0%, rgba(212, 175, 55, 0.08) 100%)',
                borderRadius: '10px',
                padding: '1rem',
                border: '1px solid rgba(184, 134, 11, 0.3)',
                marginBottom: '0.8rem',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.3s'
            }}>
                <h4 style={{
                    color: '#B8860B',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '0.95rem',
                    fontWeight: 'bold',
                    margin: '0 0 0.5rem 0'
                }}>
                    Hồ Chí Minh đặt câu hỏi
                </h4>
                <p style={{
                    color: '#5C2230',
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.85rem',
                    lineHeight: 1.6,
                    margin: 0,
                    fontStyle: 'italic'
                }}>
                    "Tại sao cách mạng thuộc địa lại phải chờ đợi? Khi có đủ điều kiện và quyết tâm, các dân tộc thuộc địa hoàn toàn có thể <strong style={{ color: '#B8860B' }}>chủ động giành thắng lợi trước!</strong>"
                </p>
            </div>

            {/* Key insight */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(123, 45, 62, 0.1) 0%, rgba(123, 45, 62, 0.05) 100%)',
                borderRadius: '8px',
                padding: '0.8rem',
                borderLeft: '3px solid #7B2D3E',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.4s'
            }}>
                <p style={{
                    color: '#4a5568',
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.82rem',
                    lineHeight: 1.6,
                    margin: 0
                }}>
                    <strong style={{ color: '#7B2D3E' }}>Đây là tư tưởng đột phá</strong> - mở đường cho lý luận mới về quan hệ giữa cách mạng thuộc địa và cách mạng vô sản ở chính quốc.
                </p>
            </div>

            {/* Next page hint */}
            <div style={{
                marginTop: 'auto',
                paddingTop: '0.5rem',
                textAlign: 'center',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.5s'
            }}>
                <div style={{
                    color: '#B8860B',
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.7rem',
                    fontStyle: 'italic'
                }}>
                    ➤ Trang tiếp: Luận điểm sáng tạo của Hồ Chí Minh
                </div>
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
                23
            </div>
        </div>
    );
}
