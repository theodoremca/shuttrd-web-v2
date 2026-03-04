import { useRouter } from "next/router";
import AboutHostScreen from "@/screens/about-host";

export default function AboutHostPage() {
  const router = useRouter();
  const { hostId } = router.query;

  if (!hostId) return null;

  return <AboutHostScreen hostId={hostId as string} />;
}
