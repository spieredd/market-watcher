import React from 'react'
import Link from 'next/link'

function Banner() {
  return (
    <div className="flex items-center justify-between bg-amber-300 py-10 lg:py-5">
      <div className="space-y-5 px-10">
        <h1 className="max-w-xl font-serif text-5xl">
          Stay informed on financial news with{' '}
          <span className="decpration-black underline decoration-4">
            Market Watcher
          </span>
        </h1>
        <h2 className="max-w-xl">
          We try to provide you with a maximum of daily information regarding
          international finance and economics issues.{'  '}
          <Link href="/about">
            <span className="cursor-pointer text-blue-900 underline">
              (Discover our project)
            </span>
          </Link>
        </h2>
      </div>
      <img
        className="hidden h-32 px-10 md:inline-flex lg:h-32"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Medium_icon.svg/1280px-Medium_icon.svg.png"
        alt=""
      />
    </div>
  )
}

export default Banner
