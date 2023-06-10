import React from 'react';
import './Topbar.css'
import { Routes, Route, Link } from 'react-router-dom';
import Cryptocurrency from './Cryptocurrency';
import Registration from './Registration';
import Login from './Login';
import Certificate from './Certificate';
import Progress from './Progress';
import Orientations from './Orientations';

const Topbar = () => {
    return (
        <div>
            <div className="App">
                <nav className="navbar navbar-dark navbar-expand-lg border-bottom fixed-top">
                    <div className="container container-fluid-sm container-fluid-md">
                        <Link className="navbar-brand " href="#" to="" >Marpu</Link>
                        <Link className="navbar-brand" href="#" to="orientation" >Orientations </Link>
                        <Link className="navbar-brand" href="#" to="progress" >Progress</Link>
                        <Link className="navbar-brand" href="#" to="certificate" >Certificate</Link>
                        <div className='align-left'>
                        <Link className="navbar-brand" href="#" to="login" >Login</Link>
                        <Link className="navbar-brand" href="#" to="register" >Register</Link>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Cryptocurrency/>} />
                    <Route path="/orientation" element={<Orientations/>} />
                    <Route path="/progress" element={<Progress/>} />
                    <Route path="/certificate" element={<Certificate/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Registration/>} />
                </Routes>
            </div>
        </div>
    );
}

export default Topbar;
