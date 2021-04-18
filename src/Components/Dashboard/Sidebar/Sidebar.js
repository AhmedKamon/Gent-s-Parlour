import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css'


const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    console.log(isAdmin)

    useEffect(() => {
        fetch('https://calm-island-96781.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])


    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">

                <li>
                    <Link to="/" className="text-white">
                        <span>Home</span>
                    </Link>
                </li>

                <li>
                    <Link to="/orders" className="text-white">
                        <span>Orders</span>
                    </Link>
                </li>
                <li>
                        <Link to="/addReview" className="text-white">
                            <span>Add Review</span>
                        </Link>
                    </li>

                {isAdmin && <div>
                    <li>
                        <Link to="/admins" className="text-white">
                            <span>Admins</span>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/addService" className="text-white">
                            <span>Add Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageService" className="text-white">
                            <span>Manage Services</span>
                        </Link>
                    </li>
                </div>}
            </ul>
            <div>
                <Link to="/" className="text-white"> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;