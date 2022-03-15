import Link from 'next/link'
import React from 'react'

function header() {
  return (
    <header className="mx-auto flex max-w-7xl justify-between p-5">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <h1>Market Watcher</h1>
        </Link>
        <div className="hidden items-center space-x-5 md:inline-flex">
          <Link href="/">
            <h3 className="cursor-pointer">Home</h3>
          </Link>
          <Link href="/about">
            <h3 className="cursor-pointer">About</h3>
          </Link>
          <h3>Contact</h3>
          <Link href="https://www.buymeacoffee.com/marketwatcher">
            <h3 className="cursor-pointer rounded-full bg-green-600 px-4 py-1 text-white">
              Buy me a coffee
            </h3>
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <h3>Sign In</h3>
        <h3 className="rounded-full border border-green-600 px-4 py-1 cursor-pointer transition-transform duration-2000 ease-in-out hover:bg-green-600 hover:text-white">
          Get Started
        </h3>
      </div>
    </header>
  )
}

export default header
