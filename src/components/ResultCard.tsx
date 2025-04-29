import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface ResultProps {
  title: string;
  description: string;
  image: string;
  analysis: string;
  onRestart: () => void;
  onContinue: () => void;
}

const ResultCard = ({ title, description, image, analysis, onRestart, onContinue }: ResultProps) => {
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
              <p className="text-base mb-4">{description}</p>
              <Separator className="my-4" />
              <div className="bg-primary/5 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-primary mb-2">Необходимые анализы:</h3>
                <p className="text-sm">{analysis}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={onRestart} variant="outline" className="flex-1">
                  Пройти тест снова
                </Button>
                <Button onClick={onContinue} className="flex-1">
                  Оформить заявку
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultCard;
