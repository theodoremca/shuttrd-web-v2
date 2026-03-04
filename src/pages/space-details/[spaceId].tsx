import { useRouter } from "next/router";
import SpaceDetailsScreen from "@/screens/space-details";

export default function SpaceDetailsPage() {
  const router = useRouter();
  const { spaceId } = router.query;

  if (!spaceId) return null;

  return <SpaceDetailsScreen spaceId={spaceId as string} />;
}
