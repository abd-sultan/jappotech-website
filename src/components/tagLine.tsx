import brackets from "../assets/svg/Brackets";

interface TagLineProps{
    className?: any;
    children?: React.ReactNode;
}

const TagLine: React.FC<TagLineProps> = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default TagLine;
