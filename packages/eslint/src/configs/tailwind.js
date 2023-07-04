import tailwind from 'eslint-plugin-tailwind';

export const tailwindConfig = {
  plugins: { tailwind },
  rules: {
    ...tailwind.configs.recommended.rules,
  },
  // メディアクエリごとにグループ化するため
  settings: { tailwindcss: { groupByResponsive: true } },
};
