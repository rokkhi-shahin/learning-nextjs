import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { QueryClient } from 'react-query'
import CodeSnippet from '../public/code-snippet.png'

export default function Home() {
  // console.log("public env",process.env.NEXT_PUBLIC_APP_URL);
  // console.log("server env: ",process.env.APP_PORT);
  const queryClient = new QueryClient();
  console.log(queryClient.getQueryData('posts'));
  
  return (
    <div className="py-0 px-8">
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Coder Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen px-16 flex-1 flex flex-col justify-center items-center">
        <h1 className="xl:text-[4rem] text-4xl">
          Hunting Coder
        </h1>
        <Image placeholder="blur" className='mt-10 border rounded-lg' height={300} width={600} src={CodeSnippet} alt="code-snippet" />
        <Link className="my-4 text-2xl bg-green-300 border rounded-xl px-5 py-2" href={"/login"}>Login</Link>
        <Link className="my-4 text-2xl bg-green-300 border rounded-xl px-5 py-2" href={"/post"}>Posts</Link>

        <p className="xl:text-2xl text-xl">
          A blog for hunting coders by a hunting coder
        </p>

      </main>

      <footer className="flex flex-1 justify-center items-center border-t py-8">
        Developed by<span style={{ fontWeight: 'bold', marginLeft: '5px' }}>Shahin</span>
      </footer>
    </div>
  )
}
