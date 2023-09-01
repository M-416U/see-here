const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "see.here.tv.movie@gmail.com",
        pass: "ppswisfsatnlthic",
      },
    });

    const mailOptions = {
      from: email,
      to: "mohamedmohie764@gmail.com",
      subject: "New Report from See Here",
      html: `
      <div style="font-family: Arial, sans-serif; background-color: #f8f8f8; padding: 20px; border-radius: 5px; text-align: center;">
                    <h2 style="color: #333;">New Contact Form Submission</h2>
                    <p style="color: #555;"><strong>Name:</strong> ${name}</p>
                    <p style="color: #555;"><strong>Email:</strong> ${email}</p>
                    <div style="background-color: #fff; border-radius: 5px; padding: 15px; box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);">
                        <p style="color: #444; font-size: 16px;"><strong>Message:</strong></p>
                        <p style="color: #555;">${message}</p>
                    </div>
                    <p style="color: #888; font-size: 12px; margin-top: 15px;">This email was sent from your website's contact form.</p>
                </div>
  `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email:");
  }
});

module.exports = router;
