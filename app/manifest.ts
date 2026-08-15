import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AstraFloww — Digital Marketing & Creative Agency",
    short_name: "AstraFloww",
    description:
      "We don't just market. We amplify. High-performance web development, AI automation, SEO, and brand systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#F2F2F0",
    theme_color: "#F0299B",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
    ],
  };
}
