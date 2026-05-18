"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import ModernHeader from "@/components/header";
import ModernFooter from "@/components/footer";

// Lazy-load decorative/non-critical components — they are never needed for first paint
const MotionEffects = dynamic(() => import("@/components/MotionEffects"), {
  ssr: false,
});
const FloatingActions = dynamic(() => import("@/components/FloatingActions"), {
  ssr: false,
});

const HIDDEN_LAYOUT_PATHS = ["/login", "/admin", "/seed"];

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Hide header/footer for login, admin, and seed pages
  const hideLayout = HIDDEN_LAYOUT_PATHS.some((path) => pathname.startsWith(path));

  if (hideLayout) {
    return <>{children}</>;
  }

  return (
    <>
      <MotionEffects />
      <ModernHeader />
      <main>{children}</main>
      <ModernFooter />
      <FloatingActions />
    </>
  );
}
