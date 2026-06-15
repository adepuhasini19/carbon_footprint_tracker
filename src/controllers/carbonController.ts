import { Request, Response } from 'express';
import { CarbonService } from '../services/carbonService';

const carbonService = new CarbonService();

export const processCalculation = (req: Request, res: Response) => {
  try {
    // Computes the carbon impact payload using your calculation service rules
    const calculationResult = carbonService.calculateImpact(req.body);
    
    // Wraps inside data schema to keep integration clean and safe
    return res.status(200).json({
      status: 'success',
      data: calculationResult
    });
  } catch (error) {
    return res.status(500).json({ 
      status: 'error', 
      message: 'Internal Server Error' 
    });
  }
};