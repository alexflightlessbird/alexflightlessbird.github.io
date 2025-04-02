import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/memory-game/", // Match your repo subfolder
  build: {
    outDir: "dist",       // Ensure build outputs to /dist
    emptyOutDir: true,    // Clear /dist before build
  }
});
