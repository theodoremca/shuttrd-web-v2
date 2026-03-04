export default function SupportScreen({ steps }: { steps?: string[] }) {
  return <div>Support {steps ? ": " + steps.join("/") : ""}</div>;
}
