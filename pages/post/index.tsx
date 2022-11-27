import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react'
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { fetchPosts, usePosts } from '../../hooks/queryHooks';


export default function Posts() {
    const { data:posts, refetch }: { data: any, refetch: any } = useQuery({ queryKey: ['posts'], queryFn: fetchPosts, initialData:[] });
    console.log(posts);
    
    return (
        <div className="text-center">
            <h1 className="text-4xl my-4">
                Posts
                <button onClick={refetch} className='text-2xl bg-green-200 border rounded-lg px-1 py-0 ml-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-refresh-ccw inline-block mr-1"><polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg>
                    refetch
                </button>
            </h1>
            <Link className="text-2xl bg-green-300 border rounded-xl px-5 py-2" href={"/"}>Home</Link>
            <div>
                <ul className="w-full text-sm font-medium text-gray-900 rounded-lg mt-10">
                    {
                        posts.map((post: any) =>
                            <li className="py-2 px-4 w-full" key={post.id}>
                                <Link href={`/post/${post.id}`} >{post.title}</Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>

    )
}

export const getStaticProps: GetStaticProps = async () => {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['posts'], fetchPosts);
    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    }
}
