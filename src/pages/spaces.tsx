import SpacesScreen from "@/screens/spaces";
import MainLayout from "@/components/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const SpacesPage: NextPageWithLayout = () => {
  return <SpacesScreen />;
};

SpacesPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default SpacesPage;
