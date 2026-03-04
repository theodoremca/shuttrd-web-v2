import AdminDashboardScreen from "@/screens/admin/dashboard";
import AdminLayout from "@/components/layouts/admin-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const AdminPage: NextPageWithLayout = () => {
  return <AdminDashboardScreen />;
};

AdminPage.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default AdminPage;
