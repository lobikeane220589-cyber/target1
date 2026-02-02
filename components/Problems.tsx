import React from 'react';
import { Car, Plane, Briefcase, Check } from 'lucide-react';

const niches = [
  {
    title: 'Детейлинг и Авто',
    icon: <Car size={32} />,
    color: 'indigo',
    description: 'Детейлинг-студии, автомойки, тюнинг-ателье. Привожу клиентов на полировку, керамику и оклейку.',
    needs: [
      'Запись на услуги с высоким чеком',
      'Загрузка мастеров в несезон',
      'Постоянный поток машин'
    ]
  },
  {
    title: 'Турагентства',
    icon: <Plane size={32} />,
    color: 'rose',
    description: 'Агентства, визовые центры. Генерирую заявки на туры в Турцию, Египет, ОАЭ и визы.',
    needs: [
      'Лиды, готовые купить сейчас',
      'Снижение стоимости заявки',
      'База для рассылок горящих туров'
    ]
  },
  {
    title: 'Услуги и B2B',
    icon: <Briefcase size={32} />,
    color: 'amber',
    description: 'Другие услуги (Строительство, Ремонт, Медицина). Подбираю стратегию индивидуально.',
    needs: [
      'Квалифицированные лиды',
      'Работа с длинным циклом сделки',
      'Масштабирование бизнеса'
    ]
  }
];

export const Problems: React.FC = () => {
  return (
    <section id="niches" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            С кем я <span className="text-amber-400">работаю</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Работаю с любым бизнесом в Казахстане, привожу клиентов через таргетированную рекламу в Meta, TikTok и YouTube. Специализация: услуги, товары и B2B.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {niches.map((niche, index) => (
            <div key={index} className="group relative bg-slate-900/40 p-8 rounded-3xl border border-white/5 hover:bg-slate-900/80 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
              {/* Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                  niche.color === 'rose' ? 'from-rose-500/5' : 
                  niche.color === 'amber' ? 'from-amber-500/5' : 
                  'from-indigo-500/5'
                } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
              
              <div className={`mb-6 p-4 w-fit rounded-2xl transition-all duration-300 border bg-slate-950 ${
                  niche.color === 'rose' 
                    ? 'text-rose-400 border-rose-500/20 group-hover:border-rose-500/50' 
                    : niche.color === 'amber'
                    ? 'text-amber-400 border-amber-500/20 group-hover:border-amber-500/50'
                    : 'text-indigo-400 border-indigo-500/20 group-hover:border-indigo-500/50'
                }`}>
                {niche.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {niche.title}
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                {niche.description}
              </p>
              
              <ul className="space-y-3">
                {niche.needs.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                    <div className={`p-1 rounded-full ${
                         niche.color === 'rose' ? 'bg-rose-500/20 text-rose-400' : 
                         niche.color === 'amber' ? 'bg-amber-500/20 text-amber-400' :
                         'bg-indigo-500/20 text-indigo-400'
                    }`}>
                      <Check size={12} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};