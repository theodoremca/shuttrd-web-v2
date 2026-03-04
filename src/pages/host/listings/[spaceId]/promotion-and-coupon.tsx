import { useRouter } from "next/router";
import PromotionAndCouponScreen from "@/screens/host/listings/promotion-and-coupon";
import HostLayout from "@/components/layouts/host-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const PromotionAndCouponPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { spaceId } = router.query;

  if (!spaceId) return null;

  return <PromotionAndCouponScreen spaceId={spaceId as string} />;
};

PromotionAndCouponPage.getLayout = (page) => <HostLayout>{page}</HostLayout>;

export default PromotionAndCouponPage;
