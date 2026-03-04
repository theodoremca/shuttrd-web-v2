import type { ReactNode } from "react";

export default function CheckoutLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* Back Button + Booking Summary Aside */}
      <main>{children}</main>
    </div>
  );
}
