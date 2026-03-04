import type { ReactNode } from "react";

export default function HostLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* Host Navbar */}
      <main>{children}</main>
    </div>
  );
}
