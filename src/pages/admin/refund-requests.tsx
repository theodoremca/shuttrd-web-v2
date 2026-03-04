import RefundRequestsScreen from "@/screens/admin/refund-requests";
import AdminLayout from "@/components/layouts/admin-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const RefundRequestsPage: NextPageWithLayout = () => {
  return <RefundRequestsScreen />;
};

RefundRequestsPage.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default RefundRequestsPage;
