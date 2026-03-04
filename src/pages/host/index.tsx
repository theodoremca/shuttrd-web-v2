import HostLandingScreen from "@/screens/host/landing";
import MainLayout from "@/components/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const HostPage: NextPageWithLayout = () => {
  return <HostLandingScreen />;
};

HostPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default HostPage;
