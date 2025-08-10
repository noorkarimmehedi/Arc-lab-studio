import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How long does it take to build an MVP?",
      answer: "We consistently deliver launch-ready MVPs in just 21 days. Our streamlined process and experienced team allow us to move quickly without sacrificing quality."
    },
    {
      question: "What technologies do you work with?",
      answer: "We're technology agnostic and choose the best stack for your specific needs. We have expertise in React, Next.js, Node.js, Python, Flutter, and many other modern frameworks and languages."
    },
    {
      question: "How much does an MVP cost?",
      answer: "MVP costs vary based on complexity and requirements. We offer transparent pricing and work with you to define a scope that fits your budget while delivering maximum value."
    },
    {
      question: "Do you offer ongoing support after launch?",
      answer: "Yes! We provide ongoing support and maintenance packages to ensure your product continues to perform optimally after launch. We can also help with iterative improvements based on user feedback."
    },
    {
      question: "How do you ensure quality with such fast delivery?",
      answer: "Our experienced team follows battle-tested processes and leverages reusable components to maintain high quality while moving quickly. We also implement automated testing and thorough QA procedures."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-0 pb-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-6">
            <span className="inline-block px-3 py-1 bg-blue-500 text-white font-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all">FAQs</span>
          </h2>
          <p className="text-xl text-black font-bold max-w-2xl mx-auto">
            COMMON QUESTIONS ABOUT WORKING WITH ARC-LAB
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-2 border-black bg-white shadow-[4px_4px_0_0_#000] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-black text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 pt-0">
                  <div className="border-t-2 border-black pt-4">
                    <p className="text-black">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
