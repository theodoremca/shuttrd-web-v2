import AdminBookingScreen from "@/screens/admin/booking";
import AdminLayout from "@/components/layouts/admin-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const AdminBookingPage: NextPageWithLayout = () => {
  return <AdminBookingScreen />;
};

AdminBookingPage.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default AdminBookingPage;
