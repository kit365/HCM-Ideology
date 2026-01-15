import { Quote } from 'lucide-react';

const quotes = [
  {
    text: 'Không có gì quý hơn độc lập, tự do',
    context: 'Khẳng định giá trị tối thượng của độc lập dân tộc',
  },
  {
    text: 'Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công',
    context: 'Nhấn mạnh sức mạnh của đại đoàn kết dân tộc',
  },
  {
    text: 'Dân là chủ, nước là nhà. Đã là chủ, đã là nhà, thì việc nhà, việc nước, mỗi người dân phải lo',
    context: 'Về quyền làm chủ của nhân dân',
  },
  {
    text: 'Đảng có thể, chính phủ có thể, nhưng có thể nhất vẫn là nhân dân',
    context: 'Khẳng định vai trò quyết định của nhân dân',
  },
  {
    text: 'Chúng ta phải đoàn kết như một người',
    context: 'Về tinh thần đoàn kết trong đấu tranh giải phóng',
  },
  {
    text: 'Chỉ có chủ nghĩa xã hội, chủ nghĩa cộng sản mới giải phóng được các dân tộc bị áp bức',
    context: 'Về con đường giải phóng dân tộc',
  },
];

export function Quotes() {
  return (
    <section id="trich-dan" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium">
            Lời vàng ngọc
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-slate-900 mb-6">
            Trích Dẫn Nổi Bật
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Những lời vàng ngọc của Chủ tịch Hồ Chí Minh
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-8 border border-slate-100 hover:border-indigo-100 relative overflow-hidden group"
            >
              {/* Decorative gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-purple-50/0 group-hover:from-indigo-50/50 group-hover:to-purple-50/50 transition-all duration-300 -z-10"></div>

              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <blockquote className="text-lg text-slate-800 mb-6 leading-relaxed">
                  "{quote.text}"
                </blockquote>
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-sm text-slate-500">
                    {quote.context}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Context Section */}
        <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl shadow-sm p-8 md:p-12 border border-slate-100">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl text-slate-900 mb-6">
              Ý Nghĩa Lịch Sử
            </h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Tư tưởng Hồ Chí Minh về cách mạng giải phóng dân tộc đã trở thành ngọn cờ tư tưởng,
              kim chỉ nam dẫn đường cho cách mạng Việt Nam giành thắng lợi vẻ vang.
              Đây là di sản quý báu, là nguồn sáng mãi mãi soi đường cho dân tộc ta đi lên.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Trong thời đại mới, chúng ta cần tiếp tục nghiên cứu, vận dụng và phát triển
              tư tưởng Hồ Chí Minh để xây dựng đất nước ngày càng giàu mạnh, văn minh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}