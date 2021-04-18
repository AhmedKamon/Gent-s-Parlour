import React from 'react';
import player from '../../../images/haidM.jpg'
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className='m-2 pb-2 row d-flex align-items-center'>
            <div className='col-md-6'>
                <img style={{height:'600px'}} src={player} alt="" className='img-fluid' />
            </div>
            <div className='col-md-4 offset-md-1'>
                <h1 style={{color:'#201b22'}}>Your New Parlour  <br/> Is Here</h1>
                <h5 style={{color:'#201b22'}}>Need a perfect Hair Cut ? <br/> Your are in a perfect place to <span style={{color:'orange', fontWeight:'bold'}}>HIRE</span> Barber. <br/> We have all kind of Gent's Parlour services .  We got fancy barber, Organic Massage more and more.</h5>
                <button style={{color:'orange'}} className="btn btn-dark">Hire Now</button>
            </div>
        </main>
    );
};

export default HeaderMain;