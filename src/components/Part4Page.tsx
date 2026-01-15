import React from 'react';

// Sử dụng Palette màu đồng bộ với Part III nhưng tone Đỏ (Thống nhất)
const THEME_ACCENT = '#C83232'; // Đỏ thẫm
const BOX_BG_GRADIENT = 'linear-gradient(135deg, rgba(200, 50, 50, 0.08) 0%, rgba(200, 50, 50, 0.02) 100%)';
const QUOTE_BORDER_COLOR = '#C83232';

// Trang trái Phần IV (trang 8)
export function Part4LeftPage() {
    return (
        <div style={{
            animation: 'pageIn 0.6s ease-out',
            position: 'relative',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: '40px 30px'
        }}>
            {/* Title Block */}
            <div style={{ marginBottom: '1.5rem' }}>
                <h2 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '2.2rem',
                    color: '#1A1A1A',
                    marginBottom: '0.4rem',
                    fontWeight: 'bold',
                    lineHeight: '1.2'
                }}>
                    Phần IV
                </h2>
                <h3 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1rem',
                    color: THEME_ACCENT,
                    marginBottom: '0',
                    fontStyle: 'italic',
                    fontWeight: '600'
                }}>
                    Thống Nhất Và Toàn Vẹn Lãnh Thổ
                </h3>
            </div>

            {/* Intro Content */}
            <p style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: '0.9rem',
                color: '#444',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                textAlign: 'justify'
            }}>
                Khát vọng thống nhất là dòng chảy xuyên suốt trong tư tưởng Hồ Chí Minh. Người khẳng định độc lập mà đất nước còn chia cắt thì chưa trọn vẹn.
            </p>

            {/* Quote 1: Chân lý (Vừa là quote vừa là sub-heading) */}
            <div style={{
                marginBottom: '2rem',
                textAlign: 'center',
                padding: '0 1rem'
            }}>
                <p style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.3rem',
                    color: '#8B1E1E',
                    lineHeight: '1.4',
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    margin: '0 0 0.5rem 0'
                }}>
                    "Nước Việt Nam là một, dân tộc Việt Nam là một."
                </p>
                <p style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.8rem',
                    color: '#666',
                    margin: 0
                }}>
                    — 2/1958
                </p>
            </div>

            {/* Quote Box 2: Nam Bộ - Box chính, to và rõ ràng */}
            <div style={{
                background: BOX_BG_GRADIENT,
                padding: '1.5rem',
                borderRadius: '8px',
                borderLeft: `4px solid ${QUOTE_BORDER_COLOR}`,
                marginTop: 'auto',
                marginBottom: '2rem',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
            }}>
                <p style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '1rem', // Font to dễ đọc
                    color: '#2C2C2C',
                    lineHeight: '1.6',
                    fontStyle: 'italic',
                    margin: '0 0 1rem 0',
                    textAlign: 'justify'
                }}>
                    "Nam Bộ là máu của máu Việt Nam, là thịt của thịt Việt Nam. Sông có thể cạn, núi có thể mòn, song chân lý ấy không bao giờ thay đổi."
                </p>
                <p style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.85rem',
                    color: THEME_ACCENT,
                    margin: 0,
                    fontWeight: '600',
                    textAlign: 'right'
                }}>
                    — Thư gửi đồng bào Nam Bộ, 1946
                </p>
            </div>

            {/* Số trang */}
            <div style={{ position: 'absolute', bottom: '15px', left: '30px', fontFamily: "'Lora', Georgia, serif", fontSize: '0.85rem', color: '#999' }}>8</div>
        </div>
    );
}

// Trang phải Phần IV (trang 9)
export function Part4RightPage() {
    return (
        <div style={{
            animation: 'pageIn 0.6s ease-out',
            position: 'relative',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: '40px 30px'
        }}>
            {/* Box Di Chúc */}
            <div style={{
                background: '#FFF',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0 10px 30px rgba(166, 52, 70, 0.08)',
                marginBottom: '2rem',
                position: 'relative',
                borderTop: `4px solid ${THEME_ACCENT}`
            }}>
                <h4 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1rem',
                    color: '#888',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    margin: '0 0 1.5rem 0',
                    textAlign: 'center'
                }}>
                    Di chúc thiêng liêng
                </h4>

                <p style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.15rem',
                    color: '#222',
                    lineHeight: '1.6',
                    textAlign: 'justify',
                    marginBottom: '1.5rem'
                }}>
                    "Dù khó khăn, gian khổ đến mấy, nhân dân ta nhất định sẽ hoàn toàn thắng lợi... Tổ quốc ta nhất định sẽ thống nhất. Đồng bào Nam Bắc nhất định sẽ sum họp một nhà."
                </p>

                <p style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.8rem',
                    color: '#666',
                    margin: 0,
                    textAlign: 'right',
                    fontStyle: 'italic'
                }}>
                    — Hà Nội, 1969
                </p>
            </div>

            {/* Bottom Section: Miền Nam - Tự do, không cắt chữ */}
            <div style={{
                marginTop: 'auto',
                marginBottom: '1.5rem',
                textAlign: 'center',
                padding: '0'
            }}>
                <p style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.3rem',
                    color: THEME_ACCENT,
                    fontStyle: 'italic',
                    marginBottom: '0.5rem',
                    fontWeight: '600',
                    // Bỏ white-space nowrap để tự xuống dòng nếu cần
                }}>
                    "Miền Nam luôn ở trong trái tim tôi"
                </p>
                <p style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.75rem',
                    color: '#999',
                    fontStyle: 'normal'
                }}>
                    — Phát biểu tại sân bay Gia Lâm, 1946
                </p>
            </div>

            {/* Số trang */}
            <div style={{ position: 'absolute', bottom: '15px', right: '30px', fontFamily: "'Lora', Georgia, serif", fontSize: '0.85rem', color: '#999' }}>9</div>
        </div>
    );
}
