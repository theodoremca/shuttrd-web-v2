import MessagesScreen from "@/screens/messages";
import MainLayout from "@/components/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const MessagesPage: NextPageWithLayout = () => {
  return <MessagesScreen />;
};

MessagesPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default MessagesPage;
