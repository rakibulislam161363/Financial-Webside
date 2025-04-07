import { useState } from 'react';

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


function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="text-white pt-10">
      <h1 className="text-xl font-bold text-center">FAQs</h1>
      <div className="pt-5 space-y-3">
        {faqs.map((item, index) => (
          <div
            className="text-xl border-b-[1.5px] border-[#ADB2B1]"
            key={index}
          >
            <button
              className="flex w-full text-left justify-between"
              onClick={() => toggleFaq(index)}
            >
              {item.question}{' '}
              <span
                className={`text-4xl ${
                  openIndex === index ? 'text-red-600' : 'text-green-500 '
                }`}
              >
                {openIndex === index ? '-' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="text-base text-[#ADB2B1] font-medium pb-2 transition-all duration-300">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


export default FAQSection;


