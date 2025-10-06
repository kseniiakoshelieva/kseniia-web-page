"use server";

import { transporter } from "@/config/nodemailer";

const email = process.env.EMAIL;

type formDataInputs = {
  name: string;
  subject: string;
  message: string;
};

export const sendEmail = async (formData: formDataInputs) => {
  const mailOptions = {
    from: email,
    to: email,
    subject: `${formData.subject}`,
    html: `<h2>Hello from Kseniia web page</h2>
    <p>Name: ${formData.name}</p>
    <p>Subject: ${formData.subject}</p>
    <p>Message: ${formData.message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
};
