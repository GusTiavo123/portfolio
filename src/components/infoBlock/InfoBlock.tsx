import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";

interface InfoBlockProps {
  title: string;
  text: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ title, text }) => {
  const initialThreshold = window.innerWidth > 1024 ? 1 : 0.5;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: initialThreshold
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
    <motion.article ref={ref} animate={controls} initial={{ x: 100, opacity: 0 }}>
      <div className="leading-relaxed p-4 md:p-8 md:mb-8 md:mt-0 mt-8 bg-custom-box-dark rounded-xl border-t-2 border-custom-box-border hover:scale-105 transition-all duration-300 hover:shadow-inner">
        <h3 className="text-white text-2xl font-bold">{title}</h3>
        <p className="italic text-custom-gray text-md mt-2">{text}</p>
      </div>
    </motion.article>
  );
};

export default InfoBlock;
