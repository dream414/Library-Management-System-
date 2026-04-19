import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      
      {/* Navbar */}
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Sidebar */}
        <Sidebar />

        {/* Page Content - Full Height with Scrolling */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-gradient-to-br from-black via-gray-900 to-purple-900">
          {children}
        </main>

      </div>

    </div>
  );
}