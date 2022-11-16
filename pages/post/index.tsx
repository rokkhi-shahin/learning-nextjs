import { GetServerSideProps } from 'next';
import Link from 'next/link';
import React from 'react'

export default function Posts({posts}:any) {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 className="text-4xl my-4">Posts</h1>
            <div>
            <ul className="w-full text-sm font-medium text-gray-900 rounded-lg border border-gray-200">
            {
                posts.map((post:any)=>
                <Link href={`/post/${post.id}`} key={post.id}>
                <li  className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
                    {post.title}
                </li>
                </Link>
                )
            }
            </ul>

            </div>
        </div>
        
    )
}

export const getServerSideProps:GetServerSideProps = async() =>{
    let posts:any = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => data);
    return {
        props: { posts }
    }
}
