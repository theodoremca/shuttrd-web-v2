import SubscriptionScreen from "@/screens/subscription";
import MainLayout from "@/components/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const SubscriptionPage: NextPageWithLayout = () => {
  return <SubscriptionScreen />;
};

SubscriptionPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default SubscriptionPage;
