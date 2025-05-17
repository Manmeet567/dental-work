import React, { useState } from "react";
import "./HomeFaq.css";
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";

const faqData = [
  {
    question: "What is Webflow and why is it the best website builder?",
    answer:
      "Webflow is a visual web design tool that lets you build responsive websites without writing code. It's powerful because it gives full control over design, layout, and animations.",
  },
  {
    question: "Is dental treatment painful?",
    answer:
      "With modern techniques and anesthetics, dental treatments are now nearly painless. We ensure your comfort throughout the entire process.",
  },
  {
    question: "Do I need to visit the dentist regularly?",
    answer:
      "Yes, regular check-ups help prevent bigger problems. We recommend a visit every 6 months for optimal oral health.",
  },
  {
    question: "What if I have dental anxiety?",
    answer:
      "We offer gentle care, calming environments, and sedation options to help you feel relaxed and comfortable.",
  },
  {
    question: "What if I have dental anxiety?",
    answer:
      "We offer gentle care, calming environments, and sedation options to help you feel relaxed and comfortable.",
  },
  {
    question: "What if I have dental anxiety?",
    answer:
      "We offer gentle care, calming environments, and sedation options to help you feel relaxed and comfortable.",
  },
];

function HomeFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleQuestion = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div id="faq" className="home-faq">
      <p>FAQ</p>
      <p>Fearing Dental Treatment?</p>
      <p>Relax, We’ve Got You Covered!</p>
      <div className="hf-faq-section">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`hffs-question ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleQuestion(index)}
          >
            <div className="hfq-qna">
              <p>{faq.question}</p>
              {openIndex === index && <p>{faq.answer}</p>}
            </div>
            <div className="hfq-open">
              {openIndex !== index && <FiPlus />}
            </div>
            <div className="hfq-close">
              {openIndex === index && <LuMinus />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeFaq;
