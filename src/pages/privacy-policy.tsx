import PrivacyPolicyScreen from "@/screens/legal/privacy-policy";
import MainLayout from "@/components/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const PrivacyPolicyPage: NextPageWithLayout = () => {
  return <PrivacyPolicyScreen />;
};

PrivacyPolicyPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default PrivacyPolicyPage;
