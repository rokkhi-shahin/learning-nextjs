import axios from 'axios';
import { GetServerSideProps, GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react'
import { useQuery } from 'react-query';

const fetchPosts = ()=> axios.get('https://jsonplaceholder.typicode.com/posts?userId=1');

export default function Posts({posts}:any) {
    const {isLoading, data, isError, error, isFetching}: {isLoading:boolean, data:any, isError: boolean, error:any, isFetching: boolean} = useQuery('posts', fetchPosts);
    if(isLoading){
        return  <div className="text-center"><h2 className="text-3xl">Lodaing...</h2></div>
    }
    if(isError){
        return  <div className="text-center"><h2 className="text-3xl">{error.message}</h2></div>
    }
    console.log("isloading: ",isLoading,"isFetching: ",isFetching);
    
    return (
        <div className="text-center">
            <h1 className="text-4xl my-4">Posts</h1>
            <Link className="text-2xl bg-green-300 border rounded-xl px-5 py-2" href={"/"}>Home</Link>
            <div>
            <ul className="w-full text-sm font-medium text-gray-900 rounded-lg border border-gray-200 mt-10">
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

export const getStaticProps:GetStaticProps = async() =>{
    let posts:any = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        .then((response) => response.json())
        .then((data) => data);
    return {
        props: { posts },
        revalidate:10
    }
}
