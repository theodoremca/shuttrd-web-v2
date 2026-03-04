import { useRouter } from "next/router";
import AccountSectionScreen from "@/screens/account-setting";

export default function AccountSectionPage() {
  const router = useRouter();
  const { section } = router.query;

  if (!section) return null;

  return <AccountSectionScreen section={section as string} />;
}
