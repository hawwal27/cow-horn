import React, { useState } from 'react';

const CowHornFAQ = () => {
  const faqs = [
    {
      question: "What types of cow horns do you sell?",
      answer:
        "We offer natural, polished, and carved cow horns suitable for décor, crafts, drinking vessels, instruments, and ceremonial use.",
    },
    {
      question: "Are the cow horns ethically sourced?",
      answer:
        "Yes, all our horns are ethically sourced as by-products of the meat industry. We do not harm animals for their horns.",
    },
    {
      question: "Can I place a custom order?",
      answer:
        "Absolutely! We accept custom sizes, shapes, and engraving requests. Just contact us with your specifications.",
    },
    {
      question: "Do the horns have a smell?",
      answer:
        "Natural horns may have a faint odor initially, but they are thoroughly cleaned and treated to minimize any smell.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship worldwide. Shipping rates and delivery times vary depending on your location.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-amber-500">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-5 py-4 font-medium text-lg flex justify-between items-center"
            >
              <span className='text-amber-500'>{faq.question}</span>
              <span className='text-amber-600'>{openIndex === index ? '▲' : '▼'}</span>
            </button>
            {openIndex === index && (
              <div className="px-5 pb-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CowHornFAQ;
