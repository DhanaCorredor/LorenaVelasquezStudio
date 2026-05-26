import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data';

type Props = {
  /** Section background class (default white) */
  bgClass?: string;
  /** Vertical padding class (default compact) */
  paddingClass?: string;
  /** Index of the FAQ initially open (null = all closed) */
  defaultOpen?: number | null;
};

export function FAQ({
  bgClass = 'bg-white-pure',
  paddingClass = 'py-10 md:py-14',
  defaultOpen = 0,
}: Props) {
  const [active, setActive] = useState<number | null>(defaultOpen);

  return (
    <section id="faq" className={`${paddingClass} ${bgClass} border-t border-line`}>
      <div className="container-x max-w-3xl">
        <div className="text-center mb-6 md:mb-8">
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 className="h-display text-2xl sm:text-3xl md:text-4xl mt-2 text-balance">
            Lo que necesitas <span className="italic text-pink-dark">saber</span>
          </h2>
        </div>

        <div className="border-t border-line">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`border-b border-line ${i < 2 ? 'hidden sm:block' : ''}`}
            >
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="w-full py-3.5 md:py-4 flex items-start justify-between gap-3 text-left hover:text-pink-dark transition-colors group"
                aria-expanded={active === i}
              >
                <div className="flex items-start gap-3 sm:gap-4 flex-1">
                  <span className="text-pink-dark text-[0.65rem] font-bold tracking-widest pt-1.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display font-semibold text-base sm:text-lg text-ink group-hover:text-pink-dark transition-colors leading-snug">
                    {faq.q}
                  </span>
                </div>
                <div className="flex-shrink-0 pt-1.5">
                  {active === i ? (
                    <Minus className="w-4 h-4 text-pink-dark" />
                  ) : (
                    <Plus className="w-4 h-4 text-ink" />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  active === i ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="pl-8 sm:pl-10 pr-4 pb-4 text-sm sm:text-base text-graphite leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
