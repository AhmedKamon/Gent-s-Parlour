import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import GoogleButton from 'react-google-button'
import { Button, Form } from 'react-bootstrap';
import Navbar from '../Home/Navbar/Navbar';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}



const Login = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  console.log(loggedInUser.displayName)


  var provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogle = () => {
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        setLoggedInUser(user)
        history.replace(from);
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }
  return (
    <section>
      <div>
        <div>
          <Navbar></Navbar>
        </div>
        <div style={{ width: '40%', margin: "auto", padding: '0%', marginTop: '5%', boxShadow: "10px 10px 40px gray", backgroundColor: "white", borderRadius: "20px" }}>
          <Form style={{ margin: '20px', padding: '10px' }}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
  </Button>
          </Form>

          <GoogleButton style={{ marginLeft: "100px" }} className="mt-5"
            onClick={handleGoogle}
          />
        </div>
      </div>


    </section>
  );
};

export default Login;