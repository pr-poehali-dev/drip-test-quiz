import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { quizQuestions, quizResults } from "@/data/quizData";
import { AnswerMap } from "@/types/quiz";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import QuestionCard from "@/components/QuestionCard";
import ResultCard from "@/components/ResultCard";

const Index = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1); // Start at -1 for consent page
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [showResult, setShowResult] = useState(false);
  const [resultType, setResultType] = useState<"detox" | "weight" | "energy">("detox");
  const [consentGiven, setConsentGiven] = useState(false);

  const totalQuestions = quizQuestions.length;
  const currentQuestion = currentQuestionIndex >= 0 ? quizQuestions[currentQuestionIndex] : null;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleSelectAnswer = (value: number) => {
    setAnswers({ ...answers, [currentQuestionIndex]: value });
  };

  const handleConsentChange = (checked: boolean) => {
    setConsentGiven(checked);
  };

  const handleStartQuiz = () => {
    if (consentGiven) {
      setCurrentQuestionIndex(0);
    }
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
    } else if (currentQuestionIndex === 0) {
      setCurrentQuestionIndex(-1); // Go back to consent page
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

  const renderConsentPage = () => (
    <div className="p-6 animate-fade-in">
      <h2 className="text-xl font-bold mb-4">Согласие на обработку персональных данных</h2>
      <p className="mb-6 text-gray-700">
        Прежде чем начать тест, пожалуйста, ознакомьтесь с нашей политикой обработки персональных данных. 
        Нажимая кнопку "Начать тест", вы соглашаетесь с обработкой ваших персональных данных в соответствии 
        с Федеральным законом "О персональных данных" от 27.07.2006 N 152-ФЗ.
      </p>
      <div className="flex items-center space-x-2 mb-6">
        <Checkbox 
          id="consent" 
          checked={consentGiven} 
          onCheckedChange={handleConsentChange} 
        />
        <Label htmlFor="consent" className="cursor-pointer">
          Я согласен на обработку моих персональных данных
        </Label>
      </div>
      <Button 
        onClick={handleStartQuiz} 
        disabled={!consentGiven}
        className="w-full"
      >
        Начать тест
      </Button>
    </div>
  );

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
          {currentQuestionIndex === -1 && !showResult ? (
            renderConsentPage()
          ) : !showResult ? (
            <>
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Вопрос {currentQuestionIndex + 1} из {totalQuestions}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              {currentQuestion && (
                <QuestionCard
                  question={currentQuestion}
                  currentAnswer={answers[currentQuestionIndex] || null}
                  onSelectAnswer={handleSelectAnswer}
                />
              )}

              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
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
