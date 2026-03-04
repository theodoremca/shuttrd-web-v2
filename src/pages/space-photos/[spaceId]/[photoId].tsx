import { useRouter } from "next/router";
import PhotoViewScreen from "@/screens/space-photos/photo-view";
import MainLayout from "@/components/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const PhotoViewPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { spaceId, photoId } = router.query;

  if (!spaceId || !photoId) return null;

  return <PhotoViewScreen spaceId={spaceId as string} photoId={photoId as string} />;
};

PhotoViewPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default PhotoViewPage;
