import { Question } from "@/types/quiz";
import QuizOption from "./QuizOption";

interface QuestionCardProps {
  question: Question;
  currentAnswer: number | null;
  onSelectAnswer: (value: number) => void;
}

const QuestionCard = ({
  question,
  currentAnswer,
  onSelectAnswer,
}: QuestionCardProps) => {
  return (
    <div className="mb-8 animate-fade-in">
      <h3 className="text-lg font-medium mb-4">{question.text}</h3>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <QuizOption
            key={index}
            value={index + 1}
            label={option}
            isSelected={currentAnswer === index + 1}
            onClick={onSelectAnswer}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
