import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import logo from '../../../images/logocopy.png'
import './Navbar.css'

const Navbar = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img className='navImage' style={{width:'20%'}} src={logo} alt=""/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2  mb-lg-0 ">
        <li class="nav-item ">
          <a class="nav-link  active " aria-current="page" href="/">{loggedInUser.displayName}</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link  active " aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/admin">Admin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/dashboard">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/login">Login</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    );
};

export default Navbar;