import AccountSettingScreen from "@/screens/account-setting";
import MainLayout from "@/components/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const AccountSettingPage: NextPageWithLayout = () => {
  return <AccountSettingScreen />;
};

AccountSettingPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default AccountSettingPage;
