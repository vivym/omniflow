import { Sidebar } from '@/components/draw/Sidebar'

export default function DrawLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Sidebar />
      <main className="lg:ml-80 flex">
        {children}
      </main>
    </div>
  );
}
