import CmsPagesScreen from "@/screens/admin/cms/pages";
import AdminLayout from "@/components/layouts/admin-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const CmsPagesPage: NextPageWithLayout = () => {
  return <CmsPagesScreen />;
};

CmsPagesPage.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default CmsPagesPage;
