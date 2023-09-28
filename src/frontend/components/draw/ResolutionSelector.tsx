'use client'

import clsx from 'clsx'
import { Button, RangeSlider } from 'flowbite-react'
import { useState } from 'react'
import { useBoundStore } from '@/lib/store'

const resolutionCandidatesList = [
  [
    { width: 512, height: 512 },
    { width: 1024, height: 1024 },
    { width: 1280, height: 1280 },
    { width: 2048, height: 2048 },
  ],
  [
    { width: 512, height: 1024 },
    { width: 1024, height: 2048 },
    { width: 1280, height: 2560 },
    { width: 2048, height: 4096 },
  ],
  [
    { width: 1024, height: 512 },
    { width: 2048, height: 1024 },
    { width: 2560, height: 1280 },
    { width: 4096, height: 2048 },
  ],
]

export function ResolutionSelector() {
  const minHeight = 512
  const maxHeight = 4096
  const minWidth = 512
  const maxWidth = 4096

  const height = useBoundStore((state) => state.height)
  const width = useBoundStore((state) => state.width)
  const setHeight = useBoundStore((state) => state.setHeight)
  const setWidth = useBoundStore((state) => state.setWidth)

  const [resolutionCandidates, setResolutionCandidates] = useState<{ width: number, height: number }[]>(
    resolutionCandidatesList[0]
  )

  const setResolution = ({ width: newWidth, height: newHeight }: { width?: number, height?: number }) => {
    if (newWidth !== undefined) {
      setWidth(newWidth)
    }

    if (newHeight !== undefined) {
      setHeight(newHeight)
    }

    newHeight = newHeight || height
    newWidth = newWidth || width

    if (newWidth === newHeight) {
      setResolutionCandidates(resolutionCandidatesList[0])
    } else if (newWidth < newHeight) {
      setResolutionCandidates(resolutionCandidatesList[1])
    } else if (newWidth > newHeight) {
      setResolutionCandidates(resolutionCandidatesList[2])
    }
  }

  return (
    <div className="flex flex-col border-b pb-4">
      <label className="block mb-2 font-display">Resolution</label>
      <div className="flex gap-x-1">
        <Button
          className={clsx(
            'flex-1 h-14',
            width === height && 'ring-2'
          )}
          color="gray"
          onClick={() => {
            const resolutionCandidates = resolutionCandidatesList[0]
            setResolutionCandidates(resolutionCandidates)
            setWidth(resolutionCandidates[0].width)
            setHeight(resolutionCandidates[0].height)
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="none">
            <path fill="#999" d="M6.826 24.641h.923v-1.846h-.923v1.846Zm-1.748-.923h-.923v.923h.923v-.923Zm.923-1.747v-.923H4.155v.923h1.846ZM4.155 6.825v.923h1.846v-.923H4.155Zm.923-1.747v-.923h-.923v.923h.923ZM6.826 6h.923V4.155h-.923V6ZM21.97 22.795h-.923v1.846h.923v-1.846Zm1.748.923v.923h.923v-.923h-.923Zm.923-1.747v-.923h-1.846v.923h1.846ZM22.796 6.825v.923h1.846v-.923h-1.846Zm.923-1.747h.923v-.923h-.923v.923Zm-1.748-.923h-.923V6h.923V4.155ZM6.826 22.795H5.078v1.846h1.748v-1.846ZM6 23.718v-1.747H4.155v1.747h1.846Zm0-16.893V5.078H4.155v1.747h1.846Zm-.923-.824h1.748V4.155H5.078V6Zm16.893 18.64h1.748v-1.846H21.97v1.846Zm2.67-.923v-1.747h-1.845v1.747h1.846Zm0-16.893V5.078h-1.845v1.747h1.846Zm-.922-2.67H21.97V6h1.748V4.155ZM.077 24.797A3.924 3.924 0 0 0 4 28.719v-1.846a2.078 2.078 0 0 1-2.077-2.076H.077ZM4 28.719h20.796v-1.846H4v1.846Zm20.796 0a3.924 3.924 0 0 0 3.923-3.922h-1.846c0 1.145-.93 2.076-2.077 2.076v1.846Zm3.923-3.922V4h-1.846v20.797h1.846ZM28.72 4A3.924 3.924 0 0 0 24.796.077v1.846c1.147 0 2.077.931 2.077 2.077h1.846ZM24.796.077H4v1.846h20.796V.077ZM4 .077A3.924 3.924 0 0 0 .077 4h1.846c0-1.146.93-2.077 2.077-2.077V.077ZM.077 4v20.797h1.846V4H.077Z"></path>
          </svg>
        </Button>
        <Button
          className={clsx(
            'flex-1 h-14',
            width < height && 'ring-2'
          )}
          color="gray"
          onClick={() => {
            const resolutionCandidates = resolutionCandidatesList[1]
            setResolutionCandidates(resolutionCandidates)
            setWidth(resolutionCandidates[0].width)
            setHeight(resolutionCandidates[0].height)
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="29" fill="none">
            <path fill="#999" d="M14.673 4.09h-.988v1.975h.988V4.09Zm1.747.988h.988V4.09h-.988v.988Zm-.987 1.747v.988h1.975v-.988h-1.975Zm1.975 15.146v-.988h-1.975v.988h1.975Zm-.988 1.747v.988h.988v-.988h-.988Zm-1.747-.987h-.988v1.975h.988v-1.975ZM7.683 6.065h.987V4.09h-.987v1.975Zm-1.748-.987V4.09h-.988v.988h.988Zm-.988 1.747v.988h1.976v-.988H4.947Zm1.976 15.146v-.988H4.947v.988h1.976Zm-.988 1.747h-.988v.988h.988v-.988Zm1.748.988h.987v-1.975h-.987v1.975Zm6.99-18.64h1.747V4.09h-1.747v1.975Zm.76-.988v1.747h1.975V5.078h-1.975Zm0 16.893v1.747h1.975v-1.747h-1.975Zm.987.76h-1.747v1.975h1.747v-1.975ZM7.683 4.09H5.935v1.975h1.748V4.09Zm-2.736.988v1.747h1.976V5.078H4.947Zm0 16.893v1.747h1.976v-1.747H4.947Zm.988 2.735h1.748v-1.975H5.935v1.975ZM21.485 4A3.99 3.99 0 0 0 17.499.012v1.975c1.11 0 2.012.903 2.012 2.013h1.976ZM17.499.012H4.858v1.975h12.64V.012Zm-12.64 0A3.99 3.99 0 0 0 .87 4h1.975c0-1.11.902-2.013 2.012-2.013V.012ZM.87 4v20.796h1.975V4H.87Zm0 20.796a3.99 3.99 0 0 0 3.987 3.988v-1.976a2.014 2.014 0 0 1-2.012-2.012H.87Zm3.987 3.988h12.641v-1.976H4.858v1.976Zm12.641 0a3.99 3.99 0 0 0 3.988-3.988H19.51c0 1.11-.902 2.012-2.012 2.012v1.976Zm3.988-3.988V4H19.51v20.796h1.976Z"></path>
          </svg>
        </Button>
        <Button
          className={clsx(
            'flex-1 h-14',
            width > height && 'ring-2'
          )}
          color="gray"
          onClick={() => {
            const resolutionCandidates = resolutionCandidatesList[2]
            setResolutionCandidates(resolutionCandidates)
            setWidth(resolutionCandidates[0].width)
            setHeight(resolutionCandidates[0].height)
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="29" fill="none" viewBox="0 0 30 21">
            <path fill="#999" d="M4.65 6.825v.988h1.976v-.988H4.651Zm.989-1.748V4.09H4.65v.987h.988Zm1.747.988h.988V4.09h-.988v1.975ZM22.532 4.09h-.988v1.975h.988V4.09Zm1.747.987h.988V4.09h-.988v.987Zm-.987 1.748v.988h1.975v-.988h-1.975Zm-16.666 6.99v-.987H4.651v.987h1.975Zm-.987 1.748H4.65v.988h.988v-.988Zm1.747.988h.988v-1.976h-.988v1.976Zm15.146-1.976h-.988v1.976h.988v-1.976Zm1.747.988v.988h.988v-.988h-.988Zm.988-1.748v-.987h-1.975v.987h1.975Zm-18.64-6.99V5.077H4.65v1.748h1.975Zm-.988-.76h1.747V4.09H5.64v1.975Zm16.893 0h1.747V4.09h-1.747v1.975Zm.76-.988v1.748h1.975V5.077h-1.975ZM4.65 13.815v1.748h1.975v-1.748H4.651Zm.988 2.736h1.747v-1.976H5.64v1.976Zm16.893 0h1.747v-1.976h-1.747v1.976Zm2.735-.988v-1.748h-1.975v1.748h1.975ZM4.561.012A3.99 3.99 0 0 0 .573 4h1.975c0-1.11.903-2.013 2.013-2.013V.012ZM.573 4v12.64h1.975V4H.573Zm0 12.64a3.99 3.99 0 0 0 3.988 3.988v-1.975a2.014 2.014 0 0 1-2.013-2.012H.573Zm3.988 3.988h20.796v-1.975H4.561v1.975Zm20.796 0a3.99 3.99 0 0 0 3.988-3.988h-1.976c0 1.11-.902 2.013-2.012 2.013v1.975Zm3.988-3.988V4h-1.976v12.64h1.976Zm0-12.64A3.99 3.99 0 0 0 25.357.012v1.975c1.11 0 2.012.903 2.012 2.013h1.976ZM25.357.012H4.561v1.975h20.796V.012Z"></path>
          </svg>
        </Button>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {resolutionCandidates.map((resolution, i) => (
          <Button
            key={i}
            className={clsx(
              resolution.width === width && resolution.height === height && 'ring-2'
            )}
            color="gray"
            onClick={() => {
              setWidth(resolution.width)
              setHeight(resolution.height)
            }}
          >
            {resolution.width}x{resolution.height}
          </Button>
        ))}
      </div>
      <div className="mt-3 flex items-center">
        <RangeSlider
          className="w-full"
          value={width}
          min={512}
          max={4096}
          onChange={(e) => setResolution({ width: parseInt(e.target.value) || 0 })}
        />
        <div className="ml-4 flex items-center bg-gray-50 p-1 rounded">
          <span className="text-sm">W</span>
          <input
            className="ml-1 w-10 p-0.5 text-xs font-medium text-zinc-900 outline-blue-700 border-0 bg-gray-50"
            min={512}
            max={4096}
            value={width}
            onChange={(e) => setResolution({ width: parseInt(e.target.value) || 0 })}
          />
          <span className="ml-1 text-xs">px</span>
        </div>
      </div>
      {(width < minWidth || width > maxWidth) && (
        <div className="text-xs text-red-500">Width must be between {minWidth} and {maxWidth}.</div>
      )}
      <div className="mt-3 flex items-center">
        <RangeSlider
          className="w-full"
          value={height}
          min={512}
          max={4096}
          onChange={(e) => setResolution({ height: parseInt(e.target.value) || 0 })}
        />
        <div className="ml-4 flex items-center bg-gray-50 p-1 rounded">
          <span className="text-sm">H</span>
          <input
            className="ml-1 w-10 p-0.5 px-1 text-xs font-medium text-zinc-900 outline-blue-700 border-0 bg-gray-50"
            min={512}
            max={4096}
            value={height}
            onChange={(e) => setResolution({ height: parseInt(e.target.value) || 0 })}
          />
          <span className="ml-1 text-xs">px</span>
        </div>
      </div>
      {(height < minHeight || height > maxHeight) && (
        <div className="text-xs text-red-500">Height must be between {minHeight} and {maxHeight}.</div>
      )}
    </div>
  )
}
