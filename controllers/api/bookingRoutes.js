const router = require('express').Router();
const { Booking, User, Dog } = require('../../models');
const nodemailer = require("nodemailer");

async function sendEmail(recipient, title, message) {
    return new Promise((resolve, reject) => {
      var transporter = nodemailer.createTransport({
        service: "Gmail",
        port: 587,
        secure: false,
        auth: {
          user: "dogwardbounddaycare@gmail.com",
          pass: "Doggy829@@"
        }
      });
  
      var settings = {
        from: '"The Team" <dogwardbounddaycare@gmail.com>',
        to: recipient,
        subject: title, 
        html: message
      }
      transporter.sendMail(settings, function (error, response) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log(response);
          resolve(true);
        }
      });
    });    
}



//TODO: Add this into booking post route where response = ok
// DONT uncomment this yet dont want to flood emails
// var message = `  

//     Hi there ${user.fname} ${user.lname} Your booking for ${user.dog.name} is confirmed with the following details


//     ${booking.name}
//     ${booking.day }
//     ${booking.session}

//     Please arrive 10 minutes before the start of the session so we can check ${user.dog.name} in.

//     We look forward to seeing you! `






// Create new booking

router.post('/', async (req, res) => {

  try {  
    const user = await User.findByPk(req.session.user_id);
    const dog = await Dog.findByPk(req.body.dog);
    const bookingData = await Booking.create({
    session_datetime: req.body.daysession,
    session_name: req.body.service,
    dog_id: req.body.dog,
  });
    // DONT uncomment this yet dont want to flood emails
   //sendEmail (user.email, "Confirmation of your Doggy Daycare Appointment", message);
   }catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;


