import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type FadeInWhenVisibleProps = {
  children: React.ReactNode;
  viewPoint?: number;
};

const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({
  children,
  viewPoint = 0.1,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: viewPoint,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: { opacity: 1, translateY: 0 },
        hidden: { opacity: 0, translateY: 100 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
