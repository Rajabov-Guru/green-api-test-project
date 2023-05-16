import path from 'path';
import url from 'url';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(dirname, 'src') },
    ],
  },
})
