import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

// RAILWAY-PROOF CONFIG:
// - NO custom root: Vite defaults to process.cwd() = /app on Railway
// - index.html lives at project root (same level as this file)
// - client/src/main.tsx is referenced from index.html as /client/src/main.tsx
// - This eliminates ALL path resolution issues regardless of Node version

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve("client", "src"),
      "@shared": path.resolve("shared"),
      "@assets": path.resolve("attached_assets"),
    },
  },
  build: {
    outDir: path.resolve("dist", "public"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: false,
    },
  },
});
