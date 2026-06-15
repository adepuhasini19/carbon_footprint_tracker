
export interface CarbonInput {
  commuteDistanceKm: number;
  commuteVehicleType: 'electric' | 'petrol' | 'diesel' | 'public_transit';
  dietType: 'vegan' | 'vegetarian' | 'omnivore';
  monthlyElectricityKwh: number;
}

export class CarbonService {
  public calculateImpact(data: CarbonInput) {
    // Standard CO2e conversion coefficients (kg CO2e per unit)
    const transportFactors = { electric: 0.05, petrol: 0.18, diesel: 0.17, public_transit: 0.03 };
    const dietFactors = { vegan: 1.5, vegetarian: 2.5, omnivore: 4.5 };
    const electricityFactor = 0.45; // Grid average kg CO2e per kWh

    const transportEmissions = data.commuteDistanceKm * transportFactors[data.commuteVehicleType];
    const dietEmissions = dietFactors[data.dietType];
    const housingEmissions = (data.monthlyElectricityKwh * electricityFactor) / 30; // Daily average

    const totalDailyEmissions = transportEmissions + dietEmissions + housingEmissions;

    return {
      totalDailyKgCO2e: parseFloat(totalDailyEmissions.toFixed(2)),
      breakdown: {
        transport: parseFloat(transportEmissions.toFixed(2)),
        diet: parseFloat(dietEmissions.toFixed(2)),
        housing: parseFloat(housingEmissions.toFixed(2))
      },
      insights: this.generateInsights(data, transportEmissions, dietEmissions)
    };
  }

  private generateInsights(data: CarbonInput, transport: number, diet: number): string[] {
    const recommendations: string[] = [];
    if (transport > 5) recommendations.push("Consider switching to public transit or carpooling to reduce transport footprint.");
    if (data.dietType === 'omnivore') recommendations.push("Swapping just one meat dish for a plant-based alternative per day cuts food emissions by up to 30%.");
    if (data.monthlyElectricityKwh > 300) recommendations.push("Unplug vampire electronics when idle to trim baseline electricity consumption.");
    return recommendations;
  }
}