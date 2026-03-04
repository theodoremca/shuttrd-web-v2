import { useRouter } from "next/router";
import QuoteDetailsScreen from "@/screens/quote-details";
import MainLayout from "@/components/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const QuoteDetailsPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { quoteId } = router.query;

  if (!quoteId) return null;

  return <QuoteDetailsScreen quoteId={quoteId as string} />;
};

QuoteDetailsPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default QuoteDetailsPage;
