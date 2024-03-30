import React, {useState, useEffect} from 'react';
import {postCatergories} from "../apiCalls/APICalls.js";
import {NavLink} from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import PostsByCategory from "../components/PostsByCategory.jsx";

const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await postCatergories();
            setCategories(res);
        })()
    }, []);
    return (
        <div className="navbar bg-base-100 shadow">
            <div className="flex-1">
                <NavLink className='btn btn-ghost text-xl' to='/' element={<HomePage/>}>রোয়ার বাংলা</NavLink>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink className='font-bold' to='/'>হোম</NavLink></li>
                    {
                        categories.map((category, index) => {
                            return (
                                <li key={index}>
                                    <NavLink className='font-bold' to={'/post-by-category/' + category.id} element={<PostsByCategory/>}>
                                        {category.name}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;