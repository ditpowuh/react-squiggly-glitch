import {defineConfig} from "vite";
import path from "path";
import {fileURLToPath} from "node:url";
import {glob} from "glob";

import react, {reactCompilerPreset} from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import dts from "vite-plugin-dts";
import preserveUseClientDirective from "rollup-plugin-preserve-use-client";

import type {Plugin} from "vite";

function fixUseClientDirective(): Plugin {
  return {
    name: "fix-use-client-directive",
    enforce: "post",
    generateBundle(_options, bundle) {
      for (const chunk of Object.values(bundle)) {
        if (chunk.type !== "chunk" || !/['"]use client['"]/.test(chunk.code)) {
          continue;
        }

        chunk.code = chunk.code.replace(/['"]use client['"];?\s*\n?/g, "");
        chunk.code = `"use client";\n${chunk.code}`;
      }
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset({
        target: "18"
      })]
    }),
    cssInjectedByJsPlugin({
      jsAssetsFilterFunction: (outputChunk) => {
        return outputChunk.fileName === "main.js";
      }
    }),
    dts({
      insertTypesEntry: true,
      include: ["lib"],
      tsconfigPath: path.resolve(__dirname, "tsconfig.lib.json")
    }),
    preserveUseClientDirective(),
    fixUseClientDirective()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/main.ts"),
      formats: ["es"]
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react-compiler-runtime",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
      input: Object.fromEntries(glob.sync("lib/**/*.{ts,tsx}", {
        ignore: ["lib/**/*.d.ts"],
      }).map(file => [
        path.relative("lib", file.slice(0, file.length - path.extname(file).length)),
        fileURLToPath(new URL(file, import.meta.url))
      ])),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      }
    },
    copyPublicDir: false
  }
});
