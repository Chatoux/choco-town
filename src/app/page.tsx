import React from 'react';
import Image from 'next/image';
import Header from './components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="min-h-screen px-6 py-12 bg-[#f5e7d1]">
        <section className="hero bg-[#f5e7d1] flex justify-center items-center">
          <div className="text-center">
            <Image src="/chocolate-hero.jpg" alt="Delicious Chocolate" width={800} height={500} />
            <h1 className="text-3xl font-bold text-[#5a3d2b] mt-6">Welcome to Choco Town!</h1>
            <p className="text-[#5a3d2b] mt-4">Discover an exquisite range of chocolates crafted with love and perfection.</p>
            <button className="mt-6 px-4 py-2 bg-[#d1835a] text-white font-bold rounded hover:bg-[#b26848]">
              Explore Now
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}