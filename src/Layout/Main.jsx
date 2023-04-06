import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import './Main.css'

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='main-page-content'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;