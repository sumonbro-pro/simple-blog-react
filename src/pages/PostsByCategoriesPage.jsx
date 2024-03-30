import React, {useEffect, useState} from 'react';
import MasterLayout from "../layout/MasterLayout.jsx";
import {Link, useParams} from "react-router-dom";
import {postsByCategory} from "../apiCalls/APICalls.js";
import BlogPostPage from "./BlogPostPage.jsx";
import Loader from "../loader/Loader.jsx";

const PostsByCategoriesPage = () => {
    const {id} = useParams();
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const res = await postsByCategory(id);
            setPosts(res);
            setLoading(false);
            console.log(res);

        })()
    }, [id])

    return (
        <MasterLayout>
            <div className="container my-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {
                    loading || posts === null ? <Loader/> : posts.map((post, index) => {
                        const {img, id, title, short} = post;
                        return (
                            <Link to={'/post/' + id} element={<BlogPostPage/>} key={index}
                                  className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={img}
                                         className="rounded-xl"/>
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{title}</h2>
                                    <p>{short}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </MasterLayout>
    );
};

export default PostsByCategoriesPage;