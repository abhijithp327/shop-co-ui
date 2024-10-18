import React from 'react';
import Casual from "@/assets/images/casual.png";
import Formal from "@/assets/images/formal.png";
import Party from "@/assets/images/party.png";
import Gym from "@/assets/images/gym.png";

interface DressStyle {
    name: string;
    image: string;
}

const BrowseStyle: React.FC = () => {
    const dressStyles: DressStyle[] = [
        { name: 'Casual', image: Casual },
        { name: 'Formal', image: Formal },
        { name: 'Party', image: Party },
        { name: 'Gym', image: Gym },
    ];

    return (
        <div className="bg-gray-100 py-10">
            <div className="container px-4">
                <div className="bg-white p-16 rounded-3xl shadow-lg">
                    <h2 className="text-center text-3xl font-bold mb-6">Browse by Dress Style</h2>
                    <div className="grid md:grid-cols-5 gap-4">
                        {dressStyles.map((style, index) => (
                            <div
                                key={index}
                                className={`relative rounded-2xl overflow-hidden  ${index === 0 || index === 3 ? 'md:col-span-2' : 'md:col-span-3'
                                    }`}
                                style={{ height: '290px' }}
                            >
                                <img
                                    src={style.image}
                                    alt={style.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                                    <span className="text-white text-xl font-bold">{style.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BrowseStyle;
