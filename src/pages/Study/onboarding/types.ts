export type Goal = "llm_app" | "ml_engineer" | "dl_research" | "data_science";

export type TopicSlug =
  | "ml"
  | "dl"
  | "nlp"
  | "llm"
  | "mlops"
  | "llmops"
  | "cv"
  | "rl";

export type Topic = {
  slug: TopicSlug;
  name: string;
  korName: string;
  summary: string;
};

export type ExperienceKey =
  | "made_api"
  | "trained_model"
  | "built_rag"
  | "fine_tune"
  | "used_pytorch"
  | "kaggle_dacon"
  | "deployed"
  | "monitoring";

export type ExperienceItem = {
  key: ExperienceKey;
  label: string;
  desc?: string;
};

export type SelfRating = 0 | 1 | 2 | 3; // 0 모름 / 1 용어만 / 2 구현가능 / 3 설명가능

export type QuizChoice = { id: string; text: string; isCorrect: boolean };

export type QuizQuestion = {
  id: string;
  topic: TopicSlug;
  prompt: string;
  choices: QuizChoice[];
  explanation: string;
};

export type QuizAnswer = {
  questionId: string;
  choiceId: string;
};

export type WizardState = {
  goal: Goal | null;
  experiences: ExperienceKey[];
  selfRatings: Record<TopicSlug, SelfRating>;
  quizAnswers: Record<string, string>; // questionId -> choiceId
};

export type GoalOption = {
  id: Goal;
  label: string;
  desc: string;
};
