import { useRouter } from "next/router";
import PhotoshootDetailsScreen from "@/screens/admin/photoshoot/photoshoot-details";
import AdminLayout from "@/components/layouts/admin-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const PhotoshootDetailsPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { spaceId } = router.query;

  if (!spaceId) return null;

  return <PhotoshootDetailsScreen spaceId={spaceId as string} />;
};

PhotoshootDetailsPage.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default PhotoshootDetailsPage;
