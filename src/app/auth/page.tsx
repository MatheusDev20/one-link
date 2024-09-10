import Image from 'next/image'
import OneLink from '../../../assets/one-link-64x64.png'
import { GoogleSVG } from '@/assets/svg/google'

export default function Auth() {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      {/* Form */}
      <div className="flex min-w-full flex-col items-center bg-white p-0 lg:min-w-[50%]">
        <header className="flex max-h-16 w-full items-center gap-2 p-6">
          <Image src={OneLink} alt="One Link" className="h-[32px] w-[32px]" />
          <span className="text-sm font-bold lg:text-lg">OneLink</span>
        </header>
        <section className="mt-12 flex w-full flex-col items-center lg:mt-24">
          <div className="flex min-w-[70%] flex-col gap-4">
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
            <div className="mt-4 flex items-center justify-center gap-2">
              <hr className="h-px w-[50%] border-0 bg-gray-300" />
              <span className="text-gray-400">or</span>
              <hr className="h-px w-[50%] border-0 bg-gray-300" />
            </div>
            <form className="mt-9 flex w-full max-w-sm flex-col gap-8">
              <div className="flex items-center border-b-2 border-gray-500 py-2 transition-all duration-300 ease-in-out focus-within:border-blue-500">
                <input
                  className="mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-gray-500 focus:outline-none"
                  type="text"
                  placeholder="Email"
                  aria-label="email"
                />
              </div>
              <div className="flex items-center border-b-2 border-gray-500 py-2 transition-all duration-300 ease-in-out focus-within:border-blue-500">
                <input
                  className="text-gray-400focus:outline-none mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-gray-500 focus:outline-none"
                  type="text"
                  placeholder="Password"
                  aria-label="password"
                />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    value=""
                    className="focus:ring-20 h-3 w-4 cursor-pointer rounded border-gray-300 bg-gray-100 text-blue-600 focus:outline-none"
                  />
                  <span className="cursor-pointer text-sm font-bold text-gray-700">
                    Remember me
                  </span>
                </div>
                <a className="cursor-pointer text-sm font-bold text-gray-700 underline">
                  Forgot password
                </a>
              </div>

              <button className="full rounded-lg border-none bg-gray-900 py-4 text-white transition-colors duration-300 hover:bg-gray-800">
                Log in
              </button>

              <footer className="mb-3 flex gap-3 md:mb-0">
                <span className="text-sm text-gray-400">
                  Dont have an account?
                </span>
                <a className="cursor-pointer text-sm font-bold text-gray-700 underline">
                  Sign up for free
                </a>
              </footer>
            </form>
          </div>
        </section>
      </div>

      {/* Carousel of Images */}
      <div className="hidden items-center justify-center bg-gray-200 p-6 lg:flex lg:flex-1">
        <div className="carousel h-full w-full max-w-full">
          {/* Replace with actual carousel component */}
          <p>Carousel of Images</p>
        </div>
      </div>
    </main>
  )
}
