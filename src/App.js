import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddAdmin from "./components/Dashboard/AddAdmin/AddAdmin";
import AddReview from "./components/Dashboard/AddReview/AddReview";
import AddService from "./components/Dashboard/AddService/AddService";
import BookingForm from "./components/Dashboard/BookingForm/BookingForm";
import BookList from "./components/Dashboard/BookingList/BookList";
import BookingPreview from "./components/Dashboard/BookingPreview/BookingPreview";
import BookService from "./components/Dashboard/BookService/BookService";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import ManageService from "./components/Dashboard/ManageService/ManageService";
import OrderList from "./components/Dashboard/OrderList/OrderList";
import Home from "./components/Home/Home/Home";
import Review from "./components/Home/Review/Review";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <h3>Email: {loggedInUser.email}</h3>
          <Switch>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route path='/admin'>
              <Dashboard></Dashboard>
            </Route>
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
            <PrivateRoute path='/bookingForm'>
              <BookingForm></BookingForm>
            </PrivateRoute>
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
            <Route path='/bookService/:serviceId'>
              <BookingPreview></BookingPreview>
            </Route>
            {/* <Route path='/appointment'>
              <Appointment></Appointment>
            </Route>
            <PrivateRoute path='/dashboard/appointment'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path='/patientsList'>
              <PatientsList></PatientsList>
            </Route>
            <Route path='/addDoctor'>
              <AddDoctor></AddDoctor>
            </Route>
            
            <Route path='/blog'>
              <Blog></Blog>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <PrivateRoute path='/appointment'>
              <AppointmentForm></AppointmentForm>
            </PrivateRoute> */}
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
