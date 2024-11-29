import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { EnvironmentalCondition, Task } from '@/types/plant';
import { CheckSquare, Droplets, Sun, Wind } from 'lucide-react';

const tasks: Task[] = [
  { id: '1', description: 'Water tomatoes every other day', completed: false },
  { id: '2', description: 'Prune Aloevera plants', completed: false },
  { id: '3', description: 'Check soil pH for Janda Bolong', completed: false },
  { id: '4', description: 'Harvest ripe tomatoes', completed: false },
  { id: '5', description: 'Apply organic fertilizer', completed: false },
  { id: '6', description: 'Inspect for pests on roses', completed: false },
  { id: '7', description: 'Repot overgrown succulents', completed: false },
  { id: '8', description: 'Mist orchids', completed: false },
  { id: '9', description: 'Trim hedges', completed: false },
  { id: '10', description: 'Plant new herb seeds', completed: false },
];

const plantGrowth = [
  { name: 'Tomatoes', growth: 90 },
  { name: 'Aloevera', growth: 75 },
  { name: 'Janda Bolong', growth: 60 },
  { name: 'Roses', growth: 85 },
  { name: 'Herbs', growth: 70 },
];

const environmentalConditions: EnvironmentalCondition[] = [
  { type: 'humidity', value: '65', unit: '%' },
  { type: 'light', value: '5400', unit: 'lux' },
  { type: 'airQuality', value: 'Good' },
];

export function Dashboard() {
  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Plants</CardTitle>
            <Droplets className="w-4 h-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">+2 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Healthy Plants
            </CardTitle>
            <Sun className="w-4 h-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">90% of total plants</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tasks Completed
            </CardTitle>
            <CheckSquare className="w-4 h-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24/30</div>
            <p className="text-xs text-muted-foreground">80% completion rate</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Tasks for This Week</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] pr-4">
              <ul className="space-y-4">
                {tasks.map(task => (
                  <li
                    key={task.id}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <CheckSquare className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm">{task.description}</span>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Plant Growth Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {plantGrowth.map(plant => (
                <div key={plant.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{plant.name}</span>
                    <span className="text-emerald-600 font-medium">
                      {plant.growth}%
                    </span>
                  </div>
                  <Progress value={plant.growth} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Environmental Conditions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {environmentalConditions.map(condition => (
              <div
                key={condition.type}
                className={`flex items-center gap-4 p-4 rounded-lg ${
                  condition.type === 'humidity'
                    ? 'bg-blue-50 dark:bg-blue-900/20'
                    : condition.type === 'light'
                    ? 'bg-yellow-50 dark:bg-yellow-900/20'
                    : 'bg-emerald-50 dark:bg-emerald-900/20'
                }`}
              >
                {condition.type === 'humidity' && (
                  <Droplets className="w-8 h-8 text-blue-500" />
                )}
                {condition.type === 'light' && (
                  <Sun className="w-8 h-8 text-yellow-500" />
                )}
                {condition.type === 'airQuality' && (
                  <Wind className="w-8 h-8 text-emerald-500" />
                )}
                <div>
                  <div className="text-sm font-medium text-muted-foreground">
                    {condition.type.charAt(0).toUpperCase() +
                      condition.type.slice(1)}
                  </div>
                  <div className="text-2xl font-bold">
                    {condition.value}
                    {condition.unit}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
