import { useEffect } from "react";
import { site } from "../data/site";

interface SeoProps {
  title: string;
  description: string;
  path: string;
}

function setMeta(selector: string, attr: "content" | "href", value: string) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

export function Seo({ title, description, path }: SeoProps) {
  useEffect(() => {
    const url = `${site.url}${path}`;
    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
  }, [title, description, path]);
  return null;
}
