import axios from 'axios';
import { useQuery } from 'react-query';

export const fetchPosts = () => axios.get('https://jsonplaceholder.typicode.com/posts?userId=1').then(data=>data.data);

export const usePosts = (onSuccess:any, onError:any) =>{
    return useQuery(
        'posts',
        fetchPosts,
        {
            // cacheTime: 5000 ,
            // staleTime: 30000,
            // refetchOnWindowFocus: true //Default true
            // refetchOnMount: true // Default true
            // refetchInterval: 2000
            onSuccess,
            onError,
            select:(data)=>data.data
        }
    );
}