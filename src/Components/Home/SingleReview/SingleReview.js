import React from 'react';
import './SingleReview.css'

const SingleReview = ({review}) => {
    return (
        <div className="card col-md-3 shadow-sm p-3 d-flex align-items-center">
            <img style={{borderRadius:'50px'}} className="mx-3 " src={review.imageURL} alt="" width="100"/>
            <div className=" text-center   p-3">
                
                <div>
                    <h6 style={{color:'orange', fontWeight:'bold'}} className="">{review.name}</h6>
                    <p className="m-0">{review.from}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-center">{review.quote}</p>
            </div>
       </div>
    );
};

export default SingleReview;