const nodemailer = require("nodemailer");

async function mailSender() {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: process.env.EMAIL, // sender address
    to: "", // list of receivers
    subject: "Welcome", // Subject line
    text: "", // plain text body
  });
}

mailSender().catch(console.error);
module.exports = mailSender;
