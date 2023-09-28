'use client'

import { Switch, Tab } from '@headlessui/react'
import clsx from 'clsx'
import { Button, Textarea } from 'flowbite-react'
import { ResultPanel } from '@/components/draw/ResultPanel'
import { UploadZone } from '@/components/draw/UploadZone'
import { useBoundStore } from '@/lib/store'

const tabs = [
  {
    title: 'Results',
    panel: <ResultPanel />,
  },
  {
    title: 'Log',
    panel: <div>Log Panel</div>,
  },
  {
    title: 'Inspiration',
    panel: <div>Inspiration Panel</div>,
  },
]

const ToggleSwitch = ({
  label, checked, setChecked
}: {
  label: string, checked: boolean, setChecked: (checked: boolean) => void
}) => {
  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch
        className={clsx(
          checked ? 'bg-indigo-600' : 'bg-gray-200',
          'relative inline-flex h-5 w-8 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none'
        )}
        checked={checked}
        onChange={setChecked}
      >
        <span
          className={clsx(
            checked ? 'translate-x-3' : 'translate-x-0',
            'pointer-events-none relative inline-block h-4 w-4 rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
          )}
        >
          <span
            className={clsx(
              checked ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in',
              'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
            )}
            aria-hidden="true"
          >
            <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
              <path
                d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span
            className={clsx(
              checked ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out',
              'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
            )}
            aria-hidden="true"
          >
            <svg className="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
              <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
            </svg>
          </span>
        </span>
      </Switch>
      <Switch.Label as="span" className="ml-2 text-sm">
        <span className={clsx('font-medium', checked ? 'text-gray-900' : 'text-gray-600')}>{label}</span>
      </Switch.Label>
    </Switch.Group>
  )
}

export default function DrawHome() {
  const references = useBoundStore((state) => state.references)
  const optimizePromptEnabled = useBoundStore((state) => state.optimizePromptEnabled)
  const setOptimizePromptEnabled = useBoundStore((state) => state.setOptimizePromptEnabled)
  const negativePromptEnabled = useBoundStore((state) => state.negativePromptEnabled)
  const setNegativePromptEnabled = useBoundStore((state) => state.setNegativePromptEnabled)

  return (
    <div className="flex-1 p-8 flex flex-col gap-y-6">
      {/* Input Area */}
      <div className="flex gap-x-2 pb-8 border-b border-gray-100 ">
        <div className="flex-1 flex flex-col gap-y-2">
          <Textarea
            className="bg-white p-3"
            placeholder="Enter your positive prompt here"
          />

          {negativePromptEnabled && (
            <Textarea
              className="bg-white p-3"
              placeholder="Enter your negative prompt here"
              rows={1}
            />
          )}

          <div className="w-full flex items-stretch gap-x-4">
            <UploadZone index={0} />
            {references.length > 0 && (
              <UploadZone index={1} />
            )}
            {/* <UploadZone /> */}
          </div>
        </div>
        <div className="flex flex-col w-32 gap-y-2">
          <Button className="text-lg h-16 w-32 focus:outline-none" gradientDuoTone="tealToLime">Run</Button>
          <ToggleSwitch
            label="Opt. Prompt"
            checked={optimizePromptEnabled}
            setChecked={setOptimizePromptEnabled}
          />
          <ToggleSwitch
            label="Neg. Prompt"
            checked={negativePromptEnabled}
            setChecked={setNegativePromptEnabled}
          />
        </div>
      </div>

      {/* Output Area */}
      <Tab.Group>
        <Tab.List className="flex gap-x-8 justify-center">
          {tabs.map((tab, i) => (
            <Tab
              key={i}
              className={clsx(
                'ui-selected:border-indigo-500 ui-selected:text-indigo-600',
                'ui-not-selected:border-transparent ui-not-selected:text-gray-500 ui-not-selected:hover:border-gray-300 ui-not-selected:hover:text-gray-700',
                'focus:outline-none',
                'whitespace-nowrap border-b-2 py-4 px-1 w-20 text-sm font-medium',
              )}
            >
              <span>{tab.title}</span>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {tabs.map((tab, i) => (
            <Tab.Panel key={i} unmount={i !== 0}>
              {tab.panel}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
