"use strict";
const { contentType } = require("express/lib/response");
const nodemailer = require("nodemailer");

//EXAMPLE FROM NODEMAILER

// async..await is not allowed in global scope, must use a wrapper
// async function main() {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: testAccount.user, // generated ethereal user
//       pass: testAccount.pass, // generated ethereal password
//     },
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);

//text is plain text body
//html is html body

async function sendEmail(recipient, title, message) {
    return new Promise((resolve, reject) => {
      var transporter = nodemailer.createTransport({
        service: "",//Add in when making email,
        port: 587,
        secure: false,
        auth: {
          user: "",//Add in when making email address,
          pass: ""//Add in when making email address
        }
      });
  
      var settings = {
        from: '',//Add in sender email name
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

// content or message = {

//     Hi there "user.fname" "user.lname" Your booking for "user.dog.name" is confirmed with the following details


//     booking.name
//     booking.day 
//     booking.session

//     Please arrive 10 minutes before the start of the session so we can check "user.dog.name" in 


// }

sendEmail (user.email, "Confirmation of your Doggy Daycare Appointment", content, message);