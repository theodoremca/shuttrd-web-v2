import BookingListScreen from "@/screens/booking-management/booking-list";
import MainLayout from "@/components/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const ManageBookingsPage: NextPageWithLayout = () => {
  return <BookingListScreen />;
};

ManageBookingsPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default ManageBookingsPage;
