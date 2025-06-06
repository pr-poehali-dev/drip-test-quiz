import { Question, QuizResult } from "@/types/quiz";

export const quizQuestions: Question[] = [
  {
    id: 1,
    text: "Как вы оцениваете свое общее самочувствие?",
    options: [
      "Плохо, чувствую усталость",
      "Нормально, немного не хватает энергии",
      "Хорошо, чувствую себя отлично",
    ],
  },
  {
    id: 2,
    text: "Как часто вы испытываете стресс?",
    options: [
      "Часто, это влияет на здоровье",
      "Иногда, но справляюсь",
      "Редко, стресс меня не беспокоит",
    ],
  },
  {
    id: 3,
    text: "Как вы оцениваете свой уровень физической активности?",
    options: [
      "Низкий, почти не занимаюсь спортом",
      "Средний, занимаюсь время от времени",
      "Высокий, занимаюсь регулярно",
    ],
  },
  {
    id: 4,
    text: "Как вы относитесь к своему питанию?",
    options: [
      "Неправильное, много фастфуда",
      "Умеренное, стараюсь следить за рационом",
      "Здоровое, питаюсь правильно",
    ],
  },
  {
    id: 5,
    text: "Как часто вы чувствуете усталость?",
    options: [
      "Часто, не хватает сил",
      "Иногда, но быстро восстанавливаюсь",
      "Редко, всегда полон энергии",
    ],
  },
  {
    id: 6,
    text: "Как вы оцениваете качество своего сна?",
    options: [
      "Плохое, часто просыпаюсь",
      "Удовлетворительное, иногда не хватает сна",
      "Хорошее, сплю спокойно",
    ],
  },
  {
    id: 7,
    text: "Как вы относитесь к диетам?",
    options: [
      "Неэффективные, пробовал много, но не помогли",
      "Иногда пробую, но не всегда удачно",
      "Следую диете, которая мне подходит",
    ],
  },
  {
    id: 8,
    text: "Как вы оцениваете свою мотивацию к здоровому образу жизни?",
    options: [
      "Низкая, сложно себя заставить",
      "Средняя, иногда хватает сил",
      "Высокая, всегда стремлюсь к лучшему",
    ],
  },
  {
    id: 9,
    text: "Как вы относитесь к детокс-программам?",
    options: [
      "За, считаю это полезным",
      "Нейтрально, не пробовал",
      "Против, не верю в их эффективность",
    ],
  },
  {
    id: 10,
    text: "Как вы оцениваете свое эмоциональное состояние?",
    options: [
      "Часто чувствую тревогу или подавленность",
      "Иногда испытываю негативные эмоции",
      "В основном чувствую себя хорошо",
    ],
  },
  {
    id: 11,
    text: "Как вы относитесь к дополнительным витаминам и минералам?",
    options: [
      "Принимаю регулярно для поддержания здоровья",
      "Иногда принимаю, но не всегда",
      "Не принимаю, считаю это ненужным",
    ],
  },
];

export const quizResults: Record<string, QuizResult> = {
  detox: {
    type: "detox",
    title: "Капельница Детокс",
    description: "Вам рекомендована капельница «Детокс». Этот курс поможет вашему организму избавиться от токсинов, восстановить функцию печени и улучшить общее самочувствие. Идеально подходит для тех, кто испытывает хроническую усталость, подвержен стрессу и имеет неправильное питание.",
    image: "https://images.unsplash.com/photo-1579684288361-5c1a2955d0bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    analysis: "Анализы для консультации: АЛТ, АСТ, гамма-ГТП, креатинин, лактат, общий белок, СРБ-ультра, билирубин прямой и непрямой."
  },
  weight: {
    type: "weight",
    title: "Капельница Снижение Веса",
    description: "Вам рекомендована капельница «Снижение Веса». Эта программа поможет ускорить метаболизм, уменьшить чувство голода и поддержать ваши усилия по снижению веса. Включает комплекс витаминов и минералов, способствующих сжиганию жира и повышению энергии во время диеты.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    analysis: "Анализы для консультации: ОАК, глюкоза, АЛТ, АСТ, Липидный профиль."
  },
  energy: {
    type: "energy",
    title: "Капельница Энергия",
    description: "Вам рекомендована капельница «Энергия». Этот курс разработан для повышения жизненного тонуса, борьбы с хронической усталостью и восстановления сил. Содержит оптимальное сочетание витаминов группы B, аминокислот и микроэлементов, которые заряжают энергией и улучшают когнитивные функции.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    analysis: "Анализы для консультации: ОАК, ферритин, В12, лактат, СРБ-ультра, КНТЖ, ОЖСС, общий белок."
  },
};
