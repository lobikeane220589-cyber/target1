import React from 'react';
import { Instagram, Send, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="text-2xl font-bold mb-6 text-white tracking-tight">
              Алексей<span className="text-amber-400">.Target</span>
            </div>
            <p className="text-slate-500 text-sm max-w-sm mb-8 leading-relaxed">
              Настройка таргетированной рекламы для бизнеса в Казахстане. 
              Специализация: Туризм и Авто. Работаю на результат.
            </p>
            <div className="text-slate-600 text-xs">
              &copy; {new Date().getFullYear()} Target Specialist. All rights reserved.
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Контакты</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 hover:text-amber-400 cursor-pointer transition-colors group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-amber-400/20 transition-colors">
                   <Phone size={16} /> 
                </div>
                +7 (775) 510 56 76
              </li>
              <li className="flex items-center gap-3 hover:text-amber-400 cursor-pointer transition-colors group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-amber-400/20 transition-colors">
                  <Send size={16} /> 
                </div>
                <a href="https://wa.me/77755105676" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-white mb-6">Информация</h4>
             <ul className="space-y-3 text-sm">
                <li className="hover:text-amber-400 cursor-pointer transition-colors">Договор оферты</li>
                <li className="hover:text-amber-400 cursor-pointer transition-colors">Политика конфиденциальности</li>
             </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};