'use client';
import Link from 'next/link';
import ProductForm from '@/components/ProductForm';
import InventoryForm from '@/components/InventoryForm';
import InventoryTable from '@/components/InventoryTable';

export default function UserDashboard() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">User Dashboard</h2>
        <nav className="space-x-4">
          <Link href="/dashboard/user" className="text-blue-600 hover:underline">
            Dashboard
          </Link>
          <Link href="/products" className="text-blue-600 hover:underline">
            Products
          </Link>
          <Link href="/inventory" className="text-blue-600 hover:underline">
            Inventory
          </Link>
          <Link href="/dashboard/admin" className="text-blue-600 hover:underline">
            Admin View
          </Link>
        </nav>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <ProductForm />
        <InventoryForm />
      </div>

      <div className= "bg-gray-700 shadow-md rounded-xl p-4">
        <InventoryTable />
      </div>
    </div>
  );
}
