import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'
import Link from 'next/link'
import CookieConsent from 'react-cookie-consent'

interface Props {
  posts: [Post]
}

const Home: NextPage = ({ posts }: any) => {
  let tutorials = posts.slice(0, 3)
  return (
    <div className="mx-auto max-w-7xl">
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="myAwesomeCookieName2"
        style={{ background: '#2B373B' }}
        buttonStyle={{ color: '#4e503b', fontSize: '15px' }}
        expires={150}
      >
        Agree with the <a className="underline" href="/">terms of conditions</a>
      </CookieConsent>

      <Head>
        <title>Market Watcher - Economic News</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Header />

      <div className="flex items-center justify-between border-y border-black bg-yellow-400 py-10 lg:py-5">
        <div className="space-y-5 px-10">
          <h1 className="max-w-xl font-serif text-5xl">
            Stay informed on economic news with{' '}
            <span className="decpration-black underline decoration-4">
              Market Watcher
            </span>
          </h1>
          <h2 className="max-w-xl">
            We try to provide you with a maximum of daily informations about
            economy and subjects related to it.
          </h2>
        </div>
        <img
          className="hidden h-32 px-10 md:inline-flex lg:h-32"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Medium_icon.svg/1280px-Medium_icon.svg.png"
          alt=""
        />
      </div>
      {/* t */}
      <h1 className="py-5 text-xl font-bold">Latest Articles</h1>
      <hr />
      <div className="gris-cols-1 grid gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
        {tutorials.map((post) => {
          return (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="group cursor-pointer overflow-hidden rounded-lg border">
                <img
                  className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                  src={urlFor(post.mainImage).url()!}
                  alt=""
                />
                <div className="flex justify-between bg-white p-5">
                  <div>
                    <p className="text-lg font-bold">{post.title}</p>
                    <p className="text-xs"> by {post.author.name}</p>
                  </div>
                  <img
                    className="h-12 w-12 rounded-full"
                    src={urlFor(post.author.image).url()!}
                    alt=""
                  />
                </div>
              </div>
            </Link>
          )
        })}
      </div>
      <h1 className="py-5 text-xl font-bold">Tutorials</h1>
      <hr />
      <div className="gris-cols-1 grid gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
        {tutorials.map((post) => {
          return (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="group cursor-pointer overflow-hidden rounded-lg border">
                <img
                  className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                  src={urlFor(post.mainImage).url()!}
                  alt=""
                />
                <div className="flex justify-between bg-white p-5">
                  <div>
                    <p className="text-lg font-bold">{post.title}</p>
                    <p className="text-xs"> by {post.author.name}</p>
                  </div>
                  <img
                    className="h-12 w-12 rounded-full"
                    src={urlFor(post.author.image).url()!}
                    alt=""
                  />
                </div>
              </div>
            </Link>
          )
        })}
      </div>
      <hr />
      <h1 className="py-5 text-xl font-bold">Finance</h1>
      <hr />
      <div className="gris-cols-1 grid gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
        {tutorials.map((post) => {
          return (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="group cursor-pointer overflow-hidden rounded-lg border">
                <img
                  className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                  src={urlFor(post.mainImage).url()!}
                  alt=""
                />
                <div className="flex justify-between bg-white p-5">
                  <div>
                    <p className="text-lg font-bold">{post.title}</p>
                    <p className="text-xs"> by {post.author.name}</p>
                  </div>
                  <img
                    className="h-12 w-12 rounded-full"
                    src={urlFor(post.author.image).url()!}
                    alt=""
                  />
                </div>
              </div>
            </Link>
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author->{
    name,
    image
  },
  description,
  mainImage,
  slug
    
  }`

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}
