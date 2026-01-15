import { QuoteWithAudio } from './QuoteWithAudio';

interface Part1Page2Props {
    playingQuote: string | null;
    onPlayQuote: (id: string) => void;
}

export function Part1Page2({ playingQuote, onPlayQuote }: Part1Page2Props) {
    return (
        <div style={{ animation: 'pageIn 0.6s ease-out' }}>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '2rem', color: '#1A1A1A', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Phần I
            </h2>
            <h3 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '1rem', color: '#7B2D3E', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                Độc Lập, Tự Do - Quyền Thiêng Liêng, Bất Khả Xâm Phạm của Tất Cả Các Dân Tộc
            </h3>

            <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.95rem', color: '#4A4A4A', lineHeight: '1.7', textAlign: 'justify', marginBottom: '1.5rem' }}>
                Từ những chân lý bất di bất dịch đã được ghi trong bản Tuyên ngôn Độc lập năm 1776 của Mỹ và Tuyên ngôn Nhân quyền và Dân quyền năm 1791 của Cách mạng Pháp, Hồ Chí Minh tiếp tục khẳng định những giá trị thiêng liêng và bất biến về quyền dân tộc.
            </p>

            <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '1rem', color: '#1A1A1A', fontWeight: 'bold', marginBottom: '1rem', marginTop: '1.5rem' }}>
                Người khẳng định:
            </p>

            <QuoteWithAudio
                quote="Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng, dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do."
                audioId="tat-ca-moi-nguoi"
                playingQuote={playingQuote}
                onPlay={onPlayQuote}
            />

            <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '1rem', color: '#1A1A1A', fontWeight: 'bold', marginBottom: '0.75rem', marginTop: '1.5rem' }}>
                Với Người, không có gì quý hơn độc lập, tự do:
            </p>

            <ul style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.95rem', color: '#4A4A4A', lineHeight: '1.8', paddingLeft: '1.5rem', margin: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>
                    Là tư tưởng, là lẽ sống, là học thuyết của Hồ Chí Minh.
                </li>
                <li>
                    Đó là lý do chiến đấu, là nguồn sức mạnh làm nên chiến thắng của nhân dân Việt Nam, đồng thời cũng là nguồn động viên đối với các dân tộc bị áp bức trên thế giới.
                </li>
            </ul>
        </div>
    );
}
