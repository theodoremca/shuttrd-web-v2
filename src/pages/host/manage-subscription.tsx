import ManageSubscriptionScreen from "@/screens/host/manage-subscription";
import HostLayout from "@/components/layouts/host-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const ManageSubscriptionPage: NextPageWithLayout = () => {
  return <ManageSubscriptionScreen />;
};

ManageSubscriptionPage.getLayout = (page) => <HostLayout>{page}</HostLayout>;

export default ManageSubscriptionPage;
