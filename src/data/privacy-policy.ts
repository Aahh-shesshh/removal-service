import {
  COMPANY_ADDRESS,
  COMPANY_INFO_EMAIL,
  COMPANY_NAME,
  SITE_URL,
} from './constants';

export const data = {
  title: 'Privacy Policy',
  description:
    'When you use our website and request quotations, it is important that you know that we respect your privacy and are committed to protecting your personal data. In this Privacy Statement we explain what data we collect and process, with what purpose, how we manage your personal data and what your rights are.',
  sections: [
    {
      title: '1. What personal data do we collect, process and why?',
      content: [
        `${SITE_URL} collects and uses your personal information to effectively match your request for a quotation with removal companies. We use this personal information for the sole purpose of matching you with removal companies. Your personal information and requirements are provided to third-party contracted partners to allow them to contact you to fulfil your request for quotations.`,
        'To provide our service we first explain in more detail how we use your personal information so that the consent you give us, which is detailed in the next paragraph, is fully and fairly informed.',
        `You give us consent to use your personal information as outlined in this privacy statement when you manually enter information about yourself on our website and submit it as a request to receive our quote finding service. This consent allows us to use your data as described in this statement of privacy policy. If you do not provide your consent by submitting your details / clicking on 'Request Quote' we will be unable to provide our quote finding service to you.`,
        `You may seek further information about the scope of the consent as well as vary or withdraw your consent as outlined under the heading “What are your rights?”`,
        `We rely on your explicit consent to process your personal data. This means that we ask you to consent to the following use of your data:`,
        `– to transfer the data to a data processor, where required, to enable a range of potential suppliers to be considered for quotation for you.`,
      ],
    },
    {
      title: '2. Who is responsible for your data?',
      content: [
        `${COMPANY_NAME} is the controller and responsible for your personal data (often referred to as, “we”, “us” or “our” in this Privacy Statement).`,
        `Address: ${COMPANY_ADDRESS}`,
        `Email: ${COMPANY_INFO_EMAIL}`,
      ],
    },
    {
      title: '3. Changes to this Privacy Statement',
      content: [
        `We occasionally update this Privacy Statement. Therefore, we advise you to read the Privacy Statement when utilising our service in order to be informed of how we protect your information.
        `,
        'This privacy statement was last updated on 15 March 2024.',
      ],
    },
  ],
};
