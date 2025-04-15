'use client';
import Link from 'next/link';
import SalesSummary from '@/components/SalesSummary';

export default function AdminDashboard() {
  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold text-white">Admin Dashboard</h2>
        <nav className="space-x-6">
          <Link href="/dashboard/admin" className="text-blue-500 hover:text-blue-700 transition duration-300">
            Dashboard
          </Link>
 
          <Link href="/dashboard/user" className="text-blue-500 hover:text-blue-700 transition duration-300">
            User View
          </Link>
        </nav>
      </div>

      <div className="bg-gray-800 shadow-lg rounded-xl p-6 text-white">
        <SalesSummary />
      </div>
    </div>
  );
}
