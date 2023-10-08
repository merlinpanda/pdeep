import SideNav from "@/components/SideNav";
import routes from "./routes";
import { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: PageProps): Metadata {
  const route = routes.find((r) => r.slug === params.slug);
  return { title: route?.title };
}

export default function DocumentPage({ params }: PageProps) {
  const route = routes.find((r) => r.slug === params.slug);

  return (
    <>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <SideNav />
        <div className="lg:pl-[19.5rem]">{route?.page}</div>
      </div>
    </>
  );
}
