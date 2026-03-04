import HostEarningsScreen from "@/screens/host/earnings";
import HostLayout from "@/components/layouts/host-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const HostEarningsPage: NextPageWithLayout = () => {
  return <HostEarningsScreen />;
};

HostEarningsPage.getLayout = (page) => <HostLayout>{page}</HostLayout>;

export default HostEarningsPage;
