import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import path from 'path';

import { EMAIL_PASSWORD, EMAIL_USER } from '@/data/constants';
import type { TMailData } from '@/types';

export default async function sendMail<T>(data: TMailData<T>): Promise<void> {
  const src = path.join(process.cwd(), 'src/app/api/templates');

  const transporter = nodemailer.createTransport({
    debug: true,
    logger: true,
    host: 'pixel.mxrouting.net',
    port: 465,
    secure: true,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASSWORD,
    },
  });

  const handlebarOptions = {
    viewEngine: {
      extName: '.handlebars',
      partialsDir: path.resolve(src),
      defaultLayout: false,
    },
    viewPath: path.resolve(src),
    extName: '.handlebars',
  };

  const mailOptions = {
    from: EMAIL_USER,
    to: data.to,
    subject: data.subject,
    template: data.template,
    context: data.context,
  };

  // @ts-ignore
  transporter.use('compile', hbs(handlebarOptions));

  transporter.sendMail(mailOptions);
}
