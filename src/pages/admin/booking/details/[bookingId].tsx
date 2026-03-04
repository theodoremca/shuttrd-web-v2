import { useRouter } from "next/router";
import AdminBookingDetailsScreen from "@/screens/admin/booking/booking-details";
import AdminLayout from "@/components/layouts/admin-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const AdminBookingDetailsPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { bookingId } = router.query;

  if (!bookingId) return null;

  return <AdminBookingDetailsScreen bookingId={bookingId as string} />;
};

AdminBookingDetailsPage.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default AdminBookingDetailsPage;
