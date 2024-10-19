import React from 'react';
import imageUrl from '../../assets/images/ban.png';

const SeeCollection: React.FC = () => {
    return (
        <div className="container mx-auto px-4">
        <div className="flex justify-center items-center my-4 sm:my-8">
            <div
                className="relative overflow-hidden bg-white w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-lg shadow-md"
            >
                {/* Background Image */}
                <img
                    src={imageUrl}
                    alt="Collection"
                    className="object-cover w-full h-full"
                />

                {/* Overlay Content */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10">
                    <button className="bg-white text-black font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200">
                        See Collection
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SeeCollection;
