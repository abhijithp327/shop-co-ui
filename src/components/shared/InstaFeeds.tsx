import React, { useState } from 'react';
import Image01 from '@/assets/images/insta01.png';
import Image02 from '@/assets/images/insta02.png';
import Image03 from '@/assets/images/insta03.png';
import Image04 from '@/assets/images/insta04.png';
import Image05 from '@/assets/images/insta05.png';
import Image06 from '@/assets/images/insta06.png';

const InstagramFeeds = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Follow Products And Discounts On Instagram
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-12">
        {[Image01, Image02, Image03, Image04, Image05, Image06].map((item, index) => (
          <div key={index} className="aspect-square bg-gray-200 overflow-hidden">
            <img 
              src={item} 
              alt={`Product ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      <h2 className="text-2xl font-semibold text-center mb-6">
        Or Subscribe To The Newsletter
      </h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-stretch gap-4 max-w-2xl mx-auto">
        <input
          type="email"
          placeholder="Email Address..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-black text-white font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default InstagramFeeds;