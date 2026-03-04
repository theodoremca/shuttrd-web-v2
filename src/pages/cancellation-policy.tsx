import CancellationPolicyScreen from "@/screens/legal/cancellation-policy";
import MainLayout from "@/components/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const CancellationPolicyPage: NextPageWithLayout = () => {
  return <CancellationPolicyScreen />;
};

CancellationPolicyPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default CancellationPolicyPage;
