// Admin section has its own layout — no public header, no footer
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
