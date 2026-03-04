import CmsScreen from "@/screens/admin/cms";
import AdminLayout from "@/components/layouts/admin-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const CmsPage: NextPageWithLayout = () => {
  return <CmsScreen />;
};

CmsPage.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default CmsPage;
