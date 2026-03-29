import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import { useState, useCallback } from 'react';

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = useCallback(() => setSidebarOpen(true), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar Drawer (fixed, off-screen when closed) */}
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      {/* Main content — always full width since sidebar is fixed overlay */}
      <div className="flex flex-col min-h-screen">
        <Navbar onMenuClick={openSidebar} />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
