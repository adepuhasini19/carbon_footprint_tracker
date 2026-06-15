
import { CarbonService } from '../src/services/carbonService';

describe('Carbon Tracker Core Calculations', () => {
  const service = new CarbonService();

  it('should accurately calculate baseline daily footprint for clean inputs', () => {
    const sampleInput = {
      commuteDistanceKm: 20,
      commuteVehicleType: 'electric' as const,
      dietType: 'vegan' as const,
      monthlyElectricityKwh: 150
    };

    const output = service.calculateImpact(sampleInput);

    // Transport: 20 * 0.05 = 1.00
    // Diet: 1.50
    // Housing: (150 * 0.45) / 30 = 2.25
    // Total expected = 4.75
    expect(output.totalDailyKgCO2e).toBe(4.75);
    expect(output.breakdown.transport).toBe(1.00);
    expect(output.breakdown.diet).toBe(1.50);
  });
});