import type { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* Admin Sidebar */}
      <main>{children}</main>
    </div>
  );
}
