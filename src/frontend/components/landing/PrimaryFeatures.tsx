import clsx from 'clsx'
import Image from 'next/image'
import backgroundImage from '@/assets/background-features.jpg'

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Features to mange your workflow"
      className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
      />
      <div
        className={clsx(
          'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
          'relative',
        )}
      >
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Everything you need to run your books.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Well everything you need if you aren’t that picky about minor
            details like tax compliance.
          </p>
        </div>
      </div>
    </section>
  )
}
