import {useEffect,useState} from 'react'

export function useFetch(url){
    const [post,setPost]=useState({});
    async function getDetails(){
        const response=await fetch(url);
        const json=await response.json();
        setPost(json);
    }
    useEffect(()=>{
        getDetails();
    },[url])

    return {
        post
    }
}