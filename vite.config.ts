import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react'

export default defineConfig({
    root: process.cwd(),
    build:{//この部分を追加
      outDir:"./build"
    },
    server:{
      host:'0.0.0.0'
    },
    plugins: [
        laravel({
            input: ['resources/js/app.tsx'],
            refresh: true,
        }),
        react(),
    ],
});
