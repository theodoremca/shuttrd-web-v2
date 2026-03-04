import CmsMediaScreen from "@/screens/admin/cms/media";
import AdminLayout from "@/components/layouts/admin-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const CmsMediaPage: NextPageWithLayout = () => {
  return <CmsMediaScreen />;
};

CmsMediaPage.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default CmsMediaPage;
