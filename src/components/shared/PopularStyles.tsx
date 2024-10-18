import React from 'react';

// Assuming these are the paths to your images
import Image01 from '@/assets/images/po1.png';
import Image02 from '@/assets/images/po2.png';
import Image03 from '@/assets/images/po3.png';
import Image04 from '@/assets/images/po4.png';
import Image05 from '@/assets/images/po5.png';



const PopularStyles = () => {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold mb-4">EXPLORE NEW AND POPULAR STYLES</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Main feature image */}
                <div className="col-span-1 md:col-span-2 lg:col-span-1 row-span-2">
                    <div className="relative h-full">
                        <img src={Image01} alt="Woman in brown dress" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 bg-white bg-opacity-75 p-2">
                            <p className="text-sm">Featured Style</p>
                        </div>
                    </div>
                </div>

                {/* Other grid items */}
                <div className="bg-gray-200 aspect-square">
                    <img src={Image02} alt="Man in black outfit" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200 aspect-square relative">
                    <img src={Image04} alt="Woman in white sweater" className="w-full h-full object-cover" />
                    <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 text-xs">
                        SALE
                    </div>
                </div>
                <div className="bg-gray-200 aspect-square">
                    <img src={Image03} alt="Woman in floral dress" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200 aspect-square">
                    <img src={Image05} alt="Man in black cardigan" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default PopularStyles;
