'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { EnvironmentalCondition, Task } from '@/types/plant';
import axios from 'axios';
import { CheckSquare, Droplets, Sun, Wind } from 'lucide-react';
import { useEffect, useState } from 'react';

// Sample data for plant growth and environmental conditions (kept static)
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

// Dashboard component
export function Dashboard() {
  const [plantCount, setPlantCount] = useState<number>(0);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch the plant count and tasks when the component is mounted
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Configure axios with base URL and default headers
        axios.defaults.baseURL = 'http://localhost:5000/api';

        // Get token from localStorage (adjust based on your auth setup)
        const token = localStorage.getItem('token');

        // Fetch plant count
        const plantCountResponse = await axios.get('/profile/noOfPlants', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'x-auth-token': token,
          },
        });

        // Fetch weekly tasks
        const tasksResponse = await axios.get('/profile/weeklyTasks', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'x-auth-token': token,
          },
        });

        // More robust data extraction
        const count = plantCountResponse.data?.totalPlants ?? 0;
        const fetchedTasks = tasksResponse.data ?? [];

        setPlantCount(count);
        setTasks(fetchedTasks);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data');
        setIsLoading(false);
        setPlantCount(0);
        setTasks([]);
      }
    };

    fetchData();
  }, []);

  // Error and loading states
  if (isLoading) {
    return <div>Loading plant data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Total Plants Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Plants</CardTitle>
            <Droplets className="w-4 h-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{plantCount}</div>
          </CardContent>
        </Card>

        {/* Healthy Plants Card */}
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
      </div>

      {/* Task List and Plant Growth */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Tasks for This Week Card */}
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
                    <span className="text-sm">
                      {task.plantType + ' '}
                      {/* Iterate over task.tasks array and display each task */}
                      {task.tasks.map((subTask, index) => (
                        <span key={index} className="block">
                          {subTask}
                        </span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Plant Growth Chart Card */}
      </div>

      {/* Environmental Conditions Card */}
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
