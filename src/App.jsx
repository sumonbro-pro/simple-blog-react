import React from 'react';
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewBlogPostArchive from "./components/NewBlogPostArchive.jsx";
import BlogArchivePage from "./pages/BlogArchivePage.jsx";
import BlogPostPage from "./pages/BlogPostPage.jsx";
import CategoriesPage from "./pages/CategoriesPage.jsx";
import PostsByCategoriesPage from "./pages/PostsByCategoriesPage.jsx";
import Loader from "./loader/Loader.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/categories' element={<CategoriesPage/>}/>
                <Route path='/post-by-category/:id' element={<PostsByCategoriesPage/>}/>
                <Route path='/newest-posts' element={<NewBlogPostArchive/>}/>
                <Route path='/all-posts' element={<BlogArchivePage/>}/>
                <Route path='/post/:id' element={<BlogPostPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;