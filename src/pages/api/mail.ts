export default function handler(req: any, res: any) {
  if (req.method === 'POST') {
    // Process a POST request
    res.status(200).json({ message: 'Mail API works!' });
  } else {
    res.status(200).json({ message: 'Mail API works!' });
  }
}
