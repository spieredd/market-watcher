import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { sanityClient, urlFor } from "../sanity";
import { Post } from '../typings';
import Link from 'next/link';


interface Props {
  posts: [Post]
}

const Home: NextPage = ({ posts }: Props) => {
  console.log(posts);
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
            We try to provide you with a maximum of daily  informations about economy and subjects related to it.
          </h2>
        </div>
          <img className="hidden px-10 md:inline-flex h-32 lg:h-32" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Medium_icon.svg/1280px-Medium_icon.svg.png" alt="" />
      </div>

      <div className="grid gris-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map((post) => {
          return (<Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="border rounded-lg group cursor-pointer overflow-hidden">

              <img className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" src={urlFor(post.mainImage).url()!} alt="" />
            <div className="flex justify-between p-5 bg-white">
              <div>
                <p className="text-lg font-bold">{post.title}</p>
                <p className="text-xs"> by {post.author.name}</p>
                </div>
                <img className="h-12 w-12 rounded-full" src={urlFor(post.author.image).url()!} alt="" />
            </div>
            </div>
          </Link>)
        })}
      </div>
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
    
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts
    }
  }
}