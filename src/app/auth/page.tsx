import Image from 'next/image'
import OneLink from '../../../assets/one-link-64x64.png'
import { GoogleSVG } from '@/assets/svg/google'

export default function Auth() {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      {/* Form */}
      <div className="flex min-w-full flex-col items-center bg-white p-0 lg:min-w-[50%]">
        <header className="debug flex max-h-16 w-full items-center gap-2 p-6">
          <Image src={OneLink} alt="One Link" className="h-[32px] w-[32px]" />
          <span className="text-sm font-bold lg:text-lg">OneLink</span>
        </header>
        <section className="mt-12 flex w-full flex-col items-center lg:mt-24">
          <div className="flex flex-col gap-4">
            <h3 className="text-md font-bold text-gray-700 lg:text-2xl">
              Welcome Back to OneLink
            </h3>
            <span className="text-gray-400">
              Please provide your credentials
            </span>
            <button className="mt-4 flex items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-2 font-semibold text-gray-700 shadow-sm transition-shadow hover:shadow-md">
              <GoogleSVG />
              <span className="text-gray-500">Log in with Google</span>
            </button>
          </div>

          <form></form>
        </section>
      </div>

      {/* Carousel of Images */}
      <div className="debug hidden items-center justify-center bg-gray-200 p-6 lg:flex lg:flex-1">
        <div className="carousel h-full w-full max-w-full">
          {/* Replace with actual carousel component */}
          <p>Carousel of Images</p>
        </div>
      </div>
    </main>
  )
}
