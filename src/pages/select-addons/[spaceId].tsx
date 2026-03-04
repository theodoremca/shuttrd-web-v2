import { useRouter } from "next/router";
import SelectAddonsScreen from "@/screens/select-addons";
import CheckoutLayout from "@/components/layouts/checkout-layout";
import type { NextPageWithLayout } from "@/pages/_app";

const SelectAddonsPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { spaceId } = router.query;

  if (!spaceId) return null;

  return <SelectAddonsScreen spaceId={spaceId as string} />;
};

SelectAddonsPage.getLayout = (page) => <CheckoutLayout>{page}</CheckoutLayout>;

export default SelectAddonsPage;
