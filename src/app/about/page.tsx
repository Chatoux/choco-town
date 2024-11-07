import React from 'react';
import Header from '../components/Header';
import Image from 'next/image';

export default function About() {
  return (
    <div>
      <Header />
      <main className="min-h-screen px-6 py-12">
        <section className="text-center">
          <h1 className="text-3xl font-bold text-[#5a3d2b]">About Us</h1>
          <p className="text-[#5a3d2b] mt-4">At Choco Town, we are passionate about creating the finest chocolates.</p>
          <Image src="/about-chocolate.jpg" alt="Our Chocolate Making" width={800} height={500} />
        </section>
      </main>
    </div>
  );
}