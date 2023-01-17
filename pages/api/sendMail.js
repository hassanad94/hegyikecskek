const nodemailer = require("nodemailer");

const sendEmail = (data) => {
  const { email, name, message, subject } = data;

  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "hassanad94@gmail.com",
        pass: process.env.NEXT_PUBLIC_GMAIL_APP_PW,
      },
    });

    const mail_option = {
      from: "hassanad94@gmail.com",
      to: "hassanad94@gmail.com",
      subject: `${name} érdeklődik ${subject}-(vel) kapcsolatban`,
      text: `${message} \n\n\n\n Ezen az emailon kereresztül fogsz tudni neki válaszolni ${email}`,
    };

    transporter.sendMail(mail_option, function (error, info) {
      if (error) {
        return reject({ message: error.message });
      }

      return resolve({ message: "Email Sent!" });
    });
  });
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const data = JSON.parse(req.body);

  const emailSending = await sendEmail(data)
    .then((r) => res.status(200).send({ status: true }))
    .catch((error) => res.status(500).send({ message: error.message }));
}
