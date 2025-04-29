import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { quizResults } from "@/data/quizData";

const ContactForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const { resultType } = location.state || { resultType: "detox" };
  
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Формируем данные для отправки
      const resultInfo = quizResults[resultType];
      const formData = new FormData();
      
      formData.append("to", "margo.kor@bk.ru");
      formData.append("subject", `Заявка на курс капельниц: ${resultInfo.title}`);
      formData.append("text", `
        Результат теста: ${resultInfo.title}
        Имя: ${firstName}
        Отчество: ${middleName}
        Телефон: ${phone}
        Рекомендованные анализы: ${resultInfo.analysis}
      `);

      // В реальном приложении здесь был бы запрос к API для отправки email
      // Имитируем отправку
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      
      // Перенаправляем на страницу с благодарностью или на главную
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast({
        title: "Ошибка при отправке заявки",
        description: "Пожалуйста, попробуйте еще раз",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-secondary py-10 px-4">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Оформление заявки</CardTitle>
          <CardDescription className="text-center">
            Оставьте ваши контактные данные для связи
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Имя</Label>
              <Input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Введите ваше имя"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="middleName">Отчество</Label>
              <Input
                id="middleName"
                type="text"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                placeholder="Введите ваше отчество"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Номер телефона</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (___) ___-__-__"
                required
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting || !firstName || !middleName || !phone}
              >
                {isSubmitting ? "Отправка..." : "Отправить заявку"}
              </Button>
            </div>
            
            <div className="text-center text-sm text-muted-foreground mt-4">
              <p>
                Выбранный курс: <span className="font-medium">{quizResults[resultType].title}</span>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
