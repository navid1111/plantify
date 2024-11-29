import { Button } from '@/components/ui/button';
import {
  Droplets,
  FileText,
  Home,
  LineChart,
  Settings,
  ShoppingBag,
  User,
} from 'lucide-react';

export function Sidebar() {
  return (
    <div className="w-64 p-6 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 bg-spring-soge rounded-lg flex items-center justify-center">
          <Droplets className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-semibold dark:text-white">asplant.</span>
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
  );
}
