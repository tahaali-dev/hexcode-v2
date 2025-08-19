import { useEffect } from 'react';
import { workMetadata, WorkMetadata } from '../Static/workMetadata';

export const useMetadata = (pathname: string) => {
 useEffect(() => {
  const metadata = workMetadata.find(item => item.pathname === pathname);

  if (metadata) {
   updateMetadata(metadata);
  }
 }, [pathname]);
};

const updateMetadata = (metadata: WorkMetadata) => {
 // Update document title
 document.title = metadata.title;

 // Update meta description
 updateMetaTag('name', 'description', metadata.description);

 // Update meta keywords
 updateMetaTag('name', 'keywords', metadata.keywords.join(', '));

 // Update Open Graph tags
 updateMetaTag('property', 'og:title', metadata.openGraph.title);
 updateMetaTag('property', 'og:description', metadata.openGraph.description);
 updateMetaTag('property', 'og:image', metadata.openGraph.images[0]);

 // Update Twitter Card tags
 updateMetaTag('name', 'twitter:title', metadata.title);
 updateMetaTag('name', 'twitter:description', metadata.description);
 updateMetaTag('name', 'twitter:image', metadata.openGraph.images[0]);
};

const updateMetaTag = (attribute: string, value: string, content: string) => {
 let metaTag = document.querySelector(`meta[${attribute}="${value}"]`);

 if (!metaTag) {
  metaTag = document.createElement('meta');
  metaTag.setAttribute(attribute, value);
  document.head.appendChild(metaTag);
 }

 metaTag.setAttribute('content', content);
};
