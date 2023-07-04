import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.js',
    next: 'src/presets/next.js',
    react: 'src/presets/react.js',
  },
  format: ['cjs', 'esm'],
  splitting: false,
  sourcemap: false,
  clean: true,
});
