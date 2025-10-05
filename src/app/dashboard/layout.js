"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Courses", path: "/dashboard/courses" },
  { name: "Bookings", path: "/dashboard/bookings" },
];

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-[#f5f9f8]">
      {/* Sidebar */}
      <aside className="w-[240px] bg-white border-r border-gray-200 p-6">
        {/* Logo */}
        <div className="mb-10">
          <h1 className="text-xl font-bold text-green-600">🌿 OGRPFY</h1>
        </div>

        {/* Nav Items */}
        <nav className="flex flex-col gap-3">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={`py-2 px-4 rounded-lg ${
                pathname === item.path
                  ? "bg-green-100 text-green-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
