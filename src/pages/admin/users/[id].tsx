import { useRouter } from "next/router";
import UserDetailsScreen from "@/screens/admin/users/user-details";
import AdminLayout from "@/components/layouts/admin-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const UserDetailsPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return null;

  return <UserDetailsScreen userId={id as string} />;
};

UserDetailsPage.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default UserDetailsPage;
