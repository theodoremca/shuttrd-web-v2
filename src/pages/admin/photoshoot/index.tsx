import PhotoshootScreen from "@/screens/admin/photoshoot";
import AdminLayout from "@/components/layouts/admin-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const PhotoshootPage: NextPageWithLayout = () => {
  return <PhotoshootScreen />;
};

PhotoshootPage.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default PhotoshootPage;
