import { loading } from "@/assets";
import Image from "next/image";

interface GeneratingProps {
    className?: string;
}

const Generating: React.FC<GeneratingProps> = ({ className }) => {
    return (
        <div
            className={`flex items-center h-[3.5rem] px-6 bg-slate-900 rounded-[1.7rem] ${className || ""
                } text-base`}
        >
            <Image className="w-5 h-5 mr-4" src={loading} alt="Loading" />
            AI is generating
        </div>
    );
};

export default Generating;