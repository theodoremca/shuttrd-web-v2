import { useRouter } from "next/router";
import SpacePhotosScreen from "@/screens/space-photos/gallery";

export default function SpacePhotosPage() {
  const router = useRouter();
  const { spaceId } = router.query;

  if (!spaceId) return null;

  return <SpacePhotosScreen spaceId={spaceId as string} />;
}
