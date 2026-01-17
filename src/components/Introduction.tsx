import { BookOpen, Star, Heart, Quote } from 'lucide-react';

export function Introduction() {
  return (
    <section id="gioi-thieu" style={{
      padding: '100px 24px',
      background: 'linear-gradient(180deg, #FDFBF7 0%, #F5F0E8 50%, #2D1A1A 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decorations */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: 400,
        height: 400,
        background: 'radial-gradient(circle, rgba(123, 45, 62, 0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-5%',
        width: 350,
        height: 350,
        background: 'radial-gradient(circle, rgba(201, 162, 39, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(50px)'
      }} />

      {/* Large background number */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        fontFamily: "'Playfair Display', serif",
        fontSize: 'clamp(15rem, 30vw, 25rem)',
        fontWeight: 600,
        color: 'rgba(123, 45, 62, 0.03)',
        lineHeight: 1,
        transform: 'translate(-10%, -20%)',
        userSelect: 'none',
        pointerEvents: 'none'
      }}>
        01
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 20
          }}>
            <div style={{ width: 50, height: 1, background: 'linear-gradient(to right, transparent, #7B2D3E)' }} />
            <BookOpen size={20} color="#7B2D3E" />
            <div style={{ width: 50, height: 1, background: 'linear-gradient(to left, transparent, #7B2D3E)' }} />
          </div>

          <span style={{
            display: 'block',
            fontSize: 11,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#7B2D3E',
            marginBottom: 16,
            fontWeight: 600
          }}>
            Về Tư Tưởng Hồ Chí Minh
          </span>

          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            color: '#1A1A1A',
            marginBottom: 20,
            fontWeight: 400,
            lineHeight: 1.2
          }}>
            Độc Lập Dân Tộc
          </h2>

          <div style={{
            width: 80,
            height: 3,
            background: 'linear-gradient(90deg, #7B2D3E, #C9A227)',
            margin: '0 auto',
            borderRadius: 2
          }} />
        </div>

        {/* Main Quote */}
        <div style={{
          maxWidth: 900,
          margin: '0 auto 60px',
          textAlign: 'center'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #7B2D3E, #5C2230)',
            borderRadius: 24,
            padding: '48px 40px',
            position: 'relative',
            boxShadow: '0 20px 50px rgba(123, 45, 62, 0.15)'
          }}>
            {/* Decorative quote icon */}
            <div style={{
              position: 'absolute',
              top: -20,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 50,
              height: 50,
              background: 'linear-gradient(135deg, #C9A227, #B8941F)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(201, 162, 39, 0.4)'
            }}>
              <Quote size={24} color="white" />
            </div>

            <p style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: 'white',
              lineHeight: 1.5,
              fontWeight: 400,
              marginBottom: 20
            }}>
              "Không có gì quý hơn độc lập, tự do"
            </p>

            <p style={{
              color: '#C9A227',
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
              — Chủ tịch Hồ Chí Minh
            </p>
          </div>
        </div>

        {/* Content Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
          marginBottom: 60
        }}>
          {/* Card 1 */}
          <div style={{
            background: 'white',
            borderRadius: 20,
            padding: 32,
            boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
            border: '1px solid rgba(0,0,0,0.05)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              width: 56,
              height: 56,
              background: 'linear-gradient(135deg, rgba(123, 45, 62, 0.1), rgba(123, 45, 62, 0.05))',
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20
            }}>
              <Star size={26} color="#7B2D3E" />
            </div>
            <h3 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 22,
              color: '#1A1A1A',
              marginBottom: 16,
              fontWeight: 600
            }}>
              Tư Tưởng Cốt Lõi
            </h3>
            <p style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: 15,
              color: '#4A4A4A',
              lineHeight: 1.8
            }}>
              Đây không chỉ là khẩu hiệu mà là tư tưởng cốt lõi, là chân lý bất hủ của Hồ Chí Minh.
              Đối với Người, độc lập dân tộc là quyền thiêng liêng, bất khả xâm phạm, là khát vọng
              cháy bỏng xuyên suốt lịch sử dựng nước và giữ nước của dân tộc.
            </p>
          </div>

          {/* Card 2 */}
          <div style={{
            background: 'white',
            borderRadius: 20,
            padding: 32,
            boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
            border: '1px solid rgba(0,0,0,0.05)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              width: 56,
              height: 56,
              background: 'linear-gradient(135deg, rgba(201, 162, 39, 0.15), rgba(201, 162, 39, 0.05))',
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20
            }}>
              <Heart size={26} color="#C9A227" />
            </div>
            <h3 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 22,
              color: '#1A1A1A',
              marginBottom: 16,
              fontWeight: 600
            }}>
              Độc Lập Thiết Thực
            </h3>
            <p style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: 15,
              color: '#4A4A4A',
              lineHeight: 1.8
            }}>
              Độc lập không phải là khái niệm trừu tượng mà phải thiết thực, gắn liền với tự do,
              cơm no, áo ấm và hạnh phúc của nhân dân. Người khẳng định: "Nước độc lập mà dân
              không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì".
            </p>
          </div>

          {/* Card 3 */}
          <div style={{
            background: 'white',
            borderRadius: 20,
            padding: 32,
            boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
            border: '1px solid rgba(0,0,0,0.05)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              width: 56,
              height: 56,
              background: 'linear-gradient(135deg, rgba(123, 45, 62, 0.1), rgba(201, 162, 39, 0.1))',
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20
            }}>
              <BookOpen size={26} color="#5C2230" />
            </div>
            <h3 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 22,
              color: '#1A1A1A',
              marginBottom: 16,
              fontWeight: 600
            }}>
              Thống Nhất Lãnh Thổ
            </h3>
            <p style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: 15,
              color: '#4A4A4A',
              lineHeight: 1.8
            }}>
              Đó phải là nền độc lập hoàn toàn, triệt để và gắn liền với sự thống nhất, toàn vẹn
              lãnh thổ. Như lời Người từng căn dặn: "Nước Việt Nam là một, dân tộc Việt Nam là một.
              Sông có thể cạn, núi có thể mòn, song chân lý đó không bao giờ thay đổi".
            </p>
          </div>
        </div>

        {/* Bottom quote box */}
        <div style={{
          background: 'linear-gradient(135deg, #7B2D3E, #5C2230)',
          borderRadius: 20,
          padding: '32px 36px',
          boxShadow: '0 15px 40px rgba(123, 45, 62, 0.4)',
          border: '1px solid rgba(201, 162, 39, 0.3)',
          textAlign: 'center',
          maxWidth: 800,
          margin: '0 auto'
        }}>
          <p style={{
            fontFamily: "'Lora', Georgia, serif",
            fontSize: 18,
            color: 'white',
            fontStyle: 'italic',
            lineHeight: 1.8,
            margin: 0,
            textShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}>
            Tư tưởng Hồ Chí Minh về độc lập dân tộc đã trở thành nền tảng lý luận vững chắc
            cho cách mạng Việt Nam, dẫn dắt dân tộc ta từng bước giành lại độc lập, tự do
            và xây dựng đất nước ngày càng phồn vinh.
          </p>
        </div>
      </div>
    </section>
  );
}