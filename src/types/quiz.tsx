export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface UserAnswer {
  questionId: number;
  selectedOption: number | null;
  isCorrect: boolean;
}

export type QuizStatus = 'setup' | 'active' | 'completed';