import { Heart, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl">Tư Tưởng HCM</h3>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Website giáo dục về tư tưởng Hồ Chí Minh và cách mạng giải phóng dân tộc Việt Nam.
            </p>
          </div>


          <div>
            <h3 className="text-xl mb-4">Liên Kết</h3>
            <ul className="space-y-3">
              <li>
                <a href="#gioi-thieu" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Giới Thiệu
                </a>
              </li>
              <li>
                <a href="#tu-tuong" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Tư Tưởng
                </a>
              </li>
              <li>
                <a href="#lich-su" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Lịch Sử
                </a>
              </li>
              <li>
                <a href="#trich-dan" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Trích Dẫn
                </a>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="text-xl mb-4">Tài Nguyên</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Sách & Tài Liệu
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Video & Hình Ảnh
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Bài Viết
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Nghiên Cứu
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl mb-4">Liên Hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">Hồ Chí Minh, Việt Nam</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">info@tutuonghcm.vn</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">(+84) 123 456 789</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © 2026 Tư Tưởng Hồ Chí Minh. Website giáo dục phi lợi nhuận.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                Chính Sách
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                Điều Khoản
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                Bảo Mật
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
