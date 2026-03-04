import UsersScreen from "@/screens/admin/users";
import AdminLayout from "@/components/layouts/admin-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const UsersPage: NextPageWithLayout = () => {
  return <UsersScreen />;
};

UsersPage.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default UsersPage;
