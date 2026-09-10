import { useEffect } from "react";

const SITE_NAME = "TechworkSupport";
const SITE_URL = "https://techworksupport.com";

interface PageMetaOptions {
  title: string;
  description: string;
  path: string;
}

function setMetaTag(name: string, content: string, attr: "name" | "property" = "name") {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonical(href: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

export function usePageMeta({ title, description, path }: PageMetaOptions) {
  useEffect(() => {
    const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
    const url = `${SITE_URL}${path === "/" ? "/" : path}`;
    const keywordText = `${SITE_NAME}, Work Support, practical technical support, project guidance, training, professional growth, Pentaho, DBA, Middleware, Salesforce, Apache Hop, AWS Data Engineer, Azure Data Engineering, Redshift, Snowflake`;

    document.title = fullTitle;
    setMetaTag("description", description);
    setMetaTag("keywords", keywordText);
    setCanonical(url);

    setMetaTag("og:title", fullTitle, "property");
    setMetaTag("og:description", description, "property");
    setMetaTag("og:url", url, "property");
    setMetaTag("og:type", "website", "property");
    setMetaTag("og:site_name", SITE_NAME, "property");

    setMetaTag("twitter:title", fullTitle);
    setMetaTag("twitter:description", description);
  }, [title, description, path]);
}
