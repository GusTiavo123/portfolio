import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface RandomTypewriterProps {
  text: string;
  speed?: number;
}

const RandomTypewriter: React.FC<RandomTypewriterProps> = ({ text, speed = 50 }) => { 
  const [display, setDisplay] = useState(() => Array(text.length).fill(''));
  
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true
  });


  useEffect(() => {
    if (inView) {
      const timers = text.split('').map((_, index) => {
        return setTimeout(() => {
          let count = 0;
          const interval = setInterval(() => {
            if (count > 2) { 
              clearInterval(interval);
              setDisplay((prev) => {
                const newArr = [...prev];
                newArr[index] = text[index];
                return newArr;
              });
            } else {
              setDisplay((prev) => {
                const newArr = [...prev];
                newArr[index] = String.fromCharCode(33 + Math.random() * (94));
                return newArr;
              });
            }
            count++;
          }, speed / 2);  
        }, index * (speed / 2)); 
      });

      return () => timers.forEach(timer => clearTimeout(timer));
    }
  }, [inView, text, speed]);

  return (
    <motion.div
      ref={inViewRef}
      className="text-white text-4xl font-bold mt-8 mb-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.1 }}  
    >
      {display.join('')}
    </motion.div>
  );
};

export default RandomTypewriter;
