require("dotenv").config();
const nodeMail = require("nodemailer")

const mainMail = async (name, email, message) => {

    const transporter = await nodeMail.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    const mailOption = {
      from: email,
      to: process.env.EMAIL,
      subject: "User Request",
      html: `<h2>You got a message from<br>
      Email : ${email}<br>
      Name: ${name}<br>
      Message: ${message}</h2>`,
    };
    
      return await transporter.sendMail(mailOption);
      
  }

  module.exports = mainMail

  // 5078fe707d7a8ce14d6a66338bcffa6c-us14
  // 857aabec3b