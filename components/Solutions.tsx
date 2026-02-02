import React from 'react';
import { MousePointerClick, BarChart3, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    icon: <MousePointerClick size={32} />,
    title: 'Поток целевых обращений',
    description: 'Не просто лайки и подписки, а заявки в Direct и WhatsApp от людей, которым нужен ваш продукт сейчас.'
  },
  {
    icon: <BarChart3 size={32} />,
    title: 'Контроль цены лида',
    description: 'Мы заранее оговариваем KPI. Если заявка выходит слишком дорогой — я отключаю объявление и делаю новое.'
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Прозрачная аналитика',
    description: 'Ежедневные или еженедельные отчеты. Вы всегда знаете, сколько денег потрачено и сколько заявок получено.'
  }
];

export const Solutions: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Что вы <span className="text-amber-400">получите</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Моя задача — выстроить систему, где каждый вложенный тенге приносит прибыль.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((item, index) => (
                <div key={index} className="bg-slate-900/50 p-8 rounded-2xl border border-white/10 hover:border-amber-400/30 transition-all group">
                    <div className="mb-6 inline-flex p-4 rounded-xl bg-slate-800 text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors duration-300">
                        {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};