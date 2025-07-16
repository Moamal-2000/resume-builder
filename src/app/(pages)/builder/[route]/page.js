import { BUILDER_PAGES } from "@/data/builderPages";
import { notFound } from "next/navigation";

async function RoutesPage({ params }) {
  const { route } = await params;
  const page = BUILDER_PAGES?.[route]?.();

  if (!page) notFound();

  return page;
}

export default RoutesPage;
