import AdminListingsScreen from "@/screens/admin/listings";
import AdminLayout from "@/components/layouts/admin-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const AdminListingsPage: NextPageWithLayout = () => {
  return <AdminListingsScreen />;
};

AdminListingsPage.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default AdminListingsPage;
