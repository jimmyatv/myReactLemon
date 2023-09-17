import React from 'react';
import './Villas.css';
import lemon from '../../assets/lemon.svg'
import img3 from '../../assets/img3.png'

const Villas = () => {
    return (
        <div className='villas'>
            <img src={img3} alt='' />
            <div className='row villas-stats'>
                <div className='col-md-4 col-sm-4 col-xs-12'>
                    <img src={lemon} alt='' />
                    <div>
                        <p>50</p>
                        <p>SEPARATE VILLAS</p>
                    </div>
                </div>

                <div className='col-md-4 col-sm-4 col-xs-12'>
                    <img src={lemon} alt='' />
                    <div>
                        <p>10</p>
                        <p>YEARS OF EXPERIENCE</p>
                    </div>
                </div>

                <div className='col-md-4 col-sm-4 col-xs-12'>
                    <img src={lemon} alt='' />
                    <div>
                        <p>85</p>
                        <p>customers</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Villas;