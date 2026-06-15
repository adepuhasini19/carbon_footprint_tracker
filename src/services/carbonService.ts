interface CarbonInputData {
  commuteDistanceKm: number;
  commuteVehicleType: 'petrol' | 'diesel' | 'electric' | 'hybrid' | 'public';
  dietType: 'omnivore' | 'vegetarian' | 'vegan';
  monthlyElectricityKwh: number;
}

interface CarbonCalculationResult {
  totalDailyKgCo2e: number;
  breakdown: {
    transport: number;
    diet: number;
    housing: number;
  };
}

export class CarbonService {
  public calculateImpact(input: CarbonInputData): CarbonCalculationResult {
    // 1. Calculate Transport Impact (Daily Km * Vehicle Coefficient)
    let transportCoefficient = 0.05; // default to electric
    
    switch (input.commuteVehicleType) {
      case 'petrol':
        transportCoefficient = 0.24;
        break;
      case 'diesel':
        transportCoefficient = 0.27;
        break;
      case 'hybrid':
        transportCoefficient = 0.12;
        break;
      case 'public':
        transportCoefficient = 0.08;
        break;
      case 'electric':
      default:
        transportCoefficient = 0.05;
        break;
    }
    const transportImpact = input.commuteDistanceKm * transportCoefficient;

    // 2. Calculate Dietary Impact (Static daily baseline coefficient multiplier)
    let dietImpact = 1.20; // default to vegan
    
    switch (input.dietType) {
      case 'omnivore':
        dietImpact = 3.50;
        break;
      case 'vegetarian':
        dietImpact = 2.10;
        break;
      case 'vegan':
      default:
        dietImpact = 1.20;
        break;
    }

    // 3. Calculate Housing Utilities Impact ((Monthly kWh / 30 Days) * Grid Emission Factor)
    const gridFactor = 0.85; // kg CO2e per kWh
    const housingImpact = (input.monthlyElectricityKwh / 30) * gridFactor;

    // 4. Aggregate the final scores
    const totalDailyScore = transportImpact + dietImpact + housingImpact;

    // Return the clean, expected object architecture matching your frontend safely
    return {
      totalDailyKgCo2e: totalDailyScore,
      breakdown: {
        transport: transportImpact,
        diet: dietImpact,
        housing: housingImpact
      }
    };
  }
}