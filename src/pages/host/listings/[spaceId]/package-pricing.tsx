import { useRouter } from "next/router";
import PackagePricingScreen from "@/screens/host/listings/package-pricing";
import HostLayout from "@/components/layouts/host-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const PackagePricingPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { spaceId } = router.query;

  if (!spaceId) return null;

  return <PackagePricingScreen spaceId={spaceId as string} />;
};

PackagePricingPage.getLayout = (page) => <HostLayout>{page}</HostLayout>;

export default PackagePricingPage;
