import clsx from 'clsx'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Button } from 'flowbite-react'
import { PhotoIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { useBoundStore } from '@/lib/store'

export function UploadZone({ index }: { index: number }) {
  const references = useBoundStore((state) => state.references)
  const setReference = useBoundStore((state) => state.setReference)
  const removeReference = useBoundStore((state) => state.removeReference)

  const uploadFile = references[index] ? references[index].file : null

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setReference(index, {
        file: acceptedFiles[0],
        algoType: 'image-to-image',
        algorithm: 'image-to-image',
      })
    }
  }, [index, setReference])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.png', '.jpeg', '.jpg'],
    },
    maxSize: 5 * 1024 * 1024,
    maxFiles: 1,
    onDrop,
  })

  if (uploadFile) {
    return (
      <div className="flex-1 flex justify-between border-2 border-dashed border-gray-300 rounded-md p-2 lg:p-4 hover:bg-gray-50">
        <div className="flex gap-x-4">
          <div className="relative h-16 w-16">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={URL.createObjectURL(uploadFile)}
              fill
              alt="preview"
            />
          </div>

          <div className="flex-1 flex flex-col justify-between hover:cursor-pointer">
            <span className="!line-clamp-1 break-words font-medium w-60 lg:w-80">{uploadFile.name}</span>
            <div className="">
              <Button
                size="xs"
                gradientDuoTone="tealToLime"
                outline
              >
                <SparklesIcon className="h-4 w-4" />
                <p className="!line-clamp-1 ml-2">Image to Image</p>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="hover:cursor-pointer" onClick={() => removeReference(index)}>
            <XMarkIcon className="h-6 w-6" />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div
        className={clsx(
          'flex-1 flex border-2 border-dashed border-gray-300 rounded-md p-4 lg:p-6 hover:bg-gray-50',
          !isDragActive && 'hover:cursor-pointer',
          isDragActive && 'bg-gray-50',
        )}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <div className="w-full flex items-center justify-between gap-x-4">
          <div className="flex items-center gap-x-2">
            <PhotoIcon className="w-6" />
            <span className="text-base font-medium text-gray-900">Reference</span>
          </div>
          <div className="text-sm font-normal text-gray-600 text-center">Click to upload or drag and drop</div>
          <div className="text-sm font-normal text-gray-900 text-center">PNG or JPG, max. 5MB</div>
        </div>
      </div>
    )
  }
}
