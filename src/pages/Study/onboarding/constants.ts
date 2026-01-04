import type {
  Topic,
  ExperienceItem,
  QuizQuestion,
  GoalOption,
} from "./types";

export const TOPICS: Topic[] = [
  {
    slug: "ml",
    korName: "머신러닝",
    name: "Machine Learning",
    summary: "데이터로 규칙을 학습",
  },
  {
    slug: "dl",
    korName: "딥러닝",
    name: "Deep Learning",
    summary: "신경망 기반 학습",
  },
  {
    slug: "nlp",
    korName: "자연어 처리",
    name: "NLP",
    summary: "텍스트/언어 처리",
  },
  {
    slug: "llm",
    korName: "대규모 언어 모델",
    name: "LLM",
    summary: "생성형 언어 모델",
  },
  {
    slug: "mlops",
    korName: "MLOps",
    name: "MLOps",
    summary: "학습-배포-모니터링",
  },
  {
    slug: "llmops",
    korName: "LLMOps",
    name: "LLMOps",
    summary: "LLM 운영(평가/비용/가드레일)",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  { key: "made_api", label: "FastAPI/Node로 API 만들어봄" },
  { key: "trained_model", label: "모델 학습(스케일링/검증 포함) 해봄" },
  { key: "used_pytorch", label: "PyTorch로 학습 루프 구현해봄" },
  { key: "built_rag", label: "RAG(검색+생성) 파이프라인 만들어봄" },
  { key: "fine_tune", label: "파인튜닝(SFT/LoRA) 해봄" },
  { key: "kaggle_dacon", label: "Kaggle/DACON 대회 참여해봄" },
  { key: "deployed", label: "배포(Render/Vercel/AWS 등) 해봄" },
  { key: "monitoring", label: "로그/모니터링(품질/비용) 구축해봄" },
];

export const QUIZ: QuizQuestion[] = [
  {
    id: "q_ml_1",
    topic: "ml",
    prompt: "데이터 누수(Data Leakage)에 해당하는 예시는?",
    choices: [
      {
        id: "a",
        text: "학습/검증 데이터를 무작위로 섞어서 분리했다",
        isCorrect: false,
      },
      {
        id: "b",
        text: "타깃(label)을 계산하는 데 쓰인 정보를 피처에 포함했다",
        isCorrect: true,
      },
      { id: "c", text: "학습률을 낮춰서 학습했다", isCorrect: false },
      { id: "d", text: "정규화를 적용했다", isCorrect: false },
    ],
    explanation:
      "타깃 생성에 쓰인 정보가 피처에 들어가면 평가가 부풀려지는 누수가 발생해요.",
  },
  {
    id: "q_dl_1",
    topic: "dl",
    prompt: "Backpropagation(역전파)의 목적은?",
    choices: [
      { id: "a", text: "입력을 토큰으로 분해한다", isCorrect: false },
      {
        id: "b",
        text: "손실로부터 각 가중치의 기울기(gradient)를 계산한다",
        isCorrect: true,
      },
      { id: "c", text: "데이터를 압축한다", isCorrect: false },
      { id: "d", text: "정답을 생성한다", isCorrect: false },
    ],
    explanation:
      "역전파는 chain rule로 gradient를 계산해 파라미터를 업데이트할 수 있게 해요.",
  },
  {
    id: "q_nlp_1",
    topic: "nlp",
    prompt: "TF-IDF는 무엇을 표현하기 위한 방법인가요?",
    choices: [
      {
        id: "a",
        text: "문서 내 단어 중요도(빈도+희소성) 기반 벡터 표현",
        isCorrect: true,
      },
      { id: "b", text: "이미지의 엣지(경계) 특징", isCorrect: false },
      { id: "c", text: "강화학습의 보상 함수", isCorrect: false },
      { id: "d", text: "GPU 메모리 최적화 기법", isCorrect: false },
    ],
    explanation:
      "TF-IDF는 단어 빈도(TF)와 문서 빈도 역수(IDF)를 곱해 중요도를 반영해요.",
  },
  {
    id: "q_llm_1",
    topic: "llm",
    prompt: "RAG의 핵심 효과로 가장 적절한 것은?",
    choices: [
      { id: "a", text: "모델 파라미터 수를 줄인다", isCorrect: false },
      {
        id: "b",
        text: "외부 지식 검색으로 최신/정확성(근거) 개선을 돕는다",
        isCorrect: true,
      },
      { id: "c", text: "이미지 분할 성능을 높인다", isCorrect: false },
      { id: "d", text: "훈련 시간을 0으로 만든다", isCorrect: false },
    ],
    explanation:
      "RAG는 검색으로 컨텍스트를 넣어 환각을 줄이고 최신/도메인지식을 보완해요.",
  },
  {
    id: "q_mlops_1",
    topic: "mlops",
    prompt:
      "모델 성능이 배포 후 시간에 따라 떨어지는 현상을 주로 뭐라고 하나요?",
    choices: [
      { id: "a", text: "Overfitting", isCorrect: false },
      { id: "b", text: "Data/Concept Drift", isCorrect: true },
      { id: "c", text: "Tokenization", isCorrect: false },
      { id: "d", text: "Quantization", isCorrect: false },
    ],
    explanation:
      "데이터 분포/개념이 변하면서 성능이 떨어지는 것을 드리프트라고 불러요.",
  },
];

export const GOALS: GoalOption[] = [
  {
    id: "llm_app",
    label: "LLM 앱 개발",
    desc: "RAG/Agent 중심으로 서비스 만들기",
  },
  {
    id: "ml_engineer",
    label: "ML 엔지니어",
    desc: "전통 ML + 실험/배포/성능관리",
  },
  {
    id: "dl_research",
    label: "DL 연구",
    desc: "논문 구현/모델 개선/실험 설계",
  },
  {
    id: "data_science",
    label: "데이터 사이언스",
    desc: "분석/지표/모델링으로 인사이트",
  },
];

export const TOTAL_STEPS = 4;
