import { useRouter } from "next/router";
import SpaceDetailsScreen from "@/screens/space-details";
import MainLayout from "@/components/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const SpaceDetailsPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { spaceId } = router.query;

  if (!spaceId) return null;

  return <SpaceDetailsScreen spaceId={spaceId as string} />;
};

SpaceDetailsPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default SpaceDetailsPage;
