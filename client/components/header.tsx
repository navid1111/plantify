import { Bell, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  return (
    <div className="flex justify-between items-center p-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div>
        <h1 className="text-3xl font-bold mb-1 text-gray-800 dark:text-white">Welcome Back, Sumarti!</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">Saturday, 27 Jul 2022</p>
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
  )
}

