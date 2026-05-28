import {defineConfig} from "vite";
import path from "path";

import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

import checker from "vite-plugin-checker";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ["lib"],
      tsconfigPath: path.resolve(__dirname, "tsconfig.lib.json")
    }),
    checker({
      typescript: true,
      enableBuild: false,
      overlay: {
        initialIsOpen: false
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/main.ts"),
      formats: ["es"]
    },
    rollupOptions: {
      external: ["react", "react-dom"]
    },
    copyPublicDir: false
  }
});
