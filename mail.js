const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// File Upload Configuration
const upload = multer({ dest: 'uploads/' });

// Route for PCB Form Submission
app.post('/send-email', upload.single('pcb_file'), async (req, res) => {
  const { pcb_info, email, contact } = req.body;
  const pcbFile = req.file;

  // Nodemailer Transporter Setup
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '', // Your Gmail
      pass: '' // Your Gmail password or App Password
    }
  });

  // Email Content
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: '', // Replace with your email
    subject: 'New PCB Design Request',
    text: `
      New PCB Design Request:
      - Basic Info: ${pcb_info}
      - Email: ${email}
      - Contact: ${contact}
    `,
    attachments: [
      {
        filename: pcbFile.originalname,
        path: pcbFile.path
      }
    ]
  };

  // Send Email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email.', error });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
