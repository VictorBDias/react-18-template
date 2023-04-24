import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig, loadEnv } from 'vite';

import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), reactRefresh(), tsconfigPaths()],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: true,
      minify: true,
    },
    define: {
      'process.env': env,
    },
  };
});
