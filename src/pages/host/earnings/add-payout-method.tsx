import AddPayoutMethodScreen from "@/screens/host/earnings/add-payout-method";
import HostLayout from "@/components/layouts/host-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const AddPayoutMethodPage: NextPageWithLayout = () => {
  return <AddPayoutMethodScreen />;
};

AddPayoutMethodPage.getLayout = (page) => <HostLayout>{page}</HostLayout>;

export default AddPayoutMethodPage;
