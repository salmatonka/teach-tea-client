import React from 'react';
import Footer from '../Shares/Footer/Footer';
import Header from '../Shares/Header/Header';
import {Outlet} from "react-router-dom";
const Main = () => {
    return (
        
        <div>
            <Header />
            <Outlet />
            <Footer/>
        </div>
        
    );
};

export default Main;