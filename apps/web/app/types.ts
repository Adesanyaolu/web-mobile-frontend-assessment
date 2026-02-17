export type IntegrationCategory = 'origin' | 'destination';

export interface Integration {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode; 
  category: IntegrationCategory;
}

export interface SavedCombination {
  id: string;
  origin: Integration;
  destination: Integration;
}
