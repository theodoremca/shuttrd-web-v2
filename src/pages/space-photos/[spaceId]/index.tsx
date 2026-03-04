import { useRouter } from "next/router";
import SpacePhotosScreen from "@/screens/space-photos/gallery";
import MainLayout from "@/components/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const SpacePhotosPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { spaceId } = router.query;

  if (!spaceId) return null;

  return <SpacePhotosScreen spaceId={spaceId as string} />;
};

SpacePhotosPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default SpacePhotosPage;
