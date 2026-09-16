"use client";

import { useState } from "react";
import { faqContent } from "@/data/pageContent";

export default function Specialties() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="section-padding border-editorial"
      aria-label="Frequently Asked Questions"
    >
      {/* Heading */}
      <div className="mb-12 lg:mb-16">
        <h2 className="font-display text-[42px] md:text-[50px] lg:text-[60px] leading-[1.1] text-[var(--color-text)]">
          {faqContent.heading}{" "}
          <span className="text-script-accent text-[48px] md:text-[56px] lg:text-[66px]">
            {faqContent.headingAccent}
          </span>
        </h2>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-[800px]">
        {faqContent.items.map((item, index) => (
          <div
            key={item.question}
            className="faq-item"
          >
            <button
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
            >
              <span>{item.question}</span>
              <span className={`faq-icon ${openIndex === index ? "open" : ""}`}>
                +
              </span>
            </button>
            <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
