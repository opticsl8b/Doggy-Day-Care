//ADD ALL THIS TO THE POST ROUTE FOR MAKING A BOOKING

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


//Update Variable names as needed
var message = `  

    Hi there ${user.fname} ${user.lname} Your booking for ${user.dog.name} is confirmed with the following details


    ${booking.name}
    ${booking.day }
    ${booking.session}

    Please arrive 10 minutes before the start of the session so we can check ${user.dog.name} in.

    We look forward to seeing you! `




sendEmail (user.email, "Confirmation of your Doggy Daycare Appointment", message);