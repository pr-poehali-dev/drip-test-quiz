export interface Question {
  id: number;
  text: string;
  options: string[];
}

export interface QuizResult {
  type: 'detox' | 'weight' | 'energy';
  title: string;
  description: string;
  image: string;
  analysis: string;
}

export type AnswerMap = Record<number, number | null>;

export interface UserInfo {
  firstName: string;
  middleName: string;
  phone: string;
}
