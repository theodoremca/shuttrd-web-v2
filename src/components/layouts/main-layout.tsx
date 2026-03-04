import type { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* Navbar */}
      <main>{children}</main>
      {/* Footer */}
    </div>
  );
}
