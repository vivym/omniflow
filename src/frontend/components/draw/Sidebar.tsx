import { Logo } from '@/components/Logo'

function ModelSelector() {
}

export function Sidebar() {
  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-80 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
          {/* Logo */}
          <div className="flex pt-6 pb-10 shrink-0 items-center border-b">
            <Logo className="h-12 w-auto" />
          </div>

          <div>
            <span>Select workflow</span>

          </div>
        </div>
      </div>
    </>
  )
}
