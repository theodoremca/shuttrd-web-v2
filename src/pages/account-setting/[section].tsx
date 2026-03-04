import { useRouter } from "next/router";
import AccountSectionScreen from "@/screens/account-setting";
import MainLayout from "@/components/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const AccountSectionPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { section } = router.query;

  if (!section) return null;

  return <AccountSectionScreen section={section as string} />;
};

AccountSectionPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default AccountSectionPage;
