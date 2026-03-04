import HostDashboardScreen from "@/screens/host/dashboard";
import HostLayout from "@/components/layouts/host-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const HostDashboardPage: NextPageWithLayout = () => {
  return <HostDashboardScreen />;
};

HostDashboardPage.getLayout = (page) => <HostLayout>{page}</HostLayout>;

export default HostDashboardPage;
