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
  let tutorials = posts;
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
        Agree with the{' '}
        <a className="underline" href="/">
          terms of conditions
        </a>
      </CookieConsent>

      <Head>
        <title>Market Watcher - Financial News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <Header />
          <img
          className="h-40 w-full object-cover"
          src="https://wallpapercave.com/wp/wp3134771.jpg"
          alt=""
        />
          <hr />
      <h1 className="py-5 text-xl font-semibold text-gray-700">
        All the articles
          </h1>
          <div className="flex items-center flex-start pb-5">
            <div className="flex border-gray-200 border-2 rounded-3xl">
                <input type="text" className="px-4 py-2 w-80 rounded-3xl" placeholder="Search..." disabled/>
                <button className="flex items-center justify-center px-4 border-l">
                    <svg className="w-6 h-6 text-gray-200" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                    </svg>
                </button>
            </div>
</div>
      <hr className="py-2" />
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
                    <p className="pt-2 text-xs text-gray-500">
                      {new Date(post._createdAt).toLocaleString([], {
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                    <hr className="my-2" />
                    <div>
                      {post.categories?post.categories.map(element => {
                        return (
                          <span className={element.title==='Tutorial'?'mr-2 inline-block rounded-full bg-green-200 px-3 py-1 text-sm font-semibold text-gray-700':'mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700'}>
                            #{element.title}
                          </span>
                        )
                      }):console.log('hello')}
                    </div>
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
