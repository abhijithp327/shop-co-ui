import React from 'react';
import Brand01 from '@/assets/images/brand01.png';
import Brand02 from '@/assets/images/brand02.png';
import Brand03 from '@/assets/images/brand03.png';
import Brand04 from '@/assets/images/brand04.png';

const brands = [
  { name: 'Gucci', imgUrl: Brand01 },
  { name: 'Zara', imgUrl: Brand02 },
  { name: 'Prada', imgUrl: Brand03 },
  { name: 'Versace', imgUrl: Brand04 },
  { name: 'Versace', imgUrl: Brand01 },
  // Add more brands as needed
];

const BrandListing: React.FC = () => {
  return (
    <div className="py-4">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {brands.map((brand, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={brand.imgUrl}
                alt={brand.name}
                className="w-full h-auto object-cover rounded-lg transition-transform transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandListing;
