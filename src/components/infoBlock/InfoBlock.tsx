interface InfoBlockProps {
  title: string;
  text: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ title, text }) => (
  <div className="leading-relaxed p-4 md:p-8 ml-8 mb-8 bg-custom-box-dark rounded-xl border-t-2 border-custom-box-border hover:scale-105 transform transition-transform duration-300 hover:shadow-lg">
    <h2 className="text-white text-3xl font-bold">{title}</h2>
    <p className="italic text-custom-gray text-md mt-2">{text}</p>
  </div>
);

export default InfoBlock;