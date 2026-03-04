import { useRouter } from "next/router";
import PhotoViewScreen from "@/screens/space-photos/photo-view";

export default function PhotoViewPage() {
  const router = useRouter();
  const { spaceId, photoId } = router.query;

  if (!spaceId || !photoId) return null;

  return <PhotoViewScreen spaceId={spaceId as string} photoId={photoId as string} />;
}
