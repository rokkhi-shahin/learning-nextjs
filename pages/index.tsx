import Head from 'next/head'
import Image from 'next/image'
import CodeSnippet from '../public/code-snippet.png'

export default function Home() {
  return (
    <div className="py-0 px-8">
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Coder Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen px-16 flex-1 flex flex-col justify-center items-center">
        <h1 className="leading-5 text-[4rem]">
          Hunting Coder
        </h1>
        <Image placeholder="blur" className='my-10 border rounded-lg' height={300} width={600} src={CodeSnippet} alt="code-snippet" />
        <p className="text-2xl">
          A blog for hunting coders by a hunting coder
        </p>

      </main>

      <footer className="flex flex-1 justify-center items-center border-t py-8">
        Developed by<span style={{ fontWeight: 'bold', marginLeft: '5px' }}>Shahin</span>
      </footer>
    </div>
  )
}
