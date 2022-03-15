import { sanityClient, urlFor } from '../../sanity'
import { Post } from '../../typings'
import Header from '../../components/Header'
import { GetStaticProps } from 'next'
// import PortableText from 'react-portable-text'
import Link from 'next/link'
import Head from 'next/head'
import BlockContent from '@sanity/block-content-to-react';

interface Props {
  post: Post
}

function Post({ post }: Props) {
  return (
    <>
    <div>
      <Head>
        <title>Market Watcher - Financial News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header className="mx-auto flex max-w-7xl justify-between p-5">
          <div className="flex items-center space-x-5">
            <Link href="/">
              <img
                className="h-10 w-44 cursor-pointer object-cover"
                src="../logo-market-watcher.png"
                alt=""
              />
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
            <h3 className="duration-2000 cursor-pointer rounded-full border border-green-600 px-4 py-1 transition-transform ease-in-out hover:bg-green-600 hover:text-white">
              Get Started
            </h3>
          </div>
        </header>
        <img
          className="h-40 w-full object-cover"
          src={urlFor(post.mainImage).url()!}
          alt=""
        />
        <article className="m-auto max-w-3xl p-5">
          <h1 className="mt-10 mb-3 text-3xl">{post.title}</h1>
          <h2 className="mb-2 text-xl font-light text-gray-500">
            {post.description}
          </h2>
          <div className="flex items-center space-x-2">
            <img
              className="h-10 w-10 rounded-full"
              src={urlFor(post.author.image).url()!}
              alt=""
            />
            <p className="font-extralight">
              Blog post by{' '}
              <span className="text-green-600">{post.author.name}</span> -
              Published at {new Date(post._createdAt).toLocaleString()}
            </p>
          </div>
          <div className="my-50">
            <BlockContent
              blocks={post.body}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            />
            <p className="my-5 text-base body-text">
            {/* <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECTID}
              content={post.body}
              serializers={{
                h1: (props: any) => (
                  <h1 className="my-5 text-2xl font-bold" {...props}></h1>
                ),
                h2: (props: any) => (
                  <h1 className="my-5 text-xl font-bold" {...props}></h1>
                ),
                li: ({ children }: any) => (
                  <li className="ml-4 list-disc">{children}</li>
                ),
                link: ({ children, href }: any) => (
                  <a href={href} className="text-blue-500 hover:underline">
                    {children}
                  </a>
                ),
              }}
            /> */}
            </p>
          </div>
        </article>
      </main>
    </div>
    <style jsx>{`
    p:empty{
      height:20px !important;
    }
  `}</style>
  </>
  )
}

export default Post

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
        _id,
        slug{
            current
        }
    }`
  const posts = await sanityClient.fetch(query)

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `
    *[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        author->{
            name,
            image
        },
        'comments':*[
            _type == 'comment' &&
            post._ref == ^.id &&
            approved == true
        ],
        description,
        mainImage,
        slug,
        body
    }
    `
  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  })

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
    revalidate: 60,
  }
}
