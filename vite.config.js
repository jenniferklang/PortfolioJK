import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";
// import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      manifest: {
        background_color: "grey",
        display: "standalone",
        icons: [
          {
            purpose: "any",
            sizes: "192x192",
            src: "web-coding.png",
            type: "image/png",
          },
          {
            purpose: "maskable",
            sizes: "192x192",
            src: "web-coding.png",
            type: "image/png",
          },
          {
            purpose: "any",
            sizes: "512x512",
            src: "web-coding.png",
            type: "image/png",
          },
          {
            purpose: "maskable",
            sizes: "512x512",
            src: "web-coding.png",
            type: "image/png",
          },
        ],
        name: "Portfolio",
        short_name: "J.K Portfolio",
        start_url: ".",
        theme_color: "white",
      },
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["assets/**", "index.html", "manifest.webmanifest"],
      },
    }),
    react(),
    // vue()
  ],
});
