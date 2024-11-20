import ContactForm from "../contact/ContactForm";
import SocialLink from "../contact/SocialLinks";
import FadeInWhenVisible from "../effects/FadeInWhenVisible";
import RandomTypewriter from "../effects/RandomTypewritter";

interface SocialLink {
  url: string;
  icon: string;
  alt: string;
}

const Contact: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      url: "https://www.linkedin.com/in/gustavo-aramayo-b80b4b166/",
      icon: "svg/linkedin.svg",
      alt: "SVG Linkedin",
    },
    {
      url: "https://github.com/GusTiavo123",
      icon: "svg/github.svg",
      alt: "SVG Github",
    },
    {
      url: "https://drive.google.com/file/d/1MuSCuu80L3KH7neJ6irj5Z02sSHtZn1U/view?usp=sharing",
      icon: "svg/cv.svg",
      alt: "SVG CV",
    },
  ];

  return (
    <section
      id="contact"
      className="text-white max-w-7xl lg:my-44 md:my-40 my-32 z-10"
    >
      <RandomTypewriter text="<Contact />" />
      <FadeInWhenVisible>
        <div className="flex flex-col lg:flex-row  mt-6 md:mt-9">
          <div className="w-full lg:w-8/12 lg:mr-8 mb-3 lg:mb-0">
            <ContactForm />
          </div>
          <div className="flex w-full lg:w-5/12 justify-around items-center space-x-10 md:space-x-8 lg:space-x-16 lg:ml-8 mt-8 lg:mt-0">
            {socialLinks.map((link) => (
              <SocialLink key={link.alt} {...link} />
            ))}
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
};

export default Contact;
