import { Articles } from "@/interfaces/article";

export const parseImageFromHtml = (article: Articles | undefined) => {
    const parser = new DOMParser();
    if (article && article.content) {
      const document = parser.parseFromString(article.content, "text/html");
      const imageSrc = document.getElementsByTagName("img").item(0)?.src;
      return imageSrc;
    }
  };