import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: 'Какой нужен рекламный бюджет?',
    answer: 'Я рекомендую начинать с $300-500 на первый месяц тестов. Это позволит проверить несколько гипотез и найти рабочую связку без слива денег.'
  },
  {
    question: 'Когда пойдут первые заявки?',
    answer: 'Обычно первые лиды появляются на 2-3 день после запуска рекламы (после прохождения модерации и первичного обучения алгоритма).'
  },
  {
    question: 'Что вы считаете целевым лидом?',
    answer: 'Это заявка с корректным номером телефона, от человека из нужного города, который интересовался вашей услугой. Спам и "случайные нажатия" мы отсеиваем.'
  },
  {
    question: 'Нужен ли мне контент?',
    answer: 'Да, для рекламы нужны фото и видео. Если у вас их нет, я дам подробное ТЗ (техническое задание), как их снять на телефон.'
  },
  {
    question: 'Как мы будем общаться?',
    answer: 'Создаем чат в WhatsApp/Telegram. Там я, вы и ваши менеджеры. Оперативные вопросы решаем там, отчеты присылаю туда же.'
  },
  {
    question: 'Что если уже запускали и не получилось?',
    answer: 'Нужно смотреть причины. Часто проблема не в "таргете", а в оффере или посадочной странице. Я проведу аудит и скажу честно, смогу ли помочь.'
  },
  {
    question: 'Работаете по договору?',
    answer: 'Да, работаем официально. Можем заключить договор, оплата на счет ИП (выставляю счет).'
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Частые <span className="text-amber-400">вопросы</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-white/10 rounded-xl bg-slate-900/30 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-white pr-8">{faq.question}</span>
                <div className={`flex-shrink-0 text-amber-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                   {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-slate-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};