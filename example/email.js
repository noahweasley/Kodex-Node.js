require("dotenv").config();
const nodemailer = require("nodemailer");

console.log(process.env.SENDER);
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDER,
    pass: process.env.PASSWORD,
  },
});

const title = "Ping Pong";
const message = "Achalugoo Chidinma, how are you doing today?";

const options = {
  from: process.env.SENDER,
  to: "veelydia958@gmail.com",
  subject: title,
  text: message,
};

transporter.sendMail(options, (err, info) => {
  if (err) {
    console.error("Email not sent:", err);
  } else {
    console.log("Email sent:", info.response);
  }
});
