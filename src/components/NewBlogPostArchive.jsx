import React from 'react';
import {Link} from "react-router-dom";
import BlogPostPage from "../pages/BlogPostPage.jsx";

const NewBlogPostArchive = ({newestPosts}) => {
    return (
        <div className="container my-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {
                newestPosts.map((post, index) => {
                    const {img, id, title, short} = post;
                    return (
                        <Link to={'/post/' + id} element={<BlogPostPage/>} key={index} className="card w-96 bg-base-100 shadow-xl">
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
    );
};

export default NewBlogPostArchive;