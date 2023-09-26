import { Sidebar } from '@/components/draw/Sidebar'

export default function DrawLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Sidebar />
      <main className="py-10 lg:pl-80 flex">
        {children}
      </main>
    </div>
  );
}
