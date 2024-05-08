import { useRef } from "react";

const ContactForm: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  const openEmailClient = () => {
    const email = emailRef.current?.value;
    if (email) {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div
      className="relative flex flex-col bg-custom-box-dark border-t-2 border-custom-box-border rounded-xl py-5 pl-10 md:pr-10 lg:pr-60 justify-between md:mr-8 lg:hover:scale-105 duration-300 transition-all lg:hover:shadow-md ease-out lg:hover:shadow-custom-green shadow-custom-green lg:shadow-none shadow-md cursor-pointer"
      onClick={openEmailClient}
    >
      <img
        src="svg/website.svg"
        alt="Your Description"
        className="absolute top-5 right-3 h-6 w-6 md:top-5 md:right-4 md:h-8 md:w-8"
      />
      <span className="text-custom-gray text-xs md:text-base w-full">
        Let's work together!
      </span>
      <input
        ref={emailRef}
        type="text"
        defaultValue="gusaramayo2010@hotmail.com"
        readOnly
        className="text-white font-bold md:text-2xl text-lg w-full bg-custom-box-dark rounded-xl cursor-text object-fil"
        onClick={(e) => e.stopPropagation()}
        onFocus={(e) => e.currentTarget.select()}
      />
    </div>
  );
};

export default ContactForm;
