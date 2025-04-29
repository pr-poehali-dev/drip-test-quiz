import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ResultProps {
  title: string;
  description: string;
  image: string;
  onRestart: () => void;
}

const ResultCard = ({ title, description, image, onRestart }: ResultProps) => {
  return (
    <div className="result-animation">
      <Card className="w-full max-w-3xl mx-auto overflow-hidden">
        <CardHeader className="bg-primary/10 text-center py-6">
          <CardTitle className="text-2xl font-bold text-primary">
            Ваш результат: {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/3 flex-shrink-0">
              <img
                src={image}
                alt={title}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-base mb-6">{description}</p>
              <Button onClick={onRestart} className="w-full md:w-auto">
                Пройти тест снова
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultCard;
