import PayoutScreen from "@/screens/admin/payout";
import AdminLayout from "@/components/layouts/admin-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const PayoutPage: NextPageWithLayout = () => {
  return <PayoutScreen />;
};

PayoutPage.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default PayoutPage;
