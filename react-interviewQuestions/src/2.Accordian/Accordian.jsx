import React, { useState } from 'react';
import './style.css';

const faqs = [
  {
    id: 1,
    question: 'What is React?',
    answer:
      'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.',
  },
  {
    id: 2,
    question: 'What are Hooks in React?',
    answer:
      'Hooks are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8.',
  },
  {
    id: 3,
    question: 'What is JSX?',
    answer:
      'JSX stands for JavaScript XML. It is a syntax extension for JavaScript, used with React to describe what the UI should look like.',
  },
];

function Accordian() {
  const [openFaqId, setOpenFaqId] = useState(1);
  const handleClick = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };
  return (
    <div class="Faq-Cont">
      <h2>Frquently Asked Questions</h2>
      {faqs.map((faq) => (
        <div>
          <div class="question" onClick={() => handleClick(faq.id)}>
            {faq.question}
            <span>{openFaqId === faq.id ? '-' : '+'} </span>
          </div>
          {openFaqId === faq.id && <div class="answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default Accordian;
