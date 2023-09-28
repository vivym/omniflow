'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { Button } from 'flowbite-react'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { Logo } from '@/components/Logo'
import { useBoundStore } from '@/lib/store'
import { ResolutionSelector } from './ResolutionSelector'

function SelectedWorkflow({ name, coverSrc }: { name: string, coverSrc: string }) {
  const toggleWorkflowSelector = useBoundStore((state) => state.toggleWorkflowSelector)

  return (
    <div className="relative flex justify-center items-center h-24 w-auto border border-slate-200 rounded overflow-hidden">
      {/* Background Image */}
      <Image
        className="absolute inset-0 h-full w-full object-cover"
        src={coverSrc}
        fill
        alt="workflow-cover"
      />

      <span
        className="z-50 text-white font-display font-bold text-lg text-shadow-lg shadow-gray-700 select-none hover:cursor-pointer"
        onClick={toggleWorkflowSelector}
      >
        {name}
      </span>

      <div className="absolute right-0 bottom-0 flex gap-x-2 p-1">
        <div className="flex items-center gap-1 rounded-lg bg-gray-50 px-1 py-0.5 select-none hover:cursor-pointer">
          <HeartIcon className="text-red-600 h-4 w-auto" />
          <div className="text-gray-800 text-xs font-sans">233</div>
        </div>
      </div>
    </div>
  )
}


export function SidebarComponents({ isDesktop }: { isDesktop: boolean }) {
  const numOfOutputs = useBoundStore((state) => state.numOfOutputs)
  const setNumOfOutputs = useBoundStore((state) => state.setNumOfOutputs)

  return (
    <div className="flex flex-col grow gap-y-5 border-r border-gray-200 bg-white px-6">
      {/* Logo */}
      <div className="flex py-8 shrink-0 items-center border-b">
        <Logo className="h-12 w-auto" />
      </div>

      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col border-b pb-4">
          <label className="block mb-2 font-display">Workflow</label>
          <SelectedWorkflow
            name="Stable Diffusion XL"
            coverSrc="https://images.unsplash.com/photo-1694955437705-07a5cb686c0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1890&q=80"
          />
        </div>

        <ResolutionSelector />

        <div className="flex flex-col border-b pb-4">
          <label className="block mb-2 font-display">Number of Outputs</label>
          <div className="grid grid-cols-4 gap-2">
            {Array(8).fill(0).map((_, i) => (
              <Button
                key={i}
                className={clsx(numOfOutputs === i + 1 && 'ring-2')}
                color="gray"
                onClick={() => setNumOfOutputs(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {isDesktop && (
        <div className="-mx-6 mt-auto">
          <a
            className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
            href="#"
          >
            <Image
              className="rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              height={32}
              width={32}
              alt="avatar"
            />
            <span className="sr-only">Your profile</span>
            <span aria-hidden="true">Ming Yang</span>
          </a>
        </div>
      )}
    </div>
  )
}

export function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-80 lg:flex-col">
        <SidebarComponents isDesktop />
      </div>

      {/* Mobile sidebar */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
          {/* Background Mask */}
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>

                <SidebarComponents isDesktop={false} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white p-4 shadow-sm sm:px-6 lg:hidden">
        <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">Dashboard</div>
        <a href="#">
          <Image
            className="rounded-full bg-gray-50"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            height={32}
            width={32}
            alt="avatar"
          />
          <span className="sr-only">Your profile</span>
        </a>
      </div>
    </>
  )
}
