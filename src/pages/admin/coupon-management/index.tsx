import CouponManagementScreen from "@/screens/admin/coupon-management";
import AdminLayout from "@/components/layouts/admin-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const CouponManagementPage: NextPageWithLayout = () => {
  return <CouponManagementScreen />;
};

CouponManagementPage.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default CouponManagementPage;
