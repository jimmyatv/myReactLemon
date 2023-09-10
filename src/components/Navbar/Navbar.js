import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import header from '../../assets/header.png'
import { FaLocationDot, FaPhone, FaRegEnvelope, FaRegEye } from "react-icons/fa6";

const Navbar = () => {



    return (
        <div className='navBarMain'>
            
            <div className='container'>
                {/* TOP MENU */}
                <div className='topMenu row'>
                    <div className='col-md-3'>
                        <img className='logoImg' src={logo} alt='' />
                    </div>
                    <div className='col-md-3'>
                        <FaLocationDot style={{ color: 'var(--primary)', fontSize: '22px', marginRight: '5px' }} />
                        <span>7041 Grand national drive, suite 230, Orlando, FL</span>
                    </div>
                    <div className='col-md-3'>
                        <FaPhone style={{ color: 'var(--primary)', fontSize: '22px', marginRight: '5px' }} />
                        <span>7041 Grand national drive, suite 230, Orlando, FL</span>
                    </div>
                    <div className='col-md-3'>
                        <FaRegEnvelope style={{ color: 'var(--primary)', fontSize: '22px', marginRight: '5px' }} />
                        <span>7041 Grand national drive, suite 230, Orlando, FL</span>
                    </div>
                </div>
            </div>
            <hr />
            <div className='container'>
                {/* NAV BAR */}
                <div className='navBar'>
                    <img src='logo' alt='' />
                    <ul className='navBarMenu'>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>Covid-19</a>
                        </li>
                        <li>
                            <a href='#'>Services</a>
                        </li>
                        <li>
                            <a href='#'>News</a>
                        </li>

                        <li>
                            <a href='#'>About</a>
                        </li>
                        <li>
                            <a href='#'>Properties</a>
                        </li>
                        <li>
                            <a href='#'>Owners</a>
                        </li>
                        <li>
                            <a href='#'><FaRegEye style={{ color: 'var(--primary)', fontSize: '22px' }} /></a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* HEADER PHOTO */}
            <div className='relative'>
                <img src={header} alt='' />
                <div className='header-photo text-center'>
                    <h1>Reimagining Resorts A Fresh Perspective</h1>
                    <button className='my-btn'>Learn More</button>
                </div>
            </div>
            {/* PARTNERS */}
            <div className='partners'>
                <div className='text-center'>
                    <h4>“We partner with owners and boards to provide a truly customized approach.”</h4>
                    <p className='text-uppercase'>- Alexander Krakovsky, ceo</p>
                </div>
            </div>
        </div>
    )
};

export default Navbar;