import { configDefaults, defineConfig } from "vitest/config";
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        rewrite: (path) => path.replace('/api', ''),
      }
    }
  },
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
    globals: true,
    environment: "jsdom",
    env: {
        VITEST_URL: "http://localhost:3000",
    },
    exclude: [...configDefaults.exclude],
    setupFiles: ["./vitest-setup.ts"],
    coverage: {
        include: ["src/**/*.{js,ts,svelte}"],
        provider: "v8",
        reporter: ["text", "html"],
    },
    alias: [
        { find: /^svelte$/, replacement: "svelte/internal" },
    ],
  },
})
