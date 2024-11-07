import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#5a3d2b] text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-2xl font-bold hover:text-[#d1835a]">Choco Town</a>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/about">
              <a className="hover:text-[#d1835a]">About</a>
            </Link>
            <Link href="/services">
              <a className="hover:text-[#d1835a]">Services</a>
            </Link>
            <Link href="/contact">
              <a className="hover:text-[#d1835a]">Contact</a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}