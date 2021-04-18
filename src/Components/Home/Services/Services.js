import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import Man from '../../../images/man.jpg'
import Massage from '../../../images/massage.jpg'
import Care from '../../../images/care.jpg'
import './Services.css'

// const services = [
//     {
//         name: 'Cutting Hair',
//         description: 'One pro player will help you to push your rank',
//         price: 10,
//         icon: Man
//     },
//     {
//         name: 'Body Massage',
//         description: 'One pro player will help you to push your rank',
//         price: 10,
//         icon: Massage
//     },
//     {
//         name: 'Skin care',
//         description: 'One pro player will help you to push your rank',
//         price: 10,
//         icon: Care
//     }
// ]

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=> {
        fetch('https://calm-island-96781.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])


    return (
        <section className="services-container all-services  mt-5">
            <div className=" all-services  ">
            <div className="text-center">
                <h5 className='ms-5 me-5 ' style={{ backgroundColor: 'orange', padding: '1px', }}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center ">
                <div className="w-75 row mt-5 pt-5">
                    {
                        services.map(service => <ServiceCard service={service}></ServiceCard>)
                    }
                </div>
            </div>
            </div>
        </section>
    );
};

export default Services;