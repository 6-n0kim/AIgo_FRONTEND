/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1E1E2E',
        surface: '#2B2B3B',
        primary: '#6C5CE7',
        secondary: '#A29BFE',
        accent: '#00CEC9',
        danger: '#FF7675',
      },
      fontFamily: {
        // 국문 UI
        sans: ['Pretendard', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        // 영문/코드/알고리즘 예시
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        // 네온 느낌(보라 계열)
        neon: '0 0 24px rgba(108, 92, 231, 0.45)',
      },
      borderRadius: {
        // 카드/섹션 둥글게
        card: '16px',
      },
    },
  },
  plugins: [],
};
