interface SocialLinkProps {
  url: string;
  icon: string;
  alt: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ url, icon, alt }) => {
  return (
    <a
      className="bg-custom-box-dark rounded-xl px-7 py-2 border-t-2 border-custom-box-border lg:hover:scale-105 duration-300 transition-all lg:hover:shadow-md ease-out lg:hover:shadow-custom-green shadow-custom-green lg:shadow-none shadow-md cursor-pointer"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={icon} alt={alt} className="lg:h-20 lg:w-32 md:16 md:28 h-12 w-24" />
    </a>
  );
};

export default SocialLink;
