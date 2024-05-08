import AboutImage from "../aboutImage/AboutImage";
import InfoBlock from "../infoBlock/InfoBlock";
import RandomTypewriter from '../effects/RandomTypewritter';

const About: React.FC = () => {
 
  return (
    <section id="about" className="max-w-7xl mx-auto lg:mt-44 md:mt-40 mt-32 z-10">
      <RandomTypewriter text="<About />" />
      <div className="mt-6 md:mt-9 flex flex-col md:flex-row items-center">
        <div className="w-full lg:w-1/2 relative">
          <AboutImage />
        </div>
        <div className="flex flex-col md:ml-8">
          <InfoBlock
            title="Software Engineer ⚙️"
            text="With 75% of my career completed, I focus on logical reasoning and modular design to develop scalable and maintainable solutions, crucial for technological adaptability."
          />

          <InfoBlock
            title="Fullstack Developer 🖥️"
            text="I've focused on mastering both front-end and back-end to create effective and complete solutions. My goal is always to enhance user interaction through better interfaces."
          />

          <InfoBlock
            title="Passion for AI 🤖"
            text="My interest in artificial intelligence led me to explore neural networks and data science deeply. This passion enhanced my problem-solving skills and ability to innovate."
          />
        </div>
      </div>
    </section>
  );
};

export default About;
