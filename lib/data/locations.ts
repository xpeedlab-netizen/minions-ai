export interface GeoMarket {
  city: string;
  state: string;
  region: string;
  primaryTrades: string[];
  weatherTrigger: string;
  avgEmergencyTicket: string;
  slug: string;
}

export const TOP_GEO_MARKETS: GeoMarket[] = [
  {
    city: "Dallas-Fort Worth",
    state: "TX",
    region: "Sunbelt",
    primaryTrades: ["HVAC", "Plumbing", "Roofing"],
    weatherTrigger: "105°F summer heat waves & hail storms",
    avgEmergencyTicket: "$2,800 - $4,500",
    slug: "dallas-fort-worth-tx"
  },
  {
    city: "Houston",
    state: "TX",
    region: "Gulf Coast",
    primaryTrades: ["HVAC", "Plumbing", "Electrical"],
    weatherTrigger: "High humidity AC strain & tropical storm pipe backups",
    avgEmergencyTicket: "$2,500 - $4,200",
    slug: "houston-tx"
  },
  {
    city: "Austin",
    state: "TX",
    region: "Central Texas",
    primaryTrades: ["HVAC", "Pest Control", "Plumbing"],
    weatherTrigger: "Rapid residential expansion & peak summer cooling demand",
    avgEmergencyTicket: "$2,600 - $3,800",
    slug: "austin-tx"
  },
  {
    city: "Phoenix",
    state: "AZ",
    region: "Southwest",
    primaryTrades: ["HVAC", "Pest Control", "Electrical"],
    weatherTrigger: "115°F extreme desert heat compressor failures",
    avgEmergencyTicket: "$3,200 - $5,000",
    slug: "phoenix-az"
  },
  {
    city: "Columbus",
    state: "OH",
    region: "Midwest",
    primaryTrades: ["Plumbing", "HVAC", "Pest Control"],
    weatherTrigger: "Sub-zero winter freezes & urgent furnace lockouts",
    avgEmergencyTicket: "$2,200 - $3,600",
    slug: "columbus-oh"
  },
  {
    city: "Chicago",
    state: "IL",
    region: "Midwest",
    primaryTrades: ["Plumbing", "HVAC", "Electrical"],
    weatherTrigger: "Deep polar freeze pipe bursts & radiator emergencies",
    avgEmergencyTicket: "$2,700 - $4,400",
    slug: "chicago-il"
  },
  {
    city: "Atlanta",
    state: "GA",
    region: "Southeast",
    primaryTrades: ["HVAC", "Pest Control", "Roofing"],
    weatherTrigger: "High pollen humidity & spring termite swarms",
    avgEmergencyTicket: "$2,400 - $3,900",
    slug: "atlanta-ga"
  },
  {
    city: "Tampa-Orlando",
    state: "FL",
    region: "Florida",
    primaryTrades: ["HVAC", "Roofing", "Pest Control"],
    weatherTrigger: "Year-round AC load, humidity mold & hurricane storm surge",
    avgEmergencyTicket: "$2,900 - $4,800",
    slug: "tampa-orlando-fl"
  }
];
