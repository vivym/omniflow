'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { Player, Ui, Video } from '@vime/react'
import { Squares2X2Icon, SquaresPlusIcon, ListBulletIcon } from '@heroicons/react/24/outline'
import { useBoundStore } from '@/lib/store'

const results = [
  {
    loading: false,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1695349091060-6fb89be83290?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80',
  },
  {
    loading: false,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1683533876788-5b7b1e165a0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
  },
  {
    loading: false,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1695088564293-36752ad99b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
  },
  {
    loading: false,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1695048245584-0e017dbc747a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
  },
  // {
  //   loading: false,
  //   type: 'video',
  //   url: 'https://www.google.com',
  // },
]

const viewModes = [
  {
    title: 'auto',
    icon: ListBulletIcon,
  },
  {
    title: 'grid-cols-1',
    icon: ListBulletIcon,
  },
  {
    title: 'grid-cols-2',
    icon: Squares2X2Icon,
  },
  {
    title: 'grid-cols-3',
    icon: Squares2X2Icon,
  },
  {
    title: 'grid-cols-4',
    icon: SquaresPlusIcon,
  },
]

export function ResultPanel() {
  const height = useBoundStore((state) => state.height)
  const width = useBoundStore((state) => state.width)
  const [viewMode, setViewMode] = useState('auto')

  console.log('viewMode', viewMode)

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mt-2 mb-4">
        <div>正在排队</div>
        <div className="flex">
          <RadioGroup defaultValue="auto" onChange={(value) => setViewMode(value)}>
            <RadioGroup.Label className="sr-only">View Mode</RadioGroup.Label>
            <div className="relative -space-x-px rounded-md bg-white flex">
              {viewModes.map((viewMode, i) => (
                <RadioGroup.Option
                  key={i}
                  className={({ checked }) =>
                    clsx(
                      'relative flex cursor-pointer flex-col border p-2 focus:outline-none',
                      checked ? 'z-10 border-indigo-200 bg-indigo-50' : 'border-gray-200',
                      i === 0 && 'rounded-tl-md rounded-bl-md',
                      i === viewModes.length - 1 && 'rounded-tr-md rounded-br-md',
                    )
                  }
                  value={viewMode.title}
                >
                  <viewMode.icon className="h-6 w-6" />
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>
      <div
        className={clsx(
          'grid  gap-4',
          viewMode === 'auto' && 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-4',
          viewMode === 'grid-cols-1' && 'grid-cols-1',
          viewMode === 'grid-cols-2' && 'grid-cols-2',
          viewMode === 'grid-cols-3' && 'grid-cols-3',
          viewMode === 'grid-cols-4' && 'grid-cols-4',
        )}
      >
        {results.map((result, i) => (
          <div key={i}>
            {result.type === 'image' && (
              <Image
                className="w-full"
                src={result.url}
                alt="result"
                width={width}
                height={height}
              />
            )}
            {result.type === 'video' && (
              <div>
                <Player controls>
                  <Video crossOrigin="" poster="https://media.vimejs.com/poster.png">
                    <source
                      data-src="https://media.vimejs.com/720p.mp4"
                      type="video/mp4"
                    />
                    <track
                      default
                      kind="subtitles"
                      src="https://media.vimejs.com/subs/english.vtt"
                      srcLang="en"
                      label="English"
                    />
                  </Video>
                  <Ui></Ui>
                </Player>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
