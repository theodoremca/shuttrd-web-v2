import ComingSoonScreen from "@/screens/coming-soon";
import MainLayout from "@/components/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const ComingSoonPage: NextPageWithLayout = () => {
  return <ComingSoonScreen />;
};

ComingSoonPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default ComingSoonPage;
