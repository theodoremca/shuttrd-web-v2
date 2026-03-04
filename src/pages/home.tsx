import HomeDuplicateScreen from "@/screens/home";
import MainLayout from "@/components/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const HomeDuplicatePage: NextPageWithLayout = () => {
  return <HomeDuplicateScreen />;
};

HomeDuplicatePage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default HomeDuplicatePage;
