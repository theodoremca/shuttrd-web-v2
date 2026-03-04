import UiListingsScreen from "@/screens/admin/ui-listings";
import AdminLayout from "@/components/layouts/admin-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const UiListingsPage: NextPageWithLayout = () => {
  return <UiListingsScreen />;
};

UiListingsPage.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default UiListingsPage;
