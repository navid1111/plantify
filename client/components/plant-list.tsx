import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Plant } from '@/types/plant';
import { MessageSquare, Plus } from 'lucide-react';

const plants: Plant[] = [
  { name: 'Aloevera', species: 'Aloe perfoliata vera', progress: 80 },
  { name: 'Tomatoes', species: 'Solanum lycopersicum', progress: 60 },
  { name: 'Janda Bolong', species: "Adanson's monstera", progress: 40 },
  { name: 'Snake Plant', species: 'Sansevieria trifasciata', progress: 90 },
  { name: 'Peace Lily', species: 'Spathiphyllum', progress: 75 },
  { name: 'Spider Plant', species: 'Chlorophytum comosum', progress: 85 },
];

export function PlantList() {
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
            <Card key={plant.name} className="p-4">
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
                  <span className="font-medium text-spring-soge">
                    {plant.progress}%
                  </span>
                </div>
                <Progress value={plant.progress} className="h-1" />
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
