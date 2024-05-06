import AboutImage from "../components/aboutImage/AboutImage";
import InfoBlock from "../components/infoBlock/InfoBlock";
import RandomTypewriter from '../effects/RandomTypewritter';

const About: React.FC = () => {
 
  return (
    <section id="about" className="max-w-7xl mx-auto mt-44 z-10">
      <RandomTypewriter text="<About Me/>" />
      <div className="mt-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 relative">
          <AboutImage />
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
            title="Music and Training"
            text="Beyond coding, I enjoy techno music and gym training. Both activities refresh my energy and boost my creativity, helping maintain a healthy balance life."
          />
        </div>
      </div>
    </section>
  );
};

export default About;
