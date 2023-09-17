import React from 'react';
import './Cards.css';
import img4 from '../../assets/img4.png'
import {FaAngleRight} from 'react-icons/fa';

const Cards = () => {
    return (
        <div className='cards-blog py-5'>
                <div className="card" style={{width:'18rem'}}>
                    <img src={img4} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Repurpose and Restructure</h5>
                        <p className='card-date py-1'>10.04.2020</p>
                        <p className="card-text">Is this the right time to repurpose and restructure your resort? Maybe, or not. Boards must understand and consider all of their options. The COVID-19 crisis makes this analysis more critical than ever..</p>
                        <a href="#">Read more <FaAngleRight /> </a>
                    </div>
                </div>

                <div className="card" style={{width:'18rem'}}>
                    <img src={img4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Repurpose and Restructure</h5>
                            <p className='card-date py-1'>10.04.2020</p>
                            <p className="card-text">Is this the right time to repurpose and restructure your resort? Maybe, or not. Boards must understand and consider all of their options. The COVID-19 crisis makes this analysis more critical than ever..</p>
                            <a href="#">Read more <FaAngleRight /> </a>
                        </div>
                </div>

                <div className="card" style={{width:'18rem'}}>
                    <img src={img4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Repurpose and Restructure</h5>
                            <p className='card-date py-1'>10.04.2020</p>
                            <p className="card-text">Is this the right time to repurpose and restructure your resort? Maybe, or not. Boards must understand and consider all of their options. The COVID-19 crisis makes this analysis more critical than ever..</p>
                            <a href="#">Read more <FaAngleRight /> </a>
                        </div>
                </div>
        </div>
    )
};

export default Cards;