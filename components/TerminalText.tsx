
import React, { useState, useEffect } from 'react';

interface TerminalTextProps {
  text: string;
  delay?: number;
}

// Fix: Complete the component implementation and add default export to fix the error in Hero.tsx
const TerminalText: React.FC<TerminalTextProps> = ({ text, delay = 50 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <>
      {currentText}
      <span className="inline-block w-2 h-[1.1em] bg-cyan-500 ml-1 animate-pulse align-middle" />
    </>
  );
};

export default TerminalText;
