import { Card } from "@/components/ui/card";

interface QuizOptionProps {
  value: number;
  label: string;
  isSelected: boolean;
  onClick: (value: number) => void;
}

const QuizOption = ({ value, label, isSelected, onClick }: QuizOptionProps) => {
  return (
    <Card
      className={`option-card p-4 cursor-pointer hover:shadow-md ${
        isSelected ? "selected" : ""
      }`}
      onClick={() => onClick(value)}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${
            isSelected
              ? "border-primary bg-primary text-white"
              : "border-gray-300"
          }`}
        >
          {isSelected && <span>✓</span>}
        </div>
        <span className="text-sm md:text-base">{label}</span>
      </div>
    </Card>
  );
};

export default QuizOption;
