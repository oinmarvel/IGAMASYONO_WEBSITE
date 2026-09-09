"use client";

import { useState } from "react";
import { faqData } from "@/data/faq";
import { Search, ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const filteredFaqs = faqData.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 md:py-32 px-4 md:px-8 bg-white relative border-t border-iga-outline-variant/10">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="font-display text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-medium text-iga-on-tertiary">
            Tanya Jawab
          </h2>
          <div className="h-px w-24 bg-brand-red mx-auto opacity-50" />
        </div>

        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Cari pertanyaan..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-iga-light-surface border border-iga-outline-variant/30 rounded-full py-3 pl-12 pr-4 font-body text-[15px] text-iga-on-tertiary focus:outline-none focus:border-brand-red transition-colors shadow-sm"
          />
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-iga-on-tertiary/50" />
        </div>

        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <p className="text-center text-iga-on-tertiary/60 font-body py-8">Tidak ada pertanyaan yang sesuai dengan pencarian Anda.</p>
          ) : (
            filteredFaqs.map((faq) => (
              <div key={faq.id} className="border border-iga-outline-variant/20 rounded-lg bg-iga-light-surface overflow-hidden">
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-black/5"
                >
                  <span className="font-body text-[16px] font-medium text-iga-on-tertiary">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-brand-red transition-transform duration-300 shrink-0 ${openId === faq.id ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 font-body text-[15px] leading-relaxed text-iga-on-tertiary/80 border-t border-iga-outline-variant/10 mt-2 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
