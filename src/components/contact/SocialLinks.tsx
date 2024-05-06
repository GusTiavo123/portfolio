interface SocialLinkProps {
  url: string;
  icon: string;
  alt: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ url, icon, alt }) => {
  return (
    <a
      className="bg-custom-box-dark rounded-xl px-8 border-t-2 border-custom-box-border hover:scale-110 duration-300 transition-all  hover:shadow-md ease-out hover:shadow-custom-green"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={icon} alt={alt} className="h-24 w-32" />
    </a>
  );
};

export default SocialLink;
