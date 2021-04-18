import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AddService from './Components/AddService/AddService';
import AddReview from './Components/AddReview/AddReview';
import AddAdmin from './Components/AddAdmin/AddAdmin';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Orders from './Components/Dashboard/Orders/Orders';
import ManageService from './Components/ManageService/ManageService';



export const UserContext = createContext();

function App() {


  const [loggedInUser, setLoggedInUser] = useState({});



  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route  exact path='/'>
        <Home></Home>
        </Route>
        <Route  exact path='/login'>
        <Login></Login>
        </Route>
        <PrivateRoute   path='/dashboard/:id'>
        <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute   path='/dashboard'>
        <Dashboard></Dashboard>
        </PrivateRoute>
        <Route  path='/addService'>
        <AddService></AddService>
        </Route>
        <Route  path='/manageService'>
        <ManageService></ManageService>
        </Route>
        <Route  path='/addReview'>
        <AddReview></AddReview>
        </Route>

        
        <PrivateRoute path='/admins'>
        <AddAdmin></AddAdmin>
        </PrivateRoute>
        <PrivateRoute path='/orders'>
        <Orders></Orders>
        </PrivateRoute>
        
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
