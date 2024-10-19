import React from 'react';
import Prd01 from "@/assets/images/prd1.png";
import Prd02 from "@/assets/images/prd2.png";
import Prd03 from "@/assets/images/prd3.png";
import Prd04 from "@/assets/images/prd4.png";

const TopSelling: React.FC = () => {

    const topSellingItems = [
        {
            name: 'Vertical Striped Shirt',
            price: 212,
            originalPrice: 232,
            discount: '20%',
            rating: 5.0,
            image: Prd01
        },
        {
            name: 'Courage Graphic T-shirt',
            price: 145,
            originalPrice: 200,
            discount: '10%',
            rating: 4.0,
            image: Prd02
        },
        {
            name: 'Loose Fit Bermuda Shorts',
            price: 80,
            originalPrice: 100,
            discount: '5%',
            rating: 3.0,
            image: Prd03
        },
        {
            name: 'Faded Skinny Jeans',
            price: 210,
            // originalPrice: 200,
            // discount: '3%',
            rating: 4.5,
            image: Prd04
        },
    ];

    return (
        <section className="top-selling px-4 py-10 bg-gray-50">
            <div className="container">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Top Selling</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {topSellingItems.map((item, index) => (
                        <div key={index} className="item p-4 rounded-lg">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-auto aspect-square rounded-lg object-cover"
                            />
                            <div className="mt-4">
                                <p className="text-lg font-medium">{item.name}</p>
                                <div className="flex items-center mt-2">
                                    <p className="text-xl font-bold">${item.price}</p>
                                    {item.originalPrice && (
                                        <p className="text-sm text-gray-500 line-through ml-2">
                                            ${item.originalPrice}
                                        </p>
                                    )}
                                    {item.discount && (
                                        <span className="ml-2 text-red-500 text-sm">{item.discount}</span>
                                    )}
                                </div>
                                <div className="flex items-center mt-2">
                                    <div className="flex text-yellow-400">
                                        {Array.from({ length: Math.floor(item.rating) }, (_, i) => (
                                            <svg
                                                key={i}
                                                className="w-5 h-5 fill-current"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 .288l2.833 8.718H24l-7.333 5.334 2.833 8.718L12 17.756l-7.333 5.334 2.833-8.718L0 9.006h9.167z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="ml-2 text-gray-500">{item.rating}/5</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800">
                        View All
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TopSelling;
