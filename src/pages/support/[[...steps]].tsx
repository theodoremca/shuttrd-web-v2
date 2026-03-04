import { useRouter } from "next/router";
import SupportScreen from "@/screens/support";

export default function SupportPage() {
  const router = useRouter();
  const { steps } = router.query;

  return <SupportScreen steps={steps as string[] | undefined} />;
}
