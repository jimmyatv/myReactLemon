import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import {ImLocation2} from 'react-icons/im';
import {BiPhone} from 'react-icons/bi';
import {BsEnvelope, BsEye} from 'react-icons/bs';

const Navbar = () => {



  return (
    <div className='navBarMain container'>
        {/* TOP MENU */}
        <div className='topMenu row'>
            <div className='col-md-3'>
                <img className='logoImg' src={logo} alt=''  />
            </div>
            <div className='col-md-3'>
                <ImLocation2 style={{color:'var(--primary)', fontSize:'22px', marginRight:'5px'}} />
                <span>7041 Grand national drive, suite 230, Orlando, FL</span>
            </div>
            <div className='col-md-3'>
                <BiPhone style={{color:'var(--primary)', fontSize:'22px', marginRight:'5px'}} />
                <span>7041 Grand national drive, suite 230, Orlando, FL</span>
            </div>
            <div className='col-md-3'>
                <BsEnvelope style={{color:'var(--primary)', fontSize:'22px', marginRight:'5px'}} />
                <span>7041 Grand national drive, suite 230, Orlando, FL</span>
            </div>
        </div>
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
                    <a href='#'><BsEye style={{color:'var(--primary)', fontSize:'22px'}} /></a>
                </li>
            </ul>
            
        </div>
    </div>
  )
};

export default Navbar;