import React, {useEffect, useState} from 'react';
import MasterLayout from "../layout/MasterLayout.jsx";
import {useParams} from "react-router-dom";
import {postDetails} from "../apiCalls/APICalls.js";
import Loader from "../loader/Loader.jsx";

const BlogPostPage = () => {
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState({});
    const {id} = useParams();
    useEffect(()=> {
        (async () => {
            setLoading(true);
            const res = await postDetails(id);
            setPost(res);
            setLoading(false);
        })()
    }, [])
    console.log(post);
    return (
        post === null ? <MasterLayout/> :
        <MasterLayout>
            {loading && <Loader/>}
            <div className='container my-12'>
                <article className='w-3/4 mx-auto'>
                    <img className='text-center mx-auto' src={post['img']} alt={post.title}/>
                    <h1 className="text-center text-3xl font-bold my-12">{post.title}</h1>
                    <p className="text-justify">{post.content}</p>
                </article>
            </div>
        </MasterLayout>
    );
};

export default BlogPostPage;