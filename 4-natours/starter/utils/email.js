const nodemailer = require('nodemailer');

const ENV = process.env;

const sendEmail = async options => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: ENV.EMAIL_HOST,
    port: ENV.EMAIL_PORT,
    auth: {
      user: ENV.EMAIL_USERNAME,
      pass: ENV.EMAIL_PASSWORD,
    },
    // Activate "less sequre app" option
  });
  // 2) Define the email options
  const mailOptions = {
    from: 'John Makyen <test@test.io>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html:
  };
  await transporter.sendMail(mailOptions);
  // 3) Actually send the email
};

module.exports = sendEmail;
