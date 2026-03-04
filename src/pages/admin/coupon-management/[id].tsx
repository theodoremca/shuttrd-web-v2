import { useRouter } from "next/router";
import CouponDetailsScreen from "@/screens/admin/coupon-management/coupon-details";
import AdminLayout from "@/components/layouts/admin-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const CouponDetailsPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return null;

  return <CouponDetailsScreen couponId={id as string} />;
};

CouponDetailsPage.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default CouponDetailsPage;
