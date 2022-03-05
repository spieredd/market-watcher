import {sanityClient,urlFor} from '../../sanity'
import { Post } from '../../typings';
import Header from '../../components/Header'
import { GetStaticProps } from 'next';
import PortableText from 'react-portable-text';

interface Props{
    post: Post;
}

function Post({ post }: Props) {
  return (
      <main>
          <Header />
          <img className="w-full h-40 object-cover" src={urlFor(post.mainImage)} alt="" />
          <article className="max-w-3xl m-auto p-5">
              <h1 className="text-3xl mt-10 mb-3">{post.title}</h1>
              <h2 className="text-xl font-light text-gray-500 mb-2">
                  {post.description}
              </h2>
              <div className="flex items-center space-x-2">
                  <img
                      className="h-10 w-10 rounded-full"
                      src={urlFor(post.author.image).url()!}
                      alt=""
                  />
                  <p className="font-extralight">
                      Blog post by{" "}
                      <span className="text-green-600">{post.author.name}</span> - 
                      Published at {new Date(post._createdAt).toLocaleString()}
                  </p>
              </div>
              <div className="my-10">
                  <PortableText
                      className=''
                      dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                      projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                      content={post.body}
                      serializers={{
                          h1: (props: any) => {
                              <h1 className="text-2xl font-bold my-5" {...props} />
                          },
                          h2: (props: any) => {
                              <h1 className="text-xl font-bold my-5" {...props} />
                          },
                          li: ({ children }: any) => {
                              <li className="ml-4 list-disc">{children}</li>
                          },
                          link: ({ href, children }: any) => {
                              <a href={href} className="text-blue-500 hover:underline">
                                  {children}
                              </a>
                          },
                      }}
                  />
              </div>
          </article>
    </main>
  )
}

export default Post

export const getStaticPaths = async () => {
    const query = `*[_type == "post"]{
        _id,
        slug{
            current
        }
    }`;
    const posts = await sanityClient.fetch(query);

    const paths = posts.map((post:Post) => ({
        params: {
            slug: post.slug.current
        }
    }))

    return {
        paths,
        fallback: "blocking"
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
    const post = await sanityClient.fetch(query,{
        slug: params?.slug
    });

    if (!post) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            post,
        },
        revalidate:60,
    }
}