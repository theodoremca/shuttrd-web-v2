import { useRouter } from "next/router";
import HostPreviewScreen from "@/screens/host/preview";
import HostLayout from "@/components/layouts/host-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const HostPreviewPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { spaceId } = router.query;

  if (!spaceId) return null;

  return <HostPreviewScreen spaceId={spaceId as string} />;
};

HostPreviewPage.getLayout = (page) => <HostLayout>{page}</HostLayout>;

export default HostPreviewPage;
