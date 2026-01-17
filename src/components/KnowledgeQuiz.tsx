import { useState, useEffect } from 'react';
import { Trophy, CheckCircle2, XCircle, RefreshCcw, Award, Share2, Download, Star } from 'lucide-react';

interface Question {
    question: string;
    options: string[];
    correct: number;
    explanation: string;
}

const quizData: Question[] = [
    {
        question: "Bác Hồ ra đi tìm đường cứu nước vào ngày tháng năm nào, từ đâu?",
        options: [
            "02/09/1945 - Quảng trường Ba Đình",
            "05/06/1911 - Bến Nhà Rồng",
            "19/05/1890 - Nghệ An",
            "03/02/1930 - Hương Cảng"
        ],
        correct: 1,
        explanation: "Ngày 5/6/1911, từ bến cảng Nhà Rồng (Sài Gòn), Người lên tàu Amiral Latouche-Tréville ra đi tìm đường cứu nước."
    },
    {
        question: "Bí danh nào được Người sử dụng khi tham gia sáng lập Đảng Cộng sản Pháp năm 1920?",
        options: [
            "Văn Ba",
            "Lý Thụy",
            "Nguyễn Ái Quốc",
            "Hồ Chí Minh"
        ],
        correct: 2,
        explanation: "Tại Đại hội Tours năm 1920, Người lấy danh nghĩa là Nguyễn Ái Quốc tham gia sáng lập Đảng Cộng sản Pháp."
    },
    {
        question: "Tác phẩm văn học nổi tiếng nào được Bác sáng tác trong thời gian bị chính quyền Tưởng Giới Thạch giam giữ (1942-1943)?",
        options: [
            "Bản án chế độ thực dân Pháp",
            "Đường Kách mệnh",
            "Nhật ký trong tù",
            "Tuyên ngôn Độc lập"
        ],
        correct: 2,
        explanation: "'Nhật ký trong tù' là tập thơ sâu sắc, phản ánh ý chí kiên cường và lòng yêu nước nồng nàn của Bác."
    },
    {
        question: "Câu nói nổi tiếng: 'Không có gì quý hơn độc lập, tự do' được Bác viết trong văn kiện nào?",
        options: [
            "Lời kêu gọi Toàn quốc kháng chiến",
            "Lời kêu gọi chống Mỹ, cứu nước (1966)",
            "Tuyên ngôn Độc lập",
            "Di chúc"
        ],
        correct: 1,
        explanation: "Câu nói này trích từ Lời kêu gọi đồng bào và chiến sĩ cả nước ngày 17/7/1966, trở thành chân lý của thời đại."
    },
    {
        question: "Mục tiêu tột bậc trong cuộc đời hoạt động cách mạng của Hồ Chí Minh là gì?",
        options: [
            "Làm lý luận cách mạng",
            "Độc lập cho Tổ quốc, tự do cho nhân dân",
            "Đi du lịch khắp thế giới",
            "Xây dựng quân đội mạnh"
        ],
        correct: 1,
        explanation: "Bác từng nói: 'Tôi chỉ có một sự ham muốn, ham muốn tột bậc, là làm sao cho nước ta được hoàn toàn độc lập, dân ta được hoàn toàn tự do...'"
    }
];

export function KnowledgeQuiz() {
    const [currentStep, setCurrentStep] = useState<'start' | 'quiz' | 'result'>('start');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);

    const handleOptionSelect = (index: number) => {
        if (selectedOption !== null) return;

        setSelectedOption(index);
        const correct = index === quizData[currentIndex].correct;
        setIsCorrect(correct);
        if (correct) {
            setScore(prev => prev + 1);
            // Có thể thêm âm thanh success ở đây
        }
        setShowExplanation(true);
    };

    const nextQuestion = () => {
        if (currentIndex < quizData.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setSelectedOption(null);
            setIsCorrect(null);
            setShowExplanation(false);
        } else {
            setCurrentStep('result');
        }
    };

    const resetQuiz = () => {
        setCurrentStep('start');
        setCurrentIndex(0);
        setScore(0);
        setSelectedOption(null);
        setIsCorrect(null);
        setShowExplanation(false);
    };

    return (
        <section id="trac-nghiem" style={{
            padding: '100px 24px',
            background: '#FDFBF7',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background elements */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '40%',
                height: '40%',
                background: 'radial-gradient(circle, rgba(201,162,39,0.05) 0%, transparent 70%)',
                zIndex: 0
            }} />

            <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>

                {/* Header Header */}
                <div style={{ textAlign: 'center', marginBottom: 60 }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 12,
                        marginBottom: 16
                    }}>
                        <Star size={18} color="#C9A227" fill="#C9A227" />
                        <span style={{
                            fontSize: 12,
                            letterSpacing: '0.25em',
                            textTransform: 'uppercase',
                            color: '#7B2D3E',
                            fontWeight: 700
                        }}>
                            Góc Tương Tác
                        </span>
                    </div>
                    <h2 style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                        color: '#1A1A1A',
                        fontWeight: 600,
                        lineHeight: 1.2
                    }}>
                        Thử Thách <span style={{ color: '#C9A227' }}>Kiến Thức</span>
                    </h2>
                </div>

                {/* Main Content Area */}
                <div style={{
                    background: 'white',
                    borderRadius: 32,
                    padding: '40px 30px',
                    boxShadow: '0 20px 50px rgba(123, 45, 62, 0.1)',
                    border: '1px solid rgba(201, 162, 39, 0.1)',
                    minHeight: 500,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    transition: 'all 0.5s ease'
                }}>

                    {currentStep === 'start' && (
                        <div style={{ textAlign: 'center' }}>
                            <div style={{
                                width: 80,
                                height: 80,
                                borderRadius: '50%',
                                background: 'rgba(201, 162, 39, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 24px'
                            }}>
                                <Trophy size={40} color="#C9A227" />
                            </div>
                            <h3 style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: '1.8rem',
                                marginBottom: 16
                            }}>Bạn hiểu bao nhiêu về Bác?</h3>
                            <p style={{
                                color: '#666',
                                marginBottom: 40,
                                fontSize: '1.1rem',
                                lineHeight: 1.6
                            }}>
                                Tham gia bài trắc nghiệm nhanh 5 câu hỏi để ôn lại những dấu mốc lịch sử
                                quan trọng trong cuộc đời và sự nghiệp của Người.
                            </p>
                            <button
                                onClick={() => setCurrentStep('quiz')}
                                style={{
                                    padding: '16px 48px',
                                    background: 'linear-gradient(135deg, #7B2D3E, #5C2230)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: 100,
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    boxShadow: '0 8px 25px rgba(123, 45, 62, 0.3)',
                                    transition: 'transform 0.2s'
                                }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                Bắt đầu ngay
                            </button>
                        </div>
                    )}

                    {currentStep === 'quiz' && (
                        <div>
                            {/* Progress Bar */}
                            <div style={{ marginBottom: 40 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                                    <span style={{ fontSize: '0.9rem', color: '#7B2D3E', fontWeight: 600 }}>
                                        Câu hỏi {currentIndex + 1}/{quizData.length}
                                    </span>
                                    <span style={{ fontSize: '0.9rem', color: '#C9A227', fontWeight: 600 }}>
                                        {Math.round(((currentIndex + 1) / quizData.length) * 100)}%
                                    </span>
                                </div>
                                <div style={{
                                    width: '100%',
                                    height: 6,
                                    background: '#F0F0F0',
                                    borderRadius: 3,
                                    overflow: 'hidden'
                                }}>
                                    <div style={{
                                        width: `${((currentIndex + 1) / quizData.length) * 100}%`,
                                        height: '100%',
                                        background: 'linear-gradient(90deg, #7B2D3E, #C9A227)',
                                        transition: 'width 0.5s ease'
                                    }} />
                                </div>
                            </div>

                            <h3 style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: '1.5rem',
                                lineHeight: 1.4,
                                marginBottom: 32,
                                color: '#1A1A1A'
                            }}>
                                {quizData[currentIndex].question}
                            </h3>

                            <div style={{ display: 'grid', gap: 16 }}>
                                {quizData[currentIndex].options.map((option, index) => {
                                    let borderColor = 'rgba(0,0,0,0.08)';
                                    let bgColor = 'white';
                                    let textColor = '#444';

                                    if (selectedOption !== null) {
                                        if (index === quizData[currentIndex].correct) {
                                            borderColor = '#22C55E';
                                            bgColor = 'rgba(34, 197, 94, 0.05)';
                                            textColor = '#166534';
                                        } else if (index === selectedOption) {
                                            borderColor = '#EF4444';
                                            bgColor = 'rgba(239, 68, 68, 0.05)';
                                            textColor = '#991B1B';
                                        }
                                    }

                                    return (
                                        <button
                                            key={index}
                                            onClick={() => handleOptionSelect(index)}
                                            style={{
                                                padding: '20px 24px',
                                                border: `2px solid ${borderColor}`,
                                                background: bgColor,
                                                color: textColor,
                                                borderRadius: 16,
                                                textAlign: 'left',
                                                fontSize: '1rem',
                                                fontWeight: 500,
                                                cursor: selectedOption === null ? 'pointer' : 'default',
                                                transition: 'all 0.2s',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            }}
                                        >
                                            {option}
                                            {selectedOption !== null && index === quizData[currentIndex].correct && (
                                                <CheckCircle2 color="#22C55E" size={20} />
                                            )}
                                            {selectedOption !== null && index === selectedOption && index !== quizData[currentIndex].correct && (
                                                <XCircle color="#EF4444" size={20} />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>

                            {showExplanation && (
                                <div style={{
                                    marginTop: 32,
                                    padding: 20,
                                    background: '#FDFBF7',
                                    borderRadius: 16,
                                    borderLeft: `4px solid ${isCorrect ? '#22C55E' : '#EF4444'}`,
                                    animation: 'fadeInUp 0.4s ease'
                                }}>
                                    <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#555', margin: 0 }}>
                                        <strong>Giải thích:</strong> {quizData[currentIndex].explanation}
                                    </p>
                                    <button
                                        onClick={nextQuestion}
                                        style={{
                                            marginTop: 20,
                                            padding: '12px 28px',
                                            background: '#7B2D3E',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: 8,
                                            fontSize: '0.9rem',
                                            fontWeight: 600,
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {currentIndex < quizData.length - 1 ? 'Câu kế tiếp' : 'Xem kết quả'}
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {currentStep === 'result' && (
                        <div style={{ textAlign: 'center' }}>
                            <div style={{
                                position: 'relative',
                                width: 200,
                                height: 200,
                                margin: '0 auto 32px'
                            }}>
                                <svg width="200" height="200" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="#F0F0F0" strokeWidth="8" />
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="#C9A227" strokeWidth="8"
                                        strokeDasharray={`${(score / quizData.length) * 283} 283`}
                                        transform="rotate(-90 50 50)"
                                        style={{ transition: 'stroke-dasharray 1s ease' }}
                                    />
                                </svg>
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    textAlign: 'center'
                                }}>
                                    <span style={{ fontSize: '3rem', fontWeight: 700, color: '#1A1A1A' }}>{score}</span>
                                    <span style={{ fontSize: '1.5rem', color: '#666' }}>/{quizData.length}</span>
                                </div>
                            </div>

                            <h2 style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: '2rem',
                                marginBottom: 16
                            }}>{score === quizData.length ? 'Xuất sắc!' : score >= quizData.length / 2 ? 'Rất tốt!' : 'Tiếp tục cố gắng!'}</h2>

                            {score === quizData.length && (
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    pointerEvents: 'none',
                                    zIndex: 10,
                                    overflow: 'hidden'
                                }}>
                                    {[...Array(30)].map((_, i) => (
                                        <div key={i} className="confetti" style={{
                                            left: `${Math.random() * 100}%`,
                                            backgroundColor: ['#C9A227', '#7B2D3E', '#F5F0E8', '#5C2230'][Math.floor(Math.random() * 4)],
                                            animationDelay: `${Math.random() * 3}s`,
                                            width: Math.random() * 10 + 5,
                                            height: Math.random() * 10 + 5,
                                            position: 'absolute',
                                            top: -20
                                        }} />
                                    ))}
                                </div>
                            )}

                            <p style={{ color: '#666', marginBottom: 40, fontSize: '1.1rem' }}>
                                Bạn đã hoàn thành bài khảo sát kiến thức về Tư tưởng Hồ Chí Minh.
                            </p>

                            {/* Mini Certificate Card */}
                            <div style={{
                                background: 'linear-gradient(135deg, #FDFBF7, #F5F0E8)',
                                border: '2px solid rgba(201, 162, 39, 0.3)',
                                borderRadius: 20,
                                padding: 32,
                                marginBottom: 40,
                                position: 'relative'
                            }}>
                                <Award size={48} color="#C9A227" style={{ marginBottom: 16 }} />
                                <h4 style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: '1.2rem',
                                    marginBottom: 8
                                }}>CHỨNG NHẬN HOÀN THÀNH</h4>
                                <div style={{
                                    fontSize: '0.8rem',
                                    color: '#7B2D3E',
                                    fontWeight: 600,
                                    letterSpacing: '0.1em',
                                    marginBottom: 16
                                }}>NGƯỜI CON ĐẤT VIỆT</div>
                                <p style={{ fontSize: '0.9rem', color: '#666', fontStyle: 'italic' }}>
                                    "Đã vượt qua thử thách kiến thức với kết quả {score}/{quizData.length}"
                                </p>
                                <div style={{
                                    position: 'absolute',
                                    bottom: 10,
                                    right: 20,
                                    opacity: 0.2
                                }}>
                                    <img src="/logo-placeholder.png" alt="" style={{ width: 60 }} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                                <button
                                    onClick={resetQuiz}
                                    style={{
                                        padding: '14px 28px',
                                        background: 'white',
                                        color: '#7B2D3E',
                                        border: '2px solid #7B2D3E',
                                        borderRadius: 12,
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 8
                                    }}
                                >
                                    <RefreshCcw size={18} /> Chơi lại
                                </button>

                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .confetti {
                    position: absolute;
                    animation: confetti-fall 3s linear infinite;
                }
                @keyframes confetti-fall {
                    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(600px) rotate(720deg); opacity: 0; }
                }
            `}</style>
        </section>
    );
}
