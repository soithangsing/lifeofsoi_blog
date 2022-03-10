import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const posts = [
  { title: 'How I began coding', excerpt: 'In this post, I share about how I began my coding journey.'},
  { title: 'My goals for coding', excerpt: 'In this post, I share my goals for what I want to achieve with coding'},
]

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-300">
      <Head>
        <title>Life of Soi Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className='lg:col-span-8 col-span-1'>
        {posts.map((post, index) => (
          <div>
            {post.title}
            {post.excerpt}
          </div>
        ))}
      </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home
