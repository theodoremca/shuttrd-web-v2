import TransactionsScreen from "@/screens/admin/transactions";
import AdminLayout from "@/components/layouts/admin-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const TransactionsPage: NextPageWithLayout = () => {
  return <TransactionsScreen />;
};

TransactionsPage.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default TransactionsPage;
