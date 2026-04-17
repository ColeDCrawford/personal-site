import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://colecrawford.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
