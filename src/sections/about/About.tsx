import FadeInWhenVisible from "../../effects/FadeInWhenVisible";
import { motion } from "framer-motion";
import RandomTypewriter from "../../effects/RandomTypewritter";

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
    <section
      id="about"
      className="max-w-7xl mx-auto mt-44 z-10  p-10"
    >
      <RandomTypewriter text="<About />" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-5"
      >
        <FadeInWhenVisible>
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center my-10"
          >
            <div className="w-full md:w-1/2">
              <img
                src="avatar.jpeg"
                alt="About image"
                className="rounded-full"
              />
            </div>
            <div className="text-white text-lg leading-relaxed p-4 md:p-8 ml-8 bg-custom-box-dark rounded-xl border-t-2 border-custom-box-border">
              <h2 className="text-white text-3xl font-bold">Gustavo Aramayo </h2>
              <p className="italic">
                "Inicié mi carrera como desarrollador web en los primeros días
                de JavaScript, creando interfaces simples pero efectivas."
              </p>
            </div>
          </motion.div>
        </FadeInWhenVisible>
      </motion.div>
    </section>
  );
};

export default About;
