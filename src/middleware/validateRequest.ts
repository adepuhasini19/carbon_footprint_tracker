
import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

export const carbonInputSchema = z.object({
  commuteDistanceKm: z.number().min(0, "Distance cannot be negative").max(1000, "Distance exceeds reasonable daily limits"),
  commuteVehicleType: z.enum(['electric', 'petrol', 'diesel', 'public_transit']),
  dietType: z.enum(['vegan', 'vegetarian', 'omnivore']),
  monthlyElectricityKwh: z.number().min(0, "Electricity cannot be negative")
});

export const validateCarbonInput = (req: Request, res: Response, next: NextFunction) => {
  const result = carbonInputSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      status: 'fail',
      message: 'Validation Error',
      errors: result.error.errors.map(err => ({ field: err.path.join('.'), message: err.message }))
    });
  }
  next();
};