import React from 'react';
import Header from '../components/Header';

export default function Contact() {
  return (
    <div>
      <Header />
      <main className="min-h-screen px-6 py-12">
        <section className="text-center">
          <h1 className="text-3xl font-bold text-[#5a3d2b]">Contact Us</h1>
          <p className="text-[#5a3d2b] mt-4">Get in touch with us for more information.</p>
          <form className="mt-6">
            <textarea rows={4} className="border rounded w-full px-3 py-2 mt-2" placeholder="Your message..." />
            <button className="mt-4 px-4 py-2 bg-[#d1835a] text-white font-bold rounded hover:bg-[#b26848]">
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}