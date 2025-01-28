import { ArrowRight } from "lucide-react";

interface TPButtonProps {
  text: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  iconPosition?: "left" | "right";
}

const TPButton: React.FC<TPButtonProps> = ({
  text,
  onClick,
  type,
  className = "",
  iconPosition = "right",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex items-center justify-center gap-2 px-4 py-2 font-medium rounded-full transition-transform duration-300 hover:scale-105 cursor-pointer ${className}`}
    >
      {iconPosition === "left" && <ArrowRight className="w-5  rotate-180" />}
      <span>{text}</span>
      {iconPosition === "right" && <ArrowRight className="w-5 " />}
    </button>
  );
};

export default TPButton;
