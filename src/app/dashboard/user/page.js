'use client';
import Link from 'next/link';
import ProductForm from '@/components/ProductForm';
import InventoryForm from '@/components/InventoryForm';
import InventoryTable from '@/components/InventoryTable';
import { useState, useCallback } from 'react';

export default function UserDashboard() {
  const [refreshKey, setRefreshKey] = useState(0);

  const refreshInventory = useCallback(() => {
    setRefreshKey((prev) => prev + 1);
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">User Dashboard</h2>
        <nav className="space-x-4">
          <Link href="/dashboard/user" className="text-blue-600 hover:underline">
            Dashboard
          </Link>
          <Link href="/dashboard/admin" className="text-blue-600 hover:underline">
            Admin View
          </Link>
        </nav>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <ProductForm />
        <InventoryForm onSubmitSuccess={refreshInventory} />
      </div>

      <div className="bg-gray-700 shadow-md rounded-xl p-4">
        <InventoryTable refreshKey={refreshKey} />
      </div>
    </div>
  );
}
