import AdminPreferenceScreen from "@/screens/admin/admin-preference";
import AdminLayout from "@/components/layouts/admin-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const AdminPreferencePage: NextPageWithLayout = () => {
  return <AdminPreferenceScreen />;
};

AdminPreferencePage.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default AdminPreferencePage;
