import { useState } from "react";
const faqs = [
  {
    question: 'What credit score do I need to apply for a credit card?',
    answer:
      'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards..',
  },
  {
    question: ' How can I apply for a credit card online?',
    answer:
      'React is a JavaScript library for building user interfaces using components.',
  },
  {
    question:
      'Are there any annual fees associated with the credit card?How do I use this FAQ component?',
    answer:
      "Just copy the code, paste into your React project, and you're good to go!",
  },
  {
    question: 'How long does it take to receive the credit card once approved?',
    answer:
      "Just copy the code, paste into your React project, and you're good to go!",
  },
  {
    question: 'How can I check my credit card balance and transactions?',
    answer:
      "Just copy the code, paste into your React project, and you're good to go!",
  },
  {
    question: 'Is my credit card information secure?',
    answer:
      "Just copy the code, paste into your React project, and you're good to go!",
  },
];

export default function FAQSecti() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">FAQs</h2>
      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b-[1.5px] border-[#ADB2B1] pb-1 shadow transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left text-lg font-medium"
            >
              {faq.question}
              <span className="ml-2 text-gray-500">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="mt-2 text-[#ADB2B1] transition-all duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
