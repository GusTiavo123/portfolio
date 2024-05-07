import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";

interface InfoBlockProps {
  title: string;
  text: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ title, text }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 100,
          damping: 10
        }
      });
    } else {
      controls.start({
        x: 100,
        opacity: 0
      });
    }
  }, [controls, inView]);
  return (
    <motion.article ref={ref} animate={controls}>
    <div className="leading-relaxed p-4 md:p-8 ml-8 mb-8 bg-custom-box-dark rounded-xl border-t-2 border-custom-box-border hover:scale-105  transition-all duration-300 hover:shadow-inner hover:shadow-innerit">
      <h2 className="text-white text-3xl font-bold">{title}</h2>
      <p className="italic text-custom-gray text-md mt-2">{text}</p>
    </div>
    </motion.article>
  );
};

export default InfoBlock;
