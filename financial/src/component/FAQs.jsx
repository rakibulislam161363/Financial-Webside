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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }


  return (
    <div className="text-white mt-10 pb-5">
      <h1 className="text-2xl font-bold text-center">FAQs</h1>

      <div className="space-y-2">
        {faqs.map((item, index) => (
          <div
            className="pt-5 border-b-[1.5px] pb-2 border-[#ADB2B1]"
            key={index}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="text-xl font-bold justify-between items-center flex w-full text-left"
            >
              {item.question}
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>

            {openIndex === index && (
              <div className="pt-3 text-[#ADB2B1] transition-all duration-300">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


export default FAQSection;


