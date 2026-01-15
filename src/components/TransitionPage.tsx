import { useState, useEffect } from 'react';

// Trang chuyển tiếp giữa Part IV và Part V
// Giới thiệu về con đường tư tưởng đạt được độc lập
export function TransitionLeftPage() {
    const [visibleItems, setVisibleItems] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setVisibleItems(prev => {
                if (prev < 4) return prev + 1;
                clearInterval(timer);
                return prev;
            });
        }, 400);
        return () => clearInterval(timer);
    }, []);

    const questions = [
        {
            icon: '❓',
            text: 'Làm thế nào để cứu nước, giải phóng dân tộc?'
        },
        {
            icon: '🔍',
            text: 'Con đường nào đúng đắn cho dân tộc Việt Nam?'
        },
        {
            icon: '⚖️',
            text: 'Bài học từ các cuộc cách mạng trên thế giới?'
        },
        {
            icon: '💡',
            text: 'Lý luận nào soi đường cho cách mạng?'
        }
    ];

    return (
        <div style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            padding: '35px 30px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative background elements */}
            <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,215,0,0.1) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />

            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <div style={{
                    color: '#ffd700',
                    fontSize: '0.65rem',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    marginBottom: '8px'
                }}>
                    Phần V
                </div>
                <h1 style={{
                    color: '#fff',
                    fontSize: '1.1rem',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 'bold',
                    margin: 0,
                    lineHeight: 1.3
                }}>
                    Tư Tưởng Hồ Chí Minh
                </h1>
                <h2 style={{
                    color: '#ffd700',
                    fontSize: '0.9rem',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 'normal',
                    marginTop: '5px',
                    fontStyle: 'italic'
                }}>
                    Về Con Đường Đạt Được Độc Lập
                </h2>
            </div>

            {/* Divider */}
            <div style={{
                width: '60px',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #ffd700, transparent)',
                margin: '0 auto 20px auto'
            }} />

            {/* Introduction */}
            <p style={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: '0.78rem',
                lineHeight: 1.6,
                textAlign: 'center',
                marginBottom: '20px',
                fontStyle: 'italic'
            }}>
                Trước khi tìm ra con đường cứu nước, Hồ Chí Minh đã trải qua quá trình tìm tòi, học hỏi đầy gian khó...
            </p>

            {/* Questions list */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {questions.map((q, idx) => (
                    <div
                        key={idx}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '12px 15px',
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            borderRadius: '8px',
                            borderLeft: '3px solid #ffd700',
                            transform: visibleItems > idx ? 'translateX(0)' : 'translateX(-20px)',
                            opacity: visibleItems > idx ? 1 : 0,
                            transition: 'all 0.5s ease'
                        }}
                    >
                        <span style={{ fontSize: '1.2rem' }}>{q.icon}</span>
                        <span style={{
                            color: '#fff',
                            fontSize: '0.8rem',
                            fontWeight: 500
                        }}>
                            {q.text}
                        </span>
                    </div>
                ))}
            </div>

            {/* Page number */}
            <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '30px',
                color: '#ffd700',
                fontSize: '0.8rem',
                opacity: 0.7
            }}>
                12
            </div>
        </div>
    );
}

export function TransitionRightPage() {
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsRevealed(true), 600);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#FDFBF7',
            padding: '30px 28px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
        }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                <h2 style={{
                    color: '#7B2D3E',
                    fontSize: '1rem',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 'bold',
                    margin: 0
                }}>
                    Hành Trình Tìm Đường Cứu Nước
                </h2>
            </div>

            {/* Timeline visual */}
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                paddingLeft: '15px',
                borderLeft: '2px solid #e0d5c5'
            }}>
                {/* Journey point 1 */}
                <div style={{
                    position: 'relative',
                    paddingLeft: '20px',
                    opacity: isRevealed ? 1 : 0,
                    transform: isRevealed ? 'translateX(0)' : 'translateX(-10px)',
                    transition: 'all 0.5s ease'
                }}>
                    <div style={{
                        position: 'absolute',
                        left: '-8px',
                        top: '4px',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: '#7B2D3E'
                    }} />
                    <p style={{
                        color: '#333',
                        fontSize: '0.75rem',
                        lineHeight: 1.5,
                        margin: 0
                    }}>
                        <strong>1911:</strong> Ra đi tìm đường cứu nước từ Bến Nhà Rồng
                    </p>
                </div>

                {/* Journey point 2 */}
                <div style={{
                    position: 'relative',
                    paddingLeft: '20px',
                    opacity: isRevealed ? 1 : 0,
                    transform: isRevealed ? 'translateX(0)' : 'translateX(-10px)',
                    transition: 'all 0.5s ease 0.1s'
                }}>
                    <div style={{
                        position: 'absolute',
                        left: '-8px',
                        top: '4px',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: '#B8860B'
                    }} />
                    <p style={{
                        color: '#333',
                        fontSize: '0.75rem',
                        lineHeight: 1.5,
                        margin: 0
                    }}>
                        <strong>1919:</strong> Gửi Bản yêu sách 8 điểm đến Hội nghị Versailles
                    </p>
                </div>

                {/* Journey point 3 */}
                <div style={{
                    position: 'relative',
                    paddingLeft: '20px',
                    opacity: isRevealed ? 1 : 0,
                    transform: isRevealed ? 'translateX(0)' : 'translateX(-10px)',
                    transition: 'all 0.5s ease 0.2s'
                }}>
                    <div style={{
                        position: 'absolute',
                        left: '-8px',
                        top: '4px',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: '#2e7d32'
                    }} />
                    <p style={{
                        color: '#333',
                        fontSize: '0.75rem',
                        lineHeight: 1.5,
                        margin: 0
                    }}>
                        <strong>1920:</strong> Đọc Sơ thảo Luận cương của Lênin - Bước ngoặt tư tưởng
                    </p>
                </div>

                {/* Journey point 4 */}
                <div style={{
                    position: 'relative',
                    paddingLeft: '20px',
                    opacity: isRevealed ? 1 : 0,
                    transform: isRevealed ? 'translateX(0)' : 'translateX(-10px)',
                    transition: 'all 0.5s ease 0.3s'
                }}>
                    <div style={{
                        position: 'absolute',
                        left: '-8px',
                        top: '4px',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: '#1565c0'
                    }} />
                    <p style={{
                        color: '#333',
                        fontSize: '0.75rem',
                        lineHeight: 1.5,
                        margin: 0
                    }}>
                        <strong>Kết luận:</strong> Chỉ có CNXH mới thực sự giải phóng được dân tộc
                    </p>
                </div>
            </div>

            {/* Quote box */}
            <div style={{
                marginTop: '15px',
                padding: '12px 15px',
                backgroundColor: 'rgba(123, 45, 62, 0.08)',
                borderRadius: '8px',
                borderLeft: '3px solid #7B2D3E',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.4s'
            }}>
                <p style={{
                    color: '#444',
                    fontSize: '0.72rem',
                    lineHeight: 1.6,
                    fontStyle: 'italic',
                    margin: 0
                }}>
                    "Tôi hiểu rằng chủ nghĩa Lênin là cái cẩm nang thần kỳ, là con đường giải phóng chúng ta."
                </p>
                <div style={{
                    marginTop: '6px',
                    textAlign: 'right',
                    color: '#7B2D3E',
                    fontSize: '0.68rem',
                    fontWeight: 600
                }}>
                    — Hồ Chí Minh
                </div>
            </div>

            {/* Arrow to continue */}
            <div style={{
                textAlign: 'center',
                marginTop: '12px',
                color: '#B8860B',
                fontSize: '0.75rem'
            }}>
                ▶ Tiếp theo: Con đường cách mạng vô sản
            </div>

            {/* Page number */}
            <div style={{
                position: 'absolute',
                bottom: '20px',
                right: '28px',
                color: '#999',
                fontSize: '0.8rem'
            }}>
                13
            </div>
        </div>
    );
}
