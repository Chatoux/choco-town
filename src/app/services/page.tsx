import React from 'react';
import Header from '../components/Header';
import Image from 'next/image';

export default function Services() {
  return (
    <div>
      <Header />
      <main className="min-h-screen px-6 py-12">
        <section className="text-center">
          <h1 className="text-3xl font-bold text-[#5a3d2b]">Our Services</h1>
          <p className="text-[#5a3d2b] mt-4">Explore a variety of chocolate services and personalized gifts.</p>
          <Image src="/services-chocolate.jpg" alt="Chocolate Services" width={800} height={500} />
        </section>
      </main>
    </div>
  );
}