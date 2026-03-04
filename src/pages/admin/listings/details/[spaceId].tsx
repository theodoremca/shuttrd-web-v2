import { useRouter } from "next/router";
import ListingDetailsScreen from "@/screens/admin/listings/listing-details";
import AdminLayout from "@/components/layouts/admin-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const ListingDetailsPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { spaceId } = router.query;

  if (!spaceId) return null;

  return <ListingDetailsScreen spaceId={spaceId as string} />;
};

ListingDetailsPage.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default ListingDetailsPage;
