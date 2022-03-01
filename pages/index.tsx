import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Market Watcher - Economic News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-5">
        <div className="px-10 space-y-5">
          <h1 className="text-5xl max-w-xl font-serif">Stay informed on economic news with <span className="underline decpration-black decoration-4">Market Watcher</span></h1>
          <h2 className="max-w-xl">
            We try to provide you with a maximum of daily informations about economy and subjects related to it.
          </h2>
        </div>
          <img className="hidden px-10 md:inline-flex h-32 lg:h-32" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Medium_icon.svg/1280px-Medium_icon.svg.png" alt="" />
      </div>
      </div>
  )
}

export default Home
