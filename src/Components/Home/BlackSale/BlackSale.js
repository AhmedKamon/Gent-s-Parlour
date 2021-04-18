import React from 'react';
import './BlackSale.css'

const BlackSale = () => {
    return (
        <div style={{backgroundColor:'#939393'}} className='row  d-flex align-items-center m-3 black-sale '>
            <div className='col-md-6 '>
                <div >
                    <h2 style={{color:"white"}}>Free Premium membership <br/> on Every login <br /> <span style={{color:'orange', fontWeight:'bold'}}>Login Now</span> </h2>
                </div>
            </div>
            <div className='col-md-6 pt-5 pb-5'>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" class="form-text text-white">We'll never share your email with anyone else.</div>
  </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label text-white">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label text-white" for="exampleCheck1">Check me out</label>
  </div>
                                <button type="submit" class="btn btn-dark">LOGIN</button>
</form>
                        </div>
                    </div>
    );
};

export default BlackSale;