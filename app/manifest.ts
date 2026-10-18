import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AstraFloww — Digital Marketing & Creative Agency",
    short_name: "AstraFloww",
    description:
      "We don't just market. We amplify. High-performance web development, AI automation, SEO, and brand systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4F8FC",
    theme_color: "#7C6DF6",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
    ],
  };
}
