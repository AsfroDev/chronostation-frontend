import Link from 'next/link'

export default function Logo() {
  return (
    <Link
      href={'/'}
      className="flex w-1/2 md:w-full md:ml-4 items-center justify-center md:justify-start lg:justify-start lg:w-fit"
    >
      <h1 className="text-md md:text-xl lg:text-2xl">ChronoStation</h1>
    </Link>
  )
}
