import React from 'react';

const Project = ({project}) => {
    return (
        <div className="col-md-4 text-center ">
        <div className={'d-flex justify-content-center service-bg  p-3 mb-5 bg-body rounded '}>
            <div className="mr-3 p-2">
                <img style={{ height:'80px', borderRadius:'10px'}} src={project.img} alt=""/>
            </div>
            <div className='p-2'>
                <h6>{project.name}</h6>
                
                <h6> price: {project.price} $</h6>
            </div>
           
        </div>
       
    </div>
    );
};

export default Project;