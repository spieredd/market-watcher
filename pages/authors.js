import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { sanityClient, urlFor } from '../sanity'
import Link from 'next/link'
import CookieConsent from 'react-cookie-consent'

function authors() {
  return (
    <div>
      <Head>
        <title>Market Watcher - Financial News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
          <div className="mx-auto flex flex-col max-w-7xl justify-between p-5">
              <h1 className="text-xl font-bold">Authors</h1>
              <hr className="py-5" />
        <div className="w-full max-w-sm lg:flex lg:max-w-full mb-5">
          <Image
            className="h-48 flex-none overflow-hidden rounded-t bg-cover text-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
            src="/profile.png"
            height={100}
            width={200}
            objectFit="cover"
          />
          <div className="flex flex-col justify-between rounded-b border-r border-b border-l border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400">
            <div className="mb-8">
              <p className="flex items-center text-sm text-gray-600">
                <svg
                  className="mr-2 h-3 w-3 fill-current text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
              </p>
              <div className="mb-2 text-xl font-bold text-gray-900">
                Can coffee make you a better developer?
              </div>
              <p className="text-base text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex items-center">
              <img
                className="mr-4 h-10 w-10 rounded-full"
                src="/img/jonathan.jpg"
                
              />
              <div className="text-sm">
                <p className="leading-none text-gray-900">Jonathan Reinink</p>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div></div>
        <div className="w-full max-w-sm lg:flex lg:max-w-full mb-5">
          <Image
            className="h-48 flex-none overflow-hidden rounded-t bg-cover text-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
            src="/profile.png"
            height={100}
            width={200}
            objectFit="cover"
          />
          <div className="flex flex-col justify-between rounded-b border-r border-b border-l border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400">
            <div className="mb-8">
              <p className="flex items-center text-sm text-gray-600">
                <svg
                  className="mr-2 h-3 w-3 fill-current text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
              </p>
              <div className="mb-2 text-xl font-bold text-gray-900">
                Can coffee make you a better developer?
              </div>
              <p className="text-base text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex items-center">
              <img
                className="mr-4 h-10 w-10 rounded-full"
                src="/img/jonathan.jpg"
                
              />
              <div className="text-sm">
                <p className="leading-none text-gray-900">Jonathan Reinink</p>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="w-full max-w-sm lg:flex lg:max-w-full mb-5">
          <Image
            className="h-48 flex-none overflow-hidden rounded-t bg-cover text-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
            src="/profile.png"
            height={100}
            width={200}
            objectFit="cover"
          />
          <div className="flex flex-col justify-between rounded-b border-r border-b border-l border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400">
            <div className="mb-8">
              <p className="flex items-center text-sm text-gray-600">
                <svg
                  className="mr-2 h-3 w-3 fill-current text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
              </p>
              <div className="mb-2 text-xl font-bold text-gray-900">
                Can coffee make you a better developer?
              </div>
              <p className="text-base text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex items-center">
              <img
                className="mr-4 h-10 w-10 rounded-full"
                src="/img/jonathan.jpg"
                
              />
              <div className="text-sm">
                <p className="leading-none text-gray-900">Jonathan Reinink</p>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>

      <Footer />
    </div>
  )
}

export default authors
