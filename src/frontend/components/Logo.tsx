import type { ComponentPropsWithoutRef } from 'react'
import Image from 'next/image'
import logoIcon from '@/public/logo.svg'

export function Logo(props: ComponentPropsWithoutRef<'div'>) {
  return (
    <div {...props}>
      <Image
        className="relative h-full w-auto"
        priority
        src={logoIcon}
        alt="Omniflow Logo"
      />
    </div>
  )
}
