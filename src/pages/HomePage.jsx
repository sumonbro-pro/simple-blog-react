import React, {useEffect, useState} from 'react';
import MasterLayout from "../layout/MasterLayout.jsx";
import {latestPosts} from "../apiCalls/APICalls.js";
import NewBlogPostArchive from "../components/NewBlogPostArchive.jsx";
import Loader from "../loader/Loader.jsx";

const HomePage = () => {
    const [newestPosts, setNewestPosts] = useState(null);

    useEffect(() => {
        (async() => {
            const res = await latestPosts();
            setNewestPosts(res);
        })()
    }, []);

    return (
        <MasterLayout>
            {newestPosts === null ? <Loader/> : <NewBlogPostArchive newestPosts={newestPosts}/>}
        </MasterLayout>
    );
};

export default HomePage;