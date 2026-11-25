"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaqItem } from "@/data/faq";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-200 border-y border-slate-200 bg-white">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={item.question} className="transition-colors">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="w-full py-5 px-2 sm:px-4 flex items-center justify-between gap-4 text-left hover:bg-[#f8f9ff] transition-colors cursor-pointer"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#006e2e] block mb-1">
                  {item.category}
                </span>
                <span className="text-base sm:text-lg font-bold text-[#0b1c30]">
                  {item.question}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[#001a67] shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-2 sm:px-4 pb-5 text-sm sm:text-base text-[#444653] leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
