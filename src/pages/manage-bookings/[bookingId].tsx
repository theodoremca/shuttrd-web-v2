import { useRouter } from "next/router";
import BookingDetailsScreen from "@/screens/booking-management/booking-details";

export default function BookingDetailsPage() {
  const router = useRouter();
  const { bookingId } = router.query;

  if (!bookingId) return null;

  return <BookingDetailsScreen bookingId={bookingId as string} />;
}
