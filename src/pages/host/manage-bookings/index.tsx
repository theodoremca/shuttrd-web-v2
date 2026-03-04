import HostManageBookingsScreen from "@/screens/host/manage-bookings";
import HostLayout from "@/components/layouts/host-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const HostManageBookingsPage: NextPageWithLayout = () => {
  return <HostManageBookingsScreen />;
};

HostManageBookingsPage.getLayout = (page) => <HostLayout>{page}</HostLayout>;

export default HostManageBookingsPage;
