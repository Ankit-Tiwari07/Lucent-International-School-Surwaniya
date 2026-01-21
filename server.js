const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname)));

app.post('/api/enquiry', async (req, res) => {
  const name = typeof req.body.name === 'string' ? req.body.name.trim() : '';
  const email = typeof req.body.email === 'string' ? req.body.email.trim() : '';
  const phone = typeof req.body.phone === 'string' ? req.body.phone.trim() : '';
  const className = typeof req.body.class === 'string' ? req.body.class.trim() : '';
  const message = typeof req.body.message === 'string' ? req.body.message.trim() : '';

  if (!name || !email || !phone) {
    return res.status(400).json({ success: false, message: 'Please fill in all required fields.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
  }

  const schoolEmail = '360lucentinternationalschool@gmail.com';

  const bodyLines = [];
  bodyLines.push('You have received a new admission enquiry from the website.');
  bodyLines.push('');
  bodyLines.push('Name: ' + name);
  bodyLines.push('Email: ' + email);
  bodyLines.push('Phone: ' + phone);
  bodyLines.push('Class Interested In: ' + (className || 'Not specified'));
  bodyLines.push('');
  bodyLines.push('Message:');
  bodyLines.push(message || 'No message provided.');
  bodyLines.push('');
  bodyLines.push('Sent on: ' + new Date().toISOString());

  const textBody = bodyLines.join('\n');

  const transportUser = process.env.EMAIL_USER;
  const transportPass = process.env.EMAIL_PASS;

  if (!transportUser || !transportPass) {
    return res.status(500).json({
      success: false,
      message: 'Email service is not configured. Please contact the school directly.'
    });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: transportUser,
      pass: transportPass
    }
  });

  const mailOptions = {
    from: 'Lucent International School <' + transportUser + '>',
    to: schoolEmail,
    subject: 'New Admission Enquiry from Website',
    text: textBody,
    replyTo: email
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Thank you for your enquiry! We will contact you soon.' });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Unable to send your enquiry at the moment. Please try again later.'
    });
  }
});

app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
});

