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
      url: "https://drive.google.com/file/d/1IG5HPqZrXCeJXoMHHys2kveV6nlQwvV0/view?usp=drive_link",
      icon: "svg/cv.svg",
      alt: "SVG CV",
    },
  ];

  return (
    <section id="contact" className="text-white max-w-7xl mx-auto my-44 z-10">
      <RandomTypewriter text="<Contact />" />
      <FadeInWhenVisible>
        <div className="flex w-full mt-9">
          <ContactForm />
          <div className="flex flex-1 w-full justify-around items-center space-x-16 ml-8">
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
