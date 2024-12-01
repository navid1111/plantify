import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Bell,
  CheckSquare,
  Droplets,
  FileText,
  Home,
  LineChart,
  MessageSquare,
  Plus,
  Search,
  Settings,
  ShoppingBag,
  Sun,
  User,
  Wind,
} from 'lucide-react';

export default function PlantDashboard() {
  return (
    <div className="flex h-screen bg-cream dark:bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 p-6 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
            <Droplets className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-semibold dark:text-white">
            asplant.
          </span>
        </div>

        <nav className="space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 hover:bg-emerald-50 dark:hover:bg-emerald-900"
          >
            <Home className="w-5 h-5" />
            Dashboard
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 hover:bg-emerald-50 dark:hover:bg-emerald-900"
          >
            <LineChart className="w-5 h-5" />
            Analytics
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 hover:bg-emerald-50 dark:hover:bg-emerald-900"
          >
            <FileText className="w-5 h-5" />
            Reports
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 hover:bg-emerald-50 dark:hover:bg-emerald-900"
          >
            <ShoppingBag className="w-5 h-5" />
            Store
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 hover:bg-emerald-50 dark:hover:bg-emerald-900"
          >
            <User className="w-5 h-5" />
            Profile
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 hover:bg-emerald-50 dark:hover:bg-emerald-900"
          >
            <Settings className="w-5 h-5" />
            Settings
          </Button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1 text-gray-800 dark:text-white">
              Welcome Back, Sumarti!
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Saturday, 27 Jul 2022
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Bell className="w-5 h-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Plants
              </CardTitle>
              <Droplets className="w-4 h-4 text-olive-russet" />
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
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">
                Tasks completed this week
              </p>
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
              <p className="text-xs text-muted-foreground">
                80% completion rate
              </p>
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
                  {[
                    'Water tomatoes every other day',
                    'Prune Aloevera plants',
                    'Check soil pH for Janda Bolong',
                    'Harvest ripe tomatoes',
                    'Apply organic fertilizer',
                    'Inspect for pests on roses',
                    'Repot overgrown succulents',
                    'Mist orchids',
                    'Trim hedges',
                    'Plant new herb seeds',
                  ].map((task, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <CheckSquare className="w-5 h-5 text-olive-russet" />
                      <span className="text-sm">{task}</span>
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
                {[
                  { name: 'Tomatoes', growth: 90 },
                  { name: 'Aloevera', growth: 75 },
                  { name: 'Janda Bolong', growth: 60 },
                  { name: 'Roses', growth: 85 },
                  { name: 'Herbs', growth: 70 },
                ].map(plant => (
                  <div key={plant.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{plant.name}</span>
                      <span className="text-soft-peach font-medium">
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
              <div className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Droplets className="w-8 h-8 text-blue-500" />
                <div>
                  <div className="text-sm font-medium text-muted-foreground">
                    Humidity
                  </div>
                  <div className="text-2xl font-bold">65%</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <Sun className="w-8 h-8 text-yellow-500" />
                <div>
                  <div className="text-sm font-medium text-muted-foreground">
                    Light
                  </div>
                  <div className="text-2xl font-bold">5400 lux</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                <Wind className="w-8 h-8 text-emerald-500" />
                <div>
                  <div className="text-sm font-medium text-muted-foreground">
                    Air Quality
                  </div>
                  <div className="text-2xl font-bold">Good</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 p-6 bg-gray-50 dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700">
        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white mb-6">
          <Plus className="w-4 h-4 mr-2" />
          Add New Plant
        </Button>

        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg dark:text-white">Plant List</h3>
          <Button variant="link" className="text-emerald-600 p-0">
            see all
          </Button>
        </div>

        <ScrollArea className="h-[calc(100vh-250px)]">
          <div className="space-y-4 pr-4">
            {[
              {
                name: 'Aloevera',
                species: 'Aloe perfoliata vera',
                progress: 80,
              },
              {
                name: 'Tomatoes',
                species: 'Solanum lycopersicum',
                progress: 60,
              },
              {
                name: 'Janda Bolong',
                species: "Adanson's monstera",
                progress: 40,
              },
              {
                name: 'Snake Plant',
                species: 'Sansevieria trifasciata',
                progress: 90,
              },
              { name: 'Peace Lily', species: 'Spathiphyllum', progress: 75 },
              {
                name: 'Spider Plant',
                species: 'Chlorophytum comosum',
                progress: 85,
              },
            ].map(plant => (
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
                    <span className="font-medium text-emerald-600">
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
    </div>
  );
}
