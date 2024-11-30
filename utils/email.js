const nodemailer = require("nodemailer");

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, // Email host, e.g., smtp.gmail.com
  port: process.env.EMAIL_PORT, // Port, e.g., 587 for Gmail
  secure: false, // True for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
});

// Function to send email
const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender's email
    to, // Recipient's email
    subject, // Email subject
    text, // Email body (plain text)
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
