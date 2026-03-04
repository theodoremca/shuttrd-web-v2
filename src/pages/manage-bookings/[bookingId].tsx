import { useRouter } from "next/router";
import BookingDetailsScreen from "@/screens/booking-management/booking-details";
import MainLayout from "@/components/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const BookingDetailsPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { bookingId } = router.query;

  if (!bookingId) return null;

  return <BookingDetailsScreen bookingId={bookingId as string} />;
};

BookingDetailsPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default BookingDetailsPage;
