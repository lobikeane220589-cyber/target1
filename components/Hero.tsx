import React from 'react';
import { ArrowRight, CheckCircle, Flame, Users, LayoutDashboard, Target, TrendingUp, AlertCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleWhatsAppClick = () => {
    if ((window as any).fbq) {
      (window as any).fbq('track', 'Contact');
    }
  };

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

  return (
    <section className="relative pt-12 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-slate-950">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] opacity-20"></div>
      
      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/40 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse duration-[4000ms]"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/50 border border-white/10 text-amber-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-lg shadow-amber-900/10 hover:bg-slate-900/70 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Алексей | Таргетолог Meta / TikTok
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.2] tracking-tight">
              ПОКА ВЫ ЧИТАЕТЕ ЭТОТ ТЕКСТ — <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 drop-shadow-sm">ВАШИ КОНКУРЕНТЫ УВОДЯТ КЛИЕНТОВ</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
              Привожу готовых платить клиентов из Instagram и TikTok <br className="hidden md:block" />
              <span className="text-amber-400 underline decoration-amber-400/30 underline-offset-4">по 800–3000₸ за заявку</span>
            </p>

            <div className="space-y-4 bg-slate-900/40 p-5 rounded-2xl border border-white/5 backdrop-blur-sm animate-fade-in-up delay-100">
                <p className="text-slate-300 font-bold mb-2 text-sm uppercase tracking-wide">Даже если у вас сейчас:</p>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                    <CheckCircle size={16} className="text-amber-500 flex-shrink-0" />
                    <span>Аккаунт на 300 подписчиков</span>
                </div>
                 <div className="flex items-center gap-3 text-sm text-slate-400">
                    <CheckCircle size={16} className="text-amber-500 flex-shrink-0" />
                    <span>Нет нормальных фоток/видео</span>
                </div>
                 <div className="flex items-center gap-3 text-sm text-slate-400">
                    <CheckCircle size={16} className="text-amber-500 flex-shrink-0" />
                    <span>Вы думаете, что «в моей нише не работает»</span>
                </div>
            </div>

            <div className="flex gap-4 p-4 border-l-4 border-amber-400 bg-amber-400/5 animate-fade-in-up delay-200">
                <div className="text-sm text-slate-300">
                    <strong className="text-white block mb-1 font-bold text-base">Главное:</strong>
                    Если за 14 дней нет результата — работаю бесплатно до тех пор, пока не выйдем на ваши цифры.
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pt-4 animate-fade-in-up delay-300">
              <a 
                href="#contact" 
                onClick={scrollToContact}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-amber-400 text-slate-950 font-bold rounded-xl transition-all hover:bg-amber-300 hover:shadow-[0_0_20px_-5px_rgba(251,191,36,0.6)] overflow-hidden cursor-pointer"
              >
                <span className="relative z-10 flex items-center">
                   Бесплатный аудит
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              <a 
                href="https://wa.me/77755105676" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border border-white/20 hover:bg-white/5 hover:border-white/40 transition-all cursor-pointer"
              >
                Написать в WhatsApp
              </a>
            </div>

            <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-500 pt-2 animate-fade-in-up delay-300 max-w-md">
              <Flame size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
              <p>
                За 10 минут скажу сколько будет стоить заявка и какой бюджет нужен, чтобы выйти в плюс в первый месяц.
              </p>
            </div>
          </div>

          {/* Right Visual - Composition */}
          <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px] animate-fade-in-up delay-200">
            {/* Main Background Image with Gradient Mask */}
            <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-slate-950/50 via-transparent to-transparent z-10"></div>
                <img 
                   src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                   alt="Digital Analytics Dashboard" 
                   className="w-full h-full object-cover opacity-60 mix-blend-overlay hover:scale-105 transition-transform duration-[2000ms]"
                />
            </div>

            {/* Floating Interface Elements */}
            <div className="relative z-20 h-full w-full flex items-center justify-center">
                {/* Central Dashboard Card - Travel Case */}
                <div className="w-[90%] md:w-[80%] bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 transform rotate-[-1deg] hover:rotate-0 transition-all duration-500 hover:scale-[1.02] group">
                    <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                        <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center border border-white/5">
                                 <TrendingUp size={20} className="text-indigo-400" />
                             </div>
                             <div>
                                 <div className="text-sm font-bold text-white">Турагенство (Астана)</div>
                                 <div className="text-xs text-slate-400">Таргет с нуля</div>
                             </div>
                        </div>
                        <div className="text-emerald-400 text-sm font-mono font-bold bg-emerald-400/10 px-2 py-1 rounded">ROI {'>'} 300%</div>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="bg-slate-800/50 p-3 rounded-lg border border-white/5 flex justify-between items-center group-hover:bg-slate-800/70 transition-colors">
                            <span className="text-sm text-slate-300">Бюджет</span>
                            <span className="text-white font-bold font-mono">$9,557</span>
                        </div>
                        <div className="bg-amber-400/10 p-3 rounded-lg border border-amber-400/20 flex justify-between items-center relative overflow-hidden group-hover:bg-amber-400/15 transition-colors">
                            <span className="text-sm text-amber-200 font-bold">Лиды (Переписки)</span>
                            <span className="text-amber-400 font-bold font-mono text-lg">8,617</span>
                        </div>
                         <div className="flex justify-between items-center text-xs text-slate-400 px-1">
                            <span>Цена лида (CPL)</span>
                            <span className="text-white font-bold">$1.11</span>
                        </div>
                    </div>
                </div>

                {/* Floating Badge 1 - Detailing Case */}
                <div className="absolute -bottom-8 right-0 md:-right-8 bg-slate-800/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl animate-float">
                     <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400">
                             <Target size={20} />
                        </div>
                        <div>
                            <div className="text-xs text-slate-400">Детейлинг (Атырау)</div>
                            <div className="text-white font-bold text-lg">2,950 заявок</div>
                             <div className="text-[10px] text-emerald-400 font-mono">по $2.79</div>
                        </div>
                     </div>
                </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};