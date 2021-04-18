import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = ({service}) => {
    console.log(service._id)
    return (
        <div className="col-md-4 text-center ">
        <div className={'d-flex justify-content-center  shadow p-3 mb-5 bg-body rounded '}>
            <div className="mr-3 p-2 service-img ">
                <img style={{ height:'80px', borderRadius:'80px'}} src={service.imageURL} alt=""/>
            </div>
            <div className='p-2'>
                <h6>{service.name}</h6>
                
                <small>{service.description}</small>
                <br/>
                <small>$ {service.price}</small>
            </div>
           
        </div>
        <div className='pb-5'>
        <Link to={`/dashboard/${service._id}`}><button  style={{borderRadius:'10px'}} className="btn-dark w-100 service-btn ">Purchase A Service </button></Link>
        </div>
    </div>
    );
};

export default ServiceCard;