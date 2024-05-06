import FadeInWhenVisible from "../../effects/FadeInWhenVisible";
import { motion } from "framer-motion";
import RandomTypewriter from "../../effects/RandomTypewritter";
import InfoBlock from "../../components/infoBlock/InfoBlock";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
      },
    },
  };

  return (
    <section id="about" className="max-w-7xl mx-auto mt-44 z-10">
      <RandomTypewriter text="<About />" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-8"
      >
        <FadeInWhenVisible viewPoint={0.3}>
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center"
          >
            <div className="w-full md:w-1/2">
              <img
                src="avatar.jpeg"
                alt="Profile avatar image"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <InfoBlock
                title="Fullstack Developer"
                text="I've focused on mastering both front-end and back-end to create effective and complete solutions. My goal is always to enhance user interaction through better interfaces."
              />
              <InfoBlock
                title="Passion for AI"
                text="My interest in artificial intelligence led me to explore neural networks and data science deeply. This passion enhanced my problem-solving skills and ability to innovate."
              />
              <InfoBlock
                title="Music and training"
                text="Beyond coding, I enjoy techno music and gym training. Both activities refresh my energy and boost my creativity, helping maintain a healthy balance life."
              />
            </div>
          </motion.div>
        </FadeInWhenVisible>
      </motion.div>
    </section>
  );
};

export default About;
