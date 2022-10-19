import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
const Header = () => {
    return (
        <div className='container nev-stop'>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid ">
                    <div>
                        <Link className="navbar-brand online-text fw-bolder fs-2 text-primary" to={'/'} >Explore Knowledge</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active  hoverpart" aria-current="page" to={'/'}>Home</Link>
                            <Link className="nav-link active hoverpart" to={'/statistic'}>Statistics</Link>
                            <Link className="nav-link active hoverpart"to={'/blog'}>Blog</Link>
                           
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;