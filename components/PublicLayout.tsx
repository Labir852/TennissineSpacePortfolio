"use client";

import { usePathname } from "next/navigation";
import ModernHeader from "@/components/header";
import ModernFooter from "@/components/footer";
import MotionEffects from "@/components/MotionEffects";
import FloatingActions from "@/components/FloatingActions";

const HIDDEN_LAYOUT_PATHS = ["/login", "/admin"];

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Hide header/footer for login and all admin pages
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
