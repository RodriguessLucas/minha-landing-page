import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false })],
  site: "https://rodriguesslucas.com",
  output: "static",
  image: {
    // screenshots são pequenas (≤393px); 2x já é folgado
    responsiveStyles: true,
  },
});
