import type { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
}

/** Gera metadados canónicos, OpenGraph e Twitter consistentes ao partilhar links específicos. */
export function buildPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const fullTitle = `${title} | ${SITE_CONFIG.brandName} Moçambique`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "website",
      locale: "pt_MZ",
      siteName: SITE_CONFIG.brandName,
      title: fullTitle,
      description,
      url: canonicalPath,
      images: ["/brand/icon-kk.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/brand/icon-kk.png"],
    },
  };
}
