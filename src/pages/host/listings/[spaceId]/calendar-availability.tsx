import { useRouter } from "next/router";
import CalendarAvailabilityScreen from "@/screens/host/listings/calendar-availability";
import HostLayout from "@/components/layouts/host-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const CalendarAvailabilityPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { spaceId } = router.query;

  if (!spaceId) return null;

  return <CalendarAvailabilityScreen spaceId={spaceId as string} />;
};

CalendarAvailabilityPage.getLayout = (page) => <HostLayout>{page}</HostLayout>;

export default CalendarAvailabilityPage;
