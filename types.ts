
export enum AppState {
  GATEWAY = 'GATEWAY',
  QUIZ = 'QUIZ',
  ANALYZING = 'ANALYZING',
  RESULTS = 'RESULTS',
  LANDING = 'LANDING'
}

export interface QuizAnswer {
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  category?: string;
}
