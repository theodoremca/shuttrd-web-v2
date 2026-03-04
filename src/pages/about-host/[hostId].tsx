import { useRouter } from "next/router";
import AboutHostScreen from "@/screens/about-host";
import MainLayout from "@/components/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const AboutHostPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { hostId } = router.query;

  if (!hostId) return null;

  return <AboutHostScreen hostId={hostId as string} />;
};

AboutHostPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default AboutHostPage;
