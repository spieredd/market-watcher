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
  let tutorials = posts.slice(posts.length - 3, posts.length).reverse()
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
      </Head>
      <div className="bg-white font-poppins">
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
