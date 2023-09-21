export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="container">{children}</div>
    </div>
  );
}
