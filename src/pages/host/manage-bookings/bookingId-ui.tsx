import HostBookingUiScreen from "@/screens/host/manage-bookings/booking-details";
import HostLayout from "@/components/layouts/host-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const BookingIdUiPage: NextPageWithLayout = () => {
  return <HostBookingUiScreen bookingId="ui-demo" />;
};

BookingIdUiPage.getLayout = (page) => <HostLayout>{page}</HostLayout>;

export default BookingIdUiPage;
