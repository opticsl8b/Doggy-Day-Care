const router = require('express').Router();
const { Booking, User, Dog, Activity } = require('../../models');

const nodemailer = require('nodemailer');

async function sendEmail(recipient, title, message) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      port: 587,
      secure: false,
      auth: {
        user: 'dogwardbounddaycare@gmail.com',
        pass: 'Doggy829@@',
      },
    });

    var settings = {
      from: '"The Team" <dogwardbounddaycare@gmail.com>',
      to: recipient,
      subject: title,
      html: message,
    };
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

//Creates Msg Text for Email
function createMsg(first_name, last_name, dog_name, daysession, service) {
  var message = `

    Hi there ${first_name} ${last_name}!
    <br> 
    <br>
    Your booking for ${dog_name} is confirmed with the following details:    
    <br>
    <br>
    Time & Day: ${daysession}
    <br>
    Appointment Type: ${service}
    <br>
    <br>
    Please arrive 10 minutes before the start of the session so we can check ${dog_name} in.
    <br>
    <br>
    We look forward to seeing you! `;

  return message;
}

// Create new booking
router.post('/', async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user_id);
    const dog = await Dog.findByPk(req.body.dog);

    const bookingData = await Booking.create({
      session_datetime: req.body.daysession,
      session_name: req.body.service,
      user_id: req.session.user_id,
    });

    const activity = await Activity.create({
      dog_id: req.body.dog,
      booking_id: bookingData.getId(),
    });

    res.status(200).json(bookingData);
    const emailtxt = createMsg(
      user.first_name,
      user.last_name,
      dog.dog_name,
      req.body.daysession,
      req.body.service
    );

    console.log(emailtxt);
    sendEmail(
      user.email,
      'Confirmation of your Doggy Daycare Appointment',
      emailtxt
    );
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Delete a Dog
router.delete('/:id', async (req, res) => {
  try {
    const bookingData = await Booking.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(bookingData);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
