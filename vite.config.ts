import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/pastebin.com": {
        target: "https://pastebin.com/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pastebin\.com/, ""),
      },
    },
  },
});
