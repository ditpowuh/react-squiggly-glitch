import {defineConfig} from "vite";
import path from "path";
import {fileURLToPath} from "node:url";
import {glob} from "glob";

import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin({
      jsAssetsFilterFunction: (outputChunk) => {
        return outputChunk.fileName === "main.js";
      }
    }),
    dts({
      insertTypesEntry: true,
      include: ["lib"],
      tsconfigPath: path.resolve(__dirname, "tsconfig.lib.json")
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/main.ts"),
      formats: ["es"]
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      input: Object.fromEntries(glob.sync("lib/**/*.{ts,tsx}", {
        ignore: ["lib/**/*.d.ts"],
      }).map(file => [
        path.relative("lib", file.slice(0, file.length - path.extname(file).length)),
        fileURLToPath(new URL(file, import.meta.url))
      ])),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js"
      }
    },
    copyPublicDir: false
  }
});
