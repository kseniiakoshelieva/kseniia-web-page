import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.NODEMAILER_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: email,
    pass: pass,
  },
});
