import React, { useState } from "react";
import "./HomeFaq.css";
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";

const faqData = [
  {
    question: "How often should I visit the dentist?",
    answer:
      "It's generally recommended to visit the dentist every six months for a check-up and cleaning.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We provide a full range of dental services including preventive care, fillings, root canals, crowns, implants, cosmetic dentistry, and more.",
  },
  {
    question: "Do you treat children and families?",
    answer:
      "Yes, we offer dental care for patients of all ages, including children. Our clinic is family-friendly and equipped to handle pediatric needs.",
  },
  {
    question: "Is teeth whitening safe and effective?",
    answer:
      "Yes, professional teeth whitening is a safe and effective way to brighten your smile under the supervision of a dentist.",
  },
  {
    question: "How do I maintain good oral hygiene at home?",
    answer:
      "Brush your teeth twice a day, floss daily, use mouthwash, avoid sugary foods, and maintain regular dental check-ups to keep your mouth healthy.",
  },
  {
    question: "What should I do in a dental emergency?",
    answer:
      "In case of a dental emergency such as a knocked-out tooth, severe pain, or bleeding, contact our office immediately. We offer emergency dental services to provide prompt care.",
  },
];

function HomeFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleQuestion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
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
            <div className="hfq-open">{openIndex !== index && <FiPlus />}</div>
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
