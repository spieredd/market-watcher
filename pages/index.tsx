import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'
import Link from 'next/link'
import CookieConsent from 'react-cookie-consent'
import Script from 'next/script'

interface Props {
  posts: [Post]
}

const Home: NextPage = ({ posts }: any) => {
  posts.sort(function (a, b) {
    var dateA: any = new Date(a._createdAt),
      dateB: any = new Date(b._createdAt)
    return dateA - dateB
  })
  let posts_sorted = posts.reverse()
  console.log(posts_sorted)
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
      <div className="border-b border-black bg-amber-200 px-20">
        <nav className="flex items-center justify-between pt-5 pb-3">
          <Link href="/">
            <p className="cursor-pointer text-gray-700 underline">Suscribe</p>
          </Link>
          <h1 className="font-playfair text-3xl font-bold text-gray-600">
            Market Watcher
          </h1>
          <Link href="/">
            <button className="cursor-pointer rounded border border-gray-700 px-2 py-1 text-gray-700 duration-300 ease-in-out hover:bg-gray-600 hover:text-white">
              Sign up
            </button>
          </Link>
        </nav>
      </div>
      <div className="border-b border-black bg-amber-200 px-10">
        <ul className="invisible mx-10 flex cursor-pointer flex-row items-center justify-between pt-0 text-xs text-gray-600 underline lg:visible lg:pt-2 lg:text-base">
          <li>World</li>
          <li>Finance</li>
          <li>Business</li>
          <li>Geopolitics</li>
          <li>Geography</li>
          <li>Investment</li>
          <li>Technology</li>
        </ul>

        <section className="mx-10 mt-5 flex items-center justify-between py-7 text-gray-700 lg:p-10">
          <div className="w-100 lg:w-1/2">
            <h2 className="font-playfair text-4xl font-bold lg:text-5xl">
              {posts_sorted[0].title}
            </h2>
            <h3 className="py-5 text-sm lg:text-base">
              {posts_sorted[0].description}
            </h3>
            <Link
              key={posts_sorted[0]._id}
              href={`/post/${posts_sorted[0].slug.current}`}
            >
              <p className="cursor-pointer underline">Continue reading...</p>
            </Link>
          </div>
          <div className="flex w-1/2 items-center justify-center py-2 pl-20 pr-10">
            <img
              className="col-span-2 h-full object-cover opacity-80"
              src={urlFor(posts_sorted[0].mainImage).url()!}
              alt=""
            />
          </div>
          {/* <div className="border rounded border-opacity-50 px-2 border-gray-200">
            <p className="text-white">
              {new Date(posts_sorted[0]._createdAt).toLocaleString([], {
                month: 'numeric',
                day: 'numeric',
              })}
            </p>
          </div> */}
        </section>
      </div>
      <div className="bg-white px-10 text-gray-800">
        <section className="flex h-fit flex-col justify-center space-y-5 overflow-hidden pt-5 pb-5 lg:flex-row lg:justify-between lg:space-x-5 lg:space-y-0">
          <Link
            key={posts_sorted[1]._id}
            href={`/post/${posts_sorted[1].slug.current}`}
          >
            <article className="flex h-fit w-full cursor-pointer flex-row items-center  justify-between space-x-5 border-gray-800 p-10 py-5">
              <div className="">
                <Link href="/">
                  <p className="cursor-pointer font-bold text-blue-600">
                    World
                  </p>
                </Link>
                <h2 className="text-2xl font-bold">{posts_sorted[1].title}</h2>
                <p className="text-gray-500">
                  {new Date(posts_sorted[1]._createdAt).toLocaleString([], {
                    month: 'numeric',
                    day: 'numeric',
                  })}
                </p>
                <p>{posts_sorted[1].description}</p>
              </div>

              <img
                className="h-40 w-60 flex-auto object-cover"
                src={urlFor(posts_sorted[1].mainImage).url()!}
                alt=""
              />
            </article>
          </Link>
          <Link
            key={posts_sorted[2]._id}
            href={`/post/${posts_sorted[2].slug.current}`}
          >
            <article className="flex h-fit w-full cursor-pointer flex-row items-center  justify-between space-x-5 border-gray-800 p-10 py-5">
              <div className="">
                <Link href="/">
                  <p className="cursor-pointer font-bold text-blue-600">
                    World
                  </p>
                </Link>
                <h2 className="text-2xl font-bold">{posts_sorted[2].title}</h2>
                <p className="text-gray-500">
                  {new Date(posts_sorted[2]._createdAt).toLocaleString([], {
                    month: 'numeric',
                    day: 'numeric',
                  })}
                </p>
                <p>{posts_sorted[2].description}</p>
              </div>

              <img
                className="h-40 w-60 flex-auto object-cover"
                src={urlFor(posts_sorted[2].mainImage).url()!}
                alt=""
              />
            </article>
          </Link>
        </section>

        <section className="flex h-fit flex-row items-start justify-center space-y-5 overflow-hidden lg:flex-row lg:justify-between lg:space-x-5 lg:space-y-0">
          <article className="flex h-fit w-full cursor-pointer flex-row  items-center justify-between space-x-5 border-gray-800 p-10 py-5">
            <div className="">
              <div className="mb-4 h-40">
                <img
                  className="col-span-2 h-full w-full object-cover opacity-80"
                  src={urlFor(posts_sorted[3].mainImage).url()!}
                  alt=""
                />
              </div>
              <Link href="/">
                <p className="cursor-pointer font-bold text-blue-600">World</p>
              </Link>
              <h2 className="text-xl font-bold">{posts_sorted[3].title}</h2>
              <p className="text-gray-500">
                {new Date(posts_sorted[3]._createdAt).toLocaleString([], {
                  month: 'numeric',
                  day: 'numeric',
                })}
              </p>
              <p className="text-normal">{posts_sorted[3].description}</p>
            </div>
          </article>
          <article className="flex h-fit w-full cursor-pointer flex-row  items-center justify-between space-x-5 border-gray-800 p-10 py-5">
            <div className="">
              <div className="mb-4 h-40">
                <img
                  className="col-span-2 h-full w-full object-cover opacity-80"
                  src={urlFor(posts_sorted[4].mainImage).url()!}
                  alt=""
                />
              </div>
              <Link href="/">
                <p className="cursor-pointer font-bold text-blue-600">World</p>
              </Link>
              <h2 className="text-xl font-bold">{posts_sorted[4].title}</h2>
              <p className="text-gray-500">
                {new Date(posts_sorted[4]._createdAt).toLocaleString([], {
                  month: 'numeric',
                  day: 'numeric',
                })}
              </p>
              <p>{posts_sorted[4].description}</p>
            </div>
          </article>
          <section className="flex w-full flex-col items-center justify-center">
            <article className="flex h-fit w-full cursor-pointer flex-row  items-center justify-start space-x-5 border-gray-800 p-10 py-5">
              <div className="">
                <Link href="/">
                  <p className="cursor-pointer text-xs font-bold text-blue-600">
                    World
                  </p>
                </Link>
                <h2 className="text-normal font-bold">
                  {posts_sorted[5].title}
                </h2>
                <p className="text-sm text-gray-500">
                  {new Date(posts_sorted[5]._createdAt).toLocaleString([], {
                    month: 'numeric',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </article>
            <article className="flex h-fit w-full cursor-pointer flex-row  items-center justify-start space-x-5 border-gray-800 p-10 py-5">
              <div className="">
                <Link href="/">
                  <p className="cursor-pointer text-xs font-bold text-blue-600">
                    World
                  </p>
                </Link>
                <h2 className="text-normal font-bold">
                  {posts_sorted[3].title}
                </h2>
                <p className="text-sm text-gray-500">
                  {new Date(posts_sorted[3]._createdAt).toLocaleString([], {
                    month: 'numeric',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </article>
            <article className="flex h-fit w-full cursor-pointer flex-row  items-center justify-start space-x-5 border-gray-800 p-10 py-5">
              <div className="">
                <Link href="/">
                  <p className="cursor-pointer text-xs font-bold text-blue-600">
                    World
                  </p>
                </Link>
                <h2 className="text-normal font-bold">
                  {posts_sorted[4].title}
                </h2>
                <p className="text-sm text-gray-500">
                  {new Date(posts_sorted[4]._createdAt).toLocaleString([], {
                    month: 'numeric',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </article>
          </section>
        </section>
        <section className="grid w-full	grid-cols-3 grid-rows-1 gap-x-5">
          <Link href="/">
            <div className="col-span-2 my-5 grid cursor-pointer grid-cols-10 grid-rows-1 items-center justify-center gap-x-5 pl-10">
              <div className="col-span-4 flex flex-col items-center justify-center">
                <h2 className="mb-4 text-2xl font-bold text-gray-700">
                  What is economy ?
                </h2>
                <p className="mb-2 text-center text-gray-800">
                  An economy is the large set of inter-related production and
                  consumption activities that...
                </p>
                <p className="text-center text-xs text-gray-500">
                  Learn about economy with this crash course created by experts at Market Watcher
                </p>
              </div>
              <img
                className="h-100 col-span-6 w-full overflow-hidden object-cover"
                src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F1fb3e698-8078-47a7-b6c9-b1d4d7109457.jpg?source=next-home-page&dpr=2&width=580&height=435&fit=cover&gravity=poi"
                alt=""
              />
            </div>
          </Link>
          <div className="col-span-1 border flex justify-center items-center">
            <p className="font-semiBold text-xl">Ads</p>
          </div>
        </section>

        <section className=" mb-10 grid grid-cols-3 grid-rows-1 gap-x-5">
          <div className="col-span-2 rounded">
            <hr className="my-5" />
            <h1 className="mb-5 font-playfair text-3xl font-bold">About</h1>
            <p className="pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              maximus eros diam. Nam id massa tempor mauris dapibus bibendum. Ut
              nisi tellus, rhoncus non nunc ornare, fringilla maximus velit. Ut
              at lectus porta, pellentesque ex ac, pulvinar neque. Duis blandit
              molestie felis, non vulputate nibh placerat sit amet. Fusce vel
              massa eros. Nulla facilisi. Cras finibus rhoncus risus in
              tristique. Nam efficitur, arcu vel vehicula posuere, neque lorem
              convallis leo, nec pulvinar sapien orci vitae ante. Suspendisse
              potenti. Morbi a risus neque. Curabitur in diam nec augue pulvinar
              lobortis. Nam fermentum nunc in molestie consequat. Proin volutpat
              ante mi, commodo malesuada orci consectetur at. Integer nec mi
              pellentesque, dignissim lorem in, pulvinar tortor.
            </p>
            <p className="pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              maximus eros diam. Nam id massa tempor mauris dapibus bibendum. Ut
              nisi tellus, rhoncus non nunc ornare, fringilla maximus velit. Ut
              at lectus porta, pellentesque ex ac, pulvinar neque. Duis blandit
              molestie felis, non vulputate nibh placerat sit amet. Fusce vel
              massa eros. Nulla facilisi. Cras finibus rhoncus risus in
              tristique. Nam efficitur, arcu vel vehicula posuere, neque lorem
              convallis leo, nec pulvinar sapien orci vitae ante. Suspendisse
              potenti. Morbi a risus neque. Curabitur in diam nec augue pulvinar
              lobortis. Nam fermentum nunc in molestie consequat. Proin volutpat
              ante mi, commodo malesuada orci consectetur at. Integer nec mi
              pellentesque, dignissim lorem in, pulvinar tortor.
            </p>
            <p className="pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              maximus eros diam. Nam id massa tempor mauris dapibus bibendum. Ut
              nisi tellus, rhoncus non nunc ornare, fringilla maximus velit. Ut
              at lectus porta, pellentesque ex ac, pulvinar neque. Duis blandit
              molestie felis, non vulputate nibh placerat sit amet. Fusce vel
              massa eros. Nulla facilisi. Cras finibus rhoncus risus in
              tristique. Nam efficitur, arcu vel vehicula posuere, neque lorem
              convallis leo, nec pulvinar sapien orci vitae ante. Suspendisse
              potenti. Morbi a risus neque. Curabitur in diam nec augue pulvinar
              lobortis. Nam fermentum nunc in molestie consequat. Proin volutpat
              ante mi, commodo malesuada orci consectetur at. Integer nec mi
              pellentesque, dignissim lorem in, pulvinar tortor.
            </p>
            <p className="pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              maximus eros diam. Nam id massa tempor mauris dapibus bibendum. Ut
              nisi tellus, rhoncus non nunc ornare, fringilla maximus velit. Ut
              at lectus porta, pellentesque ex ac, pulvinar neque. Duis blandit
              molestie felis, non vulputate nibh placerat sit amet. Fusce vel
              massa eros. Nulla facilisi. Cras finibus rhoncus risus in
              tristique. Nam efficitur, arcu vel vehicula posuere, neque lorem
              convallis leo, nec pulvinar sapien orci vitae ante. Suspendisse
              potenti. Morbi a risus neque. Curabitur in diam nec augue pulvinar
              lobortis. Nam fermentum nunc in molestie consequat. Proin volutpat
              ante mi, commodo malesuada orci consectetur at. Integer nec mi
              pellentesque, dignissim lorem in, pulvinar tortor.
            </p>
            <p className="pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              maximus eros diam. Nam id massa tempor mauris dapibus bibendum. Ut
              nisi tellus, rhoncus non nunc ornare, fringilla maximus velit. Ut
              at lectus porta, pellentesque ex ac, pulvinar neque. Duis blandit
              molestie felis, non vulputate nibh placerat sit amet. Fusce vel
              massa eros. Nulla facilisi. Cras finibus rhoncus risus in
              tristique. Nam efficitur, arcu vel vehicula posuere, neque lorem
              convallis leo, nec pulvinar sapien orci vitae ante. Suspendisse
              potenti. Morbi a risus neque. Curabitur in diam nec augue pulvinar
              lobortis. Nam fermentum nunc in molestie consequat. Proin volutpat
              ante mi, commodo malesuada orci consectetur at. Integer nec mi
              pellentesque, dignissim lorem in, pulvinar tortor.
            </p>
            <p className="pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              maximus eros diam. Nam id massa tempor mauris dapibus bibendum. Ut
              nisi tellus, rhoncus non nunc ornare, fringilla maximus velit. Ut
              at lectus porta, pellentesque ex ac, pulvinar neque. Duis blandit
              molestie felis, non vulputate nibh placerat sit amet. Fusce vel
              massa eros. Nulla facilisi. Cras finibus rhoncus risus in
              tristique. Nam efficitur, arcu vel vehicula posuere, neque lorem
              convallis leo, nec pulvinar sapien orci vitae ante. Suspendisse
              potenti. Morbi a risus neque. Curabitur in diam nec augue pulvinar
              lobortis. Nam fermentum nunc in molestie consequat. Proin volutpat
              ante mi, commodo malesuada orci consectetur at. Integer nec mi
              pellentesque, dignissim lorem in, pulvinar tortor.
            </p>
            <p className="pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              maximus eros diam. Nam id massa tempor mauris dapibus bibendum. Ut
              nisi tellus, rhoncus non nunc ornare, fringilla maximus velit. Ut
              at lectus porta, pellentesque ex ac, pulvinar neque. Duis blandit
              molestie felis, non vulputate nibh placerat sit amet. Fusce vel
              massa eros. Nulla facilisi. Cras finibus rhoncus risus in
              tristique. Nam efficitur, arcu vel vehicula posuere, neque lorem
              convallis leo, nec pulvinar sapien orci vitae ante. Suspendisse
              potenti. Morbi a risus neque. Curabitur in diam nec augue pulvinar
              lobortis. Nam fermentum nunc in molestie consequat. Proin volutpat
              ante mi, commodo malesuada orci consectetur at. Integer nec mi
              pellentesque, dignissim lorem in, pulvinar tortor.
            </p>
            <p className="pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              maximus eros diam. Nam id massa tempor mauris dapibus bibendum. Ut
              nisi tellus, rhoncus non nunc ornare, fringilla maximus velit. Ut
              at lectus porta, pellentesque ex ac, pulvinar neque. Duis blandit
              molestie felis, non vulputate nibh placerat sit amet. Fusce vel
              massa eros. Nulla facilisi. Cras finibus rhoncus risus in
              tristique. Nam efficitur, arcu vel vehicula posuere, neque lorem
              convallis leo, nec pulvinar sapien orci vitae ante. Suspendisse
              potenti. Morbi a risus neque. Curabitur in diam nec augue pulvinar
              lobortis. Nam fermentum nunc in molestie consequat. Proin volutpat
              ante mi, commodo malesuada orci consectetur at. Integer nec mi
              pellentesque, dignissim lorem in, pulvinar tortor.
            </p>
          </div>
          <div className="top-0 mt-5">
            <div className="sticky top-5 col-span-1 flex flex-col items-center justify-start">
              <div className="w-full bg-gray-100 p-5">
                <h3 className="mb-2 font-playfair text-xl font-bold italic text-gray-800">
                  About
                </h3>
                <p>
                  Customize this section to tell your visitors a little bit
                  about your publication, writers, content, or something else
                  entirely. Totally up to you.
                </p>
              </div>
              <div className="mt-5 w-full border p-5">
                <h3 className="font-playfair text-xl font-bold text-gray-800">
                  Search
                </h3>
                <p className="text-normal text-gray-500">
                  Search the name of any articles
                </p>
                <hr className="mt-2 mb-4" />
                <input className="rounded border py-2 px-5" type="text" />
                <button className="ml-2 rounded border py-2 px-5 text-gray-700">
                  Search
                </button>
              </div>
              <div className="mt-5 w-full rounded p-5">
                <h3 className="mb-5 font-playfair text-xl font-bold italic text-gray-800">
                  Archives
                </h3>
                <ul className="text-normal text-blue-700 underline">
                  <li>March 2022</li>
                  <li>February 2022</li>
                  <li>January 2022</li>
                  <li>December 2022</li>
                </ul>
              </div>
              <div className="mt-5 w-full rounded p-5">
                <h3 className="mb-5 font-playfair text-xl font-bold italic text-gray-800">
                  Contact
                </h3>
                <ul className="text-normal text-blue-700 underline">
                  <li>Github</li>
                  <li>Instagram</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
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
      {/* <div className="bg-white font-poppins">
        <div className="bg-gray-800 opacity-90 fixed top-0 left-0 right-0">
          <ul className="flex flex-row items-center justify-between px-40 py-3">
            <li>
              <p className="text-sm font-bold text-white">
                NASDAQ (<span className="text-green-200">+0,24%</span>)
              </p>
            </li>
            <li>
              <p className="text-sm font-bold text-white">
                NYSE (<span className="text-red-200">-0,11%</span>)
              </p>
            </li>
            <li>
              <p className="text-sm font-bold text-white">
                SSE (<span className="text-green-200">+0,36%</span>)
              </p>
            </li>
            <li>
              <p className="text-sm font-bold text-white">
                CAC 40 (<span className="text-green-200">+0,09%</span>)
              </p>
            </li>
            <li>
              <p className="text-sm font-bold text-white">
                JPX (<span className="text-red-200">-0,32%</span>)
              </p>
            </li>
          </ul>
        </div>
        <div className="my-24 mx-32 rounded-lg border p-8 shadow-inner">
          <nav className="flex flex-row items-end justify-between">
            <h1 className="text-5xl font-bold text-gray-800">Market Watcher</h1>
            <ul className="flex flex-row items-center space-x-10">
              <Link href="/">
                <li className="cursor-pointer">HOME</li>
              </Link>
              <Link href="/about">
                <li className="cursor-pointer">ABOUT</li>
              </Link>
              <li className="cursor-pointer rounded-lg bg-emerald-300 px-5 py-2 font-normal duration-300 ease-in-out hover:bg-emerald-500	hover:text-white">
                LOG IN
              </li>
            </ul>
          </nav>
          <hr className="my-5" />
          <main>
            <div className="mb-5 flex items-center justify-between rounded-lg bg-emerald-300 p-5">
              <p className="text-xl font-light">
                <span className="italic">Read</span>, <span className="italic">Learn</span> and <span className="italic">Cultivate</span>
              </p>
              <Link href="/">
                <button className="cursor-pointer rounded-lg bg-white px-5 py-2 shadow-inner duration-300 ease-in-out hover:bg-emerald-500 hover:text-white">
                  Learn More
                </button>
              </Link>
            </div>
            <hr className="my-5" />
            <article className="mb-5 flex flex-row items-center justify-between rounded-lg bg-red-100 hover:cursor-pointer">
              <div className="my-10 px-10">
                <h2 className="text-xl font-bold text-gray-700">
                  How is the war affecting the defense industry ?
                </h2>
                <p className="mb-3 text-gray-600">
                  by <span className="cursor-pointer">Adrien Dumont</span>
                </p>
                <p className="mb-5 text-xs text-gray-800">
                  15/03/2022, 22:13:31
                </p>
                <ul className="flex flex-row space-x-5">
                  <li>
                    <p className="font-semiBold cursor-pointer rounded-lg bg-red-200 px-2 py-1 text-sm text-gray-700 duration-300 ease-in-out	hover:bg-red-300">
                      #Finance
                    </p>
                  </li>
                  <li>
                    <p className="font-semiBold cursor-pointer rounded-lg bg-red-200 px-2 py-1 text-sm text-gray-700 duration-300 ease-in-out	hover:bg-red-300">
                      #Geopolitics
                    </p>
                  </li>
                </ul>
              </div>
              <img
                className="h-full w-60 rounded-lg object-cover"
                src="https://www.aljazeera.com/wp-content/uploads/2022/02/000_323Y8VE.jpg?resize=770%2C513"
                alt=""
              />
            </article>
            <article className="mb-5 flex flex-row items-center justify-between rounded-lg bg-red-100 hover:cursor-pointer">
              <div className="my-10 px-10">
                <h2 className="text-xl font-bold text-gray-700">
                  How is the war affecting the defense industry ?
                </h2>
                <p className="mb-3 text-gray-600">
                  by <span className="cursor-pointer">Adrien Dumont</span>
                </p>
                <p className="mb-5 text-xs text-gray-800">
                  15/03/2022, 22:13:31
                </p>
                <ul className="flex flex-row space-x-5">
                  <li>
                    <p className="font-semiBold cursor-pointer rounded-lg bg-red-200 px-2 py-1 text-sm text-gray-700 duration-300 ease-in-out	hover:bg-red-300">
                      #Finance
                    </p>
                  </li>
                  <li>
                    <p className="font-semiBold cursor-pointer rounded-lg bg-red-200 px-2 py-1 text-sm text-gray-700 duration-300 ease-in-out	hover:bg-red-300">
                      #Geopolitics
                    </p>
                  </li>
                </ul>
              </div>
              <img
                className="h-full w-60 rounded-lg object-cover"
                src="https://www.aljazeera.com/wp-content/uploads/2022/02/000_323Y8VE.jpg?resize=770%2C513"
                alt=""
              />
            </article>
            <article className="mb-5 flex flex-row items-center justify-between rounded-lg bg-red-100 hover:cursor-pointer">
              <div className="my-10 px-10">
                <h2 className="text-xl font-bold text-gray-700">
                  How is the war affecting the defense industry ?
                </h2>
                <p className="mb-3 text-gray-600">
                  by <span className="cursor-pointer">Adrien Dumont</span>
                </p>
                <p className="mb-5 text-xs text-gray-800">
                  15/03/2022, 22:13:31
                </p>
                <ul className="flex flex-row space-x-5">
                  <li>
                    <p className="font-semiBold cursor-pointer rounded-lg bg-red-200 px-2 py-1 text-sm text-gray-700 duration-300 ease-in-out	hover:bg-red-300">
                      #Finance
                    </p>
                  </li>
                  <li>
                    <p className="font-semiBold cursor-pointer rounded-lg bg-red-200 px-2 py-1 text-sm text-gray-700 duration-300 ease-in-out	hover:bg-red-300">
                      #Geopolitics
                    </p>
                  </li>
                </ul>
              </div>
              <img
                className="h-full w-60 rounded-lg object-cover"
                src="https://www.aljazeera.com/wp-content/uploads/2022/02/000_323Y8VE.jpg?resize=770%2C513"
                alt=""
              />
            </article>
            <article className="mb-5 flex flex-row items-center justify-between rounded-lg bg-red-100 hover:cursor-pointer">
              <div className="my-10 px-10">
                <h2 className="text-xl font-bold text-gray-700">
                  How is the war affecting the defense industry ?
                </h2>
                <p className="mb-3 text-gray-600">
                  by <span className="cursor-pointer">Adrien Dumont</span>
                </p>
                <p className="mb-5 text-xs text-gray-800">
                  15/03/2022, 22:13:31
                </p>
                <ul className="flex flex-row space-x-5">
                  <li>
                    <p className="font-semiBold cursor-pointer rounded-lg bg-red-200 px-2 py-1 text-sm text-gray-700 duration-300 ease-in-out	hover:bg-red-300">
                      #Finance
                    </p>
                  </li>
                  <li>
                    <p className="font-semiBold cursor-pointer rounded-lg bg-red-200 px-2 py-1 text-sm text-gray-700 duration-300 ease-in-out	hover:bg-red-300">
                      #Geopolitics
                    </p>
                  </li>
                </ul>
              </div>
              <img
                className="h-full w-60 rounded-lg object-cover"
                src="https://www.aljazeera.com/wp-content/uploads/2022/02/000_323Y8VE.jpg?resize=770%2C513"
                alt=""
              />
            </article>
          </main>
        </div>
      </div>
    </> */}
    </>
    // <div className="mx-auto max-w-7xl">
    //   <CookieConsent
    //     location="bottom"
    //     buttonText="Accept"
    //     cookieName="myAwesomeCookieName2"
    //     style={{ background: '#2B373B' }}
    //     buttonStyle={{ color: '#4e503b', fontSize: '15px' }}
    //     expires={150}
    //   >
    //     Agree with the{' '}
    //     <a className="underline" href="/">
    //       terms of conditions
    //     </a>
    //   </CookieConsent>

    //   <Head>
    //     <title>Market Watcher - Financial News</title>
    //     <link rel="icon" href="/favicon.ico" />

    //   </Head>
    //   <Script
    //       async
    //       src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8424057093962720"
    //       crossOrigin="anonymous"
    //     ></Script>
    //   <Header />
    //   <div className="flex items-center justify-between bg-gray-800 py-10 text-white lg:py-5">
    //     <div className="flex flex-row items-center px-5">
    //       <h2 className="max-w-xl text-xl">
    //         NASDAQ{' '}
    //         <span className="decapration-black text-green-400 decoration-4">
    //           (+0.46%)
    //         </span>
    //       </h2>
    //       <h2 className="mx-5 max-w-xl font-semiBold text-xl">
    //         CAC 40{' '}
    //         <span className="decapration-black text-green-400 decoration-4">
    //           (+0.24%)
    //         </span>
    //       </h2>
    //       <div className="flex flex-col items-center justify-center">
    //         <p className="text-base font-bold">Top shares</p>
    //         <ul className="flex flex-col items-center justify-center text-sm">
    //           <li>
    //             Thales{' '}
    //             <span className="decapration-black text-green-400 decoration-4">
    //               (+0.35%)
    //             </span>
    //           </li>
    //           <li>
    //             Dassault{' '}
    //             <span className="decapration-black text-green-400 decoration-4">
    //               (+0.19%)
    //             </span>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="mx-5 flex flex-col items-center justify-center">
    //         <p className="text-base font-bold">Flop shares</p>
    //         <ul className="flex flex-col items-center justify-center text-sm">
    //           <li>
    //             Hermes{' '}
    //             <span className="decapration-black text-red-400 decoration-4">
    //               (-0.21%)
    //             </span>
    //           </li>
    //           <li>
    //             Alstrom{' '}
    //             <span className="decapration-black text-red-400 decoration-4">
    //               (-0.11%)
    //             </span>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="flex items-center justify-between border-y border-black bg-yellow-400 py-10 lg:py-5">
    //     <div className="space-y-5 px-10">
    //       <h1 className="max-w-xl font-serif text-5xl">
    //         Stay informed on financial news with{' '}
    //         <span className="decpration-black underline decoration-4">
    //           Market Watcher
    //         </span>
    //       </h1>
    //       <h2 className="max-w-xl">
    //         We try to provide you with a maximum of daily information regarding
    //         international finance and economics issues.{'  '}
    //         <Link href="/about">
    //           <span className="cursor-pointer text-blue-900 underline">
    //             (Discover our project)
    //           </span>
    //         </Link>
    //       </h2>
    //     </div>
    //     <img
    //       className="hidden h-32 px-10 md:inline-flex lg:h-32"
    //       src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Medium_icon.svg/1280px-Medium_icon.svg.png"
    //       alt=""
    //     />
    //   </div>
    //   {/* t */}
    //   <h1 className="px-10 py-5 text-xl font-bold md:px-10">
    //     Latest Articles{' '}
    //     <Link href="/articles">
    //       <span className="cursor-pointer text-xs font-normal text-blue-800 underline	">
    //         (See all)
    //       </span>
    //     </Link>
    //   </h1>
    //   <hr />
    //   <div className="gris-cols-1 grid gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
    //     {tutorials.map((post) => {
    //       return (
    //         <Link key={post._id} href={`/post/${post.slug.current}`}>
    //           <div className="group cursor-pointer overflow-hidden rounded-lg border">
    //             <img
    //               className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
    //               src={urlFor(post.mainImage).url()!}
    //               alt=""
    //             />
    //             <div className="flex justify-between bg-white p-5">
    //               <div>
    //                 <p className="text-lg font-bold">{post.title}</p>
    //                 <p className="text-xs"> by {post.author.name}</p>
    //                 <p className="pt-2 text-xs text-gray-500">
    //                   {new Date(post._createdAt).toLocaleString([], {
    //                     year: 'numeric',
    //                     month: 'numeric',
    //                     day: 'numeric',
    //                     hour: '2-digit',
    //                     minute: '2-digit',
    //                   })}
    //                 </p>
    //                 <hr className="my-2" />
    //                 <div>
    //                   {post.categories
    //                     ? post.categories.map((element) => {
    //                         return (
    //                           <span
    //                             className={
    //                               element.title === 'Tutorial'
    //                                 ? 'mr-2 mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-gray-500'
    //                                 : element.title === 'Ukraine'
    //                                 ? 'mr-2 mt-2 inline-block rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-gray-500'
    //                                 : element.title === 'Crypto' || 'Finance'
    //                                 ? 'mr-2 mt-2 inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-gray-500'
    //                                 : 'mr-2 mt-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-500'
    //                             }
    //                           >
    //                             #{element.title}
    //                           </span>
    //                         )
    //                       })
    //                     : console.log('hello')}
    //                 </div>
    //               </div>
    //               <img
    //                 className="h-12 w-12 rounded-full"
    //                 src={urlFor(post.author.image).url()!}
    //                 alt=""
    //               />
    //             </div>
    //           </div>
    //         </Link>
    //       )
    //     })}
    //   </div>
    //   <h1 className="py-5 text-xl font-bold">Tutorials</h1>
    //   <hr />
    //   <div className="gris-cols-1 grid gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
    //     {tutorials.map((post) => {
    //       return (
    //         <Link key={post._id} href={`/post/${post.slug.current}`}>
    //           <div className="group cursor-pointer overflow-hidden rounded-lg border">
    //             <img
    //               className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
    //               src={urlFor(post.mainImage).url()!}
    //               alt=""
    //             />
    //             <div className="flex justify-between bg-white p-5">
    //               <div>
    //                 <p className="text-lg font-bold">{post.title}</p>
    //                 <p className="text-xs"> by <Link href="/authors">{post.author.name}</Link></p>
    //                 <p className="pt-2 text-xs text-gray-500">
    //                   {new Date(post._createdAt).toLocaleString([], {
    //                     year: 'numeric',
    //                     month: 'numeric',
    //                     day: 'numeric',
    //                     hour: '2-digit',
    //                     minute: '2-digit',
    //                   })}
    //                 </p>
    //                 <hr className="my-2" />
    //                 <div>
    //                   {post.categories
    //                     ? post.categories.map((element) => {
    //                         return (
    //                           <span
    //                             className={
    //                               element.title === 'Tutorial'
    //                                 ? 'mr-2 inline-block rounded-full bg-green-200 px-3 py-1 text-sm font-semibold text-gray-700'
    //                                 : 'mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700'
    //                             }
    //                           >
    //                             #{element.title}
    //                           </span>
    //                         )
    //                       })
    //                     : console.log('hello')}
    //                 </div>
    //               </div>
    //               <img
    //                 className="h-12 w-12 rounded-full"
    //                 src={urlFor(post.author.image).url()!}
    //                 alt=""
    //               />
    //             </div>
    //           </div>
    //         </Link>
    //       )
    //     })}
    //   </div>
    //   <hr />
    //   <Footer />
    // </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    _createdAt,
    title,
    categories[]->{
    title
  },
    author->{
    name,
    image
  },
  description,
  mainImage,
  slug,
  
    
  }`

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}
