// app/components/Common/Navbar.tsx
'use client';

import { Menu, Bell, User } from 'lucide-react';

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <nav className="bg-white shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                onClick={onMenuClick}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Bell className="h-6 w-6" />
            </button>
            <div className="relative">
              <button className="flex items-center gap-2 p-2 text-gray-400 hover:text-gray-500">
                <User className="h-6 w-6" />
                <span className="hidden md:block">User</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}