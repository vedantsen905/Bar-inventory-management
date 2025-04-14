import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gray-800 text-gray-200 min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 gap-16">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left text-white">
          Welcome to Bar Inventory Management
        </h1>
        <p className="text-lg text-center sm:text-left text-gray-400">
          Manage your bar  inventory efficiently and track daily sales in real-time.
        </p>

        <div className="flex gap-6 items-center flex-col sm:flex-row">
          <Link
            href="/dashboard/user"
            className="bg-blue-600 text-white rounded-full py-2 px-6 font-medium hover:bg-blue-700 transition-colors"
          >
            User Dashboard
          </Link>
          <Link
            href="/dashboard/admin"
            className="bg-green-600 text-white rounded-full py-2 px-6 font-medium hover:bg-green-700 transition-colors"
          >
            Admin Dashboard
          </Link>
        </div>

        <div className="mt-8 text-center sm:text-left">
           
        </div>
      </main>

      <footer className="flex gap-6 flex-wrap items-center justify-center mt-8 text-sm text-gray-400">
        <Link
          href="https://nextjs.org/learn"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </Link>
        <Link
          href="https://vercel.com/templates?framework=next.js"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore Templates
        </Link>
        <Link
          href="https://nextjs.org"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Next.js
        </Link>
      </footer>
    </div>
  );
}
