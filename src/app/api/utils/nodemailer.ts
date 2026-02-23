import nodemailer, { Transporter, SendMailOptions } from "nodemailer";

const transporter: Transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.EMAIL_USER as string,
    pass: process.env.EMAIL_PASSWORD as string,
  },
});

export const mailOptions: SendMailOptions = {
  from: process.env.EMAIL_USER as string,
  to: process.env.EMAIL_USER as string,
};

export default transporter;
