import TermsOfServiceScreen from "@/screens/legal/terms-of-service";
import MainLayout from "@/components/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const TermsOfServicePage: NextPageWithLayout = () => {
  return <TermsOfServiceScreen />;
};

TermsOfServicePage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default TermsOfServicePage;
