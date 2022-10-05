const API_KEY = "YOUR_API_KEY";
const DOMAIN = "YOUR_DOMAIN_NAME";

const formData = require("form-data");
const Mailgun = require("mailgun.js");

const mailgun = new Mailgun(formData);
const client = mailgun.client({
  username: "api",
  key: process.env.NEXT_PUBLIC_MAILGUN_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const data = JSON.parse(req.body);

  const { email, name, message, subject } = data;

  console.log(data);

  const messageData = {
    from: "Excited User <me@samples.mailgun.org>",
    to: `${email}`,
    subject: "Hello",
    text: "Testing some Mailgun awesomeness!2",
  };

  const sendEmail = new Promise((resolve, reject) => {
    client.messages
      .create(process.env.NEXT_PUBLIC_MAILGUN_DOMAIN, messageData)
      .then((res) => {
        return resolve(res);
      })
      .catch((err) => {
        return reject(err);
      });
  });

  try {
    // const emailResponse = await sendEmail;

    res.status(200).json(emailResponse);
  } catch (error) {
    return res.json(error);
  }
}
