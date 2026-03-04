import HomeScreen from "@/screens/home";
import MainLayout from "@/components/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const HomePage: NextPageWithLayout = () => {
  return <HomeScreen />;
};

HomePage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default HomePage;
