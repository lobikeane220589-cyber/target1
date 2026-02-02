import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const reqs = [
  'Доступы к Business Manager (или помогу создать)',
  'Фото/Видео контент (исходники)',
  'Прайс-лист на услуги',
  'Менеджер, который будет отвечать на заявки',
  'Понимание вашего ГЕО и целевой аудитории'
];

export const Requirements: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 border border-white/10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
             <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Что нужно для <span className="text-amber-400">старта</span>?
                </h3>
                <p className="text-slate-400">
                  Чтобы мы запустились быстро и эффективно, подготовьте эти пункты. 
                  Остальное (настройки, тексты, стратегии) я беру на себя.
                </p>
             </div>
             <div className="md:w-1/2 w-full">
                <ul className="space-y-4">
                  {reqs.map((req, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-200">
                      <CheckCircle2 className="text-emerald-400 flex-shrink-0" size={20} />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};