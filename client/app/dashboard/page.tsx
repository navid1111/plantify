import { Dashboard } from '@/components/dashboard';
import { Header } from '@/components/header';
import { PlantList } from '@/components/plant-list';
import { Sidebar } from '@/components/sidebar';

export default function UserDashboard() {
  return (
    <div className="flex h-screen bg-[#F0F4F8] dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 flex overflow-hidden">
          <Dashboard />
          <PlantList />
        </div>
      </div>
    </div>
  );
}
