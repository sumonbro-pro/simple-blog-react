import React from 'react';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const MasterLayout = (props) => {
    return (
        <>
            <Header/>
            {props.children}
            <Footer/>
        </>
    );
};

export default MasterLayout;