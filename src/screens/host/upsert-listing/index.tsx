export default function UpsertListingScreen({ step }: { step?: string[] }) {
  return <div>Upsert Listing {step ? ": " + step.join("/") : ": new"}</div>;
}
