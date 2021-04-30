import React from "react";
import "./BookList.css";

const BookList = ({ bookingByCustomer }) => {
  return (
    <section>
      <div>
        <div className="row ml-5">
          {bookingByCustomer.map(booking => (
            <div key={booking._id} className="col-md-4">
              <div className="book_list mb-3">
                <div className="d-flex">
                  <div className="booking_photo">
                    <img
                      src={`data:image/png;base64,${booking.newBooking?.bookingService?.image?.img}`}
                      alt=""
                    />
                    <button className="status_btn">
                      {booking.status}
                    </button>
                  </div>
                </div>
                <div>
                  <h4>{booking.newBooking.bookingService?.newService?.name}</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Excepturi vitae earum saepe illo soluta fugiat?
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookList;
