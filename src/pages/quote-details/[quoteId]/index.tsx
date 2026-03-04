import { useRouter } from "next/router";
import QuoteDetailsScreen from "@/screens/quote-details";

export default function QuoteDetailsPage() {
  const router = useRouter();
  const { quoteId } = router.query;

  if (!quoteId) return null;

  return <QuoteDetailsScreen quoteId={quoteId as string} />;
}
