'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import axios from 'axios'; // If using axios
import { useEffect, useState } from 'react';

import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquare, Plus } from 'lucide-react';
interface Plant {
  _id: string;
  name: string;
  species: string;
}

export function PlantList() {
  // State for holding plant data
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch plant data from the backend API
  useEffect(() => {
    const fetchPlants = async () => {
      try {
        axios.defaults.baseURL = 'http://localhost:5000/api';

        // Get token from localStorage (adjust based on your auth setup)
        const token = localStorage.getItem('token');
        if (!token) {
          setError('Authentication token is missing');
          return;
        }

        const response = await axios.get('/plants', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'x-auth-token': token,
          },
        });

        setPlants(response.data); // Assuming the response data is an array of plants
      } catch (error) {
        setError('Failed to fetch plants');
      } finally {
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  if (loading) {
    return <div>Loading plants...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="w-80 p-6 bg-gray-50 dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700">
      <Button className="w-full bg-olive hover:bg-olive-russet text-white mb-6">
        <Plus className="w-4 h-4 mr-2" />
        Add New Plant
      </Button>

      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg dark:text-white">Plant List</h3>
        <Button variant="link" className="text-clay p-0">
          see all
        </Button>
      </div>

      <ScrollArea className="h-[calc(100vh-250px)]">
        <div className="space-y-4 pr-4">
          {plants.map(plant => (
            <Card key={plant._id} className="p-4">
              {' '}
              {/* Assuming plants have an _id */}
              <div className="flex items-center gap-3 mb-2">
                <Avatar className="w-10 h-10">
                  <AvatarImage
                    src={`/placeholder.svg?text=${plant.name[0]}`}
                    alt={plant.name}
                  />
                  <AvatarFallback>{plant.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium dark:text-white">
                    {plant.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {plant.species}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Health</span>
                  <span className="font-medium text-spring-soge"></span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
      <div className="mt-6">
        <Button className="w-full bg-emerald-100 hover:bg-emerald-200 text-emerald-800">
          <MessageSquare className="w-4 h-4 mr-2" />
          Chat with PlantBot
        </Button>
      </div>
    </div>
  );
}
