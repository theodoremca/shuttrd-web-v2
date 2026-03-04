import { useRouter } from "next/router";
import QuotePdfScreen from "@/screens/quote-details/pdf";
import PdfLayout from "@/components/layouts/pdf-layout";
import type { NextPageWithLayout } from "@/pages/_app";
import type { ReactElement } from "react";

const QuotePdfPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { quoteId } = router.query;

  if (!quoteId) return null;

  return <QuotePdfScreen quoteId={quoteId as string} />;
};

QuotePdfPage.getLayout = (page: ReactElement) => <PdfLayout>{page}</PdfLayout>;

export default QuotePdfPage;
