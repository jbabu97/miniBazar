import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";

const OrderBooking = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [bookings, setBookings] = useState([]);
  const [status, setStatus] = useState();

  const loadBookings = () => {
    fetch(`https://whispering-bayou-36600.herokuapp.com/bookings`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const handleChange = (id) => {
    console.log(id);
    const statusData = document.getElementById(`status-${id}`).value;
    console.log(statusData);

    fetch(`https://whispering-bayou-36600.herokuapp.com/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: statusData }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          loadBookings();
        }
      });
  };

  return (
    <section className="row">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-9">
        <div className="ml-5">
          <h1 className="my-5">All Bookings</h1>
          <h6 className="user_name">{loggedInUser.name}</h6>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Service</th>
                <th scope="col">Payment Id</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            {
                bookings.map((booking, index) => (
                    <tr key={booking._id}>
                        <th>{index + 1}</th>
                        <td>{booking.newBooking?.name}</td>
                        <td>{booking.newBooking?.email}</td>
                        <td>{booking.newBooking?.bookingService.newService?.name}</td>
                        <td>{booking.newBooking?.paymentId}</td>
                        <td>
                        <select
                            className="custom_btn"
                            value={booking.status}
                            onChange={() => handleChange(booking._id)}
                            name="status"
                            id={`status-${booking._id}`}
                        >
                            <option value="Pending">Pending</option>
                            <option value="On Going">On Going</option>
                            <option value="Done">Done</option>
                        </select>
                        </td>
                    </tr>
                ))
            }
          </table>
        </div>
      </div>
    </section>
  );
};

export default OrderBooking;
