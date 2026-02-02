import React from 'react';
import { Plane, Car, ExternalLink } from 'lucide-react';

export const Cases: React.FC = () => {
  return (
    <section id="cases" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Мои кейсы <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">в цифрах</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Результаты, которые я делаю для своих клиентов в сфере туризма и автобизнеса.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Case 1: Detailing */}
          <div className="bg-slate-900/50 rounded-3xl overflow-hidden border border-white/5 hover:border-amber-400/30 transition-all duration-300 group flex flex-col">
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-8 border-b border-white/5">
               <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2 text-rose-400 mb-2 text-xs font-bold uppercase tracking-widest">
                    <Car size={14} /> Детейлинг
                  </div>
                  <div className="bg-white/5 px-3 py-1 rounded-full text-xs text-slate-300">Атырау</div>
               </div>
               <h3 className="text-2xl font-bold text-white mb-2">2,950 заявок за 2 года</h3>
               <p className="text-slate-400 text-sm">Полная загрузка центра на полировку и керамику через Instagram.</p>
            </div>
            
            <div className="p-8 space-y-8 flex-grow flex flex-col justify-between">
              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div className="text-slate-400 text-xs uppercase tracking-wide mb-1">Потрачено</div>
                    <div className="text-xl font-bold text-white">$8,244</div>
                 </div>
                 <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div className="text-slate-400 text-xs uppercase tracking-wide mb-1">Цена заявки</div>
                    <div className="text-xl font-bold text-emerald-400">$2.79</div>
                 </div>
                 <div className="bg-white/5 p-4 rounded-2xl border border-white/5 col-span-2">
                    <div className="text-slate-400 text-xs uppercase tracking-wide mb-1">Результат</div>
                    <div className="text-xl font-bold text-white">Выручка x5 за год</div>
                 </div>
              </div>

              <a 
                href="https://www.notion.so/2950-2-9a68350278d84760acabc725b8070b2a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-bold py-4 rounded-xl transition-all border border-white/10 hover:border-amber-400/50 hover:text-amber-400"
              >
                Читать подробный кейс <ExternalLink size={18} />
              </a>
            </div>
          </div>

          {/* Case 2: Tourism */}
          <div className="bg-slate-900/50 rounded-3xl overflow-hidden border border-white/5 hover:border-indigo-400/30 transition-all duration-300 group flex flex-col">
             <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-8 border-b border-white/5">
               <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2 text-indigo-400 mb-2 text-xs font-bold uppercase tracking-widest">
                    <Plane size={14} /> Туризм
                  </div>
                  <div className="bg-white/5 px-3 py-1 rounded-full text-xs text-slate-300">Астана</div>
               </div>
               <h3 className="text-2xl font-bold text-white mb-2">8,617 лидов по $1.11</h3>
               <p className="text-slate-400 text-sm">Масштабирование турагентства. Заявки на Турцию, Египет и ОАЭ.</p>
            </div>
            
            <div className="p-8 space-y-8 flex-grow flex flex-col justify-between">
               <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div className="text-slate-400 text-xs uppercase tracking-wide mb-1">Потрачено</div>
                    <div className="text-xl font-bold text-white">$9,557</div>
                 </div>
                 <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div className="text-slate-400 text-xs uppercase tracking-wide mb-1">Цена лида</div>
                    <div className="text-xl font-bold text-emerald-400">$1.11</div>
                 </div>
                 <div className="bg-white/5 p-4 rounded-2xl border border-white/5 col-span-2">
                    <div className="text-slate-400 text-xs uppercase tracking-wide mb-1">Каналы</div>
                    <div className="text-white font-bold text-sm">Direct + WhatsApp + Сайт</div>
                 </div>
              </div>

              <a 
                href="https://www.notion.so/8-617-1-11-2f1df909568c8057b6bdf75e39da0602"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-bold py-4 rounded-xl transition-all border border-white/10 hover:border-indigo-400/50 hover:text-indigo-400"
              >
                 Читать подробный кейс <ExternalLink size={18} />
              </a>
            </div>
          </div>

        </div>
        
        {/* Placeholder Reviews */}
        <div className="mt-16 text-center">
            <p className="text-slate-500 text-sm italic border border-white/5 inline-block px-6 py-3 rounded-full bg-slate-900">
                Полные отчеты и примеры работ для вашей ниши отправлю в WhatsApp
            </p>
        </div>
      </div>
    </section>
  );
};