import { useRouter } from "next/router";
import UpsertListingScreen from "@/screens/host/upsert-listing";
import HostLayout from "@/components/layouts/host-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const SpaceWizardPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { step } = router.query;

  return <UpsertListingScreen step={step as string[] | undefined} />;
};

SpaceWizardPage.getLayout = (page) => <HostLayout>{page}</HostLayout>;

export default SpaceWizardPage;
