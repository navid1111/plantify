export interface Plant {
  name: string;
  species: string;
  progress: number;
}

export interface Task {
  id: string;
  plantType: string;
  tasks: string[];
  completed: boolean;
}

export interface EnvironmentalCondition {
  type: 'humidity' | 'light' | 'airQuality';
  value: string;
  unit?: string;
}
