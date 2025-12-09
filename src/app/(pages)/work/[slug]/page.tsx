import ClientCaseStudy from "@/app/Components/casestudy/ClientCaseStudy";
import { workMetadata } from "@/app/Static/workMetadata";
import { Metadata } from "next";

// Generate metadata function for server-side rendering
export async function generateMetadata(
  { params }: any
): Promise<Metadata> {
  const pathname = `/work/${params.slug}`;
  const metadata = workMetadata.find(item => item.pathname === pathname);
  if (!metadata) {
    return {
      title: "Work - Case Study | Hexcode",
      description: "Explore our portfolio of successful projects and case studies showcasing our expertise in digital solutions.",
      keywords: ["case study", "portfolio", "Hexcode", "digital solutions"],
      openGraph: {
        title: "Work - Case Study | Hexcode",
        description: "Explore our portfolio of successful projects and case studies showcasing our expertise in digital solutions.",
        images: ["/Logo.svg"]
      }
    };
  }

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.openGraph.title,
      description: metadata.openGraph.description,
      images: metadata.openGraph.images,
      type: "website",
      siteName: "Hexcode",
      url: pathname
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: metadata.openGraph.images
    },
    alternates: {
      canonical: pathname
    }
  };
}


const Page = ({ params }: any) => {
  return (
    <>
      <ClientCaseStudy slug={params.slug} />
    </>
  );
};

export default Page;
