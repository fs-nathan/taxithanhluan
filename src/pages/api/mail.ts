import {
  sendEmail,
  generateBookingHTMLEmailContent,
} from '../../utils/mail/mailjet';

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    // Process a POST request
    const book = req.body;
    const response = await sendEmail(
      '',
      '',
      '',
      '',
      generateBookingHTMLEmailContent(book)
    );
    res.status(200).json({ response });
  } else {
    res.status(200).json({ message: 'Mail API works!' });
  }
}
