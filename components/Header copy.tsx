import React from 'react'
import { Button } from "@/components/ui/button";
import { User } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-4 px-6 md:px-12 flex items-center justify-between border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <span className="text-2xl md:text-3xl font-bold tracking-tight text-black">
            STAYVERZ
          </span>
          <span className="text-xs md:text-sm font-medium text-orange-600 tracking-wider">
            STAY WITH US
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-1.5">
            <User className="h-4 w-4" />
            Login
          </Button>
          <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
            Sign Up
          </Button>
        </div>
      </header>
  )
}

export default Header