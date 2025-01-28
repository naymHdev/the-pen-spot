import { ArrowRight } from "lucide-react";

interface TPButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  iconPosition?: "left" | "right";
}

const TPButton: React.FC<TPButtonProps> = ({
  text,
  onClick,
  className = "",
  iconPosition = "right",
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-4 py-2 font-medium rounded-full transition-transform duration-300 hover:scale-105 ${className}`}
    >
      {iconPosition === "left" && <ArrowRight className="w-5  rotate-180" />}
      <span>{text}</span>
      {iconPosition === "right" && <ArrowRight className="w-5 " />}
    </button>
  );
};

export default TPButton;
