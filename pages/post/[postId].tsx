import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react'

export default function Post({ post }:any) {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 className="text-4xl my-4">Post</h1>
            <div>
                <h1 className="text-4xl">{post.id} {post.title}</h1>
                <p className="text-2xl my-10">{post.body}</p>
            </div>
        </div>

    )
}

export const getStaticPaths: GetStaticPaths = async ()=> {
    let posts: any = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => data);
    const paths = posts.map((post: any) => ({
        params: { postId: post.id.toString() },
    })).flat()
    console.log("paths");

    return {
        paths,
        fallback: false
    }
}
export const getStaticProps: GetStaticProps = async (context:any)=> {
    let { params } = context;
    let post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        .then((response) => response.json())
        .then((data) => data);
    console.log(post.title);
    return {
        // Passed to the page component as props
        props: { post },
    }
}