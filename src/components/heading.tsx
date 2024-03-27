"use client"
import { useTheme } from "next-themes";
import TagLine from "./tagLine";

interface TagLineProps{
    className?: any;
    title?: any;
    text: any;
    tag: any;
}

const Heading: React.FC<TagLineProps> = ({ className, title, text, tag }) => {
  const {theme} = useTheme();
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center ${theme === 'light' ? 'text-n-8' : ''}`}
    >
      {tag && <TagLine className="mb-4 md:justify-center"><span className={`${theme === 'light' ? 'text-black' : ''} `}>{tag}</span></TagLine>}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className={`body-2 mt-4 ${theme === 'light' ? 'text-n-8' : 'text-n-4'} `}>{text}</p>}
    </div>
  );
};

export default Heading;
