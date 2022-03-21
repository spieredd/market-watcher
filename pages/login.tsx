import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { sanityClient, urlFor } from '../sanity'
import Link from 'next/link'
import CookieConsent from 'react-cookie-consent'

function login() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true "
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <title>Market Watcher - Economic Daily News</title>
      </Head>
      <div className="h-screen bg-white">
        <div className="border-b border-black bg-amber-200 px-20">
          <nav className="flex items-center justify-between pt-5 pb-3">
            <Link href="/">
              <p className="cursor-pointer text-gray-900 underline mr-7">Suscribe</p>
            </Link>
            <Link href="/">
              <h1 className="cursor-pointer font-playfair text-3xl font-bold text-gray-900">
                Market Watcher
              </h1>
            </Link>
            <Link href="/">
              <p className="cursor-pointer text-gray-900">
                ← <span className="underline">Back Home</span>
              </p>
            </Link>
          </nav>
        </div>
        <div className="bg-amber-200 pb-3 border-b border-black px-10">
          <ul className="invisible mx-10 flex cursor-pointer flex-row items-center justify-between pt-0 text-xs text-gray-600 underline lg:visible lg:pt-2 lg:text-base">
            <li>World</li>
            <li>Finance</li>
            <li>Business</li>
            <li>Geopolitics</li>
            <li>Geography</li>
            <li>Investment</li>
            <li>Technology</li>
          </ul>
        </div>
        <div className="my-10 flex w-full flex-col items-center justify-center space-y-5 ">
          <div className="my-10 flex flex-col items-center justify-center space-y-5 rounded border border-black p-20 pb-5">
            <h2 className="text-3xl font-bold">Log in</h2>
            <div>
              <p>Username:</p>
              <input
                className="w-full rounded border border-black p-2"
                type="text"
              />
            </div>
            <div>
              <p>Password:</p>
              <input
                className="w-full rounded border border-black p-2"
                type="password"
              />
            </div>
            <button className="rounded border border-black bg-amber-200 px-5 py-2 text-black">
              Log in
            </button>
            <div className="pt-10">
              <p className="text-gray-700 font-bold text-sm">Market Watcher</p>
            </div>
          </div>
        </div>
        <footer className="flex w-full flex-col items-center justify-center border-t-2 bg-gray-100 py-16 text-gray-800">
        <Link href="https://www.buymeacoffee.com/marketwatcher">
          <div className="cursor-pointer rounded-xl bg-green-400 px-4 py-1 duration-200 ease-in-out hover:scale-105 hover:bg-green-500">
            <h3 className="text-normal font-poppins font-semibold">
              Buy me a coffee
            </h3>
          </div>
        </Link>
        <div className="my-2">
          <p>---</p>
        </div>
        <div>
          <p>
            Copyright 2022 - <span className="font-bold">Market-Watcher</span>
          </p>
        </div>
      </footer>
      </div>
    </>
  )
}

export default login
