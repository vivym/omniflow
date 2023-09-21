import { Sidebar } from '@/components/draw/Sidebar'

export default function DrawLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
}
