import React from 'react';
import { Check, Info, MessageCircle } from 'lucide-react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: 'СТАРТ',
    subtitle: 'Instagram + Facebook',
    oldPrice: '250,000 ₸',
    price: '200,000 ₸',
    period: '/ месяц',
    cta: 'Выбрать',
    description: 'Подойдёт если хотите протестировать один канал',
    features: [
      'Аудит текущей рекламы',
      'Стратегия под ваш бизнес',
      '10+ креативов в месяц',
      'Запуск и оптимизация кампаний',
      'Отчёт каждую неделю',
      'Ответ в чате до 20 минут'
    ]
  },
  {
    name: 'ОПТИМАЛЬНЫЙ',
    subtitle: 'Instagram + Facebook + TikTok',
    price: '270,000 ₸',
    period: '/ месяц',
    cta: 'Выбрать',
    highlight: true,
    tag: 'САМЫЙ ПОПУЛЯРНЫЙ',
    description: 'Для тех, кто хочет максимум заявок с разных площадок',
    features: [
      'Всё из тарифа «Старт»',
      'Запуск рекламы в TikTok',
      'Сценарии для видео',
      'Тест двух площадок — выясним где ваши клиенты дешевле',
      'Еженедельный созвон по результатам'
    ]
  },
  {
    name: 'МАКСИМУМ',
    subtitle: 'Все площадки + воронка продаж',
    price: '350,000 ₸',
    period: '/ месяц',
    cta: 'Обсудить проект',
    description: 'Для тех, кто готов масштабироваться',
    features: [
      'Всё из тарифа «Оптимальный»',
      'YouTube реклама',
      'Построение воронки от первого касания до продажи',
      'Догоняем тех, кто не купил с первого раза',
      'Скрипты для менеджеров по продажам',
      'Анализ звонков/переписок менеджеров с рекомендациями'
    ]
  }
];

export const Pricing: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleWhatsAppClick = () => {
    if ((window as any).fbq) {
      (window as any).fbq('track', 'Contact');
    }
  };

  return (
    <section id="pricing" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-900/20 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Тарифы на <span className="text-amber-400">услуги</span>
          </h2>
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-white/10 px-4 py-2 rounded-lg text-slate-400 text-sm">
             <Info size={16} /> Рекламный бюджет оплачивается отдельно
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`relative rounded-3xl transition-all duration-300 flex flex-col h-full ${
                tier.highlight 
                  ? 'bg-slate-900 border-2 border-amber-400 shadow-[0_0_50px_-10px_rgba(251,191,36,0.15)] scale-[1.02] z-10' 
                  : 'bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:border-white/20'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg whitespace-nowrap">
                  {tier.tag}
                </div>
              )}
              
              <div className="p-8 flex-grow">
                <div className="mb-6">
                  <h3 className={`text-xl font-bold mb-1 ${tier.highlight ? 'text-white' : 'text-slate-200'}`}>{tier.name}</h3>
                  {tier.subtitle && (
                    <p className="text-sm font-medium text-amber-400/90">{tier.subtitle}</p>
                  )}
                </div>

                <div className="flex flex-col mb-8">
                  {tier.oldPrice && (
                     <span className="text-slate-500 line-through text-lg font-medium">{tier.oldPrice}</span>
                  )}
                  <div className="flex items-baseline">
                    <span className={`text-3xl lg:text-3xl font-extrabold ${tier.highlight ? 'text-white' : 'text-slate-200'}`}>{tier.price}</span>
                    <span className="text-slate-500 ml-2 text-sm">{tier.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-400">
                      <div className={`p-0.5 rounded-full mt-0.5 flex-shrink-0 ${tier.highlight ? 'bg-amber-400/20 text-amber-400' : 'bg-slate-800 text-slate-500'}`}>
                        <Check size={14} />
                      </div>
                      <span className={tier.highlight ? 'text-slate-300' : ''}>{feature}</span>
                    </div>
                  ))}
                </div>

                {tier.description && (
                  <div className={`text-xs p-3 rounded-xl mb-6 ${tier.highlight ? 'bg-amber-400/10 text-amber-200 border border-amber-400/20' : 'bg-slate-800/50 text-slate-400 border border-white/5'}`}>
                    {tier.description}
                  </div>
                )}
              </div>
              
              <div className="p-8 pt-0 mt-auto">
                 <a 
                   href="#contact" 
                   onClick={scrollToContact}
                   className={`block w-full py-4 px-6 rounded-xl text-center font-bold transition-all cursor-pointer ${
                    tier.highlight
                      ? 'bg-amber-400 text-slate-950 hover:bg-amber-300 hover:shadow-lg transform hover:-translate-y-0.5'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* New Help Section */}
        <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-slate-900 to-indigo-950/50 border border-indigo-500/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left hover:border-indigo-500/40 transition-colors">
                <div className="bg-indigo-500/20 p-4 rounded-full text-indigo-400 animate-pulse duration-[3000ms]">
                    <MessageCircle size={32} />
                </div>
                <div className="flex-grow">
                    <h3 className="text-lg font-bold text-white mb-1">Не знаете какой тариф выбрать?</h3>
                    <p className="text-slate-400 text-sm">Напишите — подскажу за 5 минут, что лучше подойдет под ваши цели.</p>
                </div>
                <a 
                    href="https://wa.me/77755105676"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsAppClick}
                    className="whitespace-nowrap bg-indigo-500 text-white font-bold py-3 px-6 rounded-xl hover:bg-indigo-400 transition-colors shadow-lg shadow-indigo-500/20"
                >
                    Написать в WhatsApp
                </a>
            </div>
        </div>

        {/* Guarantee Section */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-slate-500 text-xs uppercase tracking-widest mb-2">Гарантия</p>
            <p className="text-slate-400 text-sm">
                Если за <span className="text-amber-400 font-bold">14 дней</span> теста нет целевых обращений по согласованным критериям — продлеваю работу на 7 дней бесплатно и полностью перерабатываю креативы.
            </p>
        </div>
      </div>
    </section>
  );
};