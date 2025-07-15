import { BUILDER_PAGES } from "@/data/builderPages";

async function RoutesPage({ params }) {
  const { route } = await params;
  return BUILDER_PAGES[route]();
}

export default RoutesPage;
