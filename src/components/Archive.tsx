import { useState } from 'react';
import { X, Book, FileText, Library, Search, ChevronRight, Download, Eye, ArrowRight } from 'lucide-react';

interface Document {
    id: string;
    title: string;
    year: string;
    description: string;
    category: 'book' | 'document';
    coverColor: string;
    content: string;
    officialLink: string;
}

const documents: Document[] = [
    {
        id: '1',
        title: "Bản án chế độ thực dân Pháp",
        year: "1925",
        description: "Tác phẩm vạch trần tội ác của thực dân Pháp tại các thuộc địa và kêu gọi các dân tộc bị áp bức đứng lên đấu tranh.",
        category: 'book',
        coverColor: '#7B2C3E',
        content: "Nội dung vạch trần sự bóc lột, sưu cao thuế nặng và những tội ác dã man của thực dân Pháp tại Việt Nam và các nước thuộc địa khác...",
        officialLink: "https://tennguoidepnhat.net/2012/02/01/b%E1%BA%A3n-an-ch%E1%BA%BF-d%E1%BB%99-th%E1%BB%B1c-dan-phap-ch%C6%B0%C6%A1ng-i/"
    },
    {
        id: '2',
        title: "Đường Kách mệnh",
        year: "1927",
        description: "Cuốn sách tập hợp các bài giảng của Nguyễn Ái Quốc dùng để huấn luyện cán bộ cách mạng tại Quảng Châu.",
        category: 'book',
        coverColor: '#C9A227',
        content: "Đây là tác phẩm lý luận quan trọng đầu tiên, xác định con đường cách mạng Việt Nam là con đường cách mạng vô sản...",
        officialLink: "https://hochiminh.vn/page/Article/Book/Detail/review/690018af9420925df30e7e03"
    },
    {
        id: '3',
        title: "Nhật ký trong tù",
        year: "1942 - 1943",
        description: "Tập thơ gồm 133 bài thơ bằng chữ Hán được Bác sáng tác trong thời gian bị chính quyền Tưởng Giới Thạch giam giữ.",
        category: 'book',
        coverColor: '#2D4A3E',
        content: "Thơ Bác thể hiện tinh thần thép, lòng yêu nước nồng nàn và vẻ đẹp tâm hồn lạc quan trước mọi hoàn cảnh gian khổ...",
        officialLink: "https://hochiminh.vn/upload/3000001/20251024/ea88203adf499d8290ea36227a76d2fdNhat_ky_trong_tu.pdf"
    },
    {
        id: '4',
        title: "Tuyên ngôn Độc lập",
        year: "1945",
        description: "Văn kiện lịch sử trọng đại khai sinh ra nước Việt Nam Dân chủ Cộng hòa, khẳng định quyền tự do dân chủ của dân tộc.",
        category: 'document',
        coverColor: '#B8860B',
        content: "'Tất cả mọi người đều sinh ra có quyền bình đẳng. Tạo hóa cho họ những quyền không ai có thể xâm phạm được...'",
        officialLink: "https://hochiminh.vn/tu-tuong-dao-duc-ho-chi-minh/nghien-cuu-tu-tuong-dao-duc-ho-chi-minh/tuyen-ngon-doc-lap-ang-van-lap-quoc-vi-dai-7396"
    },
    {
        id: '5',
        title: "Sửa đổi lối làm việc",
        year: "1947",
        description: "Tác phẩm quan trọng về xây dựng Đảng, rèn luyện đạo đức cách mạng và phong cách làm việc của cán bộ.",
        category: 'book',
        coverColor: '#5C2230',
        content: "Bác nhấn mạnh việc tự phê bình và phê bình, chống lại các bệnh chủ quan, hẹp hòi, ba hoa trong công tác...",
        officialLink: "https://duccqdt.nghean.gov.vn/tu-lieu-nghien-cuu/tac-pham-sua-doi-loi-lam-viec-723900?pageindex=0"
    },
    {
        id: '6',
        title: "Di chúc",
        year: "1969",
        description: "Những lời dặn dò cuối cùng của Bác trước khi đi xa, thể hiện tình yêu vô hạn với Đảng, với nhân dân và đất nước.",
        category: 'document',
        coverColor: '#7B2D3E',
        content: "'Điều mong muốn cuối cùng của tôi là: Toàn Đảng, toàn dân ta đoàn kết phấn đấu, xây dựng một nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ và giàu mạnh...'",
        officialLink: "https://www.moj.gov.vn/qt/cacchuyenmuc/Lists/45NamDiChucHCM/Attachments/5/5.%20Di%20chuc-Ban%20cong%20bo%20nam%201969.pdf"
    }
];

export function Archive({ onClose }: { onClose: () => void }) {
    const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
    const [filter, setFilter] = useState<'all' | 'book' | 'document'>('all');

    const filteredDocs = documents.filter(doc => filter === 'all' || doc.category === filter);

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            background: '#FDFBF7',
            overflowY: 'auto'
        }}>
            {/* Styles */}
            <style>{`
                .book-cover {
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    transform-style: preserve-3d;
                    perspective: 1000px;
                }
                .book-card:hover .book-cover {
                    transform: rotateY(-25deg) translateX(-10px);
                    box-shadow: 20px 20px 40px rgba(0,0,0,0.2);
                }
                .book-spine {
                    position: absolute;
                    left: 0; top: 0; bottom: 0;
                    width: 20px;
                    background: rgba(0,0,0,0.2);
                    transform: rotateY(-90deg);
                    transform-origin: left;
                }
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
            `}</style>

            {/* Header */}
            <header style={{
                position: 'sticky',
                top: 0,
                background: 'rgba(253, 251, 247, 0.95)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid #E5E0D5',
                zIndex: 100,
                padding: '16px 24px'
            }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <Library size={28} color="#7B2D3E" />
                        <div>
                            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#1A1A1A', margin: 0 }}>
                                Thư Viện số
                            </h1>
                            <p style={{ fontSize: '0.7rem', color: '#7B2D3E', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0, fontWeight: 700 }}>
                                Sách & Văn Kiện Lịch Sử
                            </p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                        <div style={{ display: 'flex', background: '#F0EBE0', padding: 4, borderRadius: 100 }}>
                            {['all', 'book', 'document'].map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setFilter(f as any)}
                                    style={{
                                        padding: '8px 20px',
                                        borderRadius: 100,
                                        border: 'none',
                                        background: filter === f ? '#7B2D3E' : 'transparent',
                                        color: filter === f ? 'white' : '#666',
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s'
                                    }}
                                >
                                    {f === 'all' ? 'Tất cả' : f === 'book' ? 'Sách' : 'Văn kiện'}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={onClose}
                            style={{
                                width: 44, height: 44, borderRadius: '50%', border: 'none',
                                background: 'rgba(123, 45, 62, 0.1)', cursor: 'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}
                        >
                            <X size={24} color="#7B2D3E" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section style={{
                padding: '80px 24px',
                background: 'linear-gradient(135deg, #2D1A1A 0%, #5C2230 100%)',
                color: 'white',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', inset: 0, opacity: 0.1, background: 'url("https://www.transparenttextures.com/patterns/vintage-speckles.png")' }} />
                <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative' }}>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3.5rem', marginBottom: 20 }}>Tàng Kinh Các</h2>
                    <p style={{ fontFamily: "'Lora', serif", fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
                        Nơi lưu truyền những tác phẩm kinh điển và văn kiện mang đậm tư tưởng, đạo đức của Chủ tịch Hồ Chí Minh - tài sản tinh thần vô giá của dân tộc Việt Nam.
                    </p>
                </div>
            </section>

            {/* Book Grid */}
            <section style={{ padding: '80px 24px', maxWidth: 1200, margin: '0 auto' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: 40
                }}>
                    {filteredDocs.map((doc) => (
                        <div
                            key={doc.id}
                            className="book-card"
                            style={{
                                display: 'flex',
                                gap: 24,
                                background: 'white',
                                padding: 24,
                                borderRadius: 20,
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                border: '1px solid #EDE9E1',
                                cursor: 'pointer',
                                transition: 'all 0.3s'
                            }}
                            onClick={() => setSelectedDoc(doc)}
                        >
                            {/* Visual Book Cover */}
                            <div className="book-cover" style={{
                                width: 120,
                                height: 180,
                                background: doc.coverColor,
                                borderRadius: '4px 8px 8px 4px',
                                flexShrink: 0,
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 15,
                                textAlign: 'center'
                            }}>
                                <div className="book-spine" />
                                <div style={{ border: '1px solid rgba(255,255,255,0.3)', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                                    <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', marginBottom: 8 }}>HỒ CHÍ MINH</span>
                                    <div style={{ width: 30, height: 1, background: 'rgba(255,255,255,0.5)', marginBottom: 8 }} />
                                    <span style={{ fontSize: '0.9rem', color: 'white', fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>{doc.title.split(' ').slice(0, 3).join(' ')}...</span>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    <span style={{ fontSize: '10px', fontWeight: 800, color: '#C9A227', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                        {doc.category === 'book' ? 'Tác phẩm' : 'Văn kiện'} • {doc.year}
                                    </span>
                                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', margin: '8px 0', color: '#1A1A1A' }}>{doc.title}</h3>
                                    <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.5, margin: 0 }}>{doc.description}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#7B2C3E', fontWeight: 700, fontSize: '0.8rem' }}>
                                    Đọc ngay <ArrowRight size={14} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Reading Modal */}
            {selectedDoc && (
                <div
                    onClick={() => setSelectedDoc(null)}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0,0,0,0.85)',
                        backdropFilter: 'blur(10px)',
                        zIndex: 10001,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 40,
                        cursor: 'zoom-out'
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: '#FAF6F0',
                            width: '100%',
                            maxWidth: 900,
                            height: '90vh',
                            borderRadius: 30,
                            overflow: 'hidden',
                            display: 'flex',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                            cursor: 'default',
                            position: 'relative'
                        }}
                    >
                        {/* Close button in corner */}
                        <button
                            onClick={() => setSelectedDoc(null)}
                            style={{
                                position: 'absolute',
                                top: 20,
                                right: 20,
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                background: 'rgba(0,0,0,0.05)',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 10
                            }}
                        >
                            <X size={20} color="#333" />
                        </button>
                        {/* Left: Info */}
                        <div style={{ width: 350, background: '#2D1A1A', padding: 60, color: 'white', display: 'flex', flexDirection: 'column' }}>
                            <div style={{
                                width: 180, height: 260, background: selectedDoc.coverColor,
                                margin: '0 auto 40px', borderRadius: 8, boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                                padding: 20, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', color: 'white' }}>{selectedDoc.title}</span>
                            </div>
                            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', marginBottom: 20 }}>{selectedDoc.title}</h2>
                            <div style={{ display: 'flex', gap: 10, marginBottom: 30 }}>
                                <span style={{ background: 'rgba(201,162,39,0.2)', color: '#C9A227', padding: '4px 12px', borderRadius: 100, fontSize: '0.7rem' }}>{selectedDoc.year}</span>
                                <span style={{ background: 'rgba(255,255,255,0.1)', color: 'white', padding: '4px 12px', borderRadius: 100, fontSize: '0.7rem' }}>{selectedDoc.category === 'book' ? 'Sách' : 'Văn kiện'}</span>
                            </div>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.7 }}>{selectedDoc.description}</p>

                            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
                                <a
                                    href={selectedDoc.officialLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        padding: '16px',
                                        background: '#C9A227',
                                        color: '#1A1A1A',
                                        borderRadius: 14,
                                        fontWeight: 700,
                                        textDecoration: 'none',
                                        textAlign: 'center',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: 10,
                                        transition: 'all 0.3s'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(201, 162, 39, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <Eye size={20} /> Đọc bản đầy đủ tại nguồn uy tín
                                </a>
                                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textAlign: 'center', margin: '10px 0 0' }}>
                                    Nhấp vào vùng trống bên ngoài để đóng cửa sổ
                                </p>
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div style={{ flex: 1, padding: '60px 80px', overflowY: 'auto', background: '#FFFFFF', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: 30, right: 30 }}>
                                <FileText size={40} color="#F0EBE0" />
                            </div>
                            <div style={{ maxWidth: 600, margin: '0 auto' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 40 }}>
                                    <div style={{ width: 40, height: 1, background: '#7B2D3E' }} />
                                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', color: '#7B2D3E', letterSpacing: '0.2em' }}>NỘI DUNG TRÍCH DẪN</span>
                                </div>
                                <div style={{ fontFamily: "'Lora', serif", fontSize: '1.2rem', color: '#333', lineHeight: 2, textAlign: 'justify' }}>
                                    {selectedDoc.content.repeat(10)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
