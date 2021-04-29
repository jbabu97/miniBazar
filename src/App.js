import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddAdmin from "./components/Dashboard/AddAdmin/AddAdmin";
import AddReview from "./components/Dashboard/AddReview/AddReview";
import AddService from "./components/Dashboard/AddService/AddService";
import BookList from "./components/Dashboard/BookingList/BookList";
import BookService from "./components/Dashboard/BookService/BookService";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import ManageService from "./components/Dashboard/ManageService/ManageService";
import OrderList from "./components/Dashboard/OrderList/OrderList";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute";
import StatusUpdate from "./components/Dashboard/StatusUpdate/StatusUpdate";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/admin'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/addService'>
              <AddService></AddService>
            </Route>
            <Route path='/bookingList'>
              <BookList></BookList>
            </Route>
            {/* <PrivateRoute path='/bookService'>
              <Dashboard></Dashboard>
            </PrivateRoute> */}
            <Route path='/orderList'>
              <OrderList></OrderList>
            </Route>
            <Route path='/addAdmin'>
              <AddAdmin></AddAdmin>
            </Route>
            <Route path='/addReview'>
              <AddReview></AddReview>
            </Route>
            <Route path='/manageService'>
              <ManageService></ManageService>
            </Route>
            <PrivateRoute path='/bookService/:bookingId'>
              <BookService></BookService>
            </PrivateRoute>
            <PrivateRoute path='/update/:bookingId'>
              <StatusUpdate></StatusUpdate>
            </PrivateRoute>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='*'>
              <h2 style={{textAlign: 'center', color: 'red', marginTop: '100px'}}>Not Found</h2>
            </Route>
          </Switch>
        </Router>
    </UserContext.Provider>
  );
}

export default App;
