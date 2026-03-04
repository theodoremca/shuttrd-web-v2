import { useRouter } from "next/router";
import HostQuoteDetailsScreen from "@/screens/host/manage-bookings/quote-details";
import HostLayout from "@/components/layouts/host-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const HostQuotePage: NextPageWithLayout = () => {
  const router = useRouter();
  const { quoteId } = router.query;

  if (!quoteId) return null;

  return <HostQuoteDetailsScreen quoteId={quoteId as string} />;
};

HostQuotePage.getLayout = (page) => <HostLayout>{page}</HostLayout>;

export default HostQuotePage;
