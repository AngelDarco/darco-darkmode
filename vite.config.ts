import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: "index",
      fileName: "index",
      entry: resolve(__dirname, "src/components/Darkmode.tsx"),
      formats: ["es", "umd", "cjs"],
    },
    minify: true,
    emptyOutDir: true,

    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        dir: "dist",
        exports: "named",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
    dts({ rollupTypes: true, insertTypesEntry: true, outDir: "dist/@types" }),
  ],
});
