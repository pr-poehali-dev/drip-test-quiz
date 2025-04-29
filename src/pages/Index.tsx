import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { quizQuestions, quizResults } from "@/data/quizData";
import { AnswerMap } from "@/types/quiz";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import QuestionCard from "@/components/QuestionCard";
import ResultCard from "@/components/ResultCard";

const Index = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [showResult, setShowResult] = useState(false);
  const [resultType, setResultType] = useState<"detox" | "weight" | "energy">("detox");

  const totalQuestions = quizQuestions.length;
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / totalQuestions) * 100;

  const handleSelectAnswer = (value: number) => {
    setAnswers({ ...answers, [currentQuestionIndex]: value });
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult();
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResult(false);
  };

  const handleContinue = () => {
    navigate("/contact", { state: { resultType } });
  };

  const calculateResult = () => {
    let optionCounts = [0, 0, 0];

    Object.values(answers).forEach((answer) => {
      if (answer !== null && answer > 0 && answer <= 3) {
        optionCounts[answer - 1]++;
      }
    });

    let maxCount = Math.max(...optionCounts);
    let maxIndex = optionCounts.indexOf(maxCount);

    switch (maxIndex) {
      case 0:
        setResultType("detox");
        break;
      case 1:
        setResultType("weight");
        break;
      case 2:
        setResultType("energy");
        break;
      default:
        setResultType("detox");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-secondary py-10 px-4">
      <div className="quiz-container mx-auto w-full max-w-3xl bg-white rounded-xl shadow-xl overflow-hidden">
        <header className="bg-primary text-white p-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Узнайте, какой курс капельниц Вам подойдет
          </h1>
          <p className="text-primary-foreground opacity-90">
            Ответьте на вопросы для определения оптимальной программы
          </p>
        </header>

        <div className="p-6">
          {!showResult ? (
            <>
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Вопрос {currentQuestionIndex + 1} из {totalQuestions}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              <QuestionCard
                question={currentQuestion}
                currentAnswer={answers[currentQuestionIndex] || null}
                onSelectAnswer={handleSelectAnswer}
              />

              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                >
                  Назад
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={answers[currentQuestionIndex] === undefined}
                >
                  {currentQuestionIndex === totalQuestions - 1
                    ? "Показать результат"
                    : "Следующий вопрос"}
                </Button>
              </div>
            </>
          ) : (
            <ResultCard
              title={quizResults[resultType].title}
              description={quizResults[resultType].description}
              image={quizResults[resultType].image}
              analysis={quizResults[resultType].analysis}
              onRestart={handleRestart}
              onContinue={handleContinue}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
