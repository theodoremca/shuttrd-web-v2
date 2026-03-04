import { useRouter } from "next/router";
import HostBookingDetailsScreen from "@/screens/host/manage-bookings/booking-details";
import HostLayout from "@/components/layouts/host-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const HostBookingDetailsPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { bookingId } = router.query;

  if (!bookingId) return null;

  return <HostBookingDetailsScreen bookingId={bookingId as string} />;
};

HostBookingDetailsPage.getLayout = (page) => <HostLayout>{page}</HostLayout>;

export default HostBookingDetailsPage;
