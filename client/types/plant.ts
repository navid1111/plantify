export interface Plant {
  name: string;
  species: string;
  progress: number;
}

export interface Task {
  id: string;
  description: string;
  completed: boolean;
}

export interface EnvironmentalCondition {
  type: 'humidity' | 'light' | 'airQuality';
  value: string;
  unit?: string;
}

