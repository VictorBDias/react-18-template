import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), reactRefresh()],
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
