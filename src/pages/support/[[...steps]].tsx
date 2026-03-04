import { useRouter } from "next/router";
import SupportScreen from "@/screens/support";
import MainLayout from "@/components/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const SupportPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { steps } = router.query;

  return <SupportScreen steps={steps as string[] | undefined} />;
};

SupportPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default SupportPage;
