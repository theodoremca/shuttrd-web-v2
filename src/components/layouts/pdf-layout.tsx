import type { ReactNode } from "react";

export default function PdfLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", background: "white" }}>
      {children}
    </div>
  );
}
