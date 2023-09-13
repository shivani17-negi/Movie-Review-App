const nodemailer = require('nodemailer');
exports.generateOTP = (otp_length = 6) =>{



let OTP = "";
for (let i = 1; i <= otp_length; i++) {
  const randomVal = Math.round(Math.random() * 9);
  OTP += randomVal;
}

return OTP;
};

exports.generateMailTransporter = () =>
  nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "0f375cc13b73c1", /// user: "0f375cc13b73c1",
      pass: "6331871320fa30", //// pass: "6331871320fa30"
    },
  });

  
