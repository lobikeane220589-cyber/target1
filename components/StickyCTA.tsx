import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

export const StickyCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    niche: 'Детейлинг',
    link: '',
    comment: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      
      // 1. Track Facebook Pixel Lead event
      if ((window as any).fbq) {
        (window as any).fbq('track', 'Lead');
      }

      // 2. Prepare WhatsApp Message
      const phoneNumber = '77755105676'; 
      const text = `👋 Здравствуйте! Оставляю заявку на план рекламы с сайта.
      
👤 Имя: ${formData.name}
📱 Телефон: ${formData.phone}
🏙 Город: ${formData.city}
🎯 Ниша: ${formData.niche}
🔗 Ссылка: ${formData.link}
💬 Комментарий: ${formData.comment}`;

      // 3. Open WhatsApp
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 border-t border-white/5 relative">
       {/* Background accent */}
       <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-900 rounded-3xl p-1 relative overflow-hidden shadow-2xl">
          {/* Animated Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-amber-400 to-indigo-500 opacity-30 blur-xl animate-pulse duration-[3000ms]"></div>
          
          <div className="bg-slate-950/90 backdrop-blur-sm rounded-[22px] p-8 md:p-16 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Бесплатный план <br/>
                  <span className="text-amber-400">рекламы</span>
                </h2>
                <p className="text-slate-400 text-lg">
                  Оставьте заявку. Через 10-15 минут я свяжусь с вами в WhatsApp, чтобы обсудить проект и дать прогноз результатов.
                </p>
                
                {/* Highlighted Bonus Section */}
                <div className="relative group overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-amber-400/20 blur-md group-hover:bg-amber-400/30 transition-all duration-500"></div>
                  <div className="relative flex gap-4 items-center p-5 bg-gradient-to-r from-slate-900 to-slate-800 border border-amber-400/30 rounded-xl">
                    <div className="bg-amber-400/10 p-3 rounded-lg text-amber-400">
                        <Sparkles size={24} className="animate-pulse" />
                    </div>
                    <div>
                      <div className="text-amber-400 font-bold text-sm uppercase tracking-wide mb-0.5">Бонус к заявке</div>
                      <div className="text-white font-medium">
                        Бесплатный мини-аудит рекламы/аккаунта
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-4 bg-slate-900 p-8 rounded-2xl border border-white/10 shadow-xl" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Ваше имя</label>
                  <input 
                    required 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    placeholder="Алексей" 
                    className="w-full px-4 py-4 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none transition-all placeholder:text-slate-700" 
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Телефон</label>
                        <input 
                          required 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          type="tel" 
                          placeholder="+7..." 
                          className="w-full px-4 py-4 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-400 outline-none transition-all placeholder:text-slate-700" 
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Город</label>
                        <input 
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          type="text" 
                          placeholder="Астана" 
                          className="w-full px-4 py-4 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-400 outline-none transition-all placeholder:text-slate-700" 
                        />
                    </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Ниша</label>
                  <select 
                    name="niche"
                    value={formData.niche}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-400 outline-none transition-all cursor-pointer"
                  >
                    <option value="Детейлинг">Детейлинг</option>
                    <option value="Туризм">Туризм</option>
                    <option value="Другое">Другое</option>
                  </select>
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Ссылка на Instagram / Сайт</label>
                    <input 
                      name="link"
                      value={formData.link}
                      onChange={handleChange}
                      type="text" 
                      placeholder="@username" 
                      className="w-full px-4 py-4 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-400 outline-none transition-all placeholder:text-slate-700" 
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Комментарий</label>
                    <input 
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                      type="text" 
                      placeholder="Хочу увеличить продажи..." 
                      className="w-full px-4 py-4 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-400 outline-none transition-all placeholder:text-slate-700" 
                    />
                </div>
                
                <div className="flex items-start gap-2 pt-2">
                    <input required type="checkbox" id="policy" className="mt-1 accent-amber-400 w-4 h-4" />
                    <label htmlFor="policy" className="text-xs text-slate-500 cursor-pointer">
                        Я согласен с политикой конфиденциальности
                    </label>
                </div>

                <button type="submit" className="w-full bg-amber-400 text-slate-950 font-extrabold text-lg py-5 rounded-xl hover:bg-amber-300 transition-all shadow-[0_0_30px_-5px_rgba(251,191,36,0.5)] transform hover:-translate-y-0.5 mt-2">
                  ПОЛУЧИТЬ ПЛАН В WHATSAPP
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};