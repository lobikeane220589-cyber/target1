import React from 'react';
import { ProcessStep } from '../types';

const steps: ProcessStep[] = [
  { number: '01', title: 'Бриф и доступ', description: 'Заполняем бриф, вы даете доступы к рекламному кабинету (или создаем новый).' },
  { number: '02', title: 'Стратегия', description: 'Анализирую конкурентов, собираю аудитории, готовлю офферы под вашу нишу.' },
  { number: '03', title: 'Креативы', description: 'Создаю статические макеты и видео (Reels/TikTok), пишу продающие тексты.' },
  { number: '04', title: 'Тест (3-5 дней)', description: 'Запускаем рекламу с минимальным бюджетом, чтобы найти лучшие связки.' },
  { number: '05', title: 'Оптимизация', description: 'Отключаем дорогое, масштабируем то, что приносит дешевые заявки. Выходим на объем.' },
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-950 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
          Как мы <span className="text-amber-400">работаем</span>
        </h2>
        
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="bg-slate-900 border border-white/10 p-6 rounded-2xl hover:border-amber-400/50 transition-colors group">
                <div className="w-12 h-12 bg-slate-800 rounded-full border border-white/10 flex items-center justify-center text-amber-400 font-bold text-lg mb-6 group-hover:bg-amber-400 group-hover:text-slate-900 transition-colors relative z-10">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};