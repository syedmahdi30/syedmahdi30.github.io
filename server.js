// server.js
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/contact', (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your_email@gmail.com',       // Replace with your Gmail
      pass: 'your_app_password'             // Replace with your app password (set up in Google Account)
    }
  });

  const mailOptions = {
    from: email,
    to: 'your_email@gmail.com',             // Your email to receive the message
    subject: `Contact Form Submission from ${firstName} ${lastName}`,
    html: `<p>${message}</p><p>Phone: ${phone}</p>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.json({ code: 500, status: "Error" });
    } else {
      console.log('Email sent: ' + info.response);
      res.json({ code: 200, status: "Success" });
    }
  });
});

app.listen(5000, () => console.log('Server running on port 5000'));