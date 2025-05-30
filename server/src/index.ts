// Minimal Express server with TypeScript and ESM
import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 4000;

// Root endpoint returns a simple hello message
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from server');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
