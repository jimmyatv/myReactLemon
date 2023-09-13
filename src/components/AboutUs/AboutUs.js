import React from 'react';
import './AboutUs.css';
import card1 from '../../assets/card1.svg'
import card2 from '../../assets/card2.svg'
import card3 from '../../assets/card3.svg'

const AboutUs = () => {
    return (
        <div className='container'>
            <div className='row w-50 m-auto text-center'>
                <h2 className='col-xs-12 pt-5'>About us</h2>
                <p className='col-xs-12'>
                    The very start of Lemonjuice Capital in timeshares in 2013 was from realization that the aggregate value of timeshares is a fraction of the real estate value. Our focus was on distressed and struggling resorts and timeshares.
                </p>
                <p className='col-xs-12'>
                    What we learned is that many are failing because of poor management and aggressive sales that took advantage of aging owners. We are different.
                </p>
            </div>
            {/* Cards */}
            <div className='cards row text-center py-4'>
                <div className='col-md-4 col-sm-4 col-xs-12 container py-5'>
                    <img src={card1} alt='' />
                    <h5 className='py-3'>Full Service</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel efficitur ex, id dignissim ipsum. Aliquam erat volutpat.</p>
                </div>
                <div className='col-md-4 col-sm-4 col-xs-12 container py-5'>
                    <img src={card2} alt='' />
                    <h5 className='py-3'>Strategic planning</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel efficitur ex, id dignissim ipsum. Aliquam erat volutpat.</p>
                </div>
                <div className='col-md-4 col-sm-4 col-xs-12 container py-5'>
                    <img src={card3} alt='' />
                    <h5 className='py-3'>Competence</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel efficitur ex, id dignissim ipsum. Aliquam erat volutpat.</p>
                </div>
            </div>
        </div>
    )
};

export default AboutUs;