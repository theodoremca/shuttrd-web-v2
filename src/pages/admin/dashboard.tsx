import AdminDashboardScreen from "@/screens/admin/dashboard";
import AdminLayout from "@/components/layouts/admin-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const AdminDashboardPage: NextPageWithLayout = () => {
  return <AdminDashboardScreen />;
};

AdminDashboardPage.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default AdminDashboardPage;
