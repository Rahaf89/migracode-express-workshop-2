const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const boom = require("@hapi/boom");
const utils = require("./utils");

app.get("/bookings", function(req, res) {
  utils.getAllBookings();
  console.log(utils.getAllBookings());

  res.send(utils.getAllBookings());
});

app.get("/bookings/:bookingId", function(req, res) {
  const bookingId = parseInt(req.params.bookingId);

  // console.log("holaaaaaaa", utils.getBooking(req.params.bookingId));
  if (utils.checkBookingExists(bookingId)) {
    const booking = utils.getBooking(bookingId);
    console.log(booking);
    res.send(booking);
  } else {
    res.status(404).send(boom.notFound("wrong data"));
  }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
