
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { validateCarbonInput } from './middleware/validateRequest';
import { processCalculation } from './controllers/carbonController';

const app = express();
const PORT = process.env.PORT || 3000;

// Security Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// API Route for Challenge 3 Problem Alignment
app.post('/api/v1/footprint/calculate', validateCarbonInput, processCalculation);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running securely on port ${PORT}`);
});

export default app;