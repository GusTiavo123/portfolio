import { useRef } from 'react';

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
      className="relative flex flex-col flex-1 bg-custom-box-dark border-t-2 border-custom-box-border rounded-xl py-5 pl-10 pr-72 justify-between mr-8 hover:scale-105 duration-300 transition-all hover:shadow-md ease-out hover:shadow-custom-green cursor-pointer"
      onClick={openEmailClient}
    >
      <img src="website.svg" alt="Your Description" className="absolute top-5 right-4 h-8 w-8" />
      <span className="text-custom-gray w-full">
        Let's work together!
      </span>
      <input
        ref={emailRef}
        type="text"
        defaultValue="gusaramayo2010@hotmail.com"
        readOnly
        className="text-white font-bold text-2xl w-full bg-custom-box-dark rounded-xl cursor-text"
        onClick={(e) => e.stopPropagation()}
        onFocus={(e) => e.currentTarget.select()} 
      />
    </div>
  );
};

export default ContactForm;
