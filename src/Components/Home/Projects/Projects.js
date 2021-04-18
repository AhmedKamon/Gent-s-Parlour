import React from 'react';
import project1 from '../../../images/p1.jpg'
import project2 from '../../../images/p2.jpg'
import project3 from '../../../images/p3.jpg'
import Project from '../Home/Project/Project';

const projectData = [
    { 
        name : 'PETRISSAGE HAIR CUT',
        price : '1200',
        img : project1
    },
    {
        name : 'Hot stone massage',
        price : '2200',
        img : project2
    },
    {
        name : 'ROTARY MASSAGE',
        price : '1300',
        img : project3
    }
]

const Projects = () => {
    return (
        <section  className="services-container mt-5">
            <div className="text-center">
                <h5 className='ms-5 me-5 ' style={{ backgroundColor: 'orange', padding: '1px', }}>PROJECTS</h5>
                <h2>Our Ongoing Projects</h2>
            </div>
            <div style={{border:'2px solid black', boxShadow:'5px 5px 10px gray'}} className="m-5  d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                      projectData.map(project => <Project project={project} ></Project>)  
                    }
                </div>
            </div>
        </section>
    );
};

export default Projects;