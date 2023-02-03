import type { CollectionEntry } from "astro:content";

type DisplayName = "JavaScript" | "TypeScript" | "React" | "Markdown" | "Web";
type BgColor =
  | "bg-javascript"
  | "bg-typescript"
  | "bg-react"
  | "bg-markdown"
  | "bg-web";

export const getCategoryData = (
  category: CollectionEntry<"posts">["data"]["category"]
): {
  displayName: DisplayName;
  bgColor: BgColor;
} => {
  let displayName: DisplayName;
  let bgColor: BgColor;

  switch (category) {
    case "javascript":
      displayName = "JavaScript";
      bgColor = "bg-javascript";
      break;
    case "typescript":
      displayName = "TypeScript";
      bgColor = "bg-typescript";
      break;
    case "react":
      displayName = "React";
      bgColor = "bg-react";
      break;
    case "markdown":
      displayName = "Markdown";
      bgColor = "bg-markdown";
      break;
    case "web":
      displayName = "Web";
      bgColor = "bg-web";
      break;
  }

  return { displayName, bgColor };
};

export const getSortedPostsByDate = (
  posts: CollectionEntry<"posts">[]
): CollectionEntry<"posts">[] => {
  const sortedPostsByDate = posts.sort(
    (a, b) =>
      Math.floor(new Date(b.data.date).getTime() / 1000) -
      Math.floor(new Date(a.data.date).getTime() / 1000)
  );

  return sortedPostsByDate;
};
