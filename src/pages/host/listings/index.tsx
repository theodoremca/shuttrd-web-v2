import HostListingsScreen from "@/screens/host/listings";
import HostLayout from "@/components/layouts/host-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const HostListingsPage: NextPageWithLayout = () => {
  return <HostListingsScreen />;
};

HostListingsPage.getLayout = (page) => <HostLayout>{page}</HostLayout>;

export default HostListingsPage;
