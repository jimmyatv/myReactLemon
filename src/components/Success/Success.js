import React from 'react';
import './Success.css';
import img2 from '../../assets/img2.png'
import lemon from '../../assets/lemon.svg'

const Success = () => {
  return (
    <div className='success overflow-hidden'>
        <div className='row'>
            <div className='success-img col-md-6 col-sm-6 col-xs-12'>
                <img src={img2} alt=''  />
            </div>
            <div className='success-des col-md-6 col-sm-6 col-xs-12 py-5'>
                <img src={lemon} alt='' />
                <div className='py-5'>
                    <h2>Success stories</h2>
                    <p className='py-3'>Your resort has unique circumstances and we’ll approach it with a fresh perspective. Our experienced team of professionals will provide the highest measure of owner services, financial management, rental revenue management, and technology optimization. Lets us focus on the details while you focus on your memories! Additionally, Lemonjuice Solutions is uniquely qualified to help you through the complex situations of sunset clauses, aging ownership, and high owner delinquencies. Professional and objective expertise to assess the situation will avoid costly wheel-spinning.</p>
                    <button className='my-btn'>Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Success;